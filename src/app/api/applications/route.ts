// Applications API
// GET  /api/applications — Fetch all applications (admin-only)
// POST /api/applications — Submit a new application (public)
import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyAdmin } from "@/lib/auth";

import nodemailer from "nodemailer";

export async function GET(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = getAdminDb();
    const appsSnapshot = await db
      .collection("applications")
      .orderBy("submittedAt", "desc")
      .get();

    const applications = appsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const jobId = formData.get("jobId") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string || "";
    
    const cvFile = formData.get("cvFile") as File | null;

    if (!jobId || !jobTitle || !fullName || !email || !phone) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    let attachments = [];
    let cvName = "";
    if (cvFile) {
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      cvName = cvFile.name;
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Application: ${jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0066cc;">${jobTitle}</h2>
          <p>You have received a new application for the position of <strong>${jobTitle}</strong>.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Applicant Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
          </table>

          ${message ? `
          <h3 style="margin-top: 24px; color: #333;">Cover Letter / Message:</h3>
          <div style="background: #f9f9f9; padding: 16px; border-left: 4px solid #0066cc; border-radius: 4px; white-space: pre-wrap; line-height: 1.5;">${message}</div>
          ` : ''}

          <p style="margin-top: 24px; color: #666; font-size: 14px;">
            ${cvFile ? "The applicant's CV has been attached to this email." : "The applicant did not provide a CV."}
          </p>
        </div>
      `,
      attachments,
    };

    const userMailOptions = {
      from: `"Al-Falah Travels & Tours" <${process.env.EMAIL_USER}>`,
      to: email, // Applicant's email address
      subject: `Application Received: ${jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0066cc;">Thank you for your application!</h2>
          <p>Dear ${fullName},</p>
          <p>We have successfully received your application for the <strong>${jobTitle}</strong> position.</p>
          <p>Our recruitment team will review your CV and get back to you if your qualifications match our current requirements.</p>
          <p>Best regards,<br/><strong>Al-Falah Travels & Tours Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <div style="text-align: center; margin-top: 20px;">
            <img src="https://raw.githubusercontent.com/Ericyo123/al-falah-version/main/public/assets/images/logo.png" alt="Al-Falah Travels & Tours" style="height: 50px; width: auto; margin-bottom: 12px;" />
            <p style="color: #555; font-size: 14px; margin: 4px 0;"><strong>Al-Falah Travels & Tours</strong></p>
            <p style="color: #777; font-size: 12px; margin: 4px 0;">Connecting global talent with industry-leading companies in the GCC.</p>
            <p style="color: #999; font-size: 11px; margin: 8px 0 0 0;">This is an automated message, please do not reply directly to this email.</p>
          </div>
        </div>
      `,
    };

    const db = getAdminDb();
    const applicationData = {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      message,
      cvName,
      cvUrl: "",
      cvBase64: "",
      status: "new",
      submittedAt: new Date().toISOString(),
    };

    // Run both email sending and database insertion concurrently to reduce latency
    const [, , docRef] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(userMailOptions), // Send to the applicant
      db.collection("applications").add(applicationData)
    ]);

    return NextResponse.json(
      { id: docRef.id, message: "Application submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
