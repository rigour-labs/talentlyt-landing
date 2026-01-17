import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://talentlyt.cloud'),
  title: {
    default: 'TalentLyt — AI Technical Interview Platform with Integrity Verification',
    template: '%s | TalentLyt'
  },
  description:
    'The gold standard for high-stakes technical hiring. Multi-Agent AI interviews featuring Maya (Conversational Lead) and a Legal-Advisor Forensic Engine (Integrity Verification). Ensure integrity, reduce bias by 80%, cut interview overhead by 75%.',
  keywords: [
    'AI interview platform',
    'technical interview automation',
    'Forensic Engine AI',
    'Maya AI interviewer',
    'integrity verification hiring',
    'multi-agent interview system',
    'B2B recruitment software',
    'forensic technical assessment',
    'interview integrity software',
    'automated technical screening',
    'AI coding interview',
    'enterprise hiring solution',
    'bias-free hiring platform',
    'remote interview integrity',
    'technical assessment tool'
  ],
  alternates: {
    canonical: 'https://talentlyt.cloud',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'TalentLyt — Truth in Hiring, Verified by Forensic Intelligence',
    description: 'World\'s first Multi-Agent technical interview suite. Maya conducts adaptive AI interviews while our Forensic Engine verifies integrity in real-time.',
    url: 'https://talentlyt.cloud',
    siteName: 'TalentLyt',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TalentLyt — AI Interview Platform with Integrity Verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentLyt — High-Stakes Hiring with Forensic Auditing',
    description: 'Multi-Agent AI technical interview suite. Maya conducts, the Forensic Engine verifies. Ensure integrity with forensic-grade verification.',
    images: ['/og-image.png'],
    creator: '@talentlyt',
  },
  category: 'Technology',
  other: {
    'apple-mobile-web-app-title': 'TalentLyt',
    'application-name': 'TalentLyt',
    'msapplication-TileColor': '#4f46e5',
    'theme-color': '#020617',
  }
};

import { ThemeProvider } from '@/components/theme-provider';
import { AnalyticsProvider } from '@/components/analytics';
import { GlobalBackground } from '@/components/ui/global-background';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <AnalyticsProvider>
          {/* SEO JSON-LD scripts... */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
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
                  featureList: 'Integrity Verification, Automated Quality Auditor, Vision-Sync Multi-modal Context, Cognitive-Audit Reasoning Stream, Code Playback',
                  copyrightYear: new Date().getFullYear(),
                  author: {
                    '@type': 'Organization',
                    name: 'Rigour Labs Inc.',
                    url: 'https://talentlyt.cloud',
                    logo: 'https://talentlyt.cloud/logo.png',
                    sameAs: [
                      'https://twitter.com/talentlyt',
                      'https://github.com/rigour-labs'
                    ]
                  }
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'Brand',
                  name: 'TalentLyt',
                  alternateName: 'TalentLyt AI',
                  description: 'High-fidelity technical interview intelligence powered by multi-agent consensus.',
                  logo: 'https://talentlyt.cloud/logo.png',
                  url: 'https://talentlyt.cloud'
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'Service',
                  serviceType: 'AI Technical Interviewing',
                  provider: {
                    '@type': 'Organization',
                    name: 'Rigour Labs Inc.'
                  },
                  areaServed: 'Worldwide',
                  description: 'Forensic-grade technical screening using the Sentinel Hierarchy (Vision-Sync + Cognitive-Audit).'
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  'itemListElement': [
                    {
                      '@type': 'ListItem',
                      'position': 1,
                      'name': 'Home',
                      'item': 'https://talentlyt.cloud/'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 2,
                      'name': 'Pricing',
                      'item': 'https://talentlyt.cloud/pricing'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 3,
                      'name': 'About',
                      'item': 'https://talentlyt.cloud/about'
                    }
                  ]
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  'mainEntity': [
                    {
                      '@type': 'Question',
                      'name': 'What is an AI Interview Platform?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'An AI interview platform uses artificial intelligence to conduct, evaluate, and verify technical interviews, providing a more objective and efficient hiring process.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does TalentLyt ensure integrity in AI interviews?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'TalentLyt uses a Multi-Agent AI system and forensic auditing to detect anomalies, proxy actors, and LLM assistance in real-time.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Can AI interviews reduce hiring bias?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes, AI interviews like those conducted by TalentLyt use standardized scoring based on technical truth, reducing human subconscious bias by up to 80%.'
                      }
                    }
                  ]
                }
              ]),
            }}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <GlobalBackground />
            {children}
          </ThemeProvider>
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  );
}
