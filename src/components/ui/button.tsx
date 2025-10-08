'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export default function Button({ 
  children, 
  className = '', 
  variant = 'default', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300';
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  // Filter out props that conflict with Framer Motion
  const { 
    onAnimationStart, 
    onAnimationEnd, 
    onAnimationIteration,
    onDrag, 
    onDragStart, 
    onDragEnd, 
    onDragEnter, 
    onDragLeave, 
    onDragOver, 
    onDragExit,
    ...safeProps 
  } = props;

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...safeProps}
    >
      {children}
    </motion.button>
  );
}