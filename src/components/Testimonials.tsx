
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  className?: string;
}

const Testimonial = ({ quote, name, role, avatarSrc, className }: TestimonialProps) => (
  <Card className={cn("border-none glass-card transition-all duration-300 hover:shadow-lg", className)}>
    <CardContent className="p-6">
      <blockquote className="text-lg mb-6">"{quote}"</blockquote>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mentor Matrix has transformed how I guide my students through complex projects. The real-time collaboration features have made feedback more effective and timely.",
      name: "Dr. Sarah Chen",
      role: "Professor of Computer Science",
      avatarSrc: ""
    },
    {
      quote: "The progress tracking tools helped our team stay organized and meet all our deadlines. Communication with our mentor was seamless and productive.",
      name: "Michael Rodriguez",
      role: "Engineering Student",
      avatarSrc: ""
    },
    {
      quote: "As a department head, I've seen a significant improvement in project outcomes since implementing Mentor Matrix across our program.",
      name: "Prof. James Wilson",
      role: "Department Chair",
      avatarSrc: ""
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-fadeIn">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideUp">
            What people are saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slideUp animate-delay-100">
            Discover how Mentor Matrix has transformed project mentorship for educators and students alike.
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
              className="animate-slideUp"
              style={{ animationDelay: `${(index + 1) * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
