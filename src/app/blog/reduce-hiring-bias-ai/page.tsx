import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowLeft, Clock, Scale, Users, Brain, Target, TrendingDown, ShieldAlert } from 'lucide-react';
import { RelatedArticles } from '@/components/blog/related-articles';

export const metadata: Metadata = {
    title: 'Objective Truth: How AI Can Strip Bias from Technical Hiring',
    description: 'Recruitment is inherently human—and inherently biased. Discover how high-integrity AI systems can level the playing field for global technical talent.',
    keywords: [
        'hiring bias reduction',
        'unbiased technical interviews',
        'AI recruitment ethics',
        'fair hiring technology',
        'DEI technical recruitment',
        'objective candidate evaluation'
    ],
    openGraph: {
        title: 'Objective Truth: How AI Can Strip Bias from Technical Hiring',
        description: 'Strip away the noise and focus on technical truth. A guide to fairer hiring in 2026.',
        type: 'article',
        publishedTime: '2025-01-01T00:00:00Z',
    },
};

export default function ReduceHiringBiasPage() {
    return (
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
                                    Ethics & Leadership
                                </span>
                                <div className="flex items-center gap-2 text-text-muted text-xs">
                                    <Clock className="w-3 h-3" />
                                    7 min read
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                Objective Truth: How AI Strips <span className="text-brand">Bias</span> from Technical Hiring
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                                We like to think we&apos;re objective. The data suggests otherwise. Technical hiring is often a mirror of our own unconscious preferences.
                            </p>
                            <time className="block mt-8 text-sm text-text-muted font-mono uppercase tracking-widest">
                                By The TalentLyt Ethics Committee | Jan 1, 2026
                            </time>
                        </header>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-16">
                                <p className="text-text-secondary mb-6">
                                    Hiring is one of the most high-stakes decisions a human can make about another human. It is also one of the most flawed.
                                </p>
                                <p className="text-text-secondary mb-6">
                                    Whether we like it or not, our brains are hard-wired for &quot;pattern matching.&quot; We look for signals of <em>familiarity</em> and mistake them for signals of <em>competence</em>. This is how homogeneous engineering teams are built—not by malice, but by the subtle gravity of collective unconscious bias.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The &quot;Resume-School&quot; Trap</h2>
                                <p className="text-text-secondary mb-10">
                                    When a recruiter sees a &quot;Big Tech&quot; logo or an Ivy League school on a resume, their brain performs a cognitive shortcut. They assume the candidate is capable before the interview even begins. Conversely, a brilliant self-taught engineer from a non-traditional background often has to work twice as hard to prove the same baseline level of skill.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-brand/30 transition-all">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Target className="w-6 h-6 text-brand" />
                                            <h4 className="text-white font-bold">Halo Effect</h4>
                                        </div>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            Allowing one positive trait—like a prior employer or a charismatic greeting—to cloud the actual technical assessment results.
                                        </p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-brand/30 transition-all">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Users className="w-6 h-6 text-blue-500" />
                                            <h4 className="text-white font-bold">Affinity Bias</h4>
                                        </div>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            The &quot;Beer Test.&quot; Favoring candidates who share similar cultural references, hobbies, or speaking styles as the interviewer.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-black text-white mb-8 tracking-tight">AI as the &quot;Great Equalizer&quot;</h2>
                                <p className="text-text-secondary mb-8 leading-relaxed">
                                    A structured AI evaluation environment, like <strong>Maya</strong>, is designed to be indifferent to personal background. She focuses on technical reasoning, communication clarity, and problem-solving logic rather than subjective &quot;vibes.&quot;
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-8 rounded-[2rem] bg-card border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-brand mt-2.5 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Technical Proficiency Over Subjective Signals</h4>
                                            <p className="text-sm text-text-secondary leading-relaxed">AI evaluations focus on <em>how</em> a candidate navigates a technical problem, providing a more objective measure of skill compared to traditional conversational screening.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-8 rounded-[2rem] bg-card border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-brand mt-2.5 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Standardized Difficulty Scaling</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed">Human interviewers often get harder or easier on candidates based on their own mood. AI provides a consistent, adaptive difficulty curve for every candidate, every time.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Ethics of Algorithmic Fairness</h2>
                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    We must be careful: AI can inherit the biases of its training data. This is why TalentLyt uses a <strong>Multi-Agent Architecture.</strong>
                                </p>
                                <p className="text-text-secondary mb-8">
                                    If one model shows a preference pattern for certain syntax or reasoning styles, other models in the consensus loop can counterbalance it. We actively audit our models for &quot;disparate impact&quot; to ensure our technology is a tool for equity, not automated exclusion.
                                </p>
                                <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 mb-8">
                                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-amber-500" /> Legal Safeguards
                                    </h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        Any AI-driven hiring must comply with the <strong>NYC Automated Employment Decision Tool (AEDT)</strong> law and similar global regulations. We provide our clients with fully transparent audit trails to prove that their hiring decisions are based on skill, not bias.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-black text-white mb-8 tracking-tight">The Future of meritocracy</h2>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    Bias is a complex human challenge that we can mitigate with the right tools. By focusing on technical proficiency and leveraging high-reliability predictive models, we can build teams that are both diverse and highly capable.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    With the <strong className="text-white">Interview Genome</strong>, we ensure that a candidate&apos;s verified skills are portable—allowing them to skip the bias-prone &quot;first glance&quot; of traditional resume screenings in the future.
                                </p>
                            </section>
                        </div>

                        {/* Related Articles */}
                        <RelatedArticles currentSlug="reduce-hiring-bias-ai" />

                        <div className="mt-16 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 text-center">
                            <Scale className="w-12 h-12 text-brand mb-8 mx-auto" />
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                                Ready to Hire for Merit?
                            </h3>
                            <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg leading-relaxed font-medium">
                                Level the playing field for your engineering funnel. Deploy an objective assessment layer that cares about code, not pedigree.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand text-white font-black rounded-2xl hover:bg-brand-hover shadow-2xl shadow-brand/40 transition-all uppercase tracking-[0.2em] text-xs"
                            >
                                Start Unbiased Hiring <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
