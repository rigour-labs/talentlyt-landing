'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, ArrowRight, Sparkles, Activity } from 'lucide-react';

export function PricingContent() {
    const tiers = [
        {
            name: 'The Pilot',
            price: '$29',
            unit: 'Rapid Access Pack',
            description: 'Validate the engine in 24 hours. Includes 3 full Sentinel Audits.',
            valueTag: 'Forensic Value: Full Audit Depth',
            features: [
                '3x Full Sentinel Audits',
                'Neural Calibration Map',
                'Temporal Intelligence Map',
                'Zero-Storage ID Verification',
                'Automated Forensic Report',
                '7-day data retention'
            ],
            cta: 'Start Pilot Access',
            ctaLink: '/contact',
            highlight: false,
            woo: 'Run 3 interviews and see the Sentinel Forensic HUD in action.'
        },
        {
            name: 'The Starter',
            price: '$15',
            unit: '/ Interview',
            description: 'Zero commitment. Instant scale. Pay only for the sessions you conduct.',
            valueTag: 'Forensic Value: Pay-Per-Session',
            features: [
                'Unified Integrity Scoring',
                'Side-Channel Analysis',
                'Biometric Continuity Sync',
                'Hardware Layer Telemetry',
                'Full Maya AI Capabilities',
                '30-day data retention'
            ],
            cta: 'Get Started',
            ctaLink: '/contact',
            highlight: false,
            tag: 'Pay As You Go',
            woo: 'Surgical assessment of every candidate with a Unified Integrity Score.'
        },
        {
            name: 'The Engine',
            price: '$249',
            unit: '/ Month',
            description: 'The standard for growing teams. Includes 50 interviews per month.',
            valueTag: 'Forensic Value: $5.00/int effective',
            features: [
                'Includes 50 Interviews/mo',
                'Multi-stage Pipeline Builder',
                'Biometric Chain of Custody',
                'Behavioral Drift Analysis',
                'Skill Variance Reporting',
                '90-day data retention'
            ],
            cta: 'Scale Your Pipeline',
            ctaLink: '/contact',
            highlight: true,
            tag: 'Most Popular',
            woo: 'Orchestrate automated screening stages with Maya AI.'
        },
        {
            name: 'The Fortress',
            price: 'Custom',
            unit: '/ Platform',
            description: 'Sovereign infrastructure for high-volume enterprise hiring.',
            valueTag: 'Forensic Value: Isolated Environment',
            features: [
                'Bulk Credit Allocation',
                'Evervault-Encrypted Logs',
                'Dedicated Forensic Analyst',
                'White-Label Forensic Integrity',
                'Custom Calibration Protocols',
                'SAML / SSO Integration'
            ],
            cta: 'Contact Security Sales',
            ctaLink: '/contact',
            highlight: false,
            woo: 'Custom Calibration Protocols tailored to your specific requirements.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any // Using 'as any' to bypass the strict Easing type for custom curves
            }
        }
    };

    return (
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--brand-hover)_0%,_transparent_70%)] opacity-[0.05] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
                    >
                        <Activity className="w-3 h-3" />
                        Pricing Protocols
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]"
                    >
                        Choose Your Level of <span className="text-brand">Trust</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-secondary max-w-2xl mx-auto font-medium"
                    >
                        No <span className="text-brand font-bold underline underline-offset-4 decoration-brand/30">Basic</span> tiers. No compromised integrity. Every session is protected by the Sentinel Forensic Engine.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.name}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${tier.highlight
                                ? 'bg-card/40 border-brand shadow-[0_30px_60px_-15px_rgba(99,102,241,0.2)] backdrop-blur-xl ring-1 ring-brand/20'
                                : 'bg-card/40 border-border/50 hover:border-brand/40 shadow-xl backdrop-blur-sm'
                                }`}
                        >
                            {/* Inner Glass Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-xs font-bold text-text-muted uppercase tracking-[0.2em] mb-1">{tier.name}</h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black tracking-tighter text-white">{tier.price}</span>
                                            {tier.unit && <span className="text-text-muted font-bold text-xs uppercase tracking-wider">{tier.unit}</span>}
                                        </div>
                                    </div>
                                    {tier.tag && (
                                        <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${tier.highlight
                                            ? 'bg-brand text-brand-foreground border-brand shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                            : 'bg-white/5 text-white/70 border-white/10'
                                            }`}>
                                            {tier.tag}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <div className="text-[10px] font-bold text-brand uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Sparkles className="w-3 h-3" />
                                        {tier.valueTag}
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed font-medium">{tier.description}</p>
                                </div>

                                <div className="p-4 rounded-2xl bg-brand/[0.03] border border-brand/10 text-brand text-[10px] sm:text-[11px] font-bold leading-relaxed mb-8 relative group-hover:bg-brand/[0.05] transition-colors">
                                    <div className="absolute inset-y-0 left-0 w-1 bg-brand rounded-full" />
                                    {tier.woo}
                                </div>

                                <div className="space-y-4 mb-10">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex gap-3 items-start group/feat">
                                            <div className="p-1 rounded-md bg-brand/5 border border-brand/10 mt-0.5 group-hover/feat:bg-brand/10 transition-colors">
                                                <ShieldCheck className={`w-3.5 h-3.5 ${tier.highlight ? 'text-brand' : 'text-text-muted'}`} />
                                            </div>
                                            <span className="text-text-secondary text-sm font-medium leading-tight group-hover/feat:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={tier.ctaLink}
                                    className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 relative overflow-hidden ${tier.highlight
                                        ? 'bg-brand text-brand-foreground hover:bg-brand-hover shadow-[0_10px_20px_-10px_rgba(99,102,241,0.5)]'
                                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    {tier.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sentinel Proof - Premium Visual Block */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 group"
                >
                    <div className="p-px rounded-[3.5rem] bg-gradient-to-b from-brand/30 via-brand/5 to-transparent hover:from-brand/50 transition-colors duration-1000">
                        <div className="bg-[#050505] rounded-[3.4rem] p-10 md:p-16 border border-white/5 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
                            {/* Decorative background blur */}
                            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div className="relative">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative p-2 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl"
                                    >
                                        <img
                                            src="https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-platform-talentlyt-cloud-dashboard-audit-cmk9wgczv000001s6hl78jtgm-2026-01-11-22_26_25.png"
                                            alt="Sentinel Forensic Audit - Tamper Detected"
                                            className="rounded-[1.5rem] w-full"
                                        />
                                        <div className="absolute top-8 left-8 px-4 py-2 bg-danger text-white technical-label text-[10px] font-black rounded-lg shadow-[0_0_30px_rgba(251,113,133,0.5)] animate-pulse border border-danger/50">
                                            ALERT: TAMPER_DETECTION_LVL_4
                                        </div>
                                    </motion.div>
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                        Forensic Hub: Sentinel HUD
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                                        Caught in <span className="text-brand italic">4 Minutes</span>.
                                    </h2>
                                    <p className="text-xl text-text-secondary mb-10 leading-relaxed font-medium">
                                        Join the pilot clients saving <span className="text-white font-bold">$15,000 per bad hire</span> with our zero-trust forensic engine.
                                    </p>
                                    <div className="space-y-8 mb-12">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                                                <Zap className="w-6 h-6 text-brand" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Instant Detection</h4>
                                                <p className="text-sm text-text-secondary leading-relaxed">Identity spoofing and proxy candidates are neutralized via behavioral biometrics.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                                                <ShieldCheck className="w-6 h-6 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Zero Trust Protocol</h4>
                                                <p className="text-sm text-text-secondary leading-relaxed">Ephemeral data processing ensures total privacy while maintaining absolute evidence.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-brand-foreground rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-hover hover:-translate-y-1 transition-all shadow-[0_15px_30px_-10px_rgba(99,102,241,0.5)]"
                                    >
                                        Deploy Sentinel Engine <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Final Grid Callout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        { title: 'Elastic Capacity', desc: 'Spin up 1,000 parallel sessions. No manual interview scheduling latency.', icon: Globe },
                        { title: 'Neural Fingerprints', desc: 'Maya AI learns candidate behavioral patterns to detect anomalies in real-time.', icon: Activity },
                        { title: 'Global Edge Architecture', desc: 'Sub-100ms latency for candidates regardless of geographic location.', icon: Zap }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                        >
                            <item.icon className="w-6 h-6 text-brand mb-4 text-brand/70" />
                            <h5 className="font-bold text-white mb-2 tracking-tight">{item.title}</h5>
                            <p className="text-sm text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
