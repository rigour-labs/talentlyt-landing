interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
    const sizes = {
        sm: { icon: 28, text: 'text-lg' },
        md: { icon: 32, text: 'text-xl' },
        lg: { icon: 40, text: 'text-2xl' },
    };

    const { icon, text } = sizes[size];

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Logo Icon */}
            <svg
                width={icon}
                height={icon}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066FF" />
                        <stop offset="100%" stopColor="#0052CC" />
                    </linearGradient>
                </defs>

                {/* Background */}
                <rect width="40" height="40" rx="10" fill="url(#logoGradient)" />

                {/* T letter */}
                <path d="M9 11H31V15.5H22.5V31H17.5V15.5H9V11Z" fill="white" />

                {/* Detection dot with rings */}
                <circle cx="32" cy="28" r="2.5" fill="white" />
                <circle cx="32" cy="28" r="4.5" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
                <circle cx="32" cy="28" r="6.5" fill="none" stroke="white" strokeWidth="0.75" opacity="0.2" />
            </svg>

            {/* Wordmark */}
            {showText && (
                <span className={`${text} font-bold tracking-tight`}>
                    <span className="text-white">Talent</span>
                    <span className="text-brand">Lyt</span>
                </span>
            )}
        </div>
    );
}

// Icon-only version for favicons, social media, etc.
export function LogoIcon({ size = 40, className = '' }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066FF" />
                    <stop offset="100%" stopColor="#0052CC" />
                </linearGradient>
            </defs>

            <rect width="40" height="40" rx="10" fill="url(#logoIconGradient)" />
            <path d="M9 11H31V15.5H22.5V31H17.5V15.5H9V11Z" fill="white" />
            <circle cx="32" cy="28" r="2.5" fill="white" />
            <circle cx="32" cy="28" r="4.5" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
            <circle cx="32" cy="28" r="6.5" fill="none" stroke="white" strokeWidth="0.75" opacity="0.2" />
        </svg>
    );
}
