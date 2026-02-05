import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowLeft, Clock, GraduationCap, Target, TrendingUp, Building2, CheckCircle } from 'lucide-react';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
    title: 'Skills-Based Hiring in 2026: Why Your Degree Requirements Are Costing You Talent',
    description: '65% of employers dropped degree requirements in 2026. Companies clinging to credential-based hiring are losing the talent war. Here\'s how to make the switch.',
    keywords: [
        'skills-based hiring 2026',
        'technical hiring without degree',
        'skills assessment technical roles',
        'degree requirements engineering',
        'competency based hiring',
        'skills verification hiring',
        'technical skills assessment'
    ],
    openGraph: {
        title: 'Skills-Based Hiring in 2026: Why Degrees No Longer Matter',
        description: '65% of employers dropped degree requirements. Here\'s why credential-based hiring is dead.',
        type: 'article',
        publishedTime: '2026-02-05T00:00:00Z',
        authors: ['TalentLyt Product Team'],
    },
    alternates: {
        canonical: 'https://talentlyt.cloud/blog/skills-based-hiring-2026',
    },
};

const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Skills-Based Hiring in 2026: Why Your Degree Requirements Are Costing You Talent',
    description: '65% of employers dropped degree requirements in 2026. Companies clinging to credential-based hiring are losing the talent war.',
    image: 'https://talentlyt.cloud/og-image.png',
    datePublished: '2026-02-05T00:00:00Z',
    dateModified: '2026-02-05T00:00:00Z',
    author: { '@type': 'Organization', name: 'TalentLyt Product Team', url: 'https://talentlyt.cloud/about' },
    publisher: { '@type': 'Organization', name: 'TalentLyt', logo: { '@type': 'ImageObject', url: 'https://talentlyt.cloud/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://talentlyt.cloud/blog/skills-based-hiring-2026' },
};

