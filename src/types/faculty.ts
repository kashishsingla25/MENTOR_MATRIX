
export interface Faculty {
  id: number;
  name: string;
  department: string;
  specialization: string;
  image: string;
  researchInterests: string[];
}

export interface Proposal {
  id: number;
  studentId: number;
  facultyId: number;
  studentName: string;
  facultyName: string;
  title: string;
  description: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  major: string;
}
