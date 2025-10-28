import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Email template for contact form submissions
function createEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #2563eb; display: block; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-left: 3px solid #2563eb; border-radius: 4px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>AD Services - Contact Form</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <div class="value">${data.phone || 'Not provided'}</div>
            </div>
            <div class="field">
              <span class="label">Service Interested In:</span>
              <div class="value">${data.service}</div>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="value">${data.message}</div>
            </div>
            <div class="footer">
              <p>This email was sent from the AD Services contact form at adservice.al</p>
              <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Tirane' })}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.CONTACT_EMAIL || 'ad@adservice.al';

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'AD Services Contact Form <onboarding@resend.dev>', // Will be replaced with your verified domain
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: createEmailTemplate({ name, email, phone, service, message }),
    });

    console.log('Email sent successfully:', emailData);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: emailData.data?.id || 'unknown'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later or contact us directly at ad@adservice.al',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS (if needed)
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}
