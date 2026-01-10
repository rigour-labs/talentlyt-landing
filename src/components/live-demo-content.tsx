'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export function LiveDemoContent() {
    const [activeTab, setActiveTab] = useState('integrity');
    const [activeStep, setActiveStep] = useState(0);
    const ref = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const interviewSteps = [
        { title: 'Schedule Interview', description: 'Create an interview link in seconds.', time: '30 seconds' },
        { title: 'Candidate Joins', description: 'Candidate joins the secure environment.', time: '1 minute' },
        { title: 'Maya Conducts Interview', description: 'Our AI interviewer guides the candidate.', time: '45-60 minutes' },
        { title: 'Real-time Monitoring', description: 'Automated Quality Auditor verifies integrity.', time: 'Continuous' },
        { title: 'Get Results', description: 'Receive comprehensive reports immediately.', time: 'Instant' },
    ];

    const features = [
        {
            id: 'integrity',
            title: 'Integrity Verification',
            description: 'See real-time integrity metrics and potential irregularities flagged by our AI auditor.',
            highlights: ['Behavioral pattern analysis', 'Screen activity monitoring', 'Anomaly detection alerts'],
        },
        {
            id: 'playback',
            title: 'Code Playback',
            description: 'Watch the entire coding session keystroke by keystroke to understand the thought process.',
            highlights: ['Full session replay', 'Keystroke-by-keystroke playback', 'Timeline navigation'],
        },
        {
            id: 'reports',
            title: 'Detailed Skill Reports',
            description: 'Get granular breakdowns of technical skills, communication, and problem-solving.',
            highlights: ['Technical skill scores', 'Communication assessment', 'Problem-solving analysis'],
        },
    ];

    return (
        <main className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        See TalentLyt in <span className="text-brand">Action</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        Explore how TalentLyt transforms technical hiring with integrity verification and AI.
                    </p>
                </div>

                <div className="mb-20">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className={`px-6 py-3 rounded-xl transition-all text-sm font-bold ${activeTab === feature.id
                                        ? 'bg-brand text-white shadow-lg shadow-brand/20'
                                        : 'bg-card text-text-secondary border border-border/50 hover:border-brand/30'
                                    }`}
                            >
                                {feature.title}
                            </button>
                        ))}
                    </div>

                    {features.map((feature) => (
                        activeTab === feature.id && (
                            <div
                                key={feature.id}
                                className="bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6">{feature.title}</h2>
                                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-4 mb-10">
                                            {feature.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-brand" />
                                                    <span className="text-text-secondary font-medium">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/request-demo"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-2xl hover:bg-brand-hover transition-all font-bold shadow-lg shadow-brand/20"
                                        >
                                            Try This Feature
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                    <div className="aspect-video bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <ArrowRight className="w-8 h-8 text-brand" />
                                            </div>
                                            <p className="text-text-secondary font-bold">Interactive Module</p>
                                            <p className="text-text-muted text-sm mt-1">Preview available in full demo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Complete Interview Journey</h2>
                    <div className="space-y-6">
                        {interviewSteps.map((step, index) => (
                            <div
                                key={index}


                                className={`p-8 rounded-[2rem] bg-card border transition-all cursor-pointer ${activeStep === index ? 'border-brand shadow-xl bg-brand/[0.02]' : 'border-border/50 hover:border-brand/20'
                                    }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${activeStep === index ? 'bg-brand text-white' : 'bg-muted text-text-secondary'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <span className="text-xs text-text-muted flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {step.time}
                                            </span>
                                        </div>
                                        <p className="text-text-secondary">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}