import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shriya Alva | AI & Full-Stack Developer",
  description:
    "B.Tech Information Science student specializing in AI, Computer Vision, and Full-Stack Development. Explore projects, leadership, and technical skills.",
  keywords: [
    "Shriya Alva",
    "AI Developer",
    "Full Stack Developer",
    "Computer Vision",
    "Portfolio",
    "NMAMIT",
  ],
  authors: [{ name: "Shriya Alva" }],
  creator: "Shriya Alva",
  openGraph: {
    title: "Shriya Alva | Portfolio",
    description:
      "AI & Full-Stack Developer | Projects, Skills, Leadership",
    url: "https://portfolio-alpha-sable-36.vercel.app/",
    siteName: "Shriya Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}