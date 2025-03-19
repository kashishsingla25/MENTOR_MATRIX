
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
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  rememberMe: z.boolean().default(false),
});

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Reset error state
    setError(null);

    try {
      // For demonstration purposes only
      console.log('Login form values:', values);
      
      // Simulate successful login 
      // In a real app, this would be replaced with actual API calls
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-border/40 shadow-lg">
            <CardHeader className="text-center pb-2">
              <h1 className="text-2xl font-bold tracking-tight">Log in to Mentor Matrix</h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access your account
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
                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Remember me
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full">
                    Log in
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4 pb-4">
              <p className="text-sm text-center text-muted-foreground">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
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

export default Login;
