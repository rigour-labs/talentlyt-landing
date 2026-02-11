import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BookOpen, Search } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

export const metadata: Metadata = {
    title: 'AI Interview Glossary | Technical Hiring Terms Explained',
    description: 'Comprehensive glossary of AI interview platform terms. Learn about integrity verification, multi-agent AI, technical screening, and more hiring technology concepts.',
    keywords: [
        'AI interview glossary',
        'technical hiring terms',
        'interview technology definitions',
        'HR tech glossary',
        'recruitment terminology',
        'AI hiring definitions',
    ],
};

const glossaryTerms = [
    {
        term: 'AI Interview Platform',
        definition: 'A software solution that uses artificial intelligence to conduct, evaluate, and/or verify job interviews. These platforms automate various aspects of the interview process while maintaining assessment quality.',
        category: 'Platform',
        relatedLink: '/blog/what-is-ai-interview-platform',
    },
    {
        term: 'Adaptive Questioning',
        definition: 'An AI interview technique where follow-up questions are dynamically generated based on the candidate\'s previous responses, allowing for deeper exploration of relevant topics.',
        category: 'Technology',
    },
    {
        term: 'Behavioral Analysis',
        definition: 'The process of monitoring and analyzing a candidate\'s behavior patterns during an interview, including typing speed, response timing, and interaction patterns to verify authentic engagement.',
        category: 'Integrity',
    },
    {
        term: 'Code Playback',
        definition: 'A feature that records and replays how a candidate wrote their code during a technical interview, showing the entire development process rather than just the final result.',
        category: 'Assessment',
    },
    {
        term: 'Cognitive Pattern Detection',
        definition: 'AI analysis of how a candidate approaches problems, their vocabulary usage, and thinking patterns to verify they lead AI rather than follow it.',
        category: 'Integrity',
    },
    {
        term: 'Consensus Mechanism',
        definition: 'In multi-agent AI systems, the requirement that multiple AI agents must agree on an assessment before it is finalized, reducing errors and increasing accuracy.',
        category: 'Technology',
        relatedLink: '/blog/multi-agent-ai-interviews',
    },
    {
        term: 'Forensic Engine',
        definition: 'A specialized AI component that analyzes interview sessions for authentic problem-solving and AI leadership verification. Rigovo\'s Forensic Engine works alongside Maya to verify candidates architect solutions.',
        category: 'Platform',
    },
    {
        term: '15-Signal Forensic Audit',
        definition: 'Rigovo\'s comprehensive integrity stack that simultaneously analyzes 15 proprietary signal categories covering identity, behavior, and technical depth to ensure absolute session authenticity.',
        category: 'Integrity',
    },
    {
        term: 'Integrity Verification',
        definition: 'The process of ensuring that an interview candidate is authentic and demonstrating genuine technical leadership, including identity verification and AI collaboration assessment.',
        category: 'Integrity',
        relatedLink: '/blog/interview-integrity-verification-guide',
    },
    {
        term: 'Verified Candidate Profile',
        definition: 'A portable, cryptographically-signed record of a candidate\'s verified skills and interview performance that travels with the candidate across organizations.',
        category: 'Platform',
    },
    {
        term: 'LCP (Largest Contentful Paint)',
        definition: 'A Core Web Vitals metric measuring how long it takes for the largest content element to load. Important for SEO and user experience on interview platform pages.',
        category: 'Technical',
    },
    {
        term: 'Maya',
        definition: 'Rigovo\'s conversational AI agent that conducts adaptive technical interviews, asking questions and evaluating responses with natural, human-like conversation.',
        category: 'Platform',
    },
    {
        term: 'Multi-Agent AI',
        definition: 'An AI architecture where multiple specialized agents work together on a task. In interviews, different agents handle conversation, integrity verification, and technical assessment.',
        category: 'Technology',
        relatedLink: '/blog/multi-agent-ai-interviews',
    },
    {
        term: 'Proxy Actor',
        definition: 'A person who takes an interview on behalf of another candidate. Verifying candidate identity throughout the session is a key function of interview integrity systems.',
        category: 'Integrity',
        relatedLink: '/blog/ai-leadership-remote-interviews',
    },
    {
        term: 'Sentinel Hierarchy',
        definition: 'Rigovo\'s multi-layered integrity verification architecture where multiple specialized agents work together through consensus to ensure interview authenticity.',
        category: 'Platform',
    },
    {
        term: 'Structured Interview',
        definition: 'An interview format where all candidates are asked the same core questions in the same order, providing a standardized comparison baseline and reducing bias.',
        category: 'Assessment',
        relatedLink: '/blog/reduce-hiring-bias-ai',
    },
    {
        term: 'Technical Screening',
        definition: 'The process of evaluating a candidate\'s technical skills, usually through coding challenges, system design questions, or technical discussions.',
        category: 'Assessment',
    },
    {
        term: 'Hire Confidence Scoring',
        definition: 'An AI-powered model that analyzes interview performance and behavioral signals to predict a candidate\'s likelihood of success in a specific role.',
        category: 'Assessment',
    },
    {
        term: 'Unconscious Bias',
        definition: 'Implicit preferences or prejudices that affect hiring decisions without the interviewer\'s awareness. AI interview platforms can help reduce unconscious bias through standardized evaluation.',
        category: 'Assessment',
        relatedLink: '/blog/reduce-hiring-bias-ai',
    },
    {
        term: 'Multi-Modal Verification',
        definition: 'Rigovo\'s approach to synchronizing multiple data streams during an interview session to create a comprehensive and verified view of candidate authenticity.',
        category: 'Platform',
    },
];

const categories = [...new Set(glossaryTerms.map(t => t.category))].sort();

export default function GlossaryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main id="main-content" role="main" className="pt-36 pb-16">
                <section className="px-4 sm:px-6 py-16 sm:py-24">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="max-w-3xl mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                <BookOpen className="w-3 h-3" />
                                Glossary
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                AI Interview <span className="text-brand">Glossary</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                                Comprehensive definitions of AI interview platform terms, integrity verification concepts, and technical hiring terminology.
                            </p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/10 text-text-secondary text-sm"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>

                        {/* Glossary Terms */}
                        <div className="space-y-6">
                            {glossaryTerms.sort((a, b) => a.term.localeCompare(b.term)).map((item, i) => (
                                <div
                                    key={i}
                                    id={item.term.toLowerCase().replace(/\s+/g, '-')}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand/20 transition-all"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h2 className="text-xl font-bold text-white">{item.term}</h2>
                                        <span className="px-2 py-0.5 rounded-md bg-brand/10 text-brand text-xs font-medium shrink-0">
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed">
                                        {item.definition}
                                    </p>
                                    {item.relatedLink && (
                                        <Link
                                            href={item.relatedLink}
                                            className="inline-flex items-center gap-1 mt-3 text-brand text-sm hover:underline"
                                        >
                                            Learn more →
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-b from-brand/10 to-transparent border border-brand/20 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                See These Concepts in Action
                            </h3>
                            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                                Experience how Rigovo brings multi-agent AI and integrity verification to life in technical interviews.
                            </p>
                            <CTAButton location="glossary" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
