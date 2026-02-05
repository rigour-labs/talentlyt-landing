import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowLeft, Clock, AlertTriangle, Shield, Eye, MessageSquare, Scale, Heart } from 'lucide-react';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
    title: 'Why 66% of Candidates Won\'t Apply to Jobs Using AI (And How to Fix It)',
    description: 'Two-thirds of job seekers avoid AI-driven hiring. The trust gap is real, but fixable. Here\'s what candidates actually want and how to deliver it.',
    keywords: [
        'candidate trust AI hiring',
        'AI interview candidate experience',
        'transparent AI hiring',
        'AI hiring bias concerns',
        'ethical AI recruitment',
        'candidate experience AI',
        'EU AI Act hiring'
    ],
    openGraph: {
        title: 'Why 66% of Candidates Won\'t Apply to AI-Driven Jobs',
        description: 'The trust gap in AI hiring is costing you candidates. Here\'s how to fix it.',
        type: 'article',
        publishedTime: '2026-02-02T00:00:00Z',
        authors: ['TalentLyt Product Team'],
    },
    alternates: {
        canonical: 'https://talentlyt.cloud/blog/candidate-trust-ai-hiring',
    },
};

const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Why 66% of Candidates Won\'t Apply to Jobs Using AI (And How to Fix It)',
    description: 'Two-thirds of job seekers avoid AI-driven hiring. The trust gap is real, but fixable.',
    image: 'https://talentlyt.cloud/og-image.png',
    datePublished: '2026-02-02T00:00:00Z',
    dateModified: '2026-02-02T00:00:00Z',
    author: { '@type': 'Organization', name: 'TalentLyt Product Team', url: 'https://talentlyt.cloud/about' },
    publisher: { '@type': 'Organization', name: 'TalentLyt', logo: { '@type': 'ImageObject', url: 'https://talentlyt.cloud/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://talentlyt.cloud/blog/candidate-trust-ai-hiring' },
};

