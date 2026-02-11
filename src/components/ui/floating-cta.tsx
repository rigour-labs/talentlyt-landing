'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    const hasTrackedShown = React.useRef(false);

    useEffect(() => {
        // Check if dismissed this session
        if (typeof window !== 'undefined') {
            const dismissed = sessionStorage.getItem('floatingCTADismissed');
            if (dismissed) {
                setIsDismissed(true);
                return;
            }
        }

        const handleScroll = () => {
            // Show after scrolling 30% of the page
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            const shouldShow = scrollPercent > 30 && !isDismissed;
            setIsVisible(shouldShow);

            // Track when floating CTA first becomes visible
            if (shouldShow && !hasTrackedShown.current) {
                hasTrackedShown.current = true;
                analytics.track({
                    event: 'popup_shown',
                    properties: {
                        popup_type: 'floating_cta',
                        trigger: 'scroll_depth',
                        page_path: window.location.pathname,
                    },
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsDismissed(true);
        setIsVisible(false);
        sessionStorage.setItem('floatingCTADismissed', 'true');
        analytics.track({
            event: 'popup_dismissed',
            properties: {
                popup_type: 'floating_cta',
                dismiss_method: 'close_button',
                page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            },
        });
    };

    const handleCTAClick = () => {
        analytics.track({
            event: 'cta_clicked',
            properties: {
                location: 'floating_cta',
                cta_type: 'start_trial',
                cta_text: 'Start Free Trial',
                destination_url: '/request-demo',
            },
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:block"
                >
                    <div className="flex items-center gap-3 px-4 py-3 bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <div className="text-sm">
                            <span className="text-text-secondary">Ready to hire smarter?</span>
                            <span className="text-white font-semibold ml-1">Try 5 interviews free</span>
                        </div>

                        <Link
                            href="/request-demo"
                            onClick={handleCTAClick}
                            className="flex items-center gap-2 px-4 py-2 bg-brand text-white text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all whitespace-nowrap"
                        >
                            Start Free
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <button
                            onClick={handleDismiss}
                            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4 text-text-muted" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
