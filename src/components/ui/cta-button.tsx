'use client';

/**
 * Unified CTA Button Component
 *
 * Single source of truth for ALL call-to-action buttons across the site.
 * Change the text, link, or style here — it updates everywhere.
 *
 * Variants:
 *   primary   – Solid brand button (hero, pricing, main CTAs)
 *   secondary – Ghost/outline button (secondary actions)
 *   compact   – Smaller button for navbar, floating bars, inline use
 *
 * Usage:
 *   <CTAButton location="hero" />
 *   <CTAButton variant="secondary" location="product" />
 *   <CTAButton variant="compact" location="navbar" />
 */

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { analytics } from '@/lib/analytics';

// Re-export CTA_CONFIG from the server-safe shared module
// so existing imports from this file continue to work.
import { CTA_CONFIG } from '@/lib/cta-config';
export { CTA_CONFIG };

// ============================================================================
// TYPES
// ============================================================================

type CTAVariant = 'primary' | 'secondary' | 'compact';

type CTALocation =
    | 'hero'
    | 'navbar'
    | 'navbar_mobile'
    | 'announcement_bar'
    | 'pricing'
    | 'bottom_cta'
    | 'floating_cta'
    | 'mobile_sticky'
    | 'exit_intent'
    | 'blog'
    | 'product'
    | 'compare'
    | 'glossary'
    | 'contact'
    | 'security'
    | 'usa_hero'
    | 'usa_cta'
    | 'uae_hero'
    | 'uae_cta';

interface CTAButtonProps {
    /** Visual variant */
    variant?: CTAVariant;
    /** Where this CTA is placed (for analytics) */
    location: CTALocation;
    /** Override the default CTA text */
    text?: string;
    /** Override the default link */
    href?: string;
    /** Show calendar icon instead of arrow */
    showCalendarIcon?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Open in new tab (for external links) */
    external?: boolean;
    /** Full width */
    fullWidth?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

export function CTAButton({
    variant = 'primary',
    location,
    text,
    href,
    showCalendarIcon = false,
    className = '',
    external,
    fullWidth = false,
}: CTAButtonProps) {
    // Resolve text and link from config
    const resolvedText = text || (variant === 'compact' ? CTA_CONFIG.compactText : variant === 'secondary' ? CTA_CONFIG.secondaryText : CTA_CONFIG.primaryText);
    const resolvedHref = href || (variant === 'secondary' ? CTA_CONFIG.secondaryLink : CTA_CONFIG.primaryLink);
    const isExternal = external ?? resolvedHref.startsWith('http');

    // Map location to analytics cta_type
    const ctaType = variant === 'secondary' ? 'view_sample_report' : 'book_demo';

    const handleClick = () => {
        analytics.track({
            event: 'cta_clicked',
            properties: {
                location: location as any,
                cta_type: ctaType as any,
                cta_text: resolvedText,
                destination_url: resolvedHref,
            },
        });
    };

    // Base styles per variant
    const variantStyles: Record<CTAVariant, string> = {
        primary: `
            group relative px-10 py-5 bg-brand text-white font-bold rounded-2xl
            shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.5)]
            hover:bg-brand-hover transition-all duration-300
            text-sm uppercase tracking-widest
        `.trim().replace(/\s+/g, ' '),
        secondary: `
            group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl
            hover:bg-white/10 hover:border-white/20 transition-all duration-300
            text-sm
        `.trim().replace(/\s+/g, ' '),
        compact: `
            group relative px-6 py-2.5 bg-brand text-white font-bold rounded-xl
            hover:shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all duration-300
            text-xs uppercase tracking-wider
        `.trim().replace(/\s+/g, ' '),
    };

    const widthClass = fullWidth ? 'w-full flex items-center justify-center' : 'inline-flex items-center';
    const Icon = showCalendarIcon ? Calendar : ArrowRight;

    const linkProps = isExternal
        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
        : {};

    return (
        <Link
            href={resolvedHref}
            onClick={handleClick}
            className={`${widthClass} gap-2 ${variantStyles[variant]} ${className}`}
            {...linkProps}
        >
            {resolvedText}
            <Icon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
    );
}
