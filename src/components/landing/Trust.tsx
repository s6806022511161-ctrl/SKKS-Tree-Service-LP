const points = [
  {
    title: "เน้นความปลอดภัยในพื้นที่จำกัด",
    body: "วางแผนเส้นทางตกกิ่งและจุดวางอุปกรณ์ให้เหมาะกับบ้านพักและชุมชน",
  },
  {
    title: "ขอบเขตงานชัด — สรุปเป็นลายลักษณ์อักษร",
    body: "ลดความสับสนเรื่องราคาและขอบเขตเหมา ก่อนเริ่มเลื่อย",
  },
  {
    title: "พื้นที่ชลบุรีและใกล้เคียง",
    body: "คุ้นเคยเส้นทางและการประสานพื้นที่ในโซนพัทยา ศรีราชา และตัวเมืองชลบุรี",
  },
];

export function Trust() {
  return (
    <section
      className="border-b border-[var(--card-border)] bg-[var(--background)] py-16 sm:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="trust-heading"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          ทำไมควรโทรปรึกษาก่อน
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          โทรปรึกษาก่อนช่วยให้ประเมินความเสี่ยงของพื้นที่ วางแผนเส้นทางทำงาน และสรุปขอบเขตค่าใช้จ่ายได้ชัดเจน
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
