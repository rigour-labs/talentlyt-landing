'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown this session
        if (typeof window !== 'undefined') {
            const shown = sessionStorage.getItem('exitIntentShown');
            if (shown) {
                setHasShown(true);
                return;
            }
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves from top of viewport (likely closing tab)
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('exitIntentShown', 'true');
            }
        };

        // Also trigger after 45 seconds of inactivity
        let inactivityTimer: NodeJS.Timeout;
        const resetTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                if (!hasShown) {
                    setIsVisible(true);
                    setHasShown(true);
                    sessionStorage.setItem('exitIntentShown', 'true');
                }
            }, 45000); // 45 seconds
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('scroll', resetTimer);
        resetTimer();

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', resetTimer);
            document.removeEventListener('scroll', resetTimer);
            clearTimeout(inactivityTimer);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleCTAClick = () => {
        analytics.track({
            event: 'cta_clicked',
            properties: {
                location: 'bottom_cta',
                cta_type: 'start_trial',
                cta_text: 'Get Free Pilot Access',
                destination_url: '/request-demo',
            },
        });
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
                    >
                        <div className="bg-card border border-white/10 rounded-3xl p-8 shadow-2xl relative">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Close popup"
                            >
                                <X className="w-5 h-5 text-text-muted" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-6">
                                    <Gift className="w-8 h-8 text-brand" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Wait! Get Your Free Pilot
                                </h3>

                                <p className="text-text-secondary mb-6">
                                    Try Rigovo free for your first <span className="text-white font-semibold">5 interviews</span>.
                                    See why teams catch 41% more issues with our 15-signal verification.
                                </p>

                                {/* Benefits */}
                                <div className="flex flex-col gap-2 mb-6 text-left">
                                    {[
                                        '5 free AI-powered interviews',
                                        'Full integrity verification enabled',
                                        'No credit card required',
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                            <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/request-demo"
                                    onClick={handleCTAClick}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all"
                                >
                                    Get Free Pilot Access
                                    <ArrowRight className="w-5 h-5" />
                                </Link>

                                <button
                                    onClick={handleClose}
                                    className="mt-4 text-sm text-text-muted hover:text-white transition-colors"
                                >
                                    No thanks, I'll figure it out myself
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
