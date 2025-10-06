// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Auren <onboarding@resend.dev>", // Replace with your actual domain
      to: ["ayoubhayda01@gmail.com"], // Replace with your actual email
      subject: `${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>New Portfolio Contact Submission</title>
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
          <style>
            /* Reset styles */
            body, table, td, p, a, li, blockquote {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table, td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              -ms-interpolation-mode: bicubic;
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
            }

            /* Base styles */
            body {
              margin: 0 !important;
              padding: 0 !important;
              background-color: #f8fafc;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
              line-height: 1.6;
              color: #1a202c;
            }
            
            .email-container {
              max-width: 680px;
              margin: 0 auto;
              background-color: #ffffff;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }
            
            /* Header styles */
            .header {
              background-color: #00c950;
              padding: 40px 30px;
              text-align: center;
              position: relative;
            }
            
            .logo-container {
              margin-bottom: 20px;
            }
            
            .logo {
              width: 60px;
              height: 60px;
              background-color: rgba(255, 255, 255, 0.15);
              border-radius: 12px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 700;
              color: white;
              text-decoration: none;
              border: 2px solid rgba(255, 255, 255, 0.2);
            }
            
            .header-title {
              margin: 0;
              color: white;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            
            .header-subtitle {
              margin: 8px 0 0 0;
              color: rgba(255, 255, 255, 0.9);
              font-size: 16px;
              font-weight: 400;
            }
            
            /* Status badge */
            .status-badge {
              display: inline-block;
              background-color: #ffffff;
              color: #00c950;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin: 20px 0 0 0;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            /* Content styles */
            .content {
              padding: 40px 30px;
            }
            
            .contact-info {
              background: #ffffff;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
              overflow: hidden;
              margin-bottom: 30px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            }
            
            .info-row {
              display: flex;
              border-bottom: 1px solid #f1f5f9;
              transition: background-color 0.2s ease;
            }
            
            .info-row:last-child {
              border-bottom: none;
            }
            
            .info-row:hover {
              background-color: #f8fafc;
            }
            
            .info-label {
              background-color: #f8fafc;
              padding: 20px;
              font-weight: 600;
              color: #475569;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              min-width: 120px;
              display: flex;
              align-items: center;
              border-right: 1px solid #e2e8f0;
            }
            
            .info-value {
              padding: 20px;
              color: #1e293b;
              font-size: 16px;
              flex: 1;
              word-break: break-word;
            }
            
            .message-content {
              background-color: #f0fdf9;
              border-left: 4px solid #00c950;
              padding: 20px;
              border-radius: 0 8px 8px 0;
              line-height: 1.7;
              font-size: 16px;
              color: #1e293b;
            }
            
            /* Action section */
            .action-section {
              background-color: #f8fafc;
              padding: 30px;
              border-radius: 12px;
              text-align: center;
              margin: 30px 0;
              border: 1px solid #e2e8f0;
            }
            
            .reply-button {
              display: inline-block;
              background-color: #00c950;
              color: #ffffff !important;
              text-decoration: none;
              padding: 12px 24px;
              border-radius: 6px;
              font-weight: 600;
              font-size: 14px;
              transition: all 0.3s ease;
              border: none;
            }
            
            .reply-button:hover {
              background-color: #00b547;
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(0, 201, 80, 0.35);
            }
            
            /* Footer styles */
            .footer {
              background-color: #1a202c;
              padding: 30px;
              text-align: center;
              color: #a0aec0;
            }
            
            .footer-content {
              font-size: 14px;
              line-height: 1.6;
            }
            
            .footer-divider {
              width: 60px;
              height: 3px;
              background-color: #00c950;
              margin: 20px auto;
              border-radius: 2px;
            }
            
            .timestamp {
              background-color: #2d3748;
              color: #e2e8f0;
              padding: 12px 20px;
              border-radius: 6px;
              font-size: 13px;
              font-family: 'Monaco', 'Courier New', monospace;
              margin-top: 15px;
              display: inline-block;
              border-left: 3px solid #00c950;
            }
            
            /* Accent elements */
            .accent-dot {
              width: 8px;
              height: 8px;
              background-color: #00c950;
              border-radius: 50%;
              display: inline-block;
              margin-right: 8px;
            }
            
            .highlight-text {
              color: #00c950;
              font-weight: 600;
            }
            
            /* Responsive design */
            @media only screen and (max-width: 600px) {
              .email-container {
                width: 100% !important;
                max-width: 100% !important;
                margin: 0;
                box-shadow: none;
              }
              
              .header, .content, .footer {
                padding: 25px 20px !important;
              }
              
              .header-title {
                font-size: 24px !important;
              }
              
              .info-row {
                flex-direction: column;
              }
              
              .info-label {
                border-right: none;
                border-bottom: 1px solid #e2e8f0;
                min-width: auto;
              }
              
              .action-section {
                padding: 20px !important;
              }
              
              .reply-button {
                display: block;
                width: 100%;
                box-sizing: border-box;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Header -->
            <div class="header">
              <h1 class="header-title">New Contact Received</h1>
              <p class="header-subtitle">Someone reached out through your portfolio</p>
              <div class="status-badge">New Inquiry</div>
            </div>
            
            <!-- Content -->
            <div class="content">
              <!-- Contact Information -->
              <div class="contact-info">
                <div class="info-row">
                  <div class="info-label">
                    <span class="accent-dot"></span>Name
                  </div>
                  <div class="info-value"><strong>${name}</strong></div>
                </div>
                <div class="info-row">
                  <div class="info-label">
                    <span class="accent-dot"></span>Email
                  </div>
                  <div class="info-value">
                    <a href="mailto:${email}" style="color: #00c950; text-decoration: none; font-weight: 500;">${email}</a>
                  </div>
                </div>
                <div class="info-row">
                  <div class="info-label">
                    <span class="accent-dot"></span>Subject
                  </div>
                  <div class="info-value"><strong>${subject}</strong></div>
                </div>
                <div class="info-row">
                  <div class="info-label">
                    <span class="accent-dot"></span>Message
                  </div>
                  <div class="info-value">
                    <div class="message-content">
                      ${message.replace(/\n/g, "<br>")}
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div class="action-section">
                <h3 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px; font-weight: 700;">
                  <span class="highlight-text">Ready to respond?</span>
                </h3>
                <p style="margin: 0 0 25px 0; color: #64748b; font-size: 15px; line-height: 1.5;">
                  Click the button below to reply directly to <strong>${name}</strong>
                </p>
                <a href="mailto:${email}?subject=Re: ${subject}&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out through my portfolio.%0D%0A%0D%0A" class="reply-button">
                  Reply to ${name}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
              <div class="footer-content">
                <strong style="color: #ffffff;">Auren Portfolio</strong><br>
                <span style="color: #9ca3af;">Professional Contact Form Notification</span>
                <div class="footer-divider"></div>
                <p style="margin: 0; font-size: 12px; opacity: 0.8; color: #9ca3af;">
                  This email was automatically generated from your portfolio contact form.<br>
                  Please do not reply to this email directly.
                </p>
                <div class="timestamp">
                  📅 ${formattedDate} at ${formattedTime}
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
🔔 NEW PORTFOLIO CONTACT SUBMISSION
=====================================

📋 CONTACT DETAILS:
-------------------
👤 Name: ${name}
📧 Email: ${email}
📋 Subject: ${subject}

💬 MESSAGE:
-----------
${message}

📅 SUBMITTED:
-------------
${formattedDate} at ${formattedTime}

🔗 QUICK ACTIONS:
-----------------
Reply to this inquiry: mailto:${email}

---
This notification was sent from your Auren Portfolio contact form.
For support, visit your website admin panel.
      `,
      // Reply-to the sender's email for easy responses
      replyTo: email,
      // Optional: Add tags for better organization
      tags: [
        {
          name: "category",
          value: "portfolio-contact",
        },
        {
          name: "source",
          value: "website-form",
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: data?.id,
        timestamp: now.toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
