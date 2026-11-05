'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, FileDown, FileCode2, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Competencies', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#111827]/90 backdrop-blur-md border-b border-[#8B9BB4]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo / Monogram */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded border border-[#8B9BB4]/30 bg-[#161F33] flex items-center justify-center font-mono text-xs font-semibold text-[#E9EDF5]">
                NK
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-[#E9EDF5] group-hover:text-white transition-colors">
                  Nikhil Kumar
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#8B9BB4] uppercase">
                  Systems &amp; Cloud
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-xs font-medium tracking-wide transition-colors py-1 relative ${
                      isActive ? 'text-[#E9EDF5]' : 'text-[#8B9BB4] hover:text-[#E9EDF5]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E9EDF5]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Primary & Secondary Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Primary Action Button: Soft Ice background with Midnight Navy text */}
              <a
                href="/resume/Nikhil_Kumar_Resume.pdf"
                download="Nikhil_Kumar_Resume.pdf"
                className="btn-primary text-xs py-2 px-3.5"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>

              {/* Secondary Action: LaTeX Source */}
              <a
                href="/resume/Nikhil_Kumar_Resume.tex"
                download="Nikhil_Kumar_Resume.tex"
                title="Download ATS LaTeX Source"
                className="btn-secondary text-xs py-2 px-3 font-mono"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>.tex</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/TheNikhilLuhach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-[#8B9BB4]/25 text-[#8B9BB4] hover:text-[#E9EDF5] hover:border-[#8B9BB4]/50 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded border border-[#8B9BB4]/25 text-[#8B9BB4] hover:text-[#E9EDF5]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#E9EDF5]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-40 md:hidden bg-[#161F33] border-b border-[#8B9BB4]/20 p-5 shadow-2xl"
          >
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#8B9BB4]/15">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left px-3 py-2 text-xs font-medium rounded transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-[#1E293B] text-[#E9EDF5]'
                        : 'text-[#8B9BB4] hover:text-[#E9EDF5]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="/resume/Nikhil_Kumar_Resume.pdf"
                  download="Nikhil_Kumar_Resume.pdf"
                  className="btn-primary text-xs w-full py-2.5"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="/resume/Nikhil_Kumar_Resume.tex"
                  download="Nikhil_Kumar_Resume.tex"
                  className="btn-secondary text-xs w-full py-2.5 font-mono"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>Download LaTeX (.tex) Source</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
