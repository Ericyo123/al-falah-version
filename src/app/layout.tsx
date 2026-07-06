import type { Metadata } from "next";
import { Rethink_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

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
    <html lang="en" className={`${rethinkSans.variable} ${roboto.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main style={{ flex: 1, minHeight: "60vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
