import React, { useState } from 'react';
import FacultyCard from './FacultyCard';
import { Input } from '@/components/ui/input';
import { Faculty } from '@/types/faculty';
import { Search } from 'lucide-react';

// Sample faculty data
const facultyData: Faculty[] = [
  {
    id: 1,
    name: "Dr. Elizabeth Chen",
    department: "Computer Science",
    specialization: "Machine Learning & AI",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    researchInterests: [
      "Deep Learning Algorithms",
      "Natural Language Processing",
      "Computer Vision",
      "Ethical AI Development"
    ]
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    department: "Electrical Engineering",
    specialization: "Embedded Systems & IoT",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    researchInterests: [
      "IoT Network Architecture",
      "Low-Power Embedded Systems",
      "Smart Home Technology",
      "Edge Computing"
    ]
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    department: "Information Technology",
    specialization: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    researchInterests: [
      "Network Security",
      "Blockchain Applications",
      "Cryptography",
      "Secure Software Development"
    ]
  },
  {
    id: 4,
    name: "Prof. Michael Rodriguez",
    department: "Computer Engineering",
    specialization: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    researchInterests: [
      "Cloud Native Architecture",
      "Microservices",
      "Progressive Web Applications",
      "DevOps Practices"
    ]
  },
  {
    id: 5,
    name: "Dr. Robert Zhang",
    department: "Data Science",
    specialization: "Big Data Analytics",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    researchInterests: [
      "Predictive Analytics",
      "Data Visualization",
      "Business Intelligence",
      "Statistical Modeling"
    ]
  },
  {
    id: 6,
    name: "Prof. Rebecca Patel",
    department: "Biotechnology",
    specialization: "Bioinformatics",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    researchInterests: [
      "Genomic Data Analysis",
      "Protein Structure Prediction",
      "Computational Drug Discovery",
      "Systems Biology"
    ]
  }
];

const FacultyCards = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyData.filter(faculty => 
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.researchInterests.some(interest => 
      interest.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search faculty by name, department, or specialization..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map(faculty => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-muted-foreground">No faculty members found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyCards;
