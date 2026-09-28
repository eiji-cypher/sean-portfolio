export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(9,107,144,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(9,107,144,0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div>
          <p
            className="text-mono text-accent text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            ⬡ Full-Stack Software Developer | Philippines
          </p>

          <h1
            className="text-display text-6xl md:text-8xl lg:text-9xl text-light leading-none mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            SEAN<br />
            <span className="text-accent">GARRETT</span><br />
            PAIT
          </h1>

          <div
            className="accent-line w-24 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          />

          <p
            className="text-light/70 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
          Full-stack software developer building production-ready web applications, custom desktop tools, and database architecture.
          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-ink font-medium text-sm uppercase tracking-widest hover:opacity-85 transition-opacity duration-200 rounded-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-light text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-200 rounded-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right: Visual Card */}
        <div
          className="flex justify-center items-center opacity-0 animate-fade-in w-full max-w-sm mx-auto lg:max-w-none mt-12 lg:mt-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <div className="relative">
            {/* Profile Picture */}
            <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl border-2 border-accent/30 bg-card flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent z-10 pointer-events-none" />
              <img 
                src="/media/profile.png" 
                alt="Profile Picture" 
                className="w-full h-full object-cover relative z-0"
              />
            </div>

            {/* Floating badges */}
            <div 
              className="absolute -top-4 -right-2 lg:-right-8 bg-card border border-border rounded-xl px-4 py-2 shadow-xl animate-float z-20"
            >
              <p className="text-mono text-xs text-muted">Stack</p>
              <p className="text-mono text-sm text-accent font-medium">Next.js · TypeScript</p>
            </div>
            <div 
              className="absolute -bottom-4 -left-2 lg:-left-8 bg-card border border-border rounded-xl px-4 py-2 shadow-xl animate-float z-20"
              style={{ animationDelay: '3s' }}
            >
              <p className="text-mono text-xs text-muted">Based in</p>
              <p className="text-mono text-sm text-light font-medium">Philippines 🇵🇭</p>
            </div>

            {/* Decorative dots */}
            <div className="hidden lg:flex absolute top-1/2 -right-16 flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-accent/40"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-mono text-xs text-muted uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
