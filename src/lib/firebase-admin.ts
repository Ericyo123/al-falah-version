// Firebase Admin SDK Configuration
// Used server-side in API routes for secure Firestore operations
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminApp: App;
let adminDb: Firestore;

function getAdminApp(): App {
  if (getApps().length === 0) {
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    if (serviceAccountKey) {
      // Parse the service account JSON from environment variable
      const serviceAccount = JSON.parse(serviceAccountKey);
      adminApp = initializeApp({
        credential: cert(serviceAccount),
      });
    } else {
      // Fallback: initialize without credentials (for local dev with emulator)
      adminApp = initializeApp();
    }
  } else {
    adminApp = getApps()[0];
  }
  return adminApp;
}

function getAdminDb(): Firestore {
  if (!adminDb) {
    const app = getAdminApp();
    adminDb = getFirestore(app);
  }
  return adminDb;
}

export { getAdminApp, getAdminDb };
