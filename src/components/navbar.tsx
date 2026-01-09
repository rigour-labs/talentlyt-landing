'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import mixpanel from 'mixpanel-browser';



export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-background/80 backdrop-blur-xl border-white/10 py-3'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] overflow-hidden">
                            <span className="text-white font-bold text-lg relative z-10">T</span>
                            <motion.div
                                animate={{ top: ['-100%', '200%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute left-0 w-full h-1/2 bg-white/20 -rotate-45"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand transition-colors">
                            Talent<span className="text-brand">Lyt</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 px-1 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                        {[
                            { name: 'Platform', href: '/' },
                            { name: 'Pricing', href: '/pricing' },
                            { name: 'About', href: '/about' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 hover:bg-white/5 rounded-full transition-all"
                            >
                                <span className="technical-label text-[10px] text-white/50 group-hover:text-white">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="https://platform.talentlyt.cloud" className="technical-label text-[10px] text-white/50 hover:text-white transition-colors hidden sm:block">
                            Sign In
                        </a>
                        <Link
                            href="/request-demo"
                            onClick={() => mixpanel.track('CTA_Click', { location: 'Navbar', type: 'Request Demo' })}
                            className="group relative px-6 py-2.5 bg-brand text-white rounded-xl hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 overflow-hidden"
                        >
                            <span className="technical-label text-[10px] relative z-10">Start Free Trial</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
