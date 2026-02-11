'use client';

import React from 'react';
import { TrendingUp, ShieldCheck, BarChart3, Target, CheckCircle2 } from 'lucide-react';

export function UAEProofSection() {
    return (
        <section id="proof" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#020617] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <TrendingUp className="w-3 h-3" />
                        Beta Results
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                        Built for <span className="text-brand">Remote Verification</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Our beta program has analyzed thousands of interview signals, helping teams identify
                        candidates who need deeper review before making hiring decisions.
                    </p>
                </div>

                {/* Real Beta Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: BarChart3,
                            value: '6,824',
                            label: 'Signal Events Analyzed',
                            description: 'Behavioral data points including gaze, audio sync, and response patterns',
                        },
                        {
                            icon: Target,
                            value: '41%',
                            label: 'Flagged for Review',
                            description: 'Candidates that triggered review based on inconsistencies worth a second look',
                        },
                        {
                            icon: ShieldCheck,
                            value: '15',
                            label: 'Verification Signals',
                            description: 'Simultaneous checks across identity, behavior, and technical integrity signals',
                        },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center group hover:border-brand/30 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
                                <stat.icon className="w-6 h-6 text-brand" />
                            </div>
                            <div className="text-4xl font-black text-brand mb-2">{stat.value}</div>
                            <div className="text-lg font-bold text-white mb-2">{stat.label}</div>
                            <p className="text-sm text-text-secondary">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* How It Works for UAE */}
                <div className="relative p-1 rounded-[3rem] bg-gradient-to-b from-brand/20 to-transparent overflow-hidden mb-16">
                    <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-[2.9rem] p-10 md:p-16 border border-brand/10 relative overflow-hidden">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-white mb-4">How UAE Teams Use Rigovo</h3>
                            <p className="text-text-secondary max-w-xl mx-auto">
                                Whether you&apos;re a startup or a staffing agency, the workflow is simple:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: '01',
                                    title: 'Send Interview Link',
                                    description: 'Candidates receive a unique link. They can interview any time — Maya is available 24/7.',
                                },
                                {
                                    step: '02',
                                    title: 'Maya Runs the Screen',
                                    description: 'Live AI conversation with real-time 15-signal verification running in the background.',
                                },
                                {
                                    step: '03',
                                    title: 'Review the Report',
                                    description: 'Get a comprehensive audit report with integrity scores, technical evaluation, and recommendations.',
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

                {/* Value Props for MENA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                        <h3 className="text-xl font-bold text-white mb-4">Perfect for MENA Time Zones</h3>
                        <ul className="space-y-3">
                            {[
                                'Candidates interview on their schedule — no coordination needed',
                                'Results ready before your workday starts',
                                'Screen candidates across UAE, KSA, Egypt, and beyond',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                        <h3 className="text-xl font-bold text-white mb-4">Built for Trust</h3>
                        <ul className="space-y-3">
                            {[
                                '15-signal verification catches issues phone screens miss',
                                'Detailed audit reports build client confidence',
                                'GDPR compliant — data privacy built in',
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
                        Sources: TalentShark.ae (Gulf Remote Work Report), The National News, India Times (UAE Compliance Report). Rigovo beta: 82 interviews, 6,824 signal events (Jan 2026).
                    </p>
                </div>
            </div>
        </section>
    );
}
