'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaPaintBrush, FaShoppingCart, FaSearch, FaArrowRight, FaUsers, FaCogs, FaBullhorn, FaShieldAlt, FaQuoteLeft, FaCheck, FaLightbulb, FaRocket, FaHandshake, FaChevronDown, FaBrain, FaDatabase, FaRobot, FaCogs as FaGear, FaChartBar, FaLock, FaNetworkWired, FaCloud, FaServer, FaCode, FaProjectDiagram, FaGlobe, FaSearchDollar, FaTools, FaVideo, FaCamera } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import web from '@/assets/Solution.jpg';
import mobile from '@/assets/Building.jpg';

// Import the dynamic PageHeader component
import PageHeader from '@/components/PageHeader';
// Import the SolutionFAQ component
import SolutionFAQ from "@/components/SolutionFAQ";
import StickyContactBar from '@/components/StickyContactBar';

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
}

interface Solution {
  icon: ReactElement;
  title: string;
  description: string;
}

interface ProcessStep {
  icon: ReactElement;
  title: string;
  description: string;
}

export default function ITAISolutions() {
  // State for tracking hovered service
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  // State for tracking hovered solution
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

  // Refs for scroll animations
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const solutionsRef = useRef(null);

  // InView hooks
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.1 });
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  const services: Service[] = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: 'Cutting-Edge App Development',
      description: 'Custom applications built with the latest technologies to meet your specific business needs.',
      features: ['Cross-platform compatibility', 'Scalable architecture', 'Modern UI/UX design']
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: 'Responsive Web Development',
      description: 'Websites that perform flawlessly across all devices with engaging user experiences.',
      features: ['Mobile-first design', 'Fast loading times', 'SEO optimized']
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'SEO & Digital Marketing',
      description: 'Strategic marketing solutions to boost your online presence and drive conversions.',
      features: ['Keyword research', 'Content optimization', 'Performance analytics']
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing interfaces that enhance user engagement.',
      features: ['User research', 'Wireframing', 'Prototyping']
    },
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: 'E-commerce Solutions',
      description: 'Complete online store setups with secure payment gateways and inventory management.',
      features: ['Shopping cart integration', 'Payment processing', 'Order management']
    },
    {
      icon: <FaSearch className="text-3xl" />,
      title: 'AI-Powered Search',
      description: 'Intelligent search capabilities that deliver accurate results and improve user experience.',
      features: ['Natural language processing', 'Personalized results', 'Voice search']
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

  const processSteps: ProcessStep[] = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'Discovery',
      description: 'We analyze your business needs and challenges to develop a tailored strategy.'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Implementation',
      description: 'Our team executes the plan with precision using cutting-edge technology.'
    },
    {
      icon: <FaChartBar className="text-3xl" />,
      title: 'Optimization',
      description: 'We continuously refine solutions to maximize performance and ROI.'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Support',
      description: 'Ongoing assistance ensures your solutions evolve with your business.'
    }
  ];

  // Data for the dynamic PageHeader - Single slide for IT & AI Solutions page
  const headerSlides = [
    {
      title: "IT & AI Solutions",
      subtitle: "Transform your business with cutting-edge technology and artificial intelligence solutions",
      headingPart1: "Transform Your",
      headingPart2: "Digital Business"
    }
  ];

  const headerBenefits = [
    "Cutting-Edge App Development",
    "Responsive Web Development",
    "Comprehensive SEO Strategy",
    "Reliable Networking Solutions",
    "AI-Driven Innovation",
    "UAE Strategic Partnership"
  ];

  const headerFeatures = [
    { icon: FaLaptopCode, title: "App Development", desc: "Custom solutions" },
    { icon: FaMobileAlt, title: "Web Design", desc: "Responsive experiences" },
    { icon: FaChartLine, title: "SEO & Marketing", desc: "Data-driven strategies" },
    { icon: FaBrain, title: "AI Solutions", desc: "Intelligent automation" }
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

      {/* About Section */}
      <div ref={aboutRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={mobile}
                  alt="Enhance Your Online Presence"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white mr-3">
                    <FaGlobe className="text-xl" />
                  </div>
                  <h3 className="font-bold text-blue-900">Online Presence</h3>
                </div>
                <p className="text-gray-700 text-sm">Boost your visibility and reach with our expert SEO and web development services.</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
                variants={fadeInUp}
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
              >
                Enhance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Online Presence</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 mb-6 text-lg"
                variants={fadeInUp}
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
              >
                Our SEO & Web Development Experts help you create a strong digital footprint with custom websites and effective SEO strategies. We specialize in developing tailored solutions across multiple platforms including WordPress.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 mb-8 text-lg"
                variants={fadeInUp}
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
              >
                Through comprehensive keyword research and optimization techniques, we drive organic traffic to your site and improve your search engine rankings.
              </motion.p>
              
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-8"
                variants={fadeInUp}
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-bold text-blue-900 mb-4 text-lg">Our Expertise Includes:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Custom website development",
                    "SEO optimization and strategy",
                    "Multi-platform expertise",
                    "Keyword research and implementation",
                    "Conversion-focused design"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-900 font-bold group"
                >
                  Learn more about our services
                  <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">Comprehensive IT & AI solutions designed to transform your business</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={scaleIn}
                initial="hidden"
                animate={isServicesInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                {/* Background Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0"
                  animate={{ 
                    scale: hoveredService === index ? 1.1 : 1,
                    opacity: hoveredService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Service Card */}
                <div className="relative bg-white rounded-2xl p-1 shadow-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 relative z-10">
                    {/* Icon Container with Hover Effect */}
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg mb-6 mx-auto"
                      whileHover={{ 
                        rotate: 15,
                        scale: 1.1,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{service.title}</h3>
                    <p className="text-gray-700 mb-6 text-center">{service.description}</p>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            </div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link 
                        href="/contact" 
                        className="text-blue-600 font-medium inline-flex items-center group"
                      >
                        Learn more 
                        <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Solutions Section with Uniform Cards */}
      <div ref={solutionsRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-200/30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-200/30 to-blue-200/30 translate-x-1/2 translate-y-1/2"></div>
        
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
                    className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-200/30 to-blue-200/30"
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
      <SolutionFAQ />
      <StickyContactBar/>
    </>
  );
}