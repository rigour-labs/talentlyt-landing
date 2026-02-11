'use client';

import React, { useState } from 'react';
import { ArrowRight, Mail, Download, ShieldCheck, Eye, FileText, Lock } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { CTA_CONFIG } from '@/components/ui/cta-button';

const reportHighlights = [
    { label: 'Integrity Score', value: '95/100', description: 'Multi-signal verification' },
    { label: 'AI Proficiency', value: 'AI Architect', description: 'Leads AI, not follows it' },
    { label: 'Technical Score', value: '87/100', description: 'Across 5 competencies' },
    { label: 'Deepfake Check', value: '88/100', description: 'Authentic verified' },
];

const reportSections = [
    'Integrity verification with 15-signal forensic breakdown',
    'AI Usage & Comprehension analysis (Passenger vs. Architect)',
    'Behavioral signals and session integrity scoring',
    'Core competency scores with detailed skill-by-skill evaluation',
    'Risk distribution and confidence analysis',
    'Actionable recommendation (Proceed / Review / Reject)',
];

export function SampleReportGate() {
    const [email, setEmail] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setError('Please enter a valid work email');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Track the lead capture
            analytics.track({
                event: 'form_submitted',
                properties: {
                    form_type: 'contact',
                    location: 'blog',
                    company_domain: email.split('@')[1],
                    lead_value: 50,  // Content MQL — ~1 Sentinel scan ($35) + nurture upside
                    currency: 'USD',
                },
            });

            // Send email to newsletter API to capture the lead
            await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            });

            setIsUnlocked(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isUnlocked) {
        return (
            <div className="space-y-8">
                {/* Download CTA */}
                <div className="p-8 rounded-2xl bg-brand/5 border border-brand/20 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-brand" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Your Report is Ready</h2>
                    <p className="text-text-secondary mb-6">Download the full 5-page Interview Intelligence Report</p>
                    <a
                        href="/sample-report.pdf"
                        download="Rigovo-Sample-Interview-Report.pdf"
                        onClick={() =>
                            analytics.track({
                                event: 'cta_clicked',
                                properties: {
                                    location: 'blog',
                                    cta_type: 'get_started',
                                    cta_text: 'Download Full Report',
                                    destination_url: '/sample-report.pdf',
                                },
                            })
                        }
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
                    >
                        <Download className="w-5 h-5" />
                        Download Full Report (PDF)
                    </a>
                </div>

                {/* Embedded preview */}
                <div className="rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                        src="/sample-report.pdf"
                        width="100%"
                        height="800"
                        title="Rigovo Sample Interview Report"
                        className="w-full bg-white"
                    />
                </div>

                {/* CTA to try it yourself */}
                <div className="p-8 rounded-2xl bg-gradient-to-r from-brand/10 to-transparent border border-brand/20 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Want this for your candidates?</h3>
                    <p className="text-text-secondary text-sm mb-4">Try Rigovo free for your first 5 interviews. No credit card required.</p>
                    <a
                        href={CTA_CONFIG.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
                    >
                        {CTA_CONFIG.compactText}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Preview + highlights */}
            <div>
                {/* Report score preview */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {reportHighlights.map((item) => (
                        <div key={item.label} className="p-4 rounded-xl bg-card border border-border/50">
                            <div className="text-2xl font-bold text-brand mb-0.5">{item.value}</div>
                            <div className="text-sm text-white font-medium">{item.label}</div>
                            <div className="text-xs text-text-muted">{item.description}</div>
                        </div>
                    ))}
                </div>

                {/* Blurred preview image placeholder */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card p-8">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
                    <div className="blur-sm opacity-60 pointer-events-none">
                        <div className="space-y-4">
                            <div className="h-6 bg-white/10 rounded w-3/4" />
                            <div className="h-4 bg-white/5 rounded w-full" />
                            <div className="h-4 bg-white/5 rounded w-5/6" />
                            <div className="h-32 bg-white/5 rounded" />
                            <div className="h-4 bg-white/5 rounded w-2/3" />
                            <div className="h-20 bg-white/5 rounded" />
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur border border-white/20 rounded-xl">
                            <Lock className="w-4 h-4 text-brand" />
                            <span className="text-sm text-white font-medium">Enter email to unlock</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Email gate form */}
            <div>
                <div className="p-8 rounded-2xl bg-card border border-border/50 sticky top-32">
                    <div className="flex items-center gap-2 mb-6">
                        <Eye className="w-5 h-5 text-brand" />
                        <h2 className="text-xl font-bold text-white">View the Full Report</h2>
                    </div>

                    <p className="text-text-secondary text-sm mb-6">
                        Enter your work email to instantly access the complete 5-page Interview Intelligence Report including:
                    </p>

                    <div className="space-y-2 mb-6">
                        {reportSections.map((section, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                <span>{section}</span>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                placeholder="you@company.com"
                                className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/50 transition-all"
                                disabled={isLoading}
                            />
                        </div>

                        {error && <p className="text-sm text-red-400">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all disabled:opacity-50"
                        >
                            {isLoading ? 'Loading...' : 'Get Instant Access'}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <p className="mt-3 text-xs text-text-muted text-center">
                        No spam. We'll only send hiring insights. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </div>
    );
}
