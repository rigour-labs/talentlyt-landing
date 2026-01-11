import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { WhyWeBuiltThisSection } from '@/components/sections/why-we-built-this-section';
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ArchitectureSection } from '@/components/sections/architecture-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'TalentLyt — AI Technical Interview Platform with Integrity Verification',
  description: 'The gold standard for high-stakes technical hiring. Multi-Agent AI interviews with forensic integrity verification. Reduce bias by 80% and cut overhead by 75%.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <ArchitectureSection />
        <WhyWeBuiltThisSection />
        <ProblemSolutionSection />
        {/* <StatsSection /> */}
        {/* <TestimonialsSection /> */}
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
