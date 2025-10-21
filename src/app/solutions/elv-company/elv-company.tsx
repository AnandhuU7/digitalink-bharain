'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaBuilding, FaTools, FaCog, FaComments, FaArrowRight, FaUsers, FaShieldAlt, FaCheck, FaLightbulb, FaHandshake, FaBrain, FaBullhorn, FaCogs, FaLock, FaNetworkWired, FaVideo, FaCamera, FaLaptopCode, FaChartLine, FaAward, FaStar, FaQuoteLeft, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';
import rightimage from "@/assets/Building.jpg";
import leftimage from "@/assets/Building.jpg";
// Import the dynamic PageHeader component
import PageHeader from '@/components/PageHeader';
// Import the SolutionFAQ component
import SolutionFAQ from "@/components/SolutionFAQ";
// Import the reusable StickyContactBar component
import StickyContactBar from '@/components/StickyContactBar';

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
}

interface Solution {
  icon: ReactElement;
  title: string;
  description: string;
}

interface TimelineItem {
  title: string;
  description: string;
  icon: ReactElement;
}

interface Statistic {
  value: number;
  label: string;
  icon: ReactElement;
}

interface WhyChooseItem {
  title: string;
}

interface SolutionCategory {
  title: string;
  description: string;
 solutions: string[];

}

