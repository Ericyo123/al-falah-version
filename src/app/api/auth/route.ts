// Admin Authentication API
// POST /api/auth — Login with admin password, returns JWT
import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    const token = await authenticateAdmin(password);

    if (!token) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ token, message: "Authentication successful" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
