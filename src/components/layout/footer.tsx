'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaChevronDown
} from 'react-icons/fa';

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">DL</span>
              </div>
              <span className="text-xl font-bold">Digital Link Bahrain</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for digital solutions in Bahrain. We help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FaChevronDown className="text-xs mr-2 transform rotate-270 group-hover:text-blue-400" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile App Development',
                'Digital Marketing',
                'UI/UX Design',
                'E-commerce Solutions',
                'SEO Services'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FaChevronDown className="text-xs mr-2 transform rotate-270 group-hover:text-blue-400" />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-8 h-8 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-gray-400">Manama, Bahrain</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="mr-4 w-8 h-8 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold">Phone Number</h3>
                  <p className="text-gray-400">+973 1234 5678</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="mr-4 w-8 h-8 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold">Email Address</h3>
                  <p className="text-gray-400">info@digitallink.bh</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Digital Link Bahrain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}