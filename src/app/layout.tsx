import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME ?? "AWD Agency",
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME ?? "AWD Agency"}`,
  },
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Building modern web applications for your business.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://awd.mn",
  ),
  openGraph: {
    type: "website",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "AWD Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: process.env.NEXT_PUBLIC_SITE_NAME ?? "AWD Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
