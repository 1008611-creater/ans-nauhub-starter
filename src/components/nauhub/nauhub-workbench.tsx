"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clapperboard,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  Microscope,
  Moon,
  ShieldCheck,
  Sprout,
  Sun,
} from "lucide-react";
import { ANS_DIRECTORY_HUBS, NAUHUB_SUBMISSION } from "@/data/nauhub-submission";
import styles from "@/components/hubs/hubs.module.css";

type ViewMode = "detail" | "directory" | "spec";
type ThemeMode = "light" | "dark";
type LocaleMode = "zh" | "en";

const DIRECTORY_META: Record<
  string,
  {
    zh: { type: string; name: string; desc: string; summary: string; packs?: number };
    en: { type: string; name: string; desc: string; summary: string; packs?: number };
  }
> = {
  nauhub: {
    zh: {
      type: "高校 Hub · 新增合作",
      name: "NAUHub · 南京农业大学",
      desc: "南农智慧农科、生物育种、植保动医与卫岗/滨江双校区 AI 创客大本营。",
      summary: "2 个能直接用的农科工作流，6 个南农参考项目，4 大特色赛道",
      packs: 3,
    },
    en: {
      type: "University Hub · Partner",
      name: "NAUHub · Nanjing Agricultural Univ.",
      desc: "Smart agriculture, bio-breeding, plant protection, vet medicine, and dual-campus AI maker hub.",
      summary: "2 runnable agri-workflows, 6 NAU showcase projects, 4 campus tracks",
      packs: 3,
    },
  },
  cauhub: {
    zh: {
      type: "高校 Hub",
      name: "CAUHub",
      desc: "农大的赛事、项目与创客交流。",
      summary: "直达农客松主会场，查看赛道规则与校内参赛指南",
    },
    en: {
      type: "University Hub",
      name: "CAUHub",
      desc: "Competitions, projects, and maker community at China Agricultural University.",
      summary: "Jump straight to AgriHackathon tracks, rules, and campus guide",
    },
  },
  vibehub: {
    zh: {
      type: "知识 Hub",
      name: "ANS VibeHub",
      desc: "学习 AI 编程：术语、课程、练习与 Skill。",
      summary: "直达 371 个 AI 编程词条、2 门实战课与 10 大高频 Skill",
    },
    en: {
      type: "Knowledge Hub",
      name: "ANS VibeHub",
      desc: "Learn AI coding through interactive terms, courses, exercises, and reusable Skills.",
      summary: "371 visual AI coding terms, 2 hands-on courses, and 10 core Skills",
    },
  },
  aigc: {
    zh: {
      type: "主题 Hub",
      name: "AIGC Hub",
      desc: "图像、漫剧与视频创作工具。",
      summary: "9 个参考项目",
      packs: 3,
    },
    en: {
      type: "Topic Hub",
      name: "AIGC Hub",
      desc: "Image, comic drama, and programmatic video creation tools.",
      summary: "9 reference projects",
      packs: 3,
    },
  },
  "full-stack": {
    zh: {
      type: "主题 Hub",
      name: "全栈开发 Hub",
      desc: "网站与应用开发，从作品集到开源参考。",
      summary: "1 个能直接用的工作流，18 个参考项目",
      packs: 6,
    },
    en: {
      type: "Topic Hub",
      name: "Full-Stack Hub",
      desc: "Web and application engineering, from portfolios to open-source references.",
      summary: "1 runnable workflow, 18 reference projects",
      packs: 6,
    },
  },
};

const PACK_TEXT: Record<
  string,
  { zh: { title: string; desc: string; badge: string }; en: { title: string; desc: string; badge: string } }
