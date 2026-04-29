import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';
import { Card } from './ui/Card';

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center overflow-hidden">
      {/* Background Image Asset */}
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen grayscale-[0.5]">
        <Image 
          src="/hero-bg.png" 
          alt="AI Interface Background" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="animate-pulse-subtle absolute top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
      
      <div className="glass animate-float mb-8 rounded-full px-6 py-2 text-sm font-medium tracking-wide text-primary shadow-lg">
        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
        Available for Full-Stack AI Projects
      </div>

      <Typography variant="h1">
        Senior <Typography variant="span" gradient>Full-Stack Developer</Typography>
      </Typography>
      
      <Typography variant="p" className="mt-8 max-w-2xl sm:text-xl">
        I build production-grade AI Agent interfaces and scalable backends. 
        Expertise in **Next.js**, **SvelteKit 5**, **Node.js**, and **Meteor.js**. 
        Turning complex agent logic into seamless, high-performance products.
      </Typography>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {[
          { label: 'Years Exp', val: '5+' },
          { label: 'Projects', val: '10+' },
          { label: 'Education', val: 'BSc CS' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 min-w-[160px]" hover={false}>
            <Typography variant="h2" className="text-white !text-3xl">{stat.val}</Typography>
            <Typography variant="label" className="mt-1">{stat.label}</Typography>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex gap-4">
        <a href="#work">
          <Button variant="white">View Projects</Button>
        </a>
        <a href="https://www.upwork.com/freelancers/~01e154d71c24c52f45" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">Get in Touch</Button>
        </a>
      </div>
    </section>
  );
};
