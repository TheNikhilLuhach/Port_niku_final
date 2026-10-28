'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, FileDown, FileCode2 } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/TheNikhilLuhach', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-kumar-692116203', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nikuluhach.86209@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden border-t border-dark-700 bg-dark-900/90">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Nikhil <span className="text-accent-cyan">Kumar</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Software Engineer, Python Developer, and Cloud & Automation Specialist. B.Tech Computer Science (2023–2027) at Amity University.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:bg-dark-600 transition-all border border-dark-600"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase font-mono tracking-wider text-white mb-4">Quick Navigation</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume & Contact Info */}
            <div>
              <h4 className="text-sm uppercase font-mono tracking-wider text-white mb-4">Resume & Inquiries</h4>
              <ul className="space-y-3 text-sm mb-6">
                <li className="text-gray-400">
                  <span className="text-gray-500">Email:</span>{' '}
                  <a href="mailto:nikuluhach.86209@gmail.com" className="hover:text-accent-cyan transition-colors text-gray-300">
                    nikuluhach.86209@gmail.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-500">Phone:</span>{' '}
                  <a href="tel:+917297072067" className="hover:text-accent-cyan transition-colors text-gray-300">
                    +91 7297072067
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-500">Location:</span> Jaipur, Rajasthan, India
                </li>
              </ul>

              <div className="flex flex-col gap-2">
                <a
                  href="/resume/Nikhil_Kumar_Resume.pdf"
                  download="Nikhil_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold hover:bg-accent-cyan/25 transition-colors w-fit"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
                <a
                  href="/resume/Nikhil_Kumar_Resume.tex"
                  download="Nikhil_Kumar_Resume.tex"
                  className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-accent-cyan transition-colors w-fit font-mono"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  Download Resume (.tex)
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Nikhil Kumar. Built with Next.js 14, TypeScript & Tailwind CSS. Production deployment on Vercel.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-gray-400 hover:text-accent-cyan transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
