import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/motion/MotionPrimitives';

export const metadata: Metadata = {
  title: 'Nikhil Kumar — Python Developer | Backend Developer | Cloud & AI Enthusiast',
  description: 'Portfolio of Nikhil Kumar — Python Developer, Backend Systems, Cloud & AI. B.Tech Computer Science & Engineering at Amity University Rajasthan | Class of 2027.',
  keywords: ['Nikhil Kumar', 'Python Developer', 'Backend Developer', 'AWS', 'Docker', 'DevOps', 'MediaPipe', 'Generative AI', 'Amity University'],
  authors: [{ name: 'Nikhil Kumar', url: 'https://github.com/TheNikhilLuhach' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#090B10',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#090B10] text-[#D6D3CC] antialiased selection:bg-[#C6A15B]/25 selection:text-[#DEC186] flex flex-col min-h-screen">
        <ScrollProgressBar />
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
