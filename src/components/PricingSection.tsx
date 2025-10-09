// components/PricingSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Import brand images from public folder
import dahuaLogo from "../../public/images/brands/dahuva.jpg";
import unvLogo from "../../public/images/brands/unv.png";

interface PricingPlan {
  id: number;
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Uniview",
    price: { monthly: 99, annual: 990 },
    description: "Essential surveillance solutions for small businesses. Perfect for retail stores, small offices, and residential properties needing reliable security monitoring.",
    features: [
      "4 Channel NVR",
      "4 Bullet Cameras (2MP)",
      "1TB Storage",
      "Mobile App Access",
      "Basic Analytics"
    ]
  },
  {
    id: 2,
    name: "Dahua",
    price: { monthly: 199, annual: 1990 },
    description: "Advanced security systems for growing businesses. Ideal for medium-sized businesses, warehouses, and educational campuses requiring comprehensive surveillance.",
    features: [
      "8 Channel NVR",
      "8 Dome Cameras (4MP)",
      "2TB Storage",
      "AI Detection",
      "Cloud Backup",
      "Professional Installation"
    ],
    popular: true,
    badge: "Most Popular"
  }
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Security Solutions by <span className="text-blue-600">Leading Brands</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional surveillance systems from Uniview and Dahua
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <motion.button
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
              onClick={() => setBillingCycle('monthly')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                billingCycle === 'annual' ? 'bg-blue-600 text-white' : 'text-gray-600'
              }`}
              onClick={() => setBillingCycle('annual')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
            </motion.button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-3xl overflow-hidden shadow-xl ${
                billingCycle === 'monthly' 
                  ? (index === 0 ? 'bg-white text-gray-800' : 'bg-blue-600 text-white')
                  : (index === 0 ? 'bg-blue-600 text-white' : 'bg-white text-gray-800')
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Content with Fixed Height for Equal Alignment */}
              <div className="h-full p-10 flex flex-col items-center justify-between">
                {/* Top Section - Logo and Name */}
                <div className="w-full flex flex-col items-center mb-8">
                  {/* Brand Logo with Fixed Container */}
                  <div className="h-24 w-full flex items-center justify-center mb-6">
                    <Image 
                      src={plan.name === "Uniview" ? unvLogo : dahuaLogo}
                      alt={`${plan.name} Logo`}
                      width={180}
                      height={80}
                      className="max-h-20 object-contain"
                    />
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="text-3xl font-bold">{plan.name}</h3>
                </div>
                
                {/* Middle Section - Description */}
                <div className="flex-grow flex items-center w-full mb-8">
                  <p className={`text-center text-lg leading-relaxed ${
                    billingCycle === 'monthly' 
                      ? (index === 0 ? 'text-gray-600' : 'text-blue-100')
                      : (index === 0 ? 'text-blue-100' : 'text-gray-600')
                  }`}>
                    {plan.description}
                  </p>
                </div>
                
                {/* Bottom Section - Button */}
                <div className="w-full">
                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      billingCycle === 'monthly' 
                        ? (index === 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100')
                        : (index === 0 ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700')
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Products
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}