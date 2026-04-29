import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'glass';
}

export const Badge = ({ children, className = '', variant = 'glass' }: BadgeProps) => {
  const variants = {
    primary: "bg-primary/20 text-primary border-primary/30",
    outline: "border border-white/10 text-zinc-400",
    glass: "glass text-primary"
  };

  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
