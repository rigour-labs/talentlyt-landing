import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { CapabilitiesSection } from '@/components/sections/capabilities-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section';
import { CTASection } from '@/components/sections/cta-section';
import { HomepageAnalytics } from '@/components/homepage-analytics';

export const metadata: Metadata = {
  title: 'TalentLyt | Your AI Co-Pilot for Technical Hiring',
  description: 'Maya AI handles technical screening while you focus on culture fit. Multi-signal verification ensures candidates demonstrate genuine technical ability. Beta: 6,800+ sessions analyzed.',
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
    'candidate verification',
    'interview platform'
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <StatsSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <ProblemSolutionSection />
        <CTASection />
      </main>
      <Footer />
      <HomepageAnalytics />
    </div>
  );
}
