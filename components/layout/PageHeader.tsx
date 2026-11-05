import React from 'react';
import { Container } from './Container';

interface PageHeaderProps {
  index: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  index,
  title,
  lead,
  children,
  className = '',
}: PageHeaderProps) {
  return (
    <section className={`pt-32 pb-14 sm:pb-18 border-b border-[#7792B5]/20 bg-gradient-to-b from-[#151C2B] to-[#090B10] relative overflow-hidden midnight-grid-overlay ${className}`}>
      {/* Subtle gold line accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-transparent" />
      
      {/* Atmospheric glow */}
      <div className="cinematic-lighting lighting-blue w-[400px] h-[400px] top-[-50px] right-[-50px]" />
      <div className="cinematic-lighting lighting-burgundy w-[300px] h-[300px] bottom-0 left-[-50px]" />

      <Container>
        <div className="max-w-4xl space-y-5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span className="text-xs font-mono uppercase tracking-luxury text-[#C6A15B]">
              {index}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#EBE8E1] leading-[1.08]">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-[#D6D3CC] leading-relaxed max-w-2xl font-normal">
            {lead}
          </p>

          {children && <div className="mt-8 pt-4">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
