'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Code2, Server, Globe, Cloud, Database, Cpu, Wrench, Search, CheckCircle2, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, MaskReveal, SpotlightCard, TiltCard, EditorialGoldDivider, StaggerGroup, StaggerItem } from '@/components/motion/MotionPrimitives';

const skillCategories = [
  { id: 'all', label: 'All Disciplines', icon: Layers, color: '#C6A15B' },
  { id: 'languages', label: 'Languages', icon: Code2, color: '#DEC186' },
  { id: 'backend', label: 'Backend', icon: Server, color: '#7792B5' },
  { id: 'web', label: 'Web Tech', icon: Globe, color: '#9BB8D8' },
  { id: 'databases', label: 'Databases', icon: Database, color: '#C6A15B' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, color: '#7792B5' },
  { id: 'ai', label: 'AI & Vision', icon: Cpu, color: '#DEC186' },
  { id: 'tools', label: 'Dev Tools', icon: Wrench, color: '#858A96' },
];

const constellationItems = [
  { label: 'Python 3.10+', tag: 'Core Language', color: '#C6A15B' },
  { label: 'AWS EC2 & S3', tag: 'Cloud Platform', color: '#7792B5' },
  { label: 'Docker & Linux', tag: 'Infrastructure', color: '#8C3F4D' },
  { label: 'Google Gemini API', tag: 'Generative AI', color: '#DEC186' },
  { label: 'MediaPipe & OpenCV', tag: 'Vision Systems', color: '#C6A15B' },
  { label: 'Flask & REST APIs', tag: 'Backend', color: '#7792B5' },
  { label: 'SQLAlchemy & MySQL', tag: 'Persistence', color: '#858A96' },
];

interface SkillItem {
  name: string;
  category: string;
  scope: string;
  ecosystem: string[];
  status: 'Daily Practice' | 'Industrial Trainee' | 'Academic Grounding';
}

