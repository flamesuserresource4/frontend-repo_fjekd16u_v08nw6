import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_50%,rgba(34,197,94,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100 ring-1 ring-white/20 backdrop-blur">
            <Mail size={14} /> Let's connect
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-blue-100/80">Have an opportunity or a question? Send a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" required placeholder="Email" className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required placeholder="Message" rows="5" className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition">
            <Send size={16} /> Send Message
          </button>
          {status && <p className="text-sm text-emerald-400">{status}</p>}
        </form>

        <p className="mt-6 text-center text-sm text-blue-200/60">Or email me at your.email@example.com</p>
      </div>
    </section>
  )
}
