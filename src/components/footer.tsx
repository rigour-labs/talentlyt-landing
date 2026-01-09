import Link from 'next/link';
import { Shield } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white dark:text-black">
                            <Shield className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-bold text-primary">TalentLyt</span>
                    </div>
                    <div className="flex items-center gap-8 text-sm font-medium text-secondary">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="text-xs text-gray-400">
                        © {new Date().getFullYear()} TalentLyt Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
