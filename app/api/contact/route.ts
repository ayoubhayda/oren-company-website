// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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

    // Format service and budget labels for display
    const serviceLabels: Record<string, string> = {
      "web-development": "Web Development",
      "custom-platforms": "Custom Platforms",
      ecommerce: "E-commerce",
      "digital-marketing": "Digital Marketing",
      other: "Other",
    };

    const budgetLabels: Record<string, string> = {
      "under-500": "Under $500",
      "500-2k": "$500 - $2,000",
      "2k-8k": "$2,000 - $8,000",
      "8k-15k": "$8,000 - $15,000",
      "15k+": "$15,000+",
      "not-sure": "Not sure",
    };

    const formattedService = service
      ? serviceLabels[service] || service
      : undefined;
    const formattedBudget = budget ? budgetLabels[budget] || budget : undefined;

    // Send email using Resend with professional HTML template
    const { data, error } = await resend.emails.send({
      from: "Oren Company <onboarding@resend.dev>", // Replace with your actual domain
      to: ["ayoubhayda01@gmail.com", "aya.berrouan@gmail.com"],
      subject: `🚀 New Contact Inquiry - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 20px;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #fafafa;
              color: #333333;
              line-height: 1.6;
            }

            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              overflow: hidden;
            }

            /* Header */
            .header {
              background: #1f2937;
              padding: 32px 24px;
              text-align: center;
            }

            .logo-image {
              width: 48px;
              height: 48px;
              border-radius: 8px;
              margin-bottom: 16px;
            }

            .header-title {
              margin: 0;
              color: white;
              font-size: 24px;
              font-weight: 600;
              letter-spacing: -0.025em;
            }

            .header-subtitle {
              margin: 8px 0 0 0;
              color: #d1d5db;
              font-size: 14px;
              font-weight: 400;
            }

            /* Content */
            .content {
              padding: 40px 32px;
            }

            .welcome-section {
              text-align: center;
              margin-bottom: 48px;
            }

            .welcome-title {
              font-size: 20px;
              font-weight: 600;
              color: #111827;
              margin: 0 0 8px 0;
            }

            .welcome-subtitle {
              color: #6b7280;
              font-size: 15px;
              line-height: 1.5;
              margin: 0;
            }

            /* Contact Information */
            .contact-grid {
              display: grid;
              gap: 24px;
              margin-bottom: 40px;
            }

            .contact-item {
              display: flex;
              align-items: center;
              padding: 20px;
              background: #f9fafb;
              border-bottom: 1px solid #989595;
            }

            #budget {
              border-bottom: none;
            }

            .contact-label {
              font-size: 12px;
              font-weight: 600;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 0px;
              flex-shrink: 0;
              min-width: 120px;
            }

            .contact-value {
              font-size: 15px;
              font-weight: 500;
              color: #111827;
              margin: 0;
            }

            .contact-value a {
              color: #3b82f6;
              text-decoration: none;
            }

            .contact-value a:hover {
              text-decoration: underline;
            }

            /* Message Section */
            .message-section {
              background: #f8fafc;
              border-radius: 6px;
              padding: 24px;
              margin-bottom: 40px;
            }

            .message-label {
              font-size: 12px;
              font-weight: 600;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 8px;
            }

            .message-content {
              font-size: 15px;
              line-height: 1.6;
              color: #111827;
              margin: 0;
              white-space: pre-wrap;
            }

            /* Action Section */
            .action-section {
              text-align: center;
              padding: 32px;
              background: #f8fafc;
              border-radius: 6px;
              margin-bottom: 32px;
            }

            .action-title {
              font-size: 18px;
              font-weight: 600;
              color: #111827;
              margin: 0 0 8px 0;
            }

            .action-subtitle {
              font-size: 14px;
              color: #6b7280;
              margin: 0 0 24px 0;
            }

            .reply-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              background: #0076F1;
              color: #ffffff;
              text-decoration: none;
              padding: 12px 24px;
              border-radius: 6px;
              font-weight: 500;
              font-size: 14px;
              transition: background-color 0.2s ease;
            }

            .reply-button:hover {
              opacity: 0.9;
            }

            /* Footer */
            .footer {
              background: #f9fafb;
              padding: 24px 32px;
              text-align: center;
              border-top: 1px solid #e5e7eb;
            }

            .footer-content {
              font-size: 13px;
              color: #6b7280;
              line-height: 1.5;
            }

            .footer-brand {
              font-weight: 600;
              margin-bottom: 4px;
            }

            .footer-timestamp {
              margin-top: 16px;
              padding: 8px 12px;
              background: #e5e7eb;
              border-radius: 4px;
              font-size: 12px;
              font-family: 'Monaco', 'Courier New', monospace;
              color: #4b5563;
            }

            /* Responsive Design */
            @media only screen and (max-width: 600px) {
              body {
                padding: 10px;
              }

              .content {
                padding: 24px 20px;
              }

              .contact-item {
                flex-direction: column;
                gap: 8px;
              }

              .contact-label {
                min-width: auto;
              }

              .action-section {
                padding: 24px 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Header -->
            <div class="header">
              <img src="https://qjwm1mx719.ufs.sh/f/HXwqHLekiaEUyH6dyhFxLj8XS06zBnY3ZGveqlUaumPcJOWt" alt="Oren Company" class="logo-image">
              <h1 class="header-title">New Contact Inquiry</h1>
              <p class="header-subtitle">Someone reached out through your contact form</p>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="welcome-section">
                <h2 class="welcome-title">New Business Inquiry</h2>
                <p class="welcome-subtitle">
                  A potential client has expressed interest in your services. Please review their information below.
                </p>
              </div>

              <!-- Contact Information -->
              <div class="contact-grid">
                <div class="contact-item">
                  <span class="contact-label">Name</span>
                  <span class="contact-value">${name}</span>
                </div>

                <div class="contact-item">
                  <span class="contact-label">Email</span>
                  <span class="contact-value">
                    <a href="mailto:${email}">${email}</a>
                  </span>
                </div>

                ${company ? `
                  <div class="contact-item">
                    <span class="contact-label">Company</span>
                    <span class="contact-value">${company}</span>
                  </div>
                ` : ''}

                ${phone ? `
                  <div class="contact-item">
                    <span class="contact-label">Phone</span>
                    <span class="contact-value">
                      <a href="tel:${phone}">${phone}</a>
                    </span>
                  </div>
                ` : ''}

                ${formattedService ? `
                  <div class="contact-item">
                    <span class="contact-label">Service</span>
                    <span class="contact-value">${formattedService}</span>
                  </div>
                ` : ''}

                ${formattedBudget ? `
                  <div class="contact-item" id="budget">
                    <span class="contact-label">Budget</span>
                    <span class="contact-value">${formattedBudget}</span>
                  </div>
                ` : ''}
              </div>

              <!-- Message Section -->
              <div class="message-section">
                <div class="message-label">Message</div>
                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <!-- Call to Action -->
              <div class="action-section">
                <h3 class="action-title">Ready to Connect?</h3>
                <p class="action-subtitle">Click below to reply directly to this inquiry</p>
                <a href="mailto:${email}?subject=Re: Your inquiry about ${formattedService || 'our services'}&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in our services. I'd be happy to discuss your project in more detail.%0D%0A%0D%0ABest regards,%0D%0AThe Oren Company Team" class="reply-button">
                  <span style="color: #ffffff;">Reply to ${name}</span>
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="footer-content">
                <div class="footer-brand" style="color: #000000;">Oren Company</div>
                <p style="color: #000000;">Innovative Technology Solutions</p>
                <div class="footer-timestamp">
                  ${formattedDate} at ${formattedTime}
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text fallback
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${formattedService ? `Service: ${formattedService}` : ''}
${formattedBudget ? `Budget: ${formattedBudget}` : ''}

Message:
${message}

Submitted: ${formattedDate} at ${formattedTime}

This message was sent from your website contact form.
      `,
      // Reply-to the sender's email for easy responses
      replyTo: email,
      // Optional: Add tags for better organization
      tags: [
        {
          name: "category",
          value: "contact-form",
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
