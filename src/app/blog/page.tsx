import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog | AI Interview Platform Insights & Technical Hiring Guides',
    description: 'Expert insights on AI interview platforms, technical hiring best practices, interview integrity verification, and the future of recruitment technology.',
    keywords: [
        'AI interview blog',
        'technical hiring tips',
        'interview integrity',
        'recruitment technology',
    ],
};

const blogPosts = [
    {
        slug: 'what-is-ai-interview-platform',
        title: 'What is an AI Interview Platform? Complete Guide for 2025',
        excerpt: 'Learn how AI interview platforms are transforming technical hiring with automated assessments, integrity verification, and bias reduction.',
        category: 'Guide',
        readTime: '8 min read',
        date: '2025-01-15',
    },
    {
        slug: 'interview-integrity-verification-guide',
        title: 'Interview Integrity Verification: Why It Matters for Technical Hiring',
        excerpt: 'Discover how forensic interview verification detects cheating, proxy actors, and AI-assisted responses in real-time.',
        category: 'Deep Dive',
        readTime: '6 min read',
        date: '2025-01-10',
    },
    {
        slug: 'multi-agent-ai-interviews',
        title: 'Multi-Agent AI for Technical Interviews: The Future of Hiring',
        excerpt: 'How consensus-based AI systems ensure accurate and fraud-proof technical assessments.',
        category: 'Technology',
        readTime: '7 min read',
        date: '2025-01-05',
    },
    {
        slug: 'reduce-hiring-bias-ai',
        title: 'How to Reduce Hiring Bias with AI Interviews',
        excerpt: 'Proven strategies to minimize unconscious bias in technical hiring using AI-powered interview platforms.',
        category: 'Best Practices',
        readTime: '6 min read',
        date: '2025-01-01',
    },
    {
        slug: 'detect-cheating-remote-interviews',
        title: 'How to Detect Cheating in Remote Technical Interviews',
        excerpt: 'Expert strategies for identifying fraud, proxy actors, AI assistance, and unauthorized help in remote hiring.',
        category: 'Security',
        readTime: '8 min read',
        date: '2024-12-20',
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main id="main-content" role="main" className="pt-24 pb-16">
                <section className="px-4 sm:px-6 py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                <BookOpen className="w-3 h-3" />
                                TalentLyt Blog
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                AI Interview <span className="text-brand">Insights</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                                Expert guides on AI interview platforms, technical hiring, and interview integrity verification.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-brand/30 transition-all duration-500"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="px-3 py-1 rounded-lg bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-text-muted text-xs">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <time className="text-xs text-text-muted">
                                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </time>
                                        <span className="flex items-center gap-2 text-brand text-sm font-bold group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
