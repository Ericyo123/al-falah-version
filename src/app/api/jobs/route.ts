// Jobs CRUD API
// GET  /api/jobs — Fetch all jobs (public)
// POST /api/jobs — Create a new job (admin-only)
import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyAdmin } from "@/lib/auth";

export async function GET() {
  try {
    const db = getAdminDb();
    const jobsSnapshot = await db
      .collection("jobs")
      .orderBy("createdAt", "desc")
      .get();

    const jobs = jobsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, company, location, type, category, salary, desc } = body;

    // Validate required fields
    if (!title || !company || !location || !type || !category || !salary || !desc) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const db = getAdminDb();
    const jobData = {
      title,
      company,
      location,
      type,
      category,
      salary,
      desc,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await db.collection("jobs").add(jobData);

    return NextResponse.json(
      { id: docRef.id, ...jobData, message: "Job created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}
