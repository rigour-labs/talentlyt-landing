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
    Users,
    Clock,
    Globe,
    CheckCircle2,
    AlertTriangle,
    Layers,
    FileText,
    Trash2,
    Download,
    Activity,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Security & Compliance | Rigovo - Enterprise-Grade Data Protection',
    description: 'Learn how Rigovo protects your data with defense-in-depth security: encryption at rest & transit, row-level isolation, GDPR compliance, SOC2 audit logging, and more.',
    keywords: ['security', 'compliance', 'GDPR', 'SOC2', 'data protection', 'encryption', 'enterprise security', 'AI interview security'],
    openGraph: {
        title: 'Security & Compliance | Rigovo',
        description: 'Enterprise-grade security for AI-powered interviews. Encryption, isolation, compliance.',
        type: 'website',
        url: 'https://rigovo.com/security',
    },
};

const securityFeatures = [
    {
        icon: Lock,
        title: 'End-to-End Encryption',
        description: 'TLS 1.2+ in transit, AES-256-GCM at rest. PII fields encrypted at application layer before database write.',
        color: 'text-brand',
        bgColor: 'bg-brand/10',
    },
    {
        icon: Database,
        title: 'Row-Level Isolation',
        description: 'PostgreSQL RLS policies enforce organization-level data isolation at the database layer. Even application bugs cannot leak cross-tenant data.',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
    },
    {
        icon: Eye,
        title: 'Zero Unauthenticated Endpoints',
        description: 'Every data-accepting API requires authentication: SSO tokens, HMAC-signed keys, or time-limited candidate tokens.',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
    },
    {
        icon: FileCheck,
        title: 'SOC2-Aligned Audit Logging',
        description: 'Every sensitive action logged with actor, resource, timestamp, and metadata. Super admin actions retained for 7 years.',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
    },
];

const authMethods = [
    { layer: 'Dashboard Users', method: 'WorkOS SSO (SAML, Google, Microsoft)', scope: 'All dashboard routes' },
    { layer: 'Candidate Access', method: 'Unique interview tokens (time-limited, single-use)', scope: 'Join/interview pages' },
    { layer: 'Agent-to-API', method: 'HMAC-signed API keys', scope: 'Governor, Maya, all services' },
    { layer: 'Webhook Ingress', method: 'HMAC-SHA256 signature verification', scope: 'Stripe, LiveKit, internal' },
    { layer: 'Inter-Service', method: 'M2M tokens with scoped permissions', scope: 'Learning Engine, Identity' },
];

const encryptedFields = [
    { model: 'IdentityVerification', fields: 'idExtractedDOB, idExtractedName' },
    { model: 'Candidate', fields: 'phone' },
    { model: 'Interview', fields: 'idExtractedDOB, idExtractedName' },
];

const retentionPlans = [
    { plan: 'Free Trial', retention: '7 days' },
    { plan: 'Pilot (Pro)', retention: '7 days' },
    { plan: 'Starter (PAYG)', retention: '30 days' },
    { plan: 'Engine (Business)', retention: '90 days' },
    { plan: 'Fortress (Enterprise)', retention: '3 years' },
];

const gdprActions = [
    { type: 'Candidate PII', action: 'Anonymized with hash' },
    { type: 'Interview recordings', action: 'Permanently deleted from Azure Blob' },
    { type: 'Identity photos', action: 'Permanently deleted' },
    { type: 'Transcripts & evidence', action: 'Permanently deleted' },
    { type: 'Resume files', action: 'Permanently deleted' },
    { type: 'Video uploads', action: 'Soft-deleted + blobs removed' },
];

const auditRetention = [
    { category: 'Authentication events', retention: '1 year' },
    { category: 'Data changes (create, update, delete)', retention: '3 years' },
    { category: 'Data read/view access', retention: '90 days' },
    { category: 'Exports, imports, anonymization', retention: '7 years' },
    { category: 'Super admin actions', retention: '7 years' },
    { category: 'Interview lifecycle events', retention: '3 years' },
];

const complianceStatus = [
    { standard: 'GDPR', status: 'Implemented', timeline: 'Live', statusColor: 'text-green-400' },
    { standard: 'SOC2 Type II', status: 'In Progress', timeline: 'Q2 2026', statusColor: 'text-amber-400' },
    { standard: 'ISO 27001', status: 'Roadmap', timeline: 'Q3 2026', statusColor: 'text-blue-400' },
    { standard: 'HIPAA', status: 'Roadmap', timeline: 'Q4 2026', statusColor: 'text-blue-400' },
];

