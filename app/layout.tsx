import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

// Metadata
export const metadata: Metadata = {
  title: "New Generation High School",
  description: "Student Portal",
};

// Props
interface RootLayoutProps {
  children: ReactNode;
}

// Component 
const RootLayout = ({ children }: RootLayoutProps) => {
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
};

export default RootLayout;
