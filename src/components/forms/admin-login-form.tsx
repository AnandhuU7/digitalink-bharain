'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';

export default function AdminLoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Ensure component is mounted before rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/auth/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Set the token in a cookie
        document.cookie = `admin_token=${data.token}; path=/; max-age=3600; secure; samesite=strict`;
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) {
    return (
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <div className="h-12 bg-gray-200 rounded-t-md animate-pulse"></div>
          </div>
          <div>
            <div className="h-12 bg-gray-200 rounded-b-md animate-pulse"></div>
          </div>
        </div>
        <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
      </form>
    );
  }

  return (
    <motion.form 
      className="mt-8 space-y-6" 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <Input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              className="pl-10 rounded-t-md"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-gray-400" />
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="pl-10 rounded-b-md"
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      {error && (
        <motion.div 
          className="text-red-600 text-sm bg-red-50 p-3 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </div>
    </motion.form>
  );
}