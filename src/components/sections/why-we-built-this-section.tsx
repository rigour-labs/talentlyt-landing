'use client';

import { useRef } from 'react';

export function WhyWeBuiltThisSection() {
    const ref = useRef(null);

    return (
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-muted border-y border-border" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="sr-only">Our Mission & Why We Built TalentLyt</h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-primary text-balance mb-3 sm:mb-4 px-2">
                    "Traditional technical hiring is broken. We built the leading <span className="text-brand">AI Interview Platform</span> because we saw engineering teams struggling to filter candidates in an AI-accelerated world."
                </p>
                <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto px-2">
                    Every bad hire costs your team time and morale. Our <span className="text-white font-bold">AI Interview</span> technology ensures you only hire candidates who can actually do the job.
                </p>
            </div>
        </section>
    );
}
