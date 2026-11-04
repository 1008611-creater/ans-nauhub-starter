import type { Metadata } from "next";
import "@/styles/dachang-tokens.css";

export const metadata: Metadata = {
  title: "NAUHub · 南京农业大学 AI 与智慧农科专区 | ANS (AI Never Stops)",
  description: "ANS × 南京农业大学联合开发脱敏脚手架、UI 设计稿与接入契约预览。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
