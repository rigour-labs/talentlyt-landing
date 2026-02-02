'use client';

import React, { useRef } from 'react';
import { X, CheckCircle2, Activity, Zap, ShieldAlert, Cpu } from 'lucide-react';
import Image from 'next/image';

export function ProblemSolutionSection() {
    const ref = useRef<HTMLElement>(null);

    const problems = [
        {
            title: 'Integrity Fragmentation',
            description: 'Candidates bypass legacy monitoring via dual-device or screen-share exploits.',
            impact: '30-40% compromised sessions',
            icon: ShieldAlert
        },
        {
            title: 'Audit Bottleneck',
            description: 'Manual review of hour-long recordings delays hiring pipelines by days.',
            impact: '4-6 hours per audit',
            icon: Activity
        },
        {
            title: 'Evaluation Variance',
            description: 'Subjective assessments lead to inconsistent hiring and unconscious bias.',
            impact: '50% Score Variance',
            icon: Zap
        },
        {
            title: 'Proxy Interleaving',
            description: 'Candidates swap identities mid-session or use proxy actors for technical rounds.',
            impact: 'Critical Integrity Breach',
            icon: ShieldAlert
        }
    ];

    const solutions = [
        {
            title: 'Governor Verification',
            description: 'Real-time consensus mapping detects sub-100ms behavioral anomalies.',
            benefit: '95% Fraud Detection',
            icon: CheckCircle2
        },
        {
            title: 'Biometric Guard',
            description: 'Proprietary candidate recognition with automated matching and continuous focus re-verification.',
            benefit: 'Zero Identity Fraud',
            icon: Cpu
        },
        {
            title: 'Standardized Maya Scoring',
            description: 'AI-driven assessment grounded in technical truth, not human vibes.',
            benefit: '99% Bias Reduction',
            icon: Zap
        }
    ];

    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden" ref={ref}>
            {/* 3D Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <Image
                    src="/assets/grid.png"
                    alt="AI Interview Technical Assessment Grid"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 sm:mb-28">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/20 mb-8">
                        <span className="technical-label text-warning">Market Diagnostic: Global</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        The <span className="text-warning">Remote Truth</span> Crisis. <br />
                        The <span className="text-brand">Live Intelligence</span> Solution.
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                        Traditional hiring is broken by pre-recorded questions and siloed data. TalentLyt restores trust with <span className="text-white font-bold">live adaptive AI</span> and collective <span className="text-white font-bold">federated learning</span>.
                    </p>
                </div>

                {/* Audit-Style Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
                    {/* Problem Column: Legacy Systems */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-danger/10 border border-danger/20 flex items-center justify-center text-danger">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Legacy Frameworks</h3>
                                <p className="technical-label text-danger">Compromised Status</p>
                            </div>
                        </div>

                        {problems.map((problem, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-danger/20 transition-all group"
                            >
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-danger transition-colors">{problem.title}</h4>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">{problem.description}</p>
                                <div className="flex items-center gap-2 bg-danger/5 px-3 py-1.5 rounded-lg border border-danger/10 w-fit">
                                    <Activity className="w-3 h-3 text-danger" />
                                    <span className="technical-label text-danger uppercase tracking-widest">Incident Risk</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Solution Column: TalentLyt Engine */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">TalentLyt Engine</h3>
                                <p className="technical-label text-brand">Optimized State</p>
                            </div>
                        </div>

                        {solutions.map((solution, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-[2rem] bg-brand/5 border border-brand/10 hover:border-brand/30 transition-all group relative overflow-hidden"
                            >
                                {/* Subtle scan animation overlay for solutions */}
                                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand/5 to-transparent pointer-events-none" />
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors">{solution.title}</h4>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">{solution.description}</p>
                                <div className="flex items-center gap-2 bg-brand/10 px-3 py-1.5 rounded-lg border border-brand/20 w-fit">
                                    <CheckCircle2 className="w-3 h-3 text-brand" />
                                    <span className="technical-label text-brand uppercase tracking-widest">Verified Signal</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real Beta Results */}
                <div className="p-1.5 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-b from-brand/20 to-transparent">
                    <div className="bg-slate-900 rounded-[1.8rem] sm:rounded-[2.8rem] p-6 sm:p-10 md:p-16 border border-brand/20 relative overflow-hidden">
                        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
                            <div className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1">Beta Program</div>
                            <div className="text-xs font-mono text-slate-400">Jan 2026</div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Live Beta Results</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    Real <span className="text-brand">Detection Results</span> from Beta Testing.
                                </h3>
                                <p className="text-base text-slate-300 leading-relaxed mb-6">
                                    Our beta program monitored 82 live interviews and detected 6,824 integrity anomalies across 15 different signal types.
                                </p>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700">
                                    <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand shrink-0">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-brand uppercase tracking-wide mb-0.5">Top Detection</div>
                                        <div className="text-lg font-bold text-white">
                                            3,077 face absent signals caught
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: "Total Anomalies", value: "6,824", sub: "Signals Detected", color: "text-brand" },
                                    { label: "Interviews", value: "82", sub: "Sessions Monitored", color: "text-white" },
                                    { label: "Flag Rate", value: "41%", sub: "Sessions Flagged", color: "text-white" },
                                    { label: "Signal Types", value: "15", sub: "Detection Categories", color: "text-green-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 sm:p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-brand/30 transition-all">
                                        <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wide mb-2">{stat.label}</div>
                                        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 ${stat.color} tracking-tighter`}>{stat.value}</div>
                                        <div className="text-[10px] sm:text-xs text-slate-500">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
