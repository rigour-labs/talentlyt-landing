import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedArticle {
    slug: string;
    title: string;
    category: string;
}

const allArticles: RelatedArticle[] = [
    { slug: 'what-is-ai-interview-platform', title: 'What is an AI Interview Platform?', category: 'Guide' },
    { slug: 'interview-integrity-verification-guide', title: 'Interview Integrity Verification Guide', category: 'Deep Dive' },
    { slug: 'multi-agent-ai-interviews', title: 'Multi-Agent AI for Interviews', category: 'Technology' },
    { slug: 'reduce-hiring-bias-ai', title: 'Reduce Hiring Bias with AI', category: 'Best Practices' },
    { slug: 'detect-cheating-remote-interviews', title: 'Detect Cheating in Remote Interviews', category: 'Security' },
];

interface RelatedArticlesProps {
    currentSlug: string;
    maxArticles?: number;
}

export function RelatedArticles({ currentSlug, maxArticles = 3 }: RelatedArticlesProps) {
    const related = allArticles
        .filter(article => article.slug !== currentSlug)
        .slice(0, maxArticles);

    return (
        <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="group p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand/30 transition-all"
                    >
                        <span className="text-xs text-brand font-bold uppercase tracking-wider">
                            {article.category}
                        </span>
                        <h4 className="text-white font-semibold mt-2 group-hover:text-brand transition-colors line-clamp-2">
                            {article.title}
                        </h4>
                        <span className="flex items-center gap-1 text-brand text-sm mt-3 group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-3 h-3" />
                        </span>
                    </Link>
                ))}
            </div>
            <div className="mt-6 text-center">
                <Link href="/blog" className="text-sm text-text-muted hover:text-brand transition-colors">
                    View all articles →
                </Link>
            </div>
        </div>
    );
}

// Quick internal links component for in-article linking
interface InternalLinkProps {
    href: string;
    children: React.ReactNode;
}

export function InternalLink({ href, children }: InternalLinkProps) {
    return (
        <Link href={href} className="text-brand hover:underline">
            {children}
        </Link>
    );
}
