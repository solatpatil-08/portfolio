import type { NextApiRequest, NextApiResponse } from 'next'
import { getPortfolioChatContext, getPortfolioFallbackResponse } from '../../data/portfolio'

const MAX_MESSAGE_LENGTH = 1_000
const MAX_HISTORY_MESSAGES = 6
const MAX_HISTORY_MESSAGE_LENGTH = 1_000
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 15
const MAX_TRACKED_IPS = 2_000

type ChatHistoryItem = {
  role: 'user' | 'assistant'
  content: string
}

type ValidatedChatRequest = {
  message: string
  history: ChatHistoryItem[]
}

type ChatApiResponse = {
  reply: string
  source: 'openai' | 'fallback'
}

type ErrorApiResponse = {
  error: string
  retryAfter?: number
}

type RateLimitEntry = {
  count: number
  windowStartedAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8kb',
    },
  },
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function getClientIp(request: NextApiRequest): string {
  const forwardedFor = request.headers['x-forwarded-for']
  const forwardedIp =
    typeof forwardedFor === 'string'
      ? forwardedFor.split(',')[0]?.trim()
      : Array.isArray(forwardedFor)
        ? forwardedFor[0]?.split(',')[0]?.trim()
        : undefined
  const realIp = request.headers['x-real-ip']
  const directIp = typeof realIp === 'string' ? realIp : Array.isArray(realIp) ? realIp[0] : undefined

  return forwardedIp || directIp || request.socket.remoteAddress || 'unknown'
}

function cleanUpRateLimitStore(now: number): void {
  for (const [ip, entry] of rateLimitStore) {
    if (now - entry.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(ip)
    }
  }

  while (rateLimitStore.size > MAX_TRACKED_IPS) {
    const iterator = rateLimitStore.keys().next()
    if (iterator.done) {
      break
    }
    rateLimitStore.delete(iterator.value)
  }
}

function consumeRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now()
  cleanUpRateLimitStore(now)

  const existingEntry = rateLimitStore.get(ip)
  if (!existingEntry || now - existingEntry.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStartedAt: now })
    return { allowed: true, retryAfter: 0 }
  }

  if (existingEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(
        1,
        Math.ceil((RATE_LIMIT_WINDOW_MS - (now - existingEntry.windowStartedAt)) / 1_000),
      ),
    }
  }

  existingEntry.count += 1
  return { allowed: true, retryAfter: 0 }
}

function validateChatRequest(body: unknown): { data?: ValidatedChatRequest; error?: string } {
  if (!isRecord(body)) {
    return { error: 'Request body must be a JSON object.' }
  }

  if (typeof body.message !== 'string') {
    return { error: 'Message must be a string.' }
  }

  const message = body.message.trim()
  if (!message) {
    return { error: 'Message cannot be empty.' }
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { error: 'Message must be ' + MAX_MESSAGE_LENGTH + ' characters or fewer.' }
  }

  const rawHistory = body.history
  if (rawHistory === undefined) {
    return { data: { message, history: [] } }
  }

  if (!Array.isArray(rawHistory)) {
    return { error: 'History must be an array when provided.' }
  }
  if (rawHistory.length > MAX_HISTORY_MESSAGES) {
    return { error: 'History can contain at most ' + MAX_HISTORY_MESSAGES + ' messages.' }
  }

  const history: ChatHistoryItem[] = []
  for (const item of rawHistory) {
    if (
      !isRecord(item) ||
      (item.role !== 'user' && item.role !== 'assistant') ||
      typeof item.content !== 'string'
    ) {
      return { error: 'Each history message needs a user or assistant role and text content.' }
    }

    const content = item.content.trim()
    if (!content || content.length > MAX_HISTORY_MESSAGE_LENGTH) {
      return {
        error: 'Each history message must be 1 to ' + MAX_HISTORY_MESSAGE_LENGTH + ' characters.',
      }
    }

    history.push({ role: item.role, content })
  }

  return { data: { message, history } }
}

async function getOpenAIReply(
  apiKey: string,
  message: string,
  history: ChatHistoryItem[],
): Promise<string | null> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)
  const model = process.env.OPENAI_MODEL?.trim() || 'gpt-4o-mini'

  const systemPrompt = [
    'You are the concise, professional portfolio assistant for Pratap Solat (Software Developer & Full-Stack Engineer).',
    'Strict rule: Use ONLY the verified facts in the portfolio context below.',
    'Do not invent companies, projects, credentials, experience, or performance claims.',
    'If asked something not covered in the context, politely state that you only have information regarding Pratap’s portfolio, skills, projects, and contact info, and invite them to reach out directly.',
    'Keep responses concise, welcoming, and directly relevant to recruiters and collaborators.',
    'Trusted Portfolio Context:\n---\n' + getPortfolioChatContext() + '\n---',
  ].join('\n\n')

  try {
    // Attempt standard /v1/chat/completions first
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        max_tokens: 350,
        messages: [
          { role: 'system', content: systemPrompt },
          ...history.map((item) => ({ role: item.role, content: item.content })),
          { role: 'user', content: message },
        ],
      }),
      signal: controller.signal,
    })

    if (openAIResponse.ok) {
      const data = (await openAIResponse.json()) as {
        choices?: Array<{ message?: { content?: string } }>
      }
      const reply = data?.choices?.[0]?.message?.content?.trim()
      if (reply) return reply
    }

    return null
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ChatApiResponse | ErrorApiResponse>,
): Promise<void> {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({ error: 'Method not allowed.' })
    return
  }

  const validated = validateChatRequest(request.body)
  if (!validated.data) {
    response.status(400).json({ error: validated.error || 'Invalid request.' })
    return
  }

  const rateLimit = consumeRateLimit(getClientIp(request))
  if (!rateLimit.allowed) {
    response.setHeader('Retry-After', String(rateLimit.retryAfter))
    response.status(429).json({
      error: 'Too many chat requests. Please try again in a few moments.',
      retryAfter: rateLimit.retryAfter,
    })
    return
  }

  const { history, message } = validated.data
  const apiKey = process.env.OPENAI_API_KEY?.trim()
  const openAIReply = apiKey ? await getOpenAIReply(apiKey, message, history) : null
  const reply = openAIReply || getPortfolioFallbackResponse(message)

  response.status(200).json({
    reply,
    source: openAIReply ? 'openai' : 'fallback',
  })
}
