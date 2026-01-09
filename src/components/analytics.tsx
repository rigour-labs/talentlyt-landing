'use client';

import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        mixpanel.init('5656c096201749445d78499f08c636fb', {
            autocapture: true,
            record_sessions_percent: 100,
            debug: process.env.NODE_ENV === 'development',
        });
    }, []);

    return <>{children}</>;
}
