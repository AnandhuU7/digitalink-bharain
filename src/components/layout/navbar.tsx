'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted before rendering interactive elements
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  // Animation variants for menu items
  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Animation variants for logo
  const logoVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for contact info
  const contactVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 relative ${isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-xl xl:max-w-7xl xl:mx-auto xl:rounded-2xl'
          : 'bg-white'
        }`}
      ref={navRef}
    >
      {/* Background layers to match hero section exactly */}
      {!isScrolled && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"></div>
          <div className="absolute inset-0 bg-white/80"></div>
        </>
      )}

      {/* Navigation container with fixed height to avoid layout shifts */}
      <nav className={`container mx-auto px-2 sm:px-6 transition-all duration-300 relative z-10 py-4`}>
        <div
          className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'
            }`}
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial={false}
            animate="visible"
            className="flex items-center flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${isScrolled
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                  : 'bg-blue-500/20 backdrop-blur-sm'
                }`}>
                <span className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-blue-600'
                  }`}>DL</span>
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-gray-800'
                }`}>
                Digital Link
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  className={`relative group font-semibold text-lg transition-colors duration-300 py-2 px-1 ${pathname === link.href
                      ? (isScrolled ? 'text-blue-600' : 'text-blue-500')
                      : (isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-700 hover:text-blue-500')
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 transition-transform duration-300 ${pathname === link.href
                      ? (isScrolled ? 'bg-blue-600 scale-x-100' : 'bg-blue-500 scale-x-100')
                      : (isScrolled ? 'bg-blue-600 scale-x-0 group-hover:scale-x-100' : 'bg-blue-500 scale-x-0 group-hover:scale-x-100')
                    }`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Information - Right Side */}
          <motion.div
            variants={contactVariants}
            initial={false}
            animate="visible"
            className="hidden md:flex items-center gap-4"
          >
            {/* Phone */}
            <motion.a
              href="tel:+38970397589"
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 group ${isScrolled
                  ? 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200 shadow-sm'
                }`}
              aria-label="Call us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaPhone className={`text-sm transition-transform duration-300 group-hover:scale-110 ${isScrolled ? 'text-blue-600' : 'text-blue-500'
                }`} />
              <span className="font-medium text-sm whitespace-nowrap">+389 70 397 589</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@digitallink.com"
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 group ${isScrolled
                  ? 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200 shadow-sm'
                }`}
              aria-label="Email us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaEnvelope className={`text-sm transition-transform duration-300 group-hover:scale-110 ${isScrolled ? 'text-blue-600' : 'text-blue-500'
                }`} />
              <span className="font-medium text-sm whitespace-nowrap">info@digitallink.com</span>
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          {isMounted && (
            <motion.button
              className={`md:hidden p-3 rounded-full shadow-lg relative z-50 ${isScrolled
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-blue-500/20 backdrop-blur-sm text-blue-600'
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.button>
          )}
        </div>
      </nav>

      {/* Mobile & Tablet Navigation - Top to Down Animation (Like First Code) */}
      {isMounted && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-[9999]"
              style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
            >
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel - Top to bottom animation */}
              <motion.div
                className="absolute top-0 left-0 w-full max-h-[90vh] bg-white rounded-b-3xl shadow-2xl overflow-hidden flex flex-col"
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 150, duration: 0.5 }}
              >
                {/* Header with Close Button */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-500 to-blue-600 text-white flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-bold text-lg text-blue-600">DL</span>
                    </div>
                    <span className="text-lg font-bold text-white">Digital Link</span>
                  </div>
                  <motion.button
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col px-4 py-6 overflow-y-auto flex-grow">
                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center space-x-3 px-5 py-4 rounded-xl mb-2 text-base font-medium ${pathname === link.href
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-blue-50'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className={`p-2 rounded-lg ${pathname === link.href ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                          }`}>
                          <div className="w-5 h-5 flex items-center justify-center">
                            {link.label === 'Home' && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            )}
                            {link.label === 'About' && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            {link.label === 'Services' && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            )}
                            {link.label === 'Contact' && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Contact Info in Mobile Menu - Below menu items */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex flex-col gap-2 mt-4"
                  >
                    {/* Phone */}
                    <motion.a
                      href="tel:+38970397589"
                      className="flex items-center gap-3 px-5 py-4 bg-blue-50 rounded-xl text-blue-700 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-2 rounded-lg bg-blue-600 text-white">
                        <FaPhone className="text-sm" />
                      </div>
                      <span>+389 70 397 589</span>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href="mailto:info@digitallink.com"
                      className="flex items-center gap-3 px-5 py-4 bg-blue-50 rounded-xl text-blue-700 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-2 rounded-lg bg-blue-600 text-white">
                        <FaEnvelope className="text-sm" />
                      </div>
                      <span>info@digitallink.com</span>
                    </motion.a>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}