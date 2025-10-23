'use client';

import ContactForm from '@/components/forms/contact-form';
import { motion, Variants } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaArrowRight, FaBuilding, FaGlobe, FaHeadset, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { ReactElement } from 'react';
import PageHeader from '@/components/PageHeader';

interface ContactInfo {
  icon: ReactElement;
  title: string;
  details: string;
  link?: string;
}

interface SocialLink {
  icon: ReactElement;
  url: string;
  name: string;
  color: string;
}

export default function ContactPage() {
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

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Our Location',
      details: 'Manama, Bahrain',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone Number',
      details: '+973 1234 5678',
      link: 'tel:+97312345678'
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email Address',
      details: 'info@digitallink.bh',
      link: 'mailto:info@digitallink.bh'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Working Hours',
      details: 'Mon-Fri: 9am-6pm'
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook className="text-xl" />, url: '#', name: 'Facebook', color: 'bg-[#1877F2]' },
    { icon: <FaXTwitter className="text-xl" />, url: '#', name: 'X', color: 'bg-black' },
    { icon: <FaInstagram className="text-xl" />, url: '#', name: 'Instagram', color: 'bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
    { icon: <FaLinkedin className="text-xl" />, url: '#', name: 'LinkedIn', color: 'bg-[#0A66C2]' },
    { icon: <FaWhatsapp className="text-xl" />, url: '#', name: 'WhatsApp', color: 'bg-[#25D366]' }
  ];

  // Data for PageHeader component
  const headerSlides = [
    { 
      title: "Contact Our Team", 
      subtitle: "Get in touch with our experts for personalized solutions",
      headingPart1: "Let's",
      headingPart2: "Connect"
    }
  ];

  const headerBenefits = [
    "Expert consultation",
    "Tailored solutions",
    "Quick response time",
    "Ongoing support"
  ];

  const headerFeatures = [
    { 
      icon: FaMapMarkerAlt, 
      title: 'Visit Our Office', 
      desc: 'Manama location' 
    },
    { 
      icon: FaPhone, 
      title: 'Call Us', 
      desc: 'Direct support' 
    },
    { 
      icon: FaEnvelope, 
      title: 'Email Us', 
      desc: 'Prompt response' 
    },
    { 
      icon: FaClock, 
      title: 'Working Hours', 
      desc: 'Mon-Fri 9-6' 
    }
  ];

  return (
    <>
      {/* Page Header Component */}
      <PageHeader 
        slides={headerSlides}
        benefits={headerBenefits}
        features={headerFeatures}
        ctaText="Get In Touch"
        ctaIcon={FaArrowRight}
      />

      {/* Contact Content */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white min-h-screen overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <motion.div 
              className="space-y-8"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Contact Form Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg mr-5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaPaperPlane className="text-xl" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-blue-900">Send Us a Message</h2>
                </div>
                <ContactForm />
              </div>

              {/* Social Media Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Connect With Us</h3>
                <p className="text-gray-600 mb-6">Follow us on social media for updates and insights</p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center shadow-md`}
                      variants={scaleIn}
                      whileHover={{ 
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Map and Contact Info */}
            <motion.div 
              className="space-y-8"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-blue-900">Our Location</h2>
                </div>
                <div className="h-80 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6151309753886!2d77.56900557484181!3d12.996450387321195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dd1d2920d9%3A0xf9161994ff8c9f5d!2sQatar%2C%20Uae%2C%20Kuwait%2C%20Bahrain%20Embassy%20Attestation%20services%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1761203625483!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map showing our location"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-5">
                  <a 
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
                  >
                    View on Google Maps <FaArrowRight className="ml-2 text-sm" />
                  </a>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-white bg-opacity-20 mr-5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaHeadset className="text-xl" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Get In Touch</h2>
                </div>
                <p className="mb-8 text-blue-100">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
                
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="mr-5 mt-1 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-blue-100 hover:text-white transition-colors duration-300"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-blue-100">{info.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info Cards */}
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <FaBuilding className="text-blue-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Offices</h3>
              <p className="text-gray-600">With offices in Manama, we serve clients across Bahrain and the GCC region.</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-blue-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">Our solutions are designed to scale with your business, wherever you operate.</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <FaHeadset className="text-blue-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is always ready to assist you with any questions or issues.</p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-24 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-8"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-4">Ready To Transform Your Business?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's discuss how our solutions can help you achieve your business goals. Our team is ready to assist you.
                </p>
              </motion.div>
              <motion.div 
                className="md:w-1/3 md:text-right"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <a
                  href="#contact-form"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center shadow-lg group"
                >
                  Start Your Project 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration: 300" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}