// ❌ DON'T add "use client" here

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Devfolio | Portfolio Website using Next.js, Tailwind CSS, and Framer Motion",
  description:
    "Devfolio is a portfolio website for developers to showcase their projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white transition-colors dark:bg-gray-900 dark:text-white text-base sm:text-[15px] md:text-[16px] lg:text-[17px]">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
