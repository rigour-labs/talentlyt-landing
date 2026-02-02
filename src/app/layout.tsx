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
  metadataBase: new URL('https://talentlyt.cloud'),
  title: {
    default: 'TalentLyt — AI Interview Platform with Fraud Detection | Not Talently or TalentLyft',
    template: '%s | TalentLyt'
  },
  description:
    'AI interview platform with real-time fraud detection. Catch deepfakes, proxy candidates & cheating. 13-signal integrity verification.',
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
    // Unique differentiators (fraud detection - what others lack)
    'interview fraud detection',
    'detect interview cheating',
    'prevent proxy interviews',
    'deepfake detection hiring',
    'AI proctoring with fraud detection',
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
    'proxy candidate detection',
    // Brand keywords (exact match for brand searches)
    'TalentLyt',
    'TalentLyt AI',
    'TalentLyt interview platform',
    'Maya AI interviewer',
    'Interview Genome',
    '13-signal verification',
    // Long-tail high-intent
    'best AI interview platform 2025',
    'AI interview with fraud detection',
    'enterprise technical hiring software',
    'SOC2 compliant interview platform',
    'free AI interview trial',
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
    title: 'TalentLyt — AI Interview Platform for Technical Hiring',
    description: 'AI-powered technical interview platform with real-time integrity verification. Conduct, evaluate, and verify candidate skills with Multi-Agent AI.',
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
    title: 'TalentLyt — High-Stakes Hiring with Technical Verification',
    description: 'Multi-Agent AI technical interview suite. Maya conducts, the Verification Engine confirms depth. Ensure integrity with 13-signal verification.',
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

        {/* Google Reader Revenue Manager */}
        <script async src="https://news.google.com/swg/js/v1/swg-basic.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (self.SWG_BASIC = self.SWG_BASIC || []).push(function(basicSubscriptions) {
                basicSubscriptions.init({
                  type: "NewsArticle",
                  isPartOfType: ["Product"],
                  isPartOfProductId: "CAowm5zEDA:openaccess",
                  clientOptions: { theme: "light", lang: "en-GB" },
                });
              });
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
                  name: 'TalentLyt',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'Web',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                    description: 'Get The Pilot Pack for FREE with Promotional Coupon'
                  },
                  description: 'TalentLyt is the world-first AI interview intelligence platform. Get your first Pilot session for FREE with our active promotion. Features 13-signal verification and Job Success Prediction.',
                  featureList: '13-Signal Verification, Automated Quality Auditor, Predictive Competency Mapping, Interview Genome, Code Playback',
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
                  description: 'High-integrity technical screening using the Sentinel Hierarchy (13-signal verification + Predictive Competency Mapping).'
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
                  'description': 'TalentLyt is the world-first AI interview intelligence platform, featuring Multi-Agent AI with real-time 13-signal verification and predictive success mapping.',
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
                        'text': 'An AI interview intelligence platform uses artificial intelligence to conduct, evaluate, and verify technical depth, providing an objective and efficient hiring process. TalentLyt is the world-first platform that combines Multi-Agent AI with 13-signal integrity verification, Job Success Prediction, and the Interview Genome.'
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
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does TalentLyt detect deepfakes in interviews?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'TalentLyt uses 13-signal verification including lip-sync analysis, voice biometrics, facial recognition consistency, and video feed analysis to detect deepfakes in real-time. Our Governor agent identifies visual anomalies and voice irregularities that indicate AI-generated content.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'What is the difference between TalentLyt and Talently.ai?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'TalentLyt and Talently.ai are different products. TalentLyt provides 13-signal fraud detection, deepfake identification, and proxy candidate detection that Talently.ai lacks. TalentLyt also offers Interview Genome (portable verified profiles) and 85% accurate job success prediction.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Can TalentLyt detect proxy candidates?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes. TalentLyt detects proxy candidates through continuous identity verification, voice biometrics, behavioral analysis, and cognitive pattern detection. If someone other than the verified candidate attempts to answer questions, TalentLyt flags the anomaly immediately.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Does TalentLyt detect AI-assisted cheating like ChatGPT?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes. TalentLyt detects AI-assisted cheating through keystroke dynamics, response timing patterns, tab switching detection, clipboard monitoring, and cognitive load indicators. The system identifies when candidates use ChatGPT, Claude, or other AI tools during interviews.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How is TalentLyt different from InterviewGuard or Talview?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'TalentLyt combines AI interviewing (Maya AI) with fraud detection in one platform. InterviewGuard and Talview focus on proctoring existing interviews. TalentLyt conducts the entire interview autonomously while simultaneously verifying integrity with 13 signals.'
                      }
                    }
                  ]
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'VideoObject',
                  'name': 'Maya AI Interviewer Demo - TalentLyt Technical Interview Platform',
                  'description': 'Watch Maya AI conduct a live technical interview with real-time fraud detection and integrity verification. See how TalentLyt detects proxy candidates, deepfakes, and cheating.',
                  'thumbnailUrl': 'https://talentlyt.cloud/assets/maya.jpg',
                  'uploadDate': '2024-12-01T00:00:00+00:00',
                  'duration': 'PT2M30S',
                  'contentUrl': 'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/maya-speaking.mp4',
                  'embedUrl': 'https://talentlyt.cloud/',
                  'publisher': {
                    '@type': 'Organization',
                    'name': 'TalentLyt',
                    'logo': {
                      '@type': 'ImageObject',
                      'url': 'https://talentlyt.cloud/logo.png'
                    }
                  }
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'HowTo',
                  'name': 'How to Detect Interview Fraud with TalentLyt',
                  'description': 'Learn how to detect proxy candidates, deepfakes, and cheating in remote interviews using TalentLyt 13-signal fraud detection.',
                  'step': [
                    {
                      '@type': 'HowToStep',
                      'name': 'Enable Fraud Detection',
                      'text': 'TalentLyt automatically enables 13-signal fraud detection including lip-sync analysis, voice biometrics, and gaze tracking.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'AI Monitors in Real-Time',
                      'text': 'The Governor agent continuously monitors for deepfakes, proxy candidates, AI-assisted cheating, and identity mismatches during the interview.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'Review Integrity Report',
                      'text': 'Access detailed forensic reports showing all detected anomalies, verification scores, and recommendations.'
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
