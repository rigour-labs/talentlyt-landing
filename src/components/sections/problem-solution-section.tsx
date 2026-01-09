'use client';

import React, { useRef } from 'react';
import { X, CheckCircle2, AlertTriangle, Shield, Clock, Users, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export function ProblemSolutionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };

    const solutionVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };
    const problems = [
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: 'Cheating & Integrity Issues',
            description: 'Candidates use multiple devices, share screens, or get help during remote interviews.',
            impact: '30-40% of remote interviews have integrity concerns',
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Time-Consuming Reviews',
            description: 'Reviewing interview recordings and code takes hours, delaying hiring decisions.',
            impact: 'Average 4-6 hours per candidate review',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Inconsistent Evaluations',
            description: 'Different interviewers assess candidates differently, leading to bias and inconsistency.',
            impact: 'Up to 50% variance in candidate scores',
        },
        {
            icon: <TrendingDown className="w-6 h-6" />,
            title: 'False Positive Hires',
            description: 'Hiring candidates who can\'t perform on the job costs time, money, and team morale.',
            impact: 'Average $50K cost per bad hire',
        },
    ];

    const solutions = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'AI-Powered Integrity Verification',
            description: 'Real-time monitoring detects anomalies and potential cheating with candidate consent.',
            benefit: '95% reduction in integrity issues',
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: 'Automated Skill Assessment',
            description: 'Get comprehensive skill breakdowns and reports instantly after each interview.',
            benefit: '50% faster decision-making',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Objective Evaluation',
            description: 'Consistent, bias-free assessments using standardized AI evaluation criteria.',
            benefit: '90% reduction in evaluation variance',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Predictive Hiring Insights',
            description: 'Data-driven insights help identify candidates who will succeed in your role.',
            benefit: '3x better hire quality',
        },
    ];

    return (
        <section className="py-24 px-6 bg-background border-b border-border" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl mb-4 tracking-tight text-primary">
                        The Problem We're Solving
                    </h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        Remote technical hiring is broken. Here's how TalentLyt fixes it.
                    </p>
                </motion.div>

                {/* Problems vs Solutions Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Problems Column */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-muted border border-border rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                <X className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl text-primary">Traditional Hiring</h3>
                        </div>
                        <div className="space-y-6">
                            {problems.map((problem, index) => (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="bg-card border border-border rounded-xl p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-red-500/10 rounded-lg text-red-500 flex-shrink-0">
                                            {problem.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-primary mb-2">{problem.title}</h4>
                                            <p className="text-sm text-secondary mb-3 leading-relaxed">
                                                {problem.description}
                                            </p>
                                            <div className="text-xs text-red-500 bg-red-500/10 px-3 py-1 rounded-full inline-block">
                                                {problem.impact}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Solutions Column */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-muted border border-border rounded-2xl p-8 border-primary/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl text-primary">With TalentLyt</h3>
                        </div>
                        <div className="space-y-6">
                            {solutions.map((solution, index) => (
                                <motion.div 
                                    key={index}
                                    variants={solutionVariants}
                                    whileHover={{ scale: 1.02, x: -5 }}
                                    className="bg-card border border-primary/20 rounded-xl p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                                            {solution.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-primary mb-2">{solution.title}</h4>
                                            <p className="text-sm text-secondary mb-3 leading-relaxed">
                                                {solution.description}
                                            </p>
                                            <div className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                                                {solution.benefit}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Visual Comparison */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12"
                >
                    <h3 className="text-2xl text-center mb-8 text-primary">
                        The TalentLyt Difference
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl text-primary mb-2">95%</div>
                            <div className="text-sm text-secondary mb-4">Reduction in false positives</div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl text-primary mb-2">50%</div>
                            <div className="text-sm text-secondary mb-4">Faster time-to-hire</div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl text-primary mb-2">3x</div>
                            <div className="text-sm text-secondary mb-4">Better candidate quality</div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/live-demo"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                        >
                            See How It Works
                            <CheckCircle2 className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
