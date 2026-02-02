import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowLeft, Clock, DollarSign, TrendingDown, Users, AlertCircle, Calculator } from 'lucide-react';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
    title: 'The Real Cost of a Bad Engineering Hire (And How to Avoid It)',
    description: 'A bad engineering hire costs $150K-$500K when you factor in salary, onboarding, team disruption, and missed deadlines. Learn how to protect your hiring investment.',
    keywords: [
        'cost of bad hire',
        'engineering hiring mistakes',
        'technical hiring ROI',
        'developer recruitment cost',
        'hiring failure prevention',
        'engineering team productivity',
        'interview process improvement'
    ],
    openGraph: {
        title: 'The Real Cost of a Bad Engineering Hire (And How to Avoid It)',
        description: 'A bad engineering hire costs $150K-$500K. Here is the breakdown and how to prevent it.',
        type: 'article',
        publishedTime: '2026-02-01T00:00:00Z',
        authors: ['TalentLyt Product Team'],
    },
    alternates: {
        canonical: 'https://talentlyt.cloud/blog/cost-of-bad-hire-engineering',
    },
};

const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'The Real Cost of a Bad Engineering Hire (And How to Avoid It)',
    description: 'A bad engineering hire costs $150K-$500K when you factor in salary, onboarding, team disruption, and missed deadlines. Learn how to protect your hiring investment.',
    image: 'https://talentlyt.cloud/og-image.png',
    datePublished: '2026-02-01T00:00:00Z',
    dateModified: '2026-02-01T00:00:00Z',
    author: { '@type': 'Organization', name: 'TalentLyt Product Team', url: 'https://talentlyt.cloud/about' },
    publisher: { '@type': 'Organization', name: 'TalentLyt', logo: { '@type': 'ImageObject', url: 'https://talentlyt.cloud/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://talentlyt.cloud/blog/cost-of-bad-hire-engineering' },
};

