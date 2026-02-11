'use client';

import React from 'react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

export function TrackedProductCTAs() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                href="/request-demo"
                onClick={() =>
                    analytics.track({
                        event: 'cta_clicked',
                        properties: {
                            location: 'product',
                            cta_type: 'book_demo',
                            cta_text: 'Request Demo',
                            destination_url: '/request-demo',
                        },
                    })
                }
                className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover transition-colors"
            >
                Request Demo
            </Link>
            <Link
                href="https://platform.rigovo.com"
                onClick={() =>
                    analytics.track({
                        event: 'cta_clicked',
                        properties: {
                            location: 'product',
                            cta_type: 'start_trial',
                            cta_text: 'Try Platform',
                            destination_url: 'https://platform.rigovo.com',
                        },
                    })
                }
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
                Try Platform
            </Link>
        </div>
    );
}
