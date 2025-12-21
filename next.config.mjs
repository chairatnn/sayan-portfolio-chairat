/** @type {import('next').NextConfig} */
const nextConfig = {
     // เพิ่มส่วนนี้เพื่อบังคับให้ Next.js รับรู้ค่าตัวแปร
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  },
  // การตั้งค่าอื่นๆ...
};

export default nextConfig;
