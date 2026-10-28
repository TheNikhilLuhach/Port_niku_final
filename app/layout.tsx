import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikhil Kumar | Full Stack Developer & Cloud / Automation Engineer',
  description: 'Portfolio of Nikhil Kumar - Full Stack Developer, Python Developer, AWS Cloud & Workflow Automation Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
