'use client'
import { useState } from 'react'

const experiences = [
  {
    role: 'Independent Web Developer',
    company: '2025 — Present',
    period: '2025 — Present',
    highlights: [
      'Built and deployed full-stack web applications using Python (Flask) and Next.js, managing serverless infrastructure on Vercel.',
      'Designed custom frontend interfaces using Tailwind CSS and TypeScript, focusing on responsive layouts and client-side routing.',
      'Developed lightweight, standalone web platforms and landing pages with vanilla JavaScript and semantic HTML.',
    ],
  },
  {
    role: 'Student / Software Developer — 2nd Year',
    company: 'Academic Projects',
    period: '2025',
    highlights: [
      'Co-engineered "DMC Reserve", a desktop resource management application in C# and DevExpress, implementing custom UI controls and real-time database queries.',
      'Developed a Java desktop application integrated with Jaspersoft Studio to automate dataset processing and print itemized PDF transaction receipts.',
    ],
  },
  {
    role: 'Student / Software Developer — 1st Year',
    company: 'Academic Projects',
    period: '2024',
    highlights: [
      'Authored a standalone Java desktop application using raw Swing/AWT layout managers without drag-and-drop visual builders, enforcing strict Object-Oriented Design patterns.',
    ],
  },
]

const certifications = [
  {
    name: 'Gemini Certified Educator',
    issuer: 'Google',
    year: '2025',
    credential: 'GEMINI-EDU',
    image: '/media/Gemini.certified.educator.jpg',
    icon: '◈',
  },
  {
    name: 'Gemini Certified Student',
    issuer: 'Google',
    year: '2025',
    credential: 'GEMINI-STU',
    image: '/media/Gemini.certified.student.jpg',
    icon: '◈',
  },
]

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  return (
    <section id="experience" className="section-pad bg-surface">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-mono text-accent text-xs uppercase tracking-[0.3em] mb-3">04 / Background</p>
          <h2 className="text-display text-5xl md:text-7xl text-light">EXPERIENCE &<br />CERTS</h2>
          <div className="accent-line w-16 mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Experience Timeline */}
          <div>
            <h3 className="text-display text-2xl text-muted tracking-widest mb-10 uppercase">Work History</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div key={i} className="pl-8 relative">
                    {/* Dot */}
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent glow-dot" />

                    <p className="text-mono text-xs text-accent uppercase tracking-widest mb-1">{exp.period}</p>
                    <h4 className="text-display text-xl text-light font-semibold mb-1">{exp.role}</h4>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-mono text-xs text-light/50 flex items-start gap-2">
                          <span className="text-accent mt-0.5">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-display text-2xl text-muted tracking-widest mb-10 uppercase">Certifications</h3>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="card-base p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-x-1 group cursor-pointer"
                  onClick={() => cert.image && setSelectedCert(cert.image)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors overflow-hidden relative">
                      <div className="absolute inset-0 bg-ink/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <span className="text-light text-xs">⛶</span>
                      </div>
                      {cert.image ? (
                        <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-accent">{cert.icon}</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-light font-medium mb-0.5">{cert.name}</h4>
                          <p className="text-mono text-xs text-muted">{cert.issuer}</p>
                        </div>
                        <span className="text-mono text-xs text-accent flex-shrink-0">{cert.year}</span>
                      </div>
                      <p className="text-mono text-[10px] text-border mt-2 tracking-widest">{cert.credential}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Placeholder removed */}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal Viewer */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-full flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-light hover:text-accent transition-colors text-sm uppercase tracking-widest"
              onClick={() => setSelectedCert(null)}
            >
              ✕ Close
            </button>
            <img 
              src={selectedCert} 
              alt="Certificate Full View" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-border shadow-2xl" 
            />
          </div>
        </div>
      )}
    </section>
  )
}
