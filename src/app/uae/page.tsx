import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { UAEHeroSection } from '@/components/sections/uae/hero-section';
import { UAEProofSection } from '@/components/sections/uae/proof-section';
import { UAEFeaturesSection } from '@/components/sections/uae/features-section';
import { UAECTASection } from '@/components/sections/uae/cta-section';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'Rigovo UAE | AI Interview Platform for UAE & MENA Hiring',
    description: 'The leading AI interview platform for UAE startups and recruitment agencies. Screen remote tech candidates with 15-signal verification. Trusted by MENA hiring teams.',
    keywords: [
        'UAE AI interview software',
        'Dubai recruitment technology',
        'Abu Dhabi tech hiring',
        'MENA startup recruitment AI',
        'technical screening UAE',
        'remote candidate verification GCC',
        'Saudi Arabia hiring technology',
        'automated interview platform MENA',
        'Dubai staffing solutions AI',
        'GCC technical recruitment tools',
        'hire remote developers UAE',
        'interview fraud detection Dubai',
    ],
    openGraph: {
        title: 'Rigovo UAE | AI Interview Platform for UAE & MENA Hiring',
        description: 'Screen remote tech candidates with AI-powered verification. Built for UAE startups and recruitment agencies.',
        url: 'https://rigovo.com/uae',
        siteName: 'Rigovo',
        locale: 'en_AE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://rigovo.com/uae',
        languages: {
            'en-AE': 'https://rigovo.com/uae',
            'en-US': 'https://rigovo.com/usa',
            'x-default': 'https://rigovo.com',
        },
    },
};

// JSON-LD structured data for UAE page
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Rigovo - UAE',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered interview platform for UAE and MENA region hiring teams',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'AED',
        description: 'Get The Pilot Pack for FREE - 90 minutes of AI-powered technical screening',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
    },
    areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 25.2048,
            longitude: 55.2708,
        },
        geoRadius: '2000 km',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '24',
        bestRating: '5',
    },
};

export default function UAELandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <main id="main-content" role="main">
                <UAEHeroSection />
                <UAEFeaturesSection />
                <UAEProofSection />
                <UAECTASection />
            </main>
            <PageAnalytics pagePath="/uae" />
            <Footer />
        </div>
    );
}
