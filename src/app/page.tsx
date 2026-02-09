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
  title: 'Rigovo | AI Interview Software for Technical Hiring',
  description: 'Screen technical candidates 5x faster with AI. Maya AI conducts interviews 24/7 while detecting fraud and verifying candidate identity. Free pilot included.',
  keywords: [
    // High-intent commercial keywords (what buyers search)
    'AI interview software',
    'AI interview platform',
    'technical interview platform',
    'automated interview software',
    'video interview software for hiring',
    'technical screening platform',
    'coding interview platform',
    'remote candidate assessment',
    // Problem-solution keywords (high conversion)
    'prevent interview fraud',
    'verify remote candidates',
    'candidate identity verification',
    'interview cheating detection',
    'reduce time to hire',
    'automated technical screening',
    // Competitor alternatives (high intent)
    'HireVue alternative',
    'Codility alternative',
    'HackerRank alternative',
    // Category keywords
    'AI recruiting software',
    'technical assessment platform',
    'developer assessment tool',
    'engineering hiring software',
    // Long-tail high-intent
    'AI interview with identity verification',
    'automated coding assessment',
    'remote hiring verification software',
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
