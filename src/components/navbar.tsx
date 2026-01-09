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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass border-b border-gray-200/50 dark:border-white/10 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">

                        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                            Talent<span className="text-blue-600 dark:text-blue-500">Lyt</span>
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
