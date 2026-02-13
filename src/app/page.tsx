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
import { LeadCaptureSection } from '@/components/sections/lead-capture-section';
import { CTASection } from '@/components/sections/cta-section';
import { HomepageAnalytics } from '@/components/homepage-analytics';

export const metadata: Metadata = {
  title: 'Rigovo | AI-Powered Technical Interviews with Verified Hiring Intelligence',
  description: 'Maya AI conducts technical interviews while our 15-signal verification engine confirms identity, engagement, and depth. Hire with confidence — try 5 interviews free.',
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
    // AI-forward positioning keywords
    'AI-allowed interviews',
    'interview integrity evidence',
    'hiring audit trail',
    'candidate identity verification',
    'interview verification platform',
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
    // Verified hiring keywords (primary differentiator)
    'verified candidate assessment',
    'interview integrity platform',
    'candidate identity verification',
    'remote interview verification',
    'candidate identity verification software',
    // Long-tail high-intent
    'AI interview with integrity evidence',
    'automated coding assessment',
    'remote hiring verification software',
    'verified technical hiring platform',
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
        <LeadCaptureSection />
        <CTASection />
      </main>
      <Footer />
      <HomepageAnalytics />
    </div>
  );
}
