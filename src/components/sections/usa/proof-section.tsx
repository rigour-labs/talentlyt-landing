'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, BarChart3, Target, CheckCircle2, AlertTriangle } from 'lucide-react';

export function USAProofSection() {
    return (
        <section id="proof" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#020617] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <AlertTriangle className="w-3 h-3" />
                        The US Remote Hiring Crisis
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                        The Numbers Don&apos;t Lie
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Interview fraud in the US has exploded since 2023. Here&apos;s what our beta data reveals — and why
                        leading US teams are switching to verified interviews.
                    </p>
                </div>

                {/* Real Beta Metrics — US framing */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {[
                        {
                            icon: AlertTriangle,
                            value: '1 in 4',
                            label: 'Candidates Will Be Fake',
                            description: 'Gartner predicts 25% of job candidates globally will be fraudulent by 2028',
                            color: 'text-red-400',
                            bgColor: 'bg-red-500/10 border-red-500/20',
                        },
                        {
                            icon: BarChart3,
                            value: '$28K',
                            label: 'Avg Loss Per Proxy Hire',
                            description: 'Average company loss per detected proxy hire incident (Crosschq)',
                            color: 'text-brand',
                            bgColor: 'bg-brand/10 border-brand/20',
                        },
                        {
                            icon: Target,
                            value: '300+',
                            label: 'Firms Unknowingly Compromised',
                            description: 'US companies that hired DPRK IT workers via stolen identities (DOJ, 2024)',
                            color: 'text-orange-400',
                            bgColor: 'bg-orange-500/10 border-orange-500/20',
                        },
                        {
                            icon: ShieldCheck,
                            value: '15',
                            label: 'Simultaneous Signals',
                            description: 'Identity, behavior, and technical signals — Rigovo verifies in real-time',
                            color: 'text-blue-400',
                            bgColor: 'bg-blue-500/10 border-blue-500/20',
                        },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center group hover:border-brand/30 transition-all">
                            <div className={`w-12 h-12 rounded-xl ${stat.bgColor} border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <div className={`text-3xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                            <div className="text-sm font-bold text-white mb-2">{stat.label}</div>
                            <p className="text-xs text-text-secondary">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* How It Works for US */}
                <div className="relative p-1 rounded-[3rem] bg-gradient-to-b from-brand/20 to-transparent overflow-hidden mb-16">
                    <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-[2.9rem] p-10 md:p-16 border border-brand/10 relative overflow-hidden">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-white mb-4">How US Teams Use Rigovo</h3>
                            <p className="text-text-secondary max-w-xl mx-auto">
                                From Bay Area startups to NYC enterprise — the workflow is built for speed and compliance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: '01',
                                    title: 'Send Interview Link',
                                    description: 'Candidates get a secure, unique link. Maya is available 24/7 — no scheduling overhead.',
                                },
                                {
                                    step: '02',
                                    title: 'Maya Runs the Screen',
                                    description: 'Live AI conversation with 15-signal integrity verification running silently in background.',
                                },
                                {
                                    step: '03',
                                    title: 'Governor Audits',
                                    description: 'Our second AI agent independently audits the entire interview for fraud, AI-use patterns, and quality.',
                                },
                                {
                                    step: '04',
                                    title: 'Review & Decide',
                                    description: 'Get a signed audit report with integrity scores, technical evaluation, and actionable recommendations.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-5xl font-black text-brand/30 mb-4">{item.step}</div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-text-secondary">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Value Props for US */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                        <h3 className="text-xl font-bold text-white mb-4">Built for US Compliance</h3>
                        <ul className="space-y-3">
                            {[
                                'SOC2 Type II certified infrastructure',
                                'EEOC-compliant structured interview methodology',
                                'Cryptographically-signed, tamper-proof audit trails',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                        <h3 className="text-xl font-bold text-white mb-4">The Silicon Valley Signal</h3>
                        <ul className="space-y-3">
                            {[
                                'Separate AI architects from AI passengers',
                                'Detect proxy candidates and deepfakes in real-time',
                                'Portable verified profiles for candidate talent',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-text-muted">
                        Sources: Gartner (2024 Recruiting Innovations Survey), U.S. DOJ (May 2024), Crosschq Research, CareerBuilder/SHRM. Rigovo beta: 82 interviews, 6,824 signal events (Jan 2026).
                    </p>
                </div>
            </div>
        </section>
    );
}
