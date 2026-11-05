'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, Variants, AnimatePresence } from 'framer-motion';

// ─── Core Easing ─────────────────────────────────────────────────────────────
export const luxuryEase = [0.16, 1, 0.3, 1] as const;
export const cinematicEase = [0.22, 1, 0.36, 1] as const;

// ─── 1. Editorial Fade Up ─────────────────────────────────────────────────────
export function FadeUp({
  children,
  delay = 0,
  duration = 0.75,
  className = '',
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: luxuryEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 2. Mask Reveal (headline emerging from behind baseline) ─────────────────
export function MaskReveal({
  children,
  delay = 0,
  duration = 0.85,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration, delay, ease: luxuryEase }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── 3. Cinematic Letter-by-Letter Name Reveal ───────────────────────────────
export function CinematicNameReveal({
  text = 'NIKHIL KUMAR',
  className = '',
}: {
  text?: string;
  className?: string;
}) {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.15 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 80,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -35,
      filter: 'blur(4px)',
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 80,
      },
    },
  };

  return (
    <motion.h1
      className={`font-serif tracking-tight flex flex-wrap select-none perspective-1000 ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wi) => (
        <span key={wi} className="flex mr-[0.25em]">
          {Array.from(word).map((char, ci) => (
            <motion.span
              variants={child}
              key={ci}
              className="inline-block"
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

// ─── 4. Stagger Group ─────────────────────────────────────────────────────────
export function StaggerGroup({
  children,
  staggerDelay = 0.08,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  delay?: number;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 5. Stagger Item ──────────────────────────────────────────────────────────
export function StaggerItem({
  children,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}) {
  const offsets = {
    up:    { y: 24, x: 0 },
    left:  { y: 0, x: -24 },
    right: { y: 0, x: 24 },
  };
  const off = offsets[direction];

  const itemVariants: Variants = {
    hidden: { opacity: 0, ...off },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, ease: luxuryEase },
    },
  };
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ─── 6. Spotlight Card (mouse-tracking radial highlight) ─────────────────────
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(198, 161, 91, 0.18)',
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

// ─── 7. 3D Tilt Card ─────────────────────────────────────────────────────────
export function TiltCard({
  children,
  className = '',
  intensity = 8,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -intensity;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setTilt({ x: 0, y: 0 }); }}
      animate={{
        rotateX: isHovered ? tilt.x : 0,
        rotateY: isHovered ? tilt.y : 0,
        scale: isHovered ? 1.02 : 1,
        z: isHovered ? 30 : 0,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 28 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 8. Ambient Floating Particles ───────────────────────────────────────────
export function AmbientParticles({ count = 14 }: { count?: number }) {
  const particles = [
    { left: '8%',  top: '18%', size: '3px',   color: '#C6A15B', delay: '0s',   dur: '7s' },
    { left: '22%', top: '62%', size: '4px',   color: '#8C3F4D', delay: '1.5s', dur: '9s' },
    { left: '42%', top: '14%', size: '2px',   color: '#7792B5', delay: '0.8s', dur: '6s' },
    { left: '65%', top: '40%', size: '3px',   color: '#C6A15B', delay: '2s',   dur: '8.5s' },
    { left: '80%', top: '75%', size: '4px',   color: '#8C3F4D', delay: '3s',   dur: '10s' },
    { left: '91%', top: '22%', size: '2.5px', color: '#7792B5', delay: '1s',   dur: '7.5s' },
    { left: '15%', top: '80%', size: '3px',   color: '#C6A15B', delay: '2.5s', dur: '8s' },
    { left: '53%', top: '83%', size: '3.5px', color: '#DEC186', delay: '0.5s', dur: '9.5s' },
    { left: '72%', top: '12%', size: '2px',   color: '#8C3F4D', delay: '1.8s', dur: '6.5s' },
    { left: '33%', top: '35%', size: '2px',   color: '#7792B5', delay: '2.2s', dur: '7s' },
    { left: '5%',  top: '45%', size: '3px',   color: '#DEC186', delay: '3.5s', dur: '11s' },
    { left: '87%', top: '55%', size: '2.5px', color: '#C6A15B', delay: '0.3s', dur: '8s' },
    { left: '48%', top: '55%', size: '2px',   color: '#7792B5', delay: '4s',   dur: '7s' },
    { left: '60%', top: '90%', size: '3px',   color: '#8C3F4D', delay: '1.2s', dur: '9s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}88`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
    </div>
  );
}

// ─── 9. Scroll Progress Bar ───────────────────────────────────────────────────
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, boxShadow: '0 0 10px rgba(198,161,91,0.5)' } as React.CSSProperties}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8C3F4D] via-[#C6A15B] to-[#DEC186] z-[100] origin-left"
    />
  );
}

// ─── 10. Gold Editorial Divider ───────────────────────────────────────────────
export function EditorialGoldDivider({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.0, delay, ease: luxuryEase }}
        className="h-[1px] bg-gradient-to-r from-[#C6A15B]/60 via-[#7792B5]/25 to-transparent"
      />
    </div>
  );
}

// ─── 11. Scroll-Linked Parallax Wrapper ──────────────────────────────────────
export function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

// ─── 12. Animated Section Number ─────────────────────────────────────────────
export function AnimatedSectionLabel({
  number,
  label,
  className = '',
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <FadeUp className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-[10px] text-[#C6A15B] font-semibold tracking-wider">{number}</span>
      <span className="h-px w-8 bg-gradient-to-r from-[#C6A15B] to-transparent" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C6A15B]">{label}</span>
    </FadeUp>
  );
}

// ─── 13. Text Split Reveal (line by line) ────────────────────────────────────
export function SplitReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const lines = text.split('\n');

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + i * 0.12, ease: luxuryEase }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

// ─── 14. Magnetic Button Wrapper ─────────────────────────────────────────────
export function MagneticButton({
  children,
  className = '',
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  return (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 15. Counter Animation ────────────────────────────────────────────────────
export function AnimatedCounter({
  value,
  suffix = '',
  className = '',
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
