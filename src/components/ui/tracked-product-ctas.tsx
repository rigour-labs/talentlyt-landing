'use client';

import React from 'react';
import { CTAButton } from '@/components/ui/cta-button';

export function TrackedProductCTAs() {
    return (
        <div className="flex justify-center">
            <CTAButton location="product" className="px-12 py-5 text-sm" />
        </div>
    );
}
