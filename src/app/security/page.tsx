import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
    ShieldCheck,
    Lock,
    Database,
    Eye,
    FileCheck,
    Server,
    Key,
    Clock,
    Globe,
    CheckCircle2,
    Layers,
    FileText,
    Trash2,
    Download,
    Activity,
    ArrowRight,
} from 'lucide-react';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'Security & Compliance | Rigovo - Enterprise-Grade Data Protection',
    description: 'Rigovo protects your hiring data with defense-in-depth security: end-to-end encryption, multi-tenant isolation, GDPR compliance, SOC2-aligned audit logging, and tamper-proof forensic trails.',
    keywords: ['security', 'compliance', 'GDPR', 'SOC2', 'data protection', 'encryption', 'enterprise security', 'AI interview security'],
    openGraph: {
        title: 'Security & Compliance | Rigovo',
        description: 'Enterprise-grade security for AI-powered interviews. Encryption, isolation, compliance.',
        type: 'website',
        url: 'https://rigovo.com/security',
    },
};

const securityPillars = [
    {
        icon: Lock,
        title: 'End-to-End Encryption',
        description: 'All data encrypted in transit (TLS 1.2+) and at rest (AES-256-GCM). Sensitive PII fields receive an additional layer of application-level encryption before storage.',
        color: 'text-brand',
        bgColor: 'bg-brand/10',
        borderColor: 'border-brand/20',
    },
    {
        icon: Database,
        title: 'Multi-Tenant Isolation',
        description: 'Database-level row isolation ensures each organization\'s data is completely separated. Even application-layer bugs cannot leak cross-tenant data.',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20',
    },
    {
        icon: Key,
        title: 'Zero-Trust Authentication',
        description: 'Every endpoint requires authentication — SSO for dashboard users, time-limited tokens for candidates, and cryptographically signed keys for all internal services.',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/20',
    },
    {
        icon: FileCheck,
        title: 'SOC2-Aligned Audit Logging',
        description: 'Every sensitive action is logged with actor, resource, timestamp, and full metadata. Audit trails are retained for up to 7 years for compliance.',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20',
    },
    {
        icon: Server,
        title: 'Network-Level Protection',
        description: 'Enterprise WAF, DDoS protection, restrictive Content Security Policies, HSTS enforcement, and strict rate limiting across all endpoints.',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/20',
    },
    {
        icon: Eye,
        title: 'Integrity Verification',
        description: 'Proprietary multi-signal detection engine continuously monitors interview sessions for identity fraud, AI-generated answers, and unauthorized assistance.',
        color: 'text-rose-400',
        bgColor: 'bg-rose-500/10',
        borderColor: 'border-rose-500/20',
    },
];

const dataProtectionFeatures = [
    {
        title: 'Encryption at Every Layer',
        items: [
            'TLS 1.2+ enforced on all connections with HSTS',
            'AES-256-GCM encryption for data at rest',
            'Application-level PII encryption before database write',
            'Encrypted media storage for all recordings',
        ],
    },
    {
        title: 'Access Control',
        items: [
            'Enterprise SSO integration (SAML, Google, Microsoft)',
            'Role-based access control with granular permissions',
            'Time-limited, single-use tokens for candidate sessions',
            'Cryptographically signed internal service authentication',
        ],
    },
    {
        title: 'Network Security',
        items: [
            'Enterprise WAF with edge-level DDoS protection',
            'Restrictive Content Security Policy with domain allowlisting',
            'Rate limiting across all API endpoints',
            'Security headers (X-Frame-Options, X-Content-Type-Options, HSTS)',
        ],
    },
];

