'use client';

import React, { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };
    const testimonials = [
        {
            quote: "TalentLyt transformed our hiring process. We've reduced false positives by 95% and cut our time-to-hire in half. The integrity verification gives us confidence we're making the right decisions.",
            author: "Sarah Chen",
            role: "VP of Engineering",
            company: "TechFlow Inc.",
            metrics: "95% reduction in false positives",
        },
        {
            quote: "The code playback feature is a game-changer. Being able to see exactly how candidates approach problems helps us understand their thought process beyond just the final solution.",
            author: "Michael Rodriguez",
            role: "Head of Talent",
            company: "ScaleUp Solutions",
            metrics: "50% faster interview reviews",
        },
        {
            quote: "We were skeptical about AI interviews, but TalentLyt's dual-agent system maintains the human touch while providing objective assessments. Our candidate experience scores improved significantly.",
            author: "Emily Watson",
            role: "Chief People Officer",
            company: "InnovateLabs",
            metrics: "40% better candidate satisfaction",
        },
    ];

    const caseStudies = [
        {
            company: "GlobalTech",
            metric: "99.2%",
            description: "Integrity verification accuracy rate",
        },
        {
            company: "StartupHub",
            metric: "3x",
            description: "Increase in qualified candidates identified",
        },
        {
            company: "EnterpriseCo",
            metric: "60%",
            description: "Reduction in interview bias complaints",
        },
    ];

    return (
        <section id="testimonials" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#030303] relative overflow-hidden" ref={ref}>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        Case Studies & Impact
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        Trusted by <span className="text-brand">Engineering Leaders</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Join the elite engineering teams who have eliminated bad hires
                        and restored trust in their technical interview process.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 md:mb-32"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] -z-10" />
                            <div className="h-full p-8 sm:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500 backdrop-blur-sm flex flex-col">
                                <div className="flex items-center gap-1.5 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-3.5 h-3.5 fill-brand text-brand"
                                        />
                                    ))}
                                </div>
                                <Quote className="w-10 h-10 text-brand/20 mb-8 shrink-0" />
                                <p className="text-lg text-white/90 leading-relaxed mb-10 italic font-medium">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold text-lg">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-base font-bold text-white tracking-tight">{testimonial.author}</div>
                                            <div className="text-xs text-text-muted font-medium mt-0.5">{testimonial.role}</div>
                                            <div className="text-[10px] text-brand/80 font-bold uppercase tracking-widest mt-1.5">{testimonial.company}</div>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-white/5">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-white tracking-tight">
                                            {testimonial.metrics}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Case Studies / Results Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative p-1 rounded-[3.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
                >
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[3.4rem] p-10 md:p-20 border border-white/5 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[100px] rounded-full -z-10" />

                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight">
                            Proven Results Across Industries
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                            {caseStudies.map((study, index) => (
                                <div key={index} className="group flex flex-col items-center">
                                    <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-brand transition-colors duration-500">
                                        {study.metric}
                                    </div>
                                    <div className="text-sm font-bold text-brand uppercase tracking-[0.2em] mb-3">
                                        {study.company}
                                    </div>
                                    <p className="text-text-secondary text-sm max-w-[200px] leading-relaxed">
                                        {study.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <div className="mt-24 text-center">
                    <p className="text-[10px] font-bold text-text-muted mb-10 uppercase tracking-[0.3em]">
                        Enterprise Security & Compliance
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20">
                        {['GDPR Compliant', 'DPDPA Compliant', 'SOC 2 Type II', 'ISO 27001'].map((badge) => (
                            <div key={badge} className="text-xs font-bold text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest cursor-default">
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
