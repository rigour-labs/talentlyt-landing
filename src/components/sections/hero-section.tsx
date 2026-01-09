import Link from 'next/link';
import { BlueParticles } from '@/components/ui/blue-particles';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden">
            <BlueParticles />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">

                    {/* Removed text-balance and tweaked colors for better contrast */}
                    {/* Gold shimmer effect */}
                    <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-highlight to-text-primary dark:from-foreground dark:via-highlight dark:to-foreground animate-text-shimmer bg-[length:200%_auto] opacity-100 transform-none">
                        The standard for <br /> <span className="text-text-secondary">engineering hiring</span>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
                        Conduct technical interviews with integrity verification.
                        Automated reports, playback, and skill assessment in one platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link
                            href="/request-demo"
                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="/live-demo"
                            className="w-full sm:w-auto px-8 py-3.5 bg-card text-foreground border border-border text-sm font-semibold rounded-xl hover:bg-muted transition-all"
                        >
                            View Live Demo
                        </Link>
                    </div>
                </div>



                {/* Social Proof */}
                {/* Social Proof */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center gap-8 max-w-full overflow-hidden">
                    <p className="text-sm text-text-secondary font-medium whitespace-nowrap shrink-0">Trusted by engineering teams at</p>

                    <div className="flex-1 overflow-hidden relative w-full mask-linear-fade">
                        <div className="flex gap-12 animate-scroll items-center">
                            {/* First set of logos */}
                            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                <span key={`1-${company}-${i}`} className="text-lg font-bold text-text-muted hover:text-text-secondary transition-colors cursor-default whitespace-nowrap px-4">{company}</span>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion', 'Apex', 'Horizon', 'Synergy'].map((company, i) => (
                                <span key={`2-${company}-${i}`} className="text-lg font-bold text-text-muted hover:text-text-secondary transition-colors cursor-default whitespace-nowrap px-4">{company}</span>
                            ))}
                        </div>
                        {/* Gradient masks for smooth fade edges */}
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
