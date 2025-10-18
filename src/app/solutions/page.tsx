'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaPaintBrush, FaShoppingCart, FaSearch, FaArrowRight, FaUsers, FaCogs, FaBullhorn, FaShieldAlt, FaQuoteLeft, FaQuestionCircle, FaCheck, FaLightbulb, FaRocket, FaHandshake, FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import web from '@/assets/Solution.jpg';
import mobile from '@/assets/Building.jpg';

interface Solution {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
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

export default function SolutionsPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Refs for scroll animations
  const subtitleRef = useRef(null);
  const solutionsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const commitmentRef = useRef(null);

  // InView hooks
  const isSubtitleInView = useInView(subtitleRef, { once: true, amount: 0.3 });
  const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.1 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.1 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.1 });
  const isCommitmentInView = useInView(commitmentRef, { once: true, amount: 0.3 });

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

  const solutions: Solution[] = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: 'IT & AI Solutions',
      description: 'Custom marketing ensuring real measurable ROI through advanced technology and AI-driven strategies.',
      features: ['Custom Development', 'AI Integration', 'Data Analytics', 'Process Automation']
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: 'System Integrations',
      description: 'Optimizing search results to attract new customers and retain existing ones through seamless integrations.',
      features: ['API Development', 'Workflow Automation', 'Data Migration', 'Legacy System Modernization']
    },
    {
      icon: <FaBullhorn className="text-3xl" />,
      title: 'Audio & Visual Solutions',
      description: 'Reaching your target audience directly through personalized multimedia experiences and campaigns.',
      features: ['Video Production', 'Podcast Creation', 'Interactive Media', 'Brand Storytelling']
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Surveillance Solutions',
      description: 'Custom security solutions ensuring real measurable ROI through advanced monitoring systems.',
      features: ['24/7 Monitoring', 'Threat Detection', 'Access Control', 'Security Analytics']
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
      icon: <FaChartLine className="text-3xl" />,
      title: 'Optimization',
      description: 'We continuously refine solutions to maximize performance and ROI.'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Support',
      description: 'Ongoing assistance ensures your solutions evolve with your business.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'Tech Innovations Inc.',
      content: 'The AI solutions implemented by this team transformed our operations, resulting in a 40% increase in efficiency.'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Global Retail Group',
      content: 'Their audio-visual solutions helped us create a brand identity that resonates with our target audience.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Security Manager',
      company: 'SecureBank Ltd.',
      content: 'The surveillance system they designed gives us peace of mind with its advanced threat detection capabilities.'
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary based on project complexity, but most solutions are deployed within 4-12 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and dedicated account managers.'
    },
    {
      question: 'Can your solutions integrate with existing systems?',
      answer: 'Absolutely. Our solutions are designed for seamless integration with your current infrastructure and legacy systems.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have expertise across multiple industries including finance, healthcare, retail, manufacturing, and technology.'
    }
  ];

  return (
    <>
      {/* Header Section */}
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
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 1.2,
                  ease: [0.25, 0.4, 0.25, 1]
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="text-center space-y-4 px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0.25, 0.4, 0.25, 1],
                    delay: 0.2
                  }
                }
              }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight pt-8 sm:pt-0"
            >
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Solutions
              </span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.6
                  }
                }
              }}
              className="text-xl sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions tailored for every industry and business need.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Content */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtitle Section */}
          <div ref={subtitleRef} className="text-center mb-20">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate={isSubtitleInView ? "visible" : "hidden"}
            >
              We Lead With <span className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 bg-clip-text text-transparent">Customer-First</span> Strategies
            </motion.h1>
            <motion.p 
              className="text-gray-700 max-w-3xl mx-auto text-xl"
              variants={fadeInUp}
              initial="hidden"
              animate={isSubtitleInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              Driving growth through personalized experiences for truly end-to-end business building
            </motion.p>
          </div>

          {/* Solutions Grid */}
          <motion.div 
            ref={solutionsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
            variants={staggerContainer}
            initial="hidden"
            animate={isSolutionsInView ? "visible" : "hidden"}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="p-8">
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg shadow-blue-900/50">
                      {solution.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-center text-blue-900">{solution.title}</h3>
                  <p className="text-gray-700 mb-6 text-center">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <div className="w-2 h-2 rounded-full mr-3 bg-blue-900"></div>
                        <span className="text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Link 
                      href="/contact" 
                      className="text-blue-900 font-medium inline-flex items-center group hover:opacity-80 transition-opacity"
                    >
                      Learn more 
                      <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Flow Section */}
          <div ref={processRef} className="mb-24">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={isProcessInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution Process</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">A streamlined approach to delivering exceptional results for your business</p>
            </motion.div>
            
            <div className="relative">
              {/* Process line for desktop */}
              <motion.div 
                className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-600 z-0"
                initial={{ scaleX: 0 }}
                animate={isProcessInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate={isProcessInView ? "visible" : "hidden"}
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                    variants={fadeInUp}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg relative">
                        {step.icon}
                        <motion.div 
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold"
                          initial={{ scale: 0 }}
                          animate={isProcessInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                        >
                          {index + 1}
                        </motion.div>
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div ref={testimonialsRef} className="mb-24">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={isTestimonialsInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">Hear from businesses that have transformed with our solutions</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isTestimonialsInView ? "visible" : "hidden"}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative"
                  variants={scaleIn}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="absolute top-0 left-8 transform -translate-y-1/2 text-blue-900 bg-white p-2 rounded-full"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaQuoteLeft className="text-2xl" />
                  </motion.div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center text-white font-bold mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {testimonial.name.charAt(0)}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div ref={faqRef} className="mb-24">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={isFaqInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">Find answers to common questions about our solutions</p>
            </motion.div>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate={isFaqInView ? "visible" : "hidden"}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-6"
                  variants={fadeInUp}
                >
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl' 
                        : 'bg-white shadow-md hover:shadow-lg'
                    }`}
                    whileHover={{ 
                      y: activeIndex === index ? 0 : -3,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Decorative elements */}
                    <motion.div 
                      className={`absolute top-0 left-0 w-1 h-full ${
                        activeIndex === index 
                          ? 'bg-gradient-to-b from-blue-900 to-blue-600' 
                          : 'bg-transparent'
                      }`}
                      initial={{ scaleY: 0 }}
                      animate={{ 
                        scaleY: activeIndex === index ? 1 : 0,
                        originY: "top"
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    
                    <motion.button
                      className="flex justify-between items-center w-full p-6 text-left focus:outline-none relative z-10"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex items-center">
                        <motion.div
                          className={`mr-4 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            activeIndex === index 
                              ? 'bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg' 
                              : 'bg-gray-100 text-gray-500'
                          }`}
                          animate={{ 
                            rotate: activeIndex === index ? 360 : 0,
                            scale: activeIndex === index ? 1.1 : 1
                          }}
                          transition={{ 
                            duration: 0.5, 
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: activeIndex === index ? 1.15 : 1.05,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                        >
                          <FaQuestionCircle className="text-xl" />
                        </motion.div>
                        <span className={`text-lg font-medium ${
                          activeIndex === index ? 'text-blue-900' : 'text-gray-800'
                        }`}>{faq.question}</span>
                      </div>
                      
                      <motion.div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          activeIndex === index 
                            ? 'bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white shadow-md' 
                            : 'bg-gray-100 text-gray-500'
                        }`}
                        animate={{ 
                          rotate: activeIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {activeIndex === index ? (
                          <FaMinus className="text-sm" />
                        ) : (
                          <FaPlus className="text-sm" />
                        )}
                      </motion.div>
                    </motion.button>
                    
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
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: activeIndex === index ? 1 : 0, 
                            y: activeIndex === index ? 0 : 10 
                          }}
                          transition={{ 
                            delay: activeIndex === index ? 0.1 : 0,
                            duration: 0.3
                          }}
                          className="text-gray-700"
                        >
                          {faq.answer}
                        </motion.div>
                        
                        {activeIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="mt-4 flex items-center text-green-600 font-medium"
                          >
                            <FaCheck className="mr-2" />
                            <span>Answer provided</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Commitment Section */}
          <motion.div 
            ref={commitmentRef}
            className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden"
            variants={scaleIn}
            initial="hidden"
            animate={isCommitmentInView ? "visible" : "hidden"}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-8"
                variants={slideInLeft}
                initial="hidden"
                animate={isCommitmentInView ? "visible" : "hidden"}
              >
                <h3 className="text-3xl font-bold mb-4">We Are Committed To Your Strategy</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Our team is dedicated to understanding your unique business challenges and crafting tailored solutions that drive measurable results. We combine industry expertise with innovative technology to help you achieve your strategic goals.
                </p>
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="flex -space-x-2"
                    initial={{ opacity: 0 }}
                    animate={isCommitmentInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center border-2 border-white"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaUsers className="text-blue-200" />
                    </motion.div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center border-2 border-white"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaCogs className="text-blue-200" />
                    </motion.div>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaChartLine className="text-blue-200" />
                    </motion.div>
                  </motion.div>
                  <span className="text-blue-100">Trusted by industry leaders</span>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/3 md:text-right"
                variants={slideInRight}
                initial="hidden"
                animate={isCommitmentInView ? "visible" : "hidden"}
              >
                <Link
                  href="/about"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center shadow-lg group"
                >
                  More About Our Company 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration: 300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}