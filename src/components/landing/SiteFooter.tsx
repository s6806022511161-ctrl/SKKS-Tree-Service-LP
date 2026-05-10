import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-900/40 bg-[#0f2418] py-10 text-emerald-50/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white">
            {siteConfig.businessName}
          </p>
          <p className="mt-1 text-sm text-emerald-200/90">{siteConfig.businessNameEn}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-emerald-100/85">
            {siteConfig.tagline}
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="ลิงก์ส่วนท้าย">
          <Link href="/#services" className="hover:text-white">
            บริการ
          </Link>
          <Link href="/#process" className="hover:text-white">
            ขั้นตอน
          </Link>
          <Link href="/#gallery" className="hover:text-white">
            ผลงาน
          </Link>
          <Link href="/#contact" className="hover:text-white">
            ติดต่อ
          </Link>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-emerald-200/70 sm:px-6">
        <p>
          © {year} {siteConfig.businessName}. สงวนลิขสิทธิ์ · {siteConfig.businessNameEn}
        </p>
      </div>
    </footer>
  );
}
