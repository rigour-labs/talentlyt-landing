interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
    const sizes = {
        sm: { icon: 32, text: 'text-lg' },
        md: { icon: 40, text: 'text-xl' },
        lg: { icon: 48, text: 'text-2xl' },
    };

    const { icon, text } = sizes[size];

    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <TalentLytIcon size={icon} />
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
    return <TalentLytIcon size={size} className={className} />;
}

/**
 * TalentLyt brand icon — stylized eye/shield with connected node
 * Recreates the official brand mark: geometric shield with eye,
 * crescent iris, and a connected data node
 */
function TalentLytIcon({ size = 40, className = '' }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 ${className}`}
        >
            {/* Shield — back facet */}
            <path
                d="M8 50L26 14L55 8L60 48L55 82L26 78Z"
                stroke="#3D4F5F"
                strokeWidth="4.5"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Shield — front facet (dimensional overlap) */}
            <path
                d="M18 48L32 14L58 10L62 48L58 82L32 78Z"
                stroke="#4A5D6E"
                strokeWidth="3"
                strokeLinejoin="round"
                fill="none"
                opacity="0.4"
            />

            {/* Eye — outer ring */}
            <circle
                cx="44"
                cy="48"
                r="18"
                stroke="#3D4F5F"
                strokeWidth="5.5"
                fill="none"
            />

            {/* Iris — crescent fill */}
            <path
                d="M36 36C28 44 30 58 40 64C32 60 26 50 29 41C30 36 34 33 36 36Z"
                fill="#5BA3D9"
                opacity="0.85"
            />

            {/* Iris — crescent arc */}
            <path
                d="M38 37C31 44 31 58 38 64"
                stroke="#5BA3D9"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* Connection line to node */}
            <line
                x1="62"
                y1="40"
                x2="78"
                y2="28"
                stroke="#3D4F5F"
                strokeWidth="3.5"
                strokeLinecap="round"
            />

            {/* Node — outer ring */}
            <circle
                cx="86"
                cy="22"
                r="11"
                stroke="#3D4F5F"
                strokeWidth="3.5"
                fill="none"
            />

            {/* Node — inner filled */}
            <circle
                cx="86"
                cy="22"
                r="7"
                fill="#5BA3D9"
            />
        </svg>
    );
}
