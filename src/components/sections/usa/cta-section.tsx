'use client';

import React from 'react';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { analytics } from '@/lib/analytics';

export function USACTASection() {
    return (
        <section id="cta" className="px-4 sm:px-6 py-24 sm:py-32 bg-[#030303] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="relative bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 sm:p-16 overflow-hidden text-center">
                    {/* Decorative top border */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-8">
                        <Calendar className="w-4 h-4" />
                        Limited US Pilot Spots
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white leading-[0.95]">
                        Raise Your<br />
                        <span className="text-brand">Technical Bar.</span>
                    </h2>

                    <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
                        See how Rigovo catches what your current process misses.
                        Book a 15-minute call — free pilot included with 90 minutes of verified AI interviews.
                    </p>

                    <div className="flex flex-col items-center gap-6 mb-12">
                        <a
                            href="https://calendly.com/rigovo"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => analytics.track({
                                event: 'cta_clicked',
                                properties: {
                                    location: 'bottom_cta',
                                    cta_type: 'book_pilot_call',
                                    cta_text: 'Start Your Free Pilot',
                                    destination_url: 'https://calendly.com/rigovo',
                                },
                            })}
                            className="group relative px-12 py-6 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_50px_rgba(0,102,255,0.5)] flex items-center justify-center gap-3 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                        >
                            <span className="relative z-10 technical-label text-sm">Start Your Free Pilot</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </a>
                        <p className="text-text-muted text-sm">
                            No commitment — see verified results in your first week
                        </p>
                    </div>

                    {/* Trust indicators — US-specific */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/5">
                        {['SOC2 Type II', 'EEOC Compliant', 'Privacy First', 'Enterprise Ready'].map((badge) => (
                            <div key={badge} className="flex items-center gap-2 text-xs text-text-muted">
                                <ShieldCheck className="w-4 h-4 text-brand" />
                                <span className="uppercase tracking-widest font-bold">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* US pricing note */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-text-muted">
                        USD billing. Volume discounts available for enterprise. Contact sales@rigovo.com for custom plans.
                    </p>
                </div>
            </div>
        </section>
    );
}
