'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaLightbulb, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero images for the carousel
  const heroImages = [
    {
      id: 1,
      title: "Digital Transformation",
      description: "Innovative solutions for modern businesses",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Custom web solutions tailored to your needs",
      image: "https://images.unsplash.com/photo-1547658719-ce2b5eb9eb17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Boost your online presence with our strategies",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  // Handle mouse movement for magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation for carousel
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden py-8 lg:py-0"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced Background Gradient Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50"></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 -left-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/40 to-purple-200/30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-200/30 to-pink-200/20 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-100/40 to-transparent"></div>
        
        {/* Diagonal Gradient Stripe */}
        <div className="absolute top-1/2 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent transform -rotate-3"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Geometric shapes for visual interest - Hidden on mobile */}
      <motion.div 
        className="hidden lg:block absolute top-20 right-10 w-64 h-64 border-2 border-blue-200/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear" as const
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }
        }}
      />
      
      <motion.div 
        className="hidden lg:block absolute bottom-20 left-10 w-48 h-48 border-2 border-indigo-200/30 rotate-45"
        animate={{
          rotate: 45,
          scale: [1, 0.9, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear" as const
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const
          }
        }}
      />

      {/* Additional Floating Gradient Elements */}
      <motion.div 
        className="hidden lg:block absolute top-40 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-200/40 to-blue-200/30 blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      
      <motion.div 
        className="hidden lg:block absolute bottom-40 right-32 w-40 h-40 rounded-full bg-gradient-to-r from-purple-200/30 to-pink-200/20 blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      
      {/* Enhanced magnetic effect - Only on desktop */}
      <motion.div
        className="absolute pointer-events-none rounded-full hidden lg:block"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          filter: 'blur(10px)',
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 1
        }}
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section - Comes first in mobile, second in desktop */}
          <div className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div 
              className="mb-6 inline-block px-4 py-2 bg-blue-100 rounded-full backdrop-blur-sm border border-blue-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-600 font-medium flex items-center justify-center lg:justify-start">
                <FaLightbulb className="mr-2" />
                Digital Excellence
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Digital Reality</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your trusted partner for digital transformation in Bahrain. We create innovative solutions that drive growth and success for modern businesses.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center text-sm sm:text-base">
                  Learn More 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-bold rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-blue-50 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center text-sm sm:text-base">
                  <FaPlay className="mr-2 text-sm" />
                  Watch Demo
                </span>
              </Link>
            </motion.div>
            
            {/* Stats or key features */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 lg:mt-12 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/50">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">150+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/50">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-white/50">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </div>
          
          {/* Image Carousel Section - Comes first in mobile, second in desktop */}
          <div className="order-1 lg:order-2 relative w-full max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-0">
            {/* Main image carousel */}
            <motion.div 
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden z-10 border border-white/50 backdrop-blur-sm"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                {/* Carousel Images */}
                <div className="relative h-full">
                  {heroImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    >
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-xs sm:text-sm opacity-90">{image.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-sm sm:text-lg" />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-sm sm:text-lg" />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Decorative elements - Hidden on mobile */}
            <motion.div 
              className="hidden lg:block absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-200/40 to-cyan-200/30 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            />
            <motion.div 
              className="hidden lg:block absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Hidden on mobile */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-700 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
} 