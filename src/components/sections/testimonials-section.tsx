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
        <section id="testimonials" className="py-24 px-6 bg-background border-b border-border" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl mb-4 tracking-tight text-primary">
                        Trusted by Engineering Leaders
                    </h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        See how companies are transforming their hiring with TalentLyt
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-muted-border transition-all group"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-accent-highlight text-accent-highlight"
                                    />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-secondary leading-relaxed mb-6 text-balance">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div className="text-primary">{testimonial.author}</div>
                                    <div className="text-sm text-secondary">{testimonial.role}</div>
                                    <div className="text-sm text-text-muted">{testimonial.company}</div>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-border">
                                <div className="text-sm text-primary">{testimonial.metrics}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Case Studies */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-muted border border-border rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-2xl mb-8 text-center text-primary">
                        Proven Results Across Industries
                    </h3>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all"
                            >
                                <div className="text-3xl text-primary mb-2">{study.metric}</div>
                                <div className="text-sm text-secondary mb-1">{study.company}</div>
                                <div className="text-xs text-text-muted">{study.description}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Trust Badges */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-text-muted mb-6 uppercase tracking-wider">
                        Trusted & Certified
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                        <div className="text-sm text-secondary">GDPR Compliant</div>
                        <div className="text-sm text-secondary">DPDPA Compliant</div>
                        <div className="text-sm text-secondary">SOC 2 Type II</div>
                        <div className="text-sm text-secondary">ISO 27001</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
