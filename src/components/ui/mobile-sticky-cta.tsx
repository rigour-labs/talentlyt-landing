'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';
import { CTA_CONFIG } from '@/components/ui/cta-button';

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // JS-based mobile check (backup for CSS sm:hidden which framer-motion can override)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        if (typeof window !== 'undefined') {
            const dismissed = sessionStorage.getItem('mobileCTADismissed');
            if (dismissed) {
                setIsDismissed(true);
                return;
            }
        }

        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            setIsVisible(scrollPercent > 20 && !isDismissed);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed, isMobile]);

    const handleDismiss = () => {
        setIsDismissed(true);
        setIsVisible(false);
        sessionStorage.setItem('mobileCTADismissed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && isMobile && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-40 sm:hidden"
                >
                    <div className="flex items-center gap-2 px-4 py-3 bg-background/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                        <div className="flex-1 min-w-0">
                            <Link
                                href={CTA_CONFIG.primaryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    analytics.track({
                                        event: 'cta_clicked',
                                        properties: {
                                            location: 'mobile_sticky',
                                            cta_type: 'book_demo',
                                            cta_text: CTA_CONFIG.compactText,
                                            destination_url: CTA_CONFIG.primaryLink,
                                        },
                                    })
                                }
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand text-white text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
                            >
                                {CTA_CONFIG.compactText}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <button
                            onClick={handleDismiss}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0"
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
