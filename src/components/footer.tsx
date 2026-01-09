import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-border bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">

                        <span className="text-sm font-bold text-primary">
                            Talent<span className="text-text-secondary">Lyt</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-8 text-sm font-medium text-secondary">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="text-xs text-text-muted">
                        © {new Date().getFullYear()} TalentLyt Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
