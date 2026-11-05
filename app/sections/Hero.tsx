'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ArrowRight, FileDown, 
  ChevronDown, GraduationCap, Server, Cloud, Cpu, Terminal, FolderGit2
} from 'lucide-react';
import {
  luxuryEase, MaskReveal, FadeUp, CinematicNameReveal,
  AmbientParticles, SpotlightCard, MagneticButton, AnimatedCounter
} from '@/components/motion/MotionPrimitives';

interface FocusTab {
  id: string;
  label: string;
  icon: typeof Server;
  headline: string;
  stack: string[];
  architecture: string;
  featuredProject: { name: string; slug: string };
}

const focusDomains: FocusTab[] = [
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: Server,
    headline: 'Modular Python microservices, REST APIs & relational databases',
    stack: ['Python 3.10+', 'Flask', 'SQLAlchemy', 'PostgreSQL / SQLite', 'REST APIs'],
    architecture: 'Clean service architecture, strict request schema validation, connection pooling, and decoupled business logic.',
    featuredProject: { name: 'CareerPilot Platform', slug: 'careerpilot' },
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    headline: 'AWS cloud infrastructure, containerization & Linux administration',
    stack: ['Amazon EC2', 'Amazon S3', 'IAM Policies', 'Docker Containers', 'Linux / Bash'],
    architecture: 'Reproducible Docker environments, least-privilege IAM credentials, and Linux server orchestration.',
    featuredProject: { name: 'Cloud Automation Workflows', slug: 'cloud-automation' },
  },
  {
    id: 'ai',
    label: 'Applied AI & Vision',
    icon: Cpu,
    headline: 'Real-time computer vision & structured LLM integrations',
    stack: ['Google Gemini 2.0', 'MediaPipe', 'OpenCV', 'Streamlit', 'Python Async'],
    architecture: '30 FPS 21-landmark 3D hand tracking, debounced gesture classification, and schema-constrained LLM prompting.',
    featuredProject: { name: 'Hand Gesture Control', slug: 'hand-gesture-control' },
  },
  {
    id: 'automation',
    label: 'Automation Tools',
    icon: Terminal,
    headline: 'Desktop automation, intelligent utilities & audio workflows',
    stack: ['PyAutoGUI', 'SpeechRecognition', 'Gradio', 'Python OS / Subprocess'],
    architecture: 'Non-blocking worker loops, debounced trigger detection, and local system automation scripts.',
    featuredProject: { name: 'Smart File Management', slug: 'file-management-utility' },
  },
];

