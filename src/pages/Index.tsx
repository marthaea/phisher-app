
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CallToAction from '@/components/home/CallToAction';
import HowItWorks from '@/components/home/HowItWorks';
import FeatureSection from '@/components/home/FeatureSection';
import Testimonials from '@/components/home/Testimonials';
import WhyPhisher from '@/components/home/WhyPhisher';

const Index: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#191E38]">
      <Header />
      <main>
        <Hero />
        <CallToAction />
        <FeatureSection />
        <HowItWorks />
        <WhyPhisher />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
