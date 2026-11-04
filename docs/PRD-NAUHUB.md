# ANS × 南京农业大学 `NAUHub` 产品需求文档（PRD）与零源码泄露接入契约 v1.0

- **项目名称**：NAUHub（南京农业大学 AI 与智慧农科专区）
- **宿主平台**：ANS（AI Never Stops，`https://ans.cauai.fun`）
- **最终上线入口**：
  - 主站 Hub 目录页挂载：`https://ans.cauai.fun/hubs`（`slug: "nauhub"`）
  - 专区独立详情页：`https://ans.cauai.fun/hubs/nauhub`（支持扩展独立交互子路由 `/nau-hub`）
- **联合开发模式**：**双仓物理隔离 + 强类型契约合入**（南农团队基于公开脱敏脚手架 `ans-nauhub-starter` 独立开发，无需接触 ANS 私有后端与数据库源码；验收通过后由 ANS 团队 5 分钟内合入主站生产环境）。

---

## 1. 背景与核心目标

### 1.1 为什么要做 NAUHub？
南京农业大学（NAU）在作物学、植物保护、动物医学、农业资源与环境、生物育种及农业工程等领域拥有深厚的科研积累与真实的田间/实验室数据场景；同时卫岗与滨江双校区的青年学生对 AI 编程、科研绘图、实验数据处理与黑客松创客组队有强烈需求。

继中国农业大学 `CAUHub`（农客松主会场）与 `ANS VibeHub`（AI 编程知识库）在 ANS 平台上线后，`NAUHub` 作为 ANS 高校生态的重要战略合作伙伴专区，旨在：
1. **对南农师生**：提供一个「打开就能用农科 AI 工具、看同校师兄师姐标杆作品、领农科数据集与论文模板、报名校内创客赛事」的专属大本营。
2. **对 ANS 平台**：沉淀高质量的智慧农业与生命科学垂直工作流、工程包与标杆项目，并与站内 `/workspace`（工作台）、`/market`（市场）和 `/community?c=campus`（高校社区）形成自然的使用流转。

### 1.2 核心产品原则（遵循 `ans-product-surface-flywheel` 三问模型）
1. **有什么（What's here）**：首屏 3 秒内看清南农专属的 **4 步上手路线**、**4 大农科与双校区特色赛道**、**3 个农科工程包/工具** 与 **6+ 个南农师生实机标杆项目**。
2. **在哪用（Where to use）**：所有项目卡与工程包 **16:9 封面整卡可点**，一键直达工具预览页、市场工程包或 `/workspace` 工作台。
3. **用来做什么（What outcome）**：每张卡片用大白话写清「输入什么田间照片/实验表格 → 输出什么分析结果/考种报表」，拒绝学院派套话。

---

## 2. 页面架构与功能模块清单

### 模块 A：ANS `/hubs` 目录页挂载卡（Host Directory Card）
当用户访问 `https://ans.cauai.fun/hubs` 时，`NAUHub` 以标准高校 Hub 卡片呈现于 2 列目录网格中：
- **顶部身份栏**：`GraduationCap` 图标 + `高校 Hub` 类型标识 + 右侧 `官方工程包与工具 N` 计数胶囊。
- **主标题**：`NAUHub · 南京农业大学`（整卡可点击跳转 `/hubs/nauhub`）。
- **一句话定位**：`南农智慧农科、生物育种、植保动医与卫岗/滨江双校区 AI 创客大本营。`
- **底部实时计数摘要**：`2 个能直接用的农科工作流，6 个南农参考项目，4 大特色赛道`（数字使用 `tabular-nums` 等宽对齐）。

### 模块 B：`/hubs/nauhub` 紧凑头部与快捷动作栏（Compact Detail Header）
- **顶栏导航**：左侧 `← 返回 Hub 目录`，右侧 `去南农社区交流`（次按钮，跳 `/community?c=campus&u=nau`）+ `去工作台做项目 ↗`（主按钮，跳 `/workspace`）。
- **标题与定位**：`高校 Hub · 南京农业大学` 钟山绿胶囊 + H1 标题 `NAUHub · 南京农业大学 AI 与智慧农科专区` + 简介。
- **合规免责声明（必填红线）**：`面向南京农业大学的赛事、科研工具与创客协作专区；Hub 关联不代表校籍认证。`

### 模块 C：从农科真问题到可运行作品 · 4 步上手路线（4-Step Onboarding Pipeline）
采用 4 列等高卡片（`STEP 01` → `STEP 04`），帮助跨专业农科学生零门槛上手：
1. **STEP 01 · 选定农科或校园痛点赛道**：锚点滚动至 `#tracks` 四大特色赛道。
2. **STEP 02 · 领取南农工具包与模型算力**：锚点滚动至 `#packs` 农科工程包。
3. **STEP 03 · 在 ANS 工作台生成可运行原型**：直达 `/workspace` 启动 Agent 工作模式。
4. **STEP 04 · 上架 NAUHub 展厅并组队迭代**：直达 `/explore/submit?hub=nauhub` 提交作品。

