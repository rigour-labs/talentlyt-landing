'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import mixpanel from 'mixpanel-browser';

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Platform', href: '/' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
                ? 'bg-background/80 backdrop-blur-xl border-white/10 py-3'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between">
                    <Link 
                        href="/" 
                        className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded-lg px-2 py-1 -ml-2"
                        aria-label="TalentLyt Home"
                    >
                        <div className="relative w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)] overflow-hidden">
                            <span className="text-white font-bold text-lg relative z-10">T</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand transition-colors">
                            Talent<span className="text-brand">Lyt</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1 px-1 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-5 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background ${
                                    pathname === link.href 
                                        ? 'bg-brand/20' 
                                        : 'hover:bg-white/5'
                                }`}
                                aria-current={pathname === link.href ? 'page' : undefined}
                            >
                                <span className={`technical-label text-[10px] ${
                                    pathname === link.href 
                                        ? 'text-brand' 
                                        : 'text-white/50 group-hover:text-white'
                                }`}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 sm:gap-8">
                        <a 
                            href="https://platform.talentlyt.cloud" 
                            className="technical-label text-[10px] text-white/50 hover:text-white transition-colors hidden md:block focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                            aria-label="Sign in to platform"
                        >
                            Sign In
                        </a>
                        <Link
                            href="/request-demo"
                            onClick={() => mixpanel.track('CTA_Click', { location: 'Navbar', type: 'Request Demo' })}
                            className="group relative px-6 py-2.5 bg-brand text-white rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2 overflow-hidden hidden sm:flex focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                            aria-label="Start free trial"
                        >
                            <span className="technical-label text-[10px] relative z-10">Start Free Trial</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>

                        <button
                            className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation menu"
                >
                        <nav className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background ${
                                        pathname === link.href 
                                            ? 'bg-brand/10 text-brand' 
                                            : 'text-white/70 hover:bg-white/5'
                                    }`}
                                    aria-current={pathname === link.href ? 'page' : undefined}
                                >
                                    <span className="technical-label">{link.name}</span>
                                </Link>
                            ))}
                            <div className="h-px bg-white/10 my-2" role="separator" />
                            <a 
                                href="https://platform.talentlyt.cloud" 
                                className="px-4 py-3 text-white/70 technical-label hover:bg-white/5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                                aria-label="Sign in to platform"
                            >
                                Sign In
                            </a>
                            <Link
                                href="/request-demo"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-4 bg-brand text-white rounded-xl text-center technical-label hover:bg-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                                aria-label="Start free trial"
                            >
                                Start Free Trial
                            </Link>
                        </nav>
                    </div>
                )}
        </nav>
    );
}