> = {
  "nau-plant-pathology-vision-kit": {
    zh: {
      title: "稻麦病虫害叶片视觉分割与防治配比工具包",
      desc: "内置长江中下游常见病斑标注规范、田间光照归一化脚本与安全间隔期检索表。",
      badge: "免费校内工具",
    },
    en: {
      title: "Rice & Wheat Leaf Lesion Segmentation & Dosing Kit",
      desc: "Includes Yangtze Basin lesion annotation schemas, field illumination normalization scripts, and safe interval tables.",
      badge: "Free Campus Tool",
    },
  },
  "nau-bio-breeding-literature-agent": {
    zh: {
      title: "生物育种与数量遗传学文献精读及实验记录模板",
      desc: "针对 GWAS、QTL 定位与表型组学论文的结构化提炼提示词与田间考种数据表模板。",
      badge: "10 积分",
    },
    en: {
      title: "Bio-Breeding & Quantitative Genetics Literature Kit",
      desc: "Structured extraction prompts for GWAS/QTL papers and standardized field breeding log templates.",
      badge: "10 Credits",
    },
  },
  "nau-phenomics-svg-chart-kit": {
    zh: {
      title: "农科论文级等距立体实验装置图与统计图表引擎",
      desc: "纯代码生成温室环控原理图、土壤碳氮循环路径图与高对比度学术矢量配图。",
      badge: "15 积分",
    },
    en: {
      title: "Isometric Agri-Experiment Apparatus & SVG Figure Engine",
      desc: "Generate publication-grade greenhouse schematics, soil carbon-nitrogen cycle diagrams, and vector figures in code.",
      badge: "15 Credits",
    },
  },
};

