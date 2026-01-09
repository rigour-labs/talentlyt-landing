export function HowItWorksSection() {
    const steps = [
        {
            title: 'Schedule',
            description: 'Create an interview link in seconds. Send it to the candidate.',
        },
        {
            title: 'Interview',
            description: 'Candidate joins the session. Maya conducts the interview while the Automated Quality Auditor verifies integrity.',
        },
        {
            title: 'Analyze',
            description: 'Review the recording, integrity insights, and skill breakdown immediately after.',
        },
    ];

    return (
        <section id="how-it-works" className="px-6 py-24 bg-background border-b border-border">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">Simple workflow, powerful results</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary mb-6 shadow-sm">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
