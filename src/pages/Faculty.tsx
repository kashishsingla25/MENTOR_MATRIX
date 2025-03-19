
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import FacultyCards from '@/components/FacultyCards';

const Faculty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Faculty Members</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Connect with our expert faculty members and get started on your project journey. 
            Browse through the profiles and find the perfect mentor for your academic endeavors.
          </p>
          <FacultyCards />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
