// app/page.tsx
'use client';

import HeroSection from '@/components/HeroSection';

import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/SecuritySolution';
import PricingSection from '@/components/OurBrand';
import OurJourney from '@/components/OurJourney';
import LogoScroll from '@/components/LogoScroll';
import Faq from '@/components/Faq'


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <LogoScroll/>
      <TestimonialSection/>
      <PricingSection/>
      <FeaturesSection/>
      <Faq/>

    </div>
  );
}