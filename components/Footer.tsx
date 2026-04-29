import React from 'react';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';
import { Card } from './ui/Card';

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-4 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="text-left">
          <Typography variant="h2" className="mb-4">Let's build the <Typography variant="span" gradient>Future</Typography></Typography>
          <Typography variant="p" className="max-w-sm mb-8">Ready to turn your agent backend into something users trust? Let's connect.</Typography>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Card className="h-10 w-10 flex items-center justify-center rounded-lg p-0 border-transparent" hover={false}>
                <span className="text-primary">📧</span>
              </Card>
              <div>
                <Typography variant="label">Email</Typography>
                <a href="mailto:rashidminhas9112@gmail.com" className="text-zinc-200 hover:text-primary transition-colors block">rashidminhas9112@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Card className="h-10 w-10 flex items-center justify-center rounded-lg p-0 border-transparent" hover={false}>
                <span className="text-primary">📞</span>
              </Card>
              <div>
                <Typography variant="label">Phone / WhatsApp</Typography>
                <a href="tel:+923434694191" className="text-zinc-200 hover:text-primary transition-colors block">03434694191</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <a href="https://www.upwork.com/freelancers/~01e154d71c24c52f45" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">Hire me on Upwork</Button>
          </a>
          <Typography variant="label" className="text-center">5-Star Rated Full-Stack Developer</Typography>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-zinc-600 uppercase tracking-tighter">
        <Typography variant="p" className="text-xs">&copy; {new Date().getFullYear()} Rashid Minhas. All Rights Reserved.</Typography>
        <Typography variant="p" className="text-xs">BSc in Computer Science (2020)</Typography>
      </div>
    </footer>
  );
};
