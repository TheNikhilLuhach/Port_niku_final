import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost';
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  href,
  external,
  download,
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 text-xs font-medium tracking-wide rounded-[2px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    // Primary: Deep Midnight Blue with Antique Gold border, hover Antique Gold fill
    primary:
      'bg-[#151C2B] text-[#D6D3CC] border border-[#C6A15B]/40 hover:bg-[#C6A15B] hover:text-[#090B10] hover:border-[#C6A15B] py-2.5 px-4 shadow-sm',
    // Secondary: Deep Midnight Blue with Steel Blue border, hover Gold border
    secondary:
      'bg-[#151C2B]/80 text-[#D6D3CC] border border-[#7792B5]/30 hover:border-[#C6A15B]/60 hover:text-[#EBE8E1] py-2.5 px-4',
    // Gold Accent
    gold:
      'bg-[#C6A15B] text-[#090B10] border border-[#C6A15B] hover:bg-[#DEC186] hover:border-[#DEC186] py-2.5 px-4 font-semibold shadow-sm',
    // Ghost
    ghost:
      'bg-transparent text-[#858A96] hover:text-[#C6A15B] hover:bg-[#151C2B]/50 py-2 px-3',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          download={download}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
