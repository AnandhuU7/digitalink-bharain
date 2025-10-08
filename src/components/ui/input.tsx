'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = '', ...props }: InputProps) {
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
    <motion.input
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${className}`}
      whileFocus={{ scale: 1.01 }}
      {...safeProps}
    />
  );
}