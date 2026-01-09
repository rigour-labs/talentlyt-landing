'use client';

import { GravityParticles } from '@/components/ui/gravity-particles';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ArchitectureSection() {
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

    return (
        <section id="architecture" className="relative px-6 py-24 bg-muted overflow-hidden" ref={ref}>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl mb-6 text-primary tracking-tight">
                            Two agents are better than one
                        </h2>
                        <p className="text-lg text-secondary mb-4 leading-relaxed">
                            We separate the role of the interviewer from the evaluator. This ensures that the conversation remains natural while rigorous checks happen in the background.
                        </p>
                        <p className="text-sm text-text-muted mb-8">
                            This dual-agent architecture eliminates bias and ensures objective, consistent assessments while maintaining a human-like interview experience.
                        </p>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="space-y-6"
                        >
                            {[
                                { 
                                    title: 'Maya (Interviewer)', 
                                    desc: 'Conducts the conversation, asks follow-up questions, and ensures a great candidate experience. Focuses on making candidates feel comfortable and engaged.',
                                    benefit: 'Natural conversation flow'
                                },
                                { 
                                    title: 'Automated Quality Auditor', 
                                    desc: 'Audits the session (with candidate consent) to verify integrity and evaluate technical accuracy. Provides objective, data-driven insights.',
                                    benefit: 'Zero bias assessments'
                                }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-1.5 h-full rounded-full bg-primary mt-1"></div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg text-primary">{item.title}</h3>
                                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                                                {item.benefit}
                                            </span>
                                        </div>
                                        <p className="text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Visual representation of the architecture */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square rounded-full border border-border flex items-center justify-center p-12 relative animate-spin-slow overflow-hidden"
                        >
                            <GravityParticles />
                            <div className="absolute inset-0 rounded-full border border-dashed border-muted-border animate-spin-reverse-slow"></div>
                            <div className="text-center relative z-10">
                                <div className="text-xs font-mono text-text-muted">SECURE_ENVIRONMENT</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
