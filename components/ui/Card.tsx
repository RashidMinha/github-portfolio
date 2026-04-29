import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div className={`glass rounded-3xl p-8 transition-all ${hover ? 'hover:-translate-y-2 hover:border-primary/50' : ''} ${className}`}>
      {children}
    </div>
  );
};
