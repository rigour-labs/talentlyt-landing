'use client';

import React, { useRef } from 'react';
import { ShieldCheck, Activity, Globe, Search, TrendingUp, Eye, Keyboard } from 'lucide-react';

export function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const betaHighlights = [
        {
            title: "Face Detection",
            description: "Caught candidates looking away or not visible during responses",
            metric: "3,077",
            metricLabel: "Detections",
            icon: Eye,
        },
        {
            title: "Identity Verification",
            description: "Flagged potential proxy or deepfake attempts via lip-sync and identity analysis",
            metric: "1,390",
            metricLabel: "Flags",
            icon: ShieldCheck,
        },
        {
            title: "Behavior Monitoring",
            description: "Detected tab switches, clipboard pastes, and robotic typing patterns",
            metric: "1,186",
            metricLabel: "Catches",
            icon: Keyboard,
        }
    ];

    const summaryStats = [
        {
            value: "6,824",
            label: "Total Anomalies",
            sub: "Detected in Beta",
            detail: "15 Signal Types",
            icon: TrendingUp,
        },
        {
            value: "82",
            label: "Interviews",
            sub: "Monitored Live",
            detail: "5.6 Hours Analyzed",
            icon: Search,
        },
        {
            value: "41%",
            label: "Sessions Flagged",
            sub: "For Review",
            detail: "34 Flagged Total",
            icon: Activity,
        }
    ];

    return (
        <section ref={sectionRef} className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Beta Testing Results</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        Proven in <span className="text-blue-500">Real Testing</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Our beta program detected thousands of integrity signals across live interviews.
                    </p>
                </div>

                {/* Beta Highlights Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {betaHighlights.map((item, i) => (
                        <div
                            key={i}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-colors"
                        >
                            {/* Icon & Title */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            {/* Metric */}
                            <div className="flex items-baseline gap-2 pt-4 border-t border-slate-700">
                                <span className="text-3xl sm:text-4xl font-bold text-white">{item.metric}</span>
                                <span className="text-blue-400 font-semibold text-sm uppercase">{item.metricLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Stats Grid */}
                <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="p-4 sm:p-6 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">Live Beta Data</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Globe className="w-4 h-4" />
                            <span>Data as of January 2026</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
                        {summaryStats.map((stat, i) => (
                            <div key={i} className="p-6 sm:p-8 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                                    <stat.icon className="w-5 h-5 text-blue-400" />
                                    <span className="text-slate-400 text-sm font-medium">{stat.detail}</span>
                                </div>
                                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white font-semibold">{stat.label}</div>
                                <div className="text-slate-400 text-sm">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
