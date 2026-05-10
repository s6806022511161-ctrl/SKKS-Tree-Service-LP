import type { Metadata } from "next";
import { Contact } from "@/components/landing/Contact";
import { Gallery } from "@/components/landing/Gallery";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Trust } from "@/components/landing/Trust";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "รับตัดต้นไม้แบบเหมา ชลบุรี";
const pageDescription =
  "รับจ้างตัดต้นไม้ เก็บกวาด และขนทิ้งในชลบุรี พัทยา ศรีราชา และพื้นที่ใกล้เคียง — ประเมินหน้างาน ราคาเหมาเป็นธรรม ปิดงานสะอาดปลอดภัย";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: `${pageTitle} | ${siteConfig.brandShort}`,
    description: pageDescription,
    url: "/",
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.brandShort}`,
    description: pageDescription,
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        ข้ามไปยังเนื้อหา
      </a>
      <SiteHeader />
      <main id="main" className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Trust />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
