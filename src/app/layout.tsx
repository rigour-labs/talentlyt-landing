import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TalentLyt — AI-Powered Interview Intelligence with Integrity Verification',
  description:
    'Production-grade B2B platform for AI-powered technical interviews with real-time behavioral insights and automated audit reports. Trusted by leading tech companies.',
  keywords: [
    'AI interview',
    'technical interview',
    'hiring platform',
    'integrity verification',
    'remote interview',
    'behavioral analysis',
    'interview automation',
    'B2B hiring',
  ],
  openGraph: {
    title: 'TalentLyt — AI-Powered Interview Intelligence',
    description: 'Conduct technical interviews with integrity verification',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'TalentLyt',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free Trial Available'
              },
              description: 'AI-powered technical interview platform with integrity verification and bias-minimized evaluation.',
              featureList: 'Integrity Verification, Automated Quality Auditor, Accommodation Mode, Code Playback, Skill Reports',
              copyrightYear: new Date().getFullYear(),
              author: {
                '@type': 'Organization',
                name: 'TalentLyt Inc.'
              }
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
