'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Clock, ArrowRight, CheckCircle2, Zap, Cpu, MousePointer2, ShieldCheck } from 'lucide-react';

function KineticCard({ children, index }: { children: React.ReactNode; index: number }) {
    const [transform, setTransform] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 10;
        const yPct = (mouseY / height - 0.5) * 10;
        setTransform({ x: xPct, y: yPct });
    };

    const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0 });
    };

    const rotateY = transform.x * 5;
    const rotateX = -transform.y * 5;

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformStyle: "preserve-3d",
                transition: 'transform 0.1s ease-out',
            }}
            className="relative group"
        >
            <div style={{ transform: "translateZ(50px)" }} className="h-full">
                {children}
            </div>

            {/* Glowing Edge Effect */}
            <div
                style={{
                    transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(-10px)`,
                }}
                className="absolute inset-0 bg-brand/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] -z-10"
            />
        </div>
    );
}

export function HowItWorksSection() {
    const sectionRef = useRef(null);

    const steps = [
        {
            title: 'Schedule Interview',
            description: 'Hyper-personalized links with automated integrity pre-check. Integrated with your entire stack.',
            time: '30s SETUP',
            output: 'Session_Link_Active',
            sample: 'https://talentlyt.cloud/envoy/x72-99',
            icon: MousePointer2
        },
        {
            title: 'Conduct Interview',
            description: 'Maya engages while Governor audits. Sub-100ms sync loop ensures total verification depth.',
            time: 'LIVE_ENGINE',
            output: 'Neural_Consensus_Active',
            sample: 'Audit_Heartbeat: 120Hz',
            icon: Cpu
        },
        {
            title: 'Get Instant Results',
            description: 'Forensic reports with code playback and behavioral truth mapping delivered instantly.',
            time: 'INSTANT_AUDIT',
            output: 'Report_Verified_A1',
            sample: 'Integrity_Score: 99.4%',
            icon: ShieldCheck
        },
    ];

    return (
        <section id="how-it-works" className="px-4 sm:px-6 py-24 sm:py-32 bg-[#030303] relative overflow-hidden" ref={sectionRef}>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 mb-8">
                        <Zap className="w-3.5 h-3.5 text-brand animate-pulse" />
                        <span className="technical-label text-brand">Operational Protocol</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        Streamlined <span className="text-brand">Precision</span>.
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                        From initial handshake to forensic resolution, TalentLyt processes every signal with military-grade integrity.
                    </p>
                </div>

                <div className="relative">
                    {/* Neon Pulse Conduit (Connecting Line) */}
                    <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-[2px] bg-white/5 overflow-hidden">
                        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_15px_#6366f1]" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <KineticCard key={index} index={index}>
                                <div className="h-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col group/card hover:bg-white/[0.04] transition-colors duration-500">

                                    {/* Orbital Step Number */}
                                    <div className="mb-12 relative">
                                        <div className="w-16 h-16 rounded-full bg-black border-2 border-brand flex items-center justify-center text-xl font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] relative z-10">
                                            {index + 1}
                                        </div>
                                        {/* Orbital Ring */}
                                        <div className="absolute -inset-2 border border-brand/20 rounded-full border-dashed" />
                                    </div>

                                    {/* Content Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock className="w-3.5 h-3.5 text-brand" />
                                            <span className="technical-label text-brand/70">{step.time}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover/card:text-brand transition-colors">{step.title}</h3>
                                        <p className="text-sm text-text-muted leading-relaxed opacity-80 group-hover/card:opacity-100 transition-opacity">{step.description}</p>
                                    </div>

                                    {/* Digital Terminal Readout */}
                                    <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="technical-label text-white/30 text-[9px]">DIAGNOSTIC_OUTPUT</span>
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            </div>
                                            <div className="bg-black/40 rounded-xl p-4 border border-white/5 font-mono">
                                                <div className="flex items-start gap-2 mb-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand mt-1" />
                                                    <span className="text-[11px] text-white/90 leading-tight">[{step.output}]</span>
                                                </div>
                                                <div className="text-[10px] text-brand/60 bg-brand/5 p-2 rounded border border-brand/10">
                                                    &gt; {step.sample}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between group/link">
                                            <span className="technical-label text-white/20 text-[8px]">PROCEED_TO_LIVE</span>
                                            <div className="flex items-center gap-2 text-xs font-bold text-white/40 group-hover/link:text-brand transition-colors cursor-pointer">
                                                TRY_MODULE
                                                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </KineticCard>
                        ))}
                    </div>
                </div>

                {/* System-wide Action */}
                <div className="mt-24 text-center">
                    <div className="relative inline-block group">
                        <div className="absolute -inset-1 bg-brand blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <button className="relative px-12 py-5 bg-brand text-white font-bold rounded-2xl flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
                            <Zap className="w-5 h-5 fill-current" />
                            SECURE YOUR PIPELINE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
