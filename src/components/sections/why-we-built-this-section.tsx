'use client';

import { useRef } from 'react';

export function WhyWeBuiltThisSection() {
    const ref = useRef(null);

    return (
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24 bg-muted border-y border-border" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="sr-only">Our Mission & Why We Built Rigovo</h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-primary text-balance mb-3 sm:mb-4 px-2">
                    "Technical hiring is harder than ever. We built <span className="text-brand">Rigovo</span> to give engineering teams an AI co-pilot that handles screening while they focus on what matters—finding the right culture fit."
                </p>
                <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto px-2">
                    Every bad hire costs your team time and morale. Rigovo <span className="text-white font-bold">augments your hiring process</span> with AI-verified insights so you can make confident decisions faster.
                </p>
            </div>
        </section>
    );
}
