import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { DemoRequestForm } from '@/components/demo-request-form';
import { ShieldCheck, Activity, Globe } from 'lucide-react';

import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Request a Demo | TalentLyt Zero-Trust Recruitment',
    description: 'Schedule a personalized demo of TalentLyt. Discover how our AI-powered technical interview platform can help you hire better, faster, and with 100% integrity.',
};

export default function RequestDemoPage() {
    redirect('/contact');
}
