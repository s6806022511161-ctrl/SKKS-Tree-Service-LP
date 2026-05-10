import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-emerald-200/60 bg-gradient-to-b from-white via-white to-emerald-50/40 py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2
              id="contact-heading"
              className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl"
            >
              ติดต่อประเมินงาน
            </h2>
            <p className="mt-3 text-emerald-800/85">
              โทรหรือแชท LINE เพื่อส่งรูปหน้างานและพิกัด — เราจะตอบกลับช่วงเวลาทำการโดยเร็วที่สุด
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--primary)] px-8 text-base font-semibold text-white shadow-md transition hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                โทร {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-emerald-800 bg-transparent px-8 text-base font-semibold text-emerald-900 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                เปิดแชท LINE {siteConfig.lineLabel}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200/80 bg-[#fbfdfb] p-6 shadow-md shadow-emerald-950/[0.05] ring-1 ring-emerald-900/[0.04] sm:p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-emerald-950">
              รายละเอียดที่ช่วยให้ประเมินงานได้รวดเร็ว
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-emerald-800/85">
              <li>พิกัดหรือโครงข่ายที่เข้าถึงหน้างานได้</li>
              <li>รูปต้นและบริบทรอบต้น (บ้าน สายไฟ รั้ว)</li>
              <li>ความสูงโดยประมาณ และจำนวนต้น</li>
              <li>ต้องการเก็บเศษไม้ไว้ในพื้นที่หรือขนออกทั้งหมด</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
