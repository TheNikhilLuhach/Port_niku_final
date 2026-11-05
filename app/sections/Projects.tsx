'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Play,
  X,
  Maximize2,
  Github,
  ArrowUpRight,
  Terminal,
  Eye,
  Code2,
  Cpu,
  Cloud,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import initialProjectsData from '@/data/projects.json';
import { ProjectRegistryItem } from '@/types/project';
import {
  FadeUp,
  TiltCard,
  SpotlightCard,
  StaggerGroup,
  StaggerItem,
  EditorialGoldDivider,
  luxuryEase,
} from '@/components/motion/MotionPrimitives';

const projectsData = initialProjectsData as ProjectRegistryItem[];

const CATEGORIES = ['All', 'AI & ML', 'Automation & Tools', 'Full Stack', 'Cloud & DevOps'];

const categoryColors: Record<string, string> = {
  'AI & ML': '#C6A15B',
  'Automation & Tools': '#7792B5',
  'Full Stack': '#8C3F4D',
  'Cloud & DevOps': '#DEC186',
  'All': '#D6D3CC',
};

function ProjectModal({ project, onClose }: { project: ProjectRegistryItem; onClose: () => void }) {
  const hasDemo = !!project.demoUrl;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: 'rgba(9,11,16,0.92)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, ease: luxuryEase }}
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden"
          style={{ background: '#151C2B', border: '1px solid rgba(198,161,91,0.25)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(198,161,91,0.15)]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
              <span className="font-mono text-xs text-[#858A96] uppercase tracking-widest">Live Preview</span>
              <span className="text-[#D6D3CC] font-light font-['Cormorant_Garamond'] text-lg">{project.name}</span>
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#858A96] hover:text-[#C6A15B] border border-[rgba(198,161,91,0.15)] hover:border-[rgba(198,161,91,0.4)] transition-all"
                >
                  <Github size={12} /> GitHub
                </a>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#858A96] hover:text-[#D6D3CC] border border-[rgba(198,161,91,0.15)] hover:border-[rgba(198,161,91,0.4)] transition-all"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Demo content */}
          {hasDemo ? (
            <div className="flex-1 bg-black relative" style={{ minHeight: '500px' }}>
              <iframe
                src={project.demoUrl}
                className="w-full h-full border-0"
                style={{ minHeight: '500px' }}
                title={project.name}
                allow="camera; microphone"
              />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-12" style={{ minHeight: '400px' }}>
              <div className="text-center">
                <Terminal size={48} className="mx-auto mb-4 text-[#7792B5] opacity-50" />
                <p className="text-[#858A96] font-light mb-2">Local Execution Only</p>
                <p className="text-[#858A96] text-sm font-mono">{project.runCommands?.[0] || 'See setup instructions'}</p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FlagshipCard({ project, num, flip = false }: { project: ProjectRegistryItem; num: string; flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [modalOpen, setModalOpen] = useState(false);

  const accentColor = categoryColors[project.category] || '#C6A15B';

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: luxuryEase }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${flip ? 'lg:grid-flow-col-dense' : ''}`}
      >
        {/* Visual panel */}
        <div className={flip ? 'lg:col-start-2' : ''}>
          <TiltCard intensity={8} className="relative group">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #151C2B 0%, #0E1420 100%)',
                border: '1px solid rgba(198,161,91,0.2)',
                boxShadow: `0 20px 60px rgba(9,11,16,0.8), 0 0 0 1px rgba(198,161,91,0.05) inset`,
              }}
            >
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(198,161,91,0.1)]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8C3F4D]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C6A15B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7792B5]" />
                </div>
                <span className="font-mono text-[10px] text-[#858A96] ml-2 truncate">{project.slug}.demo</span>
              </div>

              {/* Architecture display */}
              <div className="p-6 min-h-[220px] flex flex-col gap-4">
                <div className="text-[10px] font-mono text-[#858A96] uppercase tracking-widest mb-2">Architecture Pipeline</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: luxuryEase }}
                      className="px-2.5 py-1 rounded-md font-mono text-[11px]"
                      style={{
                        background: `rgba(${i % 3 === 0 ? '198,161,91' : i % 3 === 1 ? '119,146,181' : '140,63,77'},0.12)`,
                        border: `1px solid rgba(${i % 3 === 0 ? '198,161,91' : i % 3 === 1 ? '119,146,181' : '140,63,77'},0.25)`,
                        color: i % 3 === 0 ? '#C6A15B' : i % 3 === 1 ? '#7792B5' : '#8C3F4D',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div
                  className="mt-auto p-3 rounded-lg font-mono text-[11px] text-[#858A96] leading-relaxed"
                  style={{ background: 'rgba(9,11,16,0.5)', border: '1px solid rgba(198,161,91,0.08)' }}
                >
                  <span style={{ color: accentColor }}>// </span>
                  {project.architecture?.slice(0, 120) ?? project.shortDescription.slice(0, 120)}...
                </div>
              </div>

              {/* Hover reveal overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'rgba(9,11,16,0.6)', backdropFilter: 'blur(4px)' }}
              >
                <div className="flex gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-black transition-all"
                    style={{ background: 'linear-gradient(135deg, #C6A15B, #DEC186)' }}
                  >
                    <Eye size={14} /> Live Demo
                  </button>
                  <Link
                    href={project.detailsUrl}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#D6D3CC] border border-[rgba(198,161,91,0.35)] hover:border-[rgba(198,161,91,0.7)] transition-all"
                  >
                    <ArrowUpRight size={14} /> Details
                  </Link>
                </div>
              </motion.div>
            </div>
          </TiltCard>
        </div>

        {/* Text panel */}
        <div className={`space-y-5 ${flip ? 'lg:col-start-1' : ''}`}>
          <div className="flex items-center gap-4">
            <span
              className="font-['Cormorant_Garamond'] text-7xl font-bold leading-none select-none"
              style={{ color: 'rgba(198,161,91,0.1)', letterSpacing: '-0.04em' }}
            >
              {num}
            </span>
            <div
              className="px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest"
              style={{
                background: `${accentColor}18`,
                border: `1px solid ${accentColor}35`,
                color: accentColor,
              }}
            >
              {project.category}
            </div>
          </div>

          <h3
            className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-light leading-tight"
            style={{ color: '#D6D3CC' }}
          >
            {project.name}
          </h3>

          <p className="text-[#858A96] leading-relaxed text-sm font-light">{project.shortDescription}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                  <span className="text-[#858A96] text-sm font-light">{h}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C6A15B, #DEC186)' }}
            >
              <Play size={13} fill="currentColor" /> View Demo
            </button>
            <Link
              href={project.detailsUrl}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-[#D6D3CC] border border-[rgba(198,161,91,0.3)] hover:border-[rgba(198,161,91,0.6)] transition-all"
            >
              <Code2 size={13} /> Case Study <ArrowUpRight size={11} />
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-[#7792B5] border border-[rgba(119,146,181,0.25)] hover:border-[rgba(119,146,181,0.5)] transition-all"
              >
                <Github size={13} /> Source
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

function SecondaryCard({ project, index }: { project: ProjectRegistryItem; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const accentColor = categoryColors[project.category] || '#7792B5';

  return (
    <>
      <StaggerItem>
        <TiltCard intensity={12} className="h-full">
          <div
            className="relative h-full rounded-xl p-5 flex flex-col group cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #151C2B 0%, #0E1420 100%)',
              border: '1px solid rgba(198,161,91,0.15)',
              boxShadow: '0 8px 32px rgba(9,11,16,0.6)',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${accentColor}50`;
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px rgba(9,11,16,0.8), 0 0 20px ${accentColor}12`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(198,161,91,0.15)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(9,11,16,0.6)';
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }} />

            <div className="flex items-start justify-between mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
              >
                <Code2 size={15} style={{ color: accentColor }} />
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-7 h-7 flex items-center justify-center rounded-md text-[#858A96] hover:text-[#C6A15B] border border-[rgba(198,161,91,0.1)] hover:border-[rgba(198,161,91,0.35)] transition-all"
                >
                  <Play size={11} fill="currentColor" />
                </button>
                <Link
                  href={project.detailsUrl}
                  className="w-7 h-7 flex items-center justify-center rounded-md text-[#858A96] hover:text-[#7792B5] border border-[rgba(119,146,181,0.1)] hover:border-[rgba(119,146,181,0.35)] transition-all"
                >
                  <ArrowUpRight size={11} />
                </Link>
              </div>
            </div>

            <div
              className="font-mono text-[10px] uppercase tracking-widest mb-2"
              style={{ color: accentColor }}
            >
              {project.category}
            </div>

            <h4 className="font-['Cormorant_Garamond'] text-xl font-light text-[#D6D3CC] mb-2 leading-snug">
              {project.name}
            </h4>

            <p className="text-[#858A96] text-xs leading-relaxed font-light flex-1 mb-4">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded font-mono text-[9px] text-[#858A96]"
                  style={{ background: 'rgba(133,138,150,0.1)', border: '1px solid rgba(133,138,150,0.15)' }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 rounded font-mono text-[9px] text-[#858A96]" style={{ background: 'rgba(133,138,150,0.1)' }}>
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        </TiltCard>
      </StaggerItem>
      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

function ArchiveCard({ project }: { project: ProjectRegistryItem }) {
  const [modalOpen, setModalOpen] = useState(false);
  const accentColor = categoryColors[project.category] || '#858A96';

  return (
    <>
      <motion.div
        whileHover={{ x: 4, borderColor: `${accentColor}40` }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-4 p-4 rounded-lg cursor-pointer group"
        style={{
          background: 'rgba(21,28,43,0.5)',
          border: '1px solid rgba(198,161,91,0.1)',
        }}
        onClick={() => setModalOpen(true)}
      >
        <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}25` }}>
          <Layers size={13} style={{ color: accentColor }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h5 className="text-[#D6D3CC] text-sm font-light truncate">{project.name}</h5>
            <span className="font-mono text-[9px] text-[#858A96] opacity-0 group-hover:opacity-100 transition-opacity">
              {project.category}
            </span>
          </div>
          <p className="text-[#858A96] text-xs truncate font-light">{project.shortDescription}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex gap-1">
            {project.techStack.slice(0, 2).map((t) => (
              <span key={t} className="font-mono text-[9px] text-[#858A96] opacity-60">{t}</span>
            ))}
          </div>
          <ArrowUpRight size={12} className="text-[#858A96] opacity-0 group-hover:opacity-60 transition-opacity" />
        </div>
      </motion.div>
      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLElement>(null);

  const flagship = projectsData.filter(p =>
    ['hand-gesture-control', 'tech2idea-chatbot'].includes(p.slug)
  );
  const secondary = projectsData.filter(p =>
    ['careerpilot', 'studysync'].includes(p.slug)
  );
  const archive = projectsData.filter(p =>
    !['hand-gesture-control', 'tech2idea-chatbot', 'careerpilot', 'studysync'].includes(p.slug)
  );

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const showFiltered = activeCategory !== 'All';

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-atmosphere relative py-28 overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-16 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(119,146,181,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(140,63,77,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.2, 1], y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating section number */}
      <div
        className="absolute top-12 right-6 font-['Cormorant_Garamond'] text-[160px] font-bold leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: 'rgba(198,161,91,0.04)', letterSpacing: '-0.04em' }}
      >
        04
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-[#C6A15B]" />
              <span className="font-mono text-xs text-[#858A96] uppercase tracking-[0.25em]">Engineering Work</span>
            </div>
          </FadeUp>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <FadeUp delay={0.1}>
              <h2
                className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light leading-none"
                style={{ color: '#D6D3CC' }}
              >
                Selected{' '}
                <span style={{ color: '#C6A15B', fontStyle: 'italic' }}>Projects</span>
              </h2>
            </FadeUp>

            {/* Category Filter */}
            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileTap={{ scale: 0.96 }}
                    className="px-3.5 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300"
                    style={{
                      background: activeCategory === cat ? 'rgba(198,161,91,0.18)' : 'rgba(21,28,43,0.6)',
                      border: `1px solid ${activeCategory === cat ? 'rgba(198,161,91,0.5)' : 'rgba(198,161,91,0.12)'}`,
                      color: activeCategory === cat ? '#C6A15B' : '#858A96',
                    }}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        <EditorialGoldDivider delay={0.15} className="mb-16" />

        {/* Filtered View */}
        <AnimatePresence mode="wait">
          {showFiltered ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
            >
              <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((project, i) => (
                  <SecondaryCard key={project.id} project={project} index={i} />
                ))}
              </StaggerGroup>
              {filtered.length === 0 && (
                <div className="text-center py-20 text-[#858A96] font-light">
                  No projects in this category yet.
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-20"
            >
              {/* Flagship 1 — Hand Gesture */}
              {flagship[0] && (
                <FlagshipCard project={flagship[0]} num="01" flip={false} />
              )}

              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,161,91,0.15), transparent)' }} />

              {/* Flagship 2 — Tech2Idea */}
              {flagship[1] && (
                <FlagshipCard project={flagship[1]} num="02" flip={true} />
              )}

              <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(119,146,181,0.12), transparent)' }} />

              {/* Secondary Projects */}
              {secondary.length > 0 && (
                <div>
                  <FadeUp className="mb-8">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#858A96]">Additional Work</span>
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(198,161,91,0.2), transparent)' }} />
                    </div>
                  </FadeUp>
                  <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {secondary.map((p, i) => (
                      <SecondaryCard key={p.id} project={p} index={i} />
                    ))}
                  </StaggerGroup>
                </div>
              )}

              {/* Archive */}
              {archive.length > 0 && (
                <div>
                  <FadeUp className="mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#858A96]">Project Archive</span>
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(140,63,77,0.2), transparent)' }} />
                    </div>
                  </FadeUp>
                  <StaggerGroup className="space-y-2">
                    {archive.map((p) => (
                      <StaggerItem key={p.id}>
                        <ArchiveCard project={p} />
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <FadeUp delay={0.2} className="mt-20 text-center">
          <a
            href="https://github.com/TheNikhilLuhach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-medium text-[#D6D3CC] border border-[rgba(198,161,91,0.2)] hover:border-[rgba(198,161,91,0.45)] transition-all group"
            style={{ background: 'rgba(21,28,43,0.6)' }}
          >
            <Github size={14} />
            View All on GitHub
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
