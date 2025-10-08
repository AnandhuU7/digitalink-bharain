'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaPlay } from 'react-icons/fa';

export default function FeaturesSection() {
  const features = [
    'Expert Team',
    'Cutting-edge Technology',
    'Custom Solutions',
    '24/7 Support',
    'Affordable Pricing',
    'Quick Turnaround'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why <span className="text-blue-600">Choose Us</span></h2>
            <p className="text-gray-600 mb-6 text-lg">
              At Digital Link Bahrain, we combine creativity, technology, and business acumen to deliver solutions that drive growth and success.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <FaCheck className="text-green-500" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 pl-0 md:pl-8 lg:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-2xl p-1">
                  <div className="w-full h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaPlay className="text-white text-2xl ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Digital Solutions</h3>
                      <p className="text-blue-100">Transforming businesses with technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}