'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, Zap, Globe, MessageSquare, ArrowRight } from 'lucide-react';

export function PricingContent() {
    const tiers = [
        {
            name: 'The Pilot',
            price: '$0',
            unit: 'First 3 Candidates',
            description: 'The "Proof of Concept" for modern hiring teams.',
            valueTag: 'Forensic Value: Experience the full depth of the Sentinel Audit with no commitment.',
            features: [
                'Full depth Sentinel Audit',
                'Neural Calibration Map',
                'Temporal Intelligence Map',
                'Zero-Storage ID Verification',
                'Automated Forensic Report',
                '7-day data retention'
            ],
            cta: 'Start Your Trust Trial',
            ctaLink: '/request-demo',
            highlight: false,
            woo: 'Run 3 interviews and see the Temporal Intelligence Map in action.'
        },
        {
            name: 'The Starter',
            price: '$25',
            unit: '/ Candidate',
            description: 'Precision integrity for solo recruiters and specialist teams.',
            valueTag: 'Forensic Value: Surgical assessment of every candidate with a Unified Integrity Score.',
            features: [
                'Side-Channel Analysis',
                'Biometric Continuity Sync',
                'Unified Integrity Scoring',
                'Hardware Layer Telemetry',
                'Full Maya AI Capabilities',
                '30-day data retention'
            ],
            cta: 'Get Started Now',
            ctaLink: '/request-demo',
            highlight: true,
            tag: 'Precision Standard',
            woo: 'Detect the "invisible" fingerprints of screen scrapers and AI tools.'
        },
        {
            name: 'The Engine',
            price: '$299',
            unit: '/ Month',
            description: 'Scaling startups building a zero-trust hiring funnel.',
            valueTag: 'Forensic Value: Access the Pipeline Builder to design multi-round forensic gauntlets.',
            features: [
                'Includes 15 Credits/mo ($20 overage)',
                'Multi-stage Pipeline Builder',
                'Biometric Chain of Custody',
                'Behavioral Drift Analysis',
                'Skill Variance Reporting',
                '90-day data retention'
            ],
            cta: 'Scale Your Integrity',
            ctaLink: '/request-demo',
            highlight: false,
            woo: 'Orchestrate 100+ candidates through automated screening stages.'
        },
        {
            name: 'The Fortress',
            price: 'Custom',
            unit: '/ Annual',
            description: 'The gold standard for high-security, high-volume global hiring.',
            valueTag: 'Forensic Value: Custom Calibration Protocols tailored to your specific requirements.',
            features: [
                'Bulk Credit Allocation',
                'Evervault-Encrypted Audit Logs',
                'SOC2/GDPR/DPDP Compliance',
                'White-Label Forensic Integrity',
                'Custom Calibration Protocols',
                'Dedicated Account Manager'
            ],
            cta: 'Contact Security Sales',
            ctaLink: '/request-demo',
            highlight: false,
            woo: 'Dedicated expert to analyze "Anomalous Trends" across your organization.'
        }
    ];

    const interviewPacks = [
        { name: 'Starter Pack', interviews: 25, price: '$100', perInterview: '$4.00', savings: '20%' },
        { name: 'Growth Pack', interviews: 100, price: '$350', perInterview: '$3.50', savings: '30%' },
        { name: 'Scale Pack', interviews: 500, price: '$1,250', perInterview: '$2.50', savings: '50%' },
    ];

    return (
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        Pricing Protocols
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Choose Your Level of <span className="text-brand">Trust</span>.
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        No <span className="text-brand font-bold">Basic</span> tiers. No compromised integrity. Every TalentLyt session is protected by the Sentinel Forensic Engine by default.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {tiers.map((tier, i) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 ${tier.highlight
                                ? 'bg-card border-brand/50 shadow-[0_20px_40px_rgba(37,99,235,0.1)] ring-1 ring-brand/50'
                                : 'bg-card border-border/50 hover:border-brand/20'
                                }`}
                        >
                            {tier.tag && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                    {tier.tag}
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    {tier.unit && <span className="text-text-muted font-medium text-sm">{tier.unit}</span>}
                                </div>
                                {tier.valueTag && (
                                    <div className="text-[10px] font-bold text-brand uppercase tracking-wider mb-3">{tier.valueTag}</div>
                                )}
                                <p className="text-text-secondary text-sm leading-relaxed mb-6">{tier.description}</p>
                                {tier.woo && (
                                    <div className="p-4 rounded-2xl bg-brand/5 border border-brand/10 text-brand text-[11px] font-medium leading-relaxed mb-8 relative overflow-hidden group/woo">
                                        <div className="absolute inset-y-0 left-0 w-1 bg-brand" />
                                        {tier.woo}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 space-y-3 mb-10">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex gap-3 text-sm">
                                        <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-brand' : 'text-text-muted'}`} />
                                        <span className="text-text-secondary leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={tier.ctaLink}
                                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all text-center flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background ${tier.highlight
                                    ? 'bg-brand text-brand-foreground hover:bg-brand-hover shadow-lg'
                                    : 'bg-muted text-text-primary hover:bg-border border border-border/20'
                                    }`}
                                aria-label={`${tier.cta} for ${tier.name} plan`}
                            >
                                {tier.cta}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Sentinel Proof Visual Anchor */}
                <section className="mb-24">
                    <div className="p-1 px-1.5 rounded-[3.5rem] bg-gradient-to-b from-brand/20 to-transparent">
                        <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[3.4rem] p-10 md:p-16 border border-brand/20 relative overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div className="order-2 lg:order-1 relative">
                                    <div className="absolute -inset-10 bg-brand/10 blur-[100px] rounded-full -z-10" />
                                    <img
                                        src="https://onbadqcmbugvszb0.public.blob.vercel-storage.com/screencapture-platform-talentlyt-cloud-dashboard-audit-cmk9wgczv000001s6hl78jtgm-2026-01-11-22_26_25.png"
                                        alt="Sentinel Forensic Audit - Tamper Detected"
                                        className="rounded-2xl border border-brand/30 shadow-2xl grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Overlay Badge */}
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-danger text-white technical-label text-xs font-bold rounded-lg shadow-xl animate-pulse">
                                        TAMPER DETECTED: 9% SCORE
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                        Visual Anchor: The Sentinel Proof
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                                        Caught in <span className="text-brand">4 Minutes</span>.
                                    </h3>
                                    <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                                        Join the pilot clients saving <span className="font-bold">$15,000 per bad hire</span> with our zero-trust forensic engine. See Maya AI orchestrate multi-stage workflows in real-time.
                                    </p>
                                    <p className="text-text-secondary leading-relaxed mb-8">
                                        TalentLyt saved one pilot user <span className="font-bold">$15,000 per bad hire</span> by detecting surgical-level tampering that human eyes simply cannot see.
                                    </p>
                                    <Link
                                        href="/request-demo"
                                        className="inline-flex items-center gap-2 text-brand font-bold hover:underline group"
                                    >
                                        Read the Full Forensic Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risk Mitigation Section */}
                <section className="mb-24 py-16 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <img src="/assets/grid.png" alt="Grid" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Forensic Risk Mitigation</h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Beyond features. We solve the fundamental risks of remote hiring.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            {
                                title: '"Stop the Proxy"',
                                value: "$15,000 Risk Avoidance",
                                desc: "One bad hire costs $15,000. One TalentLyt audit costs $25. The ROI is immediate and forensic.",
                                icon: ShieldCheck,
                                color: "text-brand"
                            },
                            {
                                title: '"Zero Liability"',
                                value: "In-Memory Processing",
                                desc: "We process IDs in-memory and discard them. You get the proof; we don't keep the metadata or PII.",
                                icon: Zap,
                                color: "text-green-500"
                            },
                            {
                                title: '"Orchestrate at Scale"',
                                value: "100+ Parallel Audits",
                                desc: "Maya interviews 100 people simultaneously while you sleep, ensuring no bottleneck in your hiring pipeline.",
                                icon: Globe,
                                color: "text-brand"
                            }
                        ].map((risk, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all group">
                                <div className={`w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-8 ${risk.color}`}>
                                    <risk.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">{risk.title}</h3>
                                <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${risk.color}`}>{risk.value}</div>
                                <p className="text-text-secondary leading-relaxed">{risk.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
