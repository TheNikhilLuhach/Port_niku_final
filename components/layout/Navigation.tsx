'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileDown, FileCode2, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './Container';

const links = [
  { label: 'Overview', href: '/', number: '01' },
  { label: 'About', href: '/about', number: '02' },
  { label: 'Case Studies', href: '/projects', number: '03' },
  { label: 'Competencies', href: '/skills', number: '04' },
  { label: 'Trajectory', href: '/experience', number: '05' },
  { label: 'Contact', href: '/contact', number: '06' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#151C2B]/95 backdrop-blur-md border-b border-[#C6A15B]/30 py-3 shadow-xl'
          : 'bg-[#090B10]/85 backdrop-blur-sm border-b border-[#7792B5]/15 py-4 sm:py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group"
          >
            <div className="w-9 h-9 rounded-[2px] border border-[#C6A15B]/40 bg-[#090B10] flex items-center justify-center font-serif text-sm font-semibold text-[#C6A15B] group-hover:border-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#090B10] transition-all duration-300 shadow-sm">
              NK
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-semibold tracking-tight text-[#EBE8E1] group-hover:text-[#C6A15B] transition-colors leading-tight">
                Nikhil Kumar
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#7792B5] uppercase">
                Python &amp; Cloud Systems
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-wider transition-all duration-300 py-1 relative font-medium ${
                    isActive
                      ? 'text-[#C6A15B] font-semibold'
                      : 'text-[#D6D3CC] hover:text-[#C6A15B]'
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#7792B5] mr-1.5 opacity-80">
                    {link.number}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C6A15B] via-[#DEC186] to-[#8C3F4D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume/Nikhil_Kumar_Resume.pdf"
              download="Nikhil_Kumar_Resume.pdf"
              className="btn-luxury-gold text-xs py-2 px-3.5"
            >
              <FileDown className="w-3.5 h-3.5 text-[#090B10]" />
              <span>Resume</span>
            </a>

            <Link
              href="/contact"
              className="btn-luxury-secondary text-xs py-2 px-3.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 text-[#C6A15B]" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded border border-[#C6A15B]/40 text-[#D6D3CC] hover:bg-[#151C2B] transition-colors cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#C6A15B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#090B10]/98 backdrop-blur-2xl border-t border-[#C6A15B]/30 z-40 p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-6 pt-4">
            <div className="text-[11px] font-mono uppercase tracking-luxury text-[#C6A15B]">
              Navigation Directory
            </div>
            <nav className="flex flex-col space-y-4">
              {links.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-baseline justify-between py-2 border-b border-[#7792B5]/15 transition-colors ${
                      isActive ? 'text-[#C6A15B]' : 'text-[#D6D3CC]'
                    }`}
                  >
                    <span className="font-serif text-2xl font-medium tracking-tight">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-[#7792B5]">
                      {link.number}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#7792B5]/20 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/resume/Nikhil_Kumar_Resume.pdf"
                download="Nikhil_Kumar_Resume.pdf"
                className="btn-luxury-gold text-xs py-2.5 px-3 justify-center text-center"
              >
                <FileDown className="w-3.5 h-3.5 text-[#090B10]" />
                <span>Resume (PDF)</span>
              </a>
              <a
                href="/resume/resume.tex"
                download="Nikhil_Kumar_Resume.tex"
                className="btn-luxury-secondary text-xs py-2.5 px-3 justify-center text-center font-mono"
              >
                <FileCode2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>LaTeX</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-[#858A96] font-mono">
              <a
                href="https://github.com/TheNikhilLuhach"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#C6A15B]"
              >
                <Github className="w-3.5 h-3.5 text-[#7792B5]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-kumar-692116203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#C6A15B]"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#7792B5]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:nikuluhach.86209@gmail.com"
                className="flex items-center gap-1 hover:text-[#C6A15B]"
              >
                <Mail className="w-3.5 h-3.5 text-[#7792B5]" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
