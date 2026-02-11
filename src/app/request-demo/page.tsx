import { redirect } from 'next/navigation';

/**
 * /request-demo is deprecated — consolidated into /contact.
 * This page redirects for SEO continuity and any existing bookmarks/links.
 */
export default function RequestDemoPage() {
    redirect('/contact');
}
