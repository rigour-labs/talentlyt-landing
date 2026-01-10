'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] overflow-hidden">
                            <span className="text-white font-bold text-lg relative z-10">T</span>
                            <motion.div
                                animate={{ top: ['-100%', '200%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute left-0 w-full h-1/2 bg-white/20 -rotate-45"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white transition-colors">
                            Talent<span className="text-brand">Lyt</span>
                        </span>
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-secondary">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/ai-ethics" className="hover:text-primary transition-colors">AI Ethics</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>

                {/* AI Disclosure */}
                <div className="text-center py-8 border-t border-white/5 mt-8">
                    <p className="text-xs text-white/40 max-w-2xl mx-auto leading-relaxed">
                        * By using TalentLyt, you acknowledge that our AI agents provide assessment support based on observable metrics. TalentLyt is not a substitute for human judgment.
                    </p>
                    <p className="text-xs text-white/40 mt-2">
                        For more information on how we handle biometric and behavioral data, see our{' '}
                        <Link href="/privacy" className="text-white/60 underline hover:text-brand transition-colors">Privacy Policy</Link>
                        {' '}and{' '}
                        <Link href="/ai-ethics" className="text-white/60 underline hover:text-brand transition-colors">AI Ethics Disclosure</Link>.
                    </p>
                </div>

                <div className="border-t border-white/5 mt-8 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="technical-label text-[10px] text-white/60">
                            © 2026 Rigour Labs Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
