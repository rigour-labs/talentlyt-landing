import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageAnalytics } from '@/components/page-analytics';
import { ArrowLeft, Clock, CheckCircle2, XCircle, ArrowRight, Shield, Zap, DollarSign } from 'lucide-react';
import { RelatedArticles } from '@/components/blog/related-articles';
import { CTAButton } from '@/components/ui/cta-button';

export const metadata: Metadata = {
    title: 'Rigovo vs HireVue: Which AI Interview Platform is Right for You? (2026)',
    description: 'Detailed comparison of Rigovo and HireVue for technical hiring. Compare features, pricing, fraud detection, and identity verification capabilities.',
    keywords: [
        'HireVue alternative',
        'Rigovo vs HireVue',
        'AI interview platform comparison',
        'HireVue competitor',
        'best AI interview software',
        'technical interview platform',
        'video interview software comparison',
        'HireVue pricing alternative'
    ],
    openGraph: {
        title: 'Rigovo vs HireVue: Which AI Interview Platform is Right for You?',
        description: 'Side-by-side comparison of Rigovo and HireVue for technical hiring teams.',
        type: 'article',
        publishedTime: '2026-02-09T00:00:00Z',
        authors: ['Rigovo Product Team'],
    },
    alternates: {
        canonical: 'https://rigovo.com/blog/rigovo-vs-hirevue',
    },
};

const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Rigovo vs HireVue: Which AI Interview Platform is Right for You? (2026)',
    description: 'Detailed comparison of Rigovo and HireVue for technical hiring. Compare features, pricing, fraud detection, and identity verification.',
    image: 'https://rigovo.com/og-image.png',
    datePublished: '2026-02-09T00:00:00Z',
    dateModified: '2026-02-09T00:00:00Z',
    author: { '@type': 'Organization', name: 'Rigovo Product Team', url: 'https://rigovo.com/about' },
    publisher: { '@type': 'Organization', name: 'Rigovo', logo: { '@type': 'ImageObject', url: 'https://rigovo.com/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://rigovo.com/blog/rigovo-vs-hirevue' },
};

const comparisonData = [
    { feature: 'AI Interview Conductor', rigovo: true, hirevue: true, note: 'Both offer AI-led interviews' },
    { feature: 'Identity Verification', rigovo: true, hirevue: false, note: 'Rigovo verifies candidate identity in real-time' },
    { feature: 'Fraud Detection (15 signals)', rigovo: true, hirevue: false, note: 'Deepfake, proxy, AI cheating detection' },
    { feature: 'Continuous Identity Verification', rigovo: true, hirevue: false, note: 'Ongoing speaker verification throughout session' },
    { feature: 'AI-Assisted Cheating Detection', rigovo: true, hirevue: false, note: 'Detects external assistance in real-time' },
    { feature: 'Technical Code Assessment', rigovo: true, hirevue: true, note: 'Live coding environment' },
    { feature: 'Free Pilot Available', rigovo: true, hirevue: false, note: 'Rigovo offers 90-min free pilot' },
    { feature: 'SOC2 Compliant', rigovo: true, hirevue: true, note: 'Enterprise security' },
    { feature: 'GDPR Compliant', rigovo: true, hirevue: true, note: 'Data privacy' },
    { feature: 'Forensic Audit Trail', rigovo: true, hirevue: false, note: 'Cryptographic chain integrity' },
];

