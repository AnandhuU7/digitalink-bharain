'use client'
import { motion, useInView, Variants, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaVideo, FaShieldAlt, FaNetworkWired, FaCloud, FaMobileAlt, FaThermometerHalf, 
  FaBrain, FaCar, FaUsers, FaChartLine, FaLightbulb, FaMicrophone, FaTv,
  FaEye, FaCamera, FaSearch, FaLock, FaSatelliteDish, FaArrowRight, FaQuoteLeft, FaStar,
  FaBuilding, FaHospital, FaGraduationCap, FaHotel, FaStore, FaPlane, FaCogs, FaUserShield,
  FaClock, FaMoneyBillWave, FaCheckCircle, FaMapMarkerAlt, FaAward, FaMedal, FaHandshake,
  FaChartBar, FaProjectDiagram, FaUsersCog, FaTools, FaChartPie, FaGlobe, FaCity,
  FaChartArea, FaUserTie, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaTrophy, FaLightbulb as FaBulb
} from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import SolutionFAQ from '@/components/SolutionFAQ';
import StickyContactBar from '@/components/StickyContactBar';

// Surveillance images
import company from "@/assets/Building.jpg"
import analytics from "@/assets/Building.jpg"
import remote from "@/assets/Building.jpg"
import ai from "@/assets/Building.jpg"
import anpr  from "@/assets/Building.jpg"

// Types
interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface Capability {
  title: string;
  description: string;
  icon: React.ReactElement;
  gradient: string;
}

interface Technology {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface Project {
  title: string;
  description: string;
  location: string;
  image: string;
}

interface Partner {
  name: string;
  description: string;
  logo: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

export default function SurveillancePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const analyticsRef = useRef(null);
  const remoteRef = useRef(null);
  const aiRef = useRef(null);
  const anprRef = useRef(null);
  const surveillanceInActionRef = useRef(null);
  const caseStudyRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, amount: 0.2 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const isAnalyticsInView = useInView(analyticsRef, { once: true, amount: 0.2 });
  const isRemoteInView = useInView(remoteRef, { once: true, amount: 0.2 });
  const isAIInView = useInView(aiRef, { once: true, amount: 0.2 });
  const isANPRInView = useInView(anprRef, { once: true, amount: 0.2 });
  const isSurveillanceInActionInView = useInView(surveillanceInActionRef, { once: true, amount: 0.2 });
  const isCaseStudyInView = useInView(caseStudyRef, { once: true, amount: 0.2 });

