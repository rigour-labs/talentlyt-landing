import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Check, X, ShieldCheck, Bot, Eye, Fingerprint, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compare TalentLyt vs HireVue, Codility & More',
    description: 'Compare TalentLyt with HireVue, Codility, Talently.ai. 13-signal AI leadership verification, 6,800+ sessions analyzed in beta.',
    keywords: [
        'TalentLyt vs HireVue',
        'TalentLyt vs Codility',
        'TalentLyt vs Talently.ai',
        'TalentLyt vs HackerRank',
        'TalentLyt vs TalentLyft',
        'HireVue alternative',
        'Codility alternative',
        'Talently.ai alternative',
        'HackerRank alternative',
        'best AI interview platform 2026',
        'AI interview platform comparison',
        'interview verification comparison',
        'deepfake detection interview platform',
        'proxy candidate detection software',
    ],
    alternates: {
        canonical: 'https://talentlyt.cloud/compare',
    },
    openGraph: {
        title: 'TalentLyt vs HireVue vs Codility vs Talently.ai — Full Comparison 2026',
        description: 'TalentLyt offers 13-signal AI leadership verification with 6,800+ sessions analyzed in beta testing. Compare all AI interview platforms.',
        type: 'website',
    },
};

export default function ComparisonPage() {
    type FeatureValue = boolean | 'partial';

    const comparisonFeatures: { category: string; features: { name: string; talentlyt: FeatureValue; traditional: FeatureValue }[] }[] = [
        {
            category: 'Interview Intelligence',
            features: [
                { name: 'Live Multi-Agent AI (Maya)', talentlyt: true, traditional: true },
                { name: 'Predictive Job Success (85%)', talentlyt: true, traditional: false },
                { name: 'Interview Genome Export', talentlyt: true, traditional: false },
                { name: 'Federated Collective Intelligence', talentlyt: true, traditional: false },
                { name: 'Adaptive Claim Probing', talentlyt: true, traditional: 'partial' },
            ],
        },
        {
            category: 'Forensic Integrity & Trust',
            features: [
                { name: '13-Signal Verification', talentlyt: true, traditional: false },
                { name: 'Nova-grade Voice Auth', talentlyt: true, traditional: false },
                { name: 'Lip-Sync & Gaze Sync', talentlyt: true, traditional: false },
                { name: 'Micro-expression Analysis', talentlyt: true, traditional: false },
                { name: 'Jailbreak & Prompt Defense', talentlyt: true, traditional: false },
                { name: 'Cognitive Load Analysis', talentlyt: true, traditional: false },
            ],
        },
        {
            category: 'Enterprise Governance',
            features: [
                { name: 'Bias Auditor (EEOC)', talentlyt: true, traditional: 'partial' },
                { name: 'Self-Learning RL Weights', talentlyt: true, traditional: false },
                { name: 'Legally-Defensible Audit Trails', talentlyt: true, traditional: 'partial' },
                { name: 'White-Label Reports', talentlyt: true, traditional: 'partial' },
                { name: 'SAML / SSO (WorkOS)', talentlyt: true, traditional: true },
            ],
        },
    ];

    const uniqueAdvantages = [
        {
            icon: Bot,
            title: 'Portable Interview Genome',
            description: 'TalentLyt creates portable, cryptographically-signed candidate profiles. Verified skills that travel with the candidate, eliminating repetitive evaluation and securing hiring intent.',
        },
        {
            icon: ShieldCheck,
            title: '13-Signal Forensic Audit',
            description: 'We analyze 13 distinct biometric and behavioral signals (lip-sync, gaze, voice biometrics) in real-time to ensure absolute session integrity and authentic candidate verification.',
        },
        {
            icon: Eye,
            title: 'Predictive Job Success',
            description: 'Our proprietary ML models predict actual on-the-job performance probability with 85% accuracy, synthesized from million-point interview signals.',
        },
        {
            icon: Fingerprint,
            title: 'Self-Learning Neural Weights',
            description: 'Our system uses reinforcement learning (RL) to continuously calibrate integrity scores against global patterns, ensuring the most accurate audit in the world.',
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main id="main-content" role="main" className="pt-36 pb-16">
                {/* Hero */}
                <section className="px-4 sm:px-6 py-16 sm:py-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            <ShieldCheck className="w-3 h-3" />
                            Platform Comparison
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            TalentLyt vs HireVue, Codility, <span className="text-brand">Talently.ai</span> & Others
                        </h1>
                        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Looking for a HireVue alternative? Comparing Codility vs TalentLyt? <strong className="text-white">TalentLyt features real-time 13-signal AI leadership verification</strong>—ensuring candidates architect solutions, not just prompt AI, with identity verification that other platforms miss entirely.
                        </p>
                    </div>
                </section>

                {/* Unique Value Prop */}
                <section className="px-4 sm:px-6 py-16 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            What Makes TalentLyt <span className="text-brand">Different</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {uniqueAdvantages.map((advantage, i) => (
                                <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-brand/30 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
                                        <advantage.icon className="w-7 h-7 text-brand" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">{advantage.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="px-4 sm:px-6 py-16">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4 text-center">
                            Feature Comparison
                        </h2>
                        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
                            See how TalentLyt&apos;s integrity-first approach compares to traditional AI interview platforms.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-4 px-4 text-left text-white font-bold">Feature</th>
                                        <th className="py-4 px-4 text-center">
                                            <div className="inline-flex flex-col items-center">
                                                <span className="text-brand font-bold">TalentLyt</span>
                                                <span className="text-[10px] text-text-muted uppercase tracking-wider">Integrity-First</span>
                                            </div>
                                        </th>
                                        <th className="py-4 px-4 text-center">
                                            <div className="inline-flex flex-col items-center">
                                                <span className="text-text-secondary font-bold">Traditional Platforms</span>
                                                <span className="text-[10px] text-text-muted uppercase tracking-wider">Assessment-Only</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((section, sectionIdx) => (
                                        <>
                                            <tr key={`section-${sectionIdx}`} className="bg-white/[0.02]">
                                                <td colSpan={3} className="py-3 px-4 text-sm font-bold text-brand uppercase tracking-wider">
                                                    {section.category}
                                                </td>
                                            </tr>
                                            {section.features.map((feature, featureIdx) => (
                                                <tr key={`feature-${sectionIdx}-${featureIdx}`} className="border-b border-white/5">
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-white text-sm sm:text-base">{feature.name}</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                                                        {feature.talentlyt === true ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : feature.talentlyt === 'partial' ? (
                                                            <span className="text-amber-500 text-sm">Partial</span>
                                                        ) : (
                                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                                        )}
                                                    </td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                                                        {feature.traditional === true ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : feature.traditional === 'partial' ? (
                                                            <span className="text-amber-500 text-sm">Partial</span>
                                                        ) : (
                                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Category Definition */}
                <section className="px-4 sm:px-6 py-16 bg-white/[0.01]">
                    <div className="max-w-4xl mx-auto">
                        <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-brand/10 to-transparent border border-brand/20">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                                We&apos;re Not Competing. We&apos;re Defining a New Category.
                            </h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    Here&apos;s what nobody talks about: <strong className="text-white">30-40% of remote interviews involve candidates who struggle to demonstrate authentic problem-solving</strong>.
                                    Proxy candidates. Deepfakes. ChatGPT running in another tab. The person you interviewed might not be the person who shows up on day one.
                                </p>
                                <p>
                                    Most AI interview tools? They&apos;re built to ask questions faster. Great.
                                    But they can&apos;t tell you if the candidate is actually <strong className="text-white">who they claim to be</strong>.
                                    That&apos;s the gap we fill.
                                </p>
                                <p>
                                    We built TalentLyt because we got burned. Hired engineers who couldn&apos;t code.
                                    Discovered proxy candidates after onboarding. So we built the verification layer that should have existed from the start.
                                    If you just want faster interviews, there are plenty of options.
                                    If you want to <strong className="text-white">know who you&apos;re actually hiring</strong>, that&apos;s us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="px-4 sm:px-6 py-16">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            When to Choose TalentLyt
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Remote-First Hiring',
                                    description: 'When you can\'t physically verify candidates, integrity verification becomes essential.',
                                },
                                {
                                    title: 'High-Stakes Roles',
                                    description: 'Senior engineers, security-sensitive positions, and leadership roles where bad hires are costly.',
                                },
                                {
                                    title: 'Compliance Requirements',
                                    description: 'When you need legally-defensible audit trails and documented verification processes.',
                                },
                            ].map((useCase, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                                    <p className="text-text-secondary text-sm">{useCase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-4 sm:px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="p-12 rounded-[2.5rem] bg-gradient-to-b from-brand/10 to-transparent border border-brand/20">
                            <ShieldCheck className="w-16 h-16 text-brand mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready for Integrity-First Hiring?
                            </h2>
                            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                                See how TalentLyt&apos;s Multi-Agent AI and forensic verification can transform your technical hiring process.
                            </p>
                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all"
                            >
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
