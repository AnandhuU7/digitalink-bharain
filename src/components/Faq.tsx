import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'products': return 'bg-blue-900';
      case 'technology': return 'bg-blue-900';
      case 'services': return 'bg-blue-900';
      default: return 'bg-blue-900';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'products': return '📦';
      case 'technology': return '💻';
      case 'services': return '🔧';
      default: return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-200 opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
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
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-white border-opacity-50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start p-6 text-left focus:outline-none"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-5">
                  <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`inline-block w-3 h-3 rounded-full ${getCategoryColor(item.category)} mr-2`}></span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-6"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;