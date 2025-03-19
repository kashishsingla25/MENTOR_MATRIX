
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions to continue.',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Reset error state
    setError(null);

    try {
      // For demonstration purposes only
      console.log('Signup form values:', values);
      
      // Simulate successful signup
      // In a real app, this would be replaced with actual API calls
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      
    } catch (err) {
      setError('An error occurred during signup. Please try again.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-md">
          <Card className="border-border/40 shadow-lg">
            <CardHeader className="text-center pb-2">
              <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
              <p className="text-sm text-muted-foreground">
                Join Mentor Matrix to connect with mentors and manage projects
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="name@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            I agree to the{' '}
                            <Link 
                              to="/terms" 
                              className="text-primary hover:underline"
                            >
                              terms of service
                            </Link>
                            {' '}and{' '}
                            <Link 
                              to="/privacy" 
                              className="text-primary hover:underline"
                            >
                              privacy policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Create account
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4 pb-4">
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-primary font-medium hover:underline"
                >
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
