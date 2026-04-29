import React from 'react';
import { Typography } from './ui/Typography';
import { Card } from './ui/Card';

const techs = [
  "Next.js", "SvelteKit 5", "React", "TypeScript", 
  "Node.js", "Meteor.js", "Strapi CMS", "MongoDB",
  "PostgreSQL", "Vercel AI SDK", "oRPC", "Zustand"
];

export const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-4 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Typography variant="label" className="mb-8 block">Modern Stack for Agentic Apps</Typography>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, index) => (
            <Card key={index} className="px-6 py-3 rounded-2xl p-0 hover:text-primary" hover={true}>
              <Typography variant="span" className="font-medium">{tech}</Typography>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Visual background element */}
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};
