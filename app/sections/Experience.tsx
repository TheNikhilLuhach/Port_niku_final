'use client';

import { useState, useRef } from 'react';
import {
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import initialExperience from '@/data/experience.json';
import {
  FadeUp,
  TiltCard,
  EditorialGoldDivider,
  luxuryEase,
} from '@/components/motion/MotionPrimitives';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
}

const experience = initialExperience as ExperienceItem[];

const roleColors = [
  '#C6A15B',
  '#7792B5',
  '#8C3F4D',
  '#DEC186',
  '#858A96',
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="experience-atmosphere relative py-28 overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-[8%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(198,161,91,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}
        animate={{ scale: [1, 1.2, 1], y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-[5%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(119,146,181,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Floating section number */}
      <div
        className="absolute top-12 right-6 font-['Cormorant_Garamond'] text-[160px] font-bold leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: 'rgba(198,161,91,0.04)', letterSpacing: '-0.04em' }}
      >
        05
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-[#C6A15B]" />
              <span className="font-mono text-xs text-[#858A96] uppercase tracking-[0.25em]">Professional Journey</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light leading-none mb-4"
              style={{ color: '#D6D3CC' }}
            >
              Work{' '}
              <span style={{ color: '#C6A15B', fontStyle: 'italic' }}>Experience</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="text-[#858A96] font-light max-w-xl">
              Internships and training programs that shaped my engineering perspective.
            </p>
          </FadeUp>
        </div>

        <EditorialGoldDivider delay={0.15} className="mb-16" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, rgba(198,161,91,0.5), rgba(198,161,91,0.05))' }} />

          <div className="space-y-4">
            {experience.map((item, index) => {
              const isExpanded = expanded === index;
              const accentColor = roleColors[index % roleColors.length];
              const isLeft = index % 2 === 0;

              return (
                <FadeUp key={item.id} delay={index * 0.08}>
                  <div className={`md:ml-16 relative`}>
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-[52px] top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                      style={{
                        background: isExpanded ? accentColor : '#090B10',
                        borderColor: accentColor,
                        boxShadow: isExpanded ? `0 0 12px ${accentColor}60` : 'none',
                      }}
                      animate={{ scale: isExpanded ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="rounded-xl overflow-hidden"
                      style={{
                        background: isExpanded
                          ? `linear-gradient(135deg, #151C2B 0%, #0E1420 100%)`
                          : 'rgba(21,28,43,0.5)',
                        border: `1px solid ${isExpanded ? `${accentColor}35` : 'rgba(198,161,91,0.1)'}`,
                        boxShadow: isExpanded ? `0 8px 32px rgba(9,11,16,0.6), 0 0 0 1px ${accentColor}10 inset` : 'none',
                        transition: 'all 0.35s ease',
                      }}
                    >
                      {/* Top accent bar */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.4 }}
                            className="h-[2px] origin-left"
                            style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Header row */}
                      <button
                        className="w-full text-left px-5 py-4 flex items-center gap-4 group"
                        onClick={() => setExpanded(isExpanded ? null : index)}
                      >
                        {/* Role number */}
                        <span
                          className="font-['Cormorant_Garamond'] text-3xl font-bold leading-none select-none flex-shrink-0"
                          style={{ color: `${accentColor}22` }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                            <h3
                              className="font-['Cormorant_Garamond'] text-xl font-light leading-tight"
                              style={{ color: isExpanded ? '#D6D3CC' : '#D6D3CC' }}
                            >
                              {item.role}
                            </h3>
                            <span
                              className="font-medium text-sm"
                              style={{ color: accentColor }}
                            >
                              @ {item.company}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            <div className="flex items-center gap-1.5 text-xs text-[#858A96]">
                              <Calendar size={11} />
                              <span className="font-light">{item.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-[#858A96]">
                              <MapPin size={11} />
                              <span className="font-light">{item.location}</span>
                            </div>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown size={14} className="text-[#858A96]" />
                        </motion.div>
                      </button>

                      {/* Expandable content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: luxuryEase }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1">
                              <div
                                className="w-full h-px mb-4"
                                style={{ background: `linear-gradient(90deg, ${accentColor}30, transparent)` }}
                              />

                              <p className="text-[#858A96] text-sm leading-relaxed font-light mb-4">
                                {item.description}
                              </p>

                              <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#858A96] mb-2 block">
                                  Technologies
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {item.skills.map((skill, i) => (
                                    <motion.span
                                      key={skill}
                                      initial={{ opacity: 0, scale: 0.85 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.04, duration: 0.3 }}
                                      className="px-2.5 py-1 rounded-md font-mono text-[11px]"
                                      style={{
                                        background: `${accentColor}12`,
                                        border: `1px solid ${accentColor}25`,
                                        color: accentColor,
                                      }}
                                    >
                                      {skill}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