export default function RigovoVsHireVuePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main id="main-content" role="main" className="pt-24 pb-16">
                    <article className="px-4 sm:px-6 py-12">
                        <div className="max-w-4xl mx-auto">
                            <nav className="mb-8">
                                <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-brand transition-colors text-sm">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Blog
                                </Link>
                            </nav>

                            <header className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 rounded-lg bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider">
                                        Comparison
                                    </span>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock className="w-3 h-3" />
                                        10 min read
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                    Rigovo vs HireVue: <span className="text-brand">Complete Comparison</span> for 2026
                                </h1>
                                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                                    Both platforms offer AI-powered interviews. But when it comes to fraud detection, identity verification, and technical hiring—they&apos;re not the same. Here&apos;s an honest breakdown.
                                </p>
                                <time className="block mt-8 text-sm text-text-muted font-mono uppercase tracking-widest">
                                    By Rigour Labs Team | Feb 9, 2026
                                </time>
                            </header>

                            <div className="prose prose-invert prose-lg max-w-none">
                                {/* TL;DR */}
                                <section className="mb-16">
                                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                                        <h2 className="text-2xl font-black text-white mb-4">TL;DR</h2>
                                        <ul className="space-y-3 text-text-secondary">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                                <span><strong className="text-white">Choose HireVue</strong> if you need high-volume screening for non-technical roles with established enterprise workflows.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                                <span><strong className="text-white">Choose Rigovo</strong> if you need fraud detection, identity verification, and technical assessment for engineering roles.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Quick Comparison */}
                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Feature Comparison</h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-white/10">
                                                    <th className="px-4 py-4 text-left text-sm font-bold text-text-muted">Feature</th>
                                                    <th className="px-4 py-4 text-center text-sm font-bold text-brand">Rigovo</th>
                                                    <th className="px-4 py-4 text-center text-sm font-bold text-text-muted">HireVue</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {comparisonData.map((row, i) => (
                                                    <tr key={i} className="hover:bg-white/[0.02]">
                                                        <td className="px-4 py-4">
                                                            <span className="text-white font-medium">{row.feature}</span>
                                                            <p className="text-xs text-text-muted mt-1">{row.note}</p>
                                                        </td>
                                                        <td className="px-4 py-4 text-center">
                                                            {row.rigovo ? (
                                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                                                            ) : (
                                                                <XCircle className="w-5 h-5 text-text-muted mx-auto" />
                                                            )}
                                                        </td>
                                                        <td className="px-4 py-4 text-center">
                                                            {row.hirevue ? (
                                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                                                            ) : (
                                                                <XCircle className="w-5 h-5 text-text-muted mx-auto" />
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* The Problem with Traditional AI Interviews */}
                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Problem HireVue Doesn&apos;t Solve</h2>
                                    <p className="text-text-secondary mb-6">
                                        HireVue pioneered video interviewing. They&apos;re excellent at what they do: high-volume screening for customer service, retail, and hospitality roles.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        But technical hiring in 2026 has a different challenge: <span className="text-white font-bold">fraud</span>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                            <p className="text-3xl font-black text-danger mb-2">1 in 5</p>
                                            <p className="text-sm text-text-muted">Candidates use AI assistance during interviews</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                            <p className="text-3xl font-black text-danger mb-2">12%</p>
                                            <p className="text-sm text-text-muted">Show signs of proxy interviewing</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                            <p className="text-3xl font-black text-danger mb-2">$280K</p>
                                            <p className="text-sm text-text-muted">Average cost of a bad engineering hire</p>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary">
                                        When you&apos;re hiring a call center rep, identity verification is less critical. But when you&apos;re hiring a senior engineer with access to your codebase and production systems? You need to know the person you interviewed is the person who shows up on day one.
                                    </p>
                                </section>

                                {/* Key Differences */}
                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Where Rigovo Differs</h2>

                                    <div className="space-y-8">
                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Shield className="w-6 h-6 text-brand" />
                                                <h3 className="text-xl font-bold text-white">15-Signal Fraud Detection</h3>
                                            </div>
                                            <p className="text-text-secondary mb-4">
                                                Rigovo monitors 15 signals simultaneously during every interview:
                                            </p>
                                            <ul className="grid grid-cols-2 gap-2 text-sm text-text-muted">
                                                <li>Identity verification (5 signals)</li>
                                                <li>Behavioral analysis (6 signals)</li>
                                                <li>Technical integrity (4 signals)</li>
                                                <li>Proxy detection</li>
                                                <li>AI-assisted cheating detection</li>
                                                <li>Session anomaly detection</li>
                                            </ul>
                                            <p className="text-xs text-text-muted mt-3 italic">
                                                Signal details shared under NDA during pilot evaluation.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Zap className="w-6 h-6 text-brand" />
                                                <h3 className="text-xl font-bold text-white">Built for Technical Hiring</h3>
                                            </div>
                                            <p className="text-text-secondary">
                                                Maya AI doesn&apos;t just ask behavioral questions. She conducts live technical screens—system design, coding challenges, architecture discussions—while simultaneously verifying candidate authenticity. HireVue focuses on personality and communication assessments.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <DollarSign className="w-6 h-6 text-brand" />
                                                <h3 className="text-xl font-bold text-white">Transparent Pricing</h3>
                                            </div>
                                            <p className="text-text-secondary">
                                                HireVue requires annual contracts with custom pricing. Rigovo offers transparent per-interview pricing starting at $29/interview with a free pilot to prove value before you commit.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* When to Choose Each */}
                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">When to Choose Each Platform</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h3 className="text-lg font-bold text-white mb-4">Choose HireVue if you:</h3>
                                            <ul className="space-y-3 text-text-secondary text-sm">
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                                                    Hire high volumes of non-technical roles
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                                                    Need established enterprise integrations
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                                                    Focus on personality assessment
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                                                    Have existing HireVue workflows
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                                            <h3 className="text-lg font-bold text-white mb-4">Choose Rigovo if you:</h3>
                                            <ul className="space-y-3 text-text-secondary text-sm">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                                    Hire software engineers and technical roles
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                                    Need fraud and identity verification
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                                    Want to detect AI cheating during interviews
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                                    Prefer transparent, pay-per-use pricing
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Bottom Line */}
                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Bottom Line</h2>
                                    <p className="text-text-secondary mb-6">
                                        HireVue is a solid choice for general hiring at scale. They&apos;ve been doing this for years and have the enterprise relationships to prove it.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        But if you&apos;re specifically hiring technical talent in 2026—where fraud is rampant, AI assistance is everywhere, and a bad hire costs $280K—you need a platform built for that reality.
                                    </p>
                                    <p className="text-text-secondary">
                                        Rigovo isn&apos;t trying to replace HireVue for every use case. We&apos;re focused on one thing: ensuring the engineer you interview is the engineer you hire.
                                    </p>
                                </section>
                            </div>

                            {/* Related Articles */}
                            <RelatedArticles currentSlug="rigovo-vs-hirevue" />

                            <div className="mt-16 p-1 rounded-[2.5rem] bg-gradient-to-r from-brand/50 to-transparent">
                                <div className="bg-[#050505] p-10 md:p-16 rounded-[2.4rem] text-center">
                                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                                        See the Difference for Yourself
                                    </h3>
                                    <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg">
                                        Free pilot — 5 interviews, full forensic reports. No contracts, no sales pressure.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <CTAButton location="blog" className="px-10 py-4" />
                                        <CTAButton variant="secondary" location="blog" className="px-10 py-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
                <PageAnalytics pagePath="/blog/rigovo-vs-hirevue" />
                <Footer />
            </div>
        </>
    );
}
