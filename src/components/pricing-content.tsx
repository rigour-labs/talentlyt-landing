'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, Zap, Globe, MessageSquare, ArrowRight } from 'lucide-react';

export function PricingContent() {
    const tiers = [
        {
            name: 'Starter',
            price: '$0',
            description: 'Perfect for evaluating TalentLyt with your team.',
            valueTag: 'Free Forever',
            features: [
                '5 Interviews per month',
                '1 Admin user',
                'Technical rounds only',
                'Basic Forensic Reports',
                '30-day data retention',
                'Community support'
            ],
            cta: 'Start for Free',
            ctaLink: '/request-demo',
            highlight: false,
        },
        {
            name: 'Pro',
            price: '$99',
            unit: '/mo',
            description: 'Built for scaling startups and growing teams.',
            valueTag: '$2/interview equivalent',
            features: [
                '50 Interviews per month',
                '$5/interview overage',
                '5 Admin users',
                'All round types',
                'Full Forensic Audit Reports',
                'Zapier integration',
                '90-day data retention',
                'Email support (48h)',
                '14-day Free Trial'
            ],
            cta: 'Start 14-Day Trial',
            ctaLink: '/request-demo',
            highlight: true,
            tag: 'Most Popular'
        },
        {
            name: 'Business',
            price: '$299',
            unit: '/mo',
            description: 'Enterprise-grade features for hiring teams.',
            valueTag: '$1.50/interview at full usage',
            features: [
                '200 Interviews per month',
                '$3/interview overage',
                '20 Admin users',
                'ATS Integrations (Greenhouse, Lever)',
                'SSO & SAML Authentication',
                'Full Reports + Export',
                '1-year data retention',
                'Priority support (24h)',
                '99.5% SLA'
            ],
            cta: 'Contact Sales',
            ctaLink: '/request-demo',
            highlight: false,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Unlimited scale for global organizations.',
            valueTag: 'Volume discounts available',
            features: [
                'Unlimited Interviews',
                'Negotiated overage rate',
                'Unlimited Admin users',
                'Custom Agent Personas',
                'API + Custom Integrations',
                'Dedicated Success Manager',
                'On-premise available',
                'Custom data retention',
                '99.9% SLA Guarantee'
            ],
            cta: 'Talk to Enterprise',
            ctaLink: '/request-demo',
            highlight: false,
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
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Fair Pricing for <span className="text-brand">Verified</span> Talent.
                    </h1>
                    <p className="text-lg text-text-secondary">
                        Choose a plan that scales with your hiring needs. All paid plans include a 14-day Pro trial with no credit card required.
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
                                <p className="text-text-secondary text-sm leading-relaxed">{tier.description}</p>
                            </div>

                            <div className="flex-1 space-y-3 mb-10">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex gap-3 text-sm">
                                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-brand' : 'text-text-muted'}`} />
                                        <span className="text-text-secondary">{feature}</span>
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

                {/* Interview Packs */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Pre-Paid Interview Packs</h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Buy in bulk for seasonal hiring or budget predictability.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {interviewPacks.map((pack, i) => (
                            <div
                                key={pack.name}
                                className="relative p-8 rounded-[2rem] bg-gradient-to-br from-brand/5 to-transparent border border-brand/20 hover:border-brand/40 transition-all group"
                            >
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                                    Save {pack.savings}
                                </div>

                                <h4 className="text-lg font-bold mb-2">{pack.name}</h4>
                                <div className="text-3xl font-bold text-brand mb-1">{pack.price}</div>
                                <div className="text-text-muted text-sm mb-4">{pack.interviews} interviews</div>

                                <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                                    <span className="text-text-secondary text-sm">Effective rate:</span>
                                    <span className="text-brand font-bold">{pack.perInterview}/interview</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Usage Based Add-ons */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Precision Add-Ons</h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Tailor the platform to your specific requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Interview Overages',
                                price: '$3-$5',
                                unit: '/session',
                                desc: 'Scale beyond your plan limits without commitment changes.',
                                icon: Zap
                            },
                            {
                                title: 'Session Recording',
                                price: '$2',
                                unit: '/session',
                                desc: '1080p full session video storage and cloud replay.',
                                icon: ShieldCheck
                            },
                            {
                                title: 'API Access',
                                price: '$50',
                                unit: '/mo',
                                desc: 'Full REST API for custom internal dashboard integrations.',
                                icon: Globe
                            }
                        ].map((addon) => (
                            <div key={addon.title} className="p-8 rounded-[2rem] bg-muted/30 border border-border/50 hover:border-brand/30 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
                                    <addon.icon className="w-5 h-5 text-brand" />
                                </div>
                                <h4 className="text-lg font-bold mb-2">{addon.title}</h4>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-2xl font-bold">{addon.price}</span>
                                    <span className="text-text-muted text-xs font-medium">{addon.unit}</span>
                                </div>
                                <p className="text-text-secondary text-sm">{addon.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "How does the consumption-based model work?",
                                a: "Each plan comes with a base number of interviews. If you exceed this, you're charged at a per-interview overage rate."
                            },
                            {
                                q: "Do you offer custom agent personas?",
                                a: "Yes, on our Enterprise plan, we can fine-tune Maya's persona to match your company's hiring style."
                            },
                            {
                                q: "Is candidate data encrypted?",
                                a: "Absolutely. All session data, recordings, and transcripts are encrypted at rest (AES-256) and in transit (TLS 1.3)."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="p-8 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                                <h4 className="font-bold mb-3 flex items-center gap-3">
                                    <MessageSquare className="w-4 h-4 text-brand" />
                                    {faq.q}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
