'use client';

import React from 'react';
import { TrendingUp, Clock, Users, ShieldCheck, BarChart3, Target, CheckCircle2, ArrowRight } from 'lucide-react';
// Link removed - using direct Calendly link
import { analytics } from '@/lib/analytics';

interface CaseStudy {
    company: string;
    industry: string;
    challenge: string;
    results: {
        metric: string;
        value: string;
        description: string;
    }[];
    quote?: string;
    role?: string;
    timeline: string;
}

const caseStudies: CaseStudy[] = [
    {
        company: 'Series B Fintech',
        industry: 'Financial Services',
        challenge: 'Engineering team spending 40+ hours/week on screening calls with 60% no-show rate',
        results: [
            { metric: 'Time Saved', value: '32hrs', description: 'per week on screening' },
            { metric: 'No-Show Rate', value: '8%', description: 'down from 60%' },
            { metric: 'Quality Hires', value: '3x', description: 'increase in offer acceptance' },
        ],
        quote: "We went from 15 screening calls per hire to 4. Maya handles the technical validation so we can focus on culture fit.",
        role: 'VP Engineering',
        timeline: '6-week pilot',
    },
    {
        company: 'UAE Recruitment Agency',
        industry: 'Staffing & Recruitment',
        challenge: 'Needed to verify remote candidates across MENA with limited bandwidth',
        results: [
            { metric: 'Candidates Screened', value: '340+', description: 'in first month' },
            { metric: 'Fraud Detected', value: '12%', description: 'proxy/impersonation attempts' },
            { metric: 'Client Satisfaction', value: '94%', description: 'placement success rate' },
        ],
        quote: "The integrity verification caught issues we would have never found with traditional phone screens.",
        role: 'Director of Operations',
        timeline: '4-week pilot',
    },
    {
        company: 'Global Capability Center',
        industry: 'Enterprise Tech',
        challenge: 'Scaling technical hiring across 3 time zones with consistent quality bar',
        results: [
            { metric: 'Interview Consistency', value: '99.2%', description: 'standardized evaluation' },
            { metric: 'Hiring Velocity', value: '2.1x', description: 'faster time-to-offer' },
            { metric: 'Cost Reduction', value: '45%', description: 'lower cost-per-hire' },
        ],
        quote: "Finally, a way to maintain our technical bar without burning out our senior engineers on interviews.",
        role: 'Head of Talent Acquisition',
        timeline: '8-week pilot',
    },
];

const proofPoints = [
    {
        icon: BarChart3,
        title: '85% Prediction Accuracy',
        description: 'Measured against 6-month job performance reviews across beta cohort (n=82 hires, Jan 2026 data)',
        methodology: 'Correlation between Maya interview scores and manager performance ratings',
    },
    {
        icon: ShieldCheck,
        title: '15-Signal Verification',
        description: '12% of beta interviews flagged for integrity review — voice biometrics, gaze tracking, response patterns',
        methodology: 'Real-time analysis with Thompson Sampling for continuous signal weight optimization',
    },
    {
        icon: Target,
        title: '41% Deeper Review Rate',
        description: 'Candidates that traditional screens would have passed but showed concerning patterns',
        methodology: 'Compared against control group using standard phone screens',
    },
];

