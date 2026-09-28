const stackGroups = [
  {
    category: 'Frontend',
    icon: '◈',
    items: ['TypeScript', 'JavaScript (ES6+)', 'React 19', 'Next.js (App Router)', 'Tailwind CSS', 'DevExpress UI'],
  },
  {
    category: 'Backend & Systems',
    icon: '◇',
    items: ['PHP', 'Laravel', 'C#', '.NET Framework / WinForms', 'Python', 'Flask', 'Java'],
  },
  {
    category: 'Database & ORM',
    icon: '◆',
    items: ['SQLite', 'MySQL', 'PostgreSQL', 'Eloquent ORM'],
  },
  {
    category: 'Tools & Environment',
    icon: '◉',
    items: ['Vercel', 'Git / GitHub', 'Visual Studio Code', 'Visual Studio 2022', 'Electron', 'WinForms'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface relative">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-mono text-accent text-xs uppercase tracking-[0.3em] mb-3">02 / Skills</p>
          <h2 className="text-display text-5xl md:text-7xl text-light font-bold">TECH STACK</h2>
          <div className="accent-line w-16 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackGroups.map((group) => (
            <div key={group.category} className="card-base p-6 hover:border-accent/40 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent">{group.icon}</span>
                <h3 className="text-display text-lg text-light font-semibold tracking-wide">{group.category}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                    <span className="text-mono text-xs text-light/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
