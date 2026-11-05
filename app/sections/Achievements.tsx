'use client';

import { Trophy, Award, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  FadeUp,
  TiltCard,
  StaggerGroup,
  StaggerItem,
  EditorialGoldDivider,
  luxuryEase,
} from '@/components/motion/MotionPrimitives';

const achievements = [
  {
    id: 'hackathon',
    type: 'Engineering Innovation',
    title: 'Hackathon 2nd Place',
    organization: 'College Innovation Summit',
    badge: 'Runner Up Award',
    date: '2024',
    summary: 'Awarded 2nd position for developing the Nexora project, presenting technical feasibility, backend integration, and real-time execution in a fast-paced competitive hackathon.',
    details: [
      'Engineered backend integration under strict time limits',
      'Demonstrated working prototype to industry evaluation panel',
      'Focused on modular architecture and user interaction flow',
    ],
    highlightColor: '#C6A15B',
    icon: Trophy,
  },
  {
    id: 'karate',
    type: 'Athletic Discipline',
    title: 'District Silver Medalist',
    organization: 'District Martial Arts Championship',
    badge: 'Karate Championship',
    date: 'Competitive',
    summary: 'Won silver medal in competitive Karate at district level. Demonstrates physical resilience, acute focus under pressure, strategic mindset, and personal discipline.',
    details: [
      'Rigorous conditioning, tactical sparring, and mental composure',
      'Reflects daily discipline and dedication beyond software engineering',
      'High-pressure performance and execution mindset',
    ],
    highlightColor: '#8C3F4D',
    icon: Award,
  },
];

const certifications = [
  {
    title: 'DevOps & CI/CD Pipelines',
    issuer: 'LinuxWorld Informatics Pvt. Ltd.',
    focus: 'Docker containerization, CI/CD automation, Linux system administration',
    period: '2026',
  },
  {
    title: 'Applied Generative AI',
    issuer: 'LinuxWorld Informatics Pvt. Ltd.',
    focus: 'Google Gemini API integration, prompt engineering, conversational agents',
    period: '2025',
  },
  {
    title: 'AWS Cloud Computing',
    issuer: 'LinuxWorld Informatics Pvt. Ltd.',
    focus: 'Amazon EC2 compute instances, S3 storage buckets, IAM least privilege',
    period: '2024',
  },
  {
    title: 'Modern Web Engineering',
    issuer: '1Stop.ai',
    focus: 'HTML5, CSS3, JavaScript modern standards and responsive interfaces',
    period: '2024',
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="contact-atmosphere relative py-28 overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-24 right-[8%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(198,161,91,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}
        animate={{ scale: [1, 1.18, 1], x: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-[6%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(140,63,77,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating section number */}
      <div
        className="absolute top-12 right-6 font-['Cormorant_Garamond'] text-[160px] font-bold leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: 'rgba(198,161,91,0.04)', letterSpacing: '-0.04em' }}
      >
        06
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-8 bg-[#C6A15B]" />
              <span className="font-mono text-xs text-[#858A96] uppercase tracking-[0.25em]">Distinctions & Credentials</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light leading-none mb-4"
              style={{ color: '#D6D3CC' }}
            >
              Honors &{' '}
              <span style={{ color: '#C6A15B', fontStyle: 'italic' }}>Recognition</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="text-[#858A96] font-light max-w-xl">
              Competitive milestones, martial arts achievement, and certified industrial training programs.
            </p>
          </FadeUp>
        </div>

        <EditorialGoldDivider delay={0.15} className="mb-16" />

        {/* Major Honors — 2 column cards */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <TiltCard intensity={10} className="h-full">
                  <div
                    className="relative h-full rounded-xl p-6 flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, #151C2B 0%, #0E1420 100%)',
                      border: `1px solid ${item.highlightColor}25`,
                      boxShadow: `0 12px 40px rgba(9,11,16,0.7), 0 0 20px ${item.highlightColor}08`,
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
                      style={{ background: `linear-gradient(90deg, ${item.highlightColor}, transparent)` }}
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${item.highlightColor}15`,
                          border: `1px solid ${item.highlightColor}35`,
                        }}
                      >
                        <Icon size={20} style={{ color: item.highlightColor }} />
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest"
                        style={{
                          background: `${item.highlightColor}15`,
                          border: `1px solid ${item.highlightColor}30`,
                          color: item.highlightColor,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mb-1">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#858A96] mb-1">{item.type}</div>
                      <h3
                        className="font-['Cormorant_Garamond'] text-2xl font-light leading-snug"
                        style={{ color: '#D6D3CC' }}
                      >
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#858A96] font-light mt-0.5">{item.organization} · {item.date}</div>
                    </div>

                    <div className="w-full h-px my-4" style={{ background: `linear-gradient(90deg, ${item.highlightColor}25, transparent)` }} />

                    <p className="text-[#858A96] text-sm leading-relaxed font-light mb-4 flex-1">
                      {item.summary}
                    </p>

                    <div className="space-y-2">
                      {item.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: item.highlightColor }} />
                          <span className="text-[#858A96] text-xs font-light leading-relaxed">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-[rgba(198,161,91,0.08)]">
                      <CheckCircle2 size={11} className="text-[#C6A15B]" />
                      <span className="font-mono text-[10px] text-[#858A96]">Verified Milestone</span>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Certifications */}
        <FadeUp className="mb-6">
          <div className="flex items-center gap-3">
            <Sparkles size={12} className="text-[#C6A15B]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#858A96]">Industrial Training Credentials</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(198,161,91,0.2), transparent)' }} />
          </div>
        </FadeUp>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <StaggerItem key={cert.title}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(198,161,91,0.4)' }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-xl h-full flex flex-col"
                style={{
                  background: 'rgba(21,28,43,0.6)',
                  border: '1px solid rgba(198,161,91,0.12)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-[#858A96]">{cert.period}</span>
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    <ShieldCheck size={11} />
                    <span className="font-mono text-[9px]">Certified</span>
                  </div>
                </div>

                <h4 className="font-['Cormorant_Garamond'] text-base font-light text-[#D6D3CC] leading-snug mb-1.5">
                  {cert.title}
                </h4>

                <div className="font-mono text-[10px] text-[#DEC186] mb-2">{cert.issuer}</div>

                <p className="text-[#858A96] text-xs leading-relaxed font-light flex-1">
                  {cert.focus}
                </p>

                <div className="mt-3 pt-3 border-t border-[rgba(198,161,91,0.08)]">
                  <span className="font-mono text-[9px] text-[#858A96]">Industry Training</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
