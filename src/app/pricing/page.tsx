import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingContent } from '@/components/pricing-content';

export const metadata: Metadata = {
    title: 'Pricing — Usage-Based AI Interview Platform',
    description: 'Pay only for what you use. AI technical interviews starting at $0.35/min with unlimited team seats, no feature gates, and full integrity verification included.',
    keywords: [
        'AI interview platform pricing',
        'usage-based technical screening',
        'AI interview cost',
        'technical interview automation price',
        'enterprise recruitment pricing'
    ],
    alternates: {
        canonical: 'https://talentlyt.cloud/pricing',
    },
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main id="main-content" role="main" className="pt-36 pb-16">
                <PricingContent />
            </main>
            <Footer />
        </div>
    );
}
