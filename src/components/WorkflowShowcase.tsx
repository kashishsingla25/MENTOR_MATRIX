
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, UserCheck, MessageCircle, FileText } from 'lucide-react';

const WorkflowShowcase = () => {
  const steps = [
    {
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      title: "Connect",
      description: "Students and mentors create profiles and establish connections based on project requirements and expertise."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Collaborate",
      description: "Work together on projects with document sharing, task assignments, and progress tracking tools."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Communicate",
      description: "Exchange ideas, provide feedback, and hold discussions through secure real-time messaging."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Complete",
      description: "Successfully deliver projects with documentation, presentations, and final reviews."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-fadeIn">
            Workflow
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideUp">
            Streamlined project mentorship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slideUp animate-delay-100">
            Our intuitive workflow simplifies the collaboration between mentors and students
            throughout the entire project lifecycle.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 animate-slideUp`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Step indicator */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md z-10 border-4 border-background">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className={`glass-card p-6 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
