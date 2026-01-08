'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  Shield,
  Code,
  Sun,
  Moon,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <WhyWeBuiltThisSection />
      <StatsSection />
      <FeaturesSection />
      <ArchitectureSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass border-b border-gray-200/50 dark:border-white/10 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white dark:text-black">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-primary">TalentLyt</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-secondary hover:text-primary transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <div className="w-5 h-5"><div className="w-5 h-5 rounded-full border-2 border-current" /></div>
              ) : (
                <div className="w-5 h-5 bg-current rounded-full" />
              )}
              {/* Quick placeholder icons - replace with Lucide Moon/Sun if available */}
            </button>
            <Link href="/login" className="text-sm font-medium text-secondary hover:text-primary transition-colors hidden sm:block">
              Sign In
            </Link>
            <Link
              href="/request-demo"
              className="px-4 py-2 text-sm font-semibold text-white dark:text-black bg-primary rounded-lg hover:opacity-90 transition-all shadow-sm hover:shadow-md"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-secondary">New: Anti-cheat 2.0 Engine is live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-primary text-balance">
            The standard for <br /> <span className="text-gray-400 dark:text-gray-500">engineering hiring</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl text-balance">
            Conduct technical interviews with real-time integrity monitoring.
            Automated reports, playback, and skill assessment in one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/request-demo"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white dark:text-black text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <Link
              href="/live-demo"
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-white/5 text-primary border border-gray-200 dark:border-white/10 text-sm font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
            >
              View Live Demo
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative rounded-2xl border border-gray-200/50 dark:border-white/10 shadow-2xl dark:shadow-white/5 overflow-hidden bg-white dark:bg-black aspect-[16/9] md:aspect-[21/9]">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white dark:from-white/5 dark:to-transparent flex items-center justify-center">
            <div className="text-center p-8">
              <Code className="w-24 h-24 mx-auto mb-6 text-gray-200 dark:text-white/20" />
              <p className="text-sm text-gray-400 font-medium">Interactive Coding Environment Preview</p>
            </div>
          </div>
          {/* Decorative UI elements overlay */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
            </div>
            <div className="ml-4 h-6 w-64 bg-gray-50 dark:bg-white/5 rounded-md border border-gray-100 dark:border-white/5"></div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10">
          <p className="text-sm text-gray-400 text-center mb-6 font-medium">Trusted by engineering teams at</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos - in production use SVGs */}
            {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Fusion'].map((company) => (
              <span key={company} className="text-lg font-bold text-gray-300 dark:text-gray-600">{company}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyWeBuiltThisSection() {
  return (
    <section className="px-6 py-24 bg-gray-50 dark:bg-white/5 border-y border-gray-100 dark:border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-primary text-balance">
          "Remote interviews are broken. We built TalentLyt because we saw great engineering teams struggling to filter candidates who were gaming the system."
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '<0.1%', label: 'False positive rate' },
    { value: '10k+', label: 'Interviews secured' },
    { value: '200+', label: 'Growth companies' },
    { value: '99.9%', label: 'Uptime SLA' },
  ];

  return (
    <section className="px-6 py-20 border-b border-gray-100 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-bold tracking-tighter text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Our AI visually analyzes candidate behavior for potential integrity violations in real-time.',
      icon: <Shield className="w-6 h-6" />,
      className: "md:col-span-2",
    },
    {
      title: 'Independent Evaluation',
      description: 'Separate AI agents for interviewing and monitoring ensure zero bias in scoring.',
      icon: <Code className="w-6 h-6" />,
      className: "md:col-span-1",
    },
    {
      title: 'Code Playback',
      description: 'Watch the entire coding session keystroke by keystroke to understand thought process.',
      icon: <Code className="w-6 h-6" />,
      className: "md:col-span-1",
    },
    {
      title: 'Detailed Skill Reports',
      description: 'Get a granular breakdown of technical skills, communication, and problem-solving abilities immediately after the interview.',
      icon: <Shield className="w-6 h-6" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">Everything you need to hire confidentally</h2>
          <p className="text-secondary text-lg max-w-2xl">
            TalentLyt provides a complete ecosystem for technical assessment, from cheat detection to deep skill analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-black hover:shadow-lg hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300 group ${feature.className}`}
            >
              <div className="w-12 h-12 bg-white dark:bg-white/10 rounded-xl border border-gray-100 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <div className="text-primary dark:text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="px-6 py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">
              Two agents are better than one
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              We separate the role of the interviewer from the evaluator. This ensures that the conversation remains natural while rigorous checks happen in the background.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Maya (Interviewer)', desc: 'Conducts the conversation, asks follow-up questions, and ensures a great candidate experience.' },
                { title: 'Governor (Monitor)', desc: 'Silently observes the session, checking for integrity violations and evaluating technical accuracy.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-full rounded-full bg-gray-200 dark:bg-white/10 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Visual representation of the architecture */}
            <div className="aspect-square rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center p-12 relative animate-spin-slow">
              <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-white/20 animate-spin-reverse-slow"></div>
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto text-primary mb-4" />
                <div className="text-xs font-mono text-gray-400">SECURE_ENVIRONMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: 'Schedule',
      description: 'Create an interview link in seconds. Send it to the candidate.',
    },
    {
      title: 'Interview',
      description: 'Candidate joins the session. Maya conducts the interview while Governor monitors.',
    },
    {
      title: 'Analyze',
      description: 'Review the recording, integrity report, and skill breakdown immediately after.',
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-24 bg-white dark:bg-black border-b border-gray-100 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">Simple workflow, powerful results</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-100 dark:bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-black border-2 border-gray-900 dark:border-white flex items-center justify-center text-sm font-bold text-primary mb-6 shadow-sm">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Stop hiring cheaters.
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Start using TalentLyt today and ensure the integrity of your technical hiring process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-demo"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Abstract shapes background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>
    </section>
  );
}

function Footer() {
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
            {/* ... keeping links same ... */}
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
