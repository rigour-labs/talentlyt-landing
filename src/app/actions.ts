'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().min(2, "Company is required"),
    role: z.string().optional(),
    message: z.string().optional(),
});

export async function submitDemoRequest(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        role: formData.get('role'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, company, role, message } = validatedFields.data;

    try {
        const { data, error } = await resend.emails.send({
            from: 'notifications@talentlyt.cloud', // Should use verified domain in prod
            to: ['sales@talentlyt.cloud'],
            subject: `New Demo Request: ${name} from ${company}`,
            html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return {
                success: false,
                message: 'Failed to send email. Please try again later.',
            };
        }

        return {
            success: true,
            message: "Thank you! We've received your request and will reach out shortly.",
        };
    } catch (err) {
        console.error('Submission error:', err);
        return {
            success: false,
            message: 'An unexpected error occurred.',
        };
    }
}
