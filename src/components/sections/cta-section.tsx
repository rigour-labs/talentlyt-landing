'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="px-6 py-24 bg-background" ref={ref}>
            <div className="max-w-5xl mx-auto bg-muted rounded-3xl p-12 md:p-20 text-center text-foreground relative overflow-hidden border border-border">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    {/* Urgency Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6"
                    >
                        <span className="text-sm text-primary">
                            Join 200+ companies already using TalentLyt
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-5xl mb-4 tracking-tight text-foreground"
                    >
                        Stop hiring cheaters. Start hiring confidently.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-text-secondary mb-8 max-w-xl mx-auto"
                    >
                        Transform your technical hiring process with AI-powered integrity verification and automated assessments.
                    </motion.p>

                    {/* Multiple CTAs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/request-demo"
                                className="group w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                            Start Free Trial
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/live-demo"
                                className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-foreground rounded-xl hover:bg-muted transition-all flex items-center justify-center gap-2"
                            >
                                Watch Live Demo
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/pricing"
                                className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-foreground rounded-xl hover:bg-muted transition-all"
                            >
                                View Pricing
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Risk Reduction Elements */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 text-sm text-secondary">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>Cancel anytime</span>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-6 text-sm text-text-muted mb-8">
                        <span>GDPR Compliant</span>
                        <span>Setup in 5 minutes</span>
                    </div>

                    {/* Legal Disclaimer */}
                    <div className="mt-8 text-xs text-text-secondary max-w-2xl mx-auto space-y-2 text-balance opacity-80">
                        <p>
                            * By using TalentLyt, you acknowledge that our AI agents provide assessment support based on observable metrics.
                            TalentLyt is not a substitute for human judgment. We process data in compliance with GDPR/DPDPA.
                        </p>
                        <p>
                            For more information on how we handle biometric and behavioral data, see our <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link> and <Link href="/ethics" className="underline hover:text-foreground">AI Ethics Disclosure</Link>.
                        </p>
                    </div>
                </motion.div>

                {/* Abstract shapes background */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-foreground/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>
        </section>
    );
}
