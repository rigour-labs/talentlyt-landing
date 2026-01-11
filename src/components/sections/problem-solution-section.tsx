'use client';

import React, { useRef } from 'react';
import { X, CheckCircle2, Activity, Zap, ShieldAlert, Cpu } from 'lucide-react';

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
                <img src="/assets/grid.png" alt="Grid pattern" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 sm:mb-28">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/20 mb-8">
                        <span className="technical-label text-warning">Audit Diagnostic: Required</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        The Hiring <span className="text-warning">Crisis</span>. <br />
                        Solved by <span className="text-brand">Expert AI</span>.
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                        Traditional remote interviewing is built on trust that no longer exists in an AI-accelerated world. We restore that trust.
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

                {/* Quantitative Impact Box - Hidden for legal compliance */}
                {/* <div className="p-1.5 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.9rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="text-[8px] font-bold text-text-muted uppercase tracking-[0.4em] mb-2">Report ID</div>
                            <div className="text-[10px] font-mono text-white/40">ANALYTICS-2024-SYS</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                            {[
                                { label: "Fraud Reduction", value: "99.4%", width: "99%", trend: "Down", color: "text-brand" },
                                { label: "Hire Velocity", value: "82%", width: "82%", trend: "Up", color: "text-brand" },
                                { label: "Candidate ROI", value: "5.8x", width: "95%", trend: "Up", color: "text-highlight" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                                    <div className={`text-5xl font-bold mb-4 ${stat.color} tracking-tighter`}>{stat.value}</div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${stat.color === 'text-brand' ? 'bg-brand' : 'bg-highlight'}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
