/**
 * FileName: layout.tsx
 * Name: Jedidiah Belayneh
 * Date: 2026/10/27-29
 *
 * This file defines the shared layout for the student portal.
 * It receives the page content through the children prop.
 * It arranges the Navbar, main content, and Footer vertically using Tailwind CSS.
 * The main content expands to fill the available screen space, keeping the Footer at the bottom.
 * It outputs the consistent page structure used throughout the application.
 */

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Generation High School",
  description: "Student Portal",
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en">
      <body className="flex min-h-screen flex-col bg-slate-100">
        <Navbar />

        <main className="w-full flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
