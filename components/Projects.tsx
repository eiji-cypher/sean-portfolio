type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  status: 'Live' | 'In Progress' | 'Archived'
  year: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Regional Blog',
    description: 'A dynamic regional blog built using Python and Flask, fully deployed on Vercel. Explores full-stack web architecture with custom backend integrations.',
    tags: ['Python', 'Flask', 'Vercel', 'HTML/CSS'],
    status: 'Live',
    year: '2026',
    featured: true,
    liveUrl: 'https://region5.vercel.app',
  },
  {
    id: 2,
    title: 'DMC Reserve',
    description: 'A comprehensive reservation system for school rooms and equipment, co-developed to streamline academic resource management.',
    tags: ['C#', 'DevExpress'],
    status: 'Live',
    year: '2025',
  },
  {
    id: 3,
    title: 'Office Manager',
    description: 'A Java desktop application designed with Scenebuilder, featuring integrated Jaspersoft functionality for automated receipt printing.',
    tags: ['Java', 'Scenebuilder', 'Jaspersoft'],
    status: 'Live',
    year: '2025',
  },
  {
    id: 4,
    title: 'Local Restaurant Site',
    description: 'A responsive, static promotional website tailored for a local restaurant business, built entirely from scratch without frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    year: '2025',
  },
  {
    id: 5,
    title: 'Disaster Management',
    description: 'An emergency management desktop application built with purely hardcoded Java UI, focusing on core object-oriented principles.',
    tags: ['Java', 'OOP'],
    status: 'Archived',
    year: '2024',
  },
]

const statusColors: Record<Project['status'], string> = {
  Live: 'text-accent border-accent/30 bg-accent/10',
  'In Progress': 'text-[#b026ff] border-[#b026ff]/30 bg-[#b026ff]/10',
  Archived: 'text-muted border-border bg-surface',
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad bg-ink relative">
      {/* Bg accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="mb-16">
          <p className="text-mono text-accent text-xs uppercase tracking-[0.3em] mb-3">03 / Work</p>
          <h2 className="text-display text-5xl md:text-7xl text-light">PROJECTS</h2>
          <div className="accent-line w-16 mt-4" />
          <p className="text-light/50 text-sm mt-4 max-w-lg">
            A collection of web applications, static sites, and desktop software built throughout my academic and independent development journey.
          </p>
        </div>

        {/* Featured Project */}
        {featured && (
          <div className="card-base p-8 md:p-12 mb-8 border-accent/20 hover:border-accent/40 transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
            <div className="absolute top-6 right-6 text-mono text-xs text-accent border border-accent/30 px-3 py-1 rounded-full">
              ★ Featured
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-mono text-xs text-muted uppercase tracking-widest mb-2">{featured.year}</p>
                <h3 className="text-display text-4xl md:text-5xl text-light mb-4">{featured.title}</h3>
                <p className="text-light/60 leading-relaxed mb-6">{featured.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {featured.liveUrl && (
                <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className="text-mono text-sm text-accent hover:underline flex items-center gap-2">
                      ↗ Live Demo
                    </a>
                  )}
                  {featured.githubUrl && (
                <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer" className="text-mono text-sm text-muted hover:text-light flex items-center gap-2">
                      ⌥ GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Project Preview Placeholder */}
              <div className="h-52 bg-surface rounded-xl border border-border flex items-center justify-center">
                <p className="text-mono text-xs text-muted">Project Screenshot</p>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className="card-base p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-mono text-xs text-muted">{project.year}</span>
                <span className={`text-mono text-xs px-2 py-0.5 rounded-full border ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-display text-2xl text-light mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-light/50 text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-mono text-xs text-accent hover:underline">↗ Demo</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-mono text-xs text-muted hover:text-light">⌥ Code</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
