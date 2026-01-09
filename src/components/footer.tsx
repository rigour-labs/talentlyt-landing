import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-primary">
                            Talent<span className="text-text-secondary">Lyt</span>
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-secondary">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="text-[10px] sm:text-xs text-text-muted text-center md:text-left">
                        © {new Date().getFullYear()} TalentLyt Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
