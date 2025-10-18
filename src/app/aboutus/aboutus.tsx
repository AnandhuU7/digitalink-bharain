'use client'
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import OurTeam, { TeamMember } from '@/components/OurTeam';
import OurJourney from "@/components/OurJourney"

// Import images for HeaderSection
import web from '@/assets/Solution.jpg';
import mobile from '@/assets/Building.jpg';
import aboutus from '@/assets/hikvision.webp';

// AboutPage component
export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Team Member One',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Team Member One',
    },
    {
      name: 'John Carvan',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'John Carvan',
    },
    {
      name: 'Miss Smith Ellen',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Miss Smith Ellen',
    },
    {
      name: 'Team Member Name',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Team Member',
    },
    {
      name: 'Team Member Five',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Team Member Five',
    },
  ];

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

  // HeaderSection animation variants
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1] as const,
        delay: 0.2
      }
    }
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.6
      }
    }
  };

  // HeaderSection scroll effects
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - inserted directly */}
      <div className="relative h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 overflow-hidden hero-banner">
        <motion.div className="absolute inset-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="w-full h-full bg-gradient-to-br from-blue-600/40 to-indigo-800/40 opacity-60"></div>
          {/* Desktop banner image */}
          <Image
            src={web}
            alt="Solutions background"
            fill
            className="object-cover opacity-30 hidden sm:block"
            sizes="100vw"
          />
          {/* Mobile banner image */}
          <Image
            src={mobile}
            alt="Solutions background mobile"
            fill
            className="object-cover opacity-30 block sm:hidden"
            sizes="100vw"
          />
        </motion.div>

        <div className="relative h-full flex items-center justify-center py-12">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4 px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              variants={titleVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight pt-8 sm:pt-0"
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Us
              </span>
            </motion.h1>
            <motion.p
              variants={subtitleVariants}
              className="text-xl sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions tailored for every industry and business need.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* DigitalLink Bahrain Section - Updated to match your color scheme */}
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
              <h2 className="text-3xl font-bold mb-8 text-blue-900">
                DigitalLink Bahrain
              </h2>

              <div className="space-y-6">
                <p className="leading-relaxed text-lg text-gray-700">
                  Are you on the hunt for top-notch security solutions in Bahrain?
                  Look no further! As a premier technology provider in Bahrain,
                  we specialize in delivering exceptional security and surveillance
                  solutions, including DVRs, NVRs, IP cameras, and cutting-edge
                  security systems.
                </p>

                <p className="leading-relaxed text-lg text-gray-700">
                  Why Choose Advanced Security Solutions?<br />
                  Modern security technology stands out as essential for business protection, providing:<br />
                  ✔ High-definition (HD) cameras that capture every detail<br />
                  ✔ Night vision and smart motion detection for round-the-clock security<br />
                  ✔ Sturdy indoor and outdoor cameras suitable for any setting<br />
                  ✔ PTZ, thermal, and advanced surveillance options
                </p>

                <p className="leading-relaxed text-lg text-gray-700">
                  Our Security Offerings in Bahrain:<br />
                  - Security Cameras (IP, Dome, Bullet, PTZ)<br />
                  - DVR & NVR Systems<br />
                  - Thermal & AI-Enhanced Cameras<br />
                  - Comprehensive Security Installation & Support
                </p>

                <div
                  className="mt-10 border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 bg-blue-50 rounded-r-lg"
                >
                  Why Choose Us?<br />
                  ✅ The Best Security Solutions Prices in Bahrain (Wholesale & Retail)<br />
                  ✅ Expert Advice & Tailored Solutions<br />
                  ✅ A Wide Selection of Authentic Security Products
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
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
                <div
                  className="absolute top-6 -right-6 w-32 h-32 border-4 border-blue-400 rounded-xl opacity-20 z-0"
                >
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-indigo-500 rounded-xl opacity-20 z-0"
                >
                </div>

                {/* Stats highlight - updated colors */}
                <div
                  className="absolute -bottom-10 right-10 bg-white py-4 px-6 rounded-lg shadow-xl z-20 border border-blue-100"
                >
                  <p className="text-sm text-gray-600">Trusted by</p>
                  <p className="text-3xl font-bold text-blue-900">5,000+</p>
                  <p className="text-sm text-gray-600">clients worldwide</p>
                </div>
              </div>
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
          <OurTeam teamMembers={teamMembers} />
          <OurJourney/>
          
          {/* Why It Works Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-10">Why it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.15) }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                      {imageErrors[`icon-${index}`] ? (
                        <IconFallback />
                      ) : (
                        <img
                          src={feature.icon}
                          alt={`${feature.title} icon`}
                          width={32}
                          height={32}
                          onError={() => handleImageError(`icon-${index}`)}
                        />
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}