const technicalRegistry: SkillItem[] = [
  { name: 'Python 3.10+', category: 'languages', scope: 'Primary engineering language for backend APIs, data pipelines, automation scripts, and ML vision tracking.', ecosystem: ['AsyncIO', 'PEP 8', 'Type Hinting', 'Pytest', 'Virtualenv'], status: 'Daily Practice' },
  { name: 'JavaScript & TypeScript', category: 'languages', scope: 'Modern type-safe application development across Next.js and client interactivity.', ecosystem: ['ES2023', 'TypeScript 5', 'Strict Mode', 'Node.js'], status: 'Daily Practice' },
  { name: 'Java', category: 'languages', scope: 'Object-oriented programming, data structures, and algorithms design.', ecosystem: ['OOP Principles', 'Collections Framework', 'JVM'], status: 'Academic Grounding' },
  { name: 'C / C++', category: 'languages', scope: 'Foundational systems programming, memory management principles, and algorithmic optimization.', ecosystem: ['Pointers', 'STL', 'Memory Allocation'], status: 'Academic Grounding' },
  { name: 'Bash & Shell Scripting', category: 'languages', scope: 'Automating Linux server routines, deployment loops, and environment setups.', ecosystem: ['POSIX Scripts', 'Cron Automation', 'Grep / Awk'], status: 'Daily Practice' },
  { name: 'Flask & REST APIs', category: 'backend', scope: 'Architecting clean, modular microservices with structured HTTP endpoints and JSON validation.', ecosystem: ['Flask-CORS', 'Blueprint Routing', 'Request Validation', 'Gunicorn'], status: 'Industrial Trainee' },
  { name: 'FastAPI Patterns', category: 'backend', scope: 'Asynchronous API development with automatic OpenAPI generation and Pydantic validation schemas.', ecosystem: ['Pydantic', 'Async Request Handlers', 'OpenAPI'], status: 'Daily Practice' },
  { name: 'Next.js 14 (App Router)', category: 'web', scope: 'Server-side rendering, static site generation, route handlers, and performance optimization.', ecosystem: ['App Router', 'Server Components', 'Dynamic Routes', 'Metadata API'], status: 'Daily Practice' },
  { name: 'React 18', category: 'web', scope: 'Component architecture, custom hooks, memoization, and accessible interactive states.', ecosystem: ['Custom Hooks', 'Context API', 'Suspense', 'Client Components'], status: 'Daily Practice' },
  { name: 'Tailwind CSS', category: 'web', scope: 'Utility-first design systems, responsive token architecture, and bespoke luxury styling.', ecosystem: ['Arbitrary Variants', 'CSS Variables', 'Responsive Grid', 'JIT Engine'], status: 'Daily Practice' },
  { name: 'PostgreSQL & MySQL', category: 'databases', scope: 'Relational schema modeling, index optimization, foreign key constraints, and normalized architectures.', ecosystem: ['SQL Queries', 'Transactions', 'Foreign Keys', 'Indexing'], status: 'Daily Practice' },
  { name: 'SQLite & SQLAlchemy ORM', category: 'databases', scope: 'Embedded application persistence, declarative mapping, and transactional safety in Python apps.', ecosystem: ['Declarative Base', 'Session Management', 'Query Chaining'], status: 'Daily Practice' },
  { name: 'MongoDB', category: 'databases', scope: 'Document-oriented storage for semi-structured data, logging pipelines, and rapid prototyping.', ecosystem: ['BSON', 'Aggregation Pipelines', 'Atlas DB'], status: 'Academic Grounding' },
  { name: 'Amazon Web Services (AWS)', category: 'cloud', scope: 'Provisioning EC2 computing instances, configuring S3 buckets, IAM least-privilege security roles.', ecosystem: ['Amazon EC2', 'Amazon S3', 'IAM Roles & Policies', 'Security Groups'], status: 'Industrial Trainee' },
  { name: 'Docker & Containerization', category: 'cloud', scope: 'Writing multi-stage Dockerfiles, creating reproducible container images, and running isolated services.', ecosystem: ['Dockerfile', 'Docker Compose', 'Container Networking', 'Image Caching'], status: 'Industrial Trainee' },
  { name: 'Linux System Administration', category: 'cloud', scope: 'Operating Ubuntu and RedHat servers, package management, daemon configuration, and SSH key management.', ecosystem: ['Systemd Services', 'SSH / Auth Keys', 'UFW Firewall', 'Journalctl'], status: 'Daily Practice' },
  { name: 'CI/CD & GitHub Actions', category: 'cloud', scope: 'Automated test runners, lint verification workflows, and deployment triggers on branch pushes.', ecosystem: ['Workflow YAML', 'Secrets Management', 'Status Checks'], status: 'Daily Practice' },
  { name: 'Google Gemini 2.0 / 1.5 API', category: 'ai', scope: 'Integrating multi-modal LLM reasoning, schema-constrained structured JSON outputs, and guardrails.', ecosystem: ['Prompt Engineering', 'Structured JSON Responses', 'Token Cost Controls'], status: 'Daily Practice' },
  { name: 'MediaPipe Vision', category: 'ai', scope: 'Real-time 21-landmark 3D coordinate hand tracking at 30 FPS with debounced gesture detection.', ecosystem: ['Hand Landmarks', 'Vector Coordinate Geometry', 'Pose Tracking'], status: 'Daily Practice' },
  { name: 'OpenCV (Python)', category: 'ai', scope: 'Camera frame acquisition, color space conversions, thresholding, and real-time bounding overlays.', ecosystem: ['Video Capture', 'Morphological Transforms', 'Frame Rendering'], status: 'Daily Practice' },
  { name: 'Git & GitHub', category: 'tools', scope: 'Feature branching, atomic commits, pull requests, semantic versioning, and merge conflict resolution.', ecosystem: ['Branching Models', 'Submodules', 'Release Tags'], status: 'Daily Practice' },
  { name: 'Streamlit & Gradio', category: 'tools', scope: 'Rapid interactive prototype construction for machine learning models and backend demonstration sandboxes.', ecosystem: ['Stateful Components', 'Live Sliders', 'File Uploaders'], status: 'Daily Practice' },
];

