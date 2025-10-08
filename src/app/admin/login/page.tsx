'use client';

import AdminLoginForm from '@/components/forms/admin-login-form';
import { motion } from 'framer-motion';
import { FaUserShield } from 'react-icons/fa';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
              <FaUserShield className="text-white text-2xl" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-gray-600">
            Sign in to access the admin dashboard
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AdminLoginForm />
        </motion.div>
        
        <motion.div 
          className="text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Contact support
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}