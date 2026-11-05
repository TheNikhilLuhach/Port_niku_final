import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'luxury' | 'status' | 'outline' | 'burgundy' | 'gold';
  statusType?: 'verified' | 'simulation' | 'config';
  className?: string;
}

export function Badge({
  children,
  variant = 'luxury',
  statusType = 'verified',
  className = '',
}: BadgeProps) {
  if (variant === 'status') {
    const isVerified = statusType === 'verified';
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider py-0.5 px-2.5 rounded-[2px] bg-[#151C2B] border border-[#C6A15B]/30 text-[#D6D3CC] shadow-xs ${className}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isVerified ? 'bg-[#C6A15B]' : 'bg-[#7792B5]'
          }`}
        />
        <span>{children}</span>
      </span>
    );
  }

  if (variant === 'burgundy') {
    return (
      <span
        className={`inline-flex items-center text-[10px] font-mono text-[#C67080] bg-[#8C3F4D]/15 border border-[#8C3F4D]/30 py-0.5 px-2 rounded-[2px] ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === 'gold') {
    return (
      <span
        className={`inline-flex items-center text-[10px] font-mono text-[#DEC186] bg-[#C6A15B]/12 border border-[#C6A15B]/30 py-0.5 px-2 rounded-[2px] ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === 'outline') {
    return (
      <span
        className={`inline-flex items-center text-[10px] font-mono text-[#858A96] border border-[#7792B5]/30 py-0.5 px-2 rounded-[2px] bg-transparent ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default 'luxury'
  return (
    <span
      className={`inline-flex items-center text-[10px] font-mono text-[#7792B5] py-0.5 px-2 rounded-[2px] bg-[#151C2B] border border-[#7792B5]/20 hover:border-[#C6A15B]/50 transition-colors ${className}`}
    >
      {children}
    </span>
  );
}