  // Slower, smoother animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.8, 
        ease: [0.22, 0.61, 0.36, 1] 
      }
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 2.0, 
        ease: [0.22, 0.61, 0.36, 1] 
      }
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 2.0, 
        ease: [0.22, 0.61, 0.36, 1] 
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.22, 0.61, 0.36, 1] 
      }
    }
  };

  // Tab content animation variants
  const tabContentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 0.61, 0.36, 1] 
      }
    }
  };

  const tabImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.22, 0.61, 0.36, 1] 
      }
    }
  };

  // Enhanced Case Study animation variants (without changing design)
  const caseStudyTitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: 0.2,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const caseStudySectionVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const resultItemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const resultStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Updated tab content based on surveillance images
  const tabContent = [
    {
      title: "IP Surveillance Systems",
      description: "Digitallink Bahrain provides modern IP monitoring systems that deliver high-quality video recording with exceptional reliability and performance for businesses across the region.",
      features: [
        "High-definition video recording capabilities",
        "Easy system scalability for growing businesses",
        "Fast integration with existing security infrastructure",
        "Remote viewing & mobile access for real-time monitoring",
        "Flexible infrastructure adaptation to various environments"
      ]
    },
    {
      title: "Advanced Analytics",
      description: "Our intelligent video analytics solutions from Digitallink Bahrain provide real-time insights and automated threat detection for enhanced security monitoring.",
      features: [
        "Real-time monitoring & intelligent alerts system",
        "Advanced behavioral analysis for threat prediction",
        "Precise object detection & tracking capabilities",
        "Anomaly detection for unusual activities",
        "Automated incident response for immediate action"
      ]
    },
    {
      title: "Remote Access Solutions",
      description: "Digitallink Bahrain's remote surveillance access solutions allow you to monitor your premises from anywhere using our cutting-edge technology.",
      features: [
        "Smartphone & tablet access for on-the-go monitoring",
        "Thermal imaging technology for low-light conditions",
        "Weather-resistant performance in all environments",
        "Multi-location management from a single interface",
        "Secure encrypted connections for data protection"
      ]
    },
    {
      title: "AI-Powered Security",
      description: "Enhance your surveillance with Digitallink Bahrain's artificial intelligence solutions for smarter, more proactive security measures.",
      features: [
        "Intelligent perimeter protection with intrusion detection",
        "Advanced facial recognition for access control",
        "Privacy protection features with intelligent masking",
        "License plate recognition for vehicle management",
        "Crowd analysis & management for large gatherings"
      ]
    }
  ];

  const features: Feature[] = [
    {
      icon: <FaVideo className="text-3xl" />,
      title: 'High-Quality Video',
      description: 'Crystal-clear recording for detailed monitoring and evidence collection'
    },
    {
      icon: <FaNetworkWired className="text-3xl" />,
      title: 'Easy Integration',
      description: 'Seamlessly connect with existing infrastructure and security systems'
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: 'Cloud Storage',
      description: 'Secure, scalable storage with anytime access to surveillance footage'
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: 'Remote Access',
      description: 'Monitor your property from anywhere using mobile devices'
    }
  ];

  const caseStudy = {
    title: "Dubai Financial District Security Enhancement",
    challenge: "The Dubai Financial District needed a comprehensive surveillance upgrade to enhance security across multiple buildings while maintaining aesthetic appeal and minimizing disruption to daily operations.",
    solution: "Digitallink Bahrain designed and implemented an integrated IP surveillance system with AI-powered analytics, facial recognition, and centralized management platform. The solution included 300+ high-definition cameras with thermal imaging capabilities.",
    results: [
      "40% reduction in security incidents",
      "Improved response time by 60%",
      "Centralized monitoring of all facilities",
      "Enhanced investigation capabilities with searchable video analytics"
    ],
    image: company.src
  };

  const headerSlides = [
    {
      title: "Surveillance Solutions",
      subtitle: "Leading provider of advanced surveillance systems in Dubai and the Middle East",
      headingPart1: "Advanced",
      headingPart2: "Surveillance Solutions"
    }
  ];

  const headerBenefits = [
    "High-Quality Video Recording",
    "Easy Scalability",
    "Fast Integration",
    "Remote Access",
    "Mobile Operation"
  ];

  const headerFeatures = [
    { icon: FaVideo, title: "IP Systems", desc: "Modern technology" },
    { icon: FaNetworkWired, title: "Integration", desc: "Seamless" },
    { icon: FaMobileAlt, title: "Remote Access", desc: "Anytime, anywhere" },
    { icon: FaShieldAlt, title: "Security", desc: "Advanced protection" }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader 
        slides={headerSlides}
        benefits={headerBenefits}
        features={headerFeatures}
        ctaText="Get Surveillance Solution"
        ctaIcon={FaArrowRight}
      />

      {/* Company Introduction */}
      <section ref={introRef} className="pt-16 pb-12 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image first on mobile, content second */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial="hidden"
              animate={isIntroInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3]">
                  <img src={company.src} alt="Surveillance solutions leader" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              animate={isIntroInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              <motion.span 
                className="inline-block px-4 py-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-white rounded-full mb-4 shadow-sm"
                variants={fadeInUp}
              >
                Industry Leader
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Surveillance Solutions Leader in Dubai and the Middle East
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                variants={fadeInUp}
              >
                As the leading surveillance solutions provider in Dubai and the Middle East, Digitallink Bahrain is the official distributor of industry-leading brands like UNV and Dahua. Our commitment is to deliver modern, reliable surveillance technology that meets the highest security standards for our clients.
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                {[
                  'Official distributor of UNV, Dahua and other leading brands',
                  'Modern, reliable surveillance technology solutions',
                  'High-quality video recording systems for all environments',
                  'Solutions designed for current and future security needs'
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    variants={fadeInUp}
                    custom={i}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IP System Features */}
      <section ref={featuresRef} className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.div 
              className="text-center mb-12"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.0,
                    ease: [0.22, 0.61, 0.36, 1]
                  }
                }
              }}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 rounded-full mb-4">
                Key Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced IP Surveillance Systems
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Digitallink Bahrain's IP monitoring systems are designed to deliver exceptional performance with modern security requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-xl"
                  variants={{
                    hidden: { 
                      opacity: 0,
                      y: 30
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 0.61, 0.36, 1]
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { 
                      duration: 0.4,
                      ease: [0.22, 0.61, 0.36, 1]
                    }
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center text-white mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-white rounded-full mb-4 shadow-sm">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Surveillance Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Digitallink Bahrain offers a range of advanced surveillance solutions designed to meet diverse security needs
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-200">
              {tabContent.map((tab, index) => (
                <motion.button
                  key={index}
                  className={`px-6 py-4 font-medium text-sm md:text-base transition-colors duration-300 ${
                    activeTab === index
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
                  variants={tabContentVariants}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Image first on mobile, content second */}
                  <motion.div
                    variants={tabImageVariants}
                    className="flex justify-center order-1 md:order-2"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-md">
                      {activeTab === 0 && (
                        <img src={company.src} alt="IP Surveillance Systems" className="w-full h-auto object-cover" />
                      )}
                      {activeTab === 1 && (
                        <img src={analytics.src} alt="Advanced Analytics" className="w-full h-auto object-cover" />
                      )}
                      {activeTab === 2 && (
                        <img src={remote.src} alt="Remote Access Solutions" className="w-full h-auto object-cover" />
                      )}
                      {activeTab === 3 && (
                        <img src={ai.src} alt="AI-Powered Security" className="w-full h-auto object-cover" />
                      )}
                    </div>
                  </motion.div>
                  
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
                    <p className="text-gray-600 mb-6">{tabContent[activeTab].description}</p>
                    <ul className="space-y-3">
                      {tabContent[activeTab].features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Surveillance in Action Section */}
      <section ref={surveillanceInActionRef} className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isSurveillanceInActionInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 rounded-full mb-4">
                Real-World Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Surveillance in Action
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See our advanced surveillance systems deployed in real-world environments across the region
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  variants={scaleIn}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.5 }
                  }}
                  onClick={() => openModal(company.src)}
                >
                  <div className="aspect-[4/3]">
                    <img src={company.src} alt={`Surveillance in action ${item}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Deployment #{item}</h3>
                      <p className="text-sm text-gray-200">High-security facility</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section with Enhanced Animations Only */}
      <section ref={caseStudyRef} className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isCaseStudyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider bg-white rounded-full mb-4 shadow-sm">
                Success Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Study
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how our surveillance solutions transformed security for a major financial district
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeInLeft}
                  className="p-8"
                >
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-6"
                    variants={caseStudyTitleVariants}
                  >
                    {caseStudy.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="mb-6"
                    variants={caseStudySectionVariants}
                  >
                    <h4 className="text-lg font-bold text-indigo-600 mb-2">Challenge</h4>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-6"
                    variants={caseStudySectionVariants}
                  >
                    <h4 className="text-lg font-bold text-indigo-600 mb-2">Solution</h4>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </motion.div>
                  
                  <motion.div variants={caseStudySectionVariants}>
                    <h4 className="text-lg font-bold text-indigo-600 mb-2">Results</h4>
                    <motion.ul 
                      className="space-y-2"
                      variants={resultStagger}
                    >
                      {caseStudy.results.map((result, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          variants={resultItemVariants}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  variants={fadeInRight}
                  className="relative"
                >
                  <div className="h-full">
                    <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SolutionFAQ />
      <StickyContactBar />
    </div>
  );
}