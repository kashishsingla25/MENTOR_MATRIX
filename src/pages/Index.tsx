
import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WorkflowShowcase from '@/components/WorkflowShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <WorkflowShowcase />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
