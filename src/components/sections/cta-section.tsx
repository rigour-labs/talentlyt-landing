'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';

export function CTASection() {

    return (
        <section id="final-cta" className="px-4 sm:px-6 py-24 sm:py-32 bg-[#030303] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 sm:p-20 md:p-24 overflow-hidden group shadow-2xl">

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Mission Quote */}
                        <p className="text-sm text-text-secondary italic mb-10 max-w-xl text-center">
                            &ldquo;We got tired of watching great engineering teams waste weeks on screening calls. So we built something to handle that part for them.&rdquo;
                        </p>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-white leading-[0.9] text-center">
                            Your team. <br />
                            Your <span className="text-brand">AI Co-Pilot.</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto text-center opacity-70">
                            Stop spending your best engineers&apos; time on screening calls. <span className="text-white font-bold">Let Maya handle it</span> — you focus on finding the right fit.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-16">
                            <div>
                                <Link
                                    href="/request-demo"
                                    onClick={() => analytics.track({
                                        event: 'cta_clicked',
                                        properties: {
                                            location: 'bottom_cta',
                                            cta_type: 'start_trial',
                                            cta_text: 'Start Free Trial',
                                            destination_url: '/request-demo',
                                        },
                                    })}
                                    className="group relative px-10 py-5 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_50px_rgba(0,102,255,0.5)] flex items-center justify-center gap-3 overflow-hidden text-lg focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                                    aria-label="Start free trial"
                                >
                                    <span className="relative z-10 technical-label text-xs">Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </Link>
                            </div>
                            <Link
                                href="/live-demo"
                                onClick={() => analytics.track({
                                    event: 'cta_clicked',
                                    properties: {
                                        location: 'bottom_cta',
                                        cta_type: 'watch_demo',
                                        cta_text: 'Live Demo',
                                        destination_url: '/live-demo',
                                    },
                                })}
                                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md technical-label text-xs focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background text-center"
                                aria-label="Try live demo"
                            >
                                Live Demo
                            </Link>
                        </div>


                        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-[9px] text-white/60 uppercase tracking-[0.3em]">
                            <span className="technical-label text-white/80">PRIVACY FIRST</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="technical-label text-white/80">SETUP IN 5MIN</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="technical-label text-white/80">ENTERPRISE READY</span>
                        </div>

                        {/* Legal Disclaimer */}
                        <div className="mt-16 text-xs text-slate-400 max-w-3xl mx-auto space-y-2 text-center leading-relaxed">
                            <p>
                                You make the hiring decisions. We just make sure you have the right information when you do.
                            </p>
                            <p>
                                For more information on how we handle biometric and behavioral data, see our <Link href="/privacy" className="underline text-slate-300 hover:text-white transition-colors">Privacy Policy</Link> and <Link href="/ethics" className="underline text-slate-300 hover:text-white transition-colors">AI Ethics Disclosure</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
