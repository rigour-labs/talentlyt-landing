import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Home, BookOpen, MessageSquare, Sparkles } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <Sparkles className="w-4 h-4 text-brand" />
                        <span className="text-sm font-medium text-brand">Page Not Found</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                        <span className="text-brand">404</span>
                    </h1>

                    <p className="text-xl text-text-secondary mb-4">
                        This page doesn't exist — but your next great hire does.
                    </p>

                    <p className="text-text-muted mb-10">
                        Let Maya AI help you find them with 15-signal integrity verification.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <CTAButton location="hero" />
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                        <Link href="/blog" className="p-5 rounded-2xl bg-card border border-border/50 hover:border-brand/30 transition-colors group">
                            <BookOpen className="w-5 h-5 text-brand mb-3" />
                            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand transition-colors">Blog</h3>
                            <p className="text-xs text-text-muted">AI hiring insights & guides</p>
                        </Link>
                        <Link href="/pricing" className="p-5 rounded-2xl bg-card border border-border/50 hover:border-brand/30 transition-colors group">
                            <Sparkles className="w-5 h-5 text-brand mb-3" />
                            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand transition-colors">Pricing</h3>
                            <p className="text-xs text-text-muted">Plans starting at $0.35/min</p>
                        </Link>
                        <Link href="/contact" className="p-5 rounded-2xl bg-card border border-border/50 hover:border-brand/30 transition-colors group">
                            <MessageSquare className="w-5 h-5 text-brand mb-3" />
                            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand transition-colors">Contact</h3>
                            <p className="text-xs text-text-muted">Talk to our team</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
