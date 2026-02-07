import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Login | Rigovo Platform',
    description: 'Login to your Rigovo account to manage interviews, view integrity reports, and access your hiring dashboard.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <p className="text-lg text-secondary mb-8">This page is under construction.</p>
            <Link href="/" className="text-primary hover:underline">
                &larr; Back to Home
            </Link>
        </div>
    );
}
