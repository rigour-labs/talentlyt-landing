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
  title: 'TalentLyt | World\'s First Complete Interview Intelligence Platform',
  description: 'The gold standard for AI interviews. TalentLyt is the world\'s first complete interview intelligence platform with truth verification, job success prediction, and portable interview genomes.',
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
    'SaaS recruitment platform',
    'Job Success Prediction',
    'Interview Genome',
    'Interview Marketplace'
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
        <FeaturesSection />
        <HowItWorksSection />
        {/* TODO: Uncomment when real testimonials/stats are available */}
        {/* <StatsSection /> */}
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
