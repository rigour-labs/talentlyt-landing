import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SampleReportGate } from '@/components/sample-report-gate';
import { PageAnalytics } from '@/components/page-analytics';

export const metadata: Metadata = {
    title: 'Sample Interview Intelligence Report | Rigovo',
    description: 'See what a Rigovo Interview Intelligence Report looks like. Integrity Score, AI Proficiency classification, 15-signal forensic breakdown, and detailed skill evaluations.',
    alternates: {
        canonical: 'https://rigovo.com/sample-report',
    },
};

export default function SampleReportPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6">
                            <span className="text-sm font-medium text-brand">Sample Report</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Interview Intelligence <span className="text-brand">Report</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            This is what hiring managers receive after every Rigovo interview. Integrity verification, AI proficiency classification, and detailed skill breakdown — all in one report.
                        </p>
                    </div>

                    <SampleReportGate />
                </div>
            </main>
            <PageAnalytics pagePath="/sample-report" />
            <Footer />
        </div>
    );
}
