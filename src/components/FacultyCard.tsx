
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Book, 
  GraduationCap, 
  Mail, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { Faculty } from '@/types/faculty';
import ProjectProposalForm from './ProjectProposalForm';

interface FacultyCardProps {
  faculty: Faculty;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Card className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'shadow hover:shadow-md'}`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <Avatar className="h-24 w-24 border-2 border-primary/10">
              <AvatarImage src={faculty.image} alt={faculty.name} />
              <AvatarFallback className="text-xl font-semibold">
                {faculty.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
              <div className="flex items-center justify-center md:justify-start gap-1 text-muted-foreground mb-2">
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm">{faculty.department}</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-1 text-primary mb-2">
                <Book className="h-4 w-4" />
                <span className="text-sm font-medium">{faculty.specialization}</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-1"
                onClick={toggleExpand}
              >
                {isExpanded ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Learn more</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {isExpanded && (
            <div className="mt-4 animate-fade-in">
              <div className="space-y-3 mb-4">
                <h4 className="font-medium">Research Interests</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  {faculty.researchInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full group"
                onClick={() => setIsFormOpen(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Send Project Proposal</span>
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <ProjectProposalForm 
        faculty={faculty} 
        open={isFormOpen} 
        onOpenChange={setIsFormOpen} 
      />
    </>
  );
};

export default FacultyCard;
