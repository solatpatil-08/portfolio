import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, Sparkles, RotateCcw, X, Bot, User } from 'lucide-react'

type ChatRole = 'assistant' | 'user'

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
}

const welcomeMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Hi! I am Pratap’s portfolio assistant. You can ask me about his technical stack, engineering projects, availability, or how to get in touch.',
}

const starterPrompts = [
  'What technologies does Pratap use?',
  'Show me relevant projects',
  'Is Pratap available for work?',
  'How can I get in touch?',
]

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, isLoading])

  const clearChat = () => {
    setMessages([welcomeMessage])
    setError(null)
    setInput('')
    inputRef.current?.focus()
  }

  const sendMessage = async (value = input) => {
    const message = value.trim()

    if (!message || isLoading) {
      return
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: message,
    }
    const conversation = [...messages, userMessage]

    setMessages(conversation)
    setInput('')
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          history: conversation
            .filter((item) => item.id !== 'welcome')
            .slice(-6)
            .map(({ role, content }) => ({ role, content })),
        }),
      })

      const data = (await response.json()) as { reply?: string; error?: string }

      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'I could not answer that just now.')
      }

      const reply = data.reply

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: reply,
        },
      ])
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'I could not answer that just now. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void sendMessage()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          id="portfolio-chat"
          role="dialog"
          aria-modal="false"
          aria-labelledby="portfolio-chat-title"
          className="mb-3 flex h-[min(38rem,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[24rem] sm:max-w-[25rem] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-white/[0.1] dark:bg-[#0c111f]/95 animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 px-4 py-3.5 dark:border-white/[0.08] bg-slate-50/70 dark:bg-slate-900/50">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h2
                  id="portfolio-chat-title"
                  className="text-sm font-bold text-slate-900 dark:text-white"
                >
                  Ask about Pratap
                </h2>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Portfolio AI Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-brand-400"
                aria-label="Clear chat"
                title="Clear conversation"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 space-y-3.5 overflow-y-auto px-3.5 py-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    message.role === 'user'
                      ? 'rounded-br-sm bg-brand-600 text-white font-medium shadow-sm'
                      : 'rounded-bl-sm border border-slate-200/80 bg-slate-100/80 text-slate-800 dark:border-white/[0.08] dark:bg-[#13192c] dark:text-slate-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {/* Thinking / Typing state */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-slate-200/80 bg-slate-100/80 px-3.5 py-2.5 dark:border-white/[0.08] dark:bg-[#13192c]">
                  <span className="sr-only">Assistant is answering</span>
                  <span className="flex items-center gap-1" aria-hidden="true">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500" />
                  </span>
                </div>
              </div>
            )}

            {/* Starter Prompts */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-2 space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Suggested Questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {starterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => void sendMessage(prompt)}
                      className="rounded-xl border border-brand-200/80 bg-brand-50/70 p-2.5 text-left text-[11px] font-medium text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-900/60 dark:bg-brand-950/40 dark:text-brand-300 dark:hover:bg-brand-900/50"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <p
                role="alert"
                className="rounded-xl border border-amber-300/70 bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800 dark:border-amber-800/70 dark:bg-amber-950/40 dark:text-amber-200"
              >
                {error} You can contact Pratap directly via the contact page.
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200/80 p-3 dark:border-white/[0.08] bg-slate-50/50 dark:bg-slate-900/30"
          >
            <label htmlFor="portfolio-chat-input" className="sr-only">
              Ask a question about Pratap&apos;s portfolio
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white p-1.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 dark:border-white/[0.08] dark:bg-[#080c18]">
              <input
                ref={inputRef}
                id="portfolio-chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                maxLength={800}
                placeholder="Ask about skills, work, availability…"
                className="min-w-0 flex-1 bg-transparent px-2.5 py-1.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-1.5 text-[9px] text-center text-slate-400 dark:text-slate-500">
              Answers are grounded strictly in verified portfolio facts.
            </p>
          </form>
        </section>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="portfolio-chat"
        className="ml-auto flex h-12 items-center gap-2.5 rounded-full bg-brand-600 px-4 text-xs sm:text-sm font-bold text-white shadow-lg shadow-brand-900/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
      >
        {isOpen ? (
          <X className="h-4 w-4" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        )}
        <span>{isOpen ? 'Close' : 'Ask AI'}</span>
      </button>
    </div>
  )
}
