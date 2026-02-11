import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Check, X, ShieldCheck, Bot, Eye, Fingerprint, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageAnalytics } from '@/components/page-analytics';
import { CTAButton } from '@/components/ui/cta-button';

export const metadata: Metadata = {
    title: 'Compare Rigovo vs HireVue, Codility & More | AI Interview Platform',
    description: 'Compare Rigovo with HireVue, Codility, Talently.ai. See why teams choose Rigovo for 15-signal integrity verification that other platforms don\'t offer.',
    keywords: [
        'Rigovo vs HireVue',
        'Rigovo vs Codility',
        'Rigovo vs Talently.ai',
        'Rigovo vs HackerRank',
        'HireVue alternative',
        'Codility alternative',
        'Talently.ai alternative',
        'HackerRank alternative',
        'best AI interview platform 2026',
        'AI interview platform comparison',
        'interview verification comparison',
        'proxy candidate detection software',
    ],
    alternates: {
        canonical: 'https://rigovo.com/compare',
    },
    openGraph: {
        title: 'Rigovo vs HireVue vs Codility vs Talently.ai — Full Comparison 2026',
        description: 'Rigovo offers 15-signal integrity verification that other AI interview platforms miss entirely. Compare features side by side.',
        type: 'website',
    },
};

export default function ComparisonPage() {
    type FeatureValue = boolean | 'partial';

    const comparisonFeatures: { category: string; features: { name: string; rigovo: FeatureValue; traditional: FeatureValue }[] }[] = [
        {
            category: 'Interview Intelligence',
            features: [
                { name: 'Live AI Interviewer (Conversational)', rigovo: true, traditional: true },
                { name: 'Adaptive Follow-Up Questions', rigovo: true, traditional: 'partial' },
                { name: 'Skill-by-Skill Scoring Rubric', rigovo: true, traditional: 'partial' },
                { name: 'Hire/No-Hire Recommendation', rigovo: true, traditional: false },
                { name: 'Full Interview Transcript', rigovo: true, traditional: true },
            ],
        },
        {
            category: 'Integrity & Verification',
            features: [
                { name: '15-Signal Forensic Verification', rigovo: true, traditional: false },
                { name: 'Continuous Identity Verification', rigovo: true, traditional: false },
                { name: 'Real-Time Anomaly Detection', rigovo: true, traditional: false },
                { name: 'Proxy & Impersonation Detection', rigovo: true, traditional: false },
                { name: 'AI-Assisted Cheating Detection', rigovo: true, traditional: false },
                { name: 'Session Integrity Scoring', rigovo: true, traditional: false },
            ],
        },
        {
            category: 'Enterprise & Compliance',
            features: [
                { name: 'Bias-Reduced Assessments', rigovo: true, traditional: 'partial' },
                { name: 'Legally-Defensible Audit Trails', rigovo: true, traditional: 'partial' },
                { name: 'GDPR & CCPA Compliant', rigovo: true, traditional: true },
                { name: 'SSO Integration', rigovo: true, traditional: true },
                { name: 'AES-256 Encryption', rigovo: true, traditional: 'partial' },
                { name: 'Role-Based Access Control', rigovo: true, traditional: true },
            ],
        },
    ];

    const uniqueAdvantages = [
        {
            icon: Bot,
            title: 'AI That Interviews, Not Just Tests',
            description: 'Maya conducts a real conversation — adaptive, technical, and indistinguishable from talking to a senior engineer. Not a quiz. Not a chatbot. A live interview.',
        },
        {
            icon: ShieldCheck,
            title: '15-Signal Forensic Verification',
            description: 'Every interview is analyzed across 15 proprietary signals covering identity, behavior, and technical depth. Know exactly who you\'re hiring — not just what they say they know.',
        },
        {
            icon: Eye,
            title: 'Catches What Others Miss',
            description: 'Proxy candidates, AI-assisted cheating, identity fraud — 41% of beta candidates were flagged for issues that would have slipped through traditional platforms.',
        },
        {
            icon: Fingerprint,
            title: 'Verification Built In, Not Bolted On',
            description: 'Other platforms assess skills. We verify the human behind the screen. Identity, authenticity, and technical integrity — checked simultaneously during every session.',
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PageAnalytics pagePath="/compare" />
            <main id="main-content" role="main" className="pt-36 pb-16">
                {/* Hero */}
                <section className="px-4 sm:px-6 py-16 sm:py-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            <ShieldCheck className="w-3 h-3" />
                            Platform Comparison
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Rigovo vs HireVue, Codility, <span className="text-brand">Talently.ai</span> &amp; Others
                        </h1>
                        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Most AI interview platforms assess skills. <strong className="text-white">Rigovo verifies the human behind the screen.</strong> 15-signal forensic verification that catches proxy candidates, AI-assisted cheating, and identity fraud — things other platforms miss entirely.
                        </p>
                    </div>
                </section>

                {/* Unique Value Prop */}
                <section className="px-4 sm:px-6 py-16 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            What Makes Rigovo <span className="text-brand">Different</span>
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
                            See how Rigovo&apos;s integrity-first approach compares to traditional AI interview platforms.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="py-4 px-4 text-left text-white font-bold">Feature</th>
                                        <th className="py-4 px-4 text-center">
                                            <div className="inline-flex flex-col items-center">
                                                <span className="text-brand font-bold">Rigovo</span>
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
                                                        {feature.rigovo === true ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : feature.rigovo === 'partial' ? (
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
                                    Here&apos;s what nobody talks about: <strong className="text-white">proxy interviews and AI-assisted cheating are surging</strong>.
                                    The person you interviewed might not be the person who shows up on day one.
                                </p>
                                <p>
                                    Most AI interview tools? They&apos;re built to ask questions faster. Great.
                                    But they can&apos;t tell you if the candidate is actually <strong className="text-white">who they claim to be</strong>.
                                    That&apos;s the gap we fill.
                                </p>
                                <p>
                                    We built Rigovo because we got burned. Hired engineers who couldn&apos;t code.
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
                            When to Choose Rigovo
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
                                Ready to See the Difference?
                            </h2>
                            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                                Free pilot — 5 interviews, full forensic reports. See what other platforms miss.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                                <CTAButton location="compare" className="px-10 py-4 text-base" />
                                <CTAButton variant="secondary" location="compare" className="px-10 py-4 text-base" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 text-xs text-text-muted">
                                {['No credit card required', 'Setup in 5 minutes', 'Full forensic reports'].map((badge) => (
                                    <span key={badge} className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
