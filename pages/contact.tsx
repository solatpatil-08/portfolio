import Layout from '../components/Layout'
import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(label)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const contactMethods = [
    {
      title: 'Email Address',
      value: 'solatpratap@gmail.com',
      actionText: 'Copy Email',
      icon: Mail,
      href: 'mailto:solatpratap@gmail.com',
      color: 'from-brand-500 to-indigo-600'
    },
    {
      title: 'Phone & WhatsApp',
      value: '+91-9022961780',
      actionText: 'Copy Phone',
      icon: Phone,
      href: 'tel:+919022961780',
      color: 'from-accent-cyan to-brand-500'
    },
    {
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      actionText: 'Copy Location',
      icon: MapPin,
      href: 'https://maps.google.com/?q=Pune,India',
      color: 'from-accent-violet to-brand-500'
    },
    {
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/pratap-solat',
      actionText: 'Visit Profile',
      icon: LinkedinIcon,
      href: 'https://linkedin.com/in/pratap-solat/',
      color: 'from-blue-600 to-indigo-600'
    },
  ]

  return (
    <Layout>
      {/* Header */}
      <section className="py-6 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-900 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let's Start a <span className="gradient-text">Conversation</span>
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
          I am actively seeking Software Engineer and Java Developer roles in Pune or remote. Whether you have a project inquiry or a job opportunity, feel free to reach out!
        </p>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Methods */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="grid grid-cols-1 gap-4">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              const isCopied = copiedItem === method.title
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${method.color} text-white shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">{method.title}</span>
                      <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                        {method.value}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(method.value, method.title)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-brand-50 dark:hover:bg-brand-900/50 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all border border-slate-200 dark:border-slate-700/80"
                    title={method.actionText}
                  >
                    {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Response Guarantee Card */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
            <Clock className="w-5 h-5 text-brand-500 shrink-0" />
            <div className="text-xs text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-white block font-semibold">Fast Response Time</strong>
              Usually responds within 2-4 hours during business hours IST.
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-500" />
                <span>Send a Direct Message</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below to reach my inbox directly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-brand-600 dark:text-brand-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Job Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan rounded-xl shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </section>
    </Layout>
  )
}
