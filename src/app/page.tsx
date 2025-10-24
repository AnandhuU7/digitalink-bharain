// app/page.tsx
'use client';

import HeroSection from '@/components/HeroSection';

import FeaturesSection from '@/components/FeaturesSection';
import SecuritySolution from '@/components/SecuritySolution';
import OurBrand from '@/components/OurBrand';
import LogoScroll from '@/components/LogoScroll';
import Faq from '@/components/Faq'


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <LogoScroll/>
      <SecuritySolution/>
      <OurBrand/>
      <FeaturesSection/>
      <Faq/>

    </div>
  );
}