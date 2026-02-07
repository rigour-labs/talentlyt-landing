'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// Lazy instantiation to avoid build-time errors when API key is not set
const getResend = () => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.warn('RESEND_API_KEY not configured - email sending disabled');
        return null;
    }
    return new Resend(apiKey);
};

const demoSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().min(2, "Company is required"),
    role: z.string().optional(),
    message: z.string().optional(),
});

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitDemoRequest(prevState: any, formData: FormData) {
    const validatedFields = demoSchema.safeParse({
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
        const resend = getResend();

        if (!resend) {
            // Email not configured - log the request and return success
            console.log('Demo request received (email disabled):', { name, email, company, role, message });
            return {
                success: true,
                message: "Thank you! We've received your request and will reach out shortly.",
            };
        }

        const { data, error } = await resend.emails.send({
            from: 'notifications@rigovo.com',
            to: ['sales@rigovo.com', 'ashu.singh212@gmail.com'],
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

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, message } = validatedFields.data;

    try {
        const resend = getResend();

        if (!resend) {
            // Email not configured - log the request and return success
            console.log('Contact form received (email disabled):', { name, email, message });
            return {
                success: true,
                message: name,
            };
        }

        const { data, error } = await resend.emails.send({
            from: 'notifications@rigovo.com',
            to: ['sales@rigovo.com'],
            replyTo: email,
            subject: `Contact Form: ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return {
                success: false,
                message: 'Failed to send message. Please try again later.',
            };
        }

        return {
            success: true,
            message: name,
        };
    } catch (err) {
        console.error('Submission error:', err);
        return {
            success: false,
            message: 'An unexpected error occurred.',
        };
    }
}
