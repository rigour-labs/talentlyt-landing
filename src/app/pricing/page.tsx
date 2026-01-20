import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingContent } from '@/components/pricing-content';

export const metadata: Metadata = {
    title: 'Pricing & Sentinel Access Layers | TalentLyt AI Interview Platform',
    description: 'Stop Hiring Blindly. Deploy the Sentinel Forensic Engine to verify candidate identity and technical skill in real-time. Zero trust, human-centric, forensic-grade auditing for technical recruitment.',
    keywords: [
        'AI interview pricing',
        'automated technical interview cost',
        'technical screening price',
        'Sentinel Forensic Engine',
        'Maya AI interview price',
        'integrity verification cost',
        'enterprise hiring software pricing'
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
