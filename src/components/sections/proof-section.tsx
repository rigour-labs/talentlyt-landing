'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, BarChart3, Target, CheckCircle2, ArrowRight, Eye, Fingerprint, Brain } from 'lucide-react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

const detectionScenarios = [
    {
        icon: Eye,
        title: 'Proxy Candidate Caught',
        signal: 'Identity mismatch detected',
        description: 'The person answering interview questions was not the same person who completed identity verification. Multiple corroborating signals confirmed a stand-in.',
        detected: '3 of 15 signals triggered',
        outcome: 'Flagged for review — saved the team from a fraudulent hire.',
        color: 'text-red-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/20',
    },
    {
        icon: Brain,
        title: 'AI-Generated Answers Flagged',
        signal: 'Behavioral anomaly cluster',
        description: 'A candidate appeared to be using an AI tool to generate answers in real-time. Multiple behavioral signals correlated, distinguishing an "AI Passenger" from someone who genuinely leads AI.',
        detected: '5 of 15 signals triggered',
        outcome: 'Classified as AI Passenger — using AI, not understanding it.',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/20',
    },
    {
        icon: Fingerprint,
        title: 'Strong Candidate Verified',
        signal: 'Clean across all checks',
        description: 'Everything checked out — identity, behavior, and technical depth. The system confirmed authenticity across all 15 signal layers so the hiring team could proceed with confidence.',
        detected: '0 of 15 signals triggered',
        outcome: 'Integrity Score: 95/100 — recommended to proceed.',
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20',
    },
];

const proofPoints = [
    {
        icon: BarChart3,
        title: '85% Prediction Accuracy',
        description: 'Our job success prediction model was validated against real hiring outcomes across the beta cohort (n=82, Jan 2026).',
        methodology: 'Compared Maya\u2019s predictions against 6-month manager performance reviews',
    },
    {
        icon: ShieldCheck,
        title: '15-Signal Verification',
        description: '12% of beta interviews were flagged for integrity concerns that traditional screening would have missed entirely.',
        methodology: 'Self-learning signal engine that improves with every interview outcome',
    },
    {
        icon: Target,
        title: '41% Deeper Review Rate',
        description: 'Nearly half of beta candidates showed patterns worth a second look — issues invisible to phone screens and resume reviews.',
        methodology: 'Compared against control group using standard screening methods',
    },
];

export function ProofSection() {
    return (
        <section id="proof" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <TrendingUp className="w-3 h-3" />
                        Proof & Results
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                        Built to Catch What Others Miss
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        82 beta interviews. 6,824 signal events. Here&apos;s the methodology behind the detection — and what it looks like in practice.
                    </p>
                </div>

                {/* Methodology Proof Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {proofPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                                <point.icon className="w-6 h-6 text-brand" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">{point.description}</p>
                            <p className="text-xs text-text-muted italic border-t border-white/5 pt-4">
                                <span className="text-brand font-semibold">How we measured:</span> {point.methodology}
                            </p>
                        </div>
                    ))}
                </div>

                {/* What Rigovo Catches — Real Detection Scenarios */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">
                        What the Sentinel Engine Catches
                    </h3>
                    <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
                        Real scenarios from our 15-signal verification. Every interview gets this level of analysis automatically.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {detectionScenarios.map((scenario, index) => (
                            <article
                                key={index}
                                className="group relative h-full"
                            >
                                <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500 flex flex-col">
                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl ${scenario.bgColor} border ${scenario.borderColor} flex items-center justify-center`}>
                                            <scenario.icon className={`w-6 h-6 ${scenario.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-white">{scenario.title}</div>
                                            <div className={`text-xs font-medium ${scenario.color}`}>{scenario.signal}</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                                        {scenario.description}
                                    </p>

                                    {/* Signals & Outcome */}
                                    <div className="pt-6 border-t border-white/5 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className={`w-4 h-4 ${scenario.color} shrink-0`} />
                                            <span className="text-xs text-text-muted">{scenario.detected}</span>
                                        </div>
                                        <p className="text-sm font-medium text-white/80">{scenario.outcome}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Sample Report Preview */}
                <div className="relative p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.9rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[100px] rounded-full -z-10" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                    Sample Output
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    See What You&apos;ll Get
                                </h3>
                                <p className="text-text-secondary mb-8 leading-relaxed">
                                    Every interview generates a comprehensive audit report with integrity scores,
                                    skill evaluations, and actionable recommendations.
                                </p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        'Integrity verification score with signal breakdown',
                                        'Technical skill assessment with evidence',
                                        'Communication & problem-solving analysis',
                                        'Job success probability with confidence intervals',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                                            <span className="text-sm text-white/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/sample-report"
                                    onClick={() => analytics.track({
                                        event: 'cta_clicked',
                                        properties: {
                                            location: 'hero',
                                            cta_type: 'view_sample_report',
                                            cta_text: 'See a Real Report',
                                            destination_url: '/sample-report',
                                        },
                                    })}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover transition-all"
                                >
                                    <span className="technical-label text-xs">See a Real Report</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Mock Report Preview */}
                            <div className="relative">
                                <div className="p-6 rounded-2xl bg-[#111] border border-white/10 shadow-2xl">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                        <div>
                                            <div className="text-xs text-text-muted uppercase tracking-widest mb-1">Candidate Report</div>
                                            <div className="text-white font-bold">Senior Backend Engineer</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-text-muted">Integrity Score</div>
                                            <div className="text-2xl font-black text-green-400">94%</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 rounded-xl bg-white/5">
                                            <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Technical</div>
                                            <div className="text-xl font-bold text-white">8.5<span className="text-sm text-text-muted">/10</span></div>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                                <div className="w-[85%] h-full bg-brand rounded-full" />
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5">
                                            <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Communication</div>
                                            <div className="text-xl font-bold text-white">9.2<span className="text-sm text-text-muted">/10</span></div>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                                <div className="w-[92%] h-full bg-green-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-brand/10 border border-brand/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target className="w-4 h-4 text-brand" />
                                            <span className="text-xs font-bold text-brand uppercase tracking-widest">Job Success Prediction</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-white">78%</span>
                                            <span className="text-sm text-text-muted">likelihood of success in role</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <span className="text-[10px] text-text-muted">Sample data for illustration purposes</span>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/20 blur-2xl rounded-full" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/10 blur-3xl rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 text-center">
                    <p className="text-[10px] font-bold text-text-muted mb-8 uppercase tracking-[0.3em]">
                        Built on Enterprise-Grade Infrastructure
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {['SOC 2 Aligned', 'GDPR Compliant', 'AES-256 Encryption', 'Audit Trail'].map((badge) => (
                            <div key={badge} className="flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white/60 transition-colors uppercase tracking-widest cursor-default">
                                <ShieldCheck className="w-4 h-4" />
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
