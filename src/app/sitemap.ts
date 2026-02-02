import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://talentlyt.cloud'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/glossary`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/what-is-ai-interview-platform`,
            lastModified: new Date('2025-01-15'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog/interview-integrity-verification-guide`,
            lastModified: new Date('2025-01-10'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog/multi-agent-ai-interviews`,
            lastModified: new Date('2025-01-05'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog/reduce-hiring-bias-ai`,
            lastModified: new Date('2025-01-01'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog/detect-cheating-remote-interviews`,
            lastModified: new Date('2024-12-20'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog/detect-deepfake-proxy-candidates`,
            lastModified: new Date('2026-01-23'),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/compare`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/request-demo`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/live-demo`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/demo-video`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/ai-ethics`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}

