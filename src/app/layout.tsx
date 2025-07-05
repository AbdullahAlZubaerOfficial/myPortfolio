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
  title: "Portfolio | Abdullah Al Zubaer Mern Stack Developer",
  description:
    "Hi! I’m Abdullah Al Zubaer, a passionate MERN Stack Web Developer, Digital Marketer, and lifelong learner from Bangladesh 🇧🇩. With over 50+ completed projects for clients worldwide 🌍, I specialize in building responsive, dynamic, and high-performance web applications using React.js, Next.js, Firebase, MongoDB, and Tailwind CSS.I am also experienced in SEO, social media marketing, and content creation — including video and image editing to enhance digital presence. I’m currently pursuing my BSc in Computer Science and Engineering (CSE), aiming to become a Data Scientist and work at top companies like Google or Microsoft 🚀.Besides coding, I love teaching students (Class 1–10), running home tuition services, and exploring new technologies. My goal is to combine my skills in development, marketing, and education to build impactful products and empower others 💡.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white transition-colors dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
