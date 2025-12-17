import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TrustSection from '@/components/sections/TrustSection';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <TrustSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
