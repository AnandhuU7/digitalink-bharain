// components/AutoScrollLogoCarousel.tsx
'use client';

import logo1 from '../../public/images/logos/white-Logos-01.svg';
import logo2 from '../../public/images/logos/white-Logos-02.svg';
import logo3 from '../../public/images/logos/white-Logos-03.svg';
import logo4 from '../../public/images/logos/white-Logos-04.svg';
import logo5 from '../../public/images/logos/white-Logos-05.svg';
import logo6 from '../../public/images/logos/white-Logos-06.svg';
import logo7 from '../../public/images/logos/white-Logos-07.svg';
import logo8 from '../../public/images/logos/white-Logos-08.svg';
import logo9 from '../../public/images/logos/white-Logos-09.svg';
import logo10 from '../../public/images/logos/white-Logos-10.svg';
import logo11 from '../../public/images/logos/white-Logos-11.svg';
import logo12 from '../../public/images/logos/white-Logos-12.svg';
import logo13 from '../../public/images/logos/white-Logos-13.svg';
import logo14 from '../../public/images/logos/white-Logos-14.svg';
import logo15 from '../../public/images/logos/white-Logos-15.svg';
import logo16 from '../../public/images/logos/white-Logos-16.svg';
import logo17 from '../../public/images/logos/white-Logos-17.svg';
import logo18 from '../../public/images/logos/white-Logos-18.svg';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LogoItem {
  id: number;
  src: string;
  alt: string;
}

export default function AutoScrollLogoCarousel() {
  const [logos, setLogos] = useState<LogoItem[]>([]);

  useEffect(() => {
    // Define the original logo items
    const originalLogos: LogoItem[] = [
      { id: 1, src: logo1.src, alt: "Partner Logo 1" },
      { id: 2, src: logo2.src, alt: "Partner Logo 2" },
      { id: 3, src: logo3.src, alt: "Partner Logo 3" },
      { id: 4, src: logo4.src, alt: "Partner Logo 4" },
      { id: 5, src: logo5.src, alt: "Partner Logo 5" },
      { id: 6, src: logo6.src, alt: "Partner Logo 6" },
      { id: 7, src: logo7.src, alt: "Partner Logo 7" },
      { id: 8, src: logo8.src, alt: "Partner Logo 8" },
      { id: 9, src: logo9.src, alt: "Partner Logo 9" },
      { id: 10, src: logo10.src, alt: "Partner Logo 10" },
      { id: 11, src: logo11.src, alt: "Partner Logo 11" },
      { id: 12, src: logo12.src, alt: "Partner Logo 12" },
      { id: 13, src: logo13.src, alt: "Partner Logo 13" },
      { id: 14, src: logo14.src, alt: "Partner Logo 14" },
      { id: 15, src: logo15.src, alt: "Partner Logo 15" },
      { id: 16, src: logo16.src, alt: "Partner Logo 16" },
      { id: 17, src: logo17.src, alt: "Partner Logo 17" },
      { id: 18, src: logo18.src, alt: "Partner Logo 18" }
    ];

    // Duplicate the logos to create a seamless loop
    setLogos([...originalLogos, ...originalLogos]);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements - matching your component style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-100/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted <span className="text-blue-600">Partners</span>
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

        {/* Auto-scrolling logo carousel */}
        <div className="relative overflow-hidden py-10">
          {/* Gradient overlays to create fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {logos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center mx-8"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-md p-4 w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements - matching your component style */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}