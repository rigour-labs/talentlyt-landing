'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion, useInView } from 'framer-motion';
import { 
    CheckCircle2, 
    Play, 
    ArrowRight,
    Clock
} from 'lucide-react';

export default function LiveDemoPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [activeStep, setActiveStep] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };

    const interviewSteps = [
        {
            title: 'Schedule Interview',
            description: 'Create an interview link in seconds and send it to your candidate.',
            time: '30 seconds',
            mockup: 'schedule-interface',
        },
        {
            title: 'Candidate Joins',
            description: 'Candidate receives the link and joins the secure interview environment.',
            time: '1 minute',
            mockup: 'join-interface',
        },
        {
            title: 'Maya Conducts Interview',
            description: 'Our AI interviewer, Maya, guides the candidate through technical questions while maintaining a natural conversation.',
            time: '45-60 minutes',
            mockup: 'interview-interface',
        },
        {
            title: 'Real-time Monitoring',
            description: 'The Automated Quality Auditor monitors the session in real-time, verifying integrity with candidate consent.',
            time: 'Continuous',
            mockup: 'monitoring-interface',
        },
        {
            title: 'Get Results',
            description: 'Receive comprehensive reports with integrity insights, skill breakdown, and code playback immediately after.',
            time: 'Instant',
            mockup: 'results-interface',
        },
    ];

    const features = [
        {
            id: 'integrity',
            title: 'Integrity Verification Dashboard',
            description: 'See real-time integrity metrics and potential irregularities flagged by our AI auditor.',
            highlights: [
                'Behavioral pattern analysis',
                'Screen activity monitoring',
                'Anomaly detection alerts',
                'Privacy-compliant tracking'
            ],
        },
        {
            id: 'playback',
            title: 'Code Playback Interface',
            description: 'Watch the entire coding session keystroke by keystroke to understand the candidate\'s thought process.',
            highlights: [
                'Full session replay',
                'Keystroke-by-keystroke playback',
                'Timeline navigation',
                'Speed controls'
            ],
        },
        {
            id: 'reports',
            title: 'Detailed Skill Reports',
            description: 'Get granular breakdowns of technical skills, communication, and problem-solving abilities.',
            highlights: [
                'Technical skill scores',
                'Communication assessment',
                'Problem-solving analysis',
                'Comparison with benchmarks'
            ],
        },
        {
            id: 'monitoring',
            title: 'Real-time Monitoring',
            description: 'Monitor interview sessions in real-time with privacy-first approach and candidate consent.',
            highlights: [
                'Live session dashboard',
                'Integrity alerts',
                'Privacy controls',
                'Candidate consent tracking'
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground" ref={ref}>
            <Navbar />
            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl mb-6 tracking-tight text-primary">
                            See TalentLyt in Action
                        </h1>
                        <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-8">
                            Explore how TalentLyt transforms technical hiring with integrity verification, 
                            automated assessments, and comprehensive skill analysis.
                        </p>
                    </motion.div>

                    {/* Feature Tabs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex flex-wrap gap-3 justify-center mb-8"
                        >
                            {features.map((feature) => (
                                <motion.button
                                    key={feature.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab(feature.id)}
                                    className={`px-6 py-3 rounded-xl transition-all ${
                                        activeTab === feature.id
                                            ? 'bg-primary text-primary-foreground shadow-lg'
                                            : 'bg-muted text-secondary hover:bg-card border border-border'
                                    }`}
                                >
                                    {feature.title}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Feature Content */}
                        {features.map((feature) => (
                            activeTab === feature.id && (
                                <motion.div 
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-card border border-border rounded-2xl p-8 md:p-12"
                                >
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h2 className="text-3xl text-primary mb-6">{feature.title}</h2>
                                            <p className="text-lg text-secondary mb-6 leading-relaxed">
                                                {feature.description}
                                            </p>
                                            <ul className="space-y-3 mb-8">
                                                {feature.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <span className="text-secondary">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href="/request-demo"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg"
                                            >
                                                Try This Feature
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            {/* Mockup Placeholder */}
                                            <div className="aspect-video bg-muted border-2 border-dashed border-border rounded-xl flex items-center justify-center">
                                                <div className="text-center">
                                                    <p className="text-sm text-secondary">
                                                        {feature.title} Interface
                                                    </p>
                                                    <p className="text-xs text-text-muted mt-2">
                                                        Interactive mockup coming soon
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </motion.div>

                    {/* Step-by-Step Interview Flow */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                                Complete Interview Journey
                            </h2>
                            <p className="text-lg text-secondary max-w-2xl mx-auto">
                                Follow a candidate through the entire TalentLyt interview process
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="space-y-8"
                        >
                            {interviewSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`bg-card border rounded-2xl p-8 transition-all cursor-pointer ${
                                        activeStep === index
                                            ? 'border-primary shadow-xl scale-[1.02]'
                                            : 'border-border hover:border-muted-border hover:shadow-lg'
                                    }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg ${
                                                activeStep === index
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-muted text-secondary'
                                            }`}>
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                            Step {index + 1}
                                                        </span>
                                                        <span className="text-sm text-text-muted flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            {step.time}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl text-primary mb-2">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-secondary text-lg leading-relaxed mb-6">
                                                {step.description}
                                            </p>
                                            {activeStep === index && (
                                                <div className="mt-6 p-6 bg-muted rounded-xl border border-border">
                                                    <div className="aspect-video bg-background border border-border rounded-lg flex items-center justify-center mb-4">
                                                        <div className="text-center">
                                                            <p className="text-sm text-primary">
                                                                {step.mockup.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-secondary text-center">
                                                        Interactive interface preview - Click to explore
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Key Benefits */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-muted border border-border rounded-2xl p-8 md:p-12 mb-16"
                    >
                        <h2 className="text-3xl text-center mb-12 text-primary">
                            Why Engineering Teams Choose TalentLyt
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-xl mb-3 text-primary">95% Reduction</h3>
                                <p className="text-secondary">
                                    In false positive hires with our integrity verification system
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl mb-3 text-primary">50% Faster</h3>
                                <p className="text-secondary">
                                    Interview-to-decision time with automated skill assessments
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl mb-3 text-primary">100% Compliant</h3>
                                <p className="text-secondary">
                                    GDPR/DPDPA compliant with candidate consent and data privacy controls
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center bg-card border border-border rounded-2xl p-12"
                    >
                        <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                            Ready to Transform Your Hiring Process?
                        </h2>
                        <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                            Join 200+ companies already using TalentLyt to hire with confidence
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/request-demo"
                                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-8 py-4 bg-card border border-border text-foreground rounded-xl hover:bg-muted transition-all"
                            >
                                View Pricing
            </Link>
                        </div>
                        <p className="text-sm text-text-muted mt-6">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
