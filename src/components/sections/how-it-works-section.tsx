'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Clock, ArrowRight, CheckCircle2, Zap, Cpu, MousePointer2, ShieldCheck, Activity, Search, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 30);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

const ForensicVisual = ({ stepIndex }: { stepIndex: number }) => {
    if (stepIndex === 0) {
        return (
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5">
                        <animate attributeName="y1" values="20;80;20" dur="4s" repeatCount="Infinity" />
                        <animate attributeName="y2" values="20;80;20" dur="4s" repeatCount="Infinity" />
                    </line>
                    <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
                    {[...Array(15)].map((_, i) => (
                        <circle key={i} cx={Math.random() * 80 + 10} cy={Math.random() * 80 + 10} r="0.5" fill="currentColor">
                            <animate attributeName="opacity" values="0;1;0" dur={`${2 + Math.random() * 2}s`} begin={`${Math.random() * 2}s`} repeatCount="Infinity" />
                        </circle>
                    ))}
                </svg>
            </div>
        );
    }
    if (stepIndex === 1) {
        return (
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4">
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="Infinity" />
                    </circle>
                    {[...Array(12)].map((_, i) => (
                        <rect key={i} x="50" y="48" width="15" height="4" fill="currentColor" transform={`rotate(${i * 30} 50 50)`}>
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" begin={`${i * 0.125}s`} repeatCount="Infinity" />
                        </rect>
                    ))}
                </svg>
            </div>
        );
    }
    return (
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand">
                <path d="M 20 50 L 45 75 L 80 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" />
                </path>
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
                    <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="Infinity" />
                </circle>
            </svg>
        </div>
    );
};

function KineticCard({ children, index }: { children: React.ReactNode; index: number }) {
    const [transform, setTransform] = useState({ x: 0, y: 0 });
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 12;
        const yPct = (mouseY / height - 0.5) * 12;
        setTransform({ x: xPct, y: yPct });
    };

    const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0 });
    };

    const rotateY = transform.x * 5;
    const rotateX = -transform.y * 5;

    return (
        <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformStyle: "preserve-3d",
                transition: 'transform 0.1s ease-out',
            }}
            className="relative group h-full"
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
        </motion.div>
    );
}

export function HowItWorksSection() {
    const sectionRef = useRef(null);

    const steps = [
        {
            title: 'Recognize & Verify',
            description: 'Secure, unique session links with automated biometric recognition and identity pre-check.',
            time: '30s SETUP',
            output: 'RECOGNITION_ACTIVE',
            sample: 'https://talentlyt.cloud/envoy/x72-99',
            icon: MousePointer2
        },
        {
            title: 'Conduct Interview',
            description: 'Maya engages while Governor audits. Continuous candidate recognition ensuring session focus and integrity.',
            time: 'LIVE_ENGINE',
            output: 'RECOGNITION_CONSENSUS',
            sample: 'Audit_Heartbeat: 120Hz',
            icon: Cpu
        },
        {
            title: 'Legal-Advisor Review',
            description: 'Instant forensic reports with full code playback and legally-defensible truth mapping.',
            time: 'INSTANT_AUDIT',
            output: 'REPORT_FINALIZED',
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
                    <div className="hidden lg:block absolute top-[135px] left-[15%] right-[15%] h-[1px] bg-white/5 overflow-hidden">
                        {[0, 1.5, 3].map((delay) => (
                            <motion.div
                                key={delay}
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{ duration: 3, repeat: Infinity, delay: delay, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-brand/40 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <KineticCard key={index} index={index}>
                                <div className="h-full bg-white/[0.015] backdrop-blur-[40px] border border-white/10 rounded-[2.5rem] p-10 flex flex-col group/card hover:bg-white/[0.03] transition-all duration-700 relative overflow-hidden">
                                    <ForensicVisual stepIndex={index} />

                                    {/* Orbital Step Number */}
                                    <div className="mb-12 relative w-fit">
                                        <div className="w-16 h-16 rounded-full bg-black border border-brand/50 flex items-center justify-center text-xl font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.2)] relative z-10 group-hover/card:border-brand transition-colors duration-500">
                                            {index + 1}
                                        </div>
                                        {/* Rotating Tech Ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute -inset-3 border border-brand/10 rounded-full border-dashed"
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className="absolute -inset-5 border border-cyan-500/5 rounded-full border-dashed scale-75"
                                        />
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
                                            <div className="bg-black/60 rounded-xl p-4 border border-white/5 font-mono shadow-inner group-hover/card:border-brand/20 transition-colors">
                                                <div className="flex items-start gap-2 mb-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand mt-1" />
                                                    <span className="text-[11px] text-white/90 leading-tight">[{step.output}]</span>
                                                </div>
                                                <div className="text-[10px] text-brand/60 bg-brand/5 p-2 rounded border border-brand/5 border-l-brand/30 border-l-2">
                                                    &gt; <TypingText text={step.sample} delay={1000 + index * 500} />
                                                    <motion.span
                                                        animate={{ opacity: [1, 0, 1] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                        className="inline-block w-1 h-3 bg-brand/40 ml-1 translate-y-0.5"
                                                    />
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
