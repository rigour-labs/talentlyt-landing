'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitDemoRequest } from '@/app/actions';
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck, Mail, Building2, User } from 'lucide-react';
import Link from 'next/link';
import { analytics, extractDomain } from '@/lib/analytics';

export function DemoRequestForm() {
    const [state, formAction, isPending] = useActionState(submitDemoRequest, null);
    const hasTrackedStart = useRef(false);
    const formRef = useRef<HTMLFormElement>(null);

    // Track form start on first interaction
    const handleFormInteraction = () => {
        if (hasTrackedStart.current) return;
        hasTrackedStart.current = true;

        analytics.track({
            event: 'form_started',
            properties: {
                form_type: 'demo_request',
                location: 'contact_page',
            },
        });
    };

    // Track form submission result
    useEffect(() => {
        if (!state) return;

        if (state.success) {
            // Extract email from form for domain tracking
            // Check if form ref exists before accessing
            let companyDomain: string | undefined;
            if (formRef.current) {
                const formData = new FormData(formRef.current);
                const email = formData.get('email') as string;
                companyDomain = email ? extractDomain(email) : undefined;
            }

            analytics.track({
                event: 'form_submitted',
                properties: {
                    form_type: 'demo_request',
                    location: 'contact_page',
                    company_domain: companyDomain,
                },
            });
        } else if (state.errors || state.message) {
            analytics.track({
                event: 'form_error',
                properties: {
                    form_type: 'demo_request',
                    error_type: state.errors ? 'validation' : 'submission',
                    error_message: state.message || 'Validation failed',
                },
            });
        }
    }, [state]);

    if (state?.success) {
        return (
            <div className="text-center p-12 rounded-[3rem] bg-brand/5 border border-brand/20 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-8 border border-brand/20">
                    <CheckCircle2 className="w-10 h-10 text-brand" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Request Received</h2>
                <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
                    Our sales team has been notified. We'll reach out to **{state?.message!.split(' ')[0]}** at the email provided within 4 business hours to schedule your forensic audit walkthrough.
                </p>
                <div className="mt-12">
                    <Link
                        href="/"
                        className="technical-label text-brand hover:underline flex items-center justify-center gap-2"
                    >
                        Return to Dashboard <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <form
            ref={formRef}
            action={formAction}
            onFocus={handleFormInteraction}
            className="space-y-6 animate-slide-up"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="technical-label text-[10px] text-text-muted uppercase tracking-widest pl-2">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all"
                        />
                    </div>
                    {state?.errors?.name && <p className="text-xs text-danger mt-1 ml-2">{state.errors.name}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="technical-label text-[10px] text-text-muted uppercase tracking-widest pl-2">Work Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all"
                        />
                    </div>
                    {state?.errors?.email && <p className="text-xs text-danger mt-1 ml-2">{state.errors.email}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="company" className="technical-label text-[10px] text-text-muted uppercase tracking-widest pl-2">Company Name</label>
                    <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            placeholder="Acme Corp"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all"
                        />
                    </div>
                    {state?.errors?.company && <p className="text-xs text-danger mt-1 ml-2">{state.errors.company}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="role" className="technical-label text-[10px] text-text-muted uppercase tracking-widest pl-2">Your Role</label>
                    <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="Head of Talent"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="technical-label text-[10px] text-text-muted uppercase tracking-widest pl-2">How can we help?</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your hiring challenges..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-4 text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-all resize-none"
                />
            </div>

            {state?.message && !state.success && (
                <div className="p-4 rounded-xl bg-danger/10 border border-danger/20 text-danger text-sm">
                    {state.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="w-full group relative px-8 py-5 bg-brand text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_50px_rgba(0,102,255,0.5)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
                {isPending ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="technical-label">Processing...</span>
                    </>
                ) : (
                    <>
                        <span className="technical-label">Request Forensic Walkthrough</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <p className="text-center text-[10px] text-text-muted uppercase tracking-widest">
                By submitting, you agree to our <Link href="/terms" className="underline hover:text-white">Terms</Link> and <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
            </p>
        </form>
    );
}
