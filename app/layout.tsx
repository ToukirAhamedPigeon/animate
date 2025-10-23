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

export const metadata: Metadata = {
  title: "Animate Pigeonic | Framer Motion & GSAP Animations",
  description: "Explore 20+ Framer Motion and GSAP animations with React, TailwindCSS, and TypeScript. Examples, code snippets, and explanations included.",
  keywords: [
    "Next.js",
    "Framer Motion",
    "GSAP",
    "React animations",
    "TailwindCSS",
    "TypeScript",
    "Web animation",
    "Frontend UI",
    "Tech showcase",
    "Portfolio",
  ],
  authors: [{ name: "Toukir Ahamed", url: "https://pigeonic.com" }],
  openGraph: {
    title: "Animate Pigeonic | Framer Motion & GSAP Animations",
    description:
      "Interactive showcase of Framer Motion and GSAP animations with code snippets, explanations, and real-world use cases.",
    url: "https://animate.pigeonic.com",
    siteName: "Animate Pigeonic",
    images: [
      {
        url: "https://animate.pigeonic.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Animate Pigeonic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animate Pigeonic | Framer Motion & GSAP Animations",
    description:
      "Explore interactive Framer Motion and GSAP animations with code examples and explanations.",
    site: "@ToukirAhamed",
    images: ["https://animate.pigeonic.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo.png"
        />
        <meta name="theme-color" content="#1f2937" />
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* PWA Service Worker */}
        <script>
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js');
              });
            }
          `}
        </script>
      </body>
    </html>
  );
}
