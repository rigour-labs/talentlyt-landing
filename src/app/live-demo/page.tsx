import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LiveDemoContent } from '@/components/live-demo-content';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'Live Demo | Experience the Future of Technical Hiring',
    description: 'See how Rigovo\'s AI-powered platform conducts technical interviews while verifying candidate integrity in real-time. Explore our Maya AI and Audit Sentinel features.',
};

export default function LiveDemoPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <LiveDemoContent />
            <PageAnalytics pagePath="/live-demo" />
            <Footer />
        </div>
    );
}
