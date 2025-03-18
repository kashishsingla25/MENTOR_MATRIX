
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, Users, FileCheck, Shield, Clock, 
  BarChart3, Zap, Briefcase, Bell 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Real-time Communication",
      description: "Instant messaging with read receipts and typing indicators for seamless mentor-student interaction."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Collaboration",
      description: "Organize teams, assign roles, and facilitate productive collaboration among project participants."
    },
    {
      icon: <FileCheck className="h-5 w-5" />,
      title: "Progress Tracking",
      description: "Monitor project milestones and objectives with intuitive visualization of completed tasks."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure Environment",
      description: "JWT authentication, encrypted communications, and robust security practices keep your data safe."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Scheduling Tools",
      description: "Plan meetings, set deadlines, and manage time effectively with integrated scheduling features."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Performance Analytics",
      description: "Gain insights into project progress, participation metrics, and overall effectiveness."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications about project activities and mentor feedback."
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Project Management",
      description: "Comprehensive tools for creating, organizing, and executing successful academic projects."
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Smart Notifications",
      description: "Customizable alerts for project updates, mentor feedback, and important deadlines."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-3/4 max-w-3xl aspect-square rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-fadeIn">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideUp">
            Everything you need for successful projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-slideUp animate-delay-100">
            Our comprehensive suite of tools empowers mentors and students to collaborate effectively
            and achieve exceptional results on academic projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slideUp"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="feature-icon-bg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
