'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '@/lib/breadcrumb-utils';

// Re-export the type for convenience
export type { BreadcrumbItem } from '@/lib/breadcrumb-utils';

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
            <Link
                href="/"
                className="text-text-muted hover:text-brand transition-colors flex items-center gap-1"
                aria-label="Home"
            >
                <Home className="w-3.5 h-3.5" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-text-muted/50" aria-hidden="true" />
                    {item.href && index < items.length - 1 ? (
                        <Link
                            href={item.href}
                            className="text-text-muted hover:text-brand transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white font-medium" aria-current="page">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
