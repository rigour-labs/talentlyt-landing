'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface NewsletterSignupProps {
    variant?: 'inline' | 'card';
    title?: string;
    description?: string;
}

export function NewsletterSignup({
    variant = 'card',
    title = 'Stay Updated on AI Hiring',
    description = 'Get weekly insights on interview integrity verification, AI hiring trends, and technical recruitment best practices.',
}: NewsletterSignupProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setErrorMessage('Please enter a valid email');
            return;
        }

        setStatus('loading');

        // Simulate API call - replace with actual newsletter signup
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            analytics.track({
                event: 'form_submitted',
                properties: {
                    form_type: 'contact',
                    location: 'newsletter',
                    company_domain: email.split('@')[1],
                },
            });

            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    if (variant === 'inline') {
        return (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
                <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-brand/50 transition-colors"
                        disabled={status === 'loading' || status === 'success'}
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="px-4 py-3 bg-brand text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all disabled:opacity-50 flex items-center gap-2"
                >
                    {status === 'loading' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : status === 'success' ? (
                        <CheckCircle2 className="w-4 h-4" />
                    ) : (
                        <ArrowRight className="w-4 h-4" />
                    )}
                </button>
            </form>
        );
    }

    return (
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-sm text-text-secondary">{description}</p>
                </div>
            </div>

            {status === 'success' ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>You&apos;re subscribed! Check your inbox.</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setStatus('idle');
                            }}
                            placeholder="you@company.com"
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-brand/50 transition-colors"
                            disabled={status === 'loading'}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-6 py-3 bg-brand text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Subscribing...
                            </>
                        ) : (
                            <>
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            )}

            {status === 'error' && (
                <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
            )}

            <p className="mt-3 text-xs text-text-muted">
                No spam. Unsubscribe anytime. We respect your privacy.
            </p>
        </div>
    );
}
