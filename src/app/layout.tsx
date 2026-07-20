import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GSAPInitializer from "@/components/GSAPInitializer";

export const metadata: Metadata = {
  title: "Al-Falah Travels and Tours - Manpower Recruitment Agency",
  description: "Premier manpower recruitment agency based in Colombo, Sri Lanka, specializing in overseas employment, travel arrangements, and staffing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <GSAPInitializer />
        <Header />
        <main style={{ flex: 1, minHeight: "60vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
