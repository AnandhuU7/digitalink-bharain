// components/InteractiveTimeline.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { 
  FaRocket, FaUsers, FaAward, FaLightbulb, FaGlobe, FaChartLine, FaStar 
} from 'react-icons/fa';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
}

export default function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [activeEvent, setActiveEvent] = useState<number>(0);

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to revolutionize digital security solutions.",
      icon: <FaRocket className="text-3xl" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      year: "2019",
      title: "First Product Launch",
      description: "Released our flagship security system for small businesses.",
      icon: <FaLightbulb className="text-3xl" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations to three new countries across two continents.",
      icon: <FaGlobe className="text-3xl" />,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      year: "2021",
      title: "Industry Recognition",
      description: "Received the 'Innovation in Security' award at TechGlobal Summit.",
      icon: <FaAward className="text-3xl" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      year: "2022",
      title: "Team Growth",
      description: "Reached 100+ employees with experts in security and technology.",
      icon: <FaUsers className="text-3xl" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      year: "2023",
      title: "Record Breaking",
      description: "Achieved 300% growth in revenue and secured major enterprise clients.",
      icon: <FaChartLine className="text-3xl" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"
          style={{ y }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl"
          style={{ y }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key milestones in our mission to deliver exceptional security solutions
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-purple-200"></div>

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 z-20 cursor-pointer"
                  style={{ 
                    borderColor: activeEvent === index ? '#4F46E5' : '#D1D5DB',
                    boxShadow: activeEvent === index ? '0 0 0 4px rgba(79, 70, 229, 0.2)' : 'none'
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveEvent(index)}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} opacity-20`}></div>
                </motion.div>

                {/* Event card */}
                <motion.div 
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                      activeEvent === index 
                        ? 'border-blue-500 shadow-xl' 
                        : 'border-gray-100 hover:border-blue-300'
                    }`}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => setActiveEvent(index)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center mr-4 ${
                        index % 2 === 0 ? 'order-1' : 'order-2'
                      }`}>
                        <div className="text-white">
                          {event.icon}
                        </div>
                      </div>
                      <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                        <div className="text-sm font-semibold text-gray-500">{event.year}</div>
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Active event highlight */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeEvent}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${timelineEvents[activeEvent].color} flex items-center justify-center flex-shrink-0`}>
              <div className="text-white text-4xl">
                {timelineEvents[activeEvent].icon}
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold text-blue-600 mb-2">{timelineEvents[activeEvent].year}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{timelineEvents[activeEvent].title}</h3>
              <p className="text-gray-600 text-lg">{timelineEvents[activeEvent].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {timelineEvents.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeEvent === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setActiveEvent(index)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-purple-100/50 blur-3xl"></div>
      </div>
    </section>
  );
}