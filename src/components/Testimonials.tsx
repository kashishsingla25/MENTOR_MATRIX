
import React from 'react';
import { cn } from '@/lib/utils';

// Define the props interface for the Testimonial component
interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  className?: string;
}

// Individual testimonial component
const Testimonial = ({ quote, name, role, avatarSrc, className }: TestimonialProps) => (
  <div className={cn(
    "flex flex-col p-6 bg-background/60 backdrop-blur-sm rounded-2xl border shadow-lg",
    className
  )}>
    <div className="mb-4">
      <svg
        className="h-8 w-8 text-primary/70"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    </div>
    <p className="flex-grow mb-4 text-foreground/80 italic">{quote}</p>
    <div className="flex items-center space-x-3">
      <div className="relative w-10 h-10 overflow-hidden rounded-full">
        <img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

// Main Testimonials component
const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      quote: "The mentor-student matching system is incredible. I found the perfect mentor for my machine learning project and completed it ahead of schedule.",
      name: "Alex Rivera",
      role: "Computer Science Student",
      avatarSrc: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      quote: "Mentor Matrix streamlined my workflow as a mentor. The progress tracking tools help me provide timely feedback to my students.",
      name: "Dr. Sarah Chen",
      role: "Senior Software Engineer",
      avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
    },
    {
      quote: "The platform's communication tools made remote collaboration seamless. My mentor and I had productive sessions despite being in different time zones.",
      name: "Mohammed Al-Farsi",
      role: "Graduate Student",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Success</h2>
          <p className="text-lg text-muted-foreground">
            Discover how Mentor Matrix is transforming project development and mentorship experiences across academic institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarSrc={testimonial.avatarSrc}
              className={index === 1 ? "md:transform md:translate-y-8" : ""}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
