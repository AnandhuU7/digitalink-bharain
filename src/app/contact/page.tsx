'use client';

import ContactForm from '@/components/forms/contact-form';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { ReactElement } from 'react';

interface ContactInfo {
  icon: ReactElement;
  title: string;
  details: string;
}

export default function ContactPage() {
  const contactInfo: ContactInfo[] = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-xl" />,
      title: 'Our Location',
      details: 'Manama, Bahrain'
    },
    {
      icon: <FaPhone className="text-blue-600 text-xl" />,
      title: 'Phone Number',
      details: '+973 1234 5678'
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-xl" />,
      title: 'Email Address',
      details: 'info@digitallink.bh'
    },
    {
      icon: <FaClock className="text-blue-600 text-xl" />,
      title: 'Working Hours',
      details: 'Mon-Fri: 9am-6pm'
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
            Contact <span className="text-blue-600">Us</span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions or want to learn more about our services? 
            Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaPaperPlane className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
              </div>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8 md:p-10 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold">Get In Touch</h2>
              </div>
              <p className="mb-8 text-blue-100">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{info.title}</h3>
                      <p className="text-blue-100">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold mb-2 text-lg">How long does a project typically take?</h3>
                  <p className="text-gray-600">Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold mb-2 text-lg">Do you provide ongoing support?</h3>
                  <p className="text-gray-600">Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally.</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-lg">What industries do you work with?</h3>
                  <p className="text-gray-600">We work with clients across various industries including retail, healthcare, education, finance, and more.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}