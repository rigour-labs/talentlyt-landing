'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface Stat {
    value: string;
    numericValue: number;
    label: string;
    description: string;
    icon: React.ReactNode | null;
    comparison?: string;
}

export function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
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

    const stats: Stat[] = [
        { 
            value: '<0.1%', 
            numericValue: 0.1,
            label: 'False positive rate', 
            description: 'Industry-leading accuracy in identifying genuine talent',
            icon: null,
            comparison: 'vs 15-20% industry average'
        },
        { 
            value: '10k+', 
            numericValue: 10000,
            label: 'Interviews secured', 
            description: 'Trusted by engineering teams worldwide',
            icon: null,
            comparison: 'and growing daily'
        },
        { 
            value: '200+', 
            numericValue: 200,
            label: 'Growth companies', 
            description: 'From startups to enterprises',
            icon: null,
            comparison: 'including Fortune 500'
        },
        { 
            value: '99.9%', 
            numericValue: 99.9,
            label: 'Uptime SLA', 
            description: 'Reliable infrastructure you can count on',
            icon: null,
            comparison: 'guaranteed availability'
        },
    ];

    useEffect(() => {
        if (isInView) {
            setIsVisible(true);
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} className="px-6 py-24 border-b border-border bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl mb-3 text-primary">
                        Trusted by Engineering Teams
                    </h2>
                    <p className="text-secondary">
                        Real numbers from real companies using TalentLyt
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
                        >
                            <div className="text-4xl md:text-5xl tracking-tighter text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-primary uppercase tracking-wider mb-2">
                                {stat.label}
                            </div>
                            <div className="text-xs text-secondary leading-relaxed mb-3">
                                {stat.description}
                            </div>
                            {stat.comparison && (
                                <div className="flex items-center justify-center gap-1 text-xs text-text-muted">
                                    <ArrowUp className="w-3 h-3" />
                                    <span>{stat.comparison}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Visual Chart */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 bg-card border border-border rounded-2xl p-8"
                >
                    <h3 className="text-xl text-center mb-6 text-primary">
                        Performance Comparison
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-primary">TalentLyt Accuracy</span>
                                <span className="text-secondary">99.9%</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-primary rounded-full transition-all duration-1000"
                                    style={{ width: isVisible ? '99.9%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-secondary">Industry Average</span>
                                <span className="text-secondary">85%</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-secondary/30 rounded-full transition-all duration-1000 delay-200"
                                    style={{ width: isVisible ? '85%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
