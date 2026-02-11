import { Shield, Lock, Globe, CheckCircle2 } from 'lucide-react';

const badges = [
    { label: 'SOC 2 Aligned', icon: Shield },
    { label: 'GDPR Compliant', icon: Globe },
    { label: 'AES-256 Encryption', icon: Lock },
    { label: 'Audit Trail', icon: CheckCircle2 },
];

const techPartners = [
    'LiveKit',
    'Deepgram',
    'AWS',
    'Cloudflare',
    'Stripe',
];

export function CredibilityStrip() {
    return (
        <section className="container mx-auto px-4 py-8 border-t border-border/20">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Compliance badges */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {badges.map((badge) => (
                            <div key={badge.label} className="flex items-center gap-1.5 text-text-muted">
                                <badge.icon className="w-3.5 h-3.5 text-brand/60" />
                                <span className="text-[11px] uppercase tracking-widest font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-8 bg-border/30" />

                    {/* Tech partners */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-text-muted uppercase tracking-widest mr-2">Powered by</span>
                        <div className="flex items-center gap-3">
                            {techPartners.map((name) => (
                                <span key={name} className="text-[11px] text-text-muted/70 font-medium">{name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
