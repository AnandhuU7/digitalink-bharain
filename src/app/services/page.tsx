'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaPaintBrush, FaShoppingCart, FaSearch, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { ReactElement } from 'react';

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs. We create responsive, fast, and secure websites that drive results.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'Web Applications']
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide exceptional user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our comprehensive digital marketing strategies that deliver measurable results.',
      features: ['SEO', 'PPC Advertising', 'Social Media Marketing', 'Content Marketing']
    },
    {
      icon: <FaPaintBrush className="text-4xl text-blue-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience and drive engagement with your brand.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: <FaShoppingCart className="text-4xl text-blue-600" />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce solutions that help you sell online effectively and grow your business.',
      features: ['Online Store Development', 'Payment Integration', 'Inventory Management', 'Analytics']
    },
    {
      icon: <FaSearch className="text-4xl text-blue-600" />,
      title: 'SEO Services',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our SEO services.',
      features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO']
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="text-blue-600 font-medium inline-flex items-center group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-blue-100">
                We understand that every business is unique. Contact us today to discuss your specific requirements and get a customized solution tailored to your needs.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-bold transition-all duration-300 inline-flex items-center shadow-lg group"
              >
                Get a Quote 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}