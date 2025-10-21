'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaPaintBrush, FaShoppingCart, FaSearch, FaArrowRight, FaUsers, FaCogs, FaBullhorn, FaShieldAlt, FaQuoteLeft, FaQuestionCircle, FaCheck, FaLightbulb, FaRocket, FaHandshake, FaChevronDown, FaPlus, FaMinus, FaBrain, FaDatabase, FaRobot, FaCogs as FaGear, FaChartBar, FaLock, FaNetworkWired, FaCloud, FaServer, FaCode, FaProjectDiagram, FaGlobe, FaSearchDollar, FaTools, FaVideo, FaCamera } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import web from '@/assets/Solution.jpg';
import mobile from '@/assets/Building.jpg';

// Import the dynamic PageHeader component
import PageHeader from '@/components/PageHeader';

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

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ITAISolutionsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // State for tracking hovered service
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Refs for scroll animations
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const solutionsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  // InView hooks
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.1 });
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.1 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      icon: <FaBrain className="text-3xl" />,
      title: "IT & AI Solutions",
      description: "Craft campaigns — built just for your business — to ensure real and quantifiable ROI"
    },
    {
      icon: <FaBullhorn className="text-3xl" />,
      title: "Audio & Visual Solution",
      description: "When it comes to reaching your target audience, you can't get much closer than direct to their inboxes"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "ELV Company",
      description: "Maintain your best spot on the search results page, so you can find new customers and re-engage loyal ones"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Surveillance Solutions",
      description: "Craft campaigns — built just for your business — to ensure real and quantifiable ROI"
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

  const faqs: FAQItem[] = [
    {
      question: 'What types of CCTV systems do you offer?',
      answer: 'We offer a comprehensive range of CCTV systems including Analog CCTV Camera, Digital CCTV Camera, IP Camera, Wireless CCTV Camera, NVR (Network Video Recorder), and DVR (Digital Video Recorder).'
    },
    {
      question: 'What do we specialize in IT and AI?',
      answer: 'We specialize in providing comprehensive IT solutions with a focus on web development and SEO services to help businesses achieve their online goals effectively.'
    },
    {
      question: 'What Surveillance system brands do you offer?',
      answer: 'We offer top surveillance system brands including UNV, Hikvision, and other leading manufacturers known for their reliability and advanced features.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes, our team of experts provides comprehensive technical support to ensure your systems operate smoothly and efficiently at all times.'
    },
    {
      question: 'Do you offer discounts for bulk orders?',
      answer: 'Yes, we provide special pricing for bulk orders. Please contact us to discuss your specific requirements and receive a customized quote.'
    },
    {
      question: 'How can I place an order?',
      answer: 'You can place an order through our website, via email, or by calling our sales team directly. We\'re here to assist you with the process.'
    }
  ];

  // Data for the dynamic PageHeader
  const headerSlides = [
    {
      title: "IT & AI Solutions",
      subtitle: "Expert technology solutions to transform your business"
    },
    {
      title: "Web Development",
      subtitle: "Custom websites that drive results"
    },
    {
      title: "Digital Marketing",
      subtitle: "Strategies to boost your online presence"
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

      {/* Solutions Section */}
      <div ref={solutionsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isSolutionsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our More Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">The Proof of Trust</p>
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
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg overflow-hidden relative transition-all duration-300 hover:shadow-xl"
                variants={scaleIn}
                whileHover={{ y: -10 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-700 mb-6">{solution.description}</p>
                  
                  <div className="text-center">
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
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">Find answers to common questions about our IT & AI solutions</p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isFaqInView ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <FaQuestionCircle className="text-lg" />
                    </div>
                    <span className="text-lg font-medium text-blue-900">{faq.question}</span>
                  </div>
                  
                  <motion.div
                    className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                  </motion.div>
                </button>
                
                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{ 
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                >
                  <div className="p-6 pt-0 px-10">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how our IT & AI solutions can help you achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}