// components/PartnersSection.tsx
'use client';

import { motion } from 'framer-motion';
import LogoScroll from './LogoScroll';

export default function PartnersSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements - matching your component style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-100/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted <span className="text-blue-700">Partners</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We collaborate with industry leaders to deliver exceptional security solutions
          </motion.p>
        </div>

        {/* Logo Carousel */}
        <div className="flex justify-center">
          <LogoScroll />
        </div>

        {/* Decorative elements - matching your component style */}
         {/* Decorative line */}
         <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}