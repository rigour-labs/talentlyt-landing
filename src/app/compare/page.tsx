import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Check, X, ShieldCheck, Bot, Eye, Fingerprint, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'How TalentLyt is Different | AI Interview Platform Comparison',
    description: 'See how TalentLyt compares to traditional AI interview platforms. The only platform with Multi-Agent consensus and forensic integrity verification for technical hiring.',
    keywords: [
        'AI interview platform comparison',
        'best AI interview software',
        'interview platform features',
        'technical interview platform',
        'AI hiring platform comparison',
        'interview integrity platform',
    ],
    openGraph: {
        title: 'How TalentLyt is Different | AI Interview Platform Comparison',
        description: 'The only AI interview platform with Multi-Agent consensus and forensic integrity verification.',
        type: 'website',
    },
};

export default function ComparisonPage() {
    type FeatureValue = boolean | 'partial';

    const comparisonFeatures: { category: string; features: { name: string; talentlyt: FeatureValue; traditional: FeatureValue }[] }[] = [
        {
            category: 'AI Interview Technology',
            features: [
                { name: 'AI-Conducted Interviews', talentlyt: true, traditional: true },
                { name: 'Adaptive Questioning', talentlyt: true, traditional: 'partial' },
                { name: 'Multi-Agent AI Consensus', talentlyt: true, traditional: false },
                { name: 'Real-time Code Assessment', talentlyt: true, traditional: true },
            ],
        },
        {
            category: 'Integrity & Verification',
            features: [
                { name: 'Forensic Integrity Verification', talentlyt: true, traditional: false },
                { name: 'Proxy Actor Detection', talentlyt: true, traditional: false },
                { name: 'AI-Assistance Detection', talentlyt: true, traditional: false },
                { name: 'Behavioral Analysis', talentlyt: true, traditional: 'partial' },
                { name: 'Gaze Tracking (Vision-Sync)', talentlyt: true, traditional: false },
                { name: 'Cognitive Pattern Analysis', talentlyt: true, traditional: false },
            ],
        },
        {
            category: 'Enterprise Features',
            features: [
                { name: 'SOC2 Compliance Ready', talentlyt: true, traditional: true },
                { name: 'GDPR Compliant', talentlyt: true, traditional: true },
                { name: 'Legally-Defensible Audit Trails', talentlyt: true, traditional: 'partial' },
                { name: 'Complete Session Recording', talentlyt: true, traditional: true },
                { name: 'Code Playback Analysis', talentlyt: true, traditional: 'partial' },
            ],
        },
        {
            category: 'Bias & Fairness',
            features: [
                { name: 'Standardized Evaluation', talentlyt: true, traditional: true },
                { name: 'Bias Reduction Technology', talentlyt: true, traditional: 'partial' },
                { name: 'Technical Truth Focus', talentlyt: true, traditional: false },
                { name: 'Consensus-Based Scoring', talentlyt: true, traditional: false },
            ],
        },
    ];

    const uniqueAdvantages = [
        {
            icon: Bot,
            title: 'Multi-Agent AI Architecture',
            description: 'Unlike single-model platforms, TalentLyt uses multiple AI agents (Maya + Forensic Engine) that must reach consensus. This eliminates hallucinations and ensures accurate assessments.',
        },
        {
            icon: ShieldCheck,
            title: 'Forensic Integrity Verification',
            description: 'We don\'t just assess skills—we verify authenticity. Our system detects proxy actors, AI-assisted responses, and cheating attempts in real-time.',
        },
        {
            icon: Eye,
            title: 'Vision-Sync Technology',
            description: 'Advanced gaze tracking and behavioral analysis ensure candidates are fully engaged and not receiving off-screen assistance.',
        },
        {
            icon: Fingerprint,
            title: 'Cognitive-Audit System',
            description: 'Our proprietary system analyzes cognitive patterns to detect inconsistencies that indicate fraudulent behavior.',
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main id="main-content" role="main" className="pt-24 pb-16">
                {/* Hero */}
                <section className="px-4 sm:px-6 py-16 sm:py-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            <ShieldCheck className="w-3 h-3" />
                            Platform Comparison
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Not Just Another <span className="text-brand">AI Interview Platform</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Traditional AI interview platforms assess skills. TalentLyt verifies truth.
                            We&apos;re the only platform built from the ground up for <strong className="text-white">integrity-first technical hiring</strong>.
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
                                    Traditional AI interview platforms were built to <strong className="text-white">automate assessment</strong>.
                                    They help you evaluate candidates faster, but they don&apos;t address a fundamental problem:
                                    <strong className="text-white"> How do you know the candidate is being authentic?</strong>
                                </p>
                                <p>
                                    TalentLyt was built for a different purpose: <strong className="text-white">integrity-first technical hiring</strong>.
                                    Every feature, from our Multi-Agent AI architecture to our forensic verification systems,
                                    is designed to ensure that the person you interview is the person you hire,
                                    and that their skills are genuinely their own.
                                </p>
                                <p>
                                    This isn&apos;t about being &quot;better&quot; than existing platforms—it&apos;s about solving a problem they weren&apos;t designed to address.
                                    If your priority is speed alone, any platform will do.
                                    If your priority is <strong className="text-white">truth in hiring</strong>, there&apos;s only TalentLyt.
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
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all"
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
