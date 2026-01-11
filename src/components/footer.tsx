'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border bg-background" role="contentinfo">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded-lg px-2 py-1 -ml-2"
                        aria-label="TalentLyt Home"
                    >
                        <div className="relative w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] overflow-hidden">
                            <span className="text-white font-bold text-lg relative z-10">T</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white transition-colors">
                            Talent<span className="text-brand">Lyt</span>
                        </span>
                    </Link>
                    <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-secondary" aria-label="Footer navigation">
                        <Link
                            href="/about"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            About
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/ai-ethics"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            AI Ethics
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* AI Disclosure & Legal Advisory */}
                <div className="text-center py-8 border-t border-white/5 mt-8">
                    <p className="text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">
                        * TalentLyt provides automated assessment signals and integrity auditing. All data processed is subject to our standard data protection protocols. TalentLyt is designed to assist human decision-making, not replace it.
                    </p>
                    <p className="text-xs text-white/40 mt-2">
                        For information on our legally-defensible audit trails and candidate recognition protocols, review our{' '}
                        <Link
                            href="/privacy"
                            className="text-white/60 underline hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded"
                        >
                            Privacy Framework
                        </Link>
                        {' '}and{' '}
                        <Link
                            href="/ai-ethics"
                            className="text-white/60 underline hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded"
                        >
                            AI Ethics Governance
                        </Link>.
                    </p>
                </div>

                <div className="border-t border-white/5 mt-8 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="technical-label text-[10px] text-white/60">
                            © {new Date().getFullYear()} Rigour Labs Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
