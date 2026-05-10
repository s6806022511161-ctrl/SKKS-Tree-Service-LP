const services = [
  {
    title: "ตัดต้นไม้แบบเหมา",
    description:
      "รับเหมาตัด ลดความสูง หรือถอนต้นตามความเหมาะสมกับพื้นที่และความปลอดภัยของบ้านและเพื่อนบ้าน",
    icon: "🌳",
  },
  {
    title: "เก็บกวาดกิ่งและใบไม้",
    description:
      "จัดเก็บเศษกิ่งใบในพื้นที่ทำงานให้เป็นระเบียบ พร้อมส่งต่อขั้นตอนขนทิ้งหรือทำปุ๋ยตามตกลง",
    icon: "🧹",
  },
  {
    title: "ขนเศษไม้ออกจากพื้นที่",
    description:
      "จัดรถและทีมขนเศษไม้ออกจากพื้นที่ เหมาะสำหรับงานที่มีปริมาณมากหรือข้อจำกัดเรื่องที่เก็บ",
    icon: "🚛",
  },
  {
    title: "ประเมินหน้างานและวางแผนปฏิบัติงาน",
    description:
      "สำรวจพื้นที่ ประเมินความเสี่ยง และเสนอแผนปฏิบัติงานเบื้องต้นก่อนตกลงราคาและวันเข้าทำงาน",
    icon: "📋",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-[var(--card-border)] bg-[var(--card)] py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl"
          >
            บริการของเรา
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            เลือกบริการตามความต้องการของพื้นที่ — เหมาตัด เก็บกวาด หรือขนทิ้งครบวงจร
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
