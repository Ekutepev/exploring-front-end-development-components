import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className="min-h-full bg-slate-100">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
