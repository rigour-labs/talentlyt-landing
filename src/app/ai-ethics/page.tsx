import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Brain, Shield, Users, Scale, AlertTriangle, Eye, Target, Heart, Lightbulb, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Ethics — TalentLyt',
    description: 'TalentLyt AI Ethics Disclosure. Our principles for responsible AI in hiring: human oversight, fairness, transparency, and candidate dignity.',
    alternates: {
        canonical: 'https://talentlyt.cloud/ai-ethics',
    },
};

export default function AIEthicsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <Brain className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Responsible AI</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            AI <span className="text-brand">Ethics</span> Commitment
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            AI in hiring is powerful—and that power demands responsibility. Here&apos;s how we think about it, what we do about it, and how we hold ourselves accountable.
                        </p>
                        <p className="text-sm text-text-muted mt-4">
                            Last updated: February 2, 2026
                        </p>
                    </div>

                    {/* Important Notice */}
                    <div className="p-6 rounded-2xl bg-warning/10 border border-warning/30 mb-12">
                        <div className="flex gap-4">
                            <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-warning mb-2">A Note on AI Limitations</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    TalentLyt&apos;s AI is a tool to support human decision-making, not replace it. Our technology has limitations—it can make mistakes, and no algorithm fully captures human potential. We design our systems to augment your judgment, provide data-driven insights, and flag potential issues. But the final hiring decision must always rest with qualified humans who consider the full context of each candidate.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Philosophy */}
                    <section className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-brand" />
                            </div>
                            <h2 className="text-2xl font-bold">Our Philosophy</h2>
                        </div>
                        <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                            <p>
                                We built TalentLyt because we saw a problem: technical hiring is broken. Resumes reward credential inflation. Traditional interviews reward charisma over competence. Cheating and fraud are rampant in remote assessments.
                            </p>
                            <p>
                                AI can help fix this—but only if it&apos;s built thoughtfully. We&apos;re not trying to automate human judgment out of hiring. We&apos;re trying to give humans better information to make better decisions. That means being honest about what AI can and cannot do, being vigilant about bias, and always keeping candidates&apos; dignity at the center of our design.
                            </p>
                            <p className="text-white font-medium">
                                Our goal: make hiring more fair, more accurate, and more efficient—without sacrificing humanity.
                            </p>
                        </div>
                    </section>

                    {/* Core Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-brand" />
                                </div>
                                <h3 className="font-bold text-lg">Human Oversight First</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                AI provides data and recommendations. Humans make decisions. Period. Our platform is designed to support recruiters and hiring managers, not replace them.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>All AI assessments can be overridden by human reviewers</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Candidates can request human review of any AI-generated score</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>We never auto-reject candidates without human confirmation</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Scale className="w-5 h-5 text-brand" />
                                </div>
                                <h3 className="font-bold text-lg">Fairness & Bias Mitigation</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                Bias in hiring is a real problem—and AI can either reduce it or amplify it. We actively work to make sure TalentLyt reduces bias.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Regular bias audits across demographic groups</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Disparate impact testing for all model updates</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Evaluation criteria focus on job-relevant skills, not proxies</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-brand" />
                                </div>
                                <h3 className="font-bold text-lg">Transparency</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                Candidates and employers deserve to understand how our AI works. Black-box algorithms have no place in decisions that affect people&apos;s careers.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Clear disclosure to candidates that AI is involved</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Assessment reports explain scoring rationale</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Published documentation of evaluation criteria</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-brand" />
                                </div>
                                <h3 className="font-bold text-lg">Candidate Dignity</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                Job searching is stressful. We design our AI to treat candidates with respect and create a professional experience—even when detecting fraud.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>No trick questions or adversarial tactics</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Accommodation options for candidates with disabilities</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Option to opt-out and request traditional interviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-brand" />
                                </div>
                                <h3 className="font-bold text-lg">Accuracy Standards</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                We only deploy AI capabilities that meet rigorous accuracy thresholds. Better to do less well than to do more poorly.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>95%+ accuracy threshold for deployed models</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Continuous validation against human expert benchmarks</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Models retrained and monitored for performance drift</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-brand" />
                                </div>
                                <h3 className="font-bold text-lg">Privacy by Design</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                Data minimization is a core principle. We collect what we need to do the job well—nothing more.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>No biometric databases or permanent identity tracking</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>Automatic data deletion per retention policies</span>
                                </div>
                                <div className="flex gap-2 text-xs text-text-muted">
                                    <span className="text-brand">•</span>
                                    <span>We never sell candidate data to third parties</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fraud Detection Ethics */}
                    <section className="p-8 rounded-[2rem] bg-card border border-border/50 mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                <AlertTriangle className="w-6 h-6 text-brand" />
                            </div>
                            <h2 className="text-2xl font-bold">A Note on Fraud Detection</h2>
                        </div>
                        <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                            <p>
                                Our 13-Signal Forensic Engine is designed to detect cheating, proxy candidates, and AI-assisted fraud. This capability raises important ethical questions that we take seriously:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    <strong className="text-white">Presumption of innocence:</strong> Flagged anomalies are alerts for human review, not automatic disqualifications. False positives happen, and we design for that reality.
                                </li>
                                <li>
                                    <strong className="text-white">Transparency to candidates:</strong> We disclose that integrity monitoring is in use. Candidates know the rules of engagement.
                                </li>
                                <li>
                                    <strong className="text-white">Proportionate response:</strong> We detect and report—we don&apos;t publicly shame or create blacklists. How employers handle integrity flags is their decision.
                                </li>
                                <li>
                                    <strong className="text-white">Continuous improvement:</strong> As cheating methods evolve, so does detection. We invest in staying ahead of bad actors while minimizing false positives.
                                </li>
                            </ul>
                            <p>
                                We believe integrity verification protects honest candidates who put in the work to develop real skills. It levels the playing field against those who would game the system.
                            </p>
                        </div>
                    </section>

                    {/* Ongoing Commitment */}
                    <section className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-brand" />
                            </div>
                            <h2 className="text-2xl font-bold">Our Ongoing Commitment</h2>
                        </div>
                        <div className="text-text-secondary text-sm leading-relaxed space-y-4 mb-8">
                            <p>
                                AI ethics isn&apos;t a checkbox—it&apos;s an ongoing responsibility. We continuously review our practices as technology evolves and new ethical considerations emerge. We welcome feedback from candidates, employers, and the broader community.
                            </p>
                            <p>
                                If you see something that concerns you, tell us. We&apos;re building this for the long term, and that means getting it right matters more than being first.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="mailto:ethics@talentlyt.cloud"
                                className="px-6 py-3 rounded-xl bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors"
                            >
                                Report an Ethics Concern
                            </a>
                            <Link
                                href="/privacy"
                                className="px-6 py-3 rounded-xl bg-muted text-text-secondary text-sm font-medium hover:bg-border transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="px-6 py-3 rounded-xl bg-muted text-text-secondary text-sm font-medium hover:bg-border transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
