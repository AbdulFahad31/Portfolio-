import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulfahad31.github.io/Portfolio-"),
  title: {
    default: "Abdul Fahad M | Flutter & Full-Stack Developer",
    template: "%s | Abdul Fahad M"
  },
  description:
    "Portfolio of Abdul Fahad M, a Computer Science Engineering student building Flutter apps, full-stack systems, AI tools, and scalable products.",
  keywords: [
    "Abdul Fahad M",
    "Flutter Developer",
    "Full Stack Developer",
    "Computer Science Engineer",
    "Firebase",
    "FastAPI",
    "React",
    "CrewAI"
  ],
  authors: [{ name: "Abdul Fahad M" }],
  creator: "Abdul Fahad M",
  openGraph: {
    type: "website",
    url: "https://abdulfahad31.github.io/Portfolio-",
    title: "Abdul Fahad M | Flutter & Full-Stack Developer",
    description:
      "Computer Science Engineer crafting real-world applications, hackathon-winning systems, and modern digital products.",
    siteName: "Abdul Fahad M Portfolio",
    images: [
      {
        url: "/Portfolio-/assets/og.svg",
        width: 1200,
        height: 630,
        alt: "Abdul Fahad M portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Fahad M | Flutter & Full-Stack Developer",
    description:
      "Flutter developer and full-stack builder shipping mobile apps, backend systems, and AI-powered tools.",
    images: ["/Portfolio-/assets/og.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
