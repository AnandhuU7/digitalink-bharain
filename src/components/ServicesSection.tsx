'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs.',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our digital marketing strategies.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              <div className="text-center">
                <Link href="/services" className="text-blue-600 font-medium inline-flex items-center group">
                  Learn more 
                  <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}