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
    // Primary high-intent technical hiring keywords
    'AI interview software for technical hiring',
    'AI-powered technical screening platform',
    'automated developer interview software',
    'technical interview platform with video verification',
    'coding assessment tool with verification',
    // Direct competitor differentiation (similar names)
    'Talently.ai alternative',
    'TalentLyft alternative',
    'HeyMilo AI alternative',
    // Major competitor comparison
    'HireVue alternative technical hiring',
    'Codility alternative with AI proctoring',
    'HackerRank alternative coding interviews',
    'Karat alternative for screening',
    'CoderPad alternative with verification',
    // Unique differentiators (AI leadership verification)
    'AI interview authenticity verification',
    'interview integrity monitoring',
    'candidate identity verification',
    'AI collaboration depth assessment',
    'remote interview integrity verification',
    // Global and Market Keywords
    'USA AI interview platform',
    'UAE tech recruitment software',
    'Silicon Valley interview automation',
    'Dubai recruitment technology',
    // Brand keywords (exact match for brand searches)
    'Rigovo',
    'Rigovo AI',
    'Formerly TalentLyt',
    'TalentLyt to Rigovo',
    'Maya AI interviewer',
    'interview verification platform',
    '15-signal verification technical screening',
    // Long-tail high-intent
    'best AI interview platform 2026',
    'AI interview with verification',
    'enterprise technical hiring software',
    'SOC2 compliant interview platform',
    'free AI interview trial',
  ],
  alternates: {
    canonical: 'https://rigovo.com',
    languages: {
      'en-US': 'https://rigovo.com/usa',
      'en-AE': 'https://rigovo.com/uae',
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
import { MobileStickyCTA } from '@/components/ui/mobile-sticky-cta';

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

        {/* LinkedIn Insight Tag - Replace PARTNER_ID with your LinkedIn Ads partner ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || ''}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);
            `,
          }}
        />

        {/* Meta (Facebook) Pixel - Replace PIXEL_ID with your Meta Ads pixel ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              var pixelId = "${process.env.NEXT_PUBLIC_META_PIXEL_ID || ''}";
              if (pixelId) { fbq('init', pixelId); fbq('track', 'PageView'); }
            `,
          }}
        />

        {/* LLM SEO: llms.txt for AI crawlers */}
        <link rel="alternate" type="text/plain" href="https://rigovo.com/llms.txt" title="LLM-friendly site description" />

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
                  description: 'Rigovo is your AI co-pilot for technical hiring. Maya AI conducts adaptive technical interviews while a 15-signal verification engine confirms identity, engagement, and technical depth in real-time. Beta: 6,824 signal events analyzed across 82 interviews.',
                  featureList: '15-Signal Integrity Verification, Real-time Identity Verification, Candidate Verification, Technical Assessment, AI Collaboration Depth Measurement, Conversational AI Maya',
                  copyrightYear: new Date().getFullYear(),
                  author: {
                    '@type': 'Organization',
                    name: 'Rigour Labs',
                    url: 'https://rigovo.com',
                    logo: 'https://rigovo.com/logo.png',
                    sameAs: [
                      'https://twitter.com/rigovo',
                      'https://github.com/rigour-labs',
                      'https://linkedin.com/company/rigovo'
                    ]
                  }
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'Brand',
                  name: 'Rigovo',
                  alternateName: ['Rigovo AI', 'TalentLyt', 'Rigovo Interview Intelligence'],
                  description: 'AI interview platform with real-time candidate verification and AI leadership assessment. Formerly known as TalentLyt.',
                  logo: 'https://rigovo.com/logo.png',
                  url: 'https://rigovo.com'
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'Service',
                  serviceType: 'AI Technical Interviewing',
                  provider: {
                    '@type': 'Organization',
                    name: 'Rigour Labs'
                  },
                  areaServed: 'Worldwide',
                  description: 'AI-powered technical screening with 15-signal verification that confirms candidate identity, engagement, and technical depth. Hire with confidence.'
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
                    },
                    {
                      '@type': 'ListItem',
                      'position': 7,
                      'name': 'USA',
                      'item': 'https://rigovo.com/usa'
                    },
                    {
                      '@type': 'ListItem',
                      'position': 8,
                      'name': 'UAE',
                      'item': 'https://rigovo.com/uae'
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
                    'email': 'sales@rigovo.com',
                    'contactType': 'sales'
                  }
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  'mainEntity': [
                    {
                      '@type': 'Question',
                      'name': 'What is Rigovo?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo is an AI-powered technical interview platform. Maya AI conducts adaptive technical interviews via voice while the Sentinel engine runs 15-signal verification to confirm candidate identity, engagement, and technical depth. Every interview produces an evidence report with integrity scores, skill assessments, and job success predictions. Try 5 interviews free at rigovo.com.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Does Rigovo block AI tools during interviews?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'No. Rigovo welcomes AI tool usage during interviews. In an AI-native era, the question is not whether candidates use AI — it is whether they understand and lead with it. Rigovo measures AI Collaboration Depth: can the candidate explain their reasoning, make architectural trade-offs, and demonstrate genuine comprehension? This distinguishes AI Leaders from AI Passengers.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How is Rigovo different from HireVue or Codility?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'HireVue records and analyzes video interviews conducted by humans. Codility provides coding assessments. Rigovo conducts the entire technical interview autonomously via Maya AI while simultaneously running 15-signal verification. It is an AI interviewer plus verification engine in one platform — not a recording tool or a test platform.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'What is AI Collaboration Depth?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'AI Collaboration Depth is Rigovo\'s measure of how candidates work with AI tools. An AI Leader uses tools effectively, explains every decision, and makes independent trade-off choices. An AI Passenger relies on AI-generated outputs but struggles to explain reasoning. Rigovo measures this distinction through behavioral signals during the live interview.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How does Rigovo verify candidate identity?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo uses 15-signal verification covering identity, engagement, and technical depth continuously throughout the interview. The system confirms the person being interviewed is consistent from start to finish — so you know the person you interview is the person you hire.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Is Rigovo a proctoring tool?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'No. Proctoring tools passively monitor interviews conducted by humans. Rigovo actively conducts adaptive technical interviews through Maya AI and generates evidence-based hiring recommendations. It is an AI interviewer that produces verified hiring intelligence, not a surveillance tool.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How much does Rigovo cost?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo offers a free Pilot Pack with 5 interviews including full 15-signal verification. Starter plan is $0.35 per minute (pay-as-you-go). Engine plan is $249 per month for unlimited interviews. Fortress plan is custom enterprise pricing with SSO and dedicated infrastructure. All plans include the full verification engine.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Is Rigovo suitable for enterprise technical hiring?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes. Rigovo is designed for enterprise-scale technical hiring with SOC 2 aligned security, GDPR compliance, legally-defensible audit trails, and high-volume recruitment automation with consistent quality standards.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'What is the difference between Rigovo and Talently.ai?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Rigovo and Talently.ai are different products from different companies. Rigovo provides 15-signal verification and AI Collaboration Depth measurement that Talently.ai does not offer. Rigovo verifies the person behind the screen — not just their answers — through continuous multi-signal verification.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Can I try Rigovo for free?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Yes. Rigovo offers a free Pilot Pack that includes 5 technical interviews with full 15-signal verification, evidence reports, and job success predictions. No credit card is required. You can start a free pilot at rigovo.com or try a live Maya demo at platform.rigovo.com/demo.'
                      }
                    }
                  ]
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'HowTo',
                  'name': 'How to Hire with Confidence Using Rigovo',
                  'description': 'Learn how to use Rigovo to conduct verified technical interviews and make evidence-based hiring decisions.',
                  'step': [
                    {
                      '@type': 'HowToStep',
                      'name': 'Start a Free Pilot',
                      'text': 'Sign up for the free Pilot Pack at rigovo.com — 5 interviews with full 15-signal verification, no credit card required.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'Maya AI Conducts the Interview',
                      'text': 'Maya AI runs a 20-45 minute adaptive technical interview via voice. The Sentinel engine verifies identity, engagement, and technical depth in real-time throughout the session.'
                    },
                    {
                      '@type': 'HowToStep',
                      'name': 'Review the Evidence Report',
                      'text': 'After each interview, access a detailed evidence report with integrity scores, skill assessments, AI collaboration depth analysis, and a job success prediction with confidence intervals.'
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
            <MobileStickyCTA />
          </ThemeProvider>
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  );
}
