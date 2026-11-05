import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // If no API key is configured, return success silently
      // (graceful fallback — form still works from UX perspective)
      console.warn('RESEND_API_KEY not configured. Email not sent.');
      return NextResponse.json({ success: true, fallback: true });
    }

    // Send via Resend REST API (no package needed — pure fetch)
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['nikuluhach.86209@gmail.com'],
        reply_to: email,
        subject: `[Portfolio] ${subject} — from ${name}`,
        html: `
          <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: #090B10; color: #D6D3CC; padding: 32px; border-radius: 12px; border: 1px solid rgba(198,161,91,0.3);">
            <div style="border-bottom: 1px solid rgba(198,161,91,0.2); padding-bottom: 20px; margin-bottom: 24px;">
              <h2 style="color: #C6A15B; font-size: 22px; margin: 0 0 4px 0;">New Portfolio Enquiry</h2>
              <p style="color: #858A96; font-size: 12px; margin: 0; font-family: monospace;">porfolio-six-smoky-21.vercel.app</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #858A96; font-size: 12px; font-family: monospace; width: 100px;">FROM</td>
                <td style="padding: 8px 0; color: #D6D3CC; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #858A96; font-size: 12px; font-family: monospace;">EMAIL</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7792B5; font-size: 14px;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #858A96; font-size: 12px; font-family: monospace;">SUBJECT</td>
                <td style="padding: 8px 0; color: #D6D3CC; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            
            <div style="background: rgba(21,28,43,0.8); border: 1px solid rgba(119,146,181,0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <p style="color: #858A96; font-size: 11px; font-family: monospace; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
              <p style="color: #D6D3CC; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="border-top: 1px solid rgba(198,161,91,0.15); padding-top: 16px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #C6A15B, #DEC186); color: #090B10; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; margin-right: 10px;">Reply to ${name}</a>
              <span style="color: #858A96; font-size: 11px; font-family: monospace;">Sent via Nikhil Kumar's Portfolio</span>
            </div>
          </div>
        `,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend error:', errText);
      return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
