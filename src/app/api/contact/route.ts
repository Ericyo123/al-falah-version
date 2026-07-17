import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, roleType, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Create the email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // authenticated sender
      replyTo: email, // replies go to the user
      to: process.env.EMAIL_USER, // send to yourselves
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0066cc;">New Website Inquiry</h2>
          <p>You have received a new message from the <strong>Al-Falah Travels & Tours</strong> contact form.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Full Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>I am a:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${roleType === "seeker" ? "Job Seeker" : "Employer / Company Partner"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
          </table>

          <h3 style="margin-top: 24px; color: #333;">Message:</h3>
          <div style="background: #f9f9f9; padding: 16px; border-left: 4px solid #0066cc; border-radius: 4px; white-space: pre-wrap; line-height: 1.5;">${message}</div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            This email was automatically generated from the contact form at al-falah-travels.com.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
