'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Shield, CreditCard, Scale, Ban, RefreshCw } from 'lucide-react';

export default function TermsPage() {
    const sections = [
        {
            icon: FileText,
            title: "Acceptance of Terms",
            content: `By accessing or using TalentLyt ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service. We may update these terms from time to time, and continued use constitutes acceptance of any changes.`
        },
        {
            icon: Shield,
            title: "Service Description",
            content: `TalentLyt provides AI-powered technical interview and assessment services. Our platform includes Maya (AI Interviewer) and Audit Sentinel (Integrity Verification). The Service is designed to assist in hiring decisions but does not guarantee hiring outcomes. All AI-generated assessments should be reviewed by qualified human recruiters.`
        },
        {
            icon: CreditCard,
            title: "Billing & Subscriptions",
            content: `Paid subscriptions are billed monthly or annually as selected. You may cancel at any time, effective at the end of your billing period. Refunds are provided only as required by law. Interview overages are billed at the end of each billing cycle. Pre-paid interview packs are non-refundable and expire after 12 months.`
        },
        {
            icon: AlertCircle,
            title: "Acceptable Use",
            content: `You agree not to: (a) use the Service for any unlawful purpose, (b) attempt to circumvent integrity monitoring, (c) share account credentials, (d) reverse engineer the Service, (e) use the Service to discriminate against protected classes, or (f) submit false or misleading information. Violations may result in immediate termination.`
        },
        {
            icon: Scale,
            title: "Limitation of Liability",
            content: `TalentLyt is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or specific outcomes. Our total liability is limited to the amount you paid in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages, including but not limited to hiring decisions or lost opportunities.`
        },
        {
            icon: Ban,
            title: "Termination",
            content: `Either party may terminate this agreement at any time. Upon termination, your access to the Service will end and your data will be retained according to our Privacy Policy retention schedule. We may terminate accounts that violate these terms without notice or refund.`
        },
        {
            icon: RefreshCw,
            title: "Changes to Service",
            content: `We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice for material changes. Continued use after changes constitutes acceptance. We are not liable for any modification, suspension, or discontinuation of the Service.`
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col pt-20">
            <Navbar />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <FileText className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Legal Document</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            Terms of <span className="text-brand">Service</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Please read these terms carefully before using TalentLyt. By using our platform, you agree to be bound by these terms.
                        </p>
                        <p className="text-sm text-text-muted mt-4">
                            Last updated: January 10, 2026
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.section
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-brand/20 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                        <section.icon className="w-5 h-5 text-brand" />
                                    </div>
                                    <h2 className="text-xl font-bold">{section.title}</h2>
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.section>
                        ))}

                        {/* Governing Law */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20"
                        >
                            <h2 className="text-xl font-bold mb-4">Governing Law & Disputes</h2>
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in Delaware, except where prohibited by law. You waive any right to participate in class action lawsuits.
                            </p>
                            <p className="text-text-muted text-xs">
                                For questions about these terms, contact: <a href="mailto:legal@talentlyt.cloud" className="text-brand hover:underline">legal@talentlyt.cloud</a>
                            </p>
                        </motion.section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
