import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vansh Gajiwala — AI/ML & Full-Stack Developer",
    template: "%s | Vansh Gajiwala",
  },
  description:
    "Portfolio of Vansh Gajiwala, B.Tech CSE (AI & ML) at SRM. Multi-agent AI systems, RAG pipelines and full-stack projects — presented as an interactive macOS and iOS-style desktop.",
  keywords: [
    "Vansh Gajiwala",
    "portfolio",
    "AI",
    "machine learning",
    "multi-agent systems",
    "RAG",
    "LangChain",
    "FastAPI",
    "Next.js",
    "React",
    "Python",
    "full stack developer",
    "Chennai",
    "SRM",
    "open source",
  ],
  // TODO(vansh): Replace with your actual deployed domain once you have one
  // e.g. new URL("https://vanshgajiwala.dev")
  authors: [{ name: "Vansh Gajiwala" }],
  creator: "Vansh Gajiwala",
  metadataBase: new URL("https://vanshgajiwala.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    // TODO(vansh): Update og.url once deployed
    url: "https://vanshgajiwala.dev",
    siteName: "Vansh Gajiwala Portfolio",
    title: "Vansh Gajiwala — AI/ML & Full-Stack Developer",
    description:
      "Multi-agent AI systems, RAG pipelines and full-stack projects, presented as an interactive macOS and iOS-style desktop.",
    images: [
      {
        // TODO(vansh): Add /public/screenshot/desktop.png (any 1920×1080 screenshot)
        url: "/screenshot/desktop.png",
        width: 1920,
        height: 1080,
        alt: "Vansh Gajiwala Portfolio — macOS-inspired Desktop View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Gajiwala — AI/ML & Full-Stack Developer",
    description:
      "Multi-agent AI systems, RAG pipelines and full-stack projects, presented as an interactive macOS and iOS-style desktop.",
    images: ["/screenshot/desktop.png"],
    // TODO(vansh): Add your Twitter/X handle if you have one, e.g. "@vanshgajiwala"
    // creator: "@vanshgajiwala",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
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
    <html lang="en" className="h-full antialiased" translate="no">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-hidden bg-black text-white">
        {children}
      </body>
    </html>
  );
}
