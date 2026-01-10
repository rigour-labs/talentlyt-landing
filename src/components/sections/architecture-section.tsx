'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Bot, Shield, Fingerprint, Mic2, Database, Activity, ShieldCheck, Cpu, Zap, Lock, Search, Sparkles } from 'lucide-react';

const SignalPath = ({ startRef, endRef, active, color = "#2563eb" }: { startRef: React.RefObject<HTMLDivElement | null>, endRef: React.RefObject<HTMLDivElement | null>, active: boolean, color?: string }) => {
    const [path, setPath] = useState("");

    useEffect(() => {
        const updatePath = () => {
            if (!startRef.current || !endRef.current) return;
            const startRect = startRef.current.getBoundingClientRect();
            const endRect = endRef.current.getBoundingClientRect();
            const parentRect = startRef.current.closest('.grid')?.getBoundingClientRect();

            if (!parentRect) return;

            const x1 = startRect.left + startRect.width - parentRect.left;
            const y1 = startRect.top + startRect.height / 3 - parentRect.top;
            const x2 = endRect.left - parentRect.left;
            const y2 = endRect.top + endRect.height / 3 - parentRect.top;

            const midX = x1 + (x2 - x1) * 0.5;
            setPath(`M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`);
        };

        const timer = setTimeout(updatePath, 500);
        window.addEventListener('resize', updatePath);
        return () => {
            window.removeEventListener('resize', updatePath);
            clearTimeout(timer);
        };
    }, [active]);

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block overflow-visible">
            <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeOpacity="0.05"
            />
            {active && (
                <React.Fragment>
                    {/* The Packet Visual */}
                    <circle r="4" fill={color} filter="url(#neon-glow)">
                        <animateMotion dur="4s" repeatCount="Infinity" path={path} />
                    </circle>

                    {/* The Trail */}
                    <path
                        d={path}
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        strokeDasharray="40, 400"
                        className="opacity-40"
                    />
                </React.Fragment>
            )}
        </svg>
    );
};

