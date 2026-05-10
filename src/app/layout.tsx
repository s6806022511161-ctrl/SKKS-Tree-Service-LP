import type { Metadata, Viewport } from "next";
import { Kanit, Sarabun } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const kanit = Kanit({
  weight: ["500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
  display: "swap",
});

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-sarabun",
  display: "swap",
});

const defaultTitle = `${siteConfig.brandShort} | รับตัดต้นไม้แบบเหมา ชลบุรี`;
const defaultDescription =
  "รับจ้างตัดต้นไม้แบบเหมา เก็บกวาดกิ่งใบ และขนทิ้งอย่างปลอดภัย ในพื้นที่ชลบุรี — ประเมินหน้างาน ให้ราคาเป็นธรรม ทีมพร้อมลงพื้นที่";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.brandShort}`,
  },
  description: defaultDescription,
  keywords: [
    "รับตัดต้นไม้",
    "ตัดต้นไม้ เหมา",
    "ชลบุรี",
    "รับจ้างตัดต้นไม้",
    "พัทยา",
    "ศรีราชา",
    "SKKS Tree Service",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    title: defaultTitle,
    description: defaultDescription,
    siteName: siteConfig.brandShort,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b5e3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${sarabun.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
