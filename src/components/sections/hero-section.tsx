'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Sparkles, Activity, Cpu, Database, Eye } from 'lucide-react';
import { BlueParticles } from '@/components/ui/blue-particles';
import { MayaVoiceWidget } from '@/components/ui/maya-voice-widget';
import mixpanel from 'mixpanel-browser';

export function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const [isMayaSpeaking, setIsMayaSpeaking] = useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Smooth springs for gaze parallax
    const rotateX = useSpring(useTransform(mouseY, [-400, 400], [8, -8]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-8, 8]), { stiffness: 100, damping: 30 });

    useEffect(() => {
        if (!videoRef.current) return;

        if (isMayaSpeaking) {
            videoRef.current.play().catch(console.error);
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to frame 1 when paused
        }
    }, [isMayaSpeaking]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set(clientX - innerWidth / 2);
            mouseY.set(clientY - innerHeight / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
            <BlueParticles />

            {/* Background Glows - Made static */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-highlight/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start text-left max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 shadow-[0_0_15px_rgba(37,99,235,0.1)] mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-brand" />
                        <span className="technical-label text-brand">Next-Gen Multi-Agent AI</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.02] tracking-tight text-white"
                    >
                        Truth in Hiring. <br />
                        <span className="text-brand">Verified</span> by AI.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-lg sm:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl"
                    >
                        Every bad hire costs your team time, money, and morale. TalentLyt is the world's first **Multi-Agent** interview suite that ensures you only hire candidates who can actually do the job.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="/request-demo"
                            onClick={() => mixpanel.track('CTA_Click', { location: 'Hero', type: 'Early Access' })}
                            className="group relative px-10 py-5 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10 technical-label text-xs">Start Free Trial</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>
                        <Link
                            href="/live-demo"
                            onClick={() => mixpanel.track('CTA_Click', { location: 'Hero', type: 'Watch System' })}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            Watch System
                        </Link>
                    </motion.div>

                    {/* Interactive Agent Controller - Moved here from video overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-8 w-full sm:w-auto min-w-[320px]"
                    >
                        <MayaVoiceWidget
                            isPlaying={isMayaSpeaking}
                            onToggle={() => setIsMayaSpeaking(!isMayaSpeaking)}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex items-center gap-12 border-t border-white/5 pt-8 w-full"
                    >
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">99.4%</div>
                            <div className="technical-label text-text-muted">Verified Integrity</div>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">5.8x</div>
                            <div className="technical-label text-text-muted">Faster Hires</div>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual Element with Gaze Parallax */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ rotateX, rotateY, perspective: 1200 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-20 w-full aspect-square max-w-[600px] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.15)] border border-white/20 bg-card/40 backdrop-blur-md">
                        <div className="w-full h-full relative">
                            <video
                                ref={videoRef}
                                src="https://onbadqcmbugvszb0.public.blob.vercel-storage.com/maya-speaking.mp4"
                                poster="/assets/maya.png"
                                className="w-full h-full object-cover brightness-[1.05]"
                                playsInline
                                onEnded={() => setIsMayaSpeaking(false)}
                                preload="auto"
                            />
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
                </motion.div>
            </div>

            {/* Social Proof Bar */}
            <div className="mt-20 w-full border-y border-white/5 py-10 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] shrink-0">Standardizing Hiring At</span>
                    <div className="flex-1 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div className="flex gap-16 animate-scroll items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                <span key={`1-${company}-${i}`} className="text-xl font-bold tracking-widest text-white whitespace-nowrap uppercase">{company}</span>
                            ))}
                            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                <span key={`2-${company}-${i}`} className="text-xl font-bold tracking-widest text-white whitespace-nowrap uppercase">{company}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
