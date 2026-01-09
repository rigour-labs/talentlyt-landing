import { Shield, Code } from 'lucide-react';

export function FeaturesSection() {
    const features = [
        {
            title: 'Integrity Verification',
            description: 'Data-driven insights for high-integrity hiring, visually identifying potential irregularities with candidate consent.',
            icon: <Shield className="w-6 h-6" />,
            className: "md:col-span-2",
        },
        {
            title: 'Independent Evaluation',
            description: 'Separate AI agents for interviewing and monitoring designed to minimize human and algorithmic bias.',
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
        {
            title: 'Fairness & Accessibility',
            description: 'Includes an "Accommodation Mode" for candidates with disabilities to ensure fair assessment regardless of physical or neurological differences.',
            icon: <Shield className="w-6 h-6" />, // Using Shield for now, maybe Heart or User is better if available? Shield is generic/safe.
            className: "md:col-span-1",
        },
        {
            title: 'Data Privacy & Control',
            description: 'Recordings are encrypted and automatically deleted after a set period. Candidates retain rights to their assessment data.',
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

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-sm text-secondary">
                    <p className="mb-2"><strong>Note on AI Decision Support:</strong> TalentLyt acts as a decision-support tool providing data-driven insights. Final hiring authority remains solely with the employer's human HR team.</p>
                    <p>All monitoring is conducted only with the candidate's prior, explicit consent and is used solely for validating session integrity.</p>
                </div>
            </div>
        </section>
    );
}
