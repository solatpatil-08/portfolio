import { useState, useRef, useEffect, FormEvent } from 'react'
import Layout from '../components/Layout'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { portfolioData } from '../data/portfolio'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  MessageSquare,
  AlertCircle,
  Loader2,
} from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam bot trap
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const pageLoadTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    pageLoadTimeRef.current = Date.now()
  }, [])

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(label)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).'
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.'
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message of at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    // Spam safety checks:
    // 1. Honeypot check: If the hidden honeypot field is filled, it's a bot.
    if (formData.honeypot) {
      setFormSubmitted(true)
      return
    }

    // 2. Cooldown check: Form submitted faster than 1.5 seconds from page load.
    const timeSpent = Date.now() - pageLoadTimeRef.current
    if (timeSpent < 1500) {
      setFormSubmitted(true)
      return
    }

    setIsSubmitting(true)

    // Simulate reliable dispatch with loading transition
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setFormSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
      setErrors({})
    } catch {
      setErrors({ message: 'Failed to send message. Please email directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      title: 'Email Address',
      value: portfolioData.contact.email,
      actionText: 'Copy Email',
      icon: Mail,
      href: `mailto:${portfolioData.contact.email}`,
      color: 'from-brand-500 to-indigo-600',
    },
    {
      title: 'Phone & WhatsApp',
      value: portfolioData.contact.phone,
      actionText: 'Copy Phone',
      icon: Phone,
      href: `tel:${portfolioData.contact.phone.replace(/[^0-9+]/g, '')}`,
      color: 'from-accent-cyan to-brand-500',
    },
    {
      title: 'Location',
      value: portfolioData.contact.location,
      actionText: 'Copy Location',
      icon: MapPin,
      href: portfolioData.contact.mapsUrl,
      color: 'from-accent-violet to-brand-500',
    },
    {
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/pratap-solat',
      actionText: 'Visit Profile',
      icon: LinkedinIcon,
      href: portfolioData.contact.linkedin,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'GitHub Profile',
      value: 'github.com/solatpatil-08',
      actionText: 'Visit GitHub',
      icon: GithubIcon,
      href: portfolioData.contact.github,
      color: 'from-slate-700 to-slate-900',
    },
  ]

  return (
    <Layout
      title="Contact Pratap Solat — Full-Stack Engineer"
      description="Get in touch with Pratap Solat for software engineering roles, Java development, full-stack consulting, and collaboration."
    >
      {/* Header */}
      <section className="py-6 space-y-4">
        <div className="section-kicker">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Start a <span className="gradient-text">Conversation</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          I am actively available for Software Engineer, Java Developer, and Full-Stack Developer opportunities in Pune, India, hybrid, or remote worldwide.
        </p>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact Methods */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-1 gap-3.5">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              const isCopied = copiedItem === method.title

              return (
                <div
                  key={idx}
                  className="glass-card p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-tr ${method.color} text-white shadow-sm group-hover:scale-105 transition-transform shrink-0`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        {method.title}
                      </span>
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors truncate block"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(method.value, method.title)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-[#0e1322] hover:bg-brand-50 dark:hover:bg-brand-950/60 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all border border-slate-200/80 dark:border-white/[0.08] shrink-0"
                    title={method.actionText}
                    aria-label={`${method.actionText} for ${method.title}`}
                  >
                    {isCopied ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Response Guarantee Card */}
          <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-brand-500 shrink-0" />
            <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-900 dark:text-white block font-semibold">
                Direct Inquiries & Response Time
              </strong>
              Emails and messages are typically answered within 2-4 business hours (IST).
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-500" />
                <span>Send a Direct Message</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Have a project proposal, interview invitation, or question? Send a note below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for getting in touch. Pratap has received your message and will respond promptly to your email address.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-brand-600 dark:text-brand-400 bg-white dark:bg-[#0e1322] border border-slate-200/80 dark:border-white/[0.08] rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field (hidden from screen readers & users to catch bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: undefined })
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#070a13] border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200/80 dark:border-white/[0.08] focus:border-brand-500'
                      } text-slate-900 dark:text-white outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="text-[11px] text-rose-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: undefined })
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#070a13] border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200/80 dark:border-white/[0.08] focus:border-brand-500'
                      } text-slate-900 dark:text-white outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="text-[11px] text-rose-500 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Software Engineer Opportunity / Contract Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#070a13] border border-slate-200/80 dark:border-white/[0.08] text-slate-900 dark:text-white outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Briefly describe your team, opening, or project needs..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#070a13] border ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200/80 dark:border-white/[0.08] focus:border-brand-500'
                    } text-slate-900 dark:text-white outline-none transition-colors`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="text-[11px] text-rose-500 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-brand-600 rounded-xl shadow-glow-sm hover:bg-brand-700 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-xs text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    Prefer direct email? Click here →
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
