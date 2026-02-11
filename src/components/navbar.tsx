'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { CTA_CONFIG } from '@/components/ui/cta-button';
import { Logo } from './logo';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Platform', href: '/' },
        { name: 'Product', href: '/product' },
        { name: 'Compare', href: '/compare' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Announcement Bar - Dynamic Eye-Catcher */}
            <div className="relative overflow-hidden bg-[#030712] border-b border-brand/20">
                {/* Background Shimmer Sweep */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent w-1/2 animate-shimmer-sweep opacity-50" />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,255,0.2),transparent_70%)]" />

                <div className="relative z-10 flex items-center justify-center gap-4 py-3 px-4 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        {/* Flashing "LIVE" indicator - hidden on smallest screens */}
                        <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 animate-pulse">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                            <span className="text-[10px] sm:text-[11px] font-black text-red-500 uppercase tracking-widest">Live Offer</span>
                        </div>

                        <p className="text-[11px] sm:text-xs font-bold text-white tracking-wide flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-brand animate-pulse-soft shrink-0" />
                            <span>
                                <span className="hidden sm:inline">Get </span><span className="text-white underline underline-offset-4 decoration-brand/50">"The Pilot"</span> <span className="text-brand font-black">Free</span><span className="hidden sm:inline"> ($29)</span>
                            </span>
                        </p>
                    </div>

                    <a
                        href={CTA_CONFIG.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => analytics.track({
                            event: 'cta_clicked',
                            properties: {
                                location: 'announcement_bar',
                                cta_type: 'book_demo',
                                cta_text: CTA_CONFIG.compactText,
                                destination_url: CTA_CONFIG.primaryLink,
                            },
                        })}
                        className="group relative px-3 sm:px-5 py-2 bg-brand text-white text-[10px] sm:text-[11px] font-black rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 overflow-hidden shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] shrink-0"
                    >
                        <span className="relative z-10 uppercase tracking-wider sm:tracking-widest">{CTA_CONFIG.compactText}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                </div>
            </div>

            <nav
                className={`transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
                    ? 'bg-background/80 backdrop-blur-xl border-white/10 py-3'
                    : 'bg-transparent border-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded-lg px-2 py-1 -ml-2"
                            aria-label="Rigovo Home"
                        >
                            <Logo size="md" />
                        </Link>

                        <nav className="hidden md:flex items-center gap-1 px-1 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md" aria-label="Main navigation">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => analytics.track({
                                        event: 'nav_link_clicked',
                                        properties: {
                                            link_name: link.name,
                                            link_url: link.href,
                                            location: 'navbar',
                                        },
                                    })}
                                    className={`px-5 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background ${pathname === link.href
                                        ? 'bg-brand/20'
                                        : 'hover:bg-white/5'
                                        }`}
                                    aria-current={pathname === link.href ? 'page' : undefined}
                                >
                                    <span className={`technical-label text-[10px] ${pathname === link.href
                                        ? 'text-brand'
                                        : 'text-white/70 group-hover:text-white'
                                        }`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4 sm:gap-8">
                            <a
                                href={CTA_CONFIG.primaryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => analytics.track({
                                    event: 'cta_clicked',
                                    properties: {
                                        location: 'navbar',
                                        cta_type: 'book_demo',
                                        cta_text: CTA_CONFIG.compactText,
                                        destination_url: CTA_CONFIG.primaryLink,
                                    },
                                })}
                                className="group relative px-6 py-2.5 bg-brand text-white rounded-xl hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all flex items-center gap-2 overflow-hidden hidden sm:flex focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                                aria-label="Book a 15-minute pilot setup call"
                            >
                                <span className="technical-label text-[10px] relative z-10">{CTA_CONFIG.compactText}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </a>

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
                                    onClick={() => {
                                        analytics.track({
                                            event: 'nav_link_clicked',
                                            properties: {
                                                link_name: link.name,
                                                link_url: link.href,
                                                location: 'mobile_menu',
                                            },
                                        });
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background ${pathname === link.href
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
                                href={CTA_CONFIG.primaryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    analytics.track({
                                        event: 'cta_clicked',
                                        properties: {
                                            location: 'navbar_mobile',
                                            cta_type: 'book_demo',
                                            cta_text: CTA_CONFIG.compactText,
                                            destination_url: CTA_CONFIG.primaryLink,
                                        },
                                    });
                                    setIsMobileMenuOpen(false);
                                }}
                                className="px-4 py-4 bg-brand text-white rounded-xl text-center technical-label hover:bg-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
                                aria-label="Book a 15-minute pilot setup call"
                            >
                                {CTA_CONFIG.compactText}
                            </a>
                        </nav>
                    </div>
                )}
            </nav>
        </header>
    );
}
