'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import mixpanel from 'mixpanel-browser';

export function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="px-4 sm:px-6 py-24 sm:py-32 bg-[#030303] relative overflow-hidden" ref={ref}>
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 sm:p-20 md:p-24 overflow-hidden group shadow-2xl"
                >
                    {/* Inner Glass Reflective Beam */}
                    <motion.div
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Urgency Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-10"
                        >
                            <span className="technical-label text-[10px] text-brand">
                                [Operational_Status: Scalable]
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-white leading-[0.9] text-center"
                        >
                            Hire with confidence. <br />
                            <span className="text-brand">Build better teams.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto text-center opacity-70"
                        >
                            Transform your technical hiring process with AI-powered integrity verification and automated assessments grounded in technical truth.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/request-demo"
                                    onClick={() => mixpanel.track('CTA_Click', { location: 'Bottom CTA', type: 'Start Trial' })}
                                    className="group relative px-10 py-5 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 overflow-hidden text-lg"
                                >
                                    <span className="relative z-10 technical-label text-xs">Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </Link>
                            </motion.div>
                            <Link
                                href="/live-demo"
                                onClick={() => mixpanel.track('CTA_Click', { location: 'Bottom CTA', type: 'Watch Demo' })}
                                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md technical-label text-xs"
                            >
                                Watch Demo
                            </Link>
                        </div>

                        {/* Risk Reduction Elements */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-4xl border-t border-white/5 pt-16">
                            {[
                                { label: "14-day free trial", id: "01" },
                                { label: "No credit card required", id: "02" },
                                { label: "Cancel anytime", id: "03" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand/50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-brand" />
                                    </div>
                                    <span className="technical-label text-[12px] font-bold text-white group-hover:text-brand transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social Proof */}
                        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-[9px] text-white/60 uppercase tracking-[0.3em]">
                            <span className="technical-label text-white/80">GDPR COMPLIANT</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="technical-label text-white/80">SETUP IN 5MIN</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="technical-label text-white/80">ENTERPRISE READY</span>
                        </div>

                        {/* Legal Disclaimer */}
                        <div className="mt-16 text-[9px] text-white/40 max-w-3xl mx-auto space-y-2 text-center font-mono uppercase tracking-wider">
                            <p>
                                * BY USING TALENTLYT, YOU ACKNOWLEDGE THAT OUR AI AGENTS PROVIDE ASSESSMENT SUPPORT BASED ON OBSERVABLE METRICS. TALENTLYT IS NOT A SUBSTITUTE FOR HUMAN JUDGMENT.
                            </p>
                            <p>
                                FOR MORE INFORMATION ON HOW WE HANDLE BIOMETRIC AND BEHAVIORAL DATA, SEE OUR <Link href="/privacy" className="underline hover:text-white/60 transition-colors">PRIVACY POLICY</Link> AND <Link href="/ethics" className="underline hover:text-white/60 transition-colors">AI ETHICS DISCLOSURE</Link>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
