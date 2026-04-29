import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Dynamic Background */}
      <div className="mesh-bg" />
      
      {/* Navigation (Sticky Header) */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tighter">
            AG<span className="text-primary">-</span>UI
          </div>
          <div className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#work" className="transition-colors hover:text-white">Work</a>
            <a href="#stack" className="transition-colors hover:text-white">Stack</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
          <div className="glass rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            $25/hr
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Projects />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}

