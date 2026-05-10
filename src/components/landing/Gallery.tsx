import Image from "next/image";

const galleryItems = [
  {
    src: "/cutting-tree.jpg",
    alt: "งานตัดต้นไม้ในพื้นที่ชลบุรี — ทีมกำลังดำเนินการตัดและจัดการกิ่งไม้อย่างปลอดภัย",
    caption: "ระหว่างปฏิบัติงานตัดต้นไม้",
  },
  {
    src: "/gear.jpg",
    alt: "อุปกรณ์และเครื่องมือสำหรับงานตัดต้นไม้และเก็บกวาดในพื้นที่จำกัด",
    caption: "อุปกรณ์และการเตรียมพื้นที่",
  },
  {
    src: "/after.jpg",
    alt: "พื้นที่หลังเก็บกวาดเรียบร้อยหลังจบงานตัดต้นไม้ในชลบุรี",
    caption: "หลังเก็บงานและพื้นที่โปร่งสะอาด",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-b border-emerald-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="gallery-heading"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl"
        >
          ผลงาน
        </h2>
        <p className="mt-3 max-w-2xl text-emerald-800/85">
          ภาพจากงานจริง — แสดงขั้นตอนทำงาน อุปกรณ์ และผลหลังเก็บพื้นที่ให้เรียบร้อย
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {galleryItems.map((item) => (
            <li key={item.src}>
              <figure className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-[#fbfdfb] shadow-md shadow-emerald-950/[0.06] ring-1 ring-emerald-900/[0.04]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-emerald-200/70 bg-white px-4 py-3 text-sm text-emerald-800/85">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
