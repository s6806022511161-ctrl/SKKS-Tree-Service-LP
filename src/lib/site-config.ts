export const siteConfig = {
  businessName: "ห้างหุ้นส่วนจำกัด SKKS ทรีเซอร์วิส",
  businessNameEn: "Limited Partnership SKKS Tree Service",
  /** เมนูบน — สั้น พอดีมือถือ */
  brandShort: "SKKS ทรีเซอร์วิส",
  tagline: "รับจ้างตัดต้นไม้ เก็บกวาด และขนทิ้ง — พื้นที่ชลบุรีและใกล้เคียง",
  phoneDisplay: "08X-XXX-XXXX",
  phoneTel: "+66800000000",
  lineUrl: "https://line.me/ti/p/~YOUR_LINE_ID",
  lineLabel: "@your_line",
  serviceAreas: [
    "เมืองชลบุรี",
    "พัทยา",
    "ศรีราชา",
    "บางละมุง",
    "อำเภออื่นในจังหวัดชลบุรี",
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
} as const;
