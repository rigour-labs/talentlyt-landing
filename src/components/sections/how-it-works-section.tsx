'use client';

import React, { useRef } from 'react';
import { Zap, MousePointer2, Cpu, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function HowItWorksSection() {
    const sectionRef = useRef(null);

    const steps = [
        {
            title: 'Verify Identity',
            description: 'Each candidate gets a unique, secure session link with automated identity verification before the interview begins.',
            icon: MousePointer2,
        },
        {
            title: 'AI-Powered Interview',
            description: 'Maya conducts the technical interview while continuously verifying candidate authenticity across 13 signals. Your team can observe or co-pilot in real time.',
            icon: Cpu,
        },
        {
            title: 'Get Your Report',
            description: 'Receive a detailed report with technical scores, integrity verification results, and job success predictions — all backed by data, not gut feelings.',
            icon: ShieldCheck,
        },
    ];

    return (
        <section id="how-it-works" className="px-4 sm:px-6 py-24 sm:py-32 bg-[#030303] relative overflow-hidden" ref={sectionRef}>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 sm:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-8">
                        <Zap className="w-3.5 h-3.5 text-brand" />
                        <span className="technical-label text-brand">3 Simple Steps</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        How It <span className="text-brand">Works</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                        Three steps from candidate link to hire decision — with enterprise-level verification at every stage.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-[80px] left-[15%] right-[15%] h-[1px] bg-white/10" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 relative z-10">
                        {steps.map((step, index) => {
                            const StepCard = () => {
                                const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
                                return (
                                    <motion.div
                                        ref={ref as React.RefObject<HTMLDivElement>}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                    >
                                        <div className="h-full bg-white/[0.015] border border-white/10 rounded-[2.5rem] p-10 flex flex-col group hover:bg-white/[0.03] hover:border-brand/20 transition-all duration-500">
                                            {/* Step Number */}
                                            <div className="mb-10 relative w-fit">
                                                <div className="w-16 h-16 rounded-full bg-black border border-brand/50 flex items-center justify-center text-xl font-bold text-white shadow-[0_0_30px_rgba(0,102,255,0.2)] relative z-10 group-hover:border-brand transition-colors duration-500">
                                                    {index + 1}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <step.icon className="w-4 h-4 text-brand" />
                                                    <span className="technical-label text-brand/70 text-xs">Step {index + 1}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">{step.title}</h3>
                                                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            };
                            return <StepCard key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
