'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';

const processSteps = [
  {
    id: 1,
    title: "IT & AI Solutions",
    icon: <FaCode className="text-3xl" />,
    leftdescription: "Innovative IT and AI solutions including app development, SEO, and digital marketing.",
    rightdescription: "Cutting-edge technology services for web, mobile, and AI-driven business growth strategies.",
    color: "from-blue-950 via-blue-900 to-blue-800",
    bgColor: "from-blue-950/20 to-blue-800/10"
  },
  {
    id: 2,
    title: "ELV Solutions",
    icon: <FaDraftingCompass className="text-3xl" />,
    leftdescription: "Advanced ELV technology solutions with custom setups for various environments.",
    rightdescription: "Tailored low-voltage systems designed for modern infrastructure and security needs.",
    color: "from-blue-950 via-blue-900 to-blue-800",
    bgColor: "from-blue-950/20 to-blue-800/10"
  },
  {
    id: 3,
    title: "Audio & Visual",
    icon: <FaLightbulb className="text-3xl" />,
    leftdescription: "Custom audio-visual solutions using advanced technology for events and venues.",
    rightdescription: "Premium sound and visual systems engineered for exceptional experiences and performances.",
    color: "from-blue-950 via-blue-900 to-blue-800",
    bgColor: "from-blue-950/20 to-blue-800/10"
  },
  {
    id: 4,
    title: "Surveillance",
    icon: <FaRocket className="text-3xl" />,
    leftdescription: "Advanced surveillance solutions with custom setups for various settings.",
    rightdescription: "Comprehensive security monitoring systems designed for diverse operational requirements.",
    color: "from-blue-950 via-blue-900 to-blue-800",
    bgColor: "from-blue-950/20 to-blue-800/10"
  }
];

export default function FeatureSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 bg-clip-text text-transparent">Core Expertise</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive technology solutions tailored to meet your business needs and challenges.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Process Steps */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white shadow-xl border-l-4 border-blue-900' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r ' + step.color + ' text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.leftdescription}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              className={`relative bg-gradient-to-br ${processSteps[activeStep].bgColor} backdrop-blur-xl rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden transition-all duration-500 border border-blue-900/30`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Multiple Rotating Circles */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-72 h-72 rounded-full border-4 border-dashed border-blue-900/30 opacity-30"></div>
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-56 h-56 rounded-full border-4 border-dotted border-blue-900/30 opacity-40"></div>
              </motion.div>

              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-blue-900/30 opacity-50"></div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${15 + i * 12}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Step Indicator Card */}
              <motion.div 
                className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-w-xs text-center"
                key={activeStep}
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${processSteps[activeStep].color} text-white shadow-lg shadow-blue-900/50`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {processSteps[activeStep].icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{processSteps[activeStep].title}</h3>
                <p className="text-gray-600 mb-4">{processSteps[activeStep].rightdescription}</p>
                
                {/* Step Number Badge */}
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white rounded-full text-sm font-semibold mb-4 shadow-lg shadow-blue-900/50">
                  Service {activeStep + 1} of {processSteps.length}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    {processSteps.map((_, i) => (
                      <motion.div 
                        key={i} 
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                          i === activeStep ? 'bg-blue-900' : 'bg-gray-300'
                        }`}
                        whileHover={{ scale: 1.3 }}
                        onClick={() => setActiveStep(i)}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-900/40 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}