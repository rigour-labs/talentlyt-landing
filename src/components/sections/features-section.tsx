'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function FeaturesSection() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const
            }
        }
    };
    const features = [
        {
            title: 'Ensure Hiring Integrity',
            benefit: 'Integrity Verification',
            description: 'Data-driven insights for high-integrity hiring, visually identifying potential irregularities with candidate consent. Reduce false positives by 95%.',
            className: "md:col-span-2",
            metric: '95% reduction',
            demoLink: '/live-demo#integrity',
        },
        {
            title: 'Eliminate Bias',
            benefit: 'Independent Evaluation',
            description: 'Separate AI agents for interviewing and monitoring designed to minimize human and algorithmic bias. Get objective, consistent assessments.',
            className: "md:col-span-1",
            metric: '90% less variance',
            demoLink: '/live-demo#monitoring',
        },
        {
            title: 'Understand Thought Process',
            benefit: 'Code Playback',
            description: 'Watch the entire coding session keystroke by keystroke to understand how candidates approach problems, not just the final solution.',
            className: "md:col-span-1",
            metric: 'Full session replay',
            demoLink: '/live-demo#playback',
        },
        {
            title: 'Make Faster Decisions',
            benefit: 'Detailed Skill Reports',
            description: 'Get a granular breakdown of technical skills, communication, and problem-solving abilities immediately after the interview. No more waiting days for feedback.',
            className: "md:col-span-2",
            metric: 'Instant reports',
            demoLink: '/live-demo#reports',
        },
        {
            title: 'Hire Fairly & Inclusively',
            benefit: 'Fairness & Accessibility',
            description: 'Includes an "Accommodation Mode" for candidates with disabilities to ensure fair assessment regardless of physical or neurological differences.',
            className: "md:col-span-1",
            metric: '100% accessible',
            demoLink: '/live-demo',
        },
        {
            title: 'Protect Candidate Privacy',
            benefit: 'Data Privacy & Control',
            description: 'Recordings are encrypted and automatically deleted after a set period. Candidates retain rights to their assessment data. GDPR/DPDPA compliant.',
            className: "md:col-span-2",
            metric: '100% compliant',
            demoLink: '/live-demo',
        },
    ];

    return (
        <section id="features" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 tracking-tight text-primary">
                        Everything you need to hire confidently
                    </h2>
                    <p className="text-secondary text-base sm:text-lg max-w-2xl">
                        TalentLyt provides a complete ecosystem for technical assessment, from integrity verification to deep skill analysis. 
                        Stop losing great candidates to integrity issues.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-6 sm:p-8 rounded-2xl border border-border bg-muted/50 hover:bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 group ${feature.className}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {feature.metric}
                                </div>
                            </div>
                            <div className="text-xs text-primary mb-2 uppercase tracking-wider">
                                {feature.benefit}
                            </div>
                            <h3 className="text-lg sm:text-xl text-foreground mb-2 sm:mb-3">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-3 sm:mb-4">{feature.description}</p>
                            <Link
                                href={feature.demoLink}
                                className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all group/link"
                            >
                                See it in action
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Comparison Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-4 sm:p-6 rounded-xl bg-red-500/10 border border-red-500/20"
                    >
                        <div className="text-sm text-red-500 mb-2">Traditional Interviews</div>
                        <ul className="space-y-2 text-xs sm:text-sm text-secondary">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">×</span>
                                <span>No integrity verification</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">×</span>
                                <span>Subjective evaluations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">×</span>
                                <span>Days to get feedback</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-4 sm:p-6 rounded-xl bg-primary/10 border border-primary/20"
                    >
                        <div className="text-sm text-primary mb-2">With TalentLyt</div>
                        <ul className="space-y-2 text-xs sm:text-sm text-secondary">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>Real-time integrity monitoring</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>Objective AI assessments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>Instant comprehensive reports</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-brand/10 border border-brand/20 text-xs sm:text-sm text-secondary">
                    <p className="mb-2"><strong>Note on AI Decision Support:</strong> TalentLyt acts as a decision-support tool providing data-driven insights. Final hiring authority remains solely with the employer's human HR team.</p>
                    <p>All monitoring is conducted only with the candidate's prior, explicit consent and is used solely for validating session integrity.</p>
                </div>
            </div>
        </section>
    );
}
