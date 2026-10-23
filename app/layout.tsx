import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Generation High School",
  description: "Student Portal",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
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
