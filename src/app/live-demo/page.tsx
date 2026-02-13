import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Try Maya Live | Rigovo',
    description: 'Experience Maya AI — your AI interviewer for technical hiring. Try a live demo now.',
};

// Redirect to platform demo directly — no intermediary form needed
// UTM tracks users who hit this via old bookmarks or indexed URLs
export default function LiveDemoPage() {
    redirect('https://platform.rigovo.com/demo?utm_source=landing&utm_medium=redirect&utm_content=live_demo_page');
}
