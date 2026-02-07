'use client';

import { ArrowRight, Shield, Zap, Database, Brain, Lock, Activity, Cpu } from 'lucide-react';
import Image from 'next/image';
export function FeaturesSection() {

    const features = [
        {
            title: 'Panel Mode (Maya Whispers)',
            benefit: 'You Stay in Control',
            description: 'Run interviews your way with real-time AI suggestions. Maya provides high-signal probing questions while you focus on culture fit and soft skills.',
            icon: Zap,
            className: "md:col-span-2",
            metric: 'Zero-Latency',
            tag: 'CO-PILOT MODE'
        },
        {
            title: 'Predictive Job Success',
            benefit: 'Data-Driven Decisions',
            description: 'Our ML models help you predict on-the-job performance with 85% accuracy. Get insights that complement your team\'s judgment.',
            icon: Brain,
            className: "md:col-span-1",
            metric: '85% Accuracy',
            tag: 'ML POWERED'
        },
        {
            title: 'Identity Verification',
            benefit: 'Authenticity Shield',
            description: 'Face matching with ID documents, liveness checks, and identity continuity. Ensure the person you interview is the person you hire.',
            icon: Shield,
            className: "md:col-span-1",
            metric: 'Real-time Audit',
            tag: 'LIVENESS+'
        },
        {
            title: 'Interview Genome',
            benefit: 'Portable Credentials',
            description: 'Create portable, cryptographically-signed candidate profiles. Verified skills travel with the candidate—eliminating redundant screenings.',
            icon: Database,
            className: "md:col-span-2",
            metric: 'Portable Intelligence',
            tag: 'LIVE'
        },
        {
            title: 'Standalone Forensic Scans',
            benefit: 'Video Analysis',
            description: 'Upload any recorded interview (Zoom, Teams, etc.) for deepfake and lip-sync analysis. Get verdicts on existing footage—no live interview required.',
            icon: Cpu,
            className: "md:col-span-1",
            metric: '$35 Per Scan',
            tag: 'SENTINEL SOLO'
        },
        {
            title: '15-Signal AI Leadership Verification',
            benefit: 'Architect or Passenger?',
            description: 'We don\'t detect AI usage — we measure understanding. Used Copilot and can explain every decision? You\'re good. Freeze when asked "why that approach"? That\'s a flag.',
            icon: Lock,
            className: "md:col-span-2",
            metric: '99.9% Accuracy',
            tag: 'GOVERNOR'
        },
    ];

    return (
        <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            {/* 3D Grid Background Asset */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <Image
                    src="/assets/grid.png"
                    alt="AI Interview Platform Matrix Background"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <Activity className="w-3 h-3" aria-hidden="true" />
                        System Capabilities Index
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        Tools That <span className="text-brand">Empower</span> <br />
                        Your Hiring Team
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                        Rigovo gives your recruiters and hiring managers <span className="text-white font-bold">AI-powered superpowers</span>—not a replacement. You stay in control of every hiring decision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 sm:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand/30 transition-all duration-500 group relative overflow-hidden focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-background ${feature.className}`}
                        >
                            <div className="flex items-start justify-between mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-transform" aria-hidden="true">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-muted group-hover:text-brand transition-colors">
                                    {feature.tag}
                                </div>
                            </div>

                            <div className="text-[10px] font-bold text-brand/80 mb-2 uppercase tracking-widest">
                                {feature.benefit}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{feature.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-8">{feature.description}</p>

                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                                <div className="flex flex-col">
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">{feature.metric.includes('%') || feature.metric.includes('x') ? 'Performance' : 'Core Metric'}</div>
                                    <span className="text-sm font-bold text-brand tracking-tight uppercase">{feature.metric}</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Status</div>
                                    <span className="text-sm font-bold text-white tracking-tight uppercase">Operational</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Performance Comparison UI - Hidden for legal compliance */}
                {/* <div className="relative p-1 rounded-[3.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[3.4rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                        <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-20 pointer-events-none z-20" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative z-10">
                                <h4 className="text-3xl font-bold text-white mb-8 tracking-tight">Performance Audit</h4>
                                <div className="space-y-10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-white tracking-widest uppercase">Rigovo Accuracy</span>
                                            <span className="text-2xl font-bold text-brand leading-none">99.9%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand shadow-[0_0_15px_rgba(0,102,255,0.5)] w-[99.9%]" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-text-muted tracking-widest uppercase">Industry Average</span>
                                            <span className="text-2xl font-bold text-text-muted leading-none">85%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-white/20 w-[85%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                {[
                                    { label: "Integrity Gap", value: "-95%", desc: "Reduction in integrity issues", color: "text-brand" },
                                    { label: "Truth Reliability", value: "99.9%", desc: "0.1% false-positive rate", color: "text-green-500" },
                                    { label: "Review Velocity", value: "3x", desc: "Faster time-to-hire", color: "text-white" },
                                    { label: "Data Points", value: "20k", desc: "Analyzed per session", color: "text-brand" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                                        <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                                        <div className="text-xs text-text-muted leading-relaxed">{stat.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
        </section>
    );
}
