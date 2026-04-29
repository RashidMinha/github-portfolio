import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label';
  gradient?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ variant = 'p', gradient, children, className = '' }: TypographyProps) => {
  const styles = {
    h1: "text-5xl font-bold tracking-tight sm:text-7xl",
    h2: "text-3xl font-bold sm:text-5xl",
    h3: "text-xl font-bold",
    p: "text-zinc-400 leading-relaxed",
    span: "text-zinc-200",
    label: "text-[10px] uppercase tracking-widest text-zinc-500 font-bold"
  };

  const Component = variant === 'label' ? 'span' : variant;
  const gradientClass = gradient ? 'text-gradient' : '';

  return (
    <Component className={`${styles[variant]} ${gradientClass} ${className}`}>
      {children}
    </Component>
  );
};
