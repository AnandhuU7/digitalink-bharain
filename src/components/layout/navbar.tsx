'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [pathname, setPathname] = useState('/');
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

  const handleLinkClick = (href: string) => {
    setPathname(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        isScrolled
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
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center flex-shrink-0"
          >
            <button onClick={() => handleLinkClick('/')} className="flex items-center space-x-2">
              <motion.div 
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                    : 'bg-blue-500/20 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`font-bold text-xl ${isScrolled ? 'text-white' : 'text-blue-600'}`}>
                  DL
                </span>
              </motion.div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-gray-800'}`}>
                Digital Link
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.3, 
                  ease: "easeOut" 
                }}
                whileHover={{ y: -2 }}
              >
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative group font-semibold text-lg transition-colors duration-300 py-2 px-1 ${
                    pathname === link.href
                      ? (isScrolled ? 'text-blue-600' : 'text-blue-500')
                      : (isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-700 hover:text-blue-500')
                  }`}
                >
                  <motion.span 
                    className="relative px-3 py-1 rounded-lg"
                    whileHover={{ 
                      backgroundColor: pathname === link.href ? "transparent" : "rgba(239, 246, 255, 0.7)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                    <motion.span 
                      className="absolute inset-0 rounded-lg border border-blue-200 opacity-0"
                      whileHover={{ opacity: pathname === link.href ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 transition-transform duration-300 ${
                      pathname === link.href
                        ? (isScrolled ? 'bg-blue-600 scale-x-100' : 'bg-blue-500 scale-x-100')
                        : (isScrolled ? 'bg-blue-600 scale-x-0 group-hover:scale-x-100' : 'bg-blue-500 scale-x-0 group-hover:scale-x-100')
                    }`}
                  ></span>
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Contact Information - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            className="hidden md:flex items-center gap-4"
          >
            {/* Phone */}
            <motion.a
              href="tel:+38970397589"
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isScrolled
                  ? 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200 shadow-sm'
              }`}
              aria-label="Call us"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <FaPhone className={`text-sm ${isScrolled ? 'text-blue-600' : 'text-blue-500'}`} />
              </motion.div>
              <span className="font-medium text-sm whitespace-nowrap">+389 70 397 589</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@digitallink.com"
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isScrolled
                  ? 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 border border-gray-200 shadow-sm'
              }`}
              aria-label="Email us"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope className={`text-sm ${isScrolled ? 'text-blue-600' : 'text-blue-500'}`} />
              </motion.div>
              <span className="font-medium text-sm whitespace-nowrap">info@digitallink.com</span>
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          {isMounted && (
            <motion.button
              className={`md:hidden p-3 rounded-full shadow-lg relative z-50 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-blue-500/20 backdrop-blur-sm text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </motion.div>
            </motion.button>
          )}
        </div>
      </nav>

      {/* Mobile & Tablet Navigation - Top to Down Animation */}
      {isMounted && (
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop with blur effect */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel - Slides from top */}
              <motion.div
                className="fixed left-0 right-0 bg-gradient-to-br from-white to-gray-50 z-40 md:hidden shadow-2xl overflow-hidden"
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 150,
                  duration: 0.5
                }}
                style={{ maxHeight: '80vh' }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-blue-200/30 rounded-full blur-3xl -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-50/30 to-blue-100/30 rounded-full blur-3xl translate-y-24 -translate-x-24" />

                {/* Menu Content */}
                <div className="relative flex flex-col items-center justify-start pt-24 pb-12 px-6 space-y-2">
                  {/* Logo Section */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, duration: 0.3 }}
                    className="mb-8"
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white font-bold text-2xl">DL</span>
                    </motion.div>
                  </motion.div>

                  {/* Contact Info in Mobile Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="flex flex-col gap-3 w-full max-w-xs mb-6"
                  >
                    {/* Phone */}
                    <motion.a
                      href="tel:+38970397589"
                      className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl text-blue-700 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaPhone className="text-blue-600" />
                      <span>+389 70 397 589</span>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href="mailto:info@digitallink.com"
                      className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl text-blue-700 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaEnvelope className="text-blue-600" />
                      <span>info@digitallink.com</span>
                    </motion.a>
                  </motion.div>

                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + index * 0.05,
                        ease: "easeOut"
                      }}
                      className="w-full"
                    >
                      <motion.button
                        onClick={() => handleLinkClick(link.href)}
                        className={`block w-full text-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                          pathname === link.href
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                            : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.label}
                      </motion.button>
                    </motion.div>
                  ))}

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-6"
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}