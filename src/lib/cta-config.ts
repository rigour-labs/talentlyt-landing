// ============================================================================
// CENTRAL CTA CONFIG — Change these to update ALL buttons sitewide
// ============================================================================
// This is a pure data module with no client-side dependencies.
// Safe to import from both Server Components and Client Components.

export const CTA_CONFIG = {
    /** Primary CTA text shown on most buttons */
    primaryText: 'Book 15-min Pilot Call',
    /** Compact CTA text for navbar/small spaces */
    compactText: 'Book Pilot Call',
    /** Where the primary CTA links to */
    primaryLink: 'https://calendly.com/rigovo/',
    /** Secondary CTA text */
    secondaryText: 'View Sample Report',
    /** Where the secondary CTA links to */
    secondaryLink: '/sample-report',
} as const;
