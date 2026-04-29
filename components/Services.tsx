import React from 'react';
import { Typography } from './ui/Typography';
import { Card } from './ui/Card';

const services = [
  {
    title: "Full-Stack AI Solutions",
    description: "End-to-end development of AI products, from complex agent backends in Node.js/Meteor to high-performance frontends.",
    icon: "🚀"
  },
  {
    title: "AG-UI Agent Frontends",
    description: "Next.js 14 & SvelteKit 5 interfaces with SSE streaming, generative UI rendering, and human-in-the-loop workflows.",
    icon: "🤖"
  },
  {
    title: "Real-time Dashboards",
    description: "Session-aware dashboards using Vercel AI SDK, custom WebSocket pipelines, and real-time database sync.",
    icon: "📊"
  },
  {
    title: "Scalable Architecture",
    description: "Monorepo setups, microservices, and type-safe communication (oRPC/tRPC) for robust, maintainable systems.",
    icon: "🏗️"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-24">
      <div className="mb-16 text-center">
        <Typography variant="h2" className="mb-4">Core <Typography variant="span" gradient>Capabilities</Typography></Typography>
        <Typography variant="p" className="max-w-2xl mx-auto">Bridging the gap between AI intelligence and user-centric products.</Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group border-transparent">
            <div className="text-4xl mb-6">{service.icon}</div>
            <Typography variant="h3" className="mb-4 group-hover:text-primary transition-colors">{service.title}</Typography>
            <Typography variant="p">{service.description}</Typography>
          </Card>
        ))}
      </div>
    </section>
  );
};
