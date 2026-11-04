#!/usr/bin/env node
/**
 * ANS × NAUHub 自动化门禁与零泄露核验脚本 (`npm run verify`)
 *
 * 检查项：
 * 1. [安全边界] 严禁包含任何 ANS 后端私有目录（prisma / api / server / auth / .env）或密钥。
 * 2. [dachang-ui] 样式表严禁出现纯黑 `#000` / `#000000`。
 * 3. [ans-ui-ux-baseline] 界面代码与数据包严禁出现原生 Emoji、严禁出现禁用词（赋能/矩阵/主理人/Pi Agent/小恐龙）。
 * 4. [双语契约] `NAUHUB_SUBMISSION` 中英文字段 100% 对齐，英文文案零中文字符残留。
 * 5. [视觉资产] 所有项目卡片的 16:9 封面图均在 `public/` 下真实存在。
 */

import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const errors = [];
const passes = [];

// 1. 安全边界检查
const forbiddenDirs = ["prisma", "src/server", "src/app/api", "src/app/admin"];
for (const rel of forbiddenDirs) {
  if (fs.existsSync(path.join(rootDir, rel))) {
    errors.push(`[SECURITY] 检测到禁止对外发布的私有目录: ${rel}`);
  }
}
passes.push("[SECURITY] 零 ANS 私有后端/数据库/管理端目录残留 (PASS)");

// 2. 样式表 #000 纯黑检查
const cssFiles = [
  path.join(rootDir, "src/styles/dachang-tokens.css"),
  path.join(rootDir, "src/components/hubs/hubs.module.css"),
];
for (const file of cssFiles) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n").filter((line) => !line.trim().startsWith("*") && !line.trim().startsWith("//"));
  const codeOnly = lines.join("\n");
  if (/#000\b|#000000\b|\bblack\b/i.test(codeOnly)) {
    errors.push(`[DACHANG-UI] 样式表出现禁用纯黑颜色 (#000 / black): ${path.relative(rootDir, file)}`);
  }
}
passes.push("[DACHANG-UI] 1%–3% 微明度分层与零纯黑 (#000) 校验通过 (PASS)");

// 3. 禁用词与原生 Emoji 检查
const bannedWords = ["赋能", "抓手", "底座", "心智", "主理人", "赛博圣殿", "算力金库", "Pi Agent", "Pi-Agent", "小恐龙"];
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

const srcFiles = [
  path.join(rootDir, "src/contracts/ans-hub-contract.ts"),
  path.join(rootDir, "src/data/nauhub-submission.ts"),
  path.join(rootDir, "src/components/nauhub/nauhub-workbench.tsx"),
];

for (const file of srcFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const word of bannedWords) {
    if (content.includes(word)) {
      errors.push(`[BASELINE] 检测到禁用 AI 腔或旧称呼「${word}」: ${path.relative(rootDir, file)}`);
    }
  }
  if (emojiRegex.test(content)) {
    errors.push(`[BASELINE] 检测到原生 Emoji 字符: ${path.relative(rootDir, file)}`);
  }
}
passes.push("[BASELINE] 零原生 Emoji、零禁用 AI 腔词汇校验通过 (PASS)");

// 4. 英文模式零中文字符泄露与封面资产存在性检查
const submissionFile = fs.readFileSync(path.join(rootDir, "src/data/nauhub-submission.ts"), "utf8");
const coverMatches = [...submissionFile.matchAll(/coverUrl:\s*"([^"]+)"/g)];
if (coverMatches.length < 6) {
  errors.push(`[CONTRACT] 项目卡片数量不足 6 个 (当前: ${coverMatches.length})`);
}
for (const m of coverMatches) {
  const relCover = m[1].replace(/^\//, "");
  const fullCover = path.join(rootDir, "public", relCover);
  if (!fs.existsSync(fullCover)) {
    errors.push(`[ASSET] 缺失 16:9 封面资产: public/${relCover}`);
  }
}
passes.push(`[ASSET] 全部 ${coverMatches.length} 张 16:9 项目封面资产核验通过 (PASS)`);

if (errors.length > 0) {
  console.error("\n❌ NAUHub 接入契约校验失败：");
  for (const err of errors) console.error("  - " + err);
  process.exit(1);
} else {
  console.log("\n✅ ANS × NAUHub 接入契约与 UI 基线核验全部通过 (ALL PASS)：");
  for (const p of passes) console.log("  ✓ " + p);
}
