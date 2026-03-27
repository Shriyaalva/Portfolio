import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Site Config ──────────────────────────────────────────────────
const SITE_URL = "https://portfolio-alpha-sable-36.vercel.app";
const SITE_NAME = "Shriya Alva";
const SITE_TITLE = "Shriya Alva | Passionate Full Stack Developer";
const SITE_DESCRIPTION =
  "Full Stack Developer Portfolio showcasing web development projects, AI solutions, and real-world applications.";
// ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────────────────────────
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Shriya Alva",
    "Full Stack Developer",
    "AI ML Developer",
    "Portfolio",
    "React Developer",
    "Python Developer",
    "Machine Learning",
    "Web Development",
    "B.Tech Information Science",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,

  // ── Canonical URL ──────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (LinkedIn, WhatsApp, Facebook previews) ─────────
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 800,
        alt: "Shriya Alva - Software Developer Portfolio",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter / X Card ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/profile.jpeg"],
    creator: "@shriyaalva",
  },

  // ── Favicon & Icons ────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ── Robots ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Theme color for mobile browsers ── */}
        <meta name="theme-color" content="#6366f1" />

        {/* ── Structured Data (JSON-LD) for Google ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shriya Alva",
              url: SITE_URL,
              jobTitle: "Full Stack Developer & AI/ML Engineer",
              description: SITE_DESCRIPTION,
              sameAs: [
                "https://github.com/Shriyaalva",
                "https://www.linkedin.com/in/shriya-alva/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}