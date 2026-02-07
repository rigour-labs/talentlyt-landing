'use client';

import React, { useRef } from 'react';
import { X, CheckCircle2, Activity, Zap, ShieldAlert, Cpu } from 'lucide-react';
import Image from 'next/image';

export function ProblemSolutionSection() {
    const ref = useRef<HTMLElement>(null);

    const problems = [
        {
            title: 'Cheating is Easy',
            description: 'A second laptop, a screen share to a friend, ChatGPT on another tab — candidates have dozens of ways to fake their way through.',
            impact: '30-40% of sessions compromised',
            icon: ShieldAlert
        },
        {
            title: 'Review Takes Forever',
            description: 'Watching hour-long recordings to catch issues? That\'s days of your team\'s time, per role.',
            impact: '4-6 hours per manual review',
            icon: Activity
        },
        {
            title: 'Scoring is Inconsistent',
            description: 'Different interviewers grade differently. Two candidates with similar skills get wildly different scores.',
            impact: 'Up to 50% score variance',
            icon: Zap
        },
        {
            title: 'People Swap In',
            description: 'Someone else shows up on day one. It happens more than you\'d think — especially in remote hiring.',
            impact: 'Hard to catch without tools',
            icon: ShieldAlert
        }
    ];

    const solutions = [
        {
            title: 'Always-On Monitoring',
            description: 'Maya watches for red flags the entire session — tab switches, unusual pauses, copy-paste patterns. Things a human reviewer would need hours to spot.',
            benefit: '95% detection accuracy',
            icon: CheckCircle2
        },
        {
            title: 'Face Match, Every Minute',
            description: 'We check the candidate\'s face throughout the interview, not just at the start. If someone swaps in, we know.',
            benefit: 'Continuous verification',
            icon: Cpu
        },
        {
            title: 'Same Bar, Every Time',
            description: 'Maya scores every candidate the same way. No more "tough interviewer" vs "easy interviewer" lottery.',
            benefit: 'Consistent scoring',
            icon: Zap
        }
    ];

    return (
        <section id="problem-solution" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden" ref={ref}>
            {/* 3D Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <Image
                    src="/assets/grid.png"
                    alt="AI Interview Technical Assessment Grid"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 sm:mb-28">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/20 mb-8">
                        <span className="technical-label text-warning">The Problem We Solve</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        Remote hiring is <span className="text-warning">broken</span>. <br />
                        We&apos;re <span className="text-brand">fixing it</span>.
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                        Candidates cheat, identities get swapped, and your team wastes hours on manual review. Rigovo catches what humans can&apos;t — while you keep full control of every hiring decision.
                    </p>
                </div>

                {/* Audit-Style Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
                    {/* Problem Column: Legacy Systems */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-danger/10 border border-danger/20 flex items-center justify-center text-danger">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">The Old Way</h3>
                                <p className="technical-label text-danger">Broken</p>
                            </div>
                        </div>

                        {problems.map((problem, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-danger/20 transition-all group"
                            >
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-danger transition-colors">{problem.title}</h4>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">{problem.description}</p>
                                <div className="flex items-center gap-2 bg-danger/5 px-3 py-1.5 rounded-lg border border-danger/10 w-fit">
                                    <Activity className="w-3 h-3 text-danger" />
                                    <span className="technical-label text-danger uppercase tracking-widest">Common Problem</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Solution Column: Rigovo Engine */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">With Rigovo</h3>
                                <p className="technical-label text-brand">Fixed</p>
                            </div>
                        </div>

                        {solutions.map((solution, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-[2rem] bg-brand/5 border border-brand/10 hover:border-brand/30 transition-all group relative overflow-hidden"
                            >
                                {/* Subtle scan animation overlay for solutions */}
                                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand/5 to-transparent pointer-events-none" />
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors">{solution.title}</h4>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">{solution.description}</p>
                                <div className="flex items-center gap-2 bg-brand/10 px-3 py-1.5 rounded-lg border border-brand/20 w-fit">
                                    <CheckCircle2 className="w-3 h-3 text-brand" />
                                    <span className="technical-label text-brand uppercase tracking-widest">How We Fix It</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real Beta Results */}
                <div className="p-1.5 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-b from-brand/20 to-transparent">
                    <div className="bg-slate-900 rounded-[1.8rem] sm:rounded-[2.8rem] p-6 sm:p-10 md:p-16 border border-brand/20 relative overflow-hidden">
                        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
                            <div className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1">Beta Program</div>
                            <div className="text-xs font-mono text-slate-400">Jan 2026</div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Live Beta Results</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    Here&apos;s what we found in <span className="text-brand">82 real interviews</span>.
                                </h3>
                                <p className="text-base text-slate-300 leading-relaxed mb-6">
                                    During our beta, we ran 82 live interviews and analyzed 6,824 signal events across 15 signal types. Almost half the sessions had something worth a closer look.
                                </p>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700">
                                    <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand shrink-0">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-brand uppercase tracking-wide mb-0.5">Most Common Flag</div>
                                        <div className="text-lg font-bold text-white">
                                            3,077 times someone wasn&apos;t on camera
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: "Signal Events", value: "6,824", sub: "Analyzed in Beta", color: "text-brand" },
                                    { label: "Interviews", value: "82", sub: "Sessions Monitored", color: "text-white" },
                                    { label: "Review Rate", value: "41%", sub: "Worth a Second Look", color: "text-white" },
                                    { label: "Signal Types", value: "15", sub: "Detection Categories", color: "text-green-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 sm:p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-brand/30 transition-all">
                                        <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wide mb-2">{stat.label}</div>
                                        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 ${stat.color} tracking-tighter`}>{stat.value}</div>
                                        <div className="text-[10px] sm:text-xs text-slate-500">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
