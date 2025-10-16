// app/page.tsx
'use client';

import HeroSection from '@/components/HeroSection';

import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/SecuritySolution';
import PricingSection from '@/components/OurBrand';
import OurJourney from '@/components/OurJourney';
import FeatureCarousel from '@/components/PartnersSection';


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <FeatureCarousel/>
      <TestimonialSection/>
      <PricingSection/>
      <FeaturesSection/>
      <OurJourney/>
    </div>
  );
}