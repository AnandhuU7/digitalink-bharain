'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import webImage from '@/assets/Building.jpg';
import PageHeader from '@/components/PageHeader';
import { FaArrowRight } from 'react-icons/fa';

// Types
interface BlogData {
  id: number;
  title: string;
  slug: string;
  cardImage: any;
  intro: string;
}

interface BlogPageProps {
  params?: any;
  searchParams?: any;
}

// Hardcoded blog data
const defaultBlogs: BlogData[] = [
  {
    id: 1,
    title: 'The Future of Web Development',
    slug: 'future-of-web-development',
    cardImage: webImage,
    intro: 'Explore the latest trends and technologies shaping the future of web development. From AI integration to progressive web apps, discover what\'s next in the digital landscape.'
  },
  {
    id: 2,
    title: 'Building Scalable Applications',
    slug: 'building-scalable-applications',
    cardImage: webImage,
    intro: 'Learn best practices for creating applications that can grow with your business. We cover architecture patterns, database optimization, and performance tuning strategies.'
  },
  {
    id: 3,
    title: 'Design Systems That Work',
    slug: 'design-systems-that-work',
    cardImage: webImage,
    intro: 'Creating consistent and maintainable design systems is crucial for modern applications. Discover how to build a design system that scales across your entire product.'
  },
  {
    id: 4,
    title: 'Optimizing User Experience',
    slug: 'optimizing-user-experience',
    cardImage: webImage,
    intro: 'User experience is at the heart of successful digital products. Learn techniques and methodologies to create intuitive, engaging interfaces that users love.'
  }
];

const BlogPage: React.FC<BlogPageProps> = ({ 
  params,
  searchParams 
}) => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const title = 'Our Blogs';
  const description = 'Explore our latest blogs and articles';

  useEffect(() => {
    // Load Swiper CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swiper@11/swiper-bundle.min.css';
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);

    // Load Swiper JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swiper@11/swiper-bundle.min.js';
    script.defer = true;
    script.onload = () => setSwiperLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (swiperLoaded && typeof window !== 'undefined' && (window as any).Swiper) {
      const Swiper = (window as any).Swiper;
      new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 500,
        navigation: {
          nextEl: '#slider-button-right',
          prevEl: '#slider-button-left',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 }
        }
      });
    }
  }, [swiperLoaded]);

  // Use provided blogs or default blogs
  const displayBlogs = defaultBlogs.sort((a, b) => a.id - b.id).slice(0, 4);

  // PageHeader data
  const headerSlides = [
    {
      title: "Latest Insights",
      subtitle: "Discover our latest articles, expert opinions, and industry insights from Digitallink Bahrain",
      headingPart1: "Explore Our",
      headingPart2: "Blog & Insights"
    }
  ];

  const headerBenefits = [
    "Expert Industry Insights",
    "Latest Technology Trends",
    "Practical Tips & Guides",
    "Professional Development",
    "Innovation Updates"
  ];

  const headerFeatures = [
    { icon: FaArrowRight, title: "Web Development", desc: "Latest trends" },
    { icon: FaArrowRight, title: "System Design", desc: "Best practices" },
    { icon: FaArrowRight, title: "User Experience", desc: "Optimization" },
    { icon: FaArrowRight, title: "Technology", desc: "Innovation" }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      {/* Page Header */}
      <PageHeader
        slides={headerSlides}
        benefits={headerBenefits}
        features={headerFeatures}
        ctaText="Read Latest"
        ctaIcon={FaArrowRight}
      />

      {/* Custom styles for Swiper - minimized and essential only */}
      <style jsx global>{`
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after {
          content: '' !important;
        }

        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
          content: '' !important;
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          width: 24px !important;
          height: 24px !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          position: relative !important;
        }

        .swiper-slide.swiper-slide-active {
          border-color: rgb(30, 58, 138) !important;
        }
        
        .swiper {
          overflow: hidden !important;
          position: relative !important;
          width: 100% !important;
        }
        
        .swiper-wrapper {
          display: flex !important;
          width: 100% !important;
          box-sizing: content-box !important;
        }
        
        .swiper-slide {
          flex: 0 0 auto !important;
          width: 100% !important;
          padding: 16px !important;
          box-sizing: border-box !important;
          transition: transform 300ms ease !important;
        }

        @media (min-width: 768px) {
          .swiper-slide {
            width: 50% !important;
          }
        }
      `}</style>

      {/* Blog Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="blog">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            {/* Left Column */}
            <div className="w-full lg:w-2/5 flex flex-col justify-between">
              <div className="text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5"
                >
                  Our latest <span className="text-blue-900">blogs</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto"
                >
                  Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.
                </motion.p>
                <motion.a 
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ backgroundColor: 'rgb(243, 244, 246)' }}
                  className="inline-block cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto text-center text-gray-900 font-semibold transition-all duration-300"
                >
                  View All
                </motion.a>
              </div>

              {/* Slider Controls */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start mt-8 lg:mt-0 gap-8 mb-4 lg:ml-12"
              >
                <motion.button 
                  id="slider-button-left"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center items-center border border-solid border-blue-900 w-11 h-11 transition-all duration-500 rounded-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 hover:from-blue-900 hover:via-blue-800 hover:to-blue-700"
                >
                  <svg className="h-6 w-6 text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                <motion.button 
                  id="slider-button-right"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center items-center border border-solid border-blue-900 w-11 h-11 transition-all duration-500 rounded-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 hover:from-blue-900 hover:via-blue-800 hover:to-blue-700"
                >
                  <svg className="h-6 w-6 text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Swiper */}
            <div className="w-full lg:w-3/5">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {displayBlogs.map((blog, index) => (
                    <motion.div 
                      key={blog.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="swiper-slide w-full lg:w-1/2"
                    >
                      <motion.div 
                        className="mb-9"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image 
                          src={blog.cardImage} 
                          alt={blog.title} 
                          className="rounded-2xl w-full object-cover"
                          width={600}
                          height={400}
                        />
                      </motion.div>
                      <Link href={`/blogs/${blog.slug}`}>
                        <motion.h3 
                          whileHover={{ color: 'rgb(30, 58, 138)' }}
                          transition={{ duration: 0.3 }}
                          className="text-xl text-gray-900 font-medium leading-8 mb-4"
                        >
                          {blog.title}
                        </motion.h3>
                      </Link>
                      <p className="text-gray-500 leading-6 mb-8 text-justify">
                        {blog.intro}
                      </p>
                      <Link 
                        href={`/blogs/${blog.slug}`} 
                        className="flex items-center gap-2 text-lg text-blue-900 font-semibold group"
                      >
                        <span>Read more</span>
                        <motion.svg 
                          width="15" 
                          height="12" 
                          viewBox="0 0 15 12" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="rgb(30, 58, 138)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;