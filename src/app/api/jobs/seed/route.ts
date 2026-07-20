import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase-admin";
import { verifyAdmin } from "@/lib/auth";

const FALLBACK_JOBS = [
  {
    title: "Quantity Surveyor",
    company: "Habtoor Leighton Group",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "engineering",
    salary: "6,500 - 8,000 QAR / Mo.",
    desc: "Estimate materials, manage construction costs, prepare bills of quantities, and liaise with site project managers for a major commercial project.",
  },
  {
    title: "Executive Chef (International Cuisine)",
    company: "Sheraton Hotels & Resorts",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "hospitality",
    salary: "7,000 - 9,500 QAR / Mo.",
    desc: "Direct food preparation, plan high-end banquets, manage kitchen budgets, and supervise culinary staff in a busy 5-star hotel kitchen.",
  },
  {
    title: "Structural Engineer",
    company: "Redco Construction Almana",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "engineering",
    salary: "9,000 - 12,000 QAR / Mo.",
    desc: "Oversee concrete and steel structural design, review blueprints, and monitor safety compliance on-site at high-rise construction projects.",
  },
  {
    title: "Senior MEP Supervisor",
    company: "Kharafi National",
    location: "Riyadh, Saudi Arabia",
    type: "Full-Time",
    category: "technical",
    salary: "5,000 - 6,500 SAR / Mo.",
    desc: "Supervise mechanical, electrical, and plumbing installations, coordinate with subcontractors, and perform technical quality audits.",
  },
  {
    title: "HVAC Project Technician",
    company: "Drake & Scull International",
    location: "Dubai, UAE",
    type: "Full-Time",
    category: "technical",
    salary: "3,500 - 4,500 AED / Mo.",
    desc: "Install and commission central chiller plants, troubleshoot complex HVAC systems, and carry out routine commercial maintenance.",
  },
  {
    title: "Staff Nurse (ICU/ER)",
    company: "Aster DM Healthcare",
    location: "Dubai, UAE",
    type: "Full-Time",
    category: "healthcare",
    salary: "6,500 - 8,000 AED / Mo.",
    desc: "Provide critical bedside patient care, administer emergency treatments, and maintain patient logs in a fast-paced ICU department.",
  },
  {
    title: "Hotel Front Office Supervisor",
    company: "Radisson Blu Hotel",
    location: "Kuwait City, Kuwait",
    type: "Full-Time",
    category: "hospitality",
    salary: "350 - 450 KWD / Mo.",
    desc: "Lead the front desk reception team, resolve guest service issues, handle VIP check-ins, and manage shift logs and bookings.",
  },
  {
    title: "Heavy Duty Crane Operator",
    company: "CCC (Consolidated Contractors Company)",
    location: "Muscat, Oman",
    type: "Full-Time",
    category: "logistics",
    salary: "400 - 550 OMR / Mo.",
    desc: "Safely operate heavy tower and crawler cranes on large-scale infrastructure projects, following strict lifting plans and safety guidelines.",
  },
  {
    title: "Logistics & Warehouse Administrator",
    company: "DHL Global Forwarding",
    location: "Manama, Bahrain",
    type: "Full-Time",
    category: "logistics",
    salary: "450 - 600 BHD / Mo.",
    desc: "Coordinate inbound/outbound shipments, track inventory controls, prepare customs documents, and manage warehouse dispatch teams.",
  },
  {
    title: "Light Vehicle Driver",
    company: "Al-Sayer Group",
    location: "Kuwait City, Kuwait",
    type: "Full-Time",
    category: "logistics",
    salary: "150 - 180 KWD / Mo.",
    desc: "Drive passenger cars and delivery vans for corporate clients. Responsible for route planning, vehicle upkeep, and maintaining logs.",
  },
  {
    title: "Heavy Vehicle Driver",
    company: "Nesma & Partners",
    location: "Riyadh, Saudi Arabia",
    type: "Contract",
    category: "logistics",
    salary: "2,500 - 3,200 SAR / Mo.",
    desc: "Transport heavy construction materials, rigids, and trailers safely between project sites. Assist in secure cargo loading.",
  },
  {
    title: "Quality Assurance (QA) Inspector",
    company: "Consolidated Contractors Company",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "technical",
    salary: "8,000 - 10,000 QAR / Mo.",
    desc: "Conduct quality assurance and control inspections on electrical and mechanical installations, prepare verification reports, and enforce standards.",
  },
  {
    title: "General Cleaner & Pantry Assistant",
    company: "EMAAR Properties",
    location: "Dubai, UAE",
    type: "Full-Time",
    category: "hospitality",
    salary: "1,200 - 1,500 AED / Mo.",
    desc: "Perform general cleaning, sanitization, and maintenance of premium commercial complexes and offices. Assist with basic pantry setups.",
  },
  {
    title: "Warehouse Assistant & Loader",
    company: "Landmark Group",
    location: "Manama, Bahrain",
    type: "Full-Time",
    category: "logistics",
    salary: "180 - 220 BHD / Mo.",
    desc: "Unload shipments, inspect merchandise boxes, tag item categories, place inventory onto shelves, and coordinate with dispatch coordinators.",
  },
  {
    title: "Clinic Caregiver & Home Support Aide",
    company: "Al-Ahli Hospital",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "healthcare",
    salary: "3,500 - 4,200 QAR / Mo.",
    desc: "Assist patients with daily clinical procedures and support activities. Take vitals, record files, and assist nursing staff on duty.",
  },
  {
    title: "Industrial Maintenance Electrician",
    company: "Saudi Oger Ltd",
    location: "Jeddah, Saudi Arabia",
    type: "Full-Time",
    category: "technical",
    salary: "3,000 - 4,000 SAR / Mo.",
    desc: "Perform layout tests, repair heavy industrial cables, troubleshoot motors, and maintain main electrical panels in factory buildings.",
  }
];

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await verifyAdmin(request);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const adminDb = getAdminDb();
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