const complianceStatus = [
    { standard: 'GDPR', status: 'Implemented', timeline: 'Live', statusColor: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' },
    { standard: 'SOC2 Type II', status: 'In Progress', timeline: 'Q2 2026', statusColor: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/20' },
    { standard: 'ISO 27001', status: 'Roadmap', timeline: 'Q3 2026', statusColor: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
    { standard: 'HIPAA', status: 'Roadmap', timeline: 'Q4 2026', statusColor: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
];

const retentionPlans = [
    { plan: 'Free Trial', retention: '7 days' },
    { plan: 'Pilot (Pro)', retention: '7 days' },
    { plan: 'Starter (PAYG)', retention: '30 days' },
    { plan: 'Engine (Business)', retention: '90 days' },
    { plan: 'Fortress (Enterprise)', retention: '3 years' },
];

const gdprRights = [
    {
        article: 'Article 17',
        title: 'Right to Erasure',
        description: 'Complete data anonymization on request. All recordings, transcripts, identity materials, and PII are permanently removed with a cryptographic deletion certificate.',
        icon: Trash2,
        color: 'text-blue-400',
    },
    {
        article: 'Article 20',
        title: 'Data Portability',
        description: 'Full data export in machine-readable format on request — all candidate data, assessments, and audit records.',
        icon: Download,
        color: 'text-emerald-400',
    },
    {
        article: 'Article 22',
        title: 'Automated Decision Transparency',
        description: 'Every automated assessment generates structured decision summaries with outcome, confidence score, and contributing factors for human review.',
        icon: FileText,
        color: 'text-purple-400',
    },
    {
        article: 'Article 30',
        title: 'Records of Processing',
        description: 'Comprehensive audit logging captures all data processing activities with retention periods of 1 to 7 years depending on category.',
        icon: Activity,
        color: 'text-amber-400',
    },
];

const integrityCapabilities = [
    {
        title: 'Identity Verification',
        description: 'Multi-factor identity checks throughout the session — not just at the start. If someone swaps in, the system flags it.',
        signals: '5 signal types',
    },
    {
        title: 'Behavioral Analysis',
        description: 'Continuous monitoring for behavioral anomalies, suspicious patterns, and indicators of unauthorized assistance during the interview.',
        signals: '6 signal types',
    },
    {
        title: 'Anti-Spoofing',
        description: 'Detection of replay attacks, synthetic speech, and deepfake attempts. Multiple layers of liveness and authenticity verification.',
        signals: '4 signal types',
    },
];

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <PageAnalytics pagePath="/security" />

            <main className="pt-56 pb-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            Enterprise-Grade Security
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                            Security & <span className="text-brand">Compliance</span>
                        </h1>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                            Rigovo is built with a <span className="text-white font-semibold">defense-in-depth</span> security architecture.
                            Every layer — from network edge to database field — enforces isolation, encryption, and audit.
                        </p>
                    </div>

                    {/* Security Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                        {securityPillars.map((pillar, i) => (
                            <div
                                key={i}
                                className={`p-6 rounded-2xl bg-white/[0.02] border ${pillar.borderColor} hover:border-white/20 transition-all`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4`}>
                                    <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Data Protection Deep Dive */}
                    <section className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Protect Your Data</h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Multiple independent security layers ensure that a breach in any single layer cannot compromise your data.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {dataProtectionFeatures.map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-4">{feature.title}</h3>
                                    <ul className="space-y-3">
                                        {feature.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Multi-Tenant Isolation */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Multi-Tenant Data Isolation</h2>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Database-Level Isolation</h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        Your data is isolated at the database level — not just the application level. This means that even if there were a bug in our application code, it would be physically impossible for another organization&apos;s data to be returned in your queries.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            'Every query executes within your organization\'s isolated context',
                                            'Database-enforced policies prevent cross-tenant data access',
                                            'Privileged access is audit-logged with 7-year retention',
                                            'Regular third-party penetration testing validates isolation',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span className="text-text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Data Isolation', value: 'Database-Level', color: 'text-emerald-400' },
                                        { label: 'PII Encryption', value: 'AES-256-GCM', color: 'text-brand' },
                                        { label: 'Audit Retention', value: 'Up to 7 Years', color: 'text-purple-400' },
                                        { label: 'Access Control', value: 'Role-Based', color: 'text-amber-400' },
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                                            <div className="text-xs text-text-muted uppercase tracking-wider mb-2">{stat.label}</div>
                                            <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Interview Integrity */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                                <Eye className="w-5 h-5 text-rose-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Interview Integrity Protection</h2>
                        </div>
                        <p className="text-text-secondary mb-8 max-w-3xl">
                            Our proprietary Sentinel Engine continuously monitors every interview session across 15 signal types. Here&apos;s what it covers — without revealing how.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {integrityCapabilities.map((cap, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-rose-500/30 transition-all">
                                    <div className="flex items-center gap-2 mb-4">
                                        <ShieldCheck className="w-5 h-5 text-rose-400" />
                                        <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">{cap.signals}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">{cap.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-500/5 to-transparent border border-rose-500/20">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                                    <Lock className="w-5 h-5 text-rose-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Detection Methodology Under NDA</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                        The specific signals, thresholds, and detection algorithms that power our integrity engine are proprietary and shared only under NDA during the enterprise evaluation process. This protects the effectiveness of the system — if bad actors knew exactly what we look for, they could engineer around it.
                                    </p>
                                    <Link
                                        href="/contact?subject=security"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                                    >
                                        Request security whitepaper
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Forensic Audit Trail */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-indigo-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Tamper-Proof Forensic Trail</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent border border-indigo-500/20">
                                <h3 className="text-lg font-bold text-white mb-4">Cryptographic Chain Integrity</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Every interview generates an append-only forensic event log with cryptographic chain hashing. Each event is linked to the previous one, making it impossible to tamper with or delete records without detection.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        'SHA-256 chain hashing — each event cryptographically linked to the previous',
                                        'Chain integrity can be independently verified at any point',
                                        'Full JSON export available for compliance auditors',
                                        'Legally defensible evidence chain for hiring decisions',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">What Gets Logged</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Comprehensive event coverage across the entire interview lifecycle:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        'Session lifecycle events',
                                        'Identity verification',
                                        'Integrity signal events',
                                        'Automated assessments',
                                        'Manual review actions',
                                        'Data access & exports',
                                    ].map((event, i) => (
                                        <div key={i} className="flex items-center gap-2 py-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                            <span className="text-sm text-text-secondary">{event}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                    <p className="text-xs text-indigo-300">
                                        <strong>GDPR Article 22:</strong> Every automated decision generates a structured summary with decision type, outcome, confidence score, and contributing factors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-amber-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Data Retention & Lifecycle</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Plan-Based Retention</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Data is automatically deleted after your plan&apos;s retention window. No manual action required.
                                </p>
                                <div className="space-y-3">
                                    {retentionPlans.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                            <span className="text-text-secondary">{item.plan}</span>
                                            <span className="text-white font-semibold text-sm">{item.retention}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Automated Enforcement</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Retention is enforced automatically — not dependent on manual processes:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Automated daily scans identify expired interview data',
                                        'Recordings, transcripts, identity materials, and evidence permanently removed',
                                        'Full audit trail generated for every deletion event',
                                        'Infrastructure-level lifecycle policies as an additional safety net',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* GDPR Compliance */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">GDPR Compliance</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {gdprRights.map((right, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                            <right.icon className={`w-5 h-5 ${right.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">{right.article}</div>
                                            <h3 className="text-lg font-bold text-white">{right.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">{right.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Audit Logging */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-purple-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Audit Logging</h2>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">SOC2-Aligned Logging</h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        Every sensitive action across the platform is captured in an immutable audit log. Who did what, when, and what changed — with full metadata for compliance auditors.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Auth Events', retention: '1 year' },
                                            { label: 'Data Changes', retention: '3 years' },
                                            { label: 'Data Access', retention: '90 days' },
                                            { label: 'Admin Actions', retention: '7 years' },
                                        ].map((item, i) => (
                                            <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                                                <div className="text-xs text-text-muted mb-1">{item.label}</div>
                                                <div className="text-sm font-bold text-white">{item.retention}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Access Controls</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Role-based access control with granular permission sets',
                                            'Super admin actions require elevated authentication and are always logged',
                                            'Cross-organization access is strictly audited and time-limited',
                                            'Candidate tokens are single-use and scoped to their session only',
                                            'All API keys are cryptographically signed and scoped',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Compliance Roadmap */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                <FileCheck className="w-5 h-5 text-brand" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compliance Roadmap</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {complianceStatus.map((item, i) => (
                                <div key={i} className={`p-6 rounded-2xl ${item.bgColor} border ${item.borderColor} text-center`}>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.standard}</h3>
                                    <div className={`text-sm font-semibold ${item.statusColor} mb-1`}>{item.status}</div>
                                    <div className="text-xs text-text-muted">{item.timeline}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need More Detail?</h2>
                        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                            We&apos;re happy to provide our full security whitepaper, walk through our architecture under NDA, or answer any compliance questions your team may have.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact?subject=security"
                                className="px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors inline-flex items-center gap-2"
                            >
                                Request Security Whitepaper
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/contact?subject=technical"
                                className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                Schedule Architecture Review
                            </Link>
                        </div>
                    </section>

                    {/* Last Updated */}
                    <div className="mt-12 text-center text-xs text-text-muted">
                        Last updated: February 2026
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
