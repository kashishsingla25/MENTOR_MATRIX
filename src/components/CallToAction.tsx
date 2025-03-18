
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 to-transparent opacity-20"></div>
      <div className="absolute -right-20 bottom-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-20 top-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideUp">
              Ready to transform your project experience?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slideUp animate-delay-100">
              Join Mentor Matrix today and experience the future of academic project collaboration.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp animate-delay-200">
            <Button size="lg" className="font-medium group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
