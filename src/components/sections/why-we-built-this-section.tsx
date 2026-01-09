'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function WhyWeBuiltThisSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="px-6 py-24 bg-muted border-y border-border" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-medium leading-relaxed text-primary text-balance mb-4"
                >
                    "Remote interviews are broken. We built TalentLyt because we saw great engineering teams struggling to filter candidates who were gaming the system."
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-secondary max-w-2xl mx-auto"
                >
                    Every bad hire costs your team time, money, and morale. TalentLyt ensures you only hire candidates who can actually do the job.
                </motion.p>
            </div>
        </section>
    );
}
