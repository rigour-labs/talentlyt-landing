'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Building, Clock, Send, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        subject: 'general',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to an API
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
        <div className="min-h-screen bg-background flex flex-col pt-20">
            <Navbar />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <MessageSquare className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Get in Touch</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            Contact <span className="text-brand">Us</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Have questions about TalentLyt? We'd love to hear from you. Our team typically responds within 24 hours.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
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
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none transition-colors"
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
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Company</label>
                                        <input
                                            type="text"
                                            value={formState.company}
                                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none transition-colors"
                                            placeholder="Acme Inc."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                                        <select
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white focus:border-brand/50 focus:outline-none transition-colors"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="sales">Sales & Pricing</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="press">Press & Media</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-white placeholder:text-text-muted focus:border-brand/50 focus:outline-none transition-colors resize-none"
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
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Contact Methods */}
                            {contactMethods.map((method, index) => (
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

                            {/* Additional Info */}
                            <div className="p-6 rounded-[1.5rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-5 h-5 text-brand" />
                                    <h3 className="font-bold">Response Time</h3>
                                </div>
                                <p className="text-text-secondary text-sm mb-4">
                                    We typically respond within 24 hours on business days. For urgent enterprise inquiries, contact sales directly.
                                </p>
                                <div className="flex items-center gap-3 text-sm text-text-muted">
                                    <MapPin className="w-4 h-4" />
                                    <span>Rigour Labs Inc., Delaware, USA</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="p-6 rounded-[1.5rem] bg-card border border-border/50">
                                <h3 className="font-bold mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://twitter.com/talentlyt" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-muted hover:bg-border transition-colors text-sm">
                                        Twitter/X
                                    </a>
                                    <a href="https://linkedin.com/company/talentlyt" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-muted hover:bg-border transition-colors text-sm">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