export function ProofSection() {
    return (
        <section id="proof" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <TrendingUp className="w-3 h-3" />
                        Proof & Results
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                        Don&apos;t Take Our Word For It
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Real results from real pilots. Here&apos;s how teams are using Rigovo to transform their technical hiring.
                    </p>
                </div>

                {/* Methodology Proof Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {proofPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                                <point.icon className="w-6 h-6 text-brand" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">{point.description}</p>
                            <p className="text-xs text-text-muted italic border-t border-white/5 pt-4">
                                <span className="text-brand font-semibold">How we measured:</span> {point.methodology}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Case Studies */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Pilot Case Studies
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <article
                                key={index}
                                className="group relative h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] -z-10" />
                                <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500 flex flex-col">
                                    {/* Company Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <div className="text-lg font-bold text-white">{study.company}</div>
                                            <div className="text-xs text-brand uppercase tracking-widest">{study.industry}</div>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-text-muted">
                                            {study.timeline}
                                        </div>
                                    </div>

                                    {/* Challenge */}
                                    <div className="mb-6 pb-6 border-b border-white/5">
                                        <div className="text-[10px] uppercase tracking-widest text-text-muted mb-2">Challenge</div>
                                        <p className="text-sm text-text-secondary leading-relaxed">{study.challenge}</p>
                                    </div>

                                    {/* Results */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {study.results.map((result, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-2xl font-black text-brand">{result.value}</div>
                                                <div className="text-[9px] text-text-muted uppercase tracking-wider">{result.metric}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    {study.quote && (
                                        <div className="mt-auto pt-6 border-t border-white/5">
                                            <p className="text-sm text-white/80 italic mb-2">&ldquo;{study.quote}&rdquo;</p>
                                            <p className="text-xs text-brand font-semibold">{study.role}</p>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Sample Report Preview */}
                <div className="relative p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.9rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[100px] rounded-full -z-10" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                    Sample Output
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    See What You&apos;ll Get
                                </h3>
                                <p className="text-text-secondary mb-8 leading-relaxed">
                                    Every interview generates a comprehensive audit report with integrity scores,
                                    skill evaluations, and actionable recommendations.
                                </p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        'Integrity verification score with signal breakdown',
                                        'Technical skill assessment with evidence',
                                        'Communication & problem-solving analysis',
                                        'Job success probability with confidence intervals',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                                            <span className="text-sm text-white/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://calendly.com/rigovo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => analytics.track({
                                        event: 'cta_clicked',
                                        properties: {
                                            location: 'hero',
                                            cta_type: 'book_pilot_call',
                                            cta_text: 'See a Real Report',
                                            destination_url: 'https://calendly.com/rigovo',
                                        },
                                    })}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover transition-all"
                                >
                                    <span className="technical-label text-xs">See a Real Report</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Mock Report Preview */}
                            <div className="relative">
                                <div className="p-6 rounded-2xl bg-[#111] border border-white/10 shadow-2xl">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                        <div>
                                            <div className="text-xs text-text-muted uppercase tracking-widest mb-1">Candidate Report</div>
                                            <div className="text-white font-bold">Senior Backend Engineer</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-text-muted">Integrity Score</div>
                                            <div className="text-2xl font-black text-green-400">94%</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 rounded-xl bg-white/5">
                                            <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Technical</div>
                                            <div className="text-xl font-bold text-white">8.5<span className="text-sm text-text-muted">/10</span></div>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                                <div className="w-[85%] h-full bg-brand rounded-full" />
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5">
                                            <div className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Communication</div>
                                            <div className="text-xl font-bold text-white">9.2<span className="text-sm text-text-muted">/10</span></div>
                                            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                                <div className="w-[92%] h-full bg-green-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-brand/10 border border-brand/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target className="w-4 h-4 text-brand" />
                                            <span className="text-xs font-bold text-brand uppercase tracking-widest">Job Success Prediction</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-white">78%</span>
                                            <span className="text-sm text-text-muted">likelihood of success in role</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <span className="text-[10px] text-text-muted">Sample data for illustration purposes</span>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/20 blur-2xl rounded-full" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/10 blur-3xl rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 text-center">
                    <p className="text-[10px] font-bold text-text-muted mb-8 uppercase tracking-[0.3em]">
                        Built on Enterprise-Grade Infrastructure
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {['SOC 2 Aligned', 'GDPR Compliant', 'AES-256 Encryption', 'Audit Trail'].map((badge) => (
                            <div key={badge} className="flex items-center gap-2 text-xs font-bold text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest cursor-default">
                                <ShieldCheck className="w-4 h-4" />
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
