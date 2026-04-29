import React from 'react';
import { Typography } from './ui/Typography';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const projects = [
  {
    title: "FieldPulse",
    role: "Frontend Developer",
    duration: "June 2024 - July 2025",
    description: "The #1-rated field service management platform. Developed complex reactive scheduling dashboards and dispatching modules using SvelteKit, serving 40,000+ professionals.",
    tech: ["SvelteKit", "Tailwind CSS", "Real-time", "D3.js"],
    url: "https://fieldpulse.com"
  },
  {
    title: "Alpentöne",
    role: "Frontend Developer",
    duration: "Dec 2023 - March 2024",
    description: "International music festival platform. Built a scalable component mapping architecture connected to Strapi CMS, allowing dynamic page building with SvelteKit.",
    tech: ["SvelteKit", "Tailwind CSS", "Strapi CMS", "PostgreSQL"],
    url: "https://alpentoene.ch/"
  },
  {
    title: "Predictable Hiring",
    role: "Full-stack Developer",
    duration: "Nov 2022 - June 2023",
    description: "Technical recruitment platform pre-vetting developers through live coding. Built real-time candidate tracking and interview scheduling using Svelte and MeteorJS.",
    tech: ["Svelte", "MeteorJS", "Tailwind CSS", "PostHog"],
    url: "https://www.predictablehiring.io"
  },
  {
    title: "TimeWise",
    role: "Frontend Developer",
    duration: "August 2021 - Oct 2022",
    description: "AI-powered productivity app for freelancers. Developed real-time progress tracking and schedule generation with an offline-first philosophy.",
    tech: ["React", "Tailwind CSS", "AI", "Mobile"],
    url: "https://timewise.com"
  },
  {
    title: "Went-medic",
    role: "Frontend Developer",
    duration: "July 2023 - Oct 2023",
    description: "Frontend development for a medical-tech platform focusing on streamlined healthcare management and responsive practitioner dashboards.",
    tech: ["Svelte", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "AfterLib",
    role: "Full-stack Developer",
    duration: "2021",
    description: "Advertising intelligence platform using a monorepo architecture. Integrated SvelteKit with Node.js microservices and oRPC communication.",
    tech: ["SvelteKit", "Node.js", "oRPC", "Microservices"]
  },
  {
    title: "GilgitApp",
    role: "Frontend Developer",
    duration: "2020",
    description: "Local marketplace for buying and selling, featuring real-time interactions and a wide range of categories for regional users.",
    tech: ["React", "Node.js", "MongoDB", "Redux"]
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-24 px-4 bg-zinc-950/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <Typography variant="h2" className="mb-4">Selected <Typography variant="span" gradient>Work</Typography></Typography>
            <Typography variant="p">Scaling products from 0 to 1 with production-grade engineering.</Typography>
          </div>
          <Badge>10+ Projects Delivered</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden p-0 border-white/5 group flex flex-col">
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center transition-all group-hover:bg-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.15),transparent_70%)]" />
                <Typography variant="h3" className="text-white/20 font-black text-6xl uppercase tracking-tighter select-none">{project.title.split(' ')[0]}</Typography>
                
                <div className="absolute top-4 right-4">
                  <Badge variant="glass" className="bg-white/5 backdrop-blur-md border-white/10">{project.duration}</Badge>
                </div>
              </div>
              
              <div className="p-8 flex flex-1 flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Typography variant="h3" className="mb-1">{project.title}</Typography>
                    <Typography variant="p" className="text-primary text-xs font-bold uppercase tracking-widest">{project.role}</Typography>
                  </div>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="px-3 py-1">
                        Live <span className="hidden sm:inline">Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
                
                <Typography variant="p" className="text-sm mb-6 flex-1 text-zinc-400 leading-relaxed">{project.description}</Typography>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1 !text-[10px] bg-white/[0.02] border-white/5">{t}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
