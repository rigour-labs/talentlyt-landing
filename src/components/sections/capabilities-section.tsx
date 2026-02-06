'use client';

import React from 'react';
import { Bot, Shield, Activity, Brain, Zap, Cpu, Lock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const capabilities = [
    {
        title: 'Maya AI Interviewer',
        description: 'Maya conducts adaptive technical interviews in real-time. She probes deeper when answers are surface-level and validates understanding through follow-up questions.',
        metric: '82 beta interviews completed',
        icon: Bot,
        className: 'md:col-span-2',
    },
    {
        title: 'Identity Verification',
        description: 'Continuous face matching, voice verification, and liveness checks ensure the person you interview is the person you hire.',
        metric: '3,077 signals caught in beta',
        icon: Shield,
        className: 'md:col-span-1',
    },
    {
        title: 'Multi-Signal Analysis',
        description: '13 verification signals work together — from keystroke patterns to response timing — to verify candidates are genuinely solving problems, not reading from scripts.',
        metric: '15 signal types monitored',
        icon: Activity,
        className: 'md:col-span-1',
    },
    {
        title: 'Predictive Job Success',
        description: 'ML models analyze verified interview data to predict on-the-job performance, helping your team make data-backed hiring decisions.',
        metric: '85% prediction accuracy',
        icon: Brain,
        className: 'md:col-span-1',
    },
    {
        title: 'Panel Mode (AI Whisper)',
        description: 'Run interviews your way. Maya provides real-time suggestions and probing questions while you focus on culture fit and soft skills.',
        metric: 'Real-time co-pilot',
        icon: Zap,
        className: 'md:col-span-1',
    },
    {
        title: 'Forensic Video Scans',
        description: 'Upload any recorded interview (Zoom, Teams, etc.) for deepfake and lip-sync analysis. Get verdicts on existing footage — no live interview required.',
        metric: '$35 per scan',
        icon: Cpu,
        className: 'md:col-span-1',
    },
];

export function CapabilitiesSection() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="capabilities" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className={`mb-16 sm:mb-20 text-center max-w-3xl mx-auto ${isVisible ? 'slide-up' : 'animate-on-scroll'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <Activity className="w-3 h-3" aria-hidden="true" />
                        Platform Features
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        What <span className="text-brand">TalentLyt</span> Does
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                        AI-powered tools that <span className="text-white font-bold">empower your hiring team</span> — not replace them. You stay in control of every hiring decision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className={`p-8 sm:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand/30 transition-all duration-500 group relative overflow-hidden ${capability.className}`}
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-transform" aria-hidden="true">
                                    <capability.icon className="w-7 h-7" />
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-brand transition-colors">{capability.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-8">{capability.description}</p>

                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">From our beta</div>
                                <span className="text-sm font-bold text-brand tracking-tight">{capability.metric}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
