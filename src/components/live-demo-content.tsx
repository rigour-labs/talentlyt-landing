'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity, Globe, Zap, Database, Search } from 'lucide-react';
import { InteractiveDemoForm } from './interactive-demo-form';

export function LiveDemoContent() {
    const sections = [
        {
            id: 'initiation',
            tag: 'Section 1: The Secure Initiation',
            title: 'Identity Verification & Technical Calibration',
            copy: 'We establish a baseline for identity and technical environment in 60 seconds. Our zero-storage protocol ensures absolute privacy while verifying authenticity before the session begins.',
            image: 'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-localhost-3000-join-cmk9zk46300008p1t9fhlvbcs-2026-01-11-22_38_21.png',
            icon: ShieldCheck,
            highlights: ['Multi-factor Identity Verification', 'Technical Environment Check', 'Communication Calibration', 'Privacy-First Protocol Initiation']
        },
        {
            id: 'nexus',
            tag: 'Section 2: The Nexus Environment',
            title: 'The Unified Interview Interface',
            copy: 'A streamlined environment for technical evaluation. While the candidate solves problems, our system monitors session integrity through multi-modal signal analysis.',
            images: [
                'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-localhost-3000-interview-cmk9zk46300008p1t9fhlvbcs-2026-01-11-22_38_58.png',
                'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/Gemini_Generated_Image_2e29iy2e29iy2e29.png'
            ],
            icon: Zap,
            highlights: ['Integrated Coding Surface', 'Real-time Signal Monitoring', 'Maya AI Guidance', 'Adaptive Evaluation Paths']
        },
        {
            id: 'verdict',
            tag: 'Section 3: The Verification',
            title: '13-Signal Integrity Synthesis',
            copy: 'Sessions are reviewed across 12 distinct signal types, including biometric-aware lip-sync and gaze patterns, to generate a comprehensive record of interview integrity.',
            image: 'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-platform-talentlyt-cloud-dashboard-audit-cmk9wgczv000001s6hl78jtgm-2026-01-11-22_26_25.png',
            icon: Search,
            highlights: ['13-Signal Verification Stack', 'Multi-Modal Signal Audit', 'Integrity Confidence Scoring', 'Transparent Audit Records']
        },
        {
            id: 'orchestration',
            tag: 'Section 4: The Scale',
            title: 'Enterprise Pipeline Automation',
            copy: 'Efficiently manage high-volume recruitment funnels. Maintain a consistent standard of quality and trust from initial screening to technical deep-dives.',
            image: 'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-localhost-3000-dashboard-pipelines-cmk6u61ir000201s6kre057t6-2026-01-11-22_31_15.png',
            icon: Database,
            highlights: ['Automated Workflow Templates', 'Pipeline Integrity Tracking', 'Scalable Candidate Management', 'Standardized Evaluation Nodes']
        },
        {
            id: 'intelligence',
            tag: 'Section 5: Strategic Intelligence',
            title: 'Competency Mapping & The Interview Genome',
            copy: 'Synthesize session data into a detailed competency map and an Interview Genome—a portable, verified record of a candidate\'s technical depth and potential.',
            image: 'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-localhost-3000-dashboard-audit-cmk77brjr013401s6usey0luk-2026-01-11-22_51_01.png',
            icon: Activity,
            highlights: ['Detailed Competency Mapping', 'Verified Interview Genome', 'Behavioral Signal Analysis', 'Portable Professional Record']
        }
    ];

    return (
        <main className="pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10 animate-pulse" />

            <div className="max-w-7xl mx-auto">
                {/* Interactive Demo Form - Try Now */}
                <div className="mb-24">
                    <div className="text-center mb-10 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            3-Minute Live Demo
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Experience the Future of
                            <br />
                            <span className="text-brand">Technical Hiring</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-xl mx-auto">
                            Maya AI interviews. AI Sentinel monitors. No signup required.
                        </p>
                    </div>

                    <InteractiveDemoForm />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-24">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-text-muted text-sm font-medium uppercase tracking-wider">Or explore the system</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className="text-center mb-24 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        System Walkthrough
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                        The <span className="text-brand">Verification Lifecycle</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        A detailed view of how we maintain integrity from initiation to final report.
                    </p>
                </div>

                <div className="space-y-32">
                    {sections.map((section, idx) => (
                        <div key={section.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={`${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-text-muted text-[9px] font-bold uppercase tracking-[0.2em] mb-8">
                                    {section.tag}
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{section.title}</h2>
                                </div>
                                <p className="text-xl text-text-secondary mb-10 leading-relaxed">
                                    {section.copy}
                                </p>
                                <div className="space-y-4 mb-10">
                                    {section.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                            <span className="text-text-secondary font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.03] border border-white/10 text-white rounded-2xl hover:bg-brand hover:border-brand transition-all font-bold group"
                                >
                                    Experience This Stage
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full opacity-50 -z-10" />
                                <div className="p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl">
                                    {section.images ? (
                                        <div className="grid grid-cols-1 gap-4">
                                            {section.images.map((img, iIdx) => (
                                                <img
                                                    key={iIdx}
                                                    src={img}
                                                    alt={section.title}
                                                    className="rounded-[1.8rem] border border-white/5 grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="rounded-[2rem] border border-white/5 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-40 p-12 sm:p-20 rounded-[4rem] bg-brand relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-10 pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">Ready to see the full forensic audit?</h2>
                        <p className="text-xl text-white/80 mb-12">
                            Join the ranks of high-security teams who never settle for "Good Enough" integrity.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand rounded-2xl hover:scale-105 transition-all font-bold shadow-2xl"
                        >
                            <Activity className="w-5 h-5" />
                            Request System Access
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}