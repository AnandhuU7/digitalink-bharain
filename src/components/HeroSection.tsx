// components/HeroSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Simple magnetic effect with Framer Motion */}
      <motion.div
        className="absolute pointer-events-none rounded-full mix-blend-soft-light"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(99, 102, 241, 0) 70%)',
          left: mousePosition.x - 100, // Center the circle on cursor
          top: mousePosition.y - 100,  // Center the circle on cursor
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Digital Solutions for <span className="text-blue-400">Modern Business</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your trusted partner for digital transformation in Bahrain.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center group"
            >
              Learn More 
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}