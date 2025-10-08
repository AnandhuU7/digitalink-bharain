'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/auth/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) {
    return (
      <form className="space-y-4">
        <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-32 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
          Subject
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can we help you?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
          required
          placeholder="Your message..."
        ></textarea>
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message <FaPaperPlane className="ml-2" />
          </>
        )}
      </Button>
      
      {submitStatus === 'success' && (
        <motion.div 
          className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your message has been sent successfully! We'll get back to you soon.
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div 
          className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          An error occurred. Please try again later.
        </motion.div>
      )}
    </form>
  );
}