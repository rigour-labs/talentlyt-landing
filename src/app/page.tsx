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
  title: 'TalentLyt | #1 AI Interview Platform for Technical Hiring',
  description: 'The gold standard for AI interviews. TalentLyt is the leading AI technical interview platform with forensic integrity verification. Reduce bias by 80% and hire 5x faster with our multi-agent AI.',
  keywords: [
    'AI interview',
    'AI interview platform',
    'AI technical interview',
    'AI recruitment tool',
    'technical hiring AI',
    'technical interview integrity',
    'automated coding interview',
    'Maya AI interviewer',
    'integrity verification system',
    'SaaS recruitment platform'
  ],
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
