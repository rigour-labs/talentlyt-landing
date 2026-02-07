import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Play, Shield, Brain, Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Watch Demo | Rigovo AI Interview Platform in Action',
    description: 'Watch a complete demo of Rigovo AI interview platform. See Maya AI conduct technical interviews with real-time AI leadership verification, 15-signal integrity verification, and predictive job success scoring.',
    openGraph: {
        title: 'Rigovo Demo Video - AI Interview Platform with Integrity Verification',
        description: 'Watch how Rigovo catches proxy candidates and deepfakes while Maya AI conducts adaptive technical interviews.',
        type: 'video.other',
        videos: [
            {
                url: 'https://www.loom.com/share/b0a8d53703514523b7c21f9f585d9a73',
                width: 1920,
                height: 1080,
            }
        ],
    },
    twitter: {
        card: 'player',
        title: 'Rigovo Demo - AI Interview Platform',
        description: 'See Maya AI interview candidates with real-time integrity verification',
    },
    alternates: {
        canonical: 'https://rigovo.com/demo-video',
    },
};

// VideoObject JSON-LD for Google Video Indexing
const videoStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Rigovo AI Interview Platform Demo - Maya AI & 15-Signal Integrity Verification',
    description: 'Watch a complete walkthrough of Rigovo, the AI interview platform with real-time AI leadership verification. See how Maya AI conducts adaptive technical interviews while our 15-signal integrity system verifies candidates are authentic architects of their solutions.',
    thumbnailUrl: 'https://cdn.loom.com/sessions/thumbnails/b0a8d53703514523b7c21f9f585d9a73-00001.jpg',
    uploadDate: '2026-01-15T00:00:00Z',
    duration: 'PT3M',
    contentUrl: 'https://www.loom.com/share/b0a8d53703514523b7c21f9f585d9a73',
    embedUrl: 'https://www.loom.com/embed/b0a8d53703514523b7c21f9f585d9a73',
    publisher: {
        '@type': 'Organization',
        name: 'Rigovo',
        logo: {
            '@type': 'ImageObject',
            url: 'https://rigovo.com/logo.png',
        },
    },
    potentialAction: {
        '@type': 'WatchAction',
        target: 'https://rigovo.com/demo-video',
    },
};

export default function DemoVideoPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
            />
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />

                <main className="flex-1 pt-32 pb-20 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                                <Play className="w-4 h-4 text-brand" />
                                <span className="text-sm font-medium text-brand">Product Demo</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                                See Rigovo <span className="text-brand">in Action</span>
                            </h1>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                Watch how Maya AI conducts technical interviews while our 15-signal integrity system verifies authenticity in real-time.
                            </p>
                        </div>

                        {/* Video Embed - Main Content */}
                        <div className="relative mb-16">
                            <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full opacity-30 -z-10" />
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        src="https://www.loom.com/embed/b0a8d53703514523b7c21f9f585d9a73?sid=demo-video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Rigovo AI Interview Platform Demo"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Key Features Shown */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-center mb-8">What You&apos;ll See in This Demo</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-2xl bg-card border border-border/50">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                                        <Brain className="w-6 h-6 text-brand" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Maya AI Interview</h3>
                                    <p className="text-text-secondary text-sm">
                                        Watch our AI interviewer adapt questions based on candidate responses in real-time.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-card border border-border/50">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                                        <Shield className="w-6 h-6 text-brand" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">15-Signal AI Leadership Verification</h3>
                                    <p className="text-text-secondary text-sm">
                                        See how we verify candidates are authentic architects who lead AI, not just prompt it.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-card border border-border/50">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                                        <Activity className="w-6 h-6 text-brand" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Interview Genome</h3>
                                    <p className="text-text-secondary text-sm">
                                        Explore the detailed competency mapping and predictive job success scoring.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <h2 className="text-3xl font-bold mb-4">Ready to try it yourself?</h2>
                            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                                Experience Rigovo firsthand with a personalized demo tailored to your hiring needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/request-demo"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white rounded-2xl hover:bg-brand-hover transition-all font-bold"
                                >
                                    Request Personalized Demo
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/live-demo"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all font-bold"
                                >
                                    Try Interactive Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
