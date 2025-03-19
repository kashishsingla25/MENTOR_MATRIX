
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Tag line */}
          <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-muted-foreground mb-6 animate-fadeIn">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Transforming Project Mentorship
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight mb-6 animate-slideUp">
            Connect, Collaborate, <br className="hidden md:block" />
            <span className="text-primary">Create Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8 animate-slideUp animate-delay-100">
            A streamlined platform connecting mentors and students for exceptional project development and knowledge transfer.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp animate-delay-200">
            <Link to="/faculty">
              <Button size="lg" className="font-medium group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="font-medium group">
              Learn More
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl animate-slideUp animate-delay-300">
            {[
              { text: "Secure interaction channels", icon: <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> },
              { text: "Real-time collaboration", icon: <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> },
              { text: "Progress tracking & insights", icon: <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-sm font-medium">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
