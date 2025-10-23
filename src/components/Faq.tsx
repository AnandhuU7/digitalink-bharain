import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaQuestionCircle, FaPlus, FaMinus, FaCheck } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What types of CCTV systems do you offer?",
      answer: "We offer a comprehensive range of CCTV systems including IP cameras, analog cameras, wireless systems, PTZ (Pan-Tilt-Zoom) cameras, thermal cameras, and specialized solutions for various environments.",
      category: "products"
    },
    {
      id: 2,
      question: "What do we specialize in IT and AI?",
      answer: "Our specialization includes intelligent surveillance solutions with facial recognition, object detection, behavioral analysis, predictive maintenance, IT infrastructure support, and custom AI applications.",
      category: "technology"
    },
    {
      id: 3,
      question: "What Surveillance system brands do you offer?",
      answer: "We partner with leading brands including Hikvision, Dahua, Axis Communications, Bosch, Hanwha Techwin, and Avigilon for high-quality surveillance solutions.",
      category: "products"
    },
    {
      id: 4,
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services with certified technicians ensuring proper setup, configuration, and testing for optimal performance.",
      category: "services"
    },
    {
      id: 5,
      question: "What kind of support do you offer after installation?",
      answer: "We offer 24/7 technical assistance, maintenance checks, software updates, and remote troubleshooting for all our surveillance systems.",
      category: "services"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'products', name: 'Products' },
    { id: 'technology', name: 'Technology' },
    { id: 'services', name: 'Services' }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredItems = filter === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === filter);

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

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Find answers to common questions about our solutions</p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {filteredItems.map((faq, index) => (
            <div key={faq.id} className="mb-6">
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
                    <div>
                      <div className="flex items-center mb-1">
                        <span className={`inline-block w-2 h-2 rounded-full ${
                          faq.category === 'products' ? 'bg-blue-900' : 
                          faq.category === 'technology' ? 'bg-blue-700' : 
                          'bg-blue-500'
                        } mr-2`}></span>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {faq.category}
                        </span>
                      </div>
                      <span className={`text-lg font-medium ${
                        activeIndex === index ? 'text-blue-900' : 'text-gray-800'
                      }`}>{faq.question}</span>
                    </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;