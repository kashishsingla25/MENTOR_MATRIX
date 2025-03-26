
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, Search, Clock, User, BookOpen } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Proposal } from '@/types/faculty';

// Mock data for demonstration purposes
const mockProposals: Proposal[] = [
  {
    id: 1,
    studentId: 101,
    facultyId: 201,
    studentName: 'John Doe',
    facultyName: 'Dr. Jane Smith',
    title: 'Machine Learning for Healthcare',
    description: 'A project focused on applying ML techniques to healthcare data for improved diagnostics.',
    status: 'pending',
    createdAt: '2023-10-15T10:30:00Z',
  },
  {
    id: 2,
    studentId: 101,
    facultyId: 202,
    studentName: 'John Doe',
    facultyName: 'Dr. Robert Johnson',
    title: 'Blockchain for Supply Chain',
    description: 'Implementing blockchain technology to improve supply chain transparency.',
    status: 'accepted',
    createdAt: '2023-10-10T14:45:00Z',
  },
  {
    id: 3,
    studentId: 102,
    facultyId: 201,
    studentName: 'Sarah Wilson',
    facultyName: 'Dr. Jane Smith',
    title: 'AI Ethics Framework',
    description: 'Developing an ethical framework for AI implementation in public sectors.',
    status: 'rejected',
    createdAt: '2023-10-05T09:15:00Z',
  },
  {
    id: 4,
    studentId: 101,
    facultyId: 203,
    studentName: 'John Doe',
    facultyName: 'Dr. Michael Brown',
    title: 'Quantum Computing Applications',
    description: 'Exploring practical applications of quantum computing in cryptography.',
    status: 'rejected',
    createdAt: '2023-09-28T16:20:00Z',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<'student' | 'faculty'>('student'); // This would come from auth context in a real app
  const [searchTerm, setSearchTerm] = useState('');
  
  // Toggle between student and faculty view (for demo purposes)
  const toggleRole = () => {
    setUserRole(userRole === 'student' ? 'faculty' : 'student');
  };

  const filteredProposals = mockProposals.filter(proposal => {
    if (userRole === 'student') {
      return proposal.studentId === 101 && // Mock current student ID
        (proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proposal.facultyName.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      return proposal.facultyId === 201 && // Mock current faculty ID
        (proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proposal.studentName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  });

  const getStatusBadge = (status: 'pending' | 'accepted' | 'rejected') => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1">
            <Clock className="h-3 w-3" /> Pending
          </Badge>
        );
      case 'accepted':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <Check className="h-3 w-3" /> Accepted
          </Badge>
        );
      case 'rejected':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
            <X className="h-3 w-3" /> Rejected
          </Badge>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              {userRole === 'student' 
                ? 'Track the status of your project proposals' 
                : 'Review project proposals from students'}
            </p>
          </div>
          
          {/* Toggle role button (for demo purposes) */}
          <Button onClick={toggleRole} variant="outline" className="gap-2">
            <User className="h-4 w-4" />
            Currently viewing as: {userRole === 'student' ? 'Student' : 'Faculty'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">
                {userRole === 'student' ? 'My Proposals' : 'Received Proposals'}
              </CardTitle>
              <CardDescription>
                {userRole === 'student' 
                  ? 'Project proposals you have submitted' 
                  : 'Project proposals submitted to you'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{filteredProposals.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Pending</CardTitle>
              <CardDescription>Awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {filteredProposals.filter(p => p.status === 'pending').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">
                {userRole === 'student' ? 'Accepted' : 'Approved'}
              </CardTitle>
              <CardDescription>
                {userRole === 'student' 
                  ? 'Proposals accepted by faculty' 
                  : 'Proposals you have approved'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {filteredProposals.filter(p => p.status === 'accepted').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {userRole === 'student' ? 'My Project Proposals' : 'Student Proposals'}
            </h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search proposals..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{userRole === 'student' ? 'Faculty' : 'Student'}</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                  {userRole === 'faculty' && <TableHead className="text-right">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProposals.length > 0 ? (
                  filteredProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell className="font-medium">
                        {userRole === 'student' ? proposal.facultyName : proposal.studentName}
                      </TableCell>
                      <TableCell>{proposal.title}</TableCell>
                      <TableCell>{new Date(proposal.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(proposal.status)}</TableCell>
                      {userRole === 'faculty' && proposal.status === 'pending' && (
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-8 border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
                            >
                              <Check className="h-4 w-4 mr-1" /> Accept
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-8 border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800"
                            >
                              <X className="h-4 w-4 mr-1" /> Reject
                            </Button>
                          </div>
                        </TableCell>
                      )}
                      {userRole === 'faculty' && proposal.status !== 'pending' && (
                        <TableCell className="text-right">
                          <Badge variant="outline">
                            {proposal.status === 'accepted' ? 'Accepted' : 'Rejected'}
                          </Badge>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={userRole === 'faculty' ? 5 : 4} className="h-24 text-center">
                      No proposals found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
