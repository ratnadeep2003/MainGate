import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Backdoor - Startup Hiring",
  description: "Get direct intros to startup founders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FBFBFB] text-slate-900 min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}