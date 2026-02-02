import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { DemoRequestForm } from '@/components/demo-request-form';
import { ShieldCheck, Activity, Globe, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Request a Demo | TalentLyt AI Interview Platform',
    description: 'Schedule a personalized demo of TalentLyt. Discover how our AI-powered technical interview platform with fraud detection can transform your hiring.',
    alternates: {
        canonical: 'https://talentlyt.cloud/request-demo',
    },
};

export default function RequestDemoPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
                        <Sparkles className="w-4 h-4 text-brand" />
                        <span className="text-sm font-medium text-brand">Free Personalized Demo</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                        See TalentLyt in <span className="text-brand">Action</span>
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Get a personalized walkthrough of our AI interview platform and fraud detection capabilities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Column - Benefits */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white">
                            What you&apos;ll discover:
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">13-Signal Fraud Detection</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        See how our forensic engine catches deepfakes, proxy candidates, and AI-assisted cheating in real-time.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                                    <Activity className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">AI-Powered Assessments</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Experience Maya, our AI interviewer that conducts adaptive technical interviews with detailed skill analysis.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                                    <Globe className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Job Success Prediction</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Learn how our predictive models help you identify candidates who will actually succeed in the role.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                            <p className="text-text-secondary text-sm leading-relaxed">
                                <span className="text-white font-medium">Tailored to you:</span> Our team will address your specific hiring challenges and show you exactly how TalentLyt fits your workflow.
                            </p>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-3">
                            {['No credit card required', 'Free pilot access', '15-minute setup'].map((item) => (
                                <span key={item} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-muted">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-card p-8 rounded-[2rem] border border-white/10 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Schedule Your Demo
                        </h2>
                        <DemoRequestForm />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
