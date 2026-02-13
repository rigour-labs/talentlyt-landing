'use client';

import React, { useState } from 'react';
import { FileText, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { analytics } from '@/lib/analytics';

export function LeadCaptureSection() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        analytics.track({
            event: 'form_submitted',
            properties: {
                form_type: 'newsletter',
                location: 'lead_capture_section',
            },
        });

        // Simulate submission — replace with actual form handler (e.g., Resend, ConvertKit, etc.)
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsSubmitted(true);
        setIsLoading(false);
    };

    return (
        <section id="lead-capture" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-15 pointer-events-none">
                <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 sm:p-16 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-brand/10 blur-[100px] rounded-full -z-10" />

                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        {/* Left: Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                <FileText className="w-3 h-3" />
                                Free Report
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                                The Verified Hiring Playbook 2026
                            </h2>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                How top engineering teams are using AI-powered verification to make confident hiring decisions — with real data from 82 interviews and actionable takeaways.
                            </p>
                            <div className="flex flex-col gap-2 mb-6">
                                {[
                                    'How 15-signal verification improves hire quality',
                                    '5 key signals that predict candidate success',
                                    'ROI breakdown: save $240K per bad hire avoided',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="w-full lg:w-auto lg:min-w-[320px]">
                            {isSubmitted ? (
                                <div className="text-center p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                                    <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <p className="text-white font-bold text-lg mb-2">Check your inbox!</p>
                                    <p className="text-text-secondary text-sm">The report is on its way.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your work email"
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all disabled:opacity-50 text-sm uppercase tracking-wider"
                                    >
                                        {isLoading ? 'Sending...' : 'Get the Free Report'}
                                        {!isLoading && <ArrowRight className="w-4 h-4" />}
                                    </button>
                                    <div className="flex items-center gap-2 text-[10px] text-text-muted justify-center">
                                        <Shield className="w-3 h-3" />
                                        <span>No spam. Unsubscribe anytime.</span>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
