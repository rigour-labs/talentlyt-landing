'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, ArrowRight, Sparkles, Activity, Check, Minus, HelpCircle, CreditCard, Lock } from 'lucide-react';
import { analytics, normalizeTierName } from '@/lib/analytics';

export function PricingContent() {
    const tiers = [
        {
            name: 'The Pilot',
            price: '$29',
            unit: 'One-Time',
            description: 'Experience the full platform. 90 minutes to validate.',
            valueTag: 'FREE WITH COUPON',
            features: [
                '90 Minutes Included',
                'Maya AI Interviewer',
                'Panel Mode (AI + Human)',
                '15-Signal Verification',
                'Deepfake & Voice Forensics',
                '7-Day Data Retention'
            ],
            cta: 'Request Coupon',
            ctaLink: '/contact',
            highlight: false,
            tag: 'OFFER ACTIVE',
            woo: 'Contact us to receive a 100% discount coupon code for your pilot session.'
        },
        {
            name: 'The Starter',
            price: '$0.35',
            unit: '/ Minute',
            description: 'Full platform. Zero commitment. Pay as you go.',
            valueTag: 'Forensic Value: PAYG',
            features: [
                'Unlimited Minutes',
                'Real-time Maya AI',
                'Adversarial Integrity Detection',
                'Voice Biometrics (ECAPA-TDNN)',
                'Unlimited Team Seats',
                '30-Day Data Retention'
            ],
            cta: 'Get Started',
            ctaLink: '/contact',
            highlight: false,
            tag: 'Pay As You Go',
            woo: 'Ideal for agencies and variable hiring needs. Pay only for what you use.'
        },
        {
            name: 'The Engine',
            price: '$249',
            unit: '/ Month',
            description: 'Growth-Ready Intelligence. 3,000 minutes included.',
            valueTag: 'Rate: $0.083 / min',
            features: [
                'All Premium Features',
                'Job Success Prediction',
                'Interview Genome Export',
                '3,000 Minutes Included',
                '$0.10/min Overage Rate',
                'Priority Support (24h)'
            ],
            cta: 'Scale Your Pipeline',
            ctaLink: '/contact',
            highlight: true,
            tag: 'Most Popular',
            woo: 'Includes all intelligence features: Success Prediction, Genome Building, and Maya Whispering.'
        },
        {
            name: 'The Fortress',
            price: 'Custom',
            unit: 'Enterprise',
            description: 'Unlimited Scale. Forensic Sovereignty.',
            valueTag: 'Value: Full Intelligence Stack',
            features: [
                'Interview Marketplace Access',
                'Federated Learning Support',
                'Bias Auditor (EEOC)',
                'White-Label Intelligence',
                'SAML / SSO (WorkOS)',
                'Dedicated Slack + CSM'
            ],
            cta: 'Contact Sales',
            ctaLink: '/contact',
            highlight: false,
            woo: 'Includes All-Access Interview Genome and Unlimited Sentinel Forensic scans.'
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
                        No <span className="text-brand font-bold underline underline-offset-4 decoration-brand/30">Basic</span> tiers. No compromised integrity. Every session is protected by the Sentinel Verification Engine.
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
                            whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
                            className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${tier.highlight
                                ? 'bg-[#0A0A0B] border-brand/50 shadow-[0_40px_80px_-15px_rgba(0,102,255,0.25)] ring-1 ring-brand/30'
                                : 'bg-card/30 border-white/5 hover:border-white/20 shadow-2xl backdrop-blur-md'
                                }`}
                        >
                            {/* Premium Background Glow for Highlighted Card */}
                            {tier.highlight && (
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />
                            )}

                            {/* Inner Glass Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="text-[10px] font-black text-brand uppercase tracking-[0.25em]">{tier.name}</h3>
                                            {tier.tag && (
                                                <span className="px-2 py-0.5 rounded-full bg-brand text-brand-foreground text-[8px] font-black uppercase tracking-tighter shadow-lg shadow-brand/20">
                                                    {tier.tag}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-5xl font-black tracking-tight text-white">{tier.price}</span>
                                            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{tier.unit}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Sparkles className="w-3 h-3 text-brand" />
                                        {tier.valueTag}
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed font-medium min-h-[40px]">{tier.description}</p>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-text-secondary text-[10px] font-medium leading-relaxed mb-8 relative group-hover:bg-white/[0.05] transition-colors">
                                    <div className="absolute inset-y-0 left-0 w-1 bg-brand rounded-full opacity-50" />
                                    {tier.woo}
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex gap-3 items-start group/feat">
                                            <div className="p-1 rounded-md bg-brand/10 border border-brand/20 mt-0.5 group-hover/feat:bg-brand/20 transition-colors">
                                                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                                            </div>
                                            <span className="text-text-secondary text-xs font-semibold leading-tight group-hover/feat:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={tier.ctaLink}
                                    onClick={() => {
                                        analytics.track({
                                            event: 'pricing_cta_clicked',
                                            properties: {
                                                tier_name: normalizeTierName(tier.name),
                                                cta_text: tier.cta,
                                                price: tier.price,
                                            },
                                        });
                                    }}
                                    className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-center flex items-center justify-center gap-2 relative overflow-hidden group ${tier.highlight
                                        ? 'bg-brand text-brand-foreground hover:bg-brand-hover shadow-[0_20px_40px_-10px_rgba(0,102,255,0.5)]'
                                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    <span className="relative z-10">{tier.cta}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform relative z-10" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pricing Philosophy - No Feature Gates */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            Core Philosophy
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black mb-12 tracking-tight">
                            Simple. Transparent. <span className="text-brand">No Feature Gates.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Unlimited Everything",
                                desc: "Team seats, pipelines, and features are never capped. We scale with your growth, not your headcount.",
                                icon: Globe,
                                color: "text-blue-400"
                            },
                            {
                                title: "Value-Based Billing",
                                desc: "You pay for minutes, not for capabilities. Every user gets the full Sentinel Verification engine.",
                                icon: Zap,
                                color: "text-brand"
                            },
                            {
                                title: "Honest Economics",
                                desc: "A 15-minute screen costs less than a 60-minute deep dive. Transparent usage-based pricing.",
                                icon: Activity,
                                color: "text-emerald-400"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <item.icon className={`w-10 h-10 ${item.color} mb-8`} />
                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Sentinel Forensic - Product 2 */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 relative"
                >
                    <div className="absolute inset-0 bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10" />
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            Advanced Verification
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter">Sentinel <span className="text-brand">Verification</span></h2>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
                            Deep post-interview analysis for high-stakes hires. <br className="hidden md:block" /> Powered by <span className="text-white">SyncNet</span> and <span className="text-white">ECAPA-TDNN</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Sentinel Basic',
                                price: '$35',
                                unit: '/ Scan',
                                features: ['Lip-Sync & Voice Bio', 'SyncNet CNN Analysis', 'Deepfake Detection', 'Evidence PDF Report'],
                                availability: 'Available Now',
                                highlight: false
                            },
                            {
                                name: 'Sentinel Advanced',
                                price: '$50',
                                unit: '/ Scan',
                                features: ['v-JEPA2 Video Analysis', 'Temporal Consistency', 'Motion Pattern Analysis', 'Enhanced Reasoning'],
                                availability: 'Q2 2026',
                                highlight: true
                            },
                            {
                                name: 'Sentinel Premium',
                                price: '$75',
                                unit: '/ Scan',
                                features: ['NVIDIA Alpamayo 10B', 'Behavioral Reasoning', 'Natural Language Logic', 'Forensic Evidence Chain'],
                                availability: 'Q3 2026',
                                highlight: false
                            }
                        ].map((tier, i) => (
                            <div key={i} className={`group p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500 overflow-hidden ${tier.highlight ? 'bg-brand/10 border-brand/40 shadow-2xl ring-1 ring-brand/20' : 'bg-card/30 border-white/5 hover:border-white/10'}`}>
                                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-4">{tier.name}</div>
                                <div className="flex items-baseline gap-1.5 mb-8">
                                    <span className="text-5xl font-black text-white">{tier.price}</span>
                                    <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{tier.unit}</span>
                                </div>
                                <div className="space-y-4 mb-10 min-h-[160px]">
                                    {tier.features.map(f => (
                                        <div key={f} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand" /> {f}
                                        </div>
                                    ))}
                                </div>
                                <div className={`text-center py-3 px-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${tier.highlight ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-white/5 text-text-muted border border-white/10 group-hover:bg-white/10 group-hover:text-white'}`}>
                                    {tier.availability}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Competitive Matrix */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="p-10 rounded-[3rem] bg-card/20 border border-white/5 backdrop-blur-3xl overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black mb-4 tracking-tight">Competitive Matrix</h2>
                            <p className="text-text-secondary font-medium text-sm px-6">How TalentLyt scales and secures where traditional platforms fail.</p>
                        </div>

                        <div className="overflow-x-auto px-4 md:px-0">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-8 px-6 text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Capability</th>
                                        <th className="py-8 px-6 text-[10px] font-black text-brand uppercase tracking-[0.2em]">TalentLyt Engine</th>
                                        <th className="py-8 px-6 text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Traditional ATS / AI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { feature: 'Interview Model', talent: 'Live Multi-Agent Voice', trad: 'Asynchronous / One-way' },
                                        { feature: 'Job Success Prediction', talent: 'AI-Forecasting (85% Accuracy)', trad: 'Manual Intuition / None' },
                                        { feature: 'Candidate Intelligence', talent: 'Portable Interview Genomes', trad: 'Static PDF Resumes' },
                                        { feature: 'Integrity Verification', talent: '15-Signal Adversarial', trad: 'Basic Human Review' },
                                        { feature: 'Real-time Adaptation', talent: 'Claim Extraction & Probing', trad: 'Static Question Bank' },
                                        { feature: 'Learning Model', talent: 'Federated Collective Intelligence', trad: 'Siloed / Zero-Learning' },
                                        { feature: 'Feature Availability', talent: 'Zero Gates (All Tiers)', trad: 'Pay-for-Access Gates' },
                                    ].map((row, i) => (
                                        <tr key={i} className="group/row hover:bg-white/[0.02] transition-colors">
                                            <td className="py-6 px-6 text-sm font-bold text-white tracking-tight">{row.feature}</td>
                                            <td className="py-6 px-6 text-sm font-black text-brand">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    {row.talent}
                                                </div>
                                            </td>
                                            <td className="py-6 px-6 text-sm text-text-secondary font-medium italic opacity-60 group-hover/row:opacity-100 transition-opacity">
                                                <div className="flex items-center gap-2">
                                                    <Minus className="w-4 h-4" /> {row.trad}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.section>

                {/* FAQ Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">Frequently Asked <span className="text-brand">Questions</span></h2>
                        <p className="text-text-secondary font-medium">Clarity on our minutes-based AI interview platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                q: "Are the 'Intelligence' features an extra cost?",
                                a: "No. In line with our 'No Feature Gates' philosophy, Job Success Prediction, Interview Genome, and Maya Whisper are included in our standard tiers. We believe intelligence shouldn't be a premium add-on."
                            },
                            {
                                q: "How does the Interview Genome work?",
                                a: "Every interview conducted builds the candidate's verified genome. Candidates can export this signed JSON to other TalentLyt-enabled companies, and you can browse the Marketplace for pre-verified talent."
                            },
                            {
                                q: "Why minutes instead of per-interview?",
                                a: "Transparency. A 15-minute verification shouldn't cost as much as a 60-minute technical deep-dive. Minutes ensures you only pay for exactly what you consume."
                            },
                            {
                                q: "What is Federated Learning?",
                                a: "It's how we improve. We learn from millions of anonymized interview signals across organizations without ever sharing raw candidate data, ensuring your predictions are always world-class."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand/20 transition-all duration-500">
                                <h4 className="font-bold text-white mb-4 flex items-start gap-4 text-lg">
                                    <div className="w-8 h-8 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand group-hover:text-white transition-colors">
                                        <HelpCircle className="w-4 h-4" />
                                    </div>
                                    {faq.q}
                                </h4>
                                <p className="text-text-secondary leading-relaxed pl-12 font-medium">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Trust Footer */}
                <div className="flex flex-col items-center gap-12 pt-16 border-t border-white/5">
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 group grayscale hover:grayscale-0 transition-all hover:bg-white/[0.04]">
                            <CreditCard className="w-4 h-4 text-text-muted group-hover:text-brand" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-white">Powered by Stripe</span>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 group grayscale hover:grayscale-0 transition-all hover:bg-white/[0.04]">
                            <Lock className="w-4 h-4 text-text-muted group-hover:text-green-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-white">PCI DSS Compliant</span>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 group grayscale hover:grayscale-0 transition-all hover:bg-white/[0.04]">
                            <ShieldCheck className="w-4 h-4 text-text-muted group-hover:text-blue-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-white">Bank-Grade Invoicing</span>
                        </div>
                    </div>
                    <div className="text-center space-y-4">
                        <p className="text-[10px] text-text-muted max-w-xl leading-relaxed font-bold uppercase tracking-widest">
                            Prices in USD. India: ₹18/min. Pakistan: $0.18/min.
                        </p>
                        <p className="text-[9px] text-white/20 max-w-2xl leading-relaxed">
                            TalentLyt uses legally-defensible biometric chain-of-custody protocols. All pricing is subject to our <Link href="/terms" className="underline hover:text-brand">Terms of Service</Link> and data retention schedules.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
