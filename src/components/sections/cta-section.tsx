import Link from 'next/link';

export function CTASection() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-white/5 rounded-3xl p-12 md:p-20 text-center text-gray-900 dark:text-white relative overflow-hidden border border-gray-200 dark:border-white/10">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                        Stop hiring cheaters.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                        Start using TalentLyt today and ensure the integrity of your technical hiring process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/request-demo"
                            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-90 transition-colors shadow-lg"
                        >
                            Get a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="px-8 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>

                {/* Abstract shapes background */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>
        </section>
    );
}
