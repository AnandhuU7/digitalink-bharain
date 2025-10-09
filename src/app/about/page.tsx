'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaTrophy, FaHandshake, FaQuoteLeft } from 'react-icons/fa';
import { ReactElement } from 'react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
}

interface Value {
  icon: ReactElement;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Ahmed Hassan',
      position: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital transformation, Ahmed leads our team with vision and expertise.'
    },
    {
      name: 'Fatima Al Khalifa',
      position: 'CTO',
      bio: 'Fatima brings technical excellence and innovation to every project, ensuring cutting-edge solutions.'
    },
    {
      name: 'Mohammed Ali',
      position: 'Head of Design',
      bio: 'Mohammed\'s creative approach to design ensures that our solutions are both beautiful and functional.'
    },
    {
      name: 'Aisha Mahmood',
      position: 'Marketing Director',
      bio: 'Aisha develops strategies that help our clients achieve their business goals through digital marketing.'
    }
  ];

  const values: Value[] = [
    {
      icon: <FaLightbulb className="text-3xl text-blue-600" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and deliver solutions that exceed expectations.'
    },
    {
      icon: <FaTrophy className="text-3xl text-blue-600" />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.'
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and respect for our clients and partners.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Digital Link Bahrain transformed our online presence completely. Their team is professional, creative, and delivers exceptional results.",
      author: "Nasser Al Khalifa",
      position: "CEO, Bahrain Retail Group"
    },
    {
      quote: "Working with Digital Link Bahrain was a game-changer for our business. Their mobile app solution increased our customer engagement by 200%.",
      author: "Fatima Ahmed",
      position: "Marketing Director, Gulf Foods"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-blue-600">Digital Link Bahrain</span></h1>
            <p className="text-gray-600 mb-6 text-lg">
              Digital Link Bahrain is a leading digital solutions provider in Bahrain, offering a wide range of services to help businesses thrive in the digital age.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our team of experts is dedicated to delivering innovative and effective solutions that meet the unique needs of our clients. We combine creativity, technology, and business acumen to drive growth and success.
            </p>
            <p className="text-gray-600 text-lg">
              With years of experience in the industry, we have built a reputation for excellence and reliability. Our clients trust us to deliver high-quality solutions that exceed their expectations.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2 pl-0 md:pl-8 lg:pl-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-2xl p-1">
                  <div className="w-full h-80 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-3xl font-bold">DL</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">About Us</h3>
                      <p className="text-blue-100">Transforming businesses with technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-600">Values</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-blue-600">Clients Say</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="text-blue-600">Team</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}