'use client';

import { useRef } from 'react';

export function WhyWeBuiltThisSection() {
    const ref = useRef(null);

    return (
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-muted border-y border-border" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="sr-only">Our Mission & Why We Built TalentLyt</h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-primary text-balance mb-3 sm:mb-4 px-2">
                    "Remote interviews are broken. We built TalentLyt because we saw great engineering teams struggling to filter candidates who were gaming the system."
                </p>
                <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto px-2">
                    Every bad hire costs your team time, money, and morale. TalentLyt ensures you only hire candidates who can actually do the job.
                </p>
            </div>
        </section>
    );
}
