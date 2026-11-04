# NAUHub UI/UX 视觉设计稿与大厂级前端规范说明书

本设计规范基于 ANS 平台统一执行的 **`dachang-ui`（Linear / Vercel 级微明度分层设计系统）**、**`oil-ui`** 与 **`ans-ui-ux-baseline`（五大交付铁律）** 制定，并结合南京农业大学（NAU）的百年农科视觉基因（**钟山绿 Zhongshan Emerald**）完成定制。

> **本地实时交互设计稿预览方式**：
> 1. 直接在浏览器打开仓库内的 `public/ui-design-mockup.html`（或运行 `npm run preview:mockup`）；
> 2. 或运行 `npm install && npm run dev` 访问 `http://localhost:3456`，在页面顶栏一键切换 **「1. `/hubs` 目录挂载预览」**、**「2. `/hubs/nauhub` 详情设计稿」**、**「3. UI 规范与接入契约」**、**「EN / 中文」** 及 **「浅色 / 暗色模式」**。

---

## 1. 四大核心状态实机设计稿（UI Mockups）

### 1.1 视图一：ANS `/hubs` 目录页挂载设计稿（浅色模式 · 中文）
展示 `NAUHub · 南京农业大学` 在 ANS 主站 `/hubs` 2 列目录网格中的呈现效果，与 `CAUHub`、`ANS VibeHub`、`全栈开发 Hub` 保持完全统一的视觉语法，并通过钟山绿微边框与胶囊体现南农合作专区身份：

![NAUHub 在 ANS /hubs 目录页挂载设计稿](/Users/eeo/Downloads/ans/ans-nauhub-starter/docs/screenshots/light/directory.png)

---

### 1.2 视图二：`/hubs/nauhub` 专区详情页完整设计稿（浅色模式 · 中文）
包含紧凑头部、校籍免责说明、4 步上手路线（`STEP 01` → `STEP 04`）、南农四大 AI 创客赛道、3 个农科工程包、6 张 16:9 师生标杆项目卡（支持按学院筛选、整卡封面可点）与页尾行动闭环条：

![NAUHub 详情页完整设计稿（浅色中文）](/Users/eeo/Downloads/ans/ans-nauhub-starter/docs/screenshots/light/detail.png)

---

### 1.3 视图三：`/hubs/nauhub` 暗色模式与全英文双语设计稿（Dark Mode · EN）
展示 `#0b0b0a` 深炭背景 + `#151515` 一级浮层卡片 + `#34d399` 钟山翡翠绿高亮 + 暗色字重降 `40` 防发胖效果，以及 100% 英文（`EN`）零中文残留的国际化状态：

![NAUHub 详情页设计稿（暗色英文）](/Users/eeo/Downloads/ans/ans-nauhub-starter/docs/screenshots/dark/detail.png)

---

### 1.4 视图四：UI 设计规范标注与零源码泄露契约面板（Spec Inspector）
直观呈现色彩阶梯、卡片圆角解剖公式、双仓隔离安全边界与 `npm run verify` 自动化门禁：

![NAUHub UI 设计规范与接入契约标注图](/Users/eeo/Downloads/ans/ans-nauhub-starter/docs/screenshots/light/spec.png)

---

## 2. 色彩与微明度分层规范（`dachang-ui` Tokens）

**核心铁律：严禁在任何 CSS 中使用纯黑 `#000`、`#000000` 或 `black`。** 表面层级不靠粗黑边框或浓重阴影，而是靠 **1%–3% 的微明度差** 与 `inset 0 0 0 1px var(--border)` 内描边建立秩序。

| 变量名 | 浅色模式 (`light`) | 暗色模式 (`dark`) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `--background` | `#f5f5f3`（暖灰纸底） | `#0b0b0a`（深炭底） | 页面全局背景色 |
| `--surface-1` | `#fcfcfb`（纯净暖白） | `#151515`（一级深灰） | Hub 卡片、项目卡、赛道卡背景 |
| `--surface-2` | `#efefec` | `#1a1a19` | 卡片内交付物说明条、次级按钮底色 |
| `--surface-hover` | `#eaeae6` | `#20201e` | 鼠标悬停在可点击卡片上的微提亮底色 |
| `--foreground` | `#181816` | `#f2f2ee` | 主标题与核心正文颜色 |
| `--muted-foreground` | `#5c5c56` | `#9ca39b` | 辅助描述、学院标签、署名文字颜色 |
| `--border` | `#e2e2dc` | `#262624` | `1px` 内嵌微描边颜色 |
| `--primary` | `#1b6b4c`（南农钟山绿） | `#34d399`（钟山翡翠绿） | 主按钮、赛道高亮、步骤徽章、焦点环 |
| `--primary-soft` | `rgba(27, 107, 76, 0.10)` | `rgba(52, 211, 153, 0.13)` | 胶囊标签与徽章柔和底色 |

---

## 3. 组件解剖与排版铁律（Component Anatomy）

1. **嵌套圆角公式（`外圆角 = 内圆角 + 视觉间距`）**：
   - 项目卡片（`.entry`）外圆角固定为 `0.875rem`（`14px`），内边距 `1.125rem`（`18px`）；
   - 卡片内部的 16:9 封面图（`.cover`）圆角固定为 `0.5rem`（`8px`），严禁内外圆角相同导致边角视觉挤压。
2. **全卡可点热区（`.stretchedLink`）**：
   - 项目卡与工程包卡必须将主链接 `<a>` 放在 `<h3>` 内，并挂载 `.stretchedLink` 类（`::after { content: ""; position: absolute; inset: 0; border-radius: .875rem; }`），确保用户点击 16:9 封面图、标题或简介的任意位置都能顺畅跳转。
   - **单卡单主动作**：同一张卡片内严禁出现两个跳转到相同或不同地址的按钮。
3. **字体与数字防抖**：
   - 暗色模式下全局正文字重从 `400` 下调至 `360`（`--font-weight-body: 360`），防止深色背景上白字眩光发胖。
   - 所有数字计数、步骤编号（`STEP 01`）、积分（`10 积分`）、年份与比例必须开启 `font-variant-numeric: tabular-nums`。
   - 所有多行段落开启 `text-wrap: pretty` 防止末尾单字成行。
   - 全页最小字号不得低于 `12px`（`.75rem`），多行正文与说明框不低于 `13px`（`.8125rem`）。
4. **五大基线红线（`ans-ui-ux-baseline`）**：
   - **零虚构动态**：不伪造实时在线人数、假滚动播报或未发生的获奖记录。
   - **零原生 Emoji**：严禁出现任何系统原生 Emoji 字符，图标统一使用 `lucide-react` 线性图标。
   - **零 AI 腔词汇**：严禁出现 `赋能`、`抓手`、`底座`、`矩阵`、`心智`、`闭环`、`主理人`、`小恐龙`、`Pi Agent`。
   - **双语 100% 对齐**：切换至 `EN` 模式时，不能有任何一个中文字符或全角标点漏网。
