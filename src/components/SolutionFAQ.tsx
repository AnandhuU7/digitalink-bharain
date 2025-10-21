import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { FaQuestionCircle, FaPlus, FaMinus, FaCheck } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const SolutionFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const faqs: FAQItem[] = [
    {
      question: 'What types of CCTV systems do you offer?',
      answer: 'We offer a variety of CCTV systems including analog, digital, IP, wireless CCTV cameras, as well as NVR and DVR systems.'
    },
    {
      question: 'What are your specialties in IT and AI?',
      answer: 'We specialize in IT solutions, web development, and SEO services to help businesses grow and succeed in the digital landscape.'
    },
    {
      question: 'Which monitoring system brands do you offer?',
      answer: 'We provide monitoring system brands such as UNV, Hikvision, Dahua, and other leading manufacturers in the security industry.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes, we offer comprehensive technical support for all our products and solutions to ensure they function optimally.'
    },
    {
      question: 'Do you offer discounts for bulk purchases?',
      answer: 'Yes, we provide discounts for bulk orders. Please contact our sales team for more information on volume pricing.'
    },
    {
      question: 'How can I place an order?',
      answer: 'You can place orders through our website, via email, or by calling our sales team directly. We offer multiple convenient ordering options.'
    }
  ];


  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Find answers to common questions about our solutions</p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionFAQ;