import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = 'c188e5391212e488b3f206a20e531e42';
const SITE_HOST = 'talentlyt.cloud';

// IndexNow endpoints (submit to one, it shares with others)
const INDEXNOW_ENDPOINTS = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
];

export async function POST(request: NextRequest) {
    try {
        const { urls } = await request.json();

        if (!urls || !Array.isArray(urls) || urls.length === 0) {
            return NextResponse.json(
                { error: 'URLs array is required' },
                { status: 400 }
            );
        }

        // Validate URLs are from our domain
        const validUrls = urls.filter((url: string) => {
            try {
                const parsed = new URL(url);
                return parsed.hostname === SITE_HOST || parsed.hostname === `www.${SITE_HOST}`;
            } catch {
                return false;
            }
        });

        if (validUrls.length === 0) {
            return NextResponse.json(
                { error: 'No valid URLs provided' },
                { status: 400 }
            );
        }

        // Submit to IndexNow (only need to submit to one endpoint - they share)
        const payload = {
            host: SITE_HOST,
            key: INDEXNOW_KEY,
            keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
            urlList: validUrls,
        };

        const response = await fetch(INDEXNOW_ENDPOINTS[0], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok || response.status === 202) {
            return NextResponse.json({
                success: true,
                message: `Submitted ${validUrls.length} URLs to IndexNow`,
                urls: validUrls,
            });
        }

        const errorText = await response.text();
        console.error('IndexNow error:', response.status, errorText);

        return NextResponse.json(
            { error: 'Failed to submit to IndexNow', details: errorText },
            { status: response.status }
        );
    } catch (error) {
        console.error('IndexNow submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET endpoint to manually trigger indexing of all pages
export async function GET(request: NextRequest) {
    const allUrls = [
        `https://${SITE_HOST}/`,
        `https://${SITE_HOST}/blog`,
        `https://${SITE_HOST}/blog/ai-collaboration-interview-verification`,
        `https://${SITE_HOST}/blog/cost-of-bad-hire-engineering`,
        `https://${SITE_HOST}/blog/remote-hiring-challenges-2026`,
        `https://${SITE_HOST}/blog/what-is-ai-interview-platform`,
        `https://${SITE_HOST}/blog/ai-leadership-remote-interviews`,
        `https://${SITE_HOST}/blog/identity-verification-remote-hiring`,
        `https://${SITE_HOST}/blog/multi-agent-ai-interviews`,
        `https://${SITE_HOST}/blog/reduce-hiring-bias-ai`,
        `https://${SITE_HOST}/blog/interview-integrity-verification-guide`,
        `https://${SITE_HOST}/compare`,
        `https://${SITE_HOST}/pricing`,
        `https://${SITE_HOST}/about`,
        `https://${SITE_HOST}/glossary`,
        `https://${SITE_HOST}/live-demo`,
        `https://${SITE_HOST}/demo-video`,
        `https://${SITE_HOST}/request-demo`,
        `https://${SITE_HOST}/contact`,
        `https://${SITE_HOST}/ai-ethics`,
    ];

    const payload = {
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls,
    };

    try {
        const response = await fetch(INDEXNOW_ENDPOINTS[0], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok || response.status === 202) {
            return NextResponse.json({
                success: true,
                message: `Submitted ${allUrls.length} URLs to IndexNow`,
                urls: allUrls,
            });
        }

        const errorText = await response.text();
        return NextResponse.json(
            { error: 'Failed to submit', details: errorText },
            { status: response.status }
        );
    } catch (error) {
        console.error('IndexNow error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
