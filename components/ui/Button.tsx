import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "rounded-full font-semibold transition-all active:scale-95 hover:scale-105 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]",
    secondary: "glass text-white hover:bg-white/10",
    white: "bg-white text-black hover:bg-zinc-200",
    outline: "border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
