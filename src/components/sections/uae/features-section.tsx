'use client';

import React from 'react';
import { Globe, Clock, ShieldCheck, Users, Zap, BarChart3 } from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: 'Screen Across MENA',
        description: 'Interview candidates in any time zone. Only 32% of Gulf firms have formal remote hiring policies — Maya gives you 24/7 coverage your competitors don\'t have.',
        highlight: '68% lack remote hiring policy',
    },
    {
        icon: ShieldCheck,
        title: 'Verify Remote Identity',
        description: 'Our 15-signal verification catches proxy interviews, deepfakes, and impersonation. In 2025, 1,300+ UAE companies were fined AED 34M for fake hiring practices.',
        highlight: 'AED 34M in fines (2025)',
    },
    {
        icon: Clock,
        title: 'Cut Screening Time',
        description: 'Stop spending hours on initial tech screens. Maya validates technical skills so your team only meets qualified candidates.',
        highlight: '70% faster hiring',
    },
    {
        icon: Users,
        title: 'Scale Your Agency',
        description: 'Recruitment agencies use Rigovo to screen 10x more candidates without expanding headcount. Verified reports build client trust.',
        highlight: 'Perfect for staffing firms',
    },
    {
        icon: Zap,
        title: 'Instant Results',
        description: 'Get comprehensive audit reports within minutes of each interview. Technical scores, integrity verification, and hiring recommendations.',
        highlight: 'Same-day turnaround',
    },
    {
        icon: BarChart3,
        title: 'Predict Success',
        description: 'Our ML model predicts job success with 85% accuracy. Stop hiring candidates who interview well but underperform on the job.',
        highlight: 'Data-driven decisions',
    },
];

export function UAEFeaturesSection() {
    return (
        <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        Why UAE Teams Choose Rigovo
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                        Remote Hiring, <span className="text-brand">Done Right</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Whether you&apos;re a Dubai startup or a recruitment agency serving the Gulf,
                        Rigovo gives you the tools to hire remote engineers with confidence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-brand" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">{feature.description}</p>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                                {feature.highlight}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Target Audiences */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand/10 to-transparent border border-brand/20">
                        <div className="text-[10px] uppercase tracking-widest text-brand font-bold mb-4">For UAE Startups</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Stop Burning Engineering Time</h3>
                        <p className="text-text-secondary mb-6">
                            Your senior engineers should be building product, not conducting screening calls.
                            Maya handles technical validation so you can focus on culture fit and team dynamics.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Screen 10x more candidates',
                                'Maintain consistent quality bar',
                                'Reduce time-to-hire by 50%',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-4">For Recruitment Agencies</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Verified Candidates, Happy Clients</h3>
                        <p className="text-text-secondary mb-6">
                            Differentiate your agency with AI-verified candidate profiles.
                            Our integrity reports give your clients confidence in every placement.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Scale without adding headcount',
                                'Catch fraud before clients do',
                                'Premium positioning in the market',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
