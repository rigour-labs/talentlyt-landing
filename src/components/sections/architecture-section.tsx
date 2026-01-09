import { Shield } from 'lucide-react';

export function ArchitectureSection() {
    return (
        <section id="architecture" className="px-6 py-24 bg-gray-50 dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">
                            Two agents are better than one
                        </h2>
                        <p className="text-lg text-secondary mb-8 leading-relaxed">
                            We separate the role of the interviewer from the evaluator. This ensures that the conversation remains natural while rigorous checks happen in the background.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: 'Maya (Interviewer)', desc: 'Conducts the conversation, asks follow-up questions, and ensures a great candidate experience.' },
                                { title: 'Governor (Monitor)', desc: 'Silently observes the session, checking for integrity violations and evaluating technical accuracy.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1.5 h-full rounded-full bg-gray-200 dark:bg-white/10 mt-1"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                        <p className="text-secondary">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        {/* Visual representation of the architecture */}
                        <div className="aspect-square rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center p-12 relative animate-spin-slow">
                            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-white/20 animate-spin-reverse-slow"></div>
                            <div className="text-center">
                                <Shield className="w-16 h-16 mx-auto text-primary mb-4" />
                                <div className="text-xs font-mono text-gray-400">SECURE_ENVIRONMENT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
