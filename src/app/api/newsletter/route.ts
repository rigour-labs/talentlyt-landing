import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResend = () => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.warn('RESEND_API_KEY not configured - newsletter subscription via email only');
        return null;
    }
    return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email address is required' },
                { status: 400 }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();
        const resend = getResend();
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        // Strategy 1: Add to Resend Audience (contact list) if configured
        if (resend && audienceId) {
            try {
                await resend.contacts.create({
                    email: normalizedEmail,
                    audienceId,
                });
            } catch (contactErr: unknown) {
                // Contact might already exist — that's fine, continue
                const errMsg = contactErr instanceof Error ? contactErr.message : String(contactErr);
                if (!errMsg.includes('already exists')) {
                    console.error('Resend contact creation error:', contactErr);
                }
            }
        }

        // Strategy 2: Send notification email to team so no subscriber is lost
        if (resend) {
            try {
                await resend.emails.send({
                    from: 'notifications@rigovo.com',
                    to: ['sales@rigovo.com'],
                    subject: `New Newsletter Subscriber: ${normalizedEmail}`,
                    html: `
                        <h2>New Newsletter Subscription</h2>
                        <p><strong>Email:</strong> ${normalizedEmail}</p>
                        <p><strong>Domain:</strong> ${normalizedEmail.split('@')[1]}</p>
                        <p><strong>Subscribed at:</strong> ${new Date().toISOString()}</p>
                        <p><strong>Source:</strong> Landing page newsletter widget</p>
                        ${audienceId ? '<p><em>Also added to Resend audience list.</em></p>' : '<p><em>RESEND_AUDIENCE_ID not set — subscriber NOT added to contact list. Configure this env var to enable automatic list management.</em></p>'}
                    `,
                });
            } catch (emailErr) {
                console.error('Notification email failed:', emailErr);
            }
        } else {
            // No Resend configured at all — log for development
            console.log('Newsletter subscription (no email service configured):', normalizedEmail);
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Newsletter subscription error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
