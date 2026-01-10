import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingContent } from '@/components/pricing-content';

export const metadata: Metadata = {
    title: 'Pricing | TalentLyt AI Interview Platform',
    description: 'Fair and transparent pricing for verified talent. Choose from our Starter, Pro, Business, or Enterprise plans to scale your technical hiring with AI integrity.',
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
