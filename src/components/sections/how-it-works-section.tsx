'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function HowItWorksSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };
    const steps = [
        {
            title: 'Schedule Interview',
            description: 'Create an interview link in seconds. Send it to the candidate via email or your ATS.',
            time: '30 seconds',
            output: 'Interview link ready',
            sample: 'https://talentlyt.com/interview/abc123',
        },
        {
            title: 'Conduct Interview',
            description: 'Candidate joins the session. Maya conducts the interview while the Automated Quality Auditor verifies integrity in real-time.',
            time: '45-60 minutes',
            output: 'Live session with monitoring',
            sample: 'Real-time integrity dashboard',
        },
        {
            title: 'Get Instant Results',
            description: 'Review the recording, integrity insights, code playback, and comprehensive skill breakdown immediately after the interview.',
            time: 'Instant',
            output: 'Complete assessment report',
            sample: 'Skill scores + integrity report',
        },
    ];

    return (
        <section id="how-it-works" className="px-6 py-24 bg-background border-b border-border" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl mb-4 tracking-tight text-primary">
                        Simple workflow, powerful results
                    </h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        From scheduling to decision-making, TalentLyt streamlines your entire hiring process
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8 relative"
                >
                    {/* Connecting Line */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-border via-primary/30 to-border z-0 origin-left"
                    ></motion.div>

                    {steps.map((step, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="relative z-10"
                        >
                            <motion.div 
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all h-full flex flex-col"
                            >
                                {/* Step Number */}
                                <div className="flex items-center justify-start mb-6">
                                    <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-lg text-primary shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Clock className="w-4 h-4 text-text-muted" />
                                        <span className="text-xs text-text-muted uppercase tracking-wider">
                                            {step.time}
                                        </span>
                                    </div>
                                    <h3 className="text-xl text-primary mb-3">{step.title}</h3>
                                    <p className="text-secondary leading-relaxed mb-6">{step.description}</p>

                                    {/* Sample Output */}
                                    <div className="bg-muted border border-border rounded-xl p-4 mb-6">
                                        <div className="text-xs text-text-muted mb-2 uppercase tracking-wider">
                                            Output
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span className="text-sm text-primary">{step.output}</span>
                                        </div>
                                        <div className="mt-2 text-xs text-text-muted font-mono bg-background px-3 py-2 rounded border border-border">
                                            {step.sample}
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href="/live-demo"
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all group"
                                >
                                    Try this step
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/live-demo"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                        >
                            <Play className="w-5 h-5" />
                            Watch Full Demo
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
