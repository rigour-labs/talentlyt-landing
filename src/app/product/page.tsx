import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
    Bot, Shield, Fingerprint, Mic2, Activity,
    ShieldCheck, Zap, Search, Sparkles,
    AudioLines, ScanEye, Brain, ShieldAlert,
    CheckCircle2, Play, FileText, BarChart3,
    Users, Clock, ArrowRight, Eye, Lock,
    AlertTriangle, UserCheck, TrendingUp
} from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'Product | AI Interview Intelligence Platform — Rigovo',
    description: 'See how Rigovo\'s AI interviewer Maya conducts technical interviews while verifying candidate authenticity with 15-signal forensic analysis. Book a free pilot.',
    alternates: {
        canonical: 'https://rigovo.com/product',
    },
};

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <PageAnalytics pagePath="/product" />
            <main className="flex-grow">
                {/* Hero — Problem-focused */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-green-400">Live &middot; Accepting Pilot Customers</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            Your Interviews Are <span className="text-brand">Broken</span>.<br className="hidden sm:block" /> We Fix Them.
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
                            70% of resumes have discrepancies. Proxy interviews are surging. Your hiring team can&apos;t tell who&apos;s real anymore. Rigovo can.
                        </p>
                        <p className="text-base text-text-muted max-w-xl mx-auto mb-10">
                            An AI interviewer that conducts technical assessments while running 15-signal forensic verification — so you know exactly who you&apos;re hiring.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton location="hero" className="px-8 py-4 text-base" />
                            <CTAButton variant="secondary" location="hero" className="px-8 py-4 text-base" />
                        </div>
                    </div>

                    {/* Trust Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                        {[
                            { value: '82+', label: 'Interviews Completed', sublabel: 'in beta program' },
                            { value: '15', label: 'Integrity Signals', sublabel: 'analyzed per interview' },
                            { value: '41%', label: 'Flagged for Review', sublabel: 'would have slipped through' },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border/50 text-center">
                                <div className="text-3xl font-bold text-brand mb-1">{stat.value}</div>
                                <div className="text-white font-medium">{stat.label}</div>
                                <div className="text-sm text-text-muted">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How It Works — 3-Step */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        Three steps. Zero engineering effort. Go from job description to forensic interview report.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Create Interview',
                                description: 'Paste your job description. Maya generates a tailored technical interview in seconds — adaptive questions, follow-ups, and skill rubrics included.',
                                icon: FileText,
                                color: 'text-brand',
                                borderColor: 'border-brand/30',
                                bgColor: 'from-brand/10',
                            },
                            {
                                step: '02',
                                title: 'Maya Interviews Live',
                                description: 'Candidates join a live video call with Maya, our AI interviewer. She adapts questions in real-time while our Sentinel Engine monitors 15 integrity signals silently.',
                                icon: Bot,
                                color: 'text-yellow-400',
                                borderColor: 'border-yellow-500/30',
                                bgColor: 'from-yellow-500/10',
                            },
                            {
                                step: '03',
                                title: 'Get Forensic Report',
                                description: 'Within minutes, you get a detailed assessment — skill scores, integrity flags, risk indicators, and a clear hire/no-hire recommendation backed by data.',
                                icon: BarChart3,
                                color: 'text-green-400',
                                borderColor: 'border-green-500/30',
                                bgColor: 'from-green-500/10',
                            },
                        ].map((item) => (
                            <div key={item.step} className={`p-8 rounded-2xl bg-gradient-to-b ${item.bgColor} to-transparent border ${item.borderColor} relative`}>
                                <div className={`text-5xl font-black ${item.color} opacity-20 absolute top-4 right-6`}>{item.step}</div>
                                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Demo Video */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">See Maya in Action</h2>
                            <p className="text-text-secondary max-w-xl mx-auto">
                                Watch a real technical interview conducted by Maya — adaptive questioning, real-time assessment, and integrity monitoring.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card aspect-video">
                            <iframe
                                src="https://www.loom.com/embed/b0a8d53703514523b7c21f9f585d9a73"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* Mid-page CTA */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-gradient-to-r from-brand/10 via-brand/5 to-transparent border border-brand/20">
                        <h2 className="text-2xl font-bold mb-3">See it work on your actual job roles</h2>
                        <p className="text-text-secondary mb-6">
                            Free pilot — 5 interviews, full forensic reports, zero commitment.
                        </p>
                        <CTAButton location="product" className="px-10 py-4" />
                    </div>
                </section>

                {/* 3-Agent Architecture — Outcome-focused */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">Three AI Agents. One Verified Hire.</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        While Maya interviews the candidate, two more agents work silently in the background — verifying identity, detecting anomalies, and scoring every signal.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Maya Agent */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-brand/10 to-transparent border border-brand/30">
                            <div className="w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center mb-6">
                                <Bot className="w-7 h-7 text-brand" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Maya</h3>
                            <p className="text-brand text-sm font-medium mb-4">AI Interviewer</p>
                            <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                Conducts live, voice-based technical interviews with adaptive follow-up questions that probe real understanding.
                            </p>
                            <div className="pt-4 border-t border-brand/10">
                                <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">What you get</p>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                                        <span>Skill-by-skill scoring rubric</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                                        <span>Full interview transcript</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                                        <span>Response quality analysis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sentinel Engine */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/30">
                            <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Sentinel Engine</h3>
                            <p className="text-yellow-500 text-sm font-medium mb-4">Integrity Monitor</p>
                            <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                Runs silently during the interview, monitoring for proxy assistance, AI-generated answers, and identity inconsistencies.
                            </p>
                            <div className="pt-4 border-t border-yellow-500/10">
                                <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-2">What you get</p>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                                        <span>Real-time anomaly alerts</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                                        <span>Session integrity score</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                                        <span>Confidence-level indicators</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Forensic Engine */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/30">
                            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                                <Fingerprint className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Forensic Engine</h3>
                            <p className="text-red-500 text-sm font-medium mb-4">15-Signal Analysis</p>
                            <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                Post-interview deep analysis that correlates all 15 signals into an actionable integrity report with clear risk flags.
                            </p>
                            <div className="pt-4 border-t border-red-500/10">
                                <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">What you get</p>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <span>Identity verification report</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <span>Behavioral analysis breakdown</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <span>Hire confidence score</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 15 Signals — Conversion-framed */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">15 Signals. Zero Guesswork.</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        Every interview is analyzed across 15 proprietary signals spanning identity, behavior, and technical depth — so you know exactly who you&apos;re hiring.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                        {[
                            {
                                category: 'Identity Verification',
                                question: 'Is this really who they say they are?',
                                description: 'Multi-factor verification that runs continuously — not just at the start. Confirms the person interviewing is the person you invited.',
                                signals: '5 signals',
                                color: 'text-brand',
                                bgColor: 'bg-brand/10',
                                borderColor: 'border-brand/20',
                                icon: UserCheck,
                            },
                            {
                                category: 'Behavioral Analysis',
                                question: 'Are they getting outside help?',
                                description: 'Real-time monitoring for anomalies that indicate coaching, proxy assistance, or AI-generated responses during the session.',
                                signals: '6 signals',
                                color: 'text-yellow-400',
                                bgColor: 'bg-yellow-500/10',
                                borderColor: 'border-yellow-500/20',
                                icon: Eye,
                            },
                            {
                                category: 'Technical Integrity',
                                question: 'Do they actually know this?',
                                description: 'Validates that candidates demonstrate genuine technical understanding — not just surface-level prompting of AI tools.',
                                signals: '4 signals',
                                color: 'text-green-400',
                                bgColor: 'bg-green-500/10',
                                borderColor: 'border-green-500/20',
                                icon: Brain,
                            },
                        ].map((group) => (
                            <div key={group.category} className={`p-6 rounded-2xl ${group.bgColor} border ${group.borderColor}`}>
                                <group.icon className={`w-8 h-8 ${group.color} mb-4`} />
                                <div className={`text-xs font-bold uppercase tracking-wider ${group.color} mb-2`}>{group.signals}</div>
                                <h3 className="text-lg font-bold text-white mb-1">{group.category}</h3>
                                <p className={`text-sm italic ${group.color} mb-3`}>&ldquo;{group.question}&rdquo;</p>
                                <p className="text-sm text-text-secondary leading-relaxed">{group.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-text-muted text-xs mt-6 max-w-xl mx-auto">
                        Signal details are shared under NDA during the pilot evaluation. This protects the integrity of our detection methods.
                    </p>
                </section>

                {/* What You Get Per Interview */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">What You Get Per Interview</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        Every Rigovo interview produces a comprehensive package — not just a score, but a complete picture.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            { icon: FileText, label: 'Full Transcript', description: 'Every question and answer, timestamped' },
                            { icon: BarChart3, label: 'Skill Scores', description: 'Granular ratings per competency area' },
                            { icon: ShieldCheck, label: 'Integrity Report', description: '15-signal forensic analysis results' },
                            { icon: AlertTriangle, label: 'Risk Flags', description: 'Clear red/yellow/green indicators' },
                            { icon: TrendingUp, label: 'Hire Recommendation', description: 'Data-backed hire/no-hire signal' },
                            { icon: Play, label: 'Session Recording', description: 'Full audio/video playback' },
                            { icon: Users, label: 'Comparison View', description: 'Side-by-side candidate ranking' },
                            { icon: Clock, label: 'Time Savings', description: '45 min interview, report in minutes' },
                        ].map((item) => (
                            <div key={item.label} className="p-5 rounded-xl bg-card border border-border/50 hover:border-brand/20 transition-all">
                                <item.icon className="w-6 h-6 text-brand mb-3" />
                                <h3 className="text-sm font-bold text-white mb-1">{item.label}</h3>
                                <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social Proof / Trust */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Built for Enterprise */}
                            <div className="p-8 rounded-2xl bg-card border border-border/50">
                                <h3 className="text-2xl font-bold mb-6">Built for Enterprise</h3>
                                <ul className="space-y-4">
                                    {[
                                        'AES-256 encryption at rest and in transit',
                                        'SOC 2 Type II readiness',
                                        'GDPR & CCPA compliant by design',
                                        'Role-based access control (RBAC)',
                                        'SSO integration ready',
                                        'Audit trails for every interview',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Why Teams Switch */}
                            <div className="p-8 rounded-2xl bg-card border border-border/50">
                                <h3 className="text-2xl font-bold mb-6">Why Teams Switch to Rigovo</h3>
                                <ul className="space-y-4">
                                    {[
                                        { problem: 'Wasting senior engineers on screening', solution: 'Maya handles first-round interviews 24/7' },
                                        { problem: 'Can\'t verify remote candidates', solution: '15-signal forensic verification in every session' },
                                        { problem: 'Inconsistent interview quality', solution: 'Standardized, bias-reduced assessments every time' },
                                        { problem: 'Slow time-to-hire', solution: 'Interview today, get reports in minutes' },
                                    ].map((item) => (
                                        <li key={item.problem} className="text-sm">
                                            <div className="text-text-muted line-through mb-1">{item.problem}</div>
                                            <div className="text-white font-medium flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                                {item.solution}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-brand/10 via-brand/5 to-transparent border border-brand/20">
                        <h2 className="text-3xl font-bold mb-4">Ready to see who you&apos;re really hiring?</h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Start with a free pilot — 5 interviews, full forensic reports, zero risk. See the difference verified hiring makes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <CTAButton location="product" className="px-10 py-4 text-base" />
                            <CTAButton variant="secondary" location="product" className="px-10 py-4 text-base" />
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
                </section>
            </main>
            <Footer />
        </div>
    );
}
