'use client';

import React from 'react';
import {
    Target, Zap, Shield, Users, Award, Globe, Linkedin,
    CheckCircle2, AlertTriangle, Bot, Fingerprint, ArrowRight,
    Code2, Cloud, Brain, Server, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { CTAButton } from '@/components/ui/cta-button';

export function AboutContent() {
    return (
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Hero — Problem-first narrative */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <Award className="w-4 h-4 text-brand" />
                        <span className="text-sm font-medium text-brand">Why We Exist</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        We Got Tired of Hiring <span className="text-brand">Ghosts</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        After years of building engineering teams, we kept hitting the same wall: candidates who aced interviews but couldn&apos;t do the job. Proxy interviewees. AI-generated answers. Fabricated experience. We built Rigovo to fix it.
                    </p>
                </div>

                {/* The Problem We Solve */}
                <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent border border-red-500/20 mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-7 h-7 text-red-400" />
                        </div>
                        <h2 className="text-3xl font-bold">The Problem</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { stat: '70%', label: 'of resumes have discrepancies that traditional screening misses' },
                            { stat: '$240K', label: 'average cost of a bad engineering hire (salary + ramp + replacement)' },
                            { stat: '3x', label: 'increase in proxy interviews and AI-assisted cheating since 2023' },
                        ].map((item) => (
                            <div key={item.stat} className="text-center">
                                <div className="text-3xl font-bold text-red-400 mb-2">{item.stat}</div>
                                <p className="text-sm text-text-secondary leading-relaxed">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Solution */}
                <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-brand/10 via-brand/5 to-transparent border border-brand/20 mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center">
                            <Target className="w-7 h-7 text-brand" />
                        </div>
                        <h2 className="text-3xl font-bold">Our Answer</h2>
                    </div>
                    <p className="text-xl text-text-secondary leading-relaxed mb-6">
                        Rigovo is an AI interview platform that doesn&apos;t just assess skills — it <span className="text-white font-semibold">verifies the human behind the screen</span>. Our 3-agent system conducts technical interviews while simultaneously running <span className="text-white font-semibold">15-signal forensic verification</span> in the background.
                    </p>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        The result: you know exactly who you&apos;re hiring — their real skills, their real identity, and their real potential.
                    </p>
                </section>

                {/* Traction / What We've Done */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-4">Where We Are</h2>
                    <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">
                        We&apos;re past the idea stage. Rigovo is live, tested, and delivering results.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { value: '82+', label: 'Beta interviews completed' },
                            { value: '6,824', label: 'Signal events analyzed' },
                            { value: '15', label: 'Forensic signals per session' },
                            { value: '41%', label: 'Flagged candidates in beta' },
                        ].map((metric) => (
                            <div key={metric.label} className="p-5 rounded-2xl bg-card border border-border/50 text-center">
                                <div className="text-2xl font-bold text-brand mb-1">{metric.value}</div>
                                <p className="text-xs text-text-muted">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mid-page CTA */}
                <section className="mb-16">
                    <div className="p-10 rounded-3xl bg-gradient-to-r from-brand/10 via-brand/5 to-transparent border border-brand/20 text-center">
                        <h2 className="text-2xl font-bold mb-3">See it in action on your roles</h2>
                        <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                            Free pilot — 5 interviews, full forensic reports, zero commitment.
                        </p>
                        <CTAButton location="hero" className="px-10 py-4" />
                    </div>
                </section>

                {/* Founder Section — Credibility-focused */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-4">Built by an Engineer Who Lived the Problem</h2>
                    <p className="text-text-secondary text-center max-w-xl mx-auto mb-10">
                        Not consultants. Not recruiters. An engineer who spent 13 years building systems — and got burned by broken hiring.
                    </p>

                    <div className="p-8 rounded-[2rem] bg-card border border-border/50">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Ashutosh Singh</h3>
                                        <p className="text-brand text-sm font-medium">Founder &amp; CEO</p>
                                    </div>
                                    <Link
                                        href="https://www.linkedin.com/in/erashu212/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-lg bg-white/5 hover:bg-brand/20 transition-colors"
                                        aria-label="Ashutosh Singh's LinkedIn profile"
                                    >
                                        <Linkedin className="w-5 h-5 text-brand" />
                                    </Link>
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                    After 13+ years scaling AI/ML platforms and cloud-native infrastructure for enterprise teams, Ashutosh experienced the hiring crisis firsthand — proxy candidates, fabricated skills, and interviews that told you nothing about actual ability.
                                </p>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                    He built Rigovo with the same obsession for structural integrity that drove his previous work: LLM orchestration systems achieving 99.9%+ SLA and 93% reduction in duplicate API calls.
                                </p>

                                {/* Credibility signals */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { icon: Code2, label: '13+ years in engineering' },
                                        { icon: Cloud, label: 'Cloud-native infrastructure at scale' },
                                        { icon: Brain, label: 'AI/ML platform architecture' },
                                        { icon: Server, label: '99.9%+ SLA systems built' },
                                    ].map((cred) => (
                                        <div key={cred.label} className="flex items-center gap-2.5 text-sm text-text-muted">
                                            <cred.icon className="w-4 h-4 text-brand shrink-0" />
                                            <span>{cred.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">What Makes Rigovo Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Bot,
                                title: "AI That Interviews, Not Just Screens",
                                description: "Maya doesn't send a quiz. She conducts a real conversation — adaptive, technical, and indistinguishable from a senior engineer interview."
                            },
                            {
                                icon: Fingerprint,
                                title: "Verification Built In, Not Bolted On",
                                description: "Every interview runs 15-signal forensic checks in the background. Identity, behavior, and technical depth — verified simultaneously."
                            },
                            {
                                icon: Shield,
                                title: "Enterprise-Grade Security",
                                description: "AES-256 encryption, GDPR/CCPA compliant, SOC 2 readiness, and audit trails for every session. Built for regulated industries."
                            },
                            {
                                icon: Users,
                                title: "Human Decisions, AI Intelligence",
                                description: "We give you the data and the signals. You make the hiring decision. AI augments your judgment — it never replaces it."
                            }
                        ].map((value) => (
                            <div
                                key={value.title}
                                className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                                    <value.icon className="w-6 h-6 text-brand" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline — More compelling */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {[
                            { date: 'Jun 2025', event: 'Founded after experiencing proxy interview fraud firsthand', color: 'border-brand/30' },
                            { date: 'Aug 2025', event: 'First working prototype of Maya AI interviewer', color: 'border-brand/30' },
                            { date: 'Nov 2025', event: 'Sentinel Engine and 15-signal Forensic Engine go live', color: 'border-yellow-500/30' },
                            { date: 'Jan 2026', event: 'Beta program: 82 interviews, 6,824 signals analyzed, 41% flagged', color: 'border-green-500/30' },
                            { date: 'Feb 2026', event: 'Open for pilot customers — free 5-interview trial', color: 'border-brand/40' },
                        ].map((milestone, index) => (
                            <div key={index} className={`flex items-start gap-4 p-4 rounded-xl bg-card border ${milestone.color}`}>
                                <div className="text-brand font-bold text-sm whitespace-nowrap mt-0.5">{milestone.date}</div>
                                <div className="w-2 h-2 rounded-full bg-brand shrink-0 mt-2" />
                                <p className="text-text-secondary text-sm">{milestone.event}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="p-12 rounded-[2.5rem] bg-gradient-to-br from-brand/10 via-brand/5 to-transparent border border-brand/20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to hire with confidence?</h2>
                    <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                        Start with a free pilot — 5 interviews, full forensic reports. See who you&apos;re really hiring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <CTAButton location="hero" className="px-10 py-4 text-base" />
                        <CTAButton variant="secondary" location="hero" className="px-10 py-4 text-base" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-text-muted">
                        {['No credit card required', 'Setup in 5 minutes', 'Full forensic reports'].map((badge) => (
                            <span key={badge} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                {badge}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
