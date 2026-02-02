'use client';

import React from 'react';
import { useActionState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Loader2, User } from 'lucide-react';
import { submitContactForm } from '@/app/actions';
import Link from 'next/link';

export function ContactContent() {
    const [state, formAction, isPending] = useActionState(submitContactForm, null);

    if (state?.success) {
        return (
            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="p-12 rounded-[3rem] bg-brand/5 border border-brand/20">
                        <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-8 border border-brand/20">
                            <CheckCircle2 className="w-10 h-10 text-brand" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Message Sent!</h2>
                        <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
                            Thanks {state.message}! We've received your message and will get back to you within 24 hours.
                        </p>
                        <div className="mt-12">
                            <Link
                                href="/"
                                className="technical-label text-brand hover:underline"
                            >
                                Return to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <MessageSquare className="w-4 h-4 text-brand" />
                        <span className="text-sm font-medium text-brand">Get in Touch</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                        Contact <span className="text-brand">Us</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Have questions about TalentLyt? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <form action={formAction} className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 pl-12 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {state?.errors?.name && <p className="text-xs text-danger mt-1">{state.errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 pl-12 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/50"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    {state?.errors?.email && <p className="text-xs text-danger mt-1">{state.errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/50 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                    {state?.errors?.message && <p className="text-xs text-danger mt-1">{state.errors.message}</p>}
                                </div>

                                {state?.message && !state.success && (
                                    <div className="p-4 rounded-xl bg-danger/10 border border-danger/20 text-danger text-sm">
                                        {state.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-4 px-6 rounded-xl bg-brand text-brand-foreground font-bold hover:bg-brand-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="block p-8 rounded-[2rem] bg-card border border-brand/20 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                                    <MessageSquare className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Sales & Support</h3>
                                    <p className="text-text-muted text-sm mb-4">For demos, pricing, and technical questions</p>
                                    <a href="mailto:sales@talentlyt.cloud" className="text-brand text-lg font-bold hover:underline">sales@talentlyt.cloud</a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <h3 className="text-xl font-bold mb-4">Looking for a demo?</h3>
                            <p className="text-text-secondary text-sm mb-6">
                                See TalentLyt in action with a personalized walkthrough of our AI interview platform.
                            </p>
                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover transition-colors"
                            >
                                Request Demo
                                <Send className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
