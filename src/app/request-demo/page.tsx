import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { DemoRequestForm } from '@/components/demo-request-form';
import { ShieldCheck, Activity, Globe } from 'lucide-react';

import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Request a Demo | TalentLyt Zero-Trust Recruitment',
    description: 'Schedule a personalized demo of TalentLyt. Discover how our AI-powered technical interview platform can help you hire better, faster, and with 100% integrity.',
};

export default function RequestDemoPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Request a Personalized Demo
                    </h1>
                    <p className="text-xl text-gray-600">
                        See how TalentLyt can transform your technical hiring process.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            What you&apos;ll discover in your demo:
                        </h2>
                        <ul className="space-y-6 text-lg text-gray-700">
                            <li className="flex items-start">
                                <ShieldCheck className="flex-shrink-0 w-7 h-7 text-primary-600 mr-4 mt-1" />
                                <div>
                                    <strong className="block text-gray-900">Zero-Trust Integrity:</strong>
                                    Experience our AI-powered proctoring and anti-cheating measures that guarantee authentic results.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Activity className="flex-shrink-0 w-7 h-7 text-primary-600 mr-4 mt-1" />
                                <div>
                                    <strong className="block text-gray-900">Actionable Insights:</strong>
                                    Dive into detailed candidate performance analytics and skill breakdowns to make data-driven decisions.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Globe className="flex-shrink-0 w-7 h-7 text-primary-600 mr-4 mt-1" />
                                <div>
                                    <strong className="block text-gray-900">Global Talent Access:</strong>
                                    Learn how to efficiently assess and hire top technical talent from anywhere in the world.
                                </div>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700">
                            Our team will walk you through a tailored demonstration, addressing your specific hiring challenges and showing you how TalentLyt provides a competitive edge.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
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