const stats = [
  { value: 5, suffix: '', label: 'Internships' },
  { value: 8, suffix: '', label: 'Projects Built' },
  { value: 15, suffix: '+', label: 'Technologies' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>('backend');
  const currentDomain = focusDomains.find((d) => d.id === activeTab) || focusDomains[0];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between hero-atmosphere overflow-hidden">

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 midnight-grid-overlay opacity-60 pointer-events-none" />

      {/* ── Animated background orbs ── */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(119,146,181,0.14) 0%, rgba(21,28,43,0.4) 50%, transparent 80%)',
          filter: 'blur(90px)',
        }}
        animate={{ scale: [1, 1.06, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] left-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140,63,77,0.18) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198,161,91,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* ── Ambient particles ── */}
      <AmbientParticles count={18} />

      {/* ── Light sweep across name ── */}
      <div className="absolute top-[30%] left-0 right-0 h-[2px] pointer-events-none overflow-hidden opacity-20">
        <div className="animate-light-sweep absolute inset-0 bg-gradient-to-r from-transparent via-[#DEC186] to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">

        {/* Top badge */}
        <FadeUp delay={0.05}>
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 mb-8 rounded-[2px] glass-panel border border-[#7792B5]/20">
            <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C6A15B]">Engineering Portfolio</span>
            <span className="h-3 w-px bg-[#7792B5]/30" />
            <span className="text-[10px] font-mono text-[#858A96]">Jaipur, India · 2026</span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* ── LEFT: Identity ── */}
          <div className="lg:col-span-7 space-y-8">

            {/* Name */}
            <div className="space-y-3">
              <CinematicNameReveal
                text="NIKHIL KUMAR"
                className="font-serif text-6xl sm:text-8xl lg:text-9xl font-normal tracking-tight text-gold-shimmer leading-[0.88] drop-shadow-lg select-none"
              />
              <MaskReveal delay={0.4}>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg font-light tracking-wide text-[#7792B5]">
                  <span>Python Developer</span>
                  <span className="text-[#8C3F4D] text-xs">&bull;</span>
                  <span>Backend Engineer</span>
                  <span className="text-[#8C3F4D] text-xs">&bull;</span>
                  <span>Cloud &amp; Applied AI</span>
                </div>
              </MaskReveal>
            </div>

            {/* Paragraph */}
            <FadeUp delay={0.45}>
              <p className="text-sm sm:text-base text-[#D6D3CC]/85 leading-relaxed max-w-xl font-light gold-line-left border-[#C6A15B]/30">
                Final-year B.Tech Computer Science student at Amity University Rajasthan. I build practical software — from backend APIs and cloud infrastructure to AI-driven automation tools and computer vision systems. I enjoy turning ideas into real, working products.
              </p>
            </FadeUp>

            {/* Academic credential */}
            <FadeUp delay={0.52}>
              <div className="flex items-center gap-3.5 p-3.5 max-w-lg glass-panel border border-[#7792B5]/20 rounded-[2px]">
                <div className="w-9 h-9 rounded-[2px] bg-[#090B10] border border-[#C6A15B]/35 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono">
                  <div className="text-[#EBE8E1] font-medium flex items-center gap-2">
                    <span>B.Tech Computer Science &amp; Engineering</span>
                    <span className="text-[10px] text-[#C6A15B] bg-[#C6A15B]/10 px-1.5 py-0.5 rounded border border-[#C6A15B]/25 font-semibold">2023–2027</span>
                  </div>
                  <div className="text-[#858A96] text-[11px] mt-0.5">Amity University Rajasthan &bull; Jaipur Campus</div>
                </div>
              </div>
            </FadeUp>

            {/* Animated Stat Counters */}
            <FadeUp delay={0.58}>
              <div className="grid grid-cols-3 gap-4 max-w-sm">
                {stats.map((s, i) => (
                  <div key={s.label} className="text-center p-3 rounded-[2px] bg-[#151C2B]/50 border border-[#7792B5]/12">
                    <div className="font-serif text-2xl sm:text-3xl text-[#C6A15B] font-medium leading-none">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] font-mono text-[#858A96] uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.65}>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection('projects')}
                    className="btn-luxury-gold btn-magnetic py-3.5 px-7 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-4 h-4 text-[#090B10]" />
                  </motion.button>
                </MagneticButton>
                <MagneticButton>
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="/resume/Nikhil_Kumar_Resume.pdf"
                    download="Nikhil_Kumar_Resume.pdf"
                    className="btn-luxury-secondary py-3.5 px-6 text-xs sm:text-sm"
                  >
                    <FileDown className="w-4 h-4 text-[#C6A15B]" />
                    <span>View Resume</span>
                  </motion.a>
                </MagneticButton>
              </div>
            </FadeUp>

            {/* Social links */}
            <FadeUp delay={0.72}>
              <div className="flex items-center gap-5 text-xs font-mono text-[#858A96] border-t border-[#7792B5]/15 pt-5 max-w-sm">
                {[
                  { href: 'https://github.com/TheNikhilLuhach', Icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/nikhil-kumar-692116203', Icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:nikuluhach.86209@gmail.com', Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1.5 hover:text-[#C6A15B] transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#7792B5] group-hover:text-[#C6A15B]" />
                    <span className="group-hover:underline">{label}</span>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT: Interactive Architecture Console ── */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.4} duration={0.9}>
              <SpotlightCard
                spotlightColor="rgba(198, 161, 91, 0.16)"
                className="editorial-card-elevated p-6 sm:p-8 space-y-5 relative overflow-hidden"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#8C3F4D]/60 via-[#C6A15B] to-[#7792B5]/60" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20"
                  style={{ background: 'radial-gradient(circle at 100% 0%, rgba(198,161,91,0.5) 0%, transparent 70%)' }} />

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#7792B5]/18">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse-subtle" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[#EBE8E1] font-medium">Technical Architecture</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#DEC186] bg-[#C6A15B]/8 px-2.5 py-1 rounded-[2px] border border-[#C6A15B]/25">
                    Interactive Blueprint
                  </span>
                </div>

                {/* Tab grid */}
                <div className="grid grid-cols-2 gap-1 p-1 rounded-[2px] bg-[#090B10]/60 border border-[#7792B5]/18">
                  {focusDomains.map((domain) => {
                    const Icon = domain.icon;
                    const isActive = activeTab === domain.id;
                    return (
                      <button
                        key={domain.id}
                        onClick={() => setActiveTab(domain.id)}
                        className={`flex items-center gap-2 px-2.5 py-2 rounded-[2px] text-[11px] font-mono transition-all text-left cursor-pointer ${
                          isActive
                            ? 'bg-[#151C2B] text-[#C6A15B] border border-[#C6A15B]/35 shadow-sm'
                            : 'text-[#858A96] hover:text-[#D6D3CC]'
                        }`}
                      >
                        <Icon className={`w-3 h-3 shrink-0 ${isActive ? 'text-[#C6A15B]' : 'text-[#7792B5]'}`} />
                        <span className="truncate">{domain.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Animated domain body */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDomain.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: luxuryEase }}
                    className="space-y-4"
                  >
                    <p className="text-sm font-medium text-[#EBE8E1] leading-snug">{currentDomain.headline}</p>

                    <div className="p-3.5 rounded-[2px] bg-[#090B10]/70 border border-[#7792B5]/18 space-y-2">
                      <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3 h-3" />
                        <span>Architecture Pattern</span>
                      </div>
                      <p className="text-xs text-[#D6D3CC]/80 leading-relaxed">{currentDomain.architecture}</p>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-[#858A96] uppercase tracking-wider mb-2">Core Stack</div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentDomain.stack.map((item) => (
                          <span key={item} className="tag-gold text-[11px]">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-[#7792B5]/15">
                      <span className="text-[#858A96] flex items-center gap-1.5">
                        <FolderGit2 className="w-3.5 h-3.5 text-[#7792B5]" />
                        <span>Key Project</span>
                      </span>
                      <Link
                        href={`/projects/${currentDomain.featuredProject.slug}`}
                        className="text-[#C6A15B] hover:text-[#DEC186] font-medium flex items-center gap-1 group transition-colors"
                      >
                        <span>{currentDomain.featuredProject.name}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </SpotlightCard>
            </FadeUp>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 flex justify-between items-center text-xs font-mono text-[#858A96] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
          <span>NIKHIL KUMAR · MIDNIGHT LUXURY EDITION</span>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 hover:text-[#C6A15B] transition-colors group cursor-pointer"
        >
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#C6A15B] animate-bounce-down" />
        </button>
      </div>
    </section>
  );
}
