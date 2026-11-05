'use client';

import Link from 'next/link';
import { ArrowUp, FileDown, FileCode2, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';

const directory = [
  { label: 'Overview', href: '/', num: '01' },
  { label: 'About & Philosophy', href: '/about', num: '02' },
  { label: 'Engineering Case Studies', href: '/projects', num: '03' },
  { label: 'Technical Competencies', href: '/skills', num: '04' },
  { label: 'Professional Journey', href: '/experience', num: '05' },
  { label: 'Direct Communication', href: '/contact', num: '06' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090B10] text-[#D6D3CC] pt-20 pb-12 border-t border-[#7792B5]/20 relative overflow-hidden midnight-grid-overlay">
      {/* Background Lighting */}
      <div className="cinematic-lighting lighting-blue w-[500px] h-[500px] bottom-0 left-[-100px]" />
      <div className="cinematic-lighting lighting-burgundy w-[450px] h-[450px] bottom-0 right-[-80px]" />

      <Container>
        {/* Top Editorial Banner */}
        <div className="pb-16 mb-16 border-b border-[#7792B5]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">
              Closing Statement &amp; Colophon
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#EBE8E1] tracking-tight leading-[1.1]">
              Architected for precision, built for scale.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-xs font-mono tracking-wider text-[#C6A15B] hover:text-[#DEC186] transition-colors py-2 px-4 rounded-[2px] border border-[#C6A15B]/30 bg-[#151C2B] hover:bg-[#151C2B]/80 cursor-pointer"
            >
              <span>Back to Apex</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 relative z-10">
          
          {/* Identity & Scope (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[2px] border border-[#C6A15B]/50 bg-[#090B10] flex items-center justify-center font-serif text-xs font-semibold text-[#C6A15B]">
                NK
              </div>
              <span className="font-serif text-lg font-bold text-[#EBE8E1] tracking-tight">
                Nikhil Kumar
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#858A96] leading-relaxed max-w-sm">
              Computer Science undergraduate at Amity University Rajasthan (Class of 2027) building reliable Python services, AWS cloud infrastructure, and intelligent AI applications.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a
                href="https://github.com/TheNikhilLuhach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[2px] border border-[#7792B5]/20 text-[#7792B5] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 bg-[#151C2B] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-kumar-692116203"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[2px] border border-[#7792B5]/20 text-[#7792B5] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 bg-[#151C2B] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nikuluhach.86209@gmail.com"
                className="p-2.5 rounded-[2px] border border-[#7792B5]/20 text-[#7792B5] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 bg-[#151C2B] transition-all"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sitemap (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B] mb-4">
              Editorial Index
            </div>
            <ul className="space-y-2 text-xs">
              {directory.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#858A96] hover:text-[#C6A15B] transition-colors inline-flex items-center gap-2 group py-0.5"
                  >
                    <span className="font-mono text-[10px] text-[#7792B5]">{item.num}</span>
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A15B]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum Vitae Files (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">
              Documentation Assets
            </div>
            <div className="space-y-2.5">
              <a
                href="/resume/Nikhil_Kumar_Resume.pdf"
                download="Nikhil_Kumar_Resume.pdf"
                className="w-full btn-luxury-gold text-xs py-2 px-3 justify-between"
              >
                <span className="flex items-center gap-2">
                  <FileDown className="w-3.5 h-3.5 text-[#090B10]" />
                  <span>Resume (PDF)</span>
                </span>
                <span className="font-mono text-[10px] opacity-80">2027</span>
              </a>
              <a
                href="/resume/resume.tex"
                download="Nikhil_Kumar_Resume.tex"
                className="w-full btn-luxury-secondary text-xs py-2 px-3 justify-between"
              >
                <span className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span className="font-mono">resume.tex</span>
                </span>
                <span className="font-mono text-[10px] text-[#7792B5]">LaTeX</span>
              </a>
            </div>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#858A96] block">
                Base: Jaipur, Rajasthan
              </span>
              <span className="text-[11px] font-mono text-[#C6A15B] block">
                Open to Engineering Roles
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-[#7792B5]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#858A96] relative z-10">
          <div>
            &copy; {new Date().getFullYear()} Nikhil Kumar. Midnight Luxury Editorial Edition.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#7792B5]">Next.js 14 App Router</span>
            <span>&bull;</span>
            <span className="text-[#C6A15B]">TypeScript</span>
            <span>&bull;</span>
            <span className="text-[#8C3F4D]">Framer Motion</span>
          </div>
        </div>

      </Container>
    </footer>
  );
}
