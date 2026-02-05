import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
    Bot, Shield, Fingerprint, Mic2, Database, Activity,
    ShieldCheck, Cpu, Zap, Lock, Search, Sparkles,
    AudioLines, ScanEye, Binary, Brain, ShieldAlert,
    CheckCircle2, Play, Code2, Globe, Server, Layers
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product | TalentLyt Technical Architecture',
    description: 'Deep dive into TalentLyt\'s 3-agent AI architecture: Maya conversational AI, NEMO security sentinel, and 13-signal forensic engine. Built with Python, TypeScript, WebRTC.',
    alternates: {
        canonical: 'https://talentlyt.cloud/product',
    },
};

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-green-400">Live Beta · 82 Interviews Completed</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Technical <span className="text-brand">Architecture</span>
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            A multi-agent AI system that conducts technical interviews while verifying candidates lead AI, not follow it. Built for scale, designed for trust.
                        </p>
                    </div>

                    {/* Beta Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                        {[
                            { label: 'Beta Interviews', value: '82', sublabel: 'Completed' },
                            { label: 'Sessions Analyzed', value: '6,824', sublabel: 'Signals processed' },
                            { label: 'AI Assistance Rate', value: '41%', sublabel: 'Required deeper review' },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border/50 text-center">
                                <div className="text-3xl font-bold text-brand mb-1">{stat.value}</div>
                                <div className="text-white font-medium">{stat.label}</div>
                                <div className="text-sm text-text-muted">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>

                    {/* Demo Video */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-2xl font-bold text-center mb-6">See It In Action</h2>
                        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card aspect-video">
                            <iframe
                                src="https://www.loom.com/embed/b0a8d53703514523b7c21f9f585d9a73"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                        <p className="text-center text-text-muted text-sm mt-4">
                            Full platform walkthrough showing Maya AI conducting a technical interview
                        </p>
                    </div>
                </section>

                {/* Architecture Diagram */}
                <section className="container mx-auto px-4 py-12 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">3-Agent Architecture</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        Three specialized AI agents work in concert to deliver secure, intelligent technical assessments.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Maya Agent */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-brand/10 to-transparent border border-brand/30">
                            <div className="w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center mb-6">
                                <Bot className="w-7 h-7 text-brand" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Maya</h3>
                            <p className="text-brand text-sm font-medium mb-4">Conversational Sentinel</p>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li className="flex items-start gap-2">
                                    <Mic2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                                    <span>Adaptive voice-based technical interviews</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Brain className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                                    <span>Real-time skill assessment & follow-up questions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AudioLines className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                                    <span>Voice biometrics for identity verification</span>
                                </li>
                            </ul>
                        </div>

                        {/* NEMO Agent */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/30">
                            <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">NEMO</h3>
                            <p className="text-yellow-500 text-sm font-medium mb-4">Security Sentinel</p>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li className="flex items-start gap-2">
                                    <ScanEye className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>Tab-switch & screen-share monitoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ShieldAlert className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>Real-time anomaly detection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Lock className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>Context-aware safety rails</span>
                                </li>
                            </ul>
                        </div>

                        {/* Forensic Engine */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/30">
                            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                                <Fingerprint className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Forensic Engine</h3>
                            <p className="text-red-500 text-sm font-medium mb-4">13-Signal Analysis</p>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li className="flex items-start gap-2">
                                    <Binary className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    <span>Deepfake & liveness detection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Activity className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    <span>Behavioral pattern analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Database className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    <span>85% predictive job success accuracy</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">Technology Stack</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        Enterprise-grade infrastructure built for security, scale, and reliability.
                    </p>

                    {/* Core Infrastructure */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <h3 className="text-lg font-semibold text-white mb-6 text-center">Core Infrastructure</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'LiveKit', sublabel: 'Real-time Video/Audio', color: 'text-purple-400' },
                                { label: 'Deepgram', sublabel: 'Speech-to-Text AI', color: 'text-green-400' },
                                { label: 'AWS Rekognition', sublabel: 'Face & Liveness Detection', color: 'text-orange-400' },
                                { label: 'Azure Cloud', sublabel: 'Infrastructure & Hosting', color: 'text-blue-400' },
                            ].map((tech) => (
                                <div key={tech.label} className="p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center">
                                    <div className={`font-bold text-lg ${tech.color}`}>{tech.label}</div>
                                    <div className="text-xs text-text-muted mt-1">{tech.sublabel}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Application Stack */}
                    <div className="max-w-5xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-6 text-center">Application Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: Code2, label: 'TypeScript', sublabel: 'Frontend & API' },
                                { icon: Server, label: 'Python', sublabel: 'ML & Forensics' },
                                { icon: Database, label: 'PostgreSQL', sublabel: 'Data Layer' },
                                { icon: Layers, label: 'Next.js', sublabel: 'Web Framework' },
                                { icon: Cpu, label: 'TensorFlow', sublabel: 'ML Models' },
                                { icon: Lock, label: 'AES-256', sublabel: 'Encryption' },
                                { icon: Shield, label: 'Cloudflare', sublabel: 'Edge & Security' },
                                { icon: Globe, label: 'WebRTC', sublabel: 'P2P Media' },
                            ].map((tech) => (
                                <div key={tech.label} className="p-4 rounded-xl bg-card border border-border/50 text-center">
                                    <tech.icon className="w-6 h-6 text-brand mx-auto mb-2" />
                                    <div className="font-medium text-white text-sm">{tech.label}</div>
                                    <div className="text-xs text-text-muted">{tech.sublabel}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 13 Signals */}
                <section className="container mx-auto px-4 py-16 border-t border-border/30">
                    <h2 className="text-3xl font-bold text-center mb-4">13-Signal AI Leadership Verification</h2>
                    <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
                        Our forensic engine analyzes behavioral and technical signals to verify candidates architect solutions, not just prompt them.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            'Liveness Detection',
                            'Deepfake Analysis',
                            'Voice Biometrics',
                            'Lip-Sync Verification',
                            'Tab Switch Monitoring',
                            'Screen Share Detection',
                            'Typing Cadence',
                            'Eye Gaze Tracking',
                            'Audio Environment',
                            'Response Latency',
                            'Code Paste Detection',
                            'Browser Fingerprint',
                            'Behavioral Consistency',
                        ].map((signal, i) => (
                            <div key={signal} className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                <span className="text-sm text-text-secondary">{signal}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                        <h2 className="text-3xl font-bold mb-4">Ready to see it live?</h2>
                        <p className="text-text-secondary mb-8">
                            Get a personalized demo of TalentLyt and see our 3-agent system in action.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/request-demo"
                                className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover transition-colors"
                            >
                                Request Demo
                            </Link>
                            <Link
                                href="https://platform.talentlyt.cloud"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Try Platform
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
