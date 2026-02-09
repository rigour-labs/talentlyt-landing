'use client';

import React from 'react';
// Link removed - using direct Calendly link
import { ArrowRight, ShieldCheck, Globe, CheckCircle2, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { analytics } from '@/lib/analytics';
import Image from 'next/image';

export function UAEHeroSection() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="hero" ref={heroRef as React.RefObject<HTMLElement>} className="relative min-h-[90vh] flex flex-col justify-start pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className={`flex flex-col items-center text-center max-w-4xl mx-auto ${heroVisible ? 'slide-up' : 'animate-on-scroll'}`}>
                    {/* UAE-specific badges */}
                    <div className={`flex flex-wrap items-center justify-center gap-3 mb-8 ${heroVisible ? 'fade-in animate-delay-100' : 'animate-on-scroll'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                            <Globe className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-semibold text-emerald-400">Built for UAE & MENA</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
                            <ShieldCheck className="w-4 h-4 text-brand" />
                            <span className="text-sm font-semibold text-brand">Remote Candidate Verification</span>
                        </div>
                    </div>

                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight text-white ${heroVisible ? 'slide-up animate-delay-200' : 'animate-on-scroll'}`}>
                        Hire Remote Engineers<br />
                        <span className="text-brand">With Confidence</span>
                    </h1>

                    <p className={`text-lg sm:text-xl text-text-secondary mb-6 leading-relaxed max-w-2xl ${heroVisible ? 'slide-up animate-delay-300' : 'animate-on-scroll'}`}>
                        UAE startups and recruitment agencies trust Rigovo to verify remote tech candidates across MENA.
                        Our AI interviewer Maya screens candidates while you focus on finding the right fit.
                    </p>

                    {/* UAE-specific value props */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-10 ${heroVisible ? 'slide-up animate-delay-350' : 'animate-on-scroll'}`}>
                        {[
                            { icon: CheckCircle2, text: 'Screen candidates 24/7' },
                            { icon: ShieldCheck, text: '12% fraud detection rate' },
                            { icon: Building2, text: 'Trusted by UAE agencies' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary">
                                <item.icon className="w-4 h-4 text-brand" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Primary CTA */}
                    <div className={`flex flex-col items-center gap-4 ${heroVisible ? 'slide-up animate-delay-400' : 'animate-on-scroll'}`}>
                        <a
                            href="https://calendly.com/rigovo"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => analytics.track({
                                event: 'cta_clicked',
                                properties: {
                                    location: 'hero',
                                    cta_type: 'book_pilot_call',
                                    cta_text: 'Book 15-min Pilot Call',
                                    destination_url: 'https://calendly.com/rigovo',
                                },
                            })}
                            className="group relative px-12 py-5 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_50px_rgba(0,102,255,0.5)] flex items-center justify-center gap-3 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                            aria-label="Book a 15-minute pilot setup call"
                        >
                            <span className="relative z-10 technical-label text-sm">Book 15-min Pilot Call</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </a>
                        <p className="text-text-muted text-sm">
                            Free pilot included — 90 minutes of AI interviews
                        </p>
                    </div>

                    {/* Hero Visual */}
                    <div className={`mt-16 relative w-full max-w-4xl ${heroVisible ? 'slide-up animate-delay-500' : 'animate-on-scroll'}`}>
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-card/30 backdrop-blur-md shadow-2xl">
                            <Image
                                src="/assets/maya.jpg"
                                alt="Maya AI interviewer conducting technical screening for UAE hiring teams"
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                            {/* Overlay Stats - Real Beta Data */}
                            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                                {[
                                    { value: '6,824', label: 'Signal events analyzed' },
                                    { value: '41%', label: 'Flagged for deeper review' },
                                    { value: '15', label: 'Verification signals' },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center px-4 py-3 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10">
                                        <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                                        <div className="text-[10px] text-text-muted uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-8 -right-8 w-48 h-48 bg-brand/20 blur-[80px] rounded-full -z-10" />
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
