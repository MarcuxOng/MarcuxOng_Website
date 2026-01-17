import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcux Ong",
  description: "Portfolio of Marcux Ong",
  keywords: ["Software Engineer", "Full-Stack Developer", "React", "Next.js", "Python", "TypeScript", "Portfolio"],
  authors: [{ name: "Marcux Ong", url: "https://github.com/marcuxong" }],
  openGraph: {
    title: "Marcux Ong",
    description: "Portfolio of Marcux Ong",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F3EF] text-[#2D2D2D] overflow-x-hidden`}
      >
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
