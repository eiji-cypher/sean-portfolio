'use client'
import { FormEvent, useState } from 'react'

const contacts = [
  {
    label: 'Email',
    value: 'seangarrett29@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    value: 'github.com/eiji-cypher',
    href: 'https://github.com/eiji-cypher',
    icon: '⌥',
  },
  {
    label: 'Facebook',
    value: 'facebook.com/sgpait',
    href: 'https://facebook.com/sgpait',
    icon: 'f',
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset() // This instantly clears out all the inputs!
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 5000) // Revert button text after 5 seconds
      } else {
        alert('Oops! There was a problem submitting your form.')
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-pad bg-ink relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(9,107,144,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(9,107,144,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="mb-16">
          <p className="text-mono text-accent text-xs uppercase tracking-[0.3em] mb-3">05 / Contact</p>
          <h2 className="text-display text-5xl md:text-7xl text-light">LET'S BUILD<br />SOMETHING</h2>
          <div className="accent-line w-16 mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: CTA text + links */}
          <div>
            <p className="text-light/60 text-lg leading-relaxed mb-10 max-w-md">
              I'm open to full-time roles, freelance projects, and exciting collaborations. Have an idea? Let's make it real.
            </p>

            <div className="space-y-4">
              {contacts.map((c) => {
                const isLink = Boolean(c.href)
                const Element = isLink ? 'a' : 'div'
                return (
                  <Element
                    key={c.label}
                    {...(isLink ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-200">
                      <span className="text-accent text-sm">{c.icon}</span>
                    </div>
                    <div>
                      <p className="text-mono text-xs text-muted uppercase tracking-widest">{c.label}</p>
                      <p className="text-light group-hover:text-accent transition-colors text-sm">{c.value}</p>
                    </div>
                  </Element>
                )
              })}
            </div>
          </div>

          {/* Right: Message form */}
          <div className="card-base p-8">
            <h3 className="text-display text-2xl text-light mb-8 tracking-wider">SEND A MESSAGE</h3>

            <form action="https://formspree.io/f/xqewoveb" method="POST" onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-mono text-xs text-muted uppercase tracking-widest block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-light text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-mono text-xs text-muted uppercase tracking-widest block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-light text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-mono text-xs text-muted uppercase tracking-widest block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-light text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 bg-accent text-ink font-medium text-sm uppercase tracking-widest hover:bg-accent-2 transition-colors duration-200 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent! ✓' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mono text-xs text-muted">
            © 2026 Sean Garrett C. Pait. Built with Next.js, TypeScript, & Tailwind CSS.
          </p>
          <p className="text-mono text-xs text-muted">
            Designed with <span className="text-accent">♥</span> in the Philippines
          </p>
        </div>
      </div>
    </section>
  )
}
