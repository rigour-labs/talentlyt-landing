'use client';

import { ArrowRight, Shield, Zap, Database, Brain, Lock, Ghost, Activity, MousePointer2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function FeaturesSection() {
    const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    const features = [
        {
            title: 'Technical Truth Bank',
            benefit: 'Governor Pillar I',
            description: 'Cross-verifies candidate claims against a high-volume RAG index of 20,000+ technical patterns. Catch hallucinations in real-time.',
            icon: Database,
            className: "md:col-span-2",
            metric: '20,000+ Patterns',
            tag: 'RAG SYNCED'
        },
        {
            title: 'AI-Speak Detection',
            benefit: 'Governor Pillar II',
            description: 'Identifies robotic filler phrases and scripted response structures used by LLM-assistance tools.',
            icon: Ghost,
            className: "md:col-span-1",
            metric: '99.4% Accuracy',
            tag: 'VOICE BIO'
        },
        {
            title: 'Latency Traps',
            benefit: 'Governor Pillar III',
            description: 'Analyzes micro-fluctuations in speech and typing latency to detect external tool switching.',
            icon: Zap,
            className: "md:col-span-1",
            metric: '<100ms precision',
            tag: 'BEHAVIORAL'
        },
        {
            title: 'RAG Challenge Engine',
            benefit: 'Hyper-Personalization',
            description: 'Generates coding challenges grounded in the candidate\'s resume and the company\'s tech stack for zero-leakage assessments.',
            icon: Brain,
            className: "md:col-span-2",
            metric: 'Zero-Leakage',
            tag: 'DYNAMIC GENERATION'
        },
        {
            title: 'Session Playback',
            benefit: 'Deep Analysis',
            description: 'Watch the entire coding session keystroke by keystroke with behavioral flags overlaid on the timeline.',
            icon: MousePointer2,
            className: "md:col-span-1",
            metric: '1:1 Replay',
            tag: 'FORENSIC'
        },
        {
            title: 'Enterprise Trust',
            benefit: 'Security First',
            description: 'GDPR/DPDPA compliant with SOC2-ready infrastructure. Encrypted recordings and privacy controls.',
            icon: Lock,
            className: "md:col-span-2",
            metric: 'SOC2 Type II',
            tag: 'COMPLIANCE'
        },
    ];

    return (
        <section ref={sectionRef as React.RefObject<HTMLElement>} id="features" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            {/* 3D Grid Background Asset */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <img src="/assets/grid.png" alt="Grid Background" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className={`mb-20 text-center max-w-3xl mx-auto ${isVisible ? 'slide-up' : 'animate-on-scroll'}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6 ${isVisible ? 'fade-in animate-delay-100' : 'animate-on-scroll'}`}>
                        <Activity className="w-3 h-3" aria-hidden="true" />
                        System Capabilities Index
                    </div>
                    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1] ${isVisible ? 'slide-up animate-delay-200' : 'animate-on-scroll'}`}>
                        Standard-Setting <span className="text-brand">Technology</span>
                    </h2>
                    <p className={`text-lg sm:text-xl text-text-secondary leading-relaxed ${isVisible ? 'slide-up animate-delay-300' : 'animate-on-scroll'}`}>
                        TalentLyt isn't just another video tool. It's a high-precision engineering engine
                        built to restore trust in technical hiring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {features.map((feature, index) => {
                        const delayClass = index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-200' : index === 2 ? 'animate-delay-300' : index === 3 ? 'animate-delay-400' : index === 4 ? 'animate-delay-500' : 'animate-delay-600';
                        const animationClass = isVisible ? `slide-up ${delayClass}` : 'animate-on-scroll';
                        return (
                            <div
                                key={index}
                                className={`p-8 sm:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand/30 transition-all duration-500 group relative overflow-hidden focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-within:ring-offset-background ${feature.className} ${animationClass}`}
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
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Metric Data</div>
                                    <span className="text-sm font-bold text-white tracking-tight">{feature.metric}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand/5 transition-all" aria-hidden="true">
                                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                            </div>
                        );
                    })}
                </div>

                {/* Performance Comparison UI */}
                <div className="relative p-1 rounded-[3.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[3.4rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                        {/* Audit Scan Line */}
                        <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-20 pointer-events-none z-20" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative z-10">
                                <h4 className="text-3xl font-bold text-white mb-8 tracking-tight">Performance Audit</h4>
                                <div className="space-y-10">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-white tracking-widest uppercase">TalentLyt Accuracy</span>
                                            <span className="text-2xl font-bold text-brand leading-none">99.9%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand shadow-[0_0_15px_rgba(37,99,235,0.5)] w-[99.9%]" />
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
                </div>
            </div>
        </section>
    );
}
