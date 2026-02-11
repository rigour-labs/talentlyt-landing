import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FileText, AlertCircle, Shield, CreditCard, Scale, Ban, RefreshCw, Gavel, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service — Rigovo',
    description: 'Rigovo Terms of Service. Read our terms governing the use of our AI interview platform, billing, data usage, and your rights as a user.',
    alternates: {
        canonical: 'https://rigovo.com/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <FileText className="w-4 h-4 text-brand" />
                            <span className="text-sm font-medium text-brand">Legal Document</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                            Terms of <span className="text-brand">Service</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            These terms govern your use of Rigovo. We&apos;ve tried to keep them readable while covering the legal bases. If something is unclear, reach out—we&apos;re happy to explain.
                        </p>
                        <p className="text-sm text-text-muted mt-4">
                            Last updated: February 2, 2026 | Effective: February 2, 2026
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">1. Agreement to Terms</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    Welcome to Rigovo. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Rigour Labs (&quot;Rigovo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                                </p>
                                <p>
                                    By creating an account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using Rigovo on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                                </p>
                                <p>
                                    <strong className="text-white">Plain English:</strong> By using Rigovo, you&apos;re agreeing to these rules. If you&apos;re signing up for your company, make sure you&apos;re authorized to do so.
                                </p>
                            </div>
                        </section>

                        {/* Service Description */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">2. What Rigovo Provides</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    Rigovo is an AI-powered interview intelligence platform designed to help organizations make better hiring decisions. Our services include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Maya AI Interviewer:</strong> Conducts technical interviews with adaptive questioning and real-time evaluation</li>
                                    <li><strong className="text-white">15-Signal Forensic Engine:</strong> Verifies candidate identity, authentic problem-solving, and AI leadership capabilities</li>
                                    <li><strong className="text-white">Job Success Prediction:</strong> Provides data-driven predictions of candidate performance</li>
                                    <li><strong className="text-white">Assessment Reports:</strong> Detailed technical evaluations with actionable insights</li>
                                </ul>
                                <p>
                                    <strong className="text-white">Important:</strong> Rigovo is a decision-support tool. We provide data and analysis to inform your hiring decisions—we do not make hiring decisions for you. Final employment decisions must always be made by qualified human recruiters.
                                </p>
                            </div>
                        </section>

                        {/* Account Terms */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">3. Your Account</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    To use Rigovo, you must create an account with accurate, complete information. You are responsible for:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Maintaining the confidentiality of your login credentials</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Notifying us immediately of any unauthorized access</li>
                                    <li>Ensuring your team members comply with these Terms</li>
                                </ul>
                                <p>
                                    You must be at least 18 years old and legally capable of entering into binding contracts. Corporate accounts must be created by authorized representatives.
                                </p>
                            </div>
                        </section>

                        {/* Billing */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">4. Billing & Payment</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    Rigovo offers multiple pricing tiers based on interview minutes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Pilot:</strong> One-time purchase, no recurring charges</li>
                                    <li><strong className="text-white">Starter:</strong> Pay-as-you-go, billed monthly based on usage</li>
                                    <li><strong className="text-white">Engine:</strong> Monthly subscription with included minutes + metered overage</li>
                                    <li><strong className="text-white">Fortress:</strong> Annual enterprise agreements with custom terms</li>
                                </ul>
                                <p>
                                    All payments are processed securely through Stripe (PCI DSS Level 1 compliant). Prices are listed in USD unless otherwise specified. You authorize us to charge your payment method for all fees incurred.
                                </p>
                                <p>
                                    <strong className="text-white">Refund Policy:</strong> Unused minutes on Pilot plans are non-refundable. Subscription plans may be cancelled anytime; you retain access until the end of your billing period. Enterprise refunds are handled per contract terms.
                                </p>
                            </div>
                        </section>

                        {/* Acceptable Use */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <AlertCircle className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">5. Acceptable Use Policy</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    You agree to use Rigovo lawfully and ethically. Specifically, you may NOT:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use the platform to discriminate against candidates based on protected characteristics (race, gender, age, disability, religion, national origin, etc.)</li>
                                    <li>Attempt to circumvent, disable, or interfere with our integrity monitoring systems</li>
                                    <li>Share account credentials or allow unauthorized access</li>
                                    <li>Reverse engineer, decompile, or attempt to extract our source code or AI models</li>
                                    <li>Use the service for any illegal purpose or to violate any laws</li>
                                    <li>Submit false, misleading, or fraudulent information</li>
                                    <li>Harass, abuse, or harm candidates through the platform</li>
                                    <li>Resell, sublicense, or commercialize access without written permission</li>
                                </ul>
                                <p>
                                    Violations may result in immediate account suspension or termination without refund.
                                </p>
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Scale className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">6. Intellectual Property</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    <strong className="text-white">Our IP:</strong> Rigovo, including our software, AI models, algorithms, branding, and documentation, is owned by Rigour Labs and protected by intellectual property laws. Your use of Rigovo does not grant you ownership of any IP.
                                </p>
                                <p>
                                    <strong className="text-white">Your Content:</strong> You retain ownership of any content you submit (job descriptions, evaluation criteria, etc.). By submitting content, you grant us a license to use it to provide our services.
                                </p>
                                <p>
                                    <strong className="text-white">Candidate Data:</strong> Interview recordings and assessment data are processed according to our Privacy Policy and applicable data protection laws.
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Ban className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">7. Disclaimers & Limitations</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    Rigovo is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We do not guarantee:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Uninterrupted or error-free service</li>
                                    <li>Specific hiring outcomes or candidate quality</li>
                                    <li>That our verification system will identify every instance requiring review</li>
                                    <li>Compatibility with all systems or browsers</li>
                                </ul>
                                <p>
                                    <strong className="text-white">Liability Cap:</strong> To the maximum extent permitted by law, our total liability for any claims arising from your use of Rigovo is limited to the amount you paid us in the 12 months preceding the claim.
                                </p>
                                <p>
                                    <strong className="text-white">Exclusions:</strong> We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or business interruption.
                                </p>
                            </div>
                        </section>

                        {/* Termination */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">8. Termination</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    <strong className="text-white">You may terminate:</strong> Cancel your subscription at any time through your account settings. Access continues until the end of your billing period.
                                </p>
                                <p>
                                    <strong className="text-white">We may terminate:</strong> We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a risk to our platform or other users. Serious violations may result in immediate termination without notice or refund.
                                </p>
                                <p>
                                    <strong className="text-white">After termination:</strong> Your access ends, but certain provisions survive (IP rights, liability limitations, dispute resolution). Data is retained according to our Privacy Policy.
                                </p>
                            </div>
                        </section>

                        {/* Changes */}
                        <section className="p-8 rounded-[2rem] bg-card border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                                    <RefreshCw className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">9. Changes to Terms & Service</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    We may update these Terms or modify our services from time to time. For material changes, we will provide at least 30 days&apos; notice via email or in-app notification.
                                </p>
                                <p>
                                    Continued use after changes take effect constitutes acceptance. If you disagree with changes, you may terminate your account before the effective date.
                                </p>
                            </div>
                        </section>

                        {/* Governing Law */}
                        <section className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center">
                                    <Gavel className="w-5 h-5 text-brand" />
                                </div>
                                <h2 className="text-xl font-bold">10. Governing Law & Disputes</h2>
                            </div>
                            <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                                <p>
                                    These Terms are governed by the laws of the Republic of India, without regard to conflict of law principles.
                                </p>
                                <p>
                                    <strong className="text-white">Dispute Resolution:</strong> We prefer to resolve disputes informally. Contact us first at <a href="mailto:legal@rigovo.com" className="text-brand hover:underline">legal@rigovo.com</a>. If informal resolution fails, disputes will be resolved through binding arbitration in Pune, India, except where prohibited by law.
                                </p>
                                <p>
                                    <strong className="text-white">Class Action Waiver:</strong> To the extent permitted by law, you agree to resolve disputes individually and waive any right to participate in class actions.
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <div className="text-center pt-8 text-sm text-text-muted">
                            <p>
                                Questions about these Terms? Contact us at{' '}
                                <a href="mailto:legal@rigovo.com" className="text-brand hover:underline">legal@rigovo.com</a>
                            </p>
                            <p className="mt-2">
                                Rigour Labs | Pune, India
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
