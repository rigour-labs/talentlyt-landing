'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Building, Clock, Send, MapPin } from 'lucide-react';

export function ContactContent() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        subject: 'general',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:hello@talentlyt.cloud?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nCompany: ${formState.company}\n\n${formState.message}`)}`;
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "For general inquiries",
            value: "hello@talentlyt.cloud",
            href: "mailto:hello@talentlyt.cloud"
        },
        {
            icon: MessageSquare,
            title: "Sales",
            description: "For enterprise and business plans",
            value: "sales@talentlyt.cloud",
            href: "mailto:sales@talentlyt.cloud"
        },
        {
            icon: Building,
            title: "Partnerships",
            description: "For integrations and partnerships",
            value: "partners@talentlyt.cloud",
            href: "mailto:partners@talentlyt.cloud"
        }
    ];

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
                        <form onSubmit={handleSubmit} className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 px-6 rounded-xl bg-brand text-brand-foreground font-bold hover:bg-brand-hover transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        className="space-y-6"
                    >
                        {contactMethods.map((method) => (
                            <a
                                key={method.title}
                                href={method.href}
                                className="block p-6 rounded-[1.5rem] bg-card border border-border/50 hover:border-brand/20 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                                        <method.icon className="w-5 h-5 text-brand" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{method.title}</h3>
                                        <p className="text-text-muted text-sm mb-2">{method.description}</p>
                                        <p className="text-brand text-sm">{method.value}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                        <div className="p-6 rounded-[1.5rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-5 h-5 text-brand" />
                                <h3 className="font-bold">Response Time</h3>
                            </div>
                            <p className="text-text-secondary text-sm mb-4">
                                We typically respond within 24 hours on business days.
                            </p>
                            <div className="flex items-center gap-3 text-sm text-text-muted">
                                <MapPin className="w-4 h-4" />
                                <span>Rigour Labs Inc., Delaware, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