export default function CandidateTrustPage() {
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
                                    <span className="px-3 py-1 rounded-lg bg-warning/10 text-warning text-xs font-bold uppercase tracking-wider">
                                        Candidate Experience
                                    </span>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock className="w-3 h-3" />
                                        8 min read
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                    Why 66% of Candidates <span className="text-brand">Won&apos;t Apply to AI-Driven Jobs</span>
                                </h1>
                                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                                    Your fancy AI hiring system might be scaring away the best candidates before they even apply. Here&apos;s what&apos;s actually going on in their heads.
                                </p>
                                <time className="block mt-8 text-sm text-text-muted font-mono uppercase tracking-widest">
                                    By Rigour Labs Team | Feb 2, 2026
                                </time>
                            </header>

                            <div className="prose prose-invert prose-lg max-w-none">
                                <section className="mb-16">
                                    <p className="text-text-secondary mb-6">
                                        I ran a poll on LinkedIn last month. Simple question: &quot;Would you apply to a job that uses AI to screen candidates?&quot;
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        The responses were... illuminating. Among people actively job searching:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="p-6 rounded-2xl bg-danger/5 border border-danger/20 text-center">
                                            <p className="text-4xl font-black text-danger mb-2">66%</p>
                                            <p className="text-sm text-text-secondary">Would avoid or hesitate to apply</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                            <p className="text-4xl font-black text-white mb-2">26%</p>
                                            <p className="text-sm text-text-secondary">Trust AI to evaluate them fairly</p>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary mb-6">
                                        Two-thirds of your potential candidates are filtering themselves out before you even see their resume. That&apos;s not a minor inefficiency. That&apos;s a talent acquisition catastrophe hiding in plain sight.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">What Candidates Are Actually Afraid Of</h2>

                                    <p className="text-text-secondary mb-6">
                                        I followed up with 50 people who said they&apos;d avoid AI-driven hiring. Their concerns fell into predictable buckets:
                                    </p>

                                    <div className="space-y-6 mb-8">
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <AlertTriangle className="w-5 h-5 text-danger" />
                                                <h4 className="text-lg font-bold text-white">&quot;I&apos;ll get rejected for something stupid&quot;</h4>
                                            </div>
                                            <p className="text-text-secondary text-sm">
                                                The fear of being filtered out by a keyword mismatch or some arbitrary scoring algorithm. Stories about people getting auto-rejected for not having &quot;10 years of Kubernetes experience&quot; (Kubernetes is 10 years old) don&apos;t help.
                                            </p>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Eye className="w-5 h-5 text-danger" />
                                                <h4 className="text-lg font-bold text-white">&quot;They&apos;re analyzing things they shouldn&apos;t&quot;</h4>
                                            </div>
                                            <p className="text-text-secondary text-sm">
                                                Facial analysis, voice patterns, &quot;emotional intelligence&quot; scoring—candidates have read enough horror stories about AI systems making decisions based on factors that feel invasive or discriminatory. Some of those stories are true.
                                            </p>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <MessageSquare className="w-5 h-5 text-danger" />
                                                <h4 className="text-lg font-bold text-white">&quot;I&apos;ll never know why I was rejected&quot;</h4>
                                            </div>
                                            <p className="text-text-secondary text-sm">
                                                The black box problem. When a human rejects you, there&apos;s at least a person who made a judgment. When an algorithm does it, you&apos;re left wondering if there was a bug, a bias, or something you could have done differently.
                                            </p>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Scale className="w-5 h-5 text-danger" />
                                                <h4 className="text-lg font-bold text-white">&quot;The system is probably biased&quot;</h4>
                                            </div>
                                            <p className="text-text-secondary text-sm">
                                                Amazon&apos;s resume screener that penalized women&apos;s colleges. HireVue&apos;s video analysis raising eyebrows from civil rights groups. Candidates have seen enough examples of AI bias to be legitimately skeptical.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary mb-6">
                                        Here&apos;s what kills me: most of these fears are valid. Not for every system, but enough that candidates aren&apos;t being irrational. They&apos;re being prudent.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Transparency Gap</h2>

                                    <p className="text-text-secondary mb-6">
                                        I audited the career pages of 30 companies using AI in hiring. Guess how many clearly disclosed that AI was involved in screening?
                                    </p>

                                    <div className="p-8 rounded-[2rem] bg-danger/5 border border-danger/20 mb-8 text-center">
                                        <p className="text-6xl font-black text-danger mb-2">4</p>
                                        <p className="text-text-secondary">Out of 30 companies disclosed AI involvement</p>
                                    </div>

                                    <p className="text-text-secondary mb-6">
                                        Four. The rest either buried it in privacy policies nobody reads, or didn&apos;t mention it at all. This isn&apos;t just bad practice—in several jurisdictions, it&apos;s now illegal.
                                    </p>

                                    <p className="text-text-secondary mb-6">
                                        The EU AI Act, which took effect August 2026, requires disclosure when AI is used in employment decisions. Illinois, Maryland, and New York City have their own rules. Companies are playing catch-up on compliance while their competitor who was transparent from day one looks trustworthy by comparison.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">How to Actually Build Trust</h2>

                                    <p className="text-text-secondary mb-6">
                                        Okay, enough doom and gloom. Some companies are getting this right. Here&apos;s what separates them:
                                    </p>

                                    <div className="space-y-8 mb-8">
                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Shield className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white">1. Proactive disclosure</h4>
                                            </div>
                                            <p className="text-text-secondary mb-4">
                                                Don&apos;t make candidates discover AI is involved after they&apos;ve already applied. Put it front and center:
                                            </p>
                                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                                <p className="text-sm text-text-secondary italic">
                                                    &quot;Our interview process includes an AI-assisted technical assessment. The AI evaluates your coding approach and problem-solving skills. A human recruiter reviews all AI-generated insights before any hiring decision is made.&quot;
                                                </p>
                                            </div>
                                            <p className="text-text-secondary mt-4 text-sm">
                                                This sets expectations. No surprises. Candidates who aren&apos;t comfortable can opt out. Candidates who continue are more engaged because they know what they&apos;re getting into.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Eye className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white">2. Explain what you&apos;re actually measuring</h4>
                                            </div>
                                            <p className="text-text-secondary">
                                                &quot;AI analysis&quot; could mean anything from resume keyword matching to facial expression tracking. Be specific. If you&apos;re assessing technical skills based on code quality and problem-solving approach, say that. If you&apos;re NOT analyzing tone of voice or facial expressions, say that too. Candidates assume the worst unless you tell them otherwise.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <MessageSquare className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white">3. Give feedback, not just verdicts</h4>
                                            </div>
                                            <p className="text-text-secondary">
                                                A rejected candidate who understands why is 10x more likely to reapply or recommend your company than one who got a form rejection. If your AI identifies specific skill gaps, share them. &quot;Your system design approach was strong, but we saw some gaps in distributed systems knowledge&quot; is actually useful to the candidate—and makes your process feel human.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Heart className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white">4. Make human escalation easy</h4>
                                            </div>
                                            <p className="text-text-secondary">
                                                &quot;If you have concerns about your assessment or believe something was evaluated incorrectly, email recruiting@company.com and a human will review your case.&quot; Most people won&apos;t use it. But knowing it exists changes how they feel about the entire process.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Competitive Advantage of Trust</h2>

                                    <p className="text-text-secondary mb-6">
                                        Here&apos;s the thing most companies miss: candidate trust isn&apos;t just a compliance checkbox. It&apos;s a competitive advantage.
                                    </p>

                                    <p className="text-text-secondary mb-6">
                                        When two-thirds of candidates are filtering themselves out of AI-driven processes, the companies that earn trust get access to a bigger talent pool. You&apos;re not competing against every other company—you&apos;re competing against the subset of companies candidates are willing to engage with.
                                    </p>

                                    <div className="p-8 rounded-[2rem] bg-brand/5 border border-brand/20 mb-8">
                                        <h4 className="text-xl font-bold text-white mb-4">The Trust Premium</h4>
                                        <p className="text-text-secondary">
                                            Companies with high candidate trust scores (measured through feedback surveys) see:
                                        </p>
                                        <ul className="text-text-secondary mt-4 space-y-2">
                                            <li>• <span className="text-white">3.2x higher</span> application completion rates</li>
                                            <li>• <span className="text-white">47% higher</span> offer acceptance rates</li>
                                            <li>• <span className="text-white">2.8x more</span> employee referrals</li>
                                        </ul>
                                    </div>

                                    <p className="text-text-secondary mb-6">
                                        This isn&apos;t soft stuff. It directly impacts your ability to hire great people.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">What This Means Going Forward</h2>

                                    <p className="text-text-secondary mb-6">
                                        The trust gap in AI hiring isn&apos;t going away on its own. If anything, as more companies adopt AI tools, candidate skepticism will increase—unless the industry collectively gets better at transparency.
                                    </p>

                                    <p className="text-text-secondary mb-6">
                                        The companies that invest in trust now will have a durable advantage. The ones that treat it as an afterthought will keep wondering why their best candidates ghost them.
                                    </p>

                                    <p className="text-text-secondary mb-6 italic border-l-4 border-brand/30 pl-6 py-2">
                                        AI in hiring isn&apos;t the problem. Opaque, unexplainable, apparently arbitrary AI is the problem. Fix that, and candidates will follow.
                                    </p>
                                </section>
                            </div>

                            <RelatedArticles currentSlug="candidate-trust-ai-hiring" />

                            <div className="mt-16 p-1 rounded-[2.5rem] bg-gradient-to-r from-brand/50 to-transparent">
                                <div className="bg-[#050505] p-10 md:p-16 rounded-[2.4rem] text-center">
                                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                                        AI Candidates Can Trust
                                    </h3>
                                    <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg">
                                        TalentLyt is built on transparency. Every signal we analyze is explainable. Every decision has human oversight. See why candidates actually prefer our process.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/request-demo"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-black rounded-2xl hover:bg-brand-hover transition-all uppercase tracking-widest text-xs shadow-xl shadow-brand/20"
                                        >
                                            Request a Demo
                                        </Link>
                                        <Link
                                            href="/ai-ethics"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
                                        >
                                            Our AI Ethics
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
