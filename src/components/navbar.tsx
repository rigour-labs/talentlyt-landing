'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Shield } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { theme, setTheme } = useTheme();
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
                        <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black">
                            <Shield className="w-4 h-4" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">TalentLyt</span>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-6">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg text-secondary hover:text-primary transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <div className="w-5 h-5"><div className="w-5 h-5 rounded-full border-2 border-current" /></div>
                            ) : (
                                <div className="w-5 h-5 bg-current rounded-full" />
                            )}
                        </button>
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
