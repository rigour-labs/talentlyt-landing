'use client';

import React from 'react';
import Link from 'next/link';



export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav
            className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-[90%] max-w-5xl rounded-xl sm:rounded-2xl border border-border shadow-2xl backdrop-blur-xl ${isScrolled
                ? 'bg-muted/90 py-2 sm:py-3'
                : 'bg-muted/70 py-2.5 sm:py-4'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-base sm:text-lg tracking-tight text-foreground">
                            Talent<span className="text-text-secondary">Lyt</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <Link href="/login" className="text-xs sm:text-sm font-medium text-secondary hover:text-primary transition-colors hidden sm:block">
                            Sign In
                        </Link>
                        <Link
                            href="/request-demo"
                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
