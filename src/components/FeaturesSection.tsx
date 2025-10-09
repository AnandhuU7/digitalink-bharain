// components/InteractiveProcessSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket, FaCheck } from 'react-icons/fa';

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    icon: <FaLightbulb className="text-3xl" />,
    description: "We analyze your needs and goals to create a tailored strategy.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 2,
    title: "Design",
    icon: <FaDraftingCompass className="text-3xl" />,
    description: "Our designers craft beautiful and functional interfaces.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 3,
    title: "Development",
    icon: <FaCode className="text-3xl" />,
    description: "We build your solution using cutting-edge technologies.",
    color: "from-green-400 to-teal-500"
  },
  {
    id: 4,
    title: "Launch",
    icon: <FaRocket className="text-3xl" />,
    description: "We deploy your solution and help you grow your business.",
    color: "from-purple-400 to-pink-500"
  }
];

export default function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-blue-600">Proven Process</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A streamlined approach to deliver exceptional results for your business.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Process Steps */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white shadow-xl border-l-4 border-blue-500' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r ' + step.color + ' text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className="lg:w-1/2">
            <motion.div 
              className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 h-96 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Animated Circle */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-64 h-64 rounded-full border-4 border-dashed border-blue-300"></div>
              </motion.div>

              {/* Step Indicator */}
              <motion.div 
                className="relative z-10 bg-white rounded-2xl shadow-xl p-8 max-w-xs text-center"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${processSteps[activeStep].color} text-white`}>
                  {processSteps[activeStep].icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{processSteps[activeStep].title}</h3>
                <p className="text-gray-600">{processSteps[activeStep].description}</p>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    {processSteps.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i === activeStep ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}