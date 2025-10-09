// components/SolutionsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaHome, 
  FaBuilding, 
  FaIndustry, 
  FaCity
} from 'react-icons/fa';

interface SecuritySolution {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const securitySolutions: SecuritySolution[] = [
  {
    id: 1,
    title: "Home Security Solutions",
    category: "Residential",
    description: "Comprehensive security systems designed to protect your home and family with 24/7 monitoring",
    image: "https://images.unsplash.com/photo-1558002038-1055e2e9e744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Business Security Solutions",
    category: "Commercial",
    description: "Advanced surveillance systems tailored for businesses of all sizes with AI-powered analytics",
    image: "https://images.unsplash.com/photo-1559028006-44a2761dd3d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Industrial Security Solutions",
    category: "Industrial",
    description: "Robust surveillance systems designed for harsh industrial environments and large facilities",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a348e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Smart City Solutions",
    category: "Municipal",
    description: "Integrated security systems for smart city initiatives and urban surveillance",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function SolutionsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Municipal'];

  const filteredSolutions = selectedCategory === 'All' 
    ? securitySolutions 
    : securitySolutions.filter(solution => solution.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true);
    setSelectedCategory(category);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid bg-repeat" style={{ backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Security-themed decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Security Solutions
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our comprehensive range of security solutions designed for every environment and requirement.
          </motion.p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isAnimating}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Solutions Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              onMouseEnter={() => setHoveredSolution(solution.id)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              {/* Solution Image */}
              <div className="h-48 relative overflow-hidden">
                <motion.img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {solution.category}
                </div>
              </div>
              
              {/* Solution Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center shadow-lg group border border-blue-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Solutions
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}