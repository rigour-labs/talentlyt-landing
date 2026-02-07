'use client';

import Link from 'next/link';
import { analytics } from '@/lib/analytics';
import { Logo } from './logo';

/**
 * Tracked footer link component
 * Fires link_clicked event on click
 */
function FooterLink({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    const handleClick = () => {
        analytics.track({
            event: 'link_clicked',
            properties: {
                location: 'footer',
                link_type: href.startsWith('http') ? 'external' : 'internal',
                link_text: typeof children === 'string' ? children : 'Link',
                destination_url: href,
            },
        });
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}

export function Footer() {
    return (
        <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border bg-background" role="contentinfo">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <Link
                        href="/"
                        className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded-lg px-2 py-1 -ml-2"
                        aria-label="Rigovo Home"
                    >
                        <Logo size="md" />
                    </Link>
                    <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-secondary" aria-label="Footer navigation">
                        <FooterLink
                            href="/about"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            About
                        </FooterLink>
                        <FooterLink
                            href="/privacy"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Privacy
                        </FooterLink>
                        <FooterLink
                            href="/terms"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Terms
                        </FooterLink>
                        <FooterLink
                            href="/security"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Security
                        </FooterLink>
                        <FooterLink
                            href="/ai-ethics"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            AI Ethics
                        </FooterLink>
                        <FooterLink
                            href="/contact"
                            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                        >
                            Contact
                        </FooterLink>
                    </nav>
                </div>

                {/* AI Disclosure & Legal Advisory */}
                <div className="text-center py-8 border-t border-white/5 mt-8">
                    <p className="text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">
                        * Rigovo provides automated assessment signals and integrity auditing. All data processed is subject to our standard data protection protocols. Rigovo is designed to assist human decision-making, not replace it.
                    </p>
                    <p className="text-xs text-white/40 mt-2">
                        For information on our legally-defensible audit trails and candidate recognition protocols, review our{' '}
                        <FooterLink
                            href="/security"
                            className="text-white/60 underline hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded"
                        >
                            Security & Compliance
                        </FooterLink>
                        ,{' '}
                        <FooterLink
                            href="/privacy"
                            className="text-white/60 underline hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded"
                        >
                            Privacy Framework
                        </FooterLink>
                        {' '}and{' '}
                        <FooterLink
                            href="/ai-ethics"
                            className="text-white/60 underline hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded"
                        >
                            AI Ethics Governance
                        </FooterLink>.
                    </p>
                </div>

                <div className="border-t border-white/5 mt-8 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="technical-label text-[10px] text-white/60">
                            © {new Date().getFullYear()} Rigour Labs Inc. All rights reserved.
                        </p>
                    </div>
                    {/* Trust Badges for E-E-A-T */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">SOC2 Ready</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">GDPR Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">AES-256</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
