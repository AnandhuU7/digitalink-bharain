'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaUserShield, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
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

  // Animation variants for admin icon
  const adminIconVariants: Variants = {
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
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-xl xl:max-w-7xl xl:mx-auto xl:rounded-2xl' 
          : 'bg-transparent'
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
      
      {/* Navigation container with scroll-based padding */}
      <nav className={`container mx-auto px-2 sm:px-6 py-3 sm:py-4 transition-all duration-300 relative z-10 ${isScrolled ? 'py-2 sm:py-3' : ''}`}>
        <div className="flex justify-between items-center">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                  : 'bg-blue-500/20 backdrop-blur-sm'
              }`}>
                <span className={`font-bold text-xl ${
                  isScrolled ? 'text-white' : 'text-blue-600'
                }`}>DL</span>
              </div>
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-blue-600' : 'text-gray-800'
              }`}>
                Digital Link
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link.href}
                  className={`relative group font-semibold text-lg transition-colors duration-300 py-3 px-1 ${
                    pathname === link.href
                      ? (isScrolled ? 'text-blue-600' : 'text-blue-500')
                      : (isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-700 hover:text-blue-500')
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 transition-transform duration-300 ${
                    pathname === link.href 
                      ? (isScrolled ? 'bg-blue-600 scale-x-100' : 'bg-blue-500 scale-x-100')
                      : (isScrolled ? 'bg-blue-600 scale-x-0 group-hover:scale-x-100' : 'bg-blue-500 scale-x-0 group-hover:scale-x-100')
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Admin Login Icon */}
          <motion.div
            variants={adminIconVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block"
          >
            <Link
              href="/admin/login"
              className={`p-3 rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Admin Login"
            >
              <FaUserShield className="text-2xl" />
            </Link>
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
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
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
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel - Slides from top */}
              <motion.div
                className="fixed left-0 right-0 bg-gradient-to-br from-white to-gray-50 z-40 md:hidden shadow-2xl overflow-hidden"
                initial={{ top: '-100%', opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                exit={{ top: '-100%', opacity: 0 }}
                transition={{ 
                  type: 'spring', 
                  damping: 25, 
                  stiffness: 200,
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
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="mb-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">DL</span>
                    </div>
                  </motion.div>

                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 + index * 0.08,
                        type: 'spring',
                        stiffness: 100
                      }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        className={`block w-full text-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                          pathname === link.href
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                            : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Admin Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: 0.1 + navLinks.length * 0.08 }}
                    className="w-full pt-4"
                  >
                    <Link
                      href="/admin/login"
                      className="flex items-center justify-center space-x-3 w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaUserShield className="text-xl" />
                      <span>Admin Login</span>
                    </Link>
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
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