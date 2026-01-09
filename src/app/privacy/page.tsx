'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Globe, UserCheck, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Account Information",
                    text: "When you create an account, we collect your name, email address, company name, and job title to provide and improve our services."
                },
                {
                    subtitle: "Interview Session Data",
                    text: "During AI-powered interviews, we collect audio/video streams (if enabled), code submissions, chat transcripts, and behavioral telemetry to generate assessment reports."
                },
                {
                    subtitle: "Usage Analytics",
                    text: "We collect aggregated usage data including feature interactions, session duration, and performance metrics to improve platform reliability."
                }
            ]
        },
        {
            icon: Lock,
            title: "How We Protect Your Data",
            content: [
                {
                    subtitle: "Encryption Standards",
                    text: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Session recordings are stored in isolated, encrypted cloud storage."
                },
                {
                    subtitle: "Access Controls",
                    text: "Role-based access control (RBAC) ensures only authorized personnel can access sensitive data. All access is logged and auditable."
                },
                {
                    subtitle: "Infrastructure Security",
                    text: "Our infrastructure is hosted on SOC 2 Type II certified cloud providers with continuous security monitoring and intrusion detection."
                }
            ]
        },
        {
            icon: Eye,
            title: "How We Use Your Data",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use collected data to conduct AI interviews, generate assessment reports, and provide integrity verification through our Audit Sentinel system."
                },
                {
                    subtitle: "Platform Improvement",
                    text: "Aggregated, anonymized data helps us improve AI model accuracy, reduce bias, and enhance the candidate experience."
                },
                {
                    subtitle: "Communication",
                    text: "We may send you transactional emails, product updates, and (with consent) marketing communications. You can opt-out anytime."
                }
            ]
        },
        {
            icon: UserCheck,
            title: "Your Rights",
            content: [
                {
                    subtitle: "Access & Portability",
                    text: "You can request a copy of your personal data in a machine-readable format at any time through your account settings or by contacting us."
                },
                {
                    subtitle: "Correction & Deletion",
                    text: "You can update your account information or request deletion of your data. Deletion requests are processed within 30 days."
                },
                {
                    subtitle: "Consent Withdrawal",
                    text: "You can withdraw consent for data processing at any time. This may affect your ability to use certain platform features."
                }
            ]
        },
        {
            icon: Globe,
            title: "Data Retention & Transfers",
            content: [
                {
                    subtitle: "Retention Periods",
                    text: "Interview data is retained according to your subscription tier (30 days to 1 year). You can request early deletion at any time."
                },
                {
                    subtitle: "International Transfers",
                    text: "Data may be processed in regions where our cloud providers operate. We ensure adequate protection through Standard Contractual Clauses."
                },
                {
                    subtitle: "Third-Party Processors",
                    text: "We work with vetted third-party processors (cloud hosting, analytics) who are contractually bound to protect your data."
                }
            ]
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
                            <Shield className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Legal Document</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            Privacy <span className="text-brand">Policy</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            TalentLyt is committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your data.
                        </p>
                        <p className="text-sm text-text-muted mt-4">
                            Last updated: January 10, 2026
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.section
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-brand/20 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                        <section.icon className="w-6 h-6 text-brand" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{section.title}</h2>
                                </div>

                                <div className="space-y-6">
                                    {section.content.map((item, i) => (
                                        <div key={i} className="pl-4 border-l-2 border-brand/20">
                                            <h3 className="font-semibold text-white mb-2">{item.subtitle}</h3>
                                            <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}

                        {/* Contact Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">Contact Us</h2>
                            </div>
                            <p className="text-text-secondary mb-4">
                                For privacy-related inquiries, data requests, or to exercise your rights, please contact our Data Protection team:
                            </p>
                            <div className="space-y-2 text-sm">
                                <p><span className="text-text-muted">Email:</span> <a href="mailto:privacy@talentlyt.cloud" className="text-brand hover:underline">privacy@talentlyt.cloud</a></p>
                                <p><span className="text-text-muted">Address:</span> Rigour Labs Inc., Delaware, United States</p>
                            </div>
                        </motion.section>

                        {/* Compliance Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-6 pt-8"
                        >
                            {['GDPR Compliant', 'DPDPA Compliant', 'SOC 2 Type II', 'ISO 27001'].map((badge) => (
                                <div key={badge} className="px-4 py-2 rounded-full bg-muted/50 border border-border/30 text-xs font-medium text-text-muted">
                                    {badge}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
