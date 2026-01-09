import Link from 'next/link';

export default function RequestDemoPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-4">Request a Demo</h1>
            <p className="text-lg text-secondary mb-8">This page is under construction.</p>
            <Link href="/" className="text-primary hover:underline">
                &larr; Back to Home
            </Link>
        </div>
    );
}
