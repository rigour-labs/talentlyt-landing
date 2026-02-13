'use client';

import React from 'react';
import { Bot, Shield, Activity, Brain, Zap, Cpu, Lock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const capabilities = [
    {
        title: 'Maya AI Interviewer',
        description: 'Maya runs technical interviews for you. She asks follow-ups when something doesn\'t add up and digs into areas where candidates are vague. Think of her as the technical screener you wish you had time to be.',
        metric: '82 beta interviews completed',
        icon: Bot,
        className: '',
    },
    {
        title: 'Integrity Evidence Layer',
        description: '15 signals run continuously throughout every interview — documenting identity confidence, session integrity, and AI collaboration patterns that manual processes can\u2019t capture.',
        metric: '6,824 signals documented in beta',
        icon: Shield,
        className: 'md:col-span-1',
    },
    {
        title: 'AI Architect vs. Passenger',
        description: 'We don\u2019t block AI usage — we classify whether candidates lead AI or follow it. Hire people who understand the tech, not just prompt it.',
        metric: '15 signal types documented',
        icon: Activity,
        className: 'md:col-span-1',
    },
    {
        title: 'Job Success Prediction',
        description: 'Our models use verified interview data to estimate how well a candidate will actually perform on the job. It\'s data, not gut feeling.',
        metric: '85% prediction accuracy',
        icon: Brain,
        className: 'md:col-span-1',
    },
    {
        title: 'Panel Mode',
        description: 'Want to run the interview yourself? Maya sits in the background and whispers suggested questions and flags in real-time. You lead, she supports.',
        metric: 'Real-time co-pilot',
        icon: Zap,
        className: 'md:col-span-1',
    },
    {
        title: 'Video Scan',
        description: 'Already have recorded interviews from Zoom or Teams? Upload them and we\'ll generate a complete integrity evidence report — identity confidence, authenticity verification, and session analysis.',
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
                        What <span className="text-brand">Rigovo</span> Does
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                        Tools that make your hiring team faster and more confident. <span className="text-white font-bold">You still make every call</span> — we just give you better information to work with.
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