const NeuralCore = () => (
    <div className="relative w-full h-full flex items-center justify-center bg-brand/5 overflow-hidden">
        {/* Holographic Mesh */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] bg-[size:24px_24px]" />

        {/* 3D Rotating Rings */}
        {[1, 2, 3].map((ring) => (
            <motion.div
                key={ring}
                className="absolute border border-brand/30 rounded-full"
                style={{
                    width: `${ring * 65}px`,
                    height: `${ring * 65}px`,
                    perspective: '1000px'
                }}
                animate={{
                    rotate: ring % 2 === 0 ? 360 : -360,
                    scale: [1, 1.02, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    rotate: { duration: 8 + ring * 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <div className={`absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-brand shadow-[0_0_15px_#2563eb]`} />
                {ring === 2 && <div className={`absolute bottom-0 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]`} />}
            </motion.div>
        ))}

        {/* Central Intelligence Unit */}
        <div className="relative z-10 w-20 h-20 rounded-full bg-brand/40 flex items-center justify-center backdrop-blur-xl border border-brand/50 shadow-[0_0_60px_rgba(37,99,235,0.4)]">
            <Shield className="w-10 h-10 text-white" />

            {/* Inner Glitch Effect */}
            <div className="absolute inset-0 bg-brand/20 rounded-full" />
        </div>

        {/* Neural Network Nodes */}
        {[...Array(8)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-500 rounded-full opacity-30"
            />
        ))}
    </div>
);

export function ArchitectureSection() {
    const [mounted, setMounted] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const agents = [
        {
            id: 'maya',
            ref: card1Ref,
            name: "Conversational Sentinel",
            role: "MAYA - LEAD AUDITOR",
            tag: "Voice & Behavioral Analysis",
            icon: Bot,
            color: "brand",
            image: "/assets/maya.png",
            features: [
                { icon: Mic2, text: "Nova-grade Voice Auth" },
                { icon: Activity, text: "Micro-expression Gaze Sync" },
                { icon: ShieldCheck, text: "Behavioral Fingerprinting" }
            ]
        },
        {
            id: 'nemo',
            ref: card2Ref,
            name: "Security Sentinel",
            role: "NEURAL FIREWALL",
            tag: "Interaction Integrity",
            icon: Shield,
            color: "brand",
            visual: "neural",
            features: [
                { icon: Lock, text: "Jailbreak Defense" },
                { icon: Zap, text: "Off-Topic Filtering" },
                { icon: Database, text: "RAG Verification" }
            ]
        },
        {
            id: 'audit',
            ref: card3Ref,
            name: "Forensic Truth Engine",
            role: "COGNITIVE-AUDIT + VISION-SYNC",
            tag: "Cognitive & Motion Trace Audit",
            icon: Fingerprint,
            color: "warning",
            image: "/assets/governor.jpg",
            features: [
                { icon: Search, text: "Reasoning Trace Analysis" },
                { icon: Cpu, text: "Vision-Sync Predictive" },
                { icon: Database, text: "Defensible Audit Trails" }
            ]
        }
    ];

    if (!mounted) return null;

    return (
        <section id="architecture" className="relative py-32 px-4 sm:px-6 overflow-hidden bg-black" ref={sectionRef}>
            {/* Space-like Background Depths */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1.5px,transparent_1.5px),linear-gradient(to_bottom,#1e293b_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-radial-gradient from-brand/10 via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand/10 border border-brand/30 mb-8 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                    >
                        <Shield className="w-4 h-4 text-brand" />
                        <span className="technical-label text-[10px] text-brand tracking-[0.2em]">Consensus Audit Protocol v4.0</span>
                    </motion.div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        The <span className="text-brand">Sentinel</span> Hierarchy
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium">
                        A decentralized multi-agent network ensuring continuous technical verification through sub-millisecond consensus.
                    </p>
                </header>

                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Animated Connection Lines with Neon Flow */}
                    <SignalPath startRef={card1Ref} endRef={card2Ref} active={isInView} />
                    <SignalPath startRef={card2Ref} endRef={card3Ref} active={isInView} />

                    {agents.map((agent, i) => (
                        <motion.div
                            key={agent.id}
                            ref={agent.ref}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, type: "spring", stiffness: 50 }}
                            whileHover={{ y: -12, scale: 1.01 }}
                            className={`relative group p-7 rounded-[3rem] bg-card/30 border border-white/5 backdrop-blur-3xl transition-all duration-700 overflow-hidden`}
                        >
                            {/* Macro-Pulse Aura on Global Consensus */}
                            {isInView && (
                                <motion.div
                                    animate={{
                                        opacity: [0, 0.4, 0],
                                        boxShadow: [
                                            `0 0 0 0px ${agent.color === 'warning' ? 'rgba(245,158,11,0)' : 'rgba(37,99,235,0)'}`,
                                            `0 0 40px 10px ${agent.color === 'warning' ? 'rgba(245,158,11,0.2)' : 'rgba(37,99,235,0.2)'}`,
                                            `0 0 0 0px ${agent.color === 'warning' ? 'rgba(245,158,11,0)' : 'rgba(37,99,235,0)'}`
                                        ]
                                    }}
                                    transition={{ repeat: Infinity, duration: 4, delay: i * 1.3, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-[3rem] pointer-events-none border-2 border-brand/5"
                                />
                            )}

                            <div className="relative z-10">
                                {/* Agent Identity */}
                                <div className="flex items-center gap-5 mb-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-${agent.color}/10 border border-${agent.color}/20 flex items-center justify-center text-${agent.color} group-hover:bg-${agent.color}/20 transition-colors shadow-2xl`}>
                                        <agent.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white leading-tight transition-colors group-hover:text-brand">{agent.name}</h3>
                                        <div className={`text-[10px] font-bold text-${agent.color} uppercase tracking-[0.25em] mb-1`}>{agent.role}</div>
                                    </div>
                                </div>

                                {/* Visual Verification Surface */}
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-10 border border-white/10 bg-black/60 shadow-2xl group/visual">
                                    {agent.visual === 'neural' ? (
                                        <NeuralCore />
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <img
                                                src={agent.image}
                                                alt={agent.name}
                                                className={`w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110 ${agent.id === 'audit' ? 'grayscale brightness-75' : 'brightness-[1.1]'}`}
                                            />

                                            {/* Technical HUD Layer */}
                                            <div className="absolute inset-0 pointer-events-none z-20">
                                                {/* Corner Sights */}
                                                <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/30" />
                                                <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/30" />

                                                {/* Scanning Horizon */}
                                                <motion.div
                                                    animate={{ top: ['0%', '100%', '0%'] }}
                                                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                                    className={`absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-${agent.color === 'warning' ? 'warning' : 'brand'} to-transparent opacity-60 shadow-[0_0_15px_rgba(37,99,235,0.8)]`}
                                                />

                                                {/* Data Overlays */}
                                                {agent.id === 'maya' && (
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                                            className="w-40 h-40 border-[0.5px] border-dashed border-brand/40 rounded-full"
                                                        />
                                                    </div>
                                                )}

                                                {agent.id === 'audit' && (
                                                    <div className="absolute bottom-8 right-8 font-mono text-[8px] text-warning/80 space-y-1.5 bg-black/40 p-2 backdrop-blur-md rounded-lg border border-warning/20">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 bg-warning rounded-full animate-pulse" />
                                                            <span>VISION_SYNC_PREDICT: OK</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                                            <span>COGNITIVE_AUDIT: 0.99</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />

                                    {/* Real-time Telemetry Tag */}
                                    <div className="absolute top-6 right-6 z-30">
                                        <div className="px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl flex items-center gap-2.5">
                                            <Sparkles className={`w-3 h-3 text-${agent.color}`} />
                                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{agent.id === 'audit' ? 'Auditing' : 'Sentinel Active'}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability Matrix */}
                                <div className="space-y-3">
                                    <div className="text-[10px] technical-label text-text-muted mb-4 px-2 uppercase tracking-[0.2em]">Verification Pipeline</div>
                                    {agent.features.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4 items-center group/item p-3.5 rounded-2xl hover:bg-brand/5 transition-all duration-300 border border-transparent hover:border-brand/10">
                                            <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-text-muted group-hover/item:text-brand group-hover/item:border-brand/30 transition-all shadow-lg`}>
                                                <feature.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white group-hover/item:translate-x-1 transition-transform">{feature.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Consensus Integration Bar */}
                <div className="mt-20 p-12 rounded-[4rem] bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(0,0,0,0))] border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb05_0%,transparent_50%29]" />

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <div className="inline-flex items-center gap-3 mb-6 text-brand">
                            <Activity className="w-5 h-5 animate-pulse" />
                            <span className="technical-label text-[11px] uppercase tracking-[0.3em]">Protocol Consensus Verified</span>
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-5 tracking-tight">Decentralized Trust Network</h4>
                        <p className="text-base text-white/50 leading-relaxed font-medium">
                            The TalentLyt protocol demands a cryptographically signed consensus between Conversational, Security, and Forensic Sentinels. Zero hallucinations, 100% technical truth.
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-10 shrink-0 bg-black/40 p-10 rounded-[3rem] border border-white/5 backdrop-blur-xl">
                        <div className="text-right">
                            <div className="text-5xl font-bold mb-2 tabular-nums">
                                0.8ms
                            </div>
                            <div className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">Consensus Lag</div>
                        </div>
                        <div className="w-px h-16 bg-white/10" />
                        <div className="text-left">
                            <div className="text-5xl font-bold text-brand mb-2 tabular-nums">100%</div>
                            <div className="text-[10px] text-brand font-bold uppercase tracking-[0.2em]">Authenticity</div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
