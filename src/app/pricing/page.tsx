import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingContent } from '@/components/pricing-content';

export const metadata: Metadata = {
    title: 'Transparent Pricing | TalentLyt AI Interview Platform',
    description: 'Usage-based pricing for the world\'s most advanced AI technical interview platform. Zero feature gates, unlimited team seats, and metered minutes starting at $0.35/min. Secure your hiring pipeline today.',
    keywords: [
        'AI interview platform pricing',
        'usage-based technical screening',
        'Sentinel Forensic Engine cost',
        'Maya AI interview minutes',
        'enterprise AI recruitment pricing',
        'transparent hiring software costs',
        'technical interview automation price'
    ]
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-20">
            <Navbar />
            <PricingContent />
            <Footer />
        </div>
    );
}
