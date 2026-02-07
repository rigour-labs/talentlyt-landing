import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#020617',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rigovo.com'),
  title: {
    default: 'Rigovo — AI Interview Co-Pilot for Technical Hiring | Not Talently or TalentLyft',
    template: '%s | Rigovo'
  },
  description:
    'Your AI co-pilot for technical hiring. Maya AI handles screening while you focus on culture fit. Multi-signal verification ensures candidates demonstrate genuine technical ability. Beta: 6,824 signal events analyzed across 82 interviews.',
  keywords: [
    // Primary high-intent keywords
    'AI interview platform',
    'AI interview software',
    'technical interview platform',
    'automated interview software',
    // Direct competitor differentiation (similar names)
    'Talently.ai alternative',
    'TalentLyft alternative',
    'HeyMilo AI alternative',
    // Major competitor comparison
    'HireVue alternative',
    'Codility alternative',
    'HackerRank alternative',
    'Karat alternative',
    'CoderPad alternative',
    // Unique differentiators (AI leadership verification - what others lack)
    'interview AI verification',
    'AI leadership verification',
    'candidate identity verification',
    'interview authenticity verification',
    'AI proctoring with verification',
    'candidate identity verification',
    'remote interview proctoring',
    // Solution keywords
    'AI technical assessment',
    'automated coding interview',
    'AI coding assessment',
    'technical screening automation',
    'developer assessment platform',
    'engineering interview software',
    // Feature keywords (unique capabilities)
    'interview integrity verification',
    'multi-agent AI interview',
    'predictive hiring AI',
    'job success prediction AI',
    'candidate verification AI',
    // Brand keywords (exact match for brand searches)
    'Rigovo',
    'Rigovo AI',
    'Rigovo interview platform',
    'TalentLyt',
    'TalentLyt alternative',
    'formerly TalentLyt',
    'Maya AI interviewer',
    'Interview Genome',
    '15-signal verification',
    // Long-tail high-intent
    'best AI interview platform 2025',
    'AI interview with verification',
    'enterprise technical hiring software',
    'SOC2 compliant interview platform',
    'free AI interview trial',
  ],
  alternates: {
    canonical: 'https://rigovo.com',
    languages: {
      'en-US': 'https://rigovo.com',
      'en': 'https://rigovo.com',
      'x-default': 'https://rigovo.com',
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
    title: 'Rigovo — Your AI Co-Pilot for Technical Hiring',
    description: 'Maya AI handles technical screening while you focus on culture fit. 15-signal verification ensures candidates lead AI, not follow it. Beta: 6,824 signal events analyzed across 82 interviews.',
    url: 'https://rigovo.com',
    siteName: 'Rigovo - AI Interview Co-Pilot',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rigovo AI Co-Pilot - Maya AI assists your hiring team with technical screening and AI leadership verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rigovo — Your AI Co-Pilot for Technical Hiring',
    description: 'Interview smarter, hire faster. Maya AI handles screening while you focus on culture fit. 15-signal AI leadership verification. Beta: 6,824 signal events analyzed across 82 interviews.',
    images: ['/og-image.png'],
    creator: '@rigovo',
  },
  category: 'Technology',
  other: {
    'apple-mobile-web-app-title': 'Rigovo',
    'application-name': 'Rigovo',
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
      <head>
        {/* Cookiebot Consent Management */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="0210fd29-f139-4115-8bcb-48a2e4e4363e"
          type="text/javascript"
          async
        />

        {/* Google Tag (gtag.js) - GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TK1KFTDDED" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TK1KFTDDED');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N7NNWLBD');
            `,
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical hero image for LCP */}
        <link rel="preload" as="image" href="/assets/maya.jpg" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7NNWLBD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
                  name: 'Rigovo',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                    description: 'Get The Pilot Pack for FREE with Promotional Coupon'
                  },
                  description: 'Rigovo is your AI co-pilot for technical hiring. Maya AI handles screening while you focus on culture fit. Beta: 6,824 signal events analyzed, 41% required deeper review. Features 15-signal AI leadership verification and Job Success Prediction.',
                  featureList: '15-Signal Verification, 6824 Signal Events Analyzed in Beta, 41% Required Deeper Review, Automated Quality Auditor, Predictive Competency Mapping, Interview Genome, Code Playback',
                  copyrightYear: new Date().getFullYear(),
                  author: {
                    '@type': 'Organization',
                    name: 'Rigour Labs Inc.',
                    url: 'https://rigovo.com',
                    logo: 'https://rigovo.com/logo.png',
                    sameAs: [
                      'https://twitter.com/rigovo',
                      'https://github.com/rigour-labs'
                    ]
                  }
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'Brand',
                  name: 'Rigovo',
                  alternateName: ['Rigovo AI', 'TalentLyt'],
                  description: 'High-fidelity technical interview intelligence powered by multi-agent consensus. Formerly known as TalentLyt.',
                  logo: 'https://rigovo.com/logo.png',
                  url: 'https://rigovo.com'
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
                  description: 'High-integrity technical screening using the Sentinel Hierarchy (15-signal verification + Predictive Competency Mapping).'
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  'itemListElement': [
                    {
                      '@type': 'ListItem',
                      'position': 1,
                      'name': 'Home',
                      'item': 'https://rigovo.com/'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 2,
                      'name': 'Blog',
                      'item': 'https://rigovo.com/blog'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 3,
                      'name': 'Compare',
                      'item': 'https://rigovo.com/compare'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 4,
                      'name': 'Pricing',
                      'item': 'https://rigovo.com/pricing'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 5,
                      'name': 'About',
                      'item': 'https://rigovo.com/about'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 6,
                      'name': 'Contact',
                      'item': 'https://rigovo.com/contact'
                    }
                  ]
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'Organization',
                  'name': 'Rigovo',
                  'alternateName': ['Rigovo AI Interview Co-Pilot', 'TalentLyt'],
                  'url': 'https://rigovo.com',
                  'logo': 'https://rigovo.com/logo.png',
                  'description': 'Rigovo (formerly TalentLyt) is your AI co-pilot for technical hiring. Maya AI handles screening while your team focuses on culture fit. 15-signal AI leadership verification. Beta: 6,824 signal events analyzed.',
                  'foundingDate': '2025',
                  'sameAs': [
                    'https://twitter.com/rigovo',
                    'https://linkedin.com/company/rigovo',
                    'https://github.com/rigour-labs'
                  ],
                  'contactPoint': {
                    '@type': 'ContactPoint',
                    'email': 'hello@rigovo.com',
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
                        'text': 'An AI interview co-pilot assists your hiring team by handling technical screening while you focus on culture fit. Rigovo combines Maya AI with 15-signal AI leadership verification, Job Success Prediction, and the Interview Genome—keeping you in control of every hiring decision. Beta: 6,824 signal events analyzed across 82 interviews.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does Rigovo ensure integrity in AI interviews?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo uses a Multi-Agent AI system featuring Maya (Conversational Lead) and a Forensic Engine to verify authentic problem-solving and AI leadership in real-time. Our Vision-Sync and Cognitive-Audit systems provide sub-millisecond consensus verification.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Can AI interviews reduce hiring bias?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes, Rigovo provides consistent AI-assisted scoring that complements your team\'s judgment, helping reduce evaluation variance by up to 80%. Your hiring team stays in control while getting data-driven insights.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How is Rigovo different from HireVue or Codility?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo is an AI interview platform with Multi-Agent consensus verification. While other platforms focus on assessment, Rigovo combines adaptive AI interviews with forensic integrity verification to ensure candidates lead AI—proving they are architects, not passengers.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'What is interview integrity verification?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Interview integrity verification ensures candidates are authentic and demonstrating genuine technical leadership. Rigovo provides verification through behavioral analysis, gaze tracking, and cognitive pattern analysis to ensure candidates architect solutions, not just prompt them.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Is Rigovo suitable for enterprise technical hiring?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes, Rigovo is designed for enterprise-scale technical hiring. We offer SOC2 compliance, legally-defensible audit trails, and can handle high-volume recruitment with consistent quality and integrity verification.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does Rigovo verify identity in interviews?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo uses 15-signal verification including lip-sync analysis, voice biometrics, facial recognition consistency, and video feed analysis to verify candidate identity in real-time. Our Governor agent ensures the person you interview is the person you hire.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'What is the difference between Rigovo and Talently.ai?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo and Talently.ai are different products. Rigovo provides 15-signal AI leadership verification and identity verification that Talently.ai lacks. Rigovo also offers Interview Genome (portable verified profiles) and 85% accurate job success prediction.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Can Rigovo verify candidate identity?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes. Rigovo verifies candidate identity through continuous verification, voice biometrics, behavioral analysis, and cognitive pattern analysis. The system ensures the person being interviewed maintains consistent identity throughout the session.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does Rigovo verify AI leadership vs AI following?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo verifies AI leadership through keystroke dynamics, response timing patterns, problem-solving approach analysis, and cognitive load indicators. The system ensures candidates architect solutions rather than simply prompt AI tools for answers.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How is Rigovo different from InterviewGuard or Talview?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo combines AI interviewing (Maya AI) with AI leadership verification in one platform. InterviewGuard and Talview focus on proctoring existing interviews. Rigovo conducts the entire interview autonomously while simultaneously verifying authenticity with 15 signals.'
                      }
                    }
                  ]
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'HowTo',
                  'name': 'How to Verify AI Leadership with Rigovo',
                  'description': 'Learn how to verify candidates lead AI rather than follow it using Rigovo 15-signal AI leadership verification.',
                  'step': [
                    {
                      '@type': 'HowToStep',
                      'name': 'Enable AI Leadership Verification',
                      'text': 'Rigovo automatically enables 15-signal verification including problem-solving analysis, voice biometrics, and gaze tracking.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'AI Verifies in Real-Time',
                      'text': 'The Governor agent continuously verifies authentic problem-solving, identity consistency, and AI leadership throughout the interview.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'Review Verification Report',
                      'text': 'Access detailed reports showing verification scores, AI collaboration patterns, and recommendations.'
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
