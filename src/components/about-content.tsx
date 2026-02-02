'use client';

import React from 'react';
import { Target, Zap, Shield, Users, Rocket, Award } from 'lucide-react';

export function AboutContent() {
    const values = [
        {
            icon: Target,
            title: "Truth in Hiring",
            description: "We believe every hiring decision should be based on verified skills, not assumptions or biases."
        },
        {
            icon: Shield,
            title: "Integrity First",
            description: "Our Forensic Engine ensures every assessment is fair, transparent, and legally defensible."
        },
        {
            icon: Zap,
            title: "Engineering Excellence",
            description: "We're engineers building for engineers—precision, reliability, and performance are non-negotiable."
        },
        {
            icon: Users,
            title: "Human-Centered AI",
            description: "AI augments human judgment, it doesn't replace it. Recruiters stay in control of every decision."
        }
    ];

    const milestones = [
        { year: "2024", event: "Founded by engineers who experienced hiring pain firsthand" },
        { year: "2025", event: "Launched Maya AI Interviewer and Legal-Advisor Forensic Engine" }
    ];

    return (
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <Rocket className="w-4 h-4 text-brand" />
                        <span className="text-sm font-medium text-brand">Our Story</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Building the Future of <span className="text-brand">Verified</span> Hiring
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        TalentLyt was born from a simple frustration: hiring is broken. We're fixing that with AI that doesn't just screen—it verifies.
                    </p>
                </div>

                <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-brand/10 via-brand/5 to-transparent border border-brand/20 mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center">
                            <Award className="w-7 h-7 text-brand" />
                        </div>
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                    </div>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        To make every technical hire a <span className="text-white font-semibold">verified hire</span>. We combine conversational AI with <span className="text-white font-semibold">13-signal integrity verification</span>, <span className="text-white font-semibold">predictive competency mapping</span>, and the world-first <span className="text-white font-semibold">Interview Genome</span>.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
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

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-brand/20" />
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <div className="inline-block p-4 rounded-xl bg-card border border-border/50">
                                            <div className="text-brand font-bold mb-1">{milestone.year}</div>
                                            <p className="text-text-secondary text-sm">{milestone.event}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-brand border-4 border-background z-10" />
                                    <div className="flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="text-center p-8 rounded-[2rem] bg-muted/30 border border-border/30">
                    <h2 className="text-2xl font-bold mb-4">Rigour Labs Inc.</h2>
                    <p className="text-text-secondary mb-4">
                        TalentLyt is a product of Rigour Labs Inc., focusing on trust infrastructure for the AI era.
                    </p>
                </section>
            </div>
        </main>
    );
}
