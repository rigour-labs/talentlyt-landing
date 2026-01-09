export function StatsSection() {
    const stats = [
        { value: '<0.1%', label: 'False positive rate' },
        { value: '10k+', label: 'Interviews secured' },
        { value: '200+', label: 'Growth companies' },
        { value: '99.9%', label: 'Uptime SLA' },
    ];

    return (
        <section className="px-6 py-20 border-b border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl font-bold tracking-tighter text-primary mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-secondary uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
