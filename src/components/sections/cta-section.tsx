'use client';

import Link from 'next/link';
import { CTAButton } from '@/components/ui/cta-button';

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
                            &ldquo;We got tired of watching great engineering teams make hiring decisions without real evidence. So we built an interview process that produces it automatically.&rdquo;
                        </p>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-white leading-[0.9] text-center">
                            Your team. <br />
                            Your <span className="text-brand">evidence layer.</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto text-center opacity-70">
                            Every interview should produce integrity evidence, not just vibes. <span className="text-white font-bold">Let Maya handle it</span> — you focus on finding the right fit.
                        </p>

                        <div className="flex flex-col items-center gap-6 mb-16">
                            <CTAButton location="bottom_cta" className="px-12 py-6 text-lg" />
                            <p className="text-text-muted text-sm">
                                Free pilot included — get your coupon on the call
                            </p>
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
