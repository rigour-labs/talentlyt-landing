'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ChevronDown, CheckCircle2, Users, Clock } from 'lucide-react';
import { MayaVoiceWidget } from '@/components/ui/maya-voice-widget';
import { CTAButton } from '@/components/ui/cta-button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { analytics } from '@/lib/analytics';

export function HeroSection() {
    const [isMayaSpeaking, setIsMayaSpeaking] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (!videoRef.current) return;

        if (isMayaSpeaking) {
            videoRef.current.play().catch(console.error);
            analytics.track({
                event: 'video_played',
                properties: {
                    video_name: 'maya-speaking',
                    location: 'hero',
                },
            });
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to frame 1 when paused
        }
    }, [isMayaSpeaking]);

    return (
        <section id="hero" ref={heroRef as React.RefObject<HTMLElement>} className="relative min-h-[90vh] flex flex-col justify-start pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-highlight/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`flex flex-col items-start text-left max-w-2xl order-2 lg:order-1 ${heroVisible ? 'slide-up' : 'animate-on-scroll'}`}>
                    <div className={`flex flex-wrap items-center gap-3 mb-8 mt-4 ${heroVisible ? 'fade-in animate-delay-100' : 'animate-on-scroll'}`}>
                        {/* Formerly TalentLyt Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="technical-label text-text-muted text-[10px]">Formerly <span className="text-white font-semibold">TalentLyt</span></span>
                        </div>

                        {/* Live Beta Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="technical-label text-green-400 font-semibold">Live Beta</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 shadow-[0_0_15px_rgba(0,102,255,0.1)]">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                            <span className="technical-label text-brand">AI-Native Interview Intelligence</span>
                        </div>
                    </div>

                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.02] tracking-tight text-white ${heroVisible ? 'slide-up animate-delay-200' : 'animate-on-scroll'}`}>
                        AI-Allowed Interviews.<br />
                        <span className="text-brand">Verified Results.</span>
                    </h1>

                    <p className={`text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed max-w-xl ${heroVisible ? 'slide-up animate-delay-300' : 'animate-on-scroll'}`}>
                        Maya runs your technical screens. You focus on culture fit. And when it comes to AI? We don&apos;t care if they used it — we care if they understood what it gave them.
                    </p>

                    {/* Quick Value Props */}
                    <div className={`flex flex-wrap gap-3 mb-8 ${heroVisible ? 'slide-up animate-delay-350' : 'animate-on-scroll'}`}>
                        {[
                            { icon: CheckCircle2, text: 'AI-allowed by default' },
                            { icon: Clock, text: '70% faster screening' },
                            { icon: Users, text: 'Integrity evidence built in' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary">
                                <item.icon className="w-3.5 h-3.5 text-brand" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        <CTAButton location="hero" />
                        <span className="text-text-muted text-sm text-center sm:text-left">
                            Free pilot included ($29 value)
                        </span>
                    </div>

                    {/* Maya Voice Widget - Push to Talk */}
                    <div className={`mt-8 w-full sm:w-auto min-w-[320px] ${heroVisible ? 'slide-up animate-delay-400' : 'animate-on-scroll'}`}>
                        <MayaVoiceWidget
                            isPlaying={isMayaSpeaking}
                            onToggle={() => setIsMayaSpeaking(!isMayaSpeaking)}
                        />
                    </div>

                    {/* Beta Stats */}
                    <div
                        className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 w-full"
                        aria-label="Beta testing metrics"
                    >
                        <div className="flex items-center gap-6 sm:gap-10">
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">6,824</div>
                                <div className="technical-label text-text-muted text-xs sm:text-[10px]">Integrity Data Points</div>
                            </div>
                            <div className="w-px h-8 bg-white/10" aria-hidden="true" />
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">41%</div>
                                <div className="technical-label text-text-muted text-xs sm:text-[10px]">Generated Deeper Evidence</div>
                            </div>
                            <div className="w-px h-8 bg-white/10 hidden sm:block" aria-hidden="true" />
                            <div className="hidden sm:block">
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">82</div>
                                <div className="technical-label text-text-muted text-xs sm:text-[10px]">Beta Interviews</div>
                            </div>
                        </div>
                        <p className="text-[10px] text-text-muted/60 max-w-md">
                            *Integrity data points include presence confidence, identity verification, and AI collaboration patterns — documented automatically across every session.
                        </p>
                    </div>
                </div>

                {/* Hero Visual - Maya Video Player */}
                <div className={`relative order-1 lg:order-2 ${heroVisible ? 'slide-right animate-delay-300' : 'animate-on-scroll'}`}>
                    <div className="relative z-20 w-full aspect-square max-w-[400px] lg:max-w-[600px] mx-auto rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.1)] lg:shadow-[0_0_80px_rgba(0,102,255,0.15)] border border-white/20 bg-card/40 backdrop-blur-md">
                        <div className="w-full h-full relative">
                            {/* Static Image (shown when not playing) */}
                            <AnimatePresence>
                                {!isMayaSpeaking && (
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-10"
                                    >
                                        <Image
                                            src="/assets/maya.jpg"
                                            alt="Maya AI interviewer conducting a live technical coding interview with real-time AI leadership verification on Rigovo AI interview platform"
                                            fill
                                            priority
                                            className="object-cover brightness-[1.1]"
                                            sizes="(max-width: 768px) 100vw, 600px"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Video (plays when Push to Talk is clicked) */}
                            <video
                                ref={videoRef}
                                src="https://onbadqcmbugvszb0.public.blob.vercel-storage.com/maya-speaking.mp4"
                                className="w-full h-full object-cover brightness-[1.05]"
                                playsInline
                                onEnded={() => setIsMayaSpeaking(false)}
                                preload="metadata"
                                aria-label="Maya AI interviewer demonstration"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-30 pointer-events-none" />

                        {/* AI Interviewer Label */}
                        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10">
                            <div className="technical-label text-text-muted text-[8px] leading-none mb-1">AI Interviewer</div>
                            <div className="text-xs text-white font-bold leading-none">Maya <span className={isMayaSpeaking ? 'text-green-400' : 'text-text-muted'}>&#x2022; {isMayaSpeaking ? 'Speaking' : 'Ready'}</span></div>
                        </div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute -top-12 -right-12 w-80 h-80 bg-brand/10 blur-[100px] rounded-full -z-10" />
                    <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-highlight/5 blur-[100px] rounded-full -z-10" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                onClick={() => {
                    document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' });
                    analytics.track({
                        event: 'scroll_indicator_clicked',
                        properties: { location: 'hero' },
                    });
                }}
            >
                <span className="text-[10px] text-text-muted uppercase tracking-widest group-hover:text-brand transition-colors">See How It Works</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-text-muted group-hover:text-brand transition-colors" />
                </motion.div>
            </motion.div>
        </section>
    );
}
