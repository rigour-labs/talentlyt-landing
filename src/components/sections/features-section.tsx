import { Shield, Code } from 'lucide-react';

export function FeaturesSection() {
    const features = [
        {
            title: 'Real-time Monitoring',
            description: 'Our AI visually analyzes candidate behavior for potential integrity violations in real-time.',
            icon: <Shield className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: 'Independent Evaluation',
            description: 'Separate AI agents for interviewing and monitoring ensure zero bias in scoring.',
            icon: <Code className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: 'Code Playback',
            description: 'Watch the entire coding session keystroke by keystroke to understand thought process.',
            icon: <Code className="w-6 h-6" />,
            className: "md:col-span-1",
        },
        {
            title: 'Detailed Skill Reports',
            description: 'Get a granular breakdown of technical skills, communication, and problem-solving abilities immediately after the interview.',
            icon: <Shield className="w-6 h-6" />,
            className: "md:col-span-2",
        },
    ];

    return (
        <section id="features" className="py-24 px-6 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">Everything you need to hire confidentally</h2>
                    <p className="text-secondary text-lg max-w-2xl">
                        TalentLyt provides a complete ecosystem for technical assessment, from cheat detection to deep skill analysis.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-black hover:shadow-lg hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300 group ${feature.className}`}
                        >
                            <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-xl border border-gray-100 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <div className="text-primary dark:text-white">{feature.icon}</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
