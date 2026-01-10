'use client';

import React, { useRef, useState } from 'react';
import { Star, ShieldCheck, Activity, Globe, Zap, Fingerprint, Search } from 'lucide-react';

function KineticCard({ children, index }: { children: React.ReactNode, index: number }) {
    const [transform, setTransform] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 10;
        const yPct = (mouseY / height - 0.5) * 10;
        setTransform({ x: xPct, y: yPct });
    };

    const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0 });
    };

    const rotateY = transform.x * 5;
    const rotateX = -transform.y * 5;

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformStyle: "preserve-3d",
                transition: 'transform 0.1s ease-out',
            }}
            className="relative h-full"
        >
            <div style={{ transform: "translateZ(60px)" }} className="h-full">
                {children}
            </div>
        </div>
    );
}

export function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const testimonials = [
        {
            quote: "Reduced false positives by 95% while cutting time-to-hire in half. Total confidence in every decision.",
            author: "Sarah Chen",
            role: "VP of Engineering",
            company: "TechFlow Inc.",
            initials: "SC",
            metric: "95% Reduction",
            refCode: "AUTH-TECH-952",
            status: "VERIFIED_TRUTH",
            color: "brand"
        },
        {
            quote: "The code playback is a game-changer. Forensic depth into how candidates think, not just the solution.",
            author: "Michael Rodriguez",
            role: "Head of Talent",
            company: "ScaleUp Solutions",
            initials: "MR",
            metric: "3x Quality Depth",
            refCode: "SYST-PROC-041",
            status: "INTEGRITY_SAFE",
            color: "warning"
        },
        {
            quote: "Dual-agent consensus maintains human touch while providing objective, zero-bias assessments.",
            author: "Emily Watson",
            role: "Chief People Officer",
            company: "InnovateLabs",
            initials: "EW",
            metric: "40% Experience Gain",
            refCode: "HUMAN-SYNC-881",
            status: "OPTIMIZED_FLOW",
            color: "violet-500"
        }
    ];

    return (
        <section ref={sectionRef} className="px-4 sm:px-6 py-32 sm:py-48 bg-[#030303] relative overflow-hidden border-b border-white/5">
            {/* 3D Flowing Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>

            {/* Energy Veins */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1200 800">
                <path
                    d="M-100,200 Q300,300 600,200 T1300,100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-brand"
                />
                <path
                    d="M-100,600 Q400,500 800,700 T1300,600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-warning"
                />
            </svg>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-24 max-w-2xl">
                    <div className="technical-label text-brand mb-6">
                        [Institutional_Trust_Metrics]
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tighter text-white leading-[0.9]">
                        Validated by <br />
                        <span className="text-brand">The Experts.</span>
                    </h2>
                    <p className="text-lg text-text-secondary opacity-70">
                        High-stakes engineering teams trust TalentLyt as their definitive source of truth in technical assessment.
                    </p>
                </div>

                {/* Asymmetrical Kinetic Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-48">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`lg:col-span-4 ${i === 1 ? 'lg:mt-16' : i === 2 ? 'lg:mt-32' : ''
                                }`}
                        >
                            <KineticCard index={i}>
                                <div className="group relative h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col overflow-hidden hover:border-white/20 transition-colors duration-500">

                                    {/* Saturation Aura */}
                                    <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 bg-${t.color}`} />

                                    {/* Forensic Header */}
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, idx) => (
                                                <Star key={idx} className={`w-3 h-3 text-${t.color} fill-current/20`} />
                                            ))}
                                        </div>
                                        <div className="text-right">
                                            <div className="technical-label text-white/50 text-[8px] mb-1 leading-none">ID_{t.refCode}</div>
                                            <div className="flex items-center gap-1.5 justify-end">
                                                <div className={`w-1 h-1 rounded-full bg-${t.color} animate-pulse`} />
                                                <span className="technical-label text-white/80 text-[8px]">{t.status}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="flex-1 relative mb-12">
                                        <Fingerprint className="absolute -top-8 -left-8 w-24 h-24 text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none" />
                                        <p className="text-xl sm:text-2xl text-white font-medium italic leading-relaxed">
                                            "{t.quote}"
                                        </p>
                                    </div>

                                    {/* Sub-Diagnostic Footer */}
                                    <div className="mt-auto space-y-8 pt-8 border-t border-white/5">
                                        <div className="flex items-center gap-5">
                                            <div className="relative h-14 w-14 group-hover:scale-105 transition-transform duration-500">
                                                <div className="absolute inset-0 bg-white/5 blur-[10px] rounded-full" />
                                                <div className="relative h-full w-full rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/40 font-bold text-lg">
                                                    {t.initials}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-sm tracking-tight leading-none mb-1.5">{t.author}</div>
                                                <div className="technical-label text-white/60 text-[9px] mb-1">{t.role}</div>
                                                <div className="technical-label text-brand text-[9px]">{t.company}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md group-hover:border-brand/40 transition-all">
                                            <Activity className="w-3.5 h-3.5 text-brand" />
                                            <span className="technical-label text-white/80 text-[10px]">{t.metric}</span>
                                        </div>
                                    </div>
                                </div>
                            </KineticCard>
                        </div>
                    ))}
                </div>

                {/* High-Fidelity Proven Results Section */}
                <div className="pt-32 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                        <div className="max-w-xl">
                            <div className="px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-[10px] font-bold uppercase tracking-[0.3em] mb-6 w-fit">
                                Industrial Scale Verification
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
                                Proven Results Across <br />
                                <span className="text-white/40 italic">Key Ecosystems.</span>
                            </h3>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center gap-4 text-white/40 technical-label text-[10px]">
                                <Globe className="w-4 h-4 animate-spin-slow" />
                                <span>Global Data Consensus v2.4</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-y border-white/5 rounded-[3rem] overflow-hidden">
                        {[
                            {
                                value: "99.2%",
                                label: "Integrity Verification",
                                sub: "Accuracy Rate",
                                company: "GlobalTech",
                                color: "brand",
                                icon: ShieldCheck,
                                sector: "SEC_FIN"
                            },
                            {
                                value: "3x",
                                label: "Increase in Qualified",
                                sub: "Candidates Identified",
                                company: "StartupHub",
                                color: "warning",
                                icon: Search,
                                sector: "HYPER_GROWTH"
                            },
                            {
                                value: "60%",
                                label: "Reduction in Interview",
                                sub: "Bias Complaints",
                                company: "EnterpriseCo",
                                color: "success",
                                icon: Activity,
                                sector: "CORP_ENT"
                            }
                        ].map((result, i) => (
                            <div
                                key={i}
                                className={`group relative p-8 sm:p-12 hover:bg-white/[0.02] transition-all duration-700 ${i !== 2 ? 'md:border-r border-white/5' : ''
                                    } ${i !== 2 ? 'border-b md:border-b-0 border-white/5' : ''}`}
                            >
                                {/* Sector Scanner Light */}
                                <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-${result.color} to-transparent opacity-0 group-hover:opacity-40 transition-opacity translate-y-[-1px] group-hover:translate-y-0 duration-1000`} />

                                <div className="space-y-12">
                                    <div className="flex items-center justify-between">
                                        <div className={`text-[10px] font-mono text-${result.color} opacity-60`}>
                                            SECTOR::{result.sector}
                                        </div>
                                        <result.icon className={`w-5 h-5 text-white/20 group-hover:text-${result.color} transition-colors`} />
                                    </div>

                                    <div className="relative">
                                        <div className="text-7xl sm:text-8xl font-bold text-white tracking-tighter mb-4 tabular-nums">
                                            {result.value}
                                        </div>
                                        <div className="technical-label text-white/80 group-hover:text-white transition-colors">
                                            {result.label}
                                            <br />
                                            <span className="opacity-40">{result.sub}</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 flex items-center justify-between">
                                        <div className="technical-label text-brand text-[8px] tracking-[0.2em]">{result.company}</div>
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-1 h-1 rounded-full bg-white/10 group-hover:bg-${result.color}/40 transition-colors`}
                                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
