import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
    title: 'Contact Us | Rigovo Support & Sales',
    description: 'Get in touch with the Rigovo team. Whether you have questions about our AI interview platform, need technical support, or want to discuss enterprise solutions, we are here to help.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-56">
            <Navbar />
            <Suspense fallback={<div className="flex-1 flex items-center justify-center"><div className="text-text-muted">Loading...</div></div>}>
                <ContactContent />
            </Suspense>
            <Footer />
        </div>
    );
}
