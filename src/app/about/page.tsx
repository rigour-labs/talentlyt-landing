import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutContent } from '@/components/about-content';

export const metadata: Metadata = {
    title: 'About Us | Trust in Hiring with TalentLyt',
    description: 'Learn about the mission of TalentLyt. We are engineers building the world\'s first multi-agent technical interview suite to ensure truth and integrity in hiring.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    );
}
