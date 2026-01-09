'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { WhyWeBuiltThisSection } from '@/components/sections/why-we-built-this-section';
import { StatsSection } from '@/components/sections/stats-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ArchitectureSection } from '@/components/sections/architecture-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { CTASection } from '@/components/sections/cta-section';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhyWeBuiltThisSection />
      <StatsSection />
      <FeaturesSection />
      <ArchitectureSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}
