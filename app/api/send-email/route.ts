import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email body
    const emailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #000; color: #fff; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #00ffff; border-radius: 10px; padding: 30px; background-color: #0a0a0a;">
            <h1 style="color: #00ffff; text-align: center; text-shadow: 0 0 10px #00ffff;">New Message from Your Portfolio</h1>
            
            <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-left: 4px solid #9d4edd; border-radius: 5px;">
              <p><strong style="color: #ffd700;">Name:</strong> ${name}</p>
              <p><strong style="color: #ffd700;">Email:</strong> <a href="mailto:${email}" style="color: #00ffff;">${email}</a></p>
            </div>

            <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-radius: 5px;">
              <h2 style="color: #00ffff; margin-top: 0;">Message:</h2>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>

            <hr style="border: none; border-top: 1px solid #00ffff; margin: 30px 0;" />

            <p style="text-align: center; color: #808080; font-size: 12px;">
              This message was sent from your portfolio website at ${new Date().toLocaleString()}
            </p>
          </div>
        </body>
      </html>
    `;

    // For this implementation, we'll use a simple approach
    // You can integrate with services like SendGrid, Resend, or Nodemailer
    // For now, we'll log the message and return success
    console.log('Portfolio Message Received:', { name, email, message, timestamp: new Date() });

    // Send email to your email using Resend (if configured)
    // Alternatively, you can use environment variables to send via other services
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
