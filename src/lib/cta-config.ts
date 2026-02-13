// ============================================================================
// CENTRAL CTA CONFIG — Change these to update ALL buttons sitewide
// ============================================================================
// This is a pure data module with no client-side dependencies.
// Safe to import from both Server Components and Client Components.

export const CTA_CONFIG = {
    /** Primary CTA text shown on most buttons */
    primaryText: 'Start Free Pilot',
    /** Compact CTA text for navbar/small spaces */
    compactText: 'Start Free Pilot',
    /** Where the primary CTA links to */
    primaryLink: 'https://calendly.com/rigovo/',
    /** Secondary CTA text */
    secondaryText: 'Try Maya Live',
    /** Where the secondary CTA links to (platform demo — no intermediary form) */
    secondaryLink: 'https://platform.rigovo.com/demo?utm_source=landing&utm_medium=cta&utm_content=default',
} as const;
