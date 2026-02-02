import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Shield, Lock, Eye, Database, Globe, UserCheck, Mail, Server, Clock, FileWarning } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy — TalentLyt',
    description: 'TalentLyt Privacy Policy. Learn how we collect, use, protect, and handle your data. GDPR and CCPA compliant.',
    alternates: {
        canonical: 'https://talentlyt.cloud/privacy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <Shield className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Privacy & Data Protection</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            Privacy <span className="text-brand">Policy</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Your privacy matters. This policy explains what data we collect, how we use it, and how we keep it safe. No legal jargon where we can avoid it.
                        </p>
                        <p className="text-sm text-text-muted mt-4">
                            Last updated: February 2, 2026 | Effective: February 2, 2026
                        </p>
                    </div>

                    <div className="space-y-10">
                        {/* Quick Summary */}
                        <section className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <h2 className="text-xl font-bold mb-4">The Short Version</h2>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-3">
                                <p>• We collect data necessary to run AI interviews and detect fraud</p>
                                <p>• We encrypt everything and follow industry security standards</p>
                                <p>• We never sell your data to third parties</p>
                                <p>• You can request your data or ask us to delete it anytime</p>
                                <p>• We comply with GDPR, CCPA, and other privacy regulations</p>
                            </div>
                        </section>

                        {/* What We Collect */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Database className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Account Information</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        When you sign up, we collect your name, email address, company name, and job title. If you use SSO, we receive basic profile information from your identity provider.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Interview Session Data</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        During AI-powered interviews, we process audio/video streams (when enabled), code submissions, chat messages, screen activity, and behavioral signals. This data powers our assessments and fraud detection.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Integrity Verification Data</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Our 13-Signal Forensic Engine analyzes patterns to detect cheating, proxy candidates, and AI-assisted responses. This includes keystroke dynamics, audio-visual sync, and behavioral consistency metrics. We do <strong className="text-white">not</strong> collect biometric templates or create permanent identity databases.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Usage & Technical Data</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We collect standard analytics: pages visited, features used, session duration, browser type, and IP address. This helps us improve the platform and troubleshoot issues.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Payment Information</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Payment processing is handled by Stripe. We never see or store your full credit card number. We only receive confirmation of successful payments and basic billing details.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Data */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">2. How We Use Your Data</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Providing Our Services</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We use your data to conduct AI interviews, generate assessment reports, verify candidate integrity, and deliver the features you signed up for. This is the core purpose—everything else is secondary.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Improving Our AI</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We use aggregated, anonymized data to improve our AI models, reduce bias, and enhance fraud detection accuracy. Individual interview recordings are not used for training without explicit consent.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Communication</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We send transactional emails (interview reports, account notifications) and occasional product updates. Marketing emails require your consent and include easy unsubscribe options.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Legal & Safety</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We may use data to comply with legal obligations, enforce our terms, prevent fraud, and protect our users, employees, and the public.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Data Protection */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">3. How We Protect Your Data</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Encryption</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Interview recordings are stored in isolated, encrypted cloud storage with customer-specific keys for enterprise plans.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Access Controls</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We implement role-based access control (RBAC) and the principle of least privilege. Only authorized personnel can access sensitive data, and all access is logged and auditable.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Infrastructure Security</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We use industry-leading cloud providers with SOC 2 Type II certification. Our infrastructure includes firewalls, intrusion detection, DDoS protection, and continuous security monitoring.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Incident Response</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We maintain incident response procedures and will notify affected users within 72 hours of discovering a data breach, as required by GDPR and other regulations.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Data Retention */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">4. Data Retention</h2>
                            </div>

                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>We retain data based on your subscription tier and business needs:</p>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border/50">
                                                <th className="text-left py-3 pr-4 text-white font-semibold">Plan</th>
                                                <th className="text-left py-3 pr-4 text-white font-semibold">Interview Recordings</th>
                                                <th className="text-left py-3 text-white font-semibold">Assessment Reports</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-text-secondary">
                                            <tr className="border-b border-border/30">
                                                <td className="py-3 pr-4">Pilot</td>
                                                <td className="py-3 pr-4">7 days</td>
                                                <td className="py-3">30 days</td>
                                            </tr>
                                            <tr className="border-b border-border/30">
                                                <td className="py-3 pr-4">Starter</td>
                                                <td className="py-3 pr-4">30 days</td>
                                                <td className="py-3">90 days</td>
                                            </tr>
                                            <tr className="border-b border-border/30">
                                                <td className="py-3 pr-4">Engine</td>
                                                <td className="py-3 pr-4">90 days</td>
                                                <td className="py-3">1 year</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4">Fortress</td>
                                                <td className="py-3 pr-4">Custom (up to 3 years)</td>
                                                <td className="py-3">Custom</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    You can request early deletion anytime. Account data is deleted within 30 days of account closure, except where legal retention is required.
                                </p>
                            </div>
                        </section>

                        {/* Your Rights */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">5. Your Privacy Rights</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Access & Portability</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        You can request a copy of your personal data in a machine-readable format. We&apos;ll provide it within 30 days.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Correction</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        You can update your account information anytime through settings, or contact us to correct other data we hold about you.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Deletion (&quot;Right to be Forgotten&quot;)</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        You can request deletion of your personal data. We&apos;ll comply within 30 days, except where we&apos;re legally required to retain certain information.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Opt-Out & Consent Withdrawal</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        You can opt out of marketing communications anytime. You can also withdraw consent for specific data processing activities, though this may limit your ability to use certain features.
                                    </p>
                                </div>

                                <div className="pl-4 border-l-2 border-brand/20">
                                    <h3 className="font-semibold text-white mb-2">Complaint</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        If you believe we&apos;ve mishandled your data, contact us first—we want to make it right. You also have the right to lodge a complaint with your local data protection authority.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* International Transfers */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">6. International Data Transfers</h2>
                            </div>

                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    TalentLyt is based in the United States. If you&apos;re located outside the US, your data may be transferred to and processed in the US or other countries where our cloud providers operate.
                                </p>
                                <p>
                                    For transfers from the European Economic Area (EEA), UK, or Switzerland, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission. We also implement supplementary technical measures where required.
                                </p>
                                <p>
                                    Enterprise customers can request data residency in specific regions (US, EU, or APAC) for an additional fee.
                                </p>
                            </div>
                        </section>

                        {/* Third Parties */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Server className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">7. Third-Party Services</h2>
                            </div>

                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>We work with carefully vetted third-party processors:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Cloud Infrastructure:</strong> AWS, Google Cloud (SOC 2 certified)</li>
                                    <li><strong className="text-white">Payment Processing:</strong> Stripe (PCI DSS Level 1)</li>
                                    <li><strong className="text-white">Email Services:</strong> Resend (for transactional emails)</li>
                                    <li><strong className="text-white">Analytics:</strong> Vercel Analytics (privacy-focused, no cookies)</li>
                                </ul>
                                <p>
                                    All processors are contractually bound to protect your data and only use it for the services we&apos;ve engaged them to provide. We do <strong className="text-white">not</strong> sell your data to advertisers or data brokers.
                                </p>
                            </div>
                        </section>

                        {/* Cookies */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <FileWarning className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">8. Cookies & Tracking</h2>
                            </div>

                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>We use minimal cookies:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Essential cookies:</strong> Required for the platform to function (authentication, session management)</li>
                                    <li><strong className="text-white">Analytics:</strong> Privacy-focused analytics that don&apos;t track individuals across sites</li>
                                </ul>
                                <p>
                                    We do <strong className="text-white">not</strong> use third-party advertising cookies or cross-site tracking. You can manage cookie preferences through your browser settings.
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-brand" />
                                </div>
                                <h2 className="text-2xl font-bold">Contact Us</h2>
                            </div>
                            <p className="text-text-secondary mb-6">
                                For privacy questions, data requests, or to exercise your rights:
                            </p>
                            <div className="space-y-3 text-sm">
                                <p>
                                    <span className="text-text-muted">Email:</span>{' '}
                                    <a href="mailto:privacy@talentlyt.cloud" className="text-brand hover:underline">privacy@talentlyt.cloud</a>
                                </p>
                                <p>
                                    <span className="text-text-muted">Data Protection Officer:</span>{' '}
                                    <a href="mailto:dpo@talentlyt.cloud" className="text-brand hover:underline">dpo@talentlyt.cloud</a>
                                </p>
                                <p>
                                    <span className="text-text-muted">Address:</span> Rigour Labs Inc., Delaware, United States
                                </p>
                            </div>
                            <p className="text-text-muted text-xs mt-6">
                                We aim to respond to all privacy requests within 30 days.
                            </p>
                        </section>

                        {/* Compliance Badges */}
                        <div className="flex flex-wrap justify-center gap-4 pt-8">
                            {['GDPR Compliant', 'CCPA Compliant', 'SOC 2 Ready', 'Privacy by Design'].map((badge) => (
                                <div key={badge} className="px-4 py-2 rounded-full bg-muted/50 border border-border/30 text-xs font-medium text-text-muted">
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