### 模块 D：南农四大 AI 创客与学科交叉赛道（4 Campus Tracks）
采用 2×2 网格展示紧扣南农优势学科的四个方向，每张卡包含 `赛道代码`、`适用学院`、`赛道标题`、`真实场景描述` 与 `明确交付物标准`：
- **TRACK A · 作物与种业（农学院 / 前沿交叉研究院）**：智慧育种与大田作物表型分析（如稻穗粒数快测、冠层多光谱分析、考种记录工具）。
- **TRACK B · 植保与动医（植物保护学院 / 动物医学院）**：病虫害图谱识别与动物临床辅助（如长江中下游稻麦病害检索、兽医临床病例决策树与处方配伍速查）。
- **TRACK C · 农工与遥感（人工智能学院 / 工学院 / 资环学院）**：温室数字孪生与农业机器人仿真（如 Three.js 玻璃温室环控沙盘、农田土壤有机碳与温室气体测算）。
- **TRACK D · 双校区创客（卫岗 × 滨江跨专业自由组队）**：双校区效率与学术助手（如跨校区班车时刻、大型公共仪器预约空档、农客松组队名片）。

### 模块 E：南农专属工程包与科研工具（Agri-Tech Packs & Toolkits）
3 列网格展示可直接复用或在线打开的工具包，区分 `免费校内工具`（`points: null`）与 `农科工程包`（显示积分数值）：
1. `稻麦病虫害叶片视觉分割与防治配比工具包`（免费校内工具）
2. `生物育种与数量遗传学文献精读及实验记录模板`（10 积分）
3. `农科论文级等距立体实验装置图与统计图表引擎`（15 积分）

### 模块 F：南农师生标杆项目与开源参考（3-Col 16:9 Showcase Grid + 学院筛选）
- **学院快捷筛选栏**：支持 `全部学院`、`农学与种业`、`植物保护`、`动物医学`、`资源与环境` 一键过滤。
- **3 列 16:9 高清图卡**：
  - 顶部 `16:9` 高清封面图（`640×360` 渲染比例，圆角 `8px`）。
  - 元信息行：左侧来源标识（`南农师生作品` / `ANS 官方联合项目`），右侧学院胶囊标签（如 `农学院 × 人工智能学院`）。
  - 标题与简介：通过 `.stretchedLink::after` 实现**整张卡片（含封面图）可点击**。
  - 底栏：左侧展示作者/实验室团队署名，右侧展示媒体规格标识。

### 模块 G：页尾行动闭环条（Next-Step Footer Callout）
页面底部设置全宽引导卡片：「看完了南农参考项目？现在动手做你的作品」，配 `去南农社区交流` 与 `去工作台做项目 ↗` 双按钮，消除浏览断头路。

---

## 3. 零源码泄露安全边界与接入契约（Integration Contract）

### 3.1 为什么采用独立公开仓库 `ans-nauhub-starter`？
为保护 ANS 平台的核心商业机密与生产环境安全（Prisma 数据库架构、用户鉴权、积分计费网关、AI 模型路由密钥等），**严禁向外部合作方开放 ANS 主仓库权限或导出含 `.git` 历史的分支**。

我们专门提取了与 ANS 主站 100% 兼容的**纯前端宿主外壳 + CSS Modules 样式变量 + TypeScript 强类型契约**，封装为独立公开仓库 `ans-nauhub-starter`。

### 3.2 核心数据契约文件：`src/contracts/ans-hub-contract.ts`
南农开发团队提交的所有内容统一收敛在 `src/data/nauhub-submission.ts` 导出的 `NAUHUB_SUBMISSION: NauHubSubmissionPayload` 对象中，其顶层结构与 ANS 主站 `src/domain/hubs/registry.ts` 直接对应：

```ts
export type NauHubSubmissionPayload = Readonly<{
  hubDefinition: HubDefinition;          // 直接合入 ANS 主站 HUBS 数组
  communityHref: string;                 // 对应 HUB_COMMUNITY_HREFS.nauhub
  marketPacks: readonly HubMarketPack[]; // 对应 HUB_MARKET_PACKS.nauhub
  pipelineSteps: readonly NauPipelineStep[];
  campusTracks: readonly NauCampusTrack[];
  projects: readonly NauProjectCard[];   // 收录的南农师生项目与封面
  i18n: Readonly<{
    zh: NauHubLocaleBundle;              // 对应 messages/hubs/zh.json
    en: NauHubLocaleBundle;              // 对应 messages/hubs/en.json
  }>;
}>;
```

### 3.3 南农团队交付清单与 ANS 5 分钟合入流程
1. **南农团队开发与自检**：
   - 在 `src/data/nauhub-submission.ts` 中扩充真实项目、赛道与中英文文案；
   - 在 `public/covers/` 下放入对应的 16:9 封面图（SVG / WebP / PNG）；
   - 如需定制交互组件，在 `src/components/nauhub/` 下修改；
   - 运行 `npm run verify` 与 `npm run typecheck`，确认终端输出 `ALL PASS` 后提交 Pull Request。
2. **ANS 主站合入**：
   - ANS 团队拉取南农 PR，将 `NAUHUB_SUBMISSION.hubDefinition` 注入主站 `src/domain/hubs/registry.ts` 的 `HUBS` 列表，将 `i18n.{zh,en}` 合并至 `messages/hubs/{zh,en}.json`，并将 `src/components/nauhub/` 挂载至 `/hubs/nauhub` 路由，5 分钟内完成上线。
