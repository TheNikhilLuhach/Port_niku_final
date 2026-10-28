'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Shield, Cloud, Code2, FileDown, FileCode2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const skills = [
  'Software Engineer',
  'Python Developer',
  'Cloud & DevOps Engineer',
  'Generative AI Specialist',
  'Workflow Automation Expert',
];

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation
  useEffect(() => {
    const skill = skills[currentSkill];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(skill.slice(0, displayText.length + 1));
        if (displayText.length === skill.length - 1) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(skill.slice(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setCurrentSkill((prev) => (prev + 1) % skills.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSkill]);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-emerald-500/30"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-gray-300">B.Tech CSE • Amity University (2023–2027)</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-clip-text text-transparent">
              Nikhil Kumar
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-14 sm:h-16 mb-6"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-accent-cyan ml-1 animate-pulse" />
            </span>
          </motion.div>

          {/* Headline description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building high-performance Python services, cloud infrastructure on AWS, and production web applications. Experienced in computer vision interfaces, Generative AI models, and automated engineering workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full font-semibold text-white hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Code2 className="w-4 h-4" />
              Explore Projects
            </button>

            <a
              href="/resume/Nikhil_Kumar_Resume.pdf"
              download="Nikhil_Kumar_Resume.pdf"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-accent-purple to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-7 py-3.5 glass rounded-full font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
          </motion.div>

          {/* LaTeX Resume download link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mb-10 text-xs text-gray-500"
          >
            Need the ATS LaTeX source?{' '}
            <a
              href="/resume/Nikhil_Kumar_Resume.tex"
              download="Nikhil_Kumar_Resume.tex"
              className="text-accent-cyan hover:underline inline-flex items-center gap-1 font-mono"
            >
              <FileCode2 className="w-3.5 h-3.5 inline" /> Download Nikhil_Kumar_Resume.tex
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center gap-5"
          >
            {[
              { icon: Github, href: 'https://github.com/TheNikhilLuhach', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-kumar-692116203', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:nikuluhach.86209@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent-cyan transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
