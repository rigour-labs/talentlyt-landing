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
        <section id="architecture" className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-muted overflow-hidden" ref={ref}>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-primary tracking-tight">
                            Two agents are better than one
                        </h2>
                        <p className="text-base sm:text-lg text-secondary mb-3 sm:mb-4 leading-relaxed">
                            We separate the role of the interviewer from the evaluator. This ensures that the conversation remains natural while rigorous checks happen in the background.
                        </p>
                        <p className="text-xs sm:text-sm text-text-muted mb-6 sm:mb-8">
                            This dual-agent architecture eliminates bias and ensures objective, consistent assessments while maintaining a human-like interview experience.
                        </p>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="space-y-4 sm:space-y-6"
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
                                    className="flex gap-3 sm:gap-4"
                                >
                                    <div className="w-1 sm:w-1.5 h-full rounded-full bg-primary mt-1 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                                            <h3 className="text-base sm:text-lg text-primary">{item.title}</h3>
                                            <span className="text-[10px] sm:text-xs text-primary bg-primary/10 px-2 py-0.5 sm:py-1 rounded-full w-fit">
                                                {item.benefit}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-8 md:mt-0"
                    >
                        {/* Visual representation of the architecture */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square rounded-full border border-border flex items-center justify-center p-6 sm:p-8 md:p-12 relative animate-spin-slow overflow-hidden max-w-full"
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
