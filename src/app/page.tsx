// app/page.tsx
'use client';

import HeroSection from '@/components/HeroSection';

import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import FeatureCarousel from '@/components/FeatureCarousel';


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <FeatureCarousel/>
      <TestimonialSection/>
      <PricingSection/>
      <TechnologyShowcase/>
    </div>
  );
}