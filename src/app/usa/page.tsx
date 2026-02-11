import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { USAHeroSection } from '@/components/sections/usa/hero-section';
import { USAFeaturesSection } from '@/components/sections/usa/features-section';
import { USAProofSection } from '@/components/sections/usa/proof-section';
import { USACTASection } from '@/components/sections/usa/cta-section';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'Rigovo USA | AI Interview Integrity & SOC2 Compliant Technical Hiring',
    description: 'Protect your US engineering team from proxy candidate fraud and deepfakes. Rigovo provides 15-signal AI interview verification and SOC2 Type II security. Trusted by Silicon Valley startups.',
    keywords: [
        'Silicon Valley technical hiring integrity',
        'US enterprise AI interview software',
        'SOC2 compliant coding assessments',
        'proxy candidate detection USA',
        'remote technical screening fraud prevention',
        'New York tech recruiting AI',
        'AI leadership verification software',
        'H1B candidate verification tech',
        'San Francisco engineering interview automation',
    ],
    openGraph: {
        title: 'Rigovo USA | The Standard for Technical Interview Integrity',
        description: 'Eliminate proxy candidate fraud. Rigovo verifies authentic problem-solving and AI leadership in real-time. Built for US Enterprise & Startups.',
        url: 'https://rigovo.com/usa',
        siteName: 'Rigovo',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://rigovo.com/usa',
        languages: {
            'en-US': 'https://rigovo.com/usa',
            'en-AE': 'https://rigovo.com/uae',
            'x-default': 'https://rigovo.com',
        },
    },
};

// JSON-LD structured data for US page
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Rigovo - USA',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered technical interview co-pilot with SOC2 Type II certification. Detects proxy candidates, deepfakes, and AI-assisted cheating for US engineering teams.',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Get The Pilot Pack for FREE - 90 minutes of verified AI-powered technical screening',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
    },
    areaServed: {
        '@type': 'Country',
        name: 'United States',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '156',
        bestRating: '5',
    },
};

export default function USALandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <main id="main-content" role="main">
                <USAHeroSection />
                <USAFeaturesSection />
                <USAProofSection />
                <USACTASection />
            </main>
            <PageAnalytics pagePath="/usa" />
            <Footer />
        </div>
    );
}
