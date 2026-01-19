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
    default: 'TalentLyt — #1 AI Interview Platform for Technical Hiring | Integrity Verification',
    template: '%s | TalentLyt - AI Interview Platform'
  },
  description:
    'TalentLyt is the leading AI interview platform for technical hiring. Our Multi-Agent AI (Maya + Forensic Engine) conducts and verifies interviews in real-time. Reduce hiring bias by 80%, cut interview time by 75%. Trusted by engineering teams worldwide.',
  keywords: [
    'AI interview platform',
    'AI interview software',
    'technical interview automation',
    'AI technical interview',
    'automated interview platform',
    'video interview software',
    'technical screening software',
    'AI recruiting tools',
    'interview cheating detection',
    'remote interview proctoring',
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
    'technical assessment tool',
    'interview fraud detection',
    'AI hiring platform',
    'technical interview AI'
  ],
  alternates: {
    canonical: 'https://talentlyt.cloud',
    languages: {
      'en-US': 'https://talentlyt.cloud',
      'en': 'https://talentlyt.cloud',
      'x-default': 'https://talentlyt.cloud',
    },
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
    title: 'TalentLyt | #1 AI Interview Platform for Technical Hiring',
    description: 'The leading AI interview platform. Multi-Agent AI conducts and verifies technical interviews in real-time. Reduce bias 80%, hire 5x faster.',
    url: 'https://talentlyt.cloud',
    siteName: 'TalentLyt - AI Interview Platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TalentLyt AI Interview Platform - Maya AI conducting a technical interview with real-time integrity verification',
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
                  '@type': 'Organization',
                  'name': 'TalentLyt',
                  'alternateName': 'TalentLyt AI Interview Platform',
                  'url': 'https://talentlyt.cloud',
                  'logo': 'https://talentlyt.cloud/logo.png',
                  'description': 'TalentLyt is the leading AI interview platform for technical hiring, featuring Multi-Agent AI with real-time integrity verification.',
                  'foundingDate': '2024',
                  'sameAs': [
                    'https://twitter.com/talentlyt',
                    'https://linkedin.com/company/talentlyt',
                    'https://github.com/rigour-labs'
                  ],
                  'contactPoint': {
                    '@type': 'ContactPoint',
                    'email': 'hello@talentlyt.cloud',
                    'contactType': 'sales'
                  }
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
                        'text': 'An AI interview platform uses artificial intelligence to conduct, evaluate, and verify technical interviews, providing a more objective and efficient hiring process. TalentLyt is the leading AI interview platform that combines Multi-Agent AI technology with forensic-grade integrity verification.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does TalentLyt ensure integrity in AI interviews?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'TalentLyt uses a Multi-Agent AI system featuring Maya (Conversational Lead) and a Forensic Engine to detect anomalies, proxy actors, and LLM assistance in real-time. Our Vision-Sync and Cognitive-Audit systems provide sub-millisecond consensus verification.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Can AI interviews reduce hiring bias?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes, AI interviews like those conducted by TalentLyt use standardized scoring based on technical truth, reducing human subconscious bias by up to 80%. Our forensic approach ensures every candidate is evaluated objectively.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How is TalentLyt different from HireVue or Codility?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'TalentLyt is the only AI interview platform with Multi-Agent consensus verification. While other platforms focus on assessment, TalentLyt uniquely combines adaptive AI interviews with forensic integrity verification to detect cheating, proxy actors, and AI-assisted responses in real-time.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'What is interview integrity verification?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Interview integrity verification is the process of ensuring that a candidate is who they claim to be and is completing the assessment authentically. TalentLyt provides forensic-grade verification through behavioral analysis, gaze tracking, and cognitive pattern detection.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Is TalentLyt suitable for enterprise technical hiring?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes, TalentLyt is designed for enterprise-scale technical hiring. We offer SOC2 compliance, legally-defensible audit trails, and can handle high-volume recruitment with consistent quality and integrity verification.'
                      }
                    }
                  ]
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'HowTo',
                  'name': 'How to Conduct AI Interviews with TalentLyt',
                  'description': 'Learn how to use TalentLyt AI interview platform for technical hiring with integrity verification.',
                  'step': [
                    {
                      '@type': 'HowToStep',
                      'name': 'Create Interview',
                      'text': 'Set up a technical interview with your requirements and job role specifications.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'AI Conducts Interview',
                      'text': 'Maya AI conducts an adaptive technical conversation while the Forensic Engine monitors integrity in real-time.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'Review Results',
                      'text': 'Access the comprehensive audit trail with integrity scores, code playback, and AI-generated assessments.'
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
