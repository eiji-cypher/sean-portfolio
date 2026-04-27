# Sean Garrett C. Pait — Portfolio

A sleek, cyberpunk-inspired IT portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Dark Neon Theme)
- **Fonts**: Orbitron (display), Space Grotesk (body), JetBrains Mono (code)

## Project Structure

```
sean-portfolio/
├── app/
│   ├── globals.css       # Global styles, CSS variables, custom utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page (assembles all sections)
├── components/
│   ├── CursorTrail.tsx   # Interactive neon cursor canvas overlay
│   ├── Navbar.tsx        # Sticky nav with scroll effect + mobile menu
│   ├── Hero.tsx          # Hero / About Me section
│   ├── Skills.tsx        # Tech stack with skill bars
│   ├── Projects.tsx      # Projects grid with featured project
│   ├── Experience.tsx    # Work history timeline + certifications
│   └── Contact.tsx       # Contact form + links + footer
├── public/               # Static assets (add your photo here)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

- **Cyberpunk Aesthetic**: Deep purple and neon green color palette with an interactive glowing cursor trail.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Functional Contact Form**: Integrated with Formspree for seamless, AJAX-based background email delivery.
- **Interactive Elements**: Floating badges, smooth scroll animations, and interactive modal image viewers for certificates.
- **Dynamic Showcase**: Dedicated sections highlighting full-stack web apps, static sites, and desktop software (Java/C#).

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.
