'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ShieldCheck, Sparkles, Activity, Cpu, Database, Eye } from 'lucide-react';
import { BlueParticles } from '@/components/ui/blue-particles';
import { MayaVoiceWidget } from '@/components/ui/maya-voice-widget';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import mixpanel from 'mixpanel-browser';

const ConnectivityMesh = () => (
    <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
                <pattern id="hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="1.5" fill="#2563eb" fillOpacity="0.4" />
                </pattern>
                <radialGradient id="hero-mask" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />

            {/* Distant Neural Paths */}
            {[...Array(3)].map((_, i) => (
                <motion.path
                    key={i}
                    d={`M ${10 + i * 20} 0 Q ${20 + i * 30} 50 ${10 + i * 20} 100`}
                    stroke="#2563eb"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="1 10"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </svg>
    </div>
);

export function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const [isMayaSpeaking, setIsMayaSpeaking] = useState(false);
    const [isSentinelMode, setIsSentinelMode] = useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isMayaSpeaking) {
            videoRef.current.play().catch(console.error);
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to frame 1 when paused
        }
    }, [isMayaSpeaking]);

    return (
        <section ref={heroRef as React.RefObject<HTMLElement>} className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
            {/* LiveKit-inspired Connectivity Background */}
            <ConnectivityMesh />

            {/* Background Glows - Made static */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-highlight/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`flex flex-col items-start text-left max-w-2xl ${heroVisible ? 'slide-up' : 'animate-on-scroll'}`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 shadow-[0_0_15px_rgba(37,99,235,0.1)] mb-8 ${heroVisible ? 'fade-in animate-delay-100' : 'animate-on-scroll'}`}>
                        <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                        <span className="technical-label text-brand">Zero-Trust Recruitment Platform</span>
                    </div>

                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.02] tracking-tight text-white ${heroVisible ? 'slide-up animate-delay-200' : 'animate-on-scroll'}`}>
                        The #1 <span className="text-brand">AI Interview</span> <br />
                        Platform for Hiring.
                    </h1>

                    <p className={`text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl ${heroVisible ? 'slide-up animate-delay-300' : 'animate-on-scroll'}`}>
                        TalentLyt is the world's most advanced <span className="text-white font-bold">AI Interview Platform</span> for technical recruitment. Our Multi-Agent AI conducts and verifies <span className="text-white font-bold">AI Interviews</span> in real-time to ensure 100% integrity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            onClick={() => mixpanel.track('CTA_Click', { location: 'Hero', type: 'Early Access' })}
                            className="group relative px-10 py-5 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] flex items-center justify-center gap-3 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                            aria-label="Start free trial"
                        >
                            <span className="relative z-10 technical-label text-xs">Start Free Trial</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>
                        <Link
                            href="/live-demo"
                            onClick={() => mixpanel.track('CTA_Click', { location: 'Hero', type: 'Watch System' })}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background"
                            aria-label="Watch system demo"
                        >
                            <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                            Watch System
                        </Link>
                    </div>

                    {/* Sentinel Impact Alert */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-8 p-4 rounded-2xl bg-brand/5 border border-brand/20 flex items-center gap-4 max-w-md group hover:bg-brand/10 transition-all cursor-default"
                    >
                        <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand shrink-0">
                            <ShieldCheck className="w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-brand uppercase tracking-widest mb-0.5">Live Sentinel Alert</div>
                            <div className="text-sm font-semibold text-white leading-tight">
                                Detected 91% integrity failure in a live candidate audit.
                            </div>
                            <div className="text-[11px] text-text-muted mt-1">
                                Potential saved cost: <span className="text-brand font-bold">$15,000 per bad hire</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Agent Controller - Moved here from video overlay */}
                    <div className="mt-8 w-full sm:w-auto min-w-[320px]">
                        <MayaVoiceWidget
                            isPlaying={isMayaSpeaking}
                            onToggle={() => setIsMayaSpeaking(!isMayaSpeaking)}
                            isSentinelMode={isSentinelMode}
                            onToggleSentinel={() => setIsSentinelMode(!isSentinelMode)}
                        />
                    </div>

                    {/* <div
                        className="mt-12 flex items-center gap-8 sm:gap-12 border-t border-white/5 pt-8 w-full"
                        aria-label="Key metrics"
                    >
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.4%</div>
                            <div className="technical-label text-text-muted text-xs sm:text-[10px]">Verified Integrity</div>
                        </div>
                        <div className="w-px h-8 bg-white/10" aria-hidden="true" />
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5.8x</div>
                            <div className="technical-label text-text-muted text-xs sm:text-[10px]">Faster Hires</div>
                        </div>
                    </div> */}
                </div>

                {/* Hero Visual Element */}
                <div className={`relative hidden lg:block ${heroVisible ? 'slide-right animate-delay-300' : 'animate-on-scroll'}`}>
                    <div className="relative z-20 w-full aspect-square max-w-[600px] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.15)] border border-white/20 bg-card/40 backdrop-blur-md">
                        <div className="w-full h-full relative group/video">
                            <AnimatePresence>
                                {!isMayaSpeaking && (
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-10"
                                    >
                                        <Image
                                            src="/assets/maya.png"
                                            alt="Maya AI Interviewer - Leading AI Interview Platform"
                                            fill
                                            priority
                                            className="object-cover brightness-[1.1]"
                                            sizes="(max-width: 768px) 100vw, 600px"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <video
                                ref={videoRef}
                                src="https://onbadqcmbugvszb0.public.blob.vercel-storage.com/maya-speaking.mp4"
                                className="w-full h-full object-cover brightness-[1.05]"
                                playsInline
                                onEnded={() => setIsMayaSpeaking(false)}
                                preload="metadata"
                                aria-label="Maya AI interviewer demonstration"
                            />

                            {/* Forensic Sentinel HUD Overlay */}
                            {isSentinelMode && (
                                <div className="absolute inset-0 z-30 pointer-events-none">
                                    {/* SVG Gaze Vectors (Vision-Sync) */}
                                    <svg className="absolute inset-0 w-full h-full">
                                        <line
                                            x1="38%" y1="35%" x2="42%" y2="35%"
                                            stroke="#2563eb" strokeWidth="1" strokeDasharray="4 2" opacity="0.5"
                                        />
                                        <circle cx="40%" cy="35%" r="20" stroke="#2563eb" strokeWidth="0.5" fill="none" />
                                        <circle cx="60%" cy="35%" r="20" stroke="#2563eb" strokeWidth="0.5" fill="none" />
                                    </svg>

                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

                                    {/* Cognitive-Audit Reasoning Stream */}
                                    <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-1 font-mono text-[8px] text-brand/80">
                                        {['COG_AUTH: 0.998', 'SENTIMENT: NEUTRAL', 'LATENT_INTENT: VERIFIED', 'JITters: 0.002ms', 'VISION_SYNC: OK'].map((trace, i) => (
                                            <div
                                                key={i}
                                                className="bg-black/40 px-1 border-l border-brand/50"
                                            >
                                                {trace}
                                            </div>
                                        ))}
                                    </div>

                                    {/* HUD Corners */}
                                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand/40" />
                                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand/40" />
                                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand/40" />
                                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand/40" />
                                </div>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-30" />

                        {/* Floating HUD - Strictly top-right to avoid center/bottom area */}
                        <div className="absolute top-6 right-6 flex flex-col gap-3 pointer-events-none">
                            {[
                                { label: 'Integrity Scan', value: '99.8%', icon: ShieldCheck, color: 'text-brand' },
                                { label: 'Context Depth', value: 'Active', icon: Cpu, color: 'text-highlight' },
                                { label: 'Truth Index', value: 'Verified', icon: Database, color: 'text-green-500' }
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-3"
                                >
                                    <div className={`p-1.5 rounded-lg bg-white/5 ${stat.color}`}>
                                        <stat.icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="technical-label text-text-muted text-[8px] leading-none mb-1">{stat.label}</div>
                                        <div className="text-xs text-white font-bold leading-none">{stat.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Decorative Background Elements - Static */}
                    <div className="absolute -top-12 -right-12 w-80 h-80 bg-brand/10 blur-[100px] rounded-full -z-10" />
                    <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-highlight/5 blur-[100px] rounded-full -z-10" />
                </div>
            </div>

            {/* {false && (
                <div className="mt-20 w-full border-y border-white/5 py-10 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] shrink-0 text-center md:text-left">Standardizing Hiring At</span>
                        <div className="flex-1 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-label="Trusted by companies">
                            <div className="flex gap-12 md:gap-16 animate-scroll items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                                {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                    <span key={`1-${company}-${i}`} className="text-lg md:text-xl font-bold tracking-widest text-white whitespace-nowrap uppercase">{company}</span>
                                ))}
                                {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                    <span key={`2-${company}-${i}`} className="text-lg md:text-xl font-bold tracking-widest text-white whitespace-nowrap uppercase">{company}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </section>
    );
}