const statusStyle = {
  'Daily Practice':    { bg: 'rgba(198,161,91,0.08)', text: '#DEC186', border: 'rgba(198,161,91,0.25)' },
  'Industrial Trainee': { bg: 'rgba(119,146,181,0.08)', text: '#7792B5', border: 'rgba(119,146,181,0.25)' },
  'Academic Grounding': { bg: 'rgba(140,63,77,0.08)',  text: '#C67080', border: 'rgba(140,63,77,0.25)' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = useMemo(() => {
    return technicalRegistry.filter((s) => {
      const cat = activeCategory === 'all' || s.category === activeCategory;
      const q = !searchQuery || s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.scope.toLowerCase().includes(searchQuery.toLowerCase()) || s.ecosystem.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
      return cat && q;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-28 skills-atmosphere overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 midnight-grid-overlay opacity-50 pointer-events-none" />

      {/* Floating oversized category name */}
      <div className="absolute left-8 top-16 font-serif text-[22rem] font-light text-[#C6A15B]/4 leading-none pointer-events-none select-none hidden lg:block">
        03
      </div>

      {/* Animated background orbs */}
      <motion.div
        className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(119,146,181,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.08, 1], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-5%] bottom-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(198,161,91,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <div className="mb-16">
          <FadeUp delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-6 font-mono text-[10px] rounded-[2px] bg-[#C6A15B]/10 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] font-bold">03</span>
              <span className="h-px w-8 bg-[#C6A15B]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C6A15B]">Technical Competencies</span>
            </div>
          </FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <MaskReveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#EBE8E1] leading-[1.04] max-w-3xl">
                A structured registry of practical software competencies.
              </h2>
            </MaskReveal>
            {/* Search */}
            <div className="shrink-0 relative w-full md:w-64">
              <Search className="w-4 h-4 text-[#7792B5] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search competencies..."
                className="w-full pl-9 pr-3 py-2.5 bg-[#151C2B]/60 border border-[#7792B5]/20 rounded-[2px] text-xs text-[#EBE8E1] placeholder-[#858A96] focus:outline-none focus:border-[#C6A15B] transition-colors font-mono backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        {/* ── Tech Constellation Banner ── */}
        <div className="mb-10 p-5 rounded-[2px] bg-[#151C2B]/40 border border-[#C6A15B]/15 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />
          <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            <span>Core Architectural Constellation</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {constellationItems.map((item) => (
              <div key={item.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#090B10]/60 border border-[#7792B5]/15 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 4px ${item.color}60` }} />
                <span className="text-[#EBE8E1] font-medium">{item.label}</span>
                <span className="text-[10px] text-[#858A96] border-l border-[#7792B5]/20 pl-2">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category filter pills ── */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === 'all' ? technicalRegistry.length : technicalRegistry.filter(s => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-3.5 py-2 rounded-[2px] text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'text-[#090B10] font-bold border shadow-sm'
                    : 'bg-[#151C2B]/60 text-[#D6D3CC] hover:text-[#C6A15B] hover:bg-[#1a2236] border border-[#7792B5]/18'
                }`}
                style={isActive ? { backgroundColor: cat.color, borderColor: cat.color, boxShadow: `0 2px 12px ${cat.color}30` } : {}}
              >
                <Icon className="w-3.5 h-3.5" style={isActive ? { color: '#090B10' } : { color: cat.color }} />
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-black/15 text-[#090B10]' : 'bg-[#090B10] text-[#7792B5]'}`}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ── Skill Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((skill, index) => {
              const style = statusStyle[skill.status];
              return (
                <TiltCard
                  key={skill.name}
                  intensity={5}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(198, 161, 91, 0.12)"
                    className="glow-card p-6 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      {/* Status & category */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#7792B5]/10">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#7792B5]">{skill.category}</span>
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-[2px] border"
                          style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                        >
                          {skill.status}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-serif text-xl sm:text-2xl text-[#EBE8E1] tracking-tight font-light group-hover:text-[#C6A15B] transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-[#858A96] leading-relaxed font-light">{skill.scope}</p>

                      {/* Ecosystem chips */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono text-[#858A96] uppercase tracking-wider">Ecosystem</div>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.ecosystem.map((e) => (
                            <span key={e} className="text-[11px] font-mono px-2 py-0.5 rounded-[2px] bg-[#090B10]/80 text-[#D6D3CC]/70 border border-[#7792B5]/15">
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#7792B5]/12 flex items-center justify-between text-[11px] font-mono text-[#7792B5]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Verified</span>
                      </span>
                      <span className="text-[#858A96]/60">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 p-8 rounded-[2px] border border-[#C6A15B]/20 bg-[#151C2B]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />
          <div>
            <h4 className="font-serif text-2xl text-[#EBE8E1] font-light mb-1">Curious how these skills translate to working code?</h4>
            <p className="text-xs text-[#858A96] font-light">Explore the engineering case studies to inspect actual repository structures, API schemas, and running sandboxes.</p>
          </div>
          <Link href="/projects" className="btn-luxury-gold py-2.5 px-5 text-xs sm:text-sm shrink-0 inline-flex items-center gap-2">
            <span>Inspect Projects</span>
            <ArrowRight className="w-4 h-4 text-[#090B10]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
