import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Use environment variables securely (do NOT hardcode secrets)
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

// Disable body parsing since we're handling JSON
// This is a workaround for Next.js 13+ API routes
export const config = {
  api: {
    bodyParser: false,
  },
};

async function readStream(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export async function POST(request) {
  try {
    // Read the request body as text
    const body = await readStream(request.body);
    const { fullName, email, mobile, productDetails, productList } = JSON.parse(body);
    
    // Validate required fields
    if (!fullName || !email || !mobile || !productDetails) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: SMTP_USER,
      to: 'aayush.upadhyay.cse.2024@miet.ac.in',
      cc: 'team.safebyte@gmail.com, keshav.garg.5130@gmail.com',
      subject: 'New Meeting Request',
      text: `
New Meeting request from:

Full Name: ${fullName}
Email: ${email}
Mobile/WhatsApp: ${mobile}

Product Details:
${productDetails}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Meeting request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send meeting request. Please try again.' },
      { status: 500 }
    );
  }
}
