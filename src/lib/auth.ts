// JWT Authentication Utilities
// Handles token signing and verification for admin access
import { SignJWT, jwtVerify } from "jose";
import { NextRequest } from "next/server";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-dev-secret-change-in-production"
);

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

/**
 * Verify the admin password and return a signed JWT token
 */
export async function authenticateAdmin(password: string): Promise<string | null> {
  if (password !== ADMIN_PASSWORD) {
    return null;
  }

  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify a JWT token from the request Authorization header
 */
export async function verifyAdmin(request: NextRequest): Promise<boolean> {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return false;
    }

    const token = authHeader.split(" ")[1];
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.role === "admin";
  } catch {
    return false;
  }
}