export default function ELVCompanyPage() {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0, satisfaction: 0 });

  // Refs for scroll animations
  const solutionsRef = useRef(null);
  const professionalCommRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);

  // InView hooks
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.3 });
  const isProfessionalCommInView = useInView(professionalCommRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  const services: Service[] = [
    {
      icon: <FaBuilding className="text-3xl" />,
      title: 'Elevator Installation',
      description: 'Complete installations for residential, commercial, and industrial projects.'
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: 'Maintenance & Repairs',
      description: '24/7 dedicated support to minimize downtime and ensure operations.'
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: 'Modernization',
      description: 'Upgrade older systems to current technology and safety standards.'
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: 'Consultation',
      description: 'Expert guidance for optimal elevator system selection and performance.'
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <FaBrain className="text-4xl" />,
      title: "IT & AI Solutions",
      description: "Advanced technology solutions to streamline your business operations"
    },
    {
      icon: <FaBullhorn className="text-4xl" />,
      title: "Audio & Visual Solution",
      description: "Integrated communication systems for enhanced connectivity"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Surveillance Solutions",
      description: "Comprehensive security systems to protect your assets"
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "ELV Company",
      description: "Complete ELV solutions for modern building infrastructure and vertical transportation"
    }
  ];

  const whyChooseCategories: SolutionCategory[] = [
    {
      title: "Why Choose Us",
      description: "At Digitallink, we pride ourselves on delivering exceptional elevator solutions that combine innovation, safety, and reliability.",
      solutions: [
        "Unparalleled Expertise: Years of experience ensuring precision and dedication.",
        "Cutting-Edge Technology: Latest elevator technology for smooth transportation.",
        "Safety First: International and local safety standards prioritized.",
        "Customized Solutions: Bespoke elevator systems tailored to each project.",
        "Reliable After-sales Service: Robust maintenance ensuring seamless operations.",
      ],
    },
  ];

  // Data for the dynamic PageHeader
  const headerSlides = [
    {
      title: "Discover the Pinnacle of Vertical Transportation",
      subtitle: "At Digitallink, we blend cutting-edge technology with innovative design to elevate Bahrain's vertical transportation standards"
    },
    {
      title: "Ascent with Our Expertise",
      subtitle: "Experience the perfect combination of safety, luxury, and efficiency, redefining the way you move"
    },
    {
      title: "Elevating Bahrain's Skyline",
      subtitle: "Premium vertical transportation solutions for modern buildings"
    }
  ];

  const headerBenefits = [
    "Unparalleled Expertise",
    "Cutting-Edge Technology",
    "Safety First",
    "Customized Solutions",
    "Reliable After-sales Service"
  ];

  const headerFeatures = [
    { icon: FaBuilding, title: "Installation", desc: "Professional setup" },
    { icon: FaTools, title: "Maintenance", desc: "Reliable service" },
    { icon: FaCog, title: "Modernization", desc: "System upgrades" },
    { icon: FaComments, title: "Consultation", desc: "Expert advice" }
  ];

  return (
    <>
      {/* Dynamic PageHeader Section */}
      <PageHeader 
        slides={headerSlides}
        benefits={headerBenefits}
        features={headerFeatures}
        ctaText="Get Started Today"
        ctaIcon={FaArrowRight}
      />

      {/* Professional Communication Section - Image Left, Content Right */}
      <section 
        ref={professionalCommRef} 
        className="py-8 md:py-12 lg:py-16 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            initial="hidden"
            animate={isProfessionalCommInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="overflow-hidden"
          >
            <motion.div
              className="text-center mb-8 md:mb-12 overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              animate={isProfessionalCommInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                Our Services
              </h2> 
            </motion.div>

            <div className="space-y-8 md:space-y-12 lg:space-y-16 overflow-hidden">
              <motion.div
                className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center overflow-hidden"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image on Left */}
                <motion.div
                  className="overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInLeft}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                      src={rightimage}
                      alt="Professional Elevator Services"
                      className="w-full h-48 md:h-64 lg:h-80 object-cover"
                      width={800}
                      height={450}
                      priority
                    />
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Content on Right */}
                <motion.div
                  className="space-y-4 md:space-y-6 overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInRight}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="overflow-hidden">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Ascend with Our Expertise
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base lg:text-lg text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Professional 4K video conferencing solutions from desk setups to large meeting rooms.
                    </motion.p>
                  </div>

                  <motion.div
                    className="space-y-2 md:space-y-3 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FaCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">
                          <strong>{service.title}:</strong> {service.description}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Content Left, Image Right */}
      <section
        ref={whyChooseRef}
        className="py-8 md:py-12 lg:py-16 bg-gray-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            initial="hidden"
            animate={isWhyChooseInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="overflow-hidden"
          >
            <div className="space-y-8 md:space-y-12 lg:space-y-16 overflow-hidden">
              {whyChooseCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center overflow-hidden ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Content for Why Choose Us - Left Side */}
                  <motion.div
                    className={`space-y-4 md:space-y-6 overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInLeft}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="overflow-hidden">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {category.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm md:text-base lg:text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {category.description}
                      </motion.p>
                    </div>

                    <motion.div
                      className="space-y-2 md:space-y-3 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {category.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center overflow-hidden"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <FaCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700">
                            {solution}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Image for Why Choose Us - Right Side */}
                  <motion.div
                    className={`overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInRight}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                      src={rightimage}
                      alt="Professional Elevator Services"
                      className="w-full h-48 md:h-64 lg:h-80 object-cover"
                      width={800}
                      height={450}
                      priority
                    />
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                   
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <div ref={solutionsRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-200/30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-200/30 to-blue-200/30 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isSolutionsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Our More Solutions</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isSolutionsInView ? "visible" : "hidden"}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={scaleIn}
                initial="hidden"
                animate={isSolutionsInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredSolution(index)}
                onHoverEnd={() => setHoveredSolution(null)}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden h-full flex flex-col"
                  animate={{ 
                    y: hoveredSolution === index ? -20 : 0,
                    rotateY: hoveredSolution === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Floating effect elements */}
                  <motion.div 
                    className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-200/30"
                    animate={{ 
                      scale: hoveredSolution === index ? 1.2 : 1,
                      rotate: hoveredSolution === index ? 15 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-200/30 to-blue-200/30"
                    animate={{ 
                      scale: hoveredSolution === index ? 1.3 : 1,
                      rotate: hoveredSolution === index ? -20 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg mb-6 mx-auto">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{solution.title}</h3>
                    <p className="text-gray-700 mb-6 text-center flex-grow">{solution.description}</p>
                    
                    <div className="text-center mt-auto">
                      <Link 
                        href="/contact" 
                        className="text-blue-900 font-bold inline-flex items-center group"
                      >
                        LEARN MORE
                        <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section - Replaced with SolutionFAQ Component */}
      <SolutionFAQ />

      {/* Reusable Sticky Contact Bar Component */}
      <StickyContactBar />
    </>
  );
}