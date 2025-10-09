// app/page.tsx
'use client';

import HeroSection from '@/components/HeroSection';

import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <TestimonialSection/>
      <PricingSection/>
    </div>
  );
}