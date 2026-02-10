'use client';

import React from 'react';
import { Shield, Lock, Zap, Eye, Brain, Scale } from 'lucide-react';

const features = [
    {
        icon: Eye,
        title: 'Deepfake Detection',
        description: 'Real-time pixel-level analysis catches face-swaps, lip-sync manipulation, and AI-generated video overlays. By mid-2025, 17% of HR managers had encountered deepfakes in video interviews.',
        highlight: 'Deepfake crisis is real',
    },
    {
        icon: Shield,
        title: 'Proxy Candidate Blocking',
        description: 'Voice biometrics, gaze tracking, and behavioral analysis detect when a different person answers than the one who showed up. 1 in 3 managers have found a proxy or fake identity.',
        highlight: '$28K avg loss per proxy hire',
    },
    {
        icon: Lock,
        title: 'SOC2 Type II Certified',
        description: 'Enterprise-grade data protection meeting the compliance bar set by US legal and security teams. Full audit trails included.',
        highlight: 'Enterprise ready',
    },
    {
        icon: Brain,
        title: 'AI Leadership Verification',
        description: 'We don\'t penalize AI use — 31% of candidates use AI to prep. We verify whether candidates architect solutions or blindly paste what ChatGPT gives them.',
        highlight: 'Architects over passengers',
    },
    {
        icon: Scale,
        title: 'Legally-Defensible Reports',
        description: 'Every interview generates a cryptographically-signed audit trail. Your HR team gets documentation that holds up under scrutiny.',
        highlight: 'Compliance-first',
    },
    {
        icon: Zap,
        title: 'Instant Technical Scoring',
        description: 'Get comprehensive reports within minutes — technical depth, integrity score, and a predictive job-success rating (85% accuracy).',
        highlight: 'Same-day results',
    },
];

export function USAFeaturesSection() {
    return (
        <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        Why US Engineering Teams Choose Rigovo
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                        Interview Integrity,<br /><span className="text-brand">At Scale</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Remote hiring opened up global talent — and global fraud. Rigovo is built for
                        the security and compliance standards US companies require.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-brand" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">{feature.description}</p>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                                {feature.highlight}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Target Audiences */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                        <div className="text-[10px] uppercase tracking-widest text-brand font-bold mb-4">For US Startups (Seed → Series C)</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Your Engineers Should Be Shipping, Not Screening</h3>
                        <p className="text-text-secondary mb-6">
                            Every hour a senior engineer spends on a screening call is an hour not spent on your product.
                            Maya handles the technical validation — you focus on culture fit and closing.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Reduce time-to-hire by 72%',
                                'Eliminate $15K+ bad-hire costs',
                                'Scale without burning out your team',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                        <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-4">For US Enterprise</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Compliance-First Technical Hiring</h3>
                        <p className="text-text-secondary mb-6">
                            SOC2 Type II. Legally-defensible audit trails. EEOC-safe structured interviews.
                            Built for the regulatory environment US enterprise demands.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'SOC2 Type II certified infrastructure',
                                'Cryptographically-signed audit trails',
                                'Full EEOC-compliant structured assessments',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
