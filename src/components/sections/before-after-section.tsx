'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Video, FileText, AlertTriangle,
    ShieldCheck, Zap, Brain, Mic2,
    Layers, Activity, Cpu, Sparkles,
    ArrowRight, Lock, Unlock, Globe,
    Search, CheckCircle2, XCircle
} from 'lucide-react';
import Image from 'next/image';

const LegacyCard = ({ icon: Icon, title, status, color = "danger" }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-3 backdrop-blur-sm"
    >
        <div className={`w-12 h-12 rounded-xl bg-${color}/10 border border-${color}/20 flex items-center justify-center text-${color}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <div className="text-xs font-bold text-white mb-1 uppercase tracking-wider">{title}</div>
            <div className={`text-[10px] font-mono text-${color}/80 uppercase tracking-widest`}>{status}</div>
        </div>
    </motion.div>
);

const RigovoProductView = () => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Main Product Mockup Container */}
        <div className="relative w-full max-w-5xl aspect-[16/10] rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black group will-change-transform">
            {/* The Real Unified Interview Interface */}
            <div className="absolute inset-0">
                <Image
                    src="https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-localhost-3000-interview-cmk9zk46300008p1t9fhlvbcs-2026-01-11-22_38_58.png"
                    alt="Rigovo Unified Interview Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Maya AI Intelligence Overlay - Using backdrop-blur sparingly */}
            <div className="absolute top-6 right-6 w-56 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl z-30">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center overflow-hidden">
                        <Image src="/assets/maya.jpg" alt="Maya AI Interview Co-Pilot - Technical Screening Assistant" width={40} height={40} className="object-cover" />
                    </div>
                    <div>
                        <div className="text-[10px] font-black text-white uppercase tracking-widest">Maya AI</div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                            <span className="text-[9px] font-mono text-brand font-bold uppercase">Probing Active</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-brand"
                            animate={{ width: ["20%", "80%", "40%", "90%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <p className="text-[9px] font-mono text-white/60 leading-tight italic">
                        "Detecting depth in architectural trade-offs..."
                    </p>
                </div>
            </div>

            {/* Integrity Synthesis Snippet */}
            <div className="absolute bottom-6 left-6 w-64 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl z-30">
                <div className="text-[9px] font-black text-brand uppercase tracking-widest mb-3">Integrity Sentinel</div>
                <div className="space-y-2.5">
                    {[
                        { label: "ID Verification", status: "Verified", color: "text-brand" },
                        { label: "Voice Print", status: "Matching", color: "text-brand" },
                        { label: "Code Origin", status: "Original", color: "text-brand" }
                    ].map((sig, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <span className="text-[9px] text-white/50">{sig.label}</span>
                            <span className={`text-[9px] font-bold ${sig.color} uppercase`}>{sig.status}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glass Highlights */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2rem] z-40" />
        </div>

        {/* Optimized Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden sm:visible invisible">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] opacity-[0.07]"
                style={{
                    background: 'radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 60%)'
                }}
            />
        </div>
    </div>
);

export function BeforeAfterSection() {
    const [state, setState] = useState<'before' | 'after'>('after');

    return (
        <section id="before-after-section" className="py-24 sm:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
            {/* Optimized Background Aesthetics - Reduced Blur Radius */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[80px] transition-all duration-1000 ${state === 'before' ? 'bg-danger/5' : 'bg-brand/10'}`} />
                <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] transition-all duration-1000 ${state === 'before' ? 'bg-warning/5' : 'bg-cyan-500/10'}`} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Layers className="w-4 h-4 text-brand" />
                        <span className="technical-label text-[10px] text-white/60 tracking-[0.2em] uppercase">Market Diagnostic v2.0</span>
                    </motion.div>

                    <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                        From <span className={state === 'before' ? 'text-danger' : 'text-text-muted transition-colors'}>Chaos</span> to <span className={state === 'after' ? 'text-brand' : 'text-text-muted transition-colors'}>Intelligence</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        {state === 'before'
                            ? "Fragmented tools, siloed data, and manual audits create hidden costs and integrity leaks."
                            : "A unified neural stack that automates verification, scoring, and predictive hiring."
                        }
                    </p>
                </header>

                {/* Control Toggle */}
                <div className="flex justify-center mb-20">
                    <div className="relative p-1.5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-1">
                        <motion.div
                            className="absolute inset-1.5 bg-brand rounded-xl z-0"
                            animate={{
                                x: state === 'before' ? 0 : '100%',
                                backgroundColor: state === 'before' ? '#fb7185' : '#0066FF'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ width: 'calc(50% - 6px)' }}
                        />
                        <button
                            onClick={() => setState('before')}
                            className={`relative z-10 px-8 py-3 text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${state === 'before' ? 'text-white' : 'text-text-muted'}`}
                        >
                            <AlertTriangle className="w-4 h-4" />
                            Legacy Friction
                        </button>
                        <button
                            onClick={() => setState('after')}
                            className={`relative z-10 px-8 py-3 text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${state === 'after' ? 'text-white' : 'text-text-muted'}`}
                        >
                            <ShieldCheck className="w-4 h-4" />
                            Rigovo Unified
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative aspect-square rounded-[3rem] bg-white/[0.02] border border-white/5 group flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {state === 'before' ? (
                                <motion.div
                                    key="before"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="absolute inset-0 p-12 flex flex-col items-center justify-center gap-8"
                                >
                                    {/* Legacy Mesh - Fragmented Lines */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fb7185_1px,transparent_1px)] bg-[size:32px_32px]" />

                                    <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                                        <LegacyCard icon={Calendar} title="Scheduling" status="Disconnected" />
                                        <LegacyCard icon={Video} title="Interviews" status="Unverified" />
                                        <LegacyCard icon={FileText} title="Reviews" status="Subjective" />
                                        <LegacyCard icon={AlertTriangle} title="Integrity" status="Compromised" />
                                    </div>

                                    {/* Chaos Lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                        <path d="M 50 50 Q 150 150 50 250" stroke="#fb7185" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                                        <path d="M 350 50 Q 250 150 350 250" stroke="#fb7185" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                                    </svg>

                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white mb-2 italic">"$15k Loss Per Bad Hire"</div>
                                        <div className="text-[10px] text-danger font-bold uppercase tracking-widest">Market Standard Leakage</div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="after"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-8"
                                >
                                    <RigovoProductView />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-10">
                        <AnimatePresence mode="wait">
                            {state === 'before' ? (
                                <motion.div
                                    key="content-before"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">The Legacy Bottleneck</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            Recruiters are forced to juggle disconnected tools. Assessment data is lost between Zoom calls and spreadsheets, leading to subjective decisions and high "bad hire" risk.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { icon: XCircle, title: "Identity Fragmentation", text: "Security leaks in legacy video tools." },
                                            { icon: XCircle, title: "Manual Review Burn", text: "8+ hours spent per candidate audit." },
                                            { icon: XCircle, title: "Bias Escalation", text: "Non-standardized scoring methods." }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-danger/5 border border-danger/10">
                                                <item.icon className="w-5 h-5 text-danger shrink-0 border border-danger/20 rounded-md p-1" />
                                                <div>
                                                    <div className="text-sm font-bold text-white mb-1 uppercase tracking-wide">{item.title}</div>
                                                    <p className="text-xs text-text-muted">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="content-after"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Unified Intelligence</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            One platform that owns the entire lifecycle. From identity verification to technical probing with Maya, every signal is cross-referenced and signed.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { icon: CheckCircle2, title: "Consensus Verification", text: "Multi-agent truth audit protocol." },
                                            { icon: CheckCircle2, title: "Maya Live Probing", text: "Real-time adaptive technical deep-dives." },
                                            { icon: CheckCircle2, title: "Predictive Genome", text: "Success forecasting based on verifiable truth." }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-brand/5 border border-brand/10">
                                                <item.icon className="w-5 h-5 text-brand shrink-0 border border-brand/20 rounded-md p-1" />
                                                <div>
                                                    <div className="text-sm font-bold text-white mb-1 uppercase tracking-wide">{item.title}</div>
                                                    <p className="text-xs text-text-muted">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6">
                                        <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand text-white font-bold hover:bg-brand-hover transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)]">
                                            Upgrade Your Pipeline
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div >
                </div >
            </div >
        </section >
    );
}
