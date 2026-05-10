import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/#top"
          className="font-[family-name:var(--font-heading)] leading-tight tracking-tight text-[var(--foreground)]"
          title={siteConfig.businessName}
        >
          <span className="block text-base font-semibold sm:text-lg">{siteConfig.brandShort}</span>
          <span className="mt-0.5 block max-w-[14rem] truncate text-[10px] font-normal leading-snug text-[var(--muted)] sm:max-w-[20rem] sm:text-xs">
            {siteConfig.businessNameEn}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex"
          aria-label="ลิงก์ภายในหน้า"
        >
          <Link href="/#services" className="transition hover:text-[var(--primary)]">
            บริการ
          </Link>
          <Link href="/#process" className="transition hover:text-[var(--primary)]">
            ขั้นตอน
          </Link>
          <Link href="/#gallery" className="transition hover:text-[var(--primary)]">
            ผลงาน
          </Link>
          <Link href="/#contact" className="transition hover:text-[var(--primary)]">
            ติดต่อ
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:min-h-10 sm:px-5"
          >
            โทร {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
