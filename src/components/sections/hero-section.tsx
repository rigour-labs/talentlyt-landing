'use client';

import Link from 'next/link';
import { BlueParticles } from '@/components/ui/blue-particles';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
            <BlueParticles />
            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-highlight to-text-primary dark:from-foreground dark:via-highlight dark:to-foreground animate-text-shimmer bg-[length:200%_auto] opacity-100 transform-none px-2"
                    >
                        The standard for <br className="hidden sm:block" /> <span className="text-text-secondary">engineering hiring</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-base sm:text-lg md:text-xl text-secondary mb-8 sm:mb-10 leading-relaxed max-w-2xl px-2"
                    >
                        Conduct technical interviews with integrity verification.
                        Automated reports, playback, and skill assessment in one platform.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                href="/request-demo"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground text-sm rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center"
                            >
                                Start Free Trial
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                href="/live-demo"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-card text-foreground border border-border text-sm rounded-xl hover:bg-muted transition-all inline-flex items-center justify-center"
                            >
                                View Live Demo
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>



                {/* Social Proof */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center gap-4 sm:gap-8 max-w-full overflow-hidden px-2"
                >
                    <p className="text-xs sm:text-sm text-text-secondary font-medium whitespace-nowrap shrink-0">Trusted by engineering teams at</p>

                    <div className="flex-1 overflow-hidden relative w-full mask-linear-fade">
                        <div className="flex gap-12 animate-scroll items-center">
                            {/* First set of logos */}
                            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                <span key={`1-${company}-${i}`} className="text-sm sm:text-base md:text-lg text-text-muted hover:text-text-secondary transition-colors cursor-default whitespace-nowrap px-2 sm:px-4">{company}</span>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                <span key={`2-${company}-${i}`} className="text-sm sm:text-base md:text-lg text-text-muted hover:text-text-secondary transition-colors cursor-default whitespace-nowrap px-2 sm:px-4">{company}</span>
                            ))}
                        </div>
                        {/* Gradient masks for smooth fade edges */}
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
