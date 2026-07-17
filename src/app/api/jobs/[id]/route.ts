// Individual Job API
// PUT    /api/jobs/[id] — Update a job (admin-only)
// DELETE /api/jobs/[id] — Delete a job (admin-only)
import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyAdmin } from "@/lib/auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { title, company, location, type, category, salary, desc } = body;

    if (!title || !company || !location || !type || !category || !salary || !desc) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const db = getAdminDb();
    const jobRef = db.collection("jobs").doc(id);
    const doc = await jobRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const updatedData = {
      title,
      company,
      location,
      type,
      category,
      salary,
      desc,
      updatedAt: new Date().toISOString(),
    };

    await jobRef.update(updatedData);

    return NextResponse.json({
      id,
      ...updatedData,
      message: "Job updated successfully",
    });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: "Failed to update job" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const db = getAdminDb();
    const jobRef = db.collection("jobs").doc(id);
    const doc = await jobRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    await jobRef.delete();

    return NextResponse.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { error: "Failed to delete job" },
      { status: 500 }
    );
  }
}
