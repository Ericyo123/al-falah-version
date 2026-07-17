import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { verifyAdmin } from "@/lib/auth";

const FALLBACK_JOBS = [
  {
    title: "Senior Electrical & PLC Technician",
    company: "Al-Rashed Contracting Co.",
    location: "Riyadh, Saudi Arabia",
    type: "Full-Time",
    category: "technical",
    salary: "3,200 - 4,000 SAR / Mo.",
    desc: "Oversee commercial electrical panel boards, installation, diagnostics, and PLC troubleshooting on-site.",
  },
  {
    title: "Executive Chef / F&B Kitchen Lead",
    company: "Hilton Plaza Hotels",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "hospitality",
    salary: "5,500 - 7,000 QAR / Mo.",
    desc: "Supervise production of high-end international culinary dishes, menu design, and kitchen staff schedules.",
  },
  {
    title: "HVAC Maintenance Technician",
    company: "Gulf Infra Services",
    location: "Dubai, UAE",
    type: "Full-Time",
    category: "technical",
    salary: "2,500 - 3,200 AED / Mo.",
    desc: "Perform preventative maintenance, compressor repair, and system diagnostics for central AC plants.",
  },
  {
    title: "Heavy Crane & Rigging Operator",
    company: "Kuwait Oilfield Services",
    location: "Kuwait City, Kuwait",
    type: "Full-Time",
    category: "logistics",
    salary: "320 - 380 KWD / Mo.",
    desc: "Safely operate heavy cranes, rigging systems, and load transport machinery in oil & gas facilities.",
  },
  {
    title: "Clinical Nursing Assistant",
    company: "Al-Amal Medical Group",
    location: "Abu Dhabi, UAE",
    type: "Full-Time",
    category: "healthcare",
    salary: "4,500 - 5,500 AED / Mo.",
    desc: "Assist registered staff in patient check-in, bedside care, records management, and ward coordination.",
  },
  {
    title: "Civil Site Surveyor",
    company: "Bahrain Development Group",
    location: "Manama, Bahrain",
    type: "Full-Time",
    category: "engineering",
    salary: "400 - 500 BHD / Mo.",
    desc: "Lead geographical mapping, surveying, site leveling, and coordination with lead project architects.",
  },
];

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdmin(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!adminDb) {
      return NextResponse.json(
        { error: "Firebase Admin is not configured. Please add the FIREBASE_SERVICE_ACCOUNT_KEY." },
        { status: 500 }
      );
    }

    // Check if jobs already exist to prevent duplicate seeding
    const snapshot = await adminDb.collection("jobs").limit(1).get();
    if (!snapshot.empty) {
      return NextResponse.json(
        { error: "Database already contains jobs. Cannot seed." },
        { status: 400 }
      );
    }

    const batch = adminDb.batch();

    FALLBACK_JOBS.forEach((job) => {
      const docRef = adminDb.collection("jobs").doc();
      batch.set(docRef, {
        ...job,
        createdAt: new Date().toISOString(),
      });
    });

    await batch.commit();

    return NextResponse.json({ message: "Initial jobs seeded successfully" });
  } catch (error: any) {
    console.error("Error seeding jobs:", error);
    return NextResponse.json(
      { error: "Failed to seed jobs" },
      { status: 500 }
    );
  }
}