export function NauHubWorkbench() {
  const [view, setView] = useState<ViewMode>("detail");
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [locale, setLocale] = useState<LocaleMode>("zh");
  const [collegeFilter, setCollegeFilter] = useState<string>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get("view");
    const t = params.get("theme");
    const l = params.get("locale");
    if (v === "directory" || v === "detail" || v === "spec") setView(v);
    if (t === "light" || t === "dark") setTheme(t);
    if (l === "zh" || l === "en") setLocale(l);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const copy = NAUHUB_SUBMISSION.i18n[locale];
  const filteredProjects = NAUHUB_SUBMISSION.projects.filter((p) => {
    if (collegeFilter === "all") return true;
    return p.collegeTag.zh.includes(collegeFilter) || p.collegeTag.en.toLowerCase().includes(collegeFilter.toLowerCase());
  });

  const renderTrackIcon = (iconName: string) => {
    switch (iconName) {
      case "Sprout":
        return <Sprout size={18} />;
      case "Microscope":
        return <Microscope size={18} />;
      case "Cpu":
        return <Cpu size={18} />;
      default:
        return <Compass size={18} />;
    }
  };

  return (
    <div className="ans-product-shell" data-theme={theme}>
      {/* 顶部 ANS 宿主沙盒仿真导航栏 + 联调切换器 */}
      <nav
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--surface-1)",
          position: "sticky",
          top: 0,
          zIndex: 30,
        }}
      >
        <div
          className="ans-product-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            paddingBlock: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.02em", display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "999px",
                  backgroundColor: "var(--primary)",
                }}
              />
              ANS (AI Never Stops)
            </span>
            <span style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)" }}>
              {locale === "zh" ? "项目广场 / Hub / 社区 / 赛事 / 市场 / 工作台" : "Explore / Hubs / Community / Competitions / Market / Workspace"}
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.45rem" }}>
            <button
              type="button"
              onClick={() => setView("directory")}
              className={view === "directory" ? styles.actionPrimary : styles.actionOutline}
            >
              {locale === "zh" ? "1. /hubs 目录挂载预览" : "1. /hubs Directory View"}
            </button>
            <button
              type="button"
              onClick={() => setView("detail")}
              className={view === "detail" ? styles.actionPrimary : styles.actionOutline}
            >
              {locale === "zh" ? "2. /hubs/nauhub 详情设计稿" : "2. /hubs/nauhub Detail UI"}
            </button>
            <button
              type="button"
              onClick={() => setView("spec")}
              className={view === "spec" ? styles.actionPrimary : styles.actionOutline}
            >
              {locale === "zh" ? "3. UI 规范与契约自检" : "3. UI Spec & Contract"}
            </button>
            <button
              type="button"
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              className={styles.actionOutline}
              aria-label="Toggle Locale"
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>
            <button
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={styles.actionOutline}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              {theme === "light" ? (locale === "zh" ? "暗色" : "Dark") : locale === "zh" ? "浅色" : "Light"}
            </button>
          </div>
        </div>
      </nav>

      {/* 视图 1：ANS /hubs 目录页挂载预览 */}
      {view === "directory" && (
        <div className={`ans-product-container ${styles.container}`}>
          <header className={styles.compactHeader}>
            <div className={styles.compactHeaderCopy}>
              <p className={styles.eyebrow}>ANS / HUBS DIRECTORY PREVIEW</p>
              <h1 className={styles.compactTitle}>
                {locale === "zh" ? "想从哪个方向开始？" : "Where do you want to start?"}
              </h1>
              <p className={styles.lede}>
                {locale === "zh"
                  ? "Hub 把同一高校或方向的项目、工具和工作流放在一起。选一个进去看看。"
                  : "Hubs group projects, tools, and runnable workflows by university or domain."}
              </p>
            </div>
            <div className={styles.headerToolbar}>
              <div className={styles.topActions}>
                <a href="#market" className={styles.actionOutline}>
                  {locale === "zh" ? "逛市场" : "Browse Market"}
                </a>
                <a href="#workspace" className={styles.actionPrimary}>
                  {copy.ctaWorkspace}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </header>

          <div className={styles.directory}>
            {ANS_DIRECTORY_HUBS.map((hub) => {
              const meta = DIRECTORY_META[hub.slug][locale];
              const isNau = hub.slug === "nauhub";
              const Icon =
                hub.slug === "nauhub" || hub.slug === "cauhub"
                  ? GraduationCap
                  : hub.slug === "vibehub"
                    ? BookOpen
                    : hub.slug === "aigc"
                      ? Clapperboard
                      : Code2;

              return (
                <article
                  key={hub.slug}
                  className={`${styles.hub} ${isNau ? styles.hubHighlight : ""}`}
                >
                  <div className={styles.identity}>
                    <Icon aria-hidden="true" />
                    <span>{meta.type}</span>
                    {meta.packs && (
                      <span className={styles.packCount}>
                        {locale === "zh" ? `官方工程包与工具 ${meta.packs}` : `Toolkits ${meta.packs}`}
                      </span>
                    )}
                  </div>
                  <h2>
                    <a
                      href={isNau ? "#detail" : `#${hub.slug}`}
                      onClick={(e) => {
                        if (isNau) {
                          e.preventDefault();
                          setView("detail");
                        }
                      }}
                    >
                      {meta.name}
                      <ArrowRight size={18} aria-hidden="true" />
                    </a>
                  </h2>
                  <p>{meta.desc}</p>
                  <p className={styles.summary}>{meta.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* 视图 2：/hubs/nauhub 完整详情设计稿 */}
      {view === "detail" && (
        <div className={`ans-product-container ${styles.container}`}>
          <div className={styles.topBar}>
            <button type="button" onClick={() => setView("directory")} className={styles.back}>
              <ArrowLeft size={16} aria-hidden="true" />
              {copy.ctaBackDirectory}
            </button>
            <div className={styles.topActions}>
              <a href={NAUHUB_SUBMISSION.communityHref} className={styles.actionOutline}>
                {copy.ctaCommunity}
              </a>
              <a href="/workspace" className={styles.actionPrimary}>
                {copy.ctaWorkspace}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <header className={styles.detailHeader}>
            <div className={styles.compactHeaderCopy}>
              <p className={styles.eyebrow}>{copy.bannerEyebrow}</p>
              <div className={styles.detailTitleRow}>
                <span className={styles.typePill}>
                  <GraduationCap size={14} />
                  {locale === "zh" ? "高校 Hub · 南京农业大学" : "University Hub · NAU"}
                </span>
                <h1 className={styles.compactTitle}>{copy.bannerTitle}</h1>
              </div>
              <p className={styles.lede}>{copy.bannerSubtitle}</p>
              <p className={styles.note}>{copy.universityNote}</p>
            </div>
          </header>

          {/* 板块 1：4 步上手与参赛流水线 */}
          <section className={styles.section} aria-labelledby="nau-pipeline">
            <div className={styles.sectionHeader}>
              <div>
                <h2 id="nau-pipeline">{copy.pipelineTitle}</h2>
                <p>{copy.pipelineSubtitle}</p>
              </div>
            </div>
            <div className={styles.pipelineGrid}>
              {NAUHUB_SUBMISSION.pipelineSteps.map((step) => {
                const s = step[locale];
                return (
                  <article key={step.id} className={styles.pipelineCard}>
                    <div>
                      <span className={styles.stepBadge}>{step.step}</span>
                      <h3>{s.title}</h3>
                      <p style={{ marginTop: "0.35rem" }}>{s.description}</p>
                    </div>
                    <a href={step.href} className={styles.stepLink}>
                      <span>{s.cta}</span>
                      <ArrowRight size={14} />
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 板块 2：南农四大学科交叉与双校区赛道 */}
          <section id="tracks" className={styles.section} aria-labelledby="nau-tracks">
            <div className={styles.sectionHeader}>
              <div>
                <h2 id="nau-tracks">{copy.tracksTitle}</h2>
                <p>{copy.tracksSubtitle}</p>
              </div>
            </div>
            <div className={styles.tracksGrid}>
              {NAUHUB_SUBMISSION.campusTracks.map((track) => {
                const tr = track[locale];
                return (
                  <article key={track.id} className={styles.trackCard}>
                    <div className={styles.trackHeader}>
                      <span className={styles.trackCode}>
                        {renderTrackIcon(track.iconName)} {track.code}
                      </span>
                      <span className={styles.trackRole}>{tr.role}</span>
                    </div>
                    <h3>{tr.name}</h3>
                    <p>{tr.description}</p>
                    <div className={styles.deliverableBox}>{tr.deliverable}</div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 板块 3：南农专属工程包与科研工具 */}
          <section id="packs" className={styles.section} aria-labelledby="nau-packs">
            <div className={styles.sectionHeader}>
              <div>
                <h2 id="nau-packs">{copy.packsTitle}</h2>
                <p>{copy.packsSubtitle}</p>
              </div>
            </div>
            <div className={styles.entries}>
              {NAUHUB_SUBMISSION.marketPacks.map((pack) => {
                const pk = PACK_TEXT[pack.slug][locale];
                return (
                  <article key={pack.slug} className={`${styles.entry} ${styles.entryCard}`}>
                    <div className={styles.entryMeta}>
                      <span className={styles.kind}>
                        {pack.points === null
                          ? locale === "zh"
                            ? "校内工具入口"
                            : "Campus Tool"
                          : locale === "zh"
                            ? "农科工程包"
                            : "Agri-Tech Pack"}
                      </span>
                      <span className={styles.pointsBadge}>{pk.badge}</span>
                    </div>
                    <h3>
                      <a href={pack.href} className={styles.stretchedLink}>
                        {pk.title}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </h3>
                    <p>{pk.desc}</p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 板块 4：南农师生标杆项目与开源参考（支持按学院筛选 + 16:9 封面全卡可点） */}
          <section id="projects" className={styles.section} aria-labelledby="nau-projects">
            <div className={styles.sectionHeader}>
              <div>
                <h2 id="nau-projects">{copy.projectsTitle}</h2>
                <p>{copy.projectsSubtitle}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {[
                  { key: "all", zh: "全部学院 (6)", en: "All Colleges (6)" },
                  { key: "农学", zh: "农学与种业", en: "Agronomy" },
                  { key: "植物保护", zh: "植物保护", en: "Plant Prot." },
                  { key: "动物医学", zh: "动物医学", en: "Vet Med" },
                  { key: "资源与环境", zh: "资源与环境", en: "Resources" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setCollegeFilter(tab.key)}
                    className={collegeFilter === tab.key ? styles.actionPrimary : styles.actionOutline}
                    style={{ minHeight: "2rem", padding: "0.25rem 0.7rem", fontSize: "0.75rem" }}
                  >
                    {tab[locale]}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.entries}>
              {filteredProjects.map((project) => {
                const pText = project.content[locale];
                const kindLabel =
                  project.source === "official"
                    ? locale === "zh"
                      ? "ANS 官方联合项目"
                      : "ANS Official Co-Build"
                    : locale === "zh"
                      ? "南农师生作品"
                      : "NAU Campus Project";

                return (
                  <article key={project.slug} className={`${styles.entry} ${styles.entryCard}`}>
                    <img
                      className={styles.cover}
                      src={project.coverUrl}
                      width={640}
                      height={360}
                      alt={pText.title}
                    />
                    <div className={styles.entryMeta}>
                      <span className={styles.kind}>{kindLabel}</span>
                      <span className={styles.collegeBadge}>{project.collegeTag[locale]}</span>
                    </div>
                    <h3>
                      <a href={project.href} className={styles.stretchedLink}>
                        {pText.title}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </h3>
                    <p>{pText.summary}</p>
                    <div className={styles.authorRow}>
                      <span>{project.authorTeam}</span>
                      <span className="tabular-nums">16:9 HD</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 页尾行动闭环 */}
          <aside className={styles.nextStep}>
            <div>
              <h2 className={styles.nextStepTitle}>{copy.nextStepTitle}</h2>
              <p className={styles.nextStepCopy}>{copy.nextStepDescription}</p>
            </div>
            <div className={styles.topActions}>
              <a href={NAUHUB_SUBMISSION.communityHref} className={styles.actionOutline}>
                {copy.ctaCommunity}
              </a>
              <a href="/workspace" className={styles.actionPrimary}>
                {copy.ctaWorkspace}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      )}

      {/* 视图 3：UI 设计稿标注与接入契约自检器 */}
      {view === "spec" && (
        <div className={`ans-product-container ${styles.container}`}>
          <header className={styles.compactHeader}>
            <div className={styles.compactHeaderCopy}>
              <p className={styles.eyebrow}>ANS × NAUHUB DESIGN SYSTEM & CONTRACT INSPECTOR</p>
              <h1 className={styles.compactTitle}>
                {locale === "zh"
                  ? "NAUHub 视觉规范、组件解剖与零源码泄露接入契约"
                  : "NAUHub Visual Spec, Component Anatomy & Zero-Leak Contract"}
              </h1>
              <p className={styles.lede}>
                {locale === "zh"
                  ? "南农开发团队无需接触 ANS 数据库或私有后端，只需遵循下方大厂 UI 规范与 TypeScript 契约即可一键合入主站。"
                  : "NAU developers build against this strict TypeScript & CSS Module contract without needing ANS backend credentials."}
              </p>
            </div>
          </header>

          <div className={styles.tracksGrid}>
            <article className={styles.trackCard}>
              <div className={styles.trackHeader}>
                <span className={styles.trackCode}>
                  <Layers size={15} /> RULE 01 · 微明度分层与钟山绿
                </span>
                <span className={styles.trackRole}>dachang-ui</span>
              </div>
              <h3>严禁纯黑 #000，依靠 1%–3% 明度阶梯建立秩序</h3>
              <p>
                浅色模式使用暖灰纸感底色 <code>#f5f5f3</code> 搭配一级卡片 <code>#fcfcfb</code>；暗色模式使用深炭底色{" "}
                <code>#0b0b0a</code> 搭配一级卡片 <code>#151515</code>（字重自动降 40 防发胖）。主色取自南京农业大学钟山绿{" "}
                <code>#1b6b4c</code>（暗色 <code>#34d399</code>）。
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", marginTop: "0.5rem" }}>
                <div style={{ padding: "0.6rem", borderRadius: "0.5rem", background: "#f5f5f3", color: "#181816", fontSize: "0.75rem", border: "1px solid var(--border)" }}>
                  #f5f5f3 Bg
                </div>
                <div style={{ padding: "0.6rem", borderRadius: "0.5rem", background: "#fcfcfb", color: "#181816", fontSize: "0.75rem", border: "1px solid var(--border)" }}>
                  #fcfcfb Card
                </div>
                <div style={{ padding: "0.6rem", borderRadius: "0.5rem", background: "#1b6b4c", color: "#fcfcfb", fontSize: "0.75rem" }}>
                  #1b6b4c NAU
                </div>
                <div style={{ padding: "0.6rem", borderRadius: "0.5rem", background: "#0b0b0a", color: "#34d399", fontSize: "0.75rem", border: "1px solid var(--border)" }}>
                  #0b0b0a Dark
                </div>
              </div>
            </article>

            <article className={styles.trackCard}>
              <div className={styles.trackHeader}>
                <span className={styles.trackCode}>
                  <ShieldCheck size={15} /> RULE 02 · 卡片解剖与单主操作
                </span>
                <span className={styles.trackRole}>ans-ui-ux-baseline</span>
              </div>
              <h3>外圆角 14px = 内封面圆角 8px + 间距，整卡热区可点</h3>
              <p>
                项目卡片统一采用 3 列网格（桌面 1280px）、16:9 高清图卡，通过 <code>.stretchedLink::after</code> 伪元素覆盖整卡点击热区（点击封面任意位置均可跳转），单卡只保留一个跳转目标，杜绝原生 Emoji 与 AI 腔黑话。
              </p>
              <div className={styles.deliverableBox}>
                自检命令：<code>npm run verify</code>（自动扫描禁用词、#000、原生 Emoji、中英双语对齐与契约字段）
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
