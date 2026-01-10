'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Brain, Shield, Users, Scale, AlertTriangle, Eye, Target, Heart } from 'lucide-react';

export default function AIEthicsPage() {
    const principles = [
        {
            icon: Shield,
            title: "Human-Centered Design",
            description: "AI serves as a decision-support tool, not a decision-maker. Human recruiters retain full authority over hiring outcomes.",
            commitments: [
                "Final hiring decisions always rest with human recruiters",
                "AI recommendations are explainable and auditable",
                "Candidates can request human review of AI assessments"
            ]
        },
        {
            icon: Scale,
            title: "Fairness & Non-Discrimination",
            description: "Our AI systems are designed to reduce bias, not amplify it. We actively test for and mitigate discriminatory patterns.",
            commitments: [
                "Regular bias audits by independent third parties",
                "Demographic parity testing across protected classes",
                "Continuous monitoring for disparate impact"
            ]
        },
        {
            icon: Eye,
            title: "Transparency & Explainability",
            description: "Candidates and employers deserve to understand how AI assessments work and what factors influence outcomes.",
            commitments: [
                "Clear disclosure of AI involvement in interviews",
                "Assessment criteria are documented and accessible",
                "Audit reports explain scoring rationale"
            ]
        },
        {
            icon: Users,
            title: "Candidate Dignity",
            description: "Every candidate is treated with respect. Our AI is designed to create a supportive, professional interview experience.",
            commitments: [
                "Accommodation modes for candidates with disabilities",
                "No trick questions or adversarial tactics",
                "Candidates can opt-out of AI interviews"
            ]
        },
        {
            icon: Target,
            title: "Accuracy & Reliability",
            description: "We only deploy AI capabilities that meet our rigorous accuracy standards and continuously validate performance.",
            commitments: [
                "Minimum 95% accuracy threshold for deployed models",
                "Continuous validation against human expert benchmarks",
                "Regular model retraining and performance monitoring"
            ]
        },
        {
            icon: Heart,
            title: "Privacy by Design",
            description: "Data minimization and privacy protection are core architectural principles, not afterthoughts.",
            commitments: [
                "Collect only data necessary for assessment",
                "Automatic data deletion per retention policies",
                "No selling of candidate data to third parties"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col pt-20">
            <Navbar />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <Brain className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Responsible AI</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            AI <span className="text-brand">Ethics</span> Disclosure
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            TalentLyt is committed to developing and deploying AI responsibly. Our AI agents are designed to augment human judgment, not replace it.
                        </p>
                        <p className="text-sm text-text-muted mt-4">
                            Last updated: January 10, 2026
                        </p>
                    </div>

                    {/* Important Notice */}
                    <div
                        className="p-6 rounded-2xl bg-warning/10 border border-warning/30 mb-12"
                    >
                        <div className="flex gap-4">
                            <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-warning mb-2">Important Disclosure</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    By using TalentLyt, you acknowledge that our AI agents provide assessment support based on observable metrics. TalentLyt is not a substitute for human judgment. All AI-generated scores and recommendations should be reviewed by qualified human recruiters before making employment decisions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Principles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {principles.map((principle, index) => (
                            <div
                                key={principle.title}
                                className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                        <principle.icon className="w-5 h-5 text-brand" />
                                    </div>
                                    <h3 className="font-bold text-lg">{principle.title}</h3>
                                </div>
                                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                    {principle.description}
                                </p>
                                <div className="space-y-2">
                                    {principle.commitments.map((commitment, i) => (
                                        <div key={i} className="flex gap-2 text-xs text-text-muted">
                                            <span className="text-brand">•</span>
                                            <span>{commitment}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Our Commitment */}
                    <section
                        className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20"
                    >
                        <h2 className="text-2xl font-bold mb-4">Our Ongoing Commitment</h2>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            AI ethics is not a checkbox—it's an ongoing responsibility. We continuously review and update our practices as AI technology evolves and new ethical considerations emerge. We welcome feedback from candidates, employers, and the broader community.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:ethics@talentlyt.cloud" className="px-4 py-2 rounded-xl bg-brand/20 text-brand text-sm font-medium hover:bg-brand/30 transition-colors">
                                Report an Ethics Concern
                            </a>
                            <a href="/privacy" className="px-4 py-2 rounded-xl bg-muted text-text-secondary text-sm font-medium hover:bg-border transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
