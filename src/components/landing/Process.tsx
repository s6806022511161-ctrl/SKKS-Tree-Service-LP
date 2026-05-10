const steps = [
  {
    step: "1",
    title: "แจ้งพื้นที่และขอบเขตงาน",
    detail: "โทรหรือแชร์พิกัด / รูปหน้างาน — แจ้งชนิดต้น ขนาดโดยประมาณ และข้อจำกัดของพื้นที่",
  },
  {
    step: "2",
    title: "นัดสำรวจหรือประเมินเบื้องต้น",
    detail: "ทีมงานประเมินความปลอดภัย เส้นทางเข้าออก และอุปกรณ์ที่ต้องใช้",
  },
  {
    step: "3",
    title: "ยืนยันราคาและวันเข้าทำงาน",
    detail: "สรุปขอบเขตแบบเหมา ระยะเวลา และวิธีจัดเก็บเศษไม้ให้ตรงความต้องการ",
  },
  {
    step: "4",
    title: "ปฏิบัติงานและตรวจรับ",
    detail: "ทำงานตามแผน เก็บกวาดพื้นที่ และให้คุณตรวจก่อนปิดจ็อบ",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-b border-[var(--card-border)] bg-[var(--background)] py-16 sm:py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="process-heading"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          ขั้นตอนการทำงาน
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          ลำดับตามนี้ช่วยให้ประเมินราคาและผลลัพธ์ชัดเจน ลดความคลาดเคลื่อนระหว่างผู้ว่าจ้างและทีมงาน
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative flex gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-[family-name:var(--font-heading)] text-lg font-bold text-white"
                aria-hidden
              >
                {item.step}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
