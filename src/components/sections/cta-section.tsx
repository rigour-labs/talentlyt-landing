import Link from 'next/link';

export function CTASection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto bg-muted rounded-3xl p-12 md:p-20 text-center text-foreground relative overflow-hidden border border-border">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                        Stop hiring cheaters.
                    </h2>
                    <p className="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
                        Start using TalentLyt today and ensure the integrity of your technical hiring process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/request-demo"
                            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-colors shadow-lg"
                        >
                            Get a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-colors"
                        >
                            View Pricing
                        </Link>
                    </div>

                    <div className="mt-8 text-xs text-text-secondary max-w-2xl mx-auto space-y-2 text-balance opacity-80">
                        <p>
                            * By using TalentLyt, you acknowledge that our AI agents provide assessment support based on observable metrics.
                            TalentLyt is not a substitute for human judgment. We process data in compliance with GDPR/DPDPA.
                        </p>
                        <p>
                            For more information on how we handle biometric and behavioral data, see our <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link> and <Link href="/ethics" className="underline hover:text-foreground">AI Ethics Disclosure</Link>.
                        </p>
                    </div>
                </div>

                {/* Abstract shapes background */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-foreground/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>
        </section>
    );
}
