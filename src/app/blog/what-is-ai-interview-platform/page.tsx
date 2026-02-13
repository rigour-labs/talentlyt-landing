import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageAnalytics } from '@/components/page-analytics';
import { ArrowLeft, Clock, BookOpen, Sparkles, Brain, Scale, ShieldCheck } from 'lucide-react';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
    title: 'The Blueprint: What is an AI Interview Platform in 2026?',
    description: 'Beyond automated scripts. Discover how AI interview platforms are evolving into complex socio-technical systems that balance scale with human empathy and integrity.',
    keywords: [
        'AI interview platform guide',
        'automated technical screening',
        'AI recruitment ethics',
        'future of engineering hiring',
        'Maya AI interview',
        'automated coding interviews'
    ],
    openGraph: {
        title: 'The Blueprint: What is an AI Interview Platform in 2026?',
        description: 'A deep dive into how AI is redefining the "first call" in technical recruitment.',
        type: 'article',
        publishedTime: '2025-01-15T00:00:00Z',
        authors: ['Rigovo Product Team'],
    },
    alternates: {
        canonical: 'https://rigovo.com/blog/what-is-ai-interview-platform',
    },
};

// NewsArticle JSON-LD for Google News
const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'The Blueprint: What is an AI Interview Platform in 2026?',
    description: 'Beyond automated scripts. Discover how AI interview platforms are evolving into complex socio-technical systems that balance scale with human empathy and integrity.',
    image: 'https://rigovo.com/og-image.png',
    datePublished: '2025-01-15T00:00:00Z',
    dateModified: '2025-01-15T00:00:00Z',
    author: {
        '@type': 'Organization',
        name: 'Rigovo Product Team',
        url: 'https://rigovo.com/about',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Rigovo',
        logo: {
            '@type': 'ImageObject',
            url: 'https://rigovo.com/logo.png',
        },
    },
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://rigovo.com/blog/what-is-ai-interview-platform',
    },
};

export default function WhatIsAIInterviewPlatformPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
            />
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
                                        Strategy Guide
                                    </span>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock className="w-3 h-3" />
                                        9 min read
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                    The Blueprint: What is an <span className="text-brand">AI Interview</span> Platform in 2026?
                                </h1>
                                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                                    We&apos;re past the era of &quot;proctored quizzes.&quot; Modern technical hiring requires a system that understands code, builds integrity evidence, and—most importantly—respects the candidate&apos;s time.
                                </p>
                                <time className="block mt-8 text-sm text-text-muted font-mono uppercase tracking-widest">
                                    By The Rigovo Product Team | Jan 15, 2026
                                </time>
                            </header>

                            <div className="prose prose-invert prose-lg max-w-none">
                                <section className="mb-16">
                                    <p className="text-text-secondary mb-6">
                                        Five years ago, an &quot;AI interview&quot; usually meant a one-way video recording where a candidate spoke to a void, and a primitive algorithm tried to guess their &quot;enthusiasm.&quot; Candidly? Candidates hated it. Recruiters found it unreliable. It was a failure of empathy in technology.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        In 2026, the definition has shifted. An <strong className="text-white">AI Interview Platform</strong> is now a complex socio-technical system. It is a digital proxy for your senior engineering managers—capable of having two-way technical debates, debugging code in real-time, and verifying the identity of the person on the other side of the screen.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Three Pillars of Modern Assessment</h2>
                                    <p className="text-text-secondary mb-10">
                                        To be effective, an AI platform must excel in three distinct domains simultaneously. If it fails in one, the whole system collapses.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                            <Brain className="w-8 h-8 text-brand mb-6" />
                                            <h3 className="text-xl font-bold text-white mb-3">Cognitive Depth</h3>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                The AI must understand <em>why</em> a candidate chose a Hash Map over an Array. It&apos;s not about the answer; it&apos;s about the reasoning.
                                            </p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                            <ShieldCheck className="w-8 h-8 text-emerald-500 mb-6" />
                                            <h3 className="text-xl font-bold text-white mb-3">15-Signal Verification</h3>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                Integrity is fundamental. Rigovo analyzes 12 distinct signal types in real-time to maintain session authenticity through high-precision technical mapping.
                                            </p>
                                        </div>
                                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                            <Scale className="w-8 h-8 text-blue-400 mb-6" />
                                            <h3 className="text-xl font-bold text-white mb-3">Unbiased Logic</h3>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                Algorithms don&apos;t get tired after lunch. They don&apos;t care about where you went to school. They only care about the technical truth.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">How it Actually Works (The Human View)</h2>
                                    <p className="text-text-secondary mb-6">
                                        When a candidate enters a Rigovo session, they aren&apos;t meeting a chatbot. They are meeting <strong>Maya</strong>—our conversational agent.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        The experience is fluid. Maya might start with a high-level system design problem. If the candidate struggles, she provides a hint—not to catch them out, but to see how they respond to feedback. This is the &quot;human&quot; element that traditional automated tests completely miss.
                                    </p>
                                    <div className="p-8 rounded-[2.5rem] bg-brand/5 border border-brand/20 my-10">
                                        <p className="text-text-secondary text-base leading-relaxed italic margin-0">
                                            &quot;We found that 70% of candidates prefer Maya over a one-way recorded video because she actually talks back. It feels like an interview, not an interrogation.&quot;
                                        </p>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Question of Trust & Compliance</h2>
                                    <p className="text-text-secondary mb-6">
                                        We cannot talk about AI in hiring without talking about legality. Any platform you choose must navigate the complex landscape of the EU AI Act and local labor laws.
                                    </p>
                                    <ul className="list-none p-0 space-y-4">
                                        <li className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                                            <p className="text-sm text-text-secondary"><strong className="text-white">Transparency:</strong> You must always inform candidates that AI is being used. It&apos;s not just law; it&apos;s basic respect.</p>
                                        </li>
                                        <li className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                                            <p className="text-sm text-text-secondary"><strong className="text-white">Explainability:</strong> If a candidate is rejected, the AI must be able to explain <em>why</em> in technical terms. &quot;Score too low&quot; is no longer an acceptable answer.</p>
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Verification Lifecycle</h2>
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        An AI interview platform provides a comprehensive intelligence layer for technical hiring. Every session results in high-reliability competency mapping and the generation of a portable, verified candidate profile.
                                    </p>
                                    <p className="text-text-secondary leading-relaxed">
                                        The future of hiring is centered on efficiency, verified individual capability, and portable intelligence for the AI-accelerated era.
                                    </p>
                                </section>
                            </div>

                            {/* Related Articles */}
                            <RelatedArticles currentSlug="what-is-ai-interview-platform" />

                            <div className="mt-16 p-10 rounded-[3rem] bg-gradient-to-b from-brand/10 to-transparent border border-brand/20 text-center">
                                <Sparkles className="w-10 h-10 text-brand mb-6 mx-auto" />
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                                    Tired of Scaling the Unscalable?
                                </h3>
                                <p className="text-text-secondary mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                                    Stop wasting senior engineering hours on screening calls. Deploy Maya and see why the world&apos;s fastest-growing teams trust Rigovo.
                                </p>
                                <Link
                                    href="/request-demo"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-white font-black rounded-2xl hover:bg-brand-hover shadow-2xl shadow-brand/30 transition-all uppercase tracking-[0.2em] text-xs"
                                >
                                    Get Started for Free <ArrowLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </main>
                <PageAnalytics pagePath="/blog/what-is-ai-interview-platform" />
                <Footer />
            </div>
        </>
    );
}
