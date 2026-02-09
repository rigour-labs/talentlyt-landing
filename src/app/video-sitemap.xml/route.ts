export async function GET() {
    const baseUrl = 'https://rigovo.com';

    const videos = [
        {
            pageUrl: `${baseUrl}`,
            title: 'Maya AI - Your AI Co-Pilot for Technical Interviews',
            description: 'Meet Maya, your AI interviewer who conducts technical screening 24/7. Maya adapts questions in real-time, verifies candidate identity with 15 signals, and provides detailed assessment reports.',
            contentUrl: 'https://onbadqcmbugvszb0.public.blob.vercel-storage.com/maya-speaking.mp4',
            thumbnailUrl: 'https://rigovo.com/assets/maya.jpg',
            duration: 30, // 30 seconds
            publicationDate: '2026-01-01T00:00:00Z',
            familyFriendly: true,
            requiresSubscription: false,
        },
        {
            pageUrl: `${baseUrl}/demo-video`,
            title: 'Rigovo AI Interview Platform Demo - Maya AI & 15-Signal Integrity Verification',
            description: 'Watch a complete walkthrough of Rigovo, the AI interview platform with real-time AI leadership verification. See how Maya AI conducts adaptive technical interviews while our 15-signal integrity system verifies candidates are authentic architects of their solutions.',
            contentUrl: 'https://www.loom.com/share/b0a8d53703514523b7c21f9f585d9a73',
            thumbnailUrl: 'https://cdn.loom.com/sessions/thumbnails/b0a8d53703514523b7c21f9f585d9a73-00001.jpg',
            duration: 180, // 3 minutes in seconds
            publicationDate: '2026-01-15T00:00:00Z',
            familyFriendly: true,
            requiresSubscription: false,
        },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos.map(video => `  <url>
    <loc>${video.pageUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${video.thumbnailUrl}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${video.contentUrl}</video:content_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.publicationDate}</video:publication_date>
      <video:family_friendly>${video.familyFriendly ? 'yes' : 'no'}</video:family_friendly>
      <video:requires_subscription>${video.requiresSubscription ? 'yes' : 'no'}</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

function escapeXml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
