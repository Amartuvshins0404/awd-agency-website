import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWD Agency | Монгол бизнесийн вэб шийдэл",
  description:
    "AWD Agency — монгол бизнесүүдэд зориулсан дэвшилтэт вэб сайт, онлайн дэлгүүр, вэб апп хөгжүүлэлт. Мэргэжлийн дизайн, хурдан хүргэлт.",
  keywords: "вэб сайт, онлайн дэлгүүр, вэб хөгжүүлэлт, монгол, AWD Agency",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://awd.mn"),
  openGraph: {
    title: "AWD Agency | Монгол бизнесийн вэб шийдэл",
    description:
      "Монгол бизнест зориулсан мэргэжлийн вэб шийдэл — хурдан, үзэсгэлэнтэй, ашигтай",
    type: "website",
    locale: "mn_MN",
    siteName: "AWD Agency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="grain-overlay bg-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