const securityHeaders = [
    { header: 'Content-Security-Policy', value: 'Restrictive policy with domain allowlisting' },
    { header: 'X-Frame-Options', value: 'DENY' },
    { header: 'X-Content-Type-Options', value: 'nosniff' },
    { header: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
    { header: 'Permissions-Policy', value: 'Camera/mic scoped to interview domain' },
];

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

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
                            Every layer — from network edge to database field — enforces isolation, authentication, and audit.
                        </p>
                    </div>

                    {/* Key Security Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {securityFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Authentication & Authorization */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                <Key className="w-5 h-5 text-brand" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Authentication & Authorization</h2>
                        </div>

                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="px-6 py-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Layer</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Method</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Scope</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {authMethods.map((auth, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="px-6 py-4 text-white font-medium">{auth.layer}</td>
                                                <td className="px-6 py-4 text-text-secondary">{auth.method}</td>
                                                <td className="px-6 py-4 text-text-muted text-sm">{auth.scope}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-4 h-4 text-brand" />
                                    <span className="text-sm font-bold text-white">RBAC via WorkOS</span>
                                </div>
                                <p className="text-xs text-text-muted">Role-based permissions for granular access control</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                                    <span className="text-sm font-bold text-white">Super Admin Isolation</span>
                                </div>
                                <p className="text-xs text-text-muted">Every cross-org access is audit-logged with 7-year retention</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Lock className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-bold text-white">Candidate Scoping</span>
                                </div>
                                <p className="text-xs text-text-muted">Time-limited tokens restrict access to own session only</p>
                            </div>
                        </div>
                    </section>

                    {/* Data Isolation */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Multi-Tenant Data Isolation</h2>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20">
                            <h3 className="text-lg font-bold text-white mb-4">Row-Level Security (RLS)</h3>
                            <ul className="space-y-3">
                                {[
                                    'PostgreSQL RLS policies enforce organization-level data isolation at the database layer',
                                    'Every query runs within an organization context (app.current_org_id)',
                                    'Even if application code has a bug, the database will not return data from other organizations',
                                    'Super admin access sets app.is_super_admin flag, which is audit-logged before bypass',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="text-text-secondary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Encryption */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                <Lock className="w-5 h-5 text-purple-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Encryption</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">In Transit</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-brand" />
                                        TLS 1.2+ enforced on all connections
                                    </li>
                                    <li className="flex items-center gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-brand" />
                                        HSTS header with 1-year max-age
                                    </li>
                                    <li className="flex items-center gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-brand" />
                                        Cloudflare WAF edge-level protection
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">At Rest (Infrastructure)</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-brand" />
                                        Azure PostgreSQL: AES-256 encryption
                                    </li>
                                    <li className="flex items-center gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-brand" />
                                        Azure Blob Storage: SSE encryption
                                    </li>
                                    <li className="flex items-center gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-brand" />
                                        LiveKit recordings: Encrypted egress
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20">
                            <h3 className="text-lg font-bold text-white mb-4">Application-Level PII Encryption (AES-256-GCM)</h3>
                            <p className="text-text-secondary mb-4">
                                Sensitive fields are additionally encrypted at the application layer before database write.
                                Even if the database is compromised, PII fields are unreadable without the encryption key.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="px-4 py-2 text-left text-xs font-bold text-text-muted uppercase">Model</th>
                                            <th className="px-4 py-2 text-left text-xs font-bold text-text-muted uppercase">Encrypted Fields</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {encryptedFields.map((item, i) => (
                                            <tr key={i}>
                                                <td className="px-4 py-3 text-white font-mono text-sm">{item.model}</td>
                                                <td className="px-4 py-3 text-text-secondary font-mono text-sm">{item.fields}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-amber-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Data Retention & Lifecycle</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Plan-Based Retention</h3>
                                <div className="space-y-3">
                                    {retentionPlans.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                            <span className="text-text-secondary">{item.plan}</span>
                                            <span className="text-white font-mono text-sm">{item.retention}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Automated Enforcement</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                                        Daily cron job scans for expired interviews (3 AM UTC)
                                    </li>
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                                        Deletes: Recordings, transcripts, evidence, identity photos
                                    </li>
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                                        Full audit trail for every deletion
                                    </li>
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                                        Azure Blob lifecycle policy as safety net (1,095 days max)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* GDPR Compliance */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">GDPR Compliance</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20">
                                <div className="flex items-center gap-2 mb-4">
                                    <Trash2 className="w-5 h-5 text-blue-400" />
                                    <h3 className="text-lg font-bold text-white">Article 17: Right to Erasure</h3>
                                </div>
                                <p className="text-text-secondary text-sm mb-4">Complete data anonymization on request:</p>
                                <div className="space-y-2">
                                    {gdprActions.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-1.5 text-sm">
                                            <span className="text-text-muted">{item.type}</span>
                                            <span className="text-blue-400 font-medium">{item.action}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <p className="text-xs text-blue-300">
                                        <strong>Deletion Certificate:</strong> Every anonymization returns a cryptographic certificate with timestamp, counts, and compliance notes.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Download className="w-5 h-5 text-emerald-400" />
                                        <h3 className="text-lg font-bold text-white">Article 20: Data Portability</h3>
                                    </div>
                                    <p className="text-text-secondary text-sm">
                                        Export endpoint provides all candidate data in machine-readable JSON format on request.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FileText className="w-5 h-5 text-purple-400" />
                                        <h3 className="text-lg font-bold text-white">Article 30: Records of Processing</h3>
                                    </div>
                                    <p className="text-text-secondary text-sm">
                                        SOC2-compliant audit logging captures all data processing activities with 1-7 year retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Audit Logging */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-purple-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Audit Logging (SOC2 Alignment)</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Every Action Logged</h3>
                                <div className="space-y-2 font-mono text-sm">
                                    {['actorId', 'actorType', 'action', 'resource', 'resourceId', 'organizationId', 'timestamp', 'metadata'].map((field, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="text-brand">•</span>
                                            <span className="text-text-secondary">{field}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Retention Policies</h3>
                                <div className="space-y-2">
                                    {auditRetention.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-1.5 text-sm border-b border-white/5 last:border-0">
                                            <span className="text-text-secondary">{item.category}</span>
                                            <span className="text-white font-mono">{item.retention}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Network Security */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                                <Server className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Network & Application Security</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Security Headers</h3>
                                <div className="space-y-2">
                                    {securityHeaders.map((item, i) => (
                                        <div key={i} className="py-2 border-b border-white/5 last:border-0">
                                            <div className="text-white font-mono text-sm">{item.header}</div>
                                            <div className="text-text-muted text-xs mt-1">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Rate Limiting</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                                        Auth endpoints: 10 requests/minute
                                    </li>
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                                        Export endpoints: 5 requests/hour
                                    </li>
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                                        General API: 100 requests/minute
                                    </li>
                                    <li className="flex items-start gap-2 text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                                        Per-organization and per-IP tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Compliance Roadmap */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                <FileCheck className="w-5 h-5 text-brand" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compliance Roadmap</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {complianceStatus.map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.standard}</h3>
                                    <div className={`text-sm font-semibold ${item.statusColor} mb-1`}>{item.status}</div>
                                    <div className="text-xs text-text-muted">{item.timeline}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Architecture Diagram */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Architecture Overview</h2>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-sm overflow-x-auto">
                            <pre className="text-text-secondary whitespace-pre leading-relaxed">
{`Client Browser
     │
     ▼
Cloudflare (CDN/WAF/DDoS Protection)
     │
     ▼
Azure Container Apps
     ├── Rigovo Dashboard (Next.js)
     │     ├── WorkOS Auth (SSO)
     │     ├── Rate Limiter
     │     ├── CSP Headers
     │     ├── RLS Context
     │     └── Prisma + PII Encryption Middleware
     │
     ├── Maya Agent (Python/LiveKit)
     │     └── x-agent-key authentication
     │
     └── Governor Agent (Python/LiveKit)
           └── x-agent-key authentication
     │
     ▼
Azure PostgreSQL (RLS + Encryption at Rest)
     │
     ▼
Azure Blob Storage (SSE + Plan-Based Retention)`}
                            </pre>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Questions about our security?</h2>
                        <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                            Our security team is happy to discuss our controls, provide additional documentation, or answer any compliance questions.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact?subject=security"
                                className="px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors"
                            >
                                Contact Security Team
                            </Link>
                            <Link
                                href="/contact?subject=technical"
                                className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                Technical Questions
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
