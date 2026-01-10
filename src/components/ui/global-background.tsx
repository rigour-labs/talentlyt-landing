'use client';

import React from 'react';
import { BlueParticles } from './blue-particles';

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 bg-background">
            <BlueParticles />
            {/* Consistent global glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-20">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-highlight/10 blur-[100px] rounded-full" />
            </div>
        </div>
    );
}
