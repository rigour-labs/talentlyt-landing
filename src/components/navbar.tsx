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
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl ${isScrolled
                ? 'bg-black/80 py-3'
                : 'bg-black/60 py-4'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">

                        <span className="text-lg font-bold tracking-tight text-foreground">
                            Talent<span className="text-text-secondary">Lyt</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-6">
                        <Link href="/login" className="text-sm font-medium text-secondary hover:text-primary transition-colors hidden sm:block">
                            Sign In
                        </Link>
                        <Link
                            href="/request-demo"
                            className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-all shadow-sm hover:shadow-md"
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