export default function CostOfBadHirePage() {
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
                                        Business Case
                                    </span>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock className="w-3 h-3" />
                                        9 min read
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                    The Real Cost of a Bad Engineering Hire <span className="text-brand">(And How to Avoid It)</span>
                                </h1>
                                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                                    Everyone talks about the &quot;cost of a bad hire.&quot; But when you actually run the numbers for engineering roles, it gets scary fast. Here&apos;s what we found after analyzing hiring data from 200+ companies.
                                </p>
                                <time className="block mt-8 text-sm text-text-muted font-mono uppercase tracking-widest">
                                    By Rigour Labs Team | Feb 1, 2026
                                </time>
                            </header>

                            <div className="prose prose-invert prose-lg max-w-none">
                                <section className="mb-16">
                                    <p className="text-text-secondary mb-6 italic border-l-4 border-brand/30 pl-6 py-2">
                                        &quot;We spent six months trying to make it work. In the end, we had to let him go. The project was three months behind, the team was burned out, and we still had to start the search over from zero.&quot;
                                        <br />— VP of Engineering, Series B startup.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        I hear some version of this story every week. A company thinks they&apos;ve found their unicorn engineer. Six months later, they&apos;re back at square one—except now they&apos;re $200,000 poorer and their team morale is shot.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        The traditional stat you&apos;ll see thrown around is &quot;a bad hire costs 30% of their first-year salary.&quot; That number is laughably low for engineering roles. When we actually tracked the full impact, the real cost was 2-4x the annual salary.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Hidden Costs Nobody Talks About</h2>

                                    <div className="space-y-8 mb-12">
                                        <div className="group p-8 rounded-[2rem] bg-card/50 border border-white/5 hover:border-brand/30 transition-all duration-500">
                                            <div className="flex items-center gap-4 mb-4">
                                                <DollarSign className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white tracking-tight">Direct Costs: $75K - $150K</h4>
                                            </div>
                                            <ul className="text-base text-text-secondary leading-relaxed space-y-2">
                                                <li><span className="text-white">Recruiting fees:</span> 20-25% of salary = $30K-$50K</li>
                                                <li><span className="text-white">Salary during tenure:</span> $40K-$80K (6-12 months)</li>
                                                <li><span className="text-white">Severance package:</span> $10K-$30K</li>
                                                <li><span className="text-white">Benefits, equipment, office space:</span> $5K-$15K</li>
                                            </ul>
                                        </div>

                                        <div className="group p-8 rounded-[2rem] bg-card/50 border border-white/5 hover:border-brand/30 transition-all duration-500">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Users className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white tracking-tight">Onboarding & Training: $25K - $60K</h4>
                                            </div>
                                            <p className="text-base text-text-secondary leading-relaxed">
                                                Senior engineers typically spend 10-15 hours per week mentoring new hires during the first 3 months. That&apos;s 120-180 hours of senior engineer time worth $100-$150/hour. Add in the formal training, documentation review, and codebase walkthroughs, and you&apos;re looking at a significant investment that walks out the door.
                                            </p>
                                        </div>

                                        <div className="group p-8 rounded-[2rem] bg-card/50 border border-white/5 hover:border-brand/30 transition-all duration-500">
                                            <div className="flex items-center gap-4 mb-4">
                                                <TrendingDown className="w-6 h-6 text-danger" />
                                                <h4 className="text-xl font-bold text-white tracking-tight">Productivity Loss: $50K - $200K</h4>
                                            </div>
                                            <p className="text-base text-text-secondary leading-relaxed mb-4">
                                                This is where it really hurts. A bad hire doesn&apos;t just fail to contribute—they actively slow down everyone around them:
                                            </p>
                                            <ul className="text-base text-text-secondary leading-relaxed space-y-2">
                                                <li><span className="text-white">Code review burden:</span> Other engineers spend 2-3x longer reviewing their PRs</li>
                                                <li><span className="text-white">Bug fixing:</span> Technical debt that takes months to unwind</li>
                                                <li><span className="text-white">Project delays:</span> Features slip, launches get pushed, revenue is delayed</li>
                                                <li><span className="text-white">Team context switching:</span> Constant interruptions to help or fix issues</li>
                                            </ul>
                                        </div>

                                        <div className="group p-8 rounded-[2rem] bg-card/50 border border-white/5 hover:border-brand/30 transition-all duration-500">
                                            <div className="flex items-center gap-4 mb-4">
                                                <AlertCircle className="w-6 h-6 text-warning" />
                                                <h4 className="text-xl font-bold text-white tracking-tight">Morale & Attrition Risk: $0 - $300K+</h4>
                                            </div>
                                            <p className="text-base text-text-secondary leading-relaxed">
                                                This is the wildcard that can make a bad hire catastrophically expensive. Good engineers have options. When they see leadership make questionable hiring decisions and then ignore the problem for months, they start interviewing elsewhere. Losing even one strong performer because of a bad hire can double or triple your total cost.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <div className="p-10 rounded-[2rem] bg-gradient-to-br from-brand/5 to-transparent border border-brand/20">
                                        <div className="flex items-center gap-4 mb-6">
                                            <Calculator className="w-8 h-8 text-brand" />
                                            <h3 className="text-2xl font-bold text-white">The Total Damage</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                            <div className="p-6 rounded-2xl bg-white/5">
                                                <p className="text-3xl font-black text-brand mb-2">$150K</p>
                                                <p className="text-sm text-text-muted">Best Case</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-white/5">
                                                <p className="text-3xl font-black text-brand mb-2">$280K</p>
                                                <p className="text-sm text-text-muted">Typical Case</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-white/5">
                                                <p className="text-3xl font-black text-danger mb-2">$500K+</p>
                                                <p className="text-sm text-text-muted">Worst Case</p>
                                            </div>
                                        </div>
                                        <p className="text-text-secondary mt-6 text-sm text-center">
                                            Based on senior engineer salary of $180K. Costs scale proportionally for different levels.
                                        </p>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Why Traditional Interviews Fail</h2>
                                    <p className="text-text-secondary mb-6">
                                        The average technical interview process is basically a coin flip dressed up as a rigorous evaluation. Here&apos;s why:
                                    </p>
                                    <ul className="text-text-secondary space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand font-bold">1.</span>
                                            <span><span className="text-white">Interviewers are inconsistent.</span> Without standardized scoring, two interviewers can have completely different takeaways from the same candidate. One person&apos;s &quot;shows promise&quot; is another&apos;s &quot;not ready.&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand font-bold">2.</span>
                                            <span><span className="text-white">Charisma beats competence.</span> Confident candidates who interview well often beat technically stronger candidates who are more reserved. This is especially problematic for diverse hiring.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand font-bold">3.</span>
                                            <span><span className="text-white">Fraud is easier than ever.</span> With remote interviews, candidates can use AI assistance, have someone else take the interview, or even use deepfake technology. We&apos;ve seen all of these in the wild.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-brand font-bold">4.</span>
                                            <span><span className="text-white">Pressure to fill roles.</span> When a critical position has been open for months, hiring managers lower their bar just to end the pain. This almost always backfires.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">A Better Approach</h2>
                                    <p className="text-text-secondary mb-6">
                                        After watching companies make the same mistakes over and over, we&apos;ve identified what actually works:
                                    </p>

                                    <div className="space-y-6 mb-12">
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Verify identity and integrity from day one</h4>
                                            <p className="text-text-secondary text-sm">
                                                Before you invest hours interviewing someone, make sure they are who they claim to be. This sounds obvious, but proxy interviewing is more common than most companies realize.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Use multi-signal assessment</h4>
                                            <p className="text-text-secondary text-sm">
                                                A single interview or coding test is a snapshot. You need multiple data points: code quality, system design thinking, communication patterns, problem-solving approach, and behavioral signals.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Standardize and calibrate</h4>
                                            <p className="text-text-secondary text-sm">
                                                Every candidate should be evaluated on the same criteria by calibrated interviewers. This reduces bias and makes it easier to compare candidates fairly.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Trust the process, not the gut</h4>
                                            <p className="text-text-secondary text-sm">
                                                &quot;I just have a good feeling about this candidate&quot; has caused more hiring disasters than any other phrase. Data beats intuition every time.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Related Articles */}
                            <RelatedArticles currentSlug="cost-of-bad-hire-engineering" />

                            <div className="mt-16 p-1 rounded-[2.5rem] bg-gradient-to-r from-brand/50 to-transparent">
                                <div className="bg-[#050505] p-10 md:p-16 rounded-[2.4rem] text-center">
                                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                                        Stop Paying the Bad Hire Tax
                                    </h3>
                                    <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg">
                                        TalentLyt&apos;s 13-signal verification catches mismatches before they become costly mistakes. See how it works.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/request-demo"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-black rounded-2xl hover:bg-brand-hover transition-all uppercase tracking-widest text-xs shadow-xl shadow-brand/20"
                                        >
                                            Request a Demo
                                        </Link>
                                        <Link
                                            href="/pricing"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
                                        >
                                            View Pricing
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
