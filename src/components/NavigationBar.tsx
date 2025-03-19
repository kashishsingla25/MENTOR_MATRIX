
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary rounded-md rotate-45 animate-pulse"></div>
                <div className="absolute inset-1 bg-white rounded-sm rotate-45"></div>
                <div className="absolute inset-[6px] bg-primary rounded-sm rotate-45"></div>
              </div>
              <span className="font-bold text-xl tracking-tight">Mentor Matrix</span>
            </Link>
          </div>

          {/* Desktop Navigation - Using shadcn NavigationMenu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <Link to="#project-management" className="flex flex-col gap-1 items-start p-3 hover:bg-accent rounded-md">
                        <div className="font-medium">Project Management</div>
                        <div className="text-sm text-muted-foreground">Track progress and manage deadlines effectively</div>
                      </Link>
                      <Link to="#mentorship" className="flex flex-col gap-1 items-start p-3 hover:bg-accent rounded-md">
                        <div className="font-medium">Mentorship</div>
                        <div className="text-sm text-muted-foreground">Connect with experienced mentors in your field</div>
                      </Link>
                      <Link to="#communication" className="flex flex-col gap-1 items-start p-3 hover:bg-accent rounded-md">
                        <div className="font-medium">Communication</div>
                        <div className="text-sm text-muted-foreground">Real-time chat and collaboration tools</div>
                      </Link>
                      <Link to="#file-sharing" className="flex flex-col gap-1 items-start p-3 hover:bg-accent rounded-md">
                        <div className="font-medium">File Sharing</div>
                        <div className="text-sm text-muted-foreground">Securely share documents and resources</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="#about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="#contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-medium transition-all hover:scale-105" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" className="font-medium transition-all hover:scale-105" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <a
            href="#features"
            onClick={toggleMenu}
            className="w-full text-center py-3 text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="w-full text-center py-3 text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="w-full text-center py-3 text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
          <div className="flex flex-col w-full space-y-4 pt-4">
            <Button variant="outline" className="w-full font-medium" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="w-full font-medium" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