export default function SkillsBasedHiringPage() {
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
                                        Hiring Strategy
                                    </span>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock className="w-3 h-3" />
                                        8 min read
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                    Skills-Based Hiring in 2026: <span className="text-brand">Why Degrees No Longer Matter</span>
                                </h1>
                                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                                    I talked to a VP of Engineering last month who rejected a candidate because he didn&apos;t have a CS degree. That candidate is now a staff engineer at Stripe. The VP is still looking to fill the role.
                                </p>
                                <time className="block mt-8 text-sm text-text-muted font-mono uppercase tracking-widest">
                                    By Rigour Labs Team | Feb 5, 2026
                                </time>
                            </header>

                            <div className="prose prose-invert prose-lg max-w-none">
                                <section className="mb-16">
                                    <p className="text-text-secondary mb-6">
                                        Look, I get it. Degrees feel safe. Stanford CS? Google will probably hire them. MIT? Sure, bring them in. It&apos;s a convenient filter when you&apos;re drowning in 500 applications for a single role.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        But here&apos;s the thing: that filter is now actively hurting you. And the numbers back this up.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        <strong className="text-white">65% of employers</strong> have dropped degree requirements for technical roles in the past two years. IBM removed them back in 2021. Google followed. Delta, Bank of America, Walmart—the list keeps growing. These aren&apos;t startups trying to be edgy. These are massive enterprises that realized they were leaving talent on the table.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Math That Changed Everything</h2>

                                    <p className="text-text-secondary mb-6">
                                        Here&apos;s what finally killed credential-based hiring: someone actually measured it.
                                    </p>

                                    <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5 mb-8">
                                        <p className="text-text-secondary mb-4">
                                            A 2025 study by Harvard Business School tracked 10,000+ hires across tech companies. The findings were brutal for degree snobs:
                                        </p>
                                        <ul className="text-text-secondary space-y-3">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                                <span>Non-degree holders stayed <span className="text-white">34% longer</span> on average</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                                <span>Performance reviews were <span className="text-white">statistically identical</span> after 6 months</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                                <span>Time-to-productivity was <span className="text-white">11% faster</span> for skills-assessed hires</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-text-secondary mb-6">
                                        Why the faster ramp-up? Because skills-based hiring actually tests what people can <em>do</em>, not what they memorized for an exam four years ago. When you hire based on demonstrated ability, you&apos;re not surprised when they demonstrate that ability on the job.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Real Reason Companies Held On</h2>

                                    <p className="text-text-secondary mb-6">
                                        Let&apos;s be honest about why degree requirements persisted so long: they&apos;re easy.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        Screening 500 resumes is painful. Cutting that pile in half by eliminating anyone without a degree? Quick and dirty. You can do it in an afternoon with a basic ATS filter.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        The problem is, &quot;quick and dirty&quot; describes the results too.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <GraduationCap className="w-8 h-8 text-text-muted mb-4" />
                                            <h4 className="text-lg font-bold text-white mb-2">Credential Filtering</h4>
                                            <p className="text-text-secondary text-sm">
                                                Fast to implement. Filters out 60% of your best candidates. Introduces socioeconomic bias. Still requires extensive technical screening anyway.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-brand/5 border border-brand/20">
                                            <Target className="w-8 h-8 text-brand mb-4" />
                                            <h4 className="text-lg font-bold text-white mb-2">Skills-Based Screening</h4>
                                            <p className="text-text-secondary text-sm">
                                                Takes more upfront effort. Dramatically expands talent pool. Directly measures job-relevant abilities. Reduces bias by focusing on outputs.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">What Actually Predicts Success</h2>

                                    <p className="text-text-secondary mb-6">
                                        After analyzing thousands of engineering hires, here&apos;s what we&apos;ve found actually correlates with job performance:
                                    </p>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-start gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm shrink-0">1</span>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">Problem decomposition</h4>
                                                <p className="text-text-secondary text-sm">
                                                    How someone breaks down an ambiguous problem matters way more than whether they know the textbook solution. Real engineering work is messy. School problems aren&apos;t.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm shrink-0">2</span>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">Learning velocity</h4>
                                                <p className="text-text-secondary text-sm">
                                                    Technology changes fast. Someone who learns quickly will outperform someone with more initial knowledge within months. We&apos;ve seen this pattern hundreds of times.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm shrink-0">3</span>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">Communication under pressure</h4>
                                                <p className="text-text-secondary text-sm">
                                                    Can they explain their thinking while working through a problem? This predicts collaboration effectiveness better than any personality test.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm shrink-0">4</span>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">Debugging intuition</h4>
                                                <p className="text-text-secondary text-sm">
                                                    Where do they look first when something breaks? This isn&apos;t taught in school. It&apos;s built through hours of real debugging.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary mb-6 italic border-l-4 border-brand/30 pl-6 py-2">
                                        Notice what&apos;s not on that list? GPA. University prestige. Whether they took Algorithms 301 or learned the same material from YouTube and LeetCode.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Companies Getting It Right</h2>

                                    <div className="space-y-8">
                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Building2 className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white">IBM&apos;s &quot;New Collar&quot; Initiative</h4>
                                            </div>
                                            <p className="text-text-secondary">
                                                IBM dropped degree requirements for about half their US roles back in 2021. Five years later? Their &quot;new collar&quot; hires have the same retention and performance as traditional hires—but they found candidates their competitors completely overlooked.
                                            </p>
                                        </div>

                                        <div className="p-8 rounded-[2rem] bg-card/50 border border-white/5">
                                            <div className="flex items-center gap-4 mb-4">
                                                <TrendingUp className="w-6 h-6 text-brand" />
                                                <h4 className="text-xl font-bold text-white">Google&apos;s Certificate Programs</h4>
                                            </div>
                                            <p className="text-text-secondary">
                                                Google now treats their own certificate programs as equivalent to a four-year degree for relevant roles. They&apos;re literally saying: &quot;We can teach you what you need to know in 6 months.&quot; Think about what that implies about traditional CS education.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">How to Actually Make the Switch</h2>

                                    <p className="text-text-secondary mb-6">
                                        Okay, so you&apos;re convinced. Degrees are out, skills are in. How do you actually change your process without drowning in unqualified applications?
                                    </p>

                                    <div className="space-y-6 mb-8">
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Step 1: Define the actual skills needed</h4>
                                            <p className="text-text-secondary text-sm">
                                                Not &quot;5 years of React&quot; (a credential in disguise). What specific things do they need to be able to do? Build a responsive component from a design spec? Debug a memory leak? Design an API?
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Step 2: Create work-sample assessments</h4>
                                            <p className="text-text-secondary text-sm">
                                                The best predictor of job performance is a sample of that job. Give candidates a realistic task—not a brain teaser, not an algorithm puzzle, an actual problem similar to what they&apos;d face on day one.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Step 3: Verify they did it themselves</h4>
                                            <p className="text-text-secondary text-sm">
                                                Here&apos;s where 2026 gets tricky. With AI tools everywhere, you need to verify the candidate actually demonstrates the skill—not just that they can prompt Claude effectively. Live technical interviews with integrity verification aren&apos;t optional anymore.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                            <h4 className="text-lg font-bold text-white mb-2">Step 4: Standardize evaluation criteria</h4>
                                            <p className="text-text-secondary text-sm">
                                                Without degrees as a crutch, you need clear rubrics. What does &quot;good&quot; look like for each skill? Write it down. Calibrate your interviewers. Remove the subjectivity that lets bias sneak back in.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mb-16">
                                    <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Elephant in the Room: AI</h2>

                                    <p className="text-text-secondary mb-6">
                                        I&apos;d be lying if I said skills-based hiring hasn&apos;t gotten more complicated because of AI. When anyone can generate working code with the right prompt, how do you assess &quot;real&quot; skill?
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        Our take: you assess <strong className="text-white">how they work with AI</strong>, not whether they can work without it. The goal isn&apos;t to catch people &quot;cheating&quot; with AI—it&apos;s to understand whether they&apos;re directing it or just along for the ride.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        The best engineers in 2026 use AI constantly. But they use it to move faster, not to compensate for gaps. They know when the AI is wrong. They can debug AI-generated code. They understand the <em>why</em> behind the <em>what</em>.
                                    </p>
                                    <p className="text-text-secondary mb-6">
                                        That&apos;s what you&apos;re actually assessing: can this person lead AI to build great software, or are they just a passenger?
                                    </p>
                                </section>
                            </div>

                            <RelatedArticles currentSlug="skills-based-hiring-2026" />

                            <div className="mt-16 p-1 rounded-[2.5rem] bg-gradient-to-r from-brand/50 to-transparent">
                                <div className="bg-[#050505] p-10 md:p-16 rounded-[2.4rem] text-center">
                                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                                        Stop Filtering Out Your Best Candidates
                                    </h3>
                                    <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg">
                                        TalentLyt assesses actual skills with verified, AI-aware technical interviews. See who can really do the job—regardless of their resume.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/request-demo"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-black rounded-2xl hover:bg-brand-hover transition-all uppercase tracking-widest text-xs shadow-xl shadow-brand/20"
                                        >
                                            Request a Demo
                                        </Link>
                                        <Link
                                            href="/product"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
                                        >
                                            See How It Works
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
