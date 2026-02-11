'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { CTA_CONFIG } from '@/components/ui/cta-button';

interface BlogInlineCTAProps {
    variant?: 'demo' | 'report';
}

export function BlogInlineCTA({ variant = 'demo' }: BlogInlineCTAProps) {
    if (variant === 'report') {
        return (
            <div className="my-10 p-8 rounded-2xl bg-gradient-to-r from-brand/10 via-brand/5 to-transparent border border-brand/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex-1">
                        <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Free Sample Report</p>
                        <h3 className="text-xl font-bold text-white mb-2">See What Your Interview Report Looks Like</h3>
                        <p className="text-sm text-text-secondary">
                            Integrity Score, AI Proficiency classification, 15-signal forensic breakdown, and skill evaluations — all in one report.
                        </p>
                    </div>
                    <Link
                        href={CTA_CONFIG.secondaryLink}
                        onClick={() =>
                            analytics.track({
                                event: 'cta_clicked',
                                properties: {
                                    location: 'blog',
                                    cta_type: 'view_sample_report',
                                    cta_text: CTA_CONFIG.secondaryText,
                                    destination_url: CTA_CONFIG.secondaryLink,
                                },
                            })
                        }
                        className="flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all whitespace-nowrap shrink-0"
                    >
                        {CTA_CONFIG.secondaryText}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="my-10 p-8 rounded-2xl bg-gradient-to-r from-brand/10 via-brand/5 to-transparent border border-brand/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                    <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Free Pilot</p>
                    <h3 className="text-xl font-bold text-white mb-2">Try Rigovo on Your Next 5 Interviews</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-brand" /> 15-signal verification</span>
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-brand" /> No credit card</span>
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-brand" /> Setup in 5 min</span>
                    </div>
                </div>
                <Link
                    href={CTA_CONFIG.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        analytics.track({
                            event: 'cta_clicked',
                            properties: {
                                location: 'blog',
                                cta_type: 'book_demo',
                                cta_text: CTA_CONFIG.compactText,
                                destination_url: CTA_CONFIG.primaryLink,
                            },
                        })
                    }
                    className="flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all whitespace-nowrap shrink-0"
                >
                    {CTA_CONFIG.compactText}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
