'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Terminal, Cloud, Shield, GraduationCap, Trophy, Award, FileDown, FileCode2, MapPin, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, MaskReveal, StaggerGroup, StaggerItem, EditorialGoldDivider, SpotlightCard, AnimatedCounter } from '@/components/motion/MotionPrimitives';

const pillars = [
  {
    icon: Terminal,
    num: '01',
    title: 'Python Backend Systems',
    description: 'Designing modular microservices, REST APIs with Flask, SQLAlchemy ORMs, clean routing blueprints, and strict request schema validation.',
    accent: '#C6A15B',
  },
  {
    icon: Cloud,
    num: '02',
    title: 'Cloud & Infrastructure',
    description: 'Hands-on provisioning of Amazon EC2 instances, S3 storage buckets, IAM least-privilege security policies, Docker containers, and Linux administration.',
    accent: '#7792B5',
  },
  {
    icon: Shield,
    num: '03',
    title: 'Applied AI & Vision',
    description: 'Real-time 21-point hand landmark tracking via MediaPipe at 30 FPS, gesture classification, and structured generative AI workflows with Google Gemini 2.0.',
    accent: '#8C3F4D',
  },
];

const milestones = [
  { year: '2023', phase: 'Academic Foundations', summary: 'Commenced B.Tech CSE at Amity University Rajasthan. Deep-dived into object-oriented Python, C/C++, algorithms, and Linux essentials.' },
  { year: '2024', phase: 'Cloud & Web Exploration', summary: 'Industrial training in AWS Cloud Computing at LinuxWorld (EC2, S3, IAM) followed by web development internship at 1Stop.ai.' },
  { year: '2025', phase: 'Generative AI & Backend APIs', summary: 'Specialized Generative AI training at LinuxWorld, then Python Developer internship at The Skybrisk building data automation and backend scripts.' },
  { year: '2026', phase: 'DevOps & System Engineering', summary: 'DevOps trainee at LinuxWorld, mastering Docker containerization, CI/CD pipelines, and production-ready portfolio architecture.' },
];

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(3);

  return (
    <section id="about" className="relative py-28 about-atmosphere overflow-hidden">

      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 dot-matrix-overlay opacity-40 pointer-events-none" />
      <motion.div
        className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(21,28,43,0.9) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-20 bottom-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(140,63,77,0.12) 0%, transparent 70%)', filter: 'blur(70px)' }}
        animate={{ x: [0, -15, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* ── Floating oversized number ── */}
      <div className="absolute right-8 top-16 font-serif text-[22rem] font-light text-[#7792B5]/4 leading-none pointer-events-none select-none hidden lg:block">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <div className="mb-20">
          <FadeUp delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 font-mono text-[10px] rounded-[2px] bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] font-bold">02</span>
              <span className="h-px w-8 bg-[#C6A15B]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C6A15B]">Biography &amp; Mindset</span>
            </div>
          </FadeUp>
          <MaskReveal delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#EBE8E1] leading-[1.04] max-w-4xl">
              Practical engineering, disciplined code, and real-world execution.
            </h2>
          </MaskReveal>
        </div>

        {/* ── Split layout: oversized intro + credentials ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

          {/* Left: Big narrative */}
          <div className="lg:col-span-8">
            <SpotlightCard
              spotlightColor="rgba(119, 146, 181, 0.12)"
              className="editorial-card h-full p-8 sm:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C6A15B] via-[#7792B5]/50 to-transparent" />
              <div className="pl-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#7792B5]/12 text-xs font-mono">
                  <span className="text-[#C6A15B] uppercase tracking-wider">The Background</span>
                  <span className="text-[#7792B5]">Amity University Rajasthan · Class of 2027</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#EBE8E1] tracking-tight leading-snug font-light">
                  Hands-on experience deploying containerized services, configuring AWS clouds, and building intelligent software.
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-[#D6D3CC]/85 leading-relaxed font-light">
                  <p>
                    I started my programming journey with a curiosity for how code transforms into tools people actually use. Over five industrial internships at <strong className="text-[#EBE8E1] font-medium">LinuxWorld Informatics</strong> and <strong className="text-[#EBE8E1] font-medium">The Skybrisk</strong>, I progressed from foundational scripting to architecting production backends, Dockerized environments, and AWS infrastructure.
                  </p>
                  <p>
                    I enjoy projects where software interacts directly with users or systems — from gesture-controlled interfaces using <span className="text-[#DEC186] font-medium">OpenCV and MediaPipe</span> to structured LLM workflows with <span className="text-[#DEC186] font-medium">Google Gemini</span>, and database-backed platforms with <span className="text-[#DEC186] font-medium">Flask and SQLite</span>.
                  </p>
                </div>

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {['Python 3.10+', 'AWS (EC2, S3, IAM)', 'Docker Containers', 'Google Gemini 2.0 API', 'MediaPipe Vision', 'Flask & REST APIs', 'PostgreSQL / SQLite', 'Linux Shell Scripting'].map((tech) => (
                    <span key={tech} className="tag-luxury">{tech}</span>
                  ))}
                </div>

                {/* Resume strip */}
                <div className="pt-6 mt-4 border-t border-[#7792B5]/12 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D6D3CC]/70">
                    <Check className="w-4 h-4 text-[#C6A15B]" />
                    <span>Resume &amp; LaTeX Source Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="/resume/Nikhil_Kumar_Resume.pdf" download="Nikhil_Kumar_Resume.pdf" className="btn-luxury-gold text-xs py-2 px-4">
                      <FileDown className="w-3.5 h-3.5 text-[#090B10]" />
                      <span>Download PDF</span>
                    </a>
                    <a href="/resume/resume.tex" download="Nikhil_Kumar_Resume.tex" className="btn-luxury-secondary text-xs py-2 px-3.5 font-mono">
                      <FileDown className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>.tex</span>
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right: Credentials & Achievements */}
          <div className="lg:col-span-4 space-y-4">
            <SpotlightCard
              spotlightColor="rgba(140, 63, 77, 0.14)"
              className="editorial-card p-7 h-full space-y-5"
            >
              <div className="pb-4 border-b border-[#7792B5]/12 flex items-center justify-between text-xs font-mono">
                <span className="text-[#C6A15B] uppercase tracking-wider">Credentials</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              </div>

              <div className="space-y-5">
                {[
                  { Icon: GraduationCap, title: 'Amity University', sub: 'B.Tech CSE', detail: 'Class of 2027 · Jaipur Campus', color: '#C6A15B' },
                  { Icon: Trophy, title: 'Hackathon 2nd Place', sub: 'Nexora Project', detail: 'College Innovation Summit', color: '#DEC186' },
                  { Icon: Award, title: 'District Silver Medalist', sub: 'Karate Championship', detail: 'Discipline, resilience, focus', color: '#8C3F4D' },
                ].map((item, idx) => (
                  <div key={idx} className={`pb-4 ${idx < 2 ? 'border-b border-[#7792B5]/12' : ''}`}>
                    <div className="flex items-center gap-2.5 mb-1">
                      <item.Icon className="w-4 h-4" style={{ color: item.color }} />
                      <span className="font-serif text-base font-medium text-[#EBE8E1]">{item.title}</span>
                    </div>
                    <div className="text-xs text-[#D6D3CC]/80 font-medium ml-6.5">{item.sub}</div>
                    <div className="text-[11px] font-mono text-[#858A96] ml-6.5 mt-0.5">{item.detail}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#7792B5]/12 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[#EBE8E1]">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Jaipur, Rajasthan</span>
                </span>
                <Link href="/about" className="text-[#C6A15B] hover:text-[#DEC186] transition-colors">
                  Full Bio →
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* ── Interactive milestone timeline ── */}
        <div className="mb-20 p-6 sm:p-8 rounded-[2px] bg-[#151C2B]/40 border border-[#7792B5]/15 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#7792B5]/15">
            <div>
              <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider mb-1">Evolution Timeline</div>
              <h4 className="font-serif text-xl text-[#EBE8E1] font-light">Development Journey · 2023 – 2026</h4>
            </div>
            <div className="flex items-center gap-1 font-mono text-xs">
              {milestones.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`px-3 py-1.5 rounded-[2px] cursor-pointer transition-all ${activeMilestone === idx ? 'bg-[#C6A15B] text-[#090B10] font-bold' : 'bg-[#090B10]/60 text-[#858A96] hover:text-[#D6D3CC] border border-[#7792B5]/20'}`}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4">
              <span className="text-[10px] font-mono text-[#7792B5] uppercase tracking-wider block mb-1">Phase</span>
              <div className="font-serif text-2xl text-[#EBE8E1] font-light">{milestones[activeMilestone].phase}</div>
            </div>
            <div className="md:col-span-8 text-sm text-[#D6D3CC]/80 leading-relaxed border-t md:border-t-0 md:border-l border-[#7792B5]/15 pt-4 md:pt-0 md:pl-6 font-light">
              {milestones[activeMilestone].summary}
            </div>
          </div>
        </div>

        <EditorialGoldDivider className="mb-16" />

        {/* ── 3 Core Technical Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <FadeUp key={pillar.title} delay={idx * 0.12}>
              <SpotlightCard
                spotlightColor="rgba(198, 161, 91, 0.14)"
                className="glow-card p-8 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-[2px] border flex items-center justify-center shadow-sm"
                      style={{ borderColor: `${pillar.accent}30`, backgroundColor: `${pillar.accent}08` }}
                    >
                      <pillar.icon className="w-5 h-5" style={{ color: pillar.accent }} />
                    </div>
                    <span className="font-serif text-3xl text-[#7792B5]/20 font-light">{pillar.num}</span>
                  </div>
                  <h4 className="font-serif text-xl font-light text-[#EBE8E1] mb-3 group-hover:text-[#C6A15B] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#858A96] leading-relaxed font-light">{pillar.description}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#7792B5]/12 text-[11px] font-mono text-[#7792B5]">
                  Verified Implementation
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
