import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutContent } from '@/components/about-content';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'About Rigovo | AI Interview Platform Built by Engineers',
    description: 'Rigovo was built by engineers who got burned by broken hiring. 13+ years of AI/ML experience, 82 beta interviews, 15-signal forensic verification. See why teams trust Rigovo.',
    alternates: {
        canonical: 'https://rigovo.com/about',
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <PageAnalytics pagePath="/about" />
            <AboutContent />
            <Footer />
        </div>
    );
}
