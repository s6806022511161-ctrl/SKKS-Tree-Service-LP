/** แก้ค่าเหล่านี้เมื่อมีข้อมูลจริงของธุรกิจ */
export const siteConfig = {
  businessName: "บริการตัดต้นไม้แบบเหมา ชลบุรี",
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
  /** URL หลักของเว็บเมื่อ deploy — ใช้สำหรับ metadata */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
} as const;
