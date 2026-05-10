import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[min(100svh,880px)] overflow-hidden border-b border-[var(--card-border)] bg-[#0d2818]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/bg-top.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d2818]/92 via-[#0d2818]/78 to-emerald-950/88"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(196, 160, 53, 0.2), transparent 45%), radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.08), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-12 lg:py-24">
        <div className="flex-1 space-y-6 text-white">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-emerald-100 ring-1 ring-white/15">
            ให้บริการในพื้นที่จังหวัดชลบุรี
          </p>
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            รับจ้างตัดต้นไม้แบบเหมา
            <span className="mt-2 block text-emerald-200">
              ประเมินหน้างาน · ราคาเป็นธรรม · เก็บงานสะอาด
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-emerald-50/95">
            {siteConfig.tagline} เหมาะสำหรับบ้านพัก โรงงาน โรงเรียน และพื้นที่ส่วนตัว
            ที่ต้องการความปลอดภัยและความเรียบร้อยหลังจบงาน
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex min-h-14 min-w-[200px] items-center justify-center rounded-full bg-[var(--accent)] px-8 text-base font-semibold text-[#1a2e1f] shadow-lg shadow-black/20 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              โทรหาทีมงาน {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 min-w-[200px] items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              แชท LINE {siteConfig.lineLabel}
            </a>
          </div>
        </div>
        <div className="flex-1 lg:max-w-md">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur-md">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white">
              พื้นที่ให้บริการหลัก
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="พื้นที่ให้บริการ">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area}>
                  <span className="inline-flex rounded-full bg-emerald-900/80 px-3 py-1 text-sm text-emerald-50 ring-1 ring-emerald-700/80">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-emerald-100/90">
              หากพื้นที่ของคุณอยู่นอกรายการ โทรสอบถามได้ — เราจัดทีมและอุปกรณ์ให้เหมาะกับขนาดงาน
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
            >
              ขอประเมินงาน / ส่งรูปหน้างาน
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
