import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Clean, clinical display & body face.
const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  display: "swap",
});

// Prescription-label monospace.
const spaceMono = Space_Mono({
  variable: "--font-spacemono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rx Nailz — Your Prescription for Perfect Nails · Brampton",
  description:
    "Your prescription for perfect nails. Nail sets, gel and nail care at Rx Nailz, Brampton. Refills available. Dosage: every 3 weeks. 5.0 on Fresha.",
  openGraph: {
    title: "Rx Nailz — Your Prescription for Perfect Nails",
    description: "Nail sets, gel & nail care in Brampton. Refills available. 5.0 on Fresha.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable} antialiased`}>
      <body className="min-h-screen bg-paper font-sans text-ink">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
