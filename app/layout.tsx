import type { Metadata } from 'next'
import './globals.css'
import CursorTrail from '../components/CursorTrail'

export const metadata: Metadata = {
  title: 'Sean Garrett C. Pait — Full-Stack Developer',
  description: 'Portfolio of Sean Garrett C. Pait, Full-Stack Web Developer specializing in modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}
