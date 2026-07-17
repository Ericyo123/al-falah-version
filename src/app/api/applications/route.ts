// Applications API
// GET  /api/applications — Fetch all applications (admin-only)
// POST /api/applications — Submit a new application (public)
import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyAdmin } from "@/lib/auth";

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
    const body = await request.json();
    const {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      nationality,
      experience,
      message,
      cvBase64,
      cvName,
    } = body;

    // Validate required fields
    if (!jobId || !jobTitle || !fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields: jobId, jobTitle, fullName, email, phone" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const db = getAdminDb();
    const applicationData = {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      nationality: nationality || "",
      experience: experience || "",
      message: message || "",
      cvBase64: cvBase64 || "",
      cvName: cvName || "",
      status: "new",
      submittedAt: new Date().toISOString(),
    };

    const docRef = await db.collection("applications").add(applicationData);

    return NextResponse.json(
      {
        id: docRef.id,
        message: "Application submitted successfully",
      },
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
