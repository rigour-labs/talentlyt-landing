import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TalentLyt — AI-Powered Interview Intelligence with Real-Time Integrity Monitoring',
  description:
    'Production-grade B2B platform for AI-powered technical interviews with real-time behavioral analysis and automated audit reports. Trusted by leading tech companies.',
  keywords: [
    'AI interview',
    'technical interview',
    'hiring platform',
    'integrity monitoring',
    'remote interview',
    'behavioral analysis',
    'interview automation',
    'B2B hiring',
  ],
  openGraph: {
    title: 'TalentLyt — AI-Powered Interview Intelligence',
    description: 'Conduct technical interviews with real-time integrity monitoring',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentLyt — AI-Powered Interview Intelligence',
    description: 'Conduct technical interviews with real-time integrity monitoring',
  },
};

import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
