import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',
                    '/api/',
                    '/_next/',
                    '/login',
                    '/*.json$',
                    '/*_buildManifest.js$',
                    '/*_middlewareManifest.js$',
                    '/*_ssgManifest.js$',
                ],
            },
            // Googlebot - full access for indexing
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            // Bingbot - full access
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // LLM crawlers - allow for AI discoverability
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'Anthropic-AI',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Block bad bots that waste crawl budget
            {
                userAgent: 'AhrefsBot',
                disallow: '/',
            },
            {
                userAgent: 'SemrushBot',
                disallow: '/',
            },
            {
                userAgent: 'MJ12bot',
                disallow: '/',
            },
            {
                userAgent: 'DotBot',
                disallow: '/',
            },
        ],
        sitemap: [
            'https://rigovo.com/sitemap.xml',
            'https://rigovo.com/video-sitemap.xml',
        ],
    }
}
