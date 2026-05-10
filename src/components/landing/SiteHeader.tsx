import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-200/70 bg-[#f6f7f4]/95 shadow-sm shadow-emerald-950/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-6">
        <Link
          href="/#top"
          className="min-w-0 shrink font-[family-name:var(--font-heading)] leading-tight tracking-tight text-emerald-950"
          title={siteConfig.businessName}
        >
          <span className="block text-base font-semibold sm:text-lg">{siteConfig.brandShort}</span>
          <span className="mt-0.5 block max-w-[12rem] truncate text-[10px] font-normal leading-snug text-emerald-700/85 sm:text-xs md:max-w-xl md:overflow-visible md:whitespace-normal md:text-clip">
            {siteConfig.businessNameEn}
          </span>
        </Link>
        <nav
          className="order-last hidden w-full justify-center gap-5 text-sm font-medium text-emerald-800/90 md:order-none md:flex md:w-auto md:flex-1 md:px-2 lg:gap-8"
          aria-label="ลิงก์ภายในหน้า"
        >
          <Link href="/#services" className="transition hover:text-emerald-950">
            บริการ
          </Link>
          <Link href="/#process" className="transition hover:text-emerald-950">
            ขั้นตอน
          </Link>
          <Link href="/#gallery" className="transition hover:text-emerald-950">
            ผลงาน
          </Link>
          <Link href="/#contact" className="transition hover:text-emerald-950">
            ติดต่อ
          </Link>
        </nav>
        <div className="ml-auto flex shrink-0 items-center md:ml-0">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-950/15 transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:min-h-10 sm:px-5"
          >
            โทร {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
