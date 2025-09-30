import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'ade.maidana1@gmail.com'; // <-- IMPORTANT: Set the email where you want to receive notifications.

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Subscriber <onboarding@resend.dev>', // Resend's test email
      to: toEmail,
      subject: 'Someone is trying to connect through Portfolio!',
      html: `<p>Hi,</p><p>Someone has sent you their email through portfolio:</p><p><strong>${email}</strong></p>`,
    });

    return NextResponse.json({ message: 'Success!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}