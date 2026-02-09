import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { CapabilitiesSection } from '@/components/sections/capabilities-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section';
import { ProofSection } from '@/components/sections/proof-section';
import { CTASection } from '@/components/sections/cta-section';
import { HomepageAnalytics } from '@/components/homepage-analytics';

export const metadata: Metadata = {
  title: 'Rigovo | Your AI Co-Pilot for Technical Hiring',
  description: 'Maya AI handles technical screening while you focus on culture fit. 15-signal verification, voice biometrics, and deepfake detection ensure interview integrity. 85% job success prediction accuracy.',
  keywords: [
    'AI interview',
    'AI interview platform',
    'AI technical interview',
    'AI recruitment tool',
    'technical hiring AI',
    'Maya AI interviewer',
    'interview integrity verification',
    'Job Success Prediction',
    'Interview Genome',
    'voice biometrics hiring',
    'deepfake detection interview',
    'Panel Mode AI interview',
    'AI human co-pilot interview',
    'federated learning recruitment',
    'anti-gaming interview',
    'remote candidate verification',
    'automated coding interview',
    'claim verification interview',
    'Maya Whisper',
    'ECAPA-TDNN voice verification',
    'SaaS recruitment platform',
    'candidate verification',
    'predictive hiring',
    'interview forensics',
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
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
      <HomepageAnalytics />
    </div>
  );
}
