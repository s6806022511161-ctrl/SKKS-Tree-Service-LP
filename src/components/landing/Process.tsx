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
      className="scroll-mt-24 border-b border-emerald-200/70 bg-gradient-to-b from-emerald-50/95 via-[#eef5ef] to-[#f6f7f4] py-16 sm:py-20"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="process-heading"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl"
        >
          ขั้นตอนการทำงาน
        </h2>
        <p className="mt-3 max-w-2xl text-emerald-800/85">
          ลำดับตามนี้ช่วยให้ประเมินราคาและผลลัพธ์ชัดเจน ลดความคลาดเคลื่อนระหว่างผู้ว่าจ้างและทีมงาน
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative flex gap-4 rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-md shadow-emerald-950/[0.06] ring-1 ring-emerald-900/[0.04]"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-800 font-[family-name:var(--font-heading)] text-lg font-bold text-white shadow-inner shadow-emerald-950/20 ring-2 ring-emerald-600/30"
                aria-hidden
              >
                {item.step}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-emerald-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-800/85">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
