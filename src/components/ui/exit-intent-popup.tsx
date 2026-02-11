'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, ShieldCheck, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';
import { CTA_CONFIG } from '@/components/ui/cta-button';

type PopupVariant = 'default' | 'report' | 'pricing';

function getVariant(pathname: string): PopupVariant {
    if (pathname.startsWith('/blog') || pathname.startsWith('/compare')) return 'report';
    if (pathname.startsWith('/pricing')) return 'pricing';
    return 'default';
}

const variants: Record<PopupVariant, {
    icon: React.ElementType;
    title: string;
    description: React.ReactNode;
    benefits: string[];
    ctaText: string;
    ctaHref: string;
    dismissText: string;
}> = {
    default: {
        icon: Gift,
        title: 'Wait! Get Your Free Pilot',
        description: <>Try Rigovo free — see why teams catch more issues with our 15-signal verification.</>,
        benefits: ['Free AI-powered pilot session', 'Full integrity verification enabled', 'No credit card required'],
        ctaText: CTA_CONFIG.primaryText,
        ctaHref: CTA_CONFIG.primaryLink,
        dismissText: "No thanks, I'll figure it out myself",
    },
    report: {
        icon: FileText,
        title: 'See a Real Interview Report',
        description: <>Integrity Score, AI Proficiency classification, and 15-signal forensic breakdown — see exactly what hiring managers receive.</>,
        benefits: ['5-page detailed analysis', 'AI Architect vs Passenger classification', 'Forensic verification breakdown'],
        ctaText: CTA_CONFIG.secondaryText,
        ctaHref: CTA_CONFIG.secondaryLink,
        dismissText: 'Maybe later',
    },
    pricing: {
        icon: MessageSquare,
        title: 'Need Help Choosing a Plan?',
        description: <>Book a quick 15-minute call and we&apos;ll help you pick the right plan for your team size and hiring volume.</>,
        benefits: ['Personalized plan recommendation', 'Volume discount for 10+ interviews/month', 'Free pilot to test first'],
        ctaText: CTA_CONFIG.primaryText,
        ctaHref: CTA_CONFIG.primaryLink,
        dismissText: "I'll decide on my own",
    },
};

export function ExitIntentPopup() {
    const pathname = usePathname();
    const variant = getVariant(pathname);
    const config = variants[variant];
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

        const showPopup = (trigger: 'mouse_leave' | 'inactivity') => {
            setIsVisible(true);
            setHasShown(true);
            sessionStorage.setItem('exitIntentShown', 'true');
            analytics.track({
                event: 'popup_shown',
                properties: {
                    popup_type: 'exit_intent',
                    trigger,
                    page_path: window.location.pathname,
                },
            });
        };

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger when mouse leaves from top of viewport (likely closing tab)
            if (e.clientY <= 0 && !hasShown) {
                showPopup('mouse_leave');
            }
        };

        // Also trigger after 45 seconds of inactivity
        let inactivityTimer: NodeJS.Timeout;
        const resetTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                if (!hasShown) {
                    showPopup('inactivity');
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

    const handleClose = (method: 'close_button' | 'backdrop_click' | 'no_thanks') => {
        setIsVisible(false);
        analytics.track({
            event: 'popup_dismissed',
            properties: {
                popup_type: 'exit_intent',
                dismiss_method: method,
                page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            },
        });
    };

    const handleCTAClick = () => {
        analytics.track({
            event: 'cta_clicked',
            properties: {
                location: 'exit_intent',
                cta_type: 'start_trial',
                cta_text: config.ctaText,
                destination_url: config.ctaHref,
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
                        onClick={() => handleClose('backdrop_click')}
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
                                onClick={() => handleClose('close_button')}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Close popup"
                            >
                                <X className="w-5 h-5 text-text-muted" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-6">
                                    <config.icon className="w-8 h-8 text-brand" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {config.title}
                                </h3>

                                <p className="text-text-secondary mb-6">
                                    {config.description}
                                </p>

                                {/* Benefits */}
                                <div className="flex flex-col gap-2 mb-6 text-left">
                                    {config.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                            <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={config.ctaHref}
                                    {...(config.ctaHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    onClick={handleCTAClick}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all"
                                >
                                    {config.ctaText}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>

                                <button
                                    onClick={() => handleClose('no_thanks')}
                                    className="mt-4 text-sm text-text-muted hover:text-white transition-colors"
                                >
                                    {config.dismissText}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
