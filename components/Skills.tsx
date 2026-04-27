const skillGroups = [
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend & Desktop',
    icon: '◇',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'C#', level: 85 },
      { name: 'DevExpress', level: 70 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '◆',
    skills: [
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Visual Studio', level: 80 },
      { name: 'Vercel', level: 85 },
      { name: 'Canva', level: 90 },
    ],
  },
]

const techBadges = [
  'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Tailwind CSS', 'Python', 'Flask', 'C#', 'DevExpress',
  'GitHub', 'VS Code', 'Visual Studio', 'Vercel', 'Canva',
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-mono text-accent text-xs uppercase tracking-[0.3em] mb-3">02 / Skills</p>
          <h2 className="text-display text-5xl md:text-7xl text-light">TECH STACK</h2>
          <div className="accent-line w-16 mt-4" />
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.category} className="card-base p-8 hover:border-accent/40 transition-colors duration-300 group">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-accent text-xl">{group.icon}</span>
                <h3 className="text-display text-2xl text-light tracking-wider">{group.category}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-mono text-sm text-light/80">{skill.name}</span>
                      <span className="text-mono text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badge Cloud */}
        <div className="card-base p-8">
          <p className="text-mono text-xs text-muted uppercase tracking-widest mb-6">All Technologies</p>
          <div className="flex flex-wrap gap-3">
            {techBadges.map((tech) => (
              <span key={tech} className="tag-pill hover:bg-accent/10 hover:border-accent/50 transition-colors duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
