'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import OurTeam, { TeamMember } from '@/components/OurTeam';
import OurJourney from "@/components/OurJourney";
import PageHeader from '@/components/PageHeader';
import { FaCheck, FaUsers, FaShieldAlt, FaCogs, FaTools } from 'react-icons/fa';
import human from '@/assets/human.jpg'

// Import images for HeaderSection
import aboutus from '@/assets/hikvision.webp';

// AboutPage component
export default function AboutPage() {
  const features = [
    {
      title: 'Personalized learning',
      description: 'Students learn at their own pace with tailored content that adapts to their needs.',
      icon: '/personalized-icon.svg',
    },
    {
      title: 'Trusted content',
      description: 'High-quality, standards-aligned content created by education experts.',
      icon: '/content-icon.svg',
    },
    {
      title: 'Tools to empower our team',
      description: 'Resources and analytics to help our team save time and support students.',
      icon: '/tools-icon.svg',
    },
  ];

  // Predefined data for security solutions
  const securityFeatures = [
    'High-definition (HD) cameras that capture every detail',
    'Night vision and smart motion detection for round-the-clock security',
    'Sturdy indoor and outdoor cameras suitable for any setting',
    'PTZ, thermal, and advanced surveillance options'
  ];

  const securityOfferings = [
    'Security Cameras (IP, Dome, Bullet, PTZ)',
    'DVR & NVR Systems',
    'Thermal & AI-Enhanced Cameras',
    'Comprehensive Security Installation & Support'
  ];

  const whyChooseUs = [
    'The Best Security Solutions Prices in Bahrain (Wholesale & Retail)',
    'Expert Advice & Tailored Solutions',
    'A Wide Selection of Authentic Security Products'
  ];

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({
      ...prev,
      [key]: true
    }));
  };

  const IconFallback = () => (
    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </div>
  );

  // Data for PageHeader component - Single slide for About page
  const headerSlides = [
    {
      title: "About Digitallink Bahrain",
      subtitle: "Your trusted partner for comprehensive technology and security solutions in Bahrain",
      headingPart1: "About",
      headingPart2: "Digitallink Bahrain"
    }
  ];

  const headerBenefits = [
    "Expert Security Solutions",
    "Cutting-Edge Technology",
    "Professional Installation",
    "24/7 Support",
    "Trusted by 5,000+ Clients"
  ];

  const headerFeatures = [
    { icon: FaShieldAlt, title: "Security Systems", desc: "Advanced protection" },
    { icon: FaCogs, title: "System Integration", desc: "Seamless solutions" },
    { icon: FaTools, title: "Installation", desc: "Professional setup" },
    { icon: FaUsers, title: "Support", desc: "24/7 assistance" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* PageHeader Component */}
      <PageHeader 
        slides={headerSlides}
        benefits={headerBenefits}
        features={headerFeatures}
        ctaText="Learn More About Us"
        ctaIcon={FaCheck}
      />

      {/* DigitalLink Bahrain Section - Updated with data-driven animations */}
      <section id="our-story" className="py-14 relative overflow-hidden bg-white">
        {/* Background accent - updated to blue/indigo colors */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-5 rounded-full -mr-32 -mt-32"
        >
        </div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full -ml-48 -mb-48"
        >
        </div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-3xl font-bold mb-8 text-blue-900"
              >
                DigitalLink Bahrain
              </motion.h2>

              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  className="leading-relaxed text-lg text-gray-700"
                >
                  Are you on the hunt for top-notch security solutions in Bahrain?
                  Look no further! As a premier technology provider in Bahrain,
                  we specialize in delivering exceptional security and surveillance
                  solutions, including DVRs, NVRs, IP cameras, and cutting-edge
                  security systems.
                </motion.p>

                <div className="leading-relaxed text-lg text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    Why Choose Advanced Security Solutions?<br />
                    Modern security technology stands out as essential for business protection, providing:<br />
                  </motion.div>
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      ✔ {feature}<br />
                    </motion.div>
                  ))}
                </div>

                <div className="leading-relaxed text-lg text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    Our Security Offerings in Bahrain:<br />
                  </motion.div>
                  {securityOfferings.map((offering, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      - {offering}<br />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 bg-blue-50 rounded-r-lg">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    Why Choose Us?<br />
                  </motion.div>
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      ✅ {reason}<br />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative"
              >
                {/* Main image with enhanced styling */}
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 relative z-10 border-4 border-gray-200"
                >
                  <Image
                    src={aboutus}
                    alt="DigitalLink Bahrain Team"
                    width={600}
                    height={400}
                    className="w-full h-auto block"
                  />
                </div>

                {/* Decorative elements - updated colors */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-6 -right-6 w-32 h-32 border-4 border-blue-400 rounded-xl z-0"
                >
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-indigo-500 rounded-xl z-0"
                >
                </motion.div>

                {/* Stats highlight - updated colors */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className="absolute -bottom-10 right-10 bg-white py-4 px-6 rounded-lg shadow-xl z-20 border border-blue-100"
                >
                  <p className="text-sm text-gray-600">Trusted by</p>
                  <p className="text-3xl font-bold text-blue-900">5,000+</p>
                  <p className="text-sm text-gray-600">clients worldwide</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of educators who are committed to providing the best learning experience for every student.
            </p>
          </motion.div>

          {/* Team Section */}
          <OurTeam />
          <OurJourney/>
        </div>
      </div>
    </div>
  );
}