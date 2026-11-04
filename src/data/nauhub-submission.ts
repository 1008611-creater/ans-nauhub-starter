import type { HubDefinition, NauHubSubmissionPayload } from "@/contracts/ans-hub-contract";

/**
 * ANS `/hubs` 目录页全部卡片配置（用于本地 1:1 预览 NAUHub 在主站目录中的并排呈现效果）
 */
export const ANS_DIRECTORY_HUBS: readonly HubDefinition[] = [
  {
    slug: "nauhub",
    organization: {
      id: "nauhub",
      type: "university",
      nameKey: "organizations.nauhub",
      university: {
        id: "nanjing-agricultural-university",
        nameKey: "organizations.nau",
        shortName: "南农 NAU",
        foundedYear: 1902,
      },
    },
    projectSlugs: [
      "nau-crop-phenomics-vision",
      "nau-rice-blast-diagnosis",
      "nau-soil-carbon-copilot",
      "nau-vet-clinical-agent",
      "nau-greenhouse-iot-twin",
      "nau-weigan-campus-guide",
    ],
    workflowRecipeIds: ["nau-agri-paper-brief", "nau-field-trial-report"],
    resources: [
      {
        id: "zijin-agri-hackathon",
        href: "/nau-hub#tracks",
        kind: "event",
        titleKey: "resources.zijinHackathon.title",
        descriptionKey: "resources.zijinHackathon.description",
      },
      {
        id: "nau-open-datasets",
        href: "/nau-hub#resources",
        kind: "dataset",
        titleKey: "resources.nauDatasets.title",
        descriptionKey: "resources.nauDatasets.description",
      },
    ],
  },
  {
    slug: "cauhub",
    organization: {
      id: "cauhub",
      type: "university",
      nameKey: "organizations.cauhub",
      university: {
        id: "china-agricultural-university",
        nameKey: "organizations.cau",
      },
    },
    projectSlugs: [],
    workflowRecipeIds: [],
    resources: [
      {
        id: "agrihackathon",
        href: "/competitions/agrihackathon",
        kind: "event",
        titleKey: "resources.agrihackathon.title",
        descriptionKey: "resources.agrihackathon.description",
      },
    ],
  },
  {
    slug: "vibehub",
    organization: {
      id: "ans-vibehub",
      type: "knowledge",
      nameKey: "organizations.vibehub",
    },
    projectSlugs: [],
    workflowRecipeIds: [],
    resources: [
      {
        id: "vibehub-knowledge",
        href: "/vibe-hub",
        kind: "knowledge",
        titleKey: "resources.vibehub.title",
        descriptionKey: "resources.vibehub.description",
      },
    ],
  },
  {
    slug: "aigc",
    organization: {
      id: "ans-aigc",
      type: "topic",
      nameKey: "organizations.aigc",
    },
    projectSlugs: [
      "ans-3d-showcase",
      "image2-library",
      "vibephoto",
      "infinite-canvas",
      "ai-video-services",
      "remotion-video",
      "comfyui",
      "pyvideotrans",
      "video2x",
    ],
    workflowRecipeIds: [],
    resources: [],
  },
  {
    slug: "full-stack",
    organization: {
      id: "ans-full-stack",
      type: "topic",
      nameKey: "organizations.fullStack",
    },
    projectSlugs: [
      "liu-resume",
      "ans-games-hub",
      "ans-ecommerce-outbound",
      "hello-algo",
      "build-your-own-x",
      "freecodecamp",
    ],
    workflowRecipeIds: ["resume-website"],
    resources: [],
  },
];

/**
 * 南京农业大学 NAUHub 完整交付数据包（南农团队主要维护并扩充此对象）
 */
export const NAUHUB_SUBMISSION: NauHubSubmissionPayload = {
  hubDefinition: ANS_DIRECTORY_HUBS[0],
  communityHref: "/community?c=campus&u=nau",
  marketPacks: [
    {
      slug: "nau-plant-pathology-vision-kit",
      href: "/market/nau-plant-pathology-vision-kit",
      points: null,
      titleKey: "marketPacks.plantPathology.title",
      descriptionKey: "marketPacks.plantPathology.description",
    },
    {
      slug: "nau-bio-breeding-literature-agent",
      href: "/market/nau-bio-breeding-literature-agent",
      points: 10,
      titleKey: "marketPacks.bioBreeding.title",
      descriptionKey: "marketPacks.bioBreeding.description",
    },
    {
      slug: "nau-phenomics-svg-chart-kit",
      href: "/market/nau-phenomics-svg-chart-kit",
      points: 15,
      titleKey: "marketPacks.phenomicsChart.title",
      descriptionKey: "marketPacks.phenomicsChart.description",
    },
  ],
  pipelineSteps: [
    {
      id: "step-topic",
      step: "STEP 01",
      href: "#tracks",
      zh: {
        title: "选定农科或校园痛点赛道",
        description: "从作物表型、植保诊断、智慧畜牧或卫岗/滨江双校区生活场景中选定真问题。",
        cta: "查看四大特色赛道",
      },
      en: {
        title: "Pick an Agri-Tech or Campus Track",
        description: "Select a real problem in crop phenomics, plant protection, smart livestock, or Weigang/Binjiang campus life.",
        cta: "Explore 4 Tracks",
      },
    },
    {
      id: "step-kit",
      step: "STEP 02",
      href: "#packs",
      zh: {
        title: "领取南农工具包与模型算力",
        description: "直接复用已封装好的农科数据集脚本、论文图表模板与 ANS 工作台多模型算力。",
        cta: "浏览工具包",
      },
      en: {
        title: "Claim NAU Toolkits & Compute",
        description: "Reuse pre-packaged agri-datasets, paper figure templates, and multi-model compute in ANS Workspace.",
        cta: "Browse Toolkits",
      },
    },
    {
      id: "step-build",
      step: "STEP 03",
      href: "/workspace",
      zh: {
        title: "在 ANS 工作台生成可运行原型",
        description: "使用工作模式与 Agent 协作写出可在线演示的网页、数据分析看板或小程序。",
        cta: "去工作台开干",
      },
      en: {
        title: "Build a Runnable Prototype",
        description: "Collaborate with Agent in Work Mode to ship a live web app, analytics dashboard, or field tool.",
        cta: "Open Workspace",
      },
    },
    {
      id: "step-showcase",
      step: "STEP 04",
      href: "/explore/submit?hub=nauhub",
      zh: {
        title: "上架 NAUHub 展厅并组队迭代",
        description: "提交作品链接与 16:9 实机封面，收录进南农专区展示，在社区招募跨学院队友。",
        cta: "提交南农作品",
      },
      en: {
        title: "Publish to NAUHub & Recruit Teammates",
        description: "Submit your live demo URL and 16:9 cover to feature in NAUHub and connect with cross-college peers.",
        cta: "Submit Project",
      },
    },
  ],
  campusTracks: [
    {
      id: "crop-phenomics",
      code: "TRACK A · 作物与种业",
      iconName: "Sprout",
      zh: {
        name: "智慧育种与大田作物表型分析",
        role: "农学院 / 前沿交叉研究院方向",
        description: "针对水稻、小麦、大豆的冠层多光谱图像分析、穗粒数自动计数、抗逆性筛选与田间试验记录工具。",
        deliverable: "交付物：可上传田间照片或 CSV 并输出可视化报告的 Web 工具",
      },
      en: {
        name: "Smart Breeding & Crop Phenomics",
        role: "Agronomy / Frontier Cross-Research",
        description: "Canopy multispectral analysis, panicle grain counting, stress tolerance screening, and field trial loggers for rice, wheat, and soybean.",
        deliverable: "Deliverable: Web tool accepting field photos or CSVs to output visual reports",
      },
    },
    {
      id: "plant-vet",
      code: "TRACK B · 植保与动医",
      iconName: "Microscope",
      zh: {
        name: "病虫害图谱识别与动物临床辅助",
        role: "植物保护学院 / 动物医学院方向",
        description: "融合田间病害叶片检索、农药安全配比计算、伴侣动物与经济动物常见症状知识库问答。",
        deliverable: "交付物：支持图片或症状结构化输入的多模态诊断助手",
      },
      en: {
        name: "Plant Pathology & Veterinary Clinical Assistant",
        role: "Plant Protection / Veterinary Medicine",
        description: "Field leaf disease retrieval, safe pesticide dosing calculator, and structured clinical Q&A for companion and livestock animals.",
        deliverable: "Deliverable: Multimodal diagnostic assistant for images and clinical symptoms",
      },
    },
    {
      id: "smart-equip",
      code: "TRACK C · 农工与遥感",
      iconName: "Cpu",
      zh: {
        name: "温室数字孪生与农业机器人仿真",
        role: "人工智能学院 / 工学院 / 资环学院方向",
        description: "利用 Three.js 与传感器时序数据构建温室环控看板、土壤碳氮循环预测与采摘路径规划可视化。",
        deliverable: "交付物：3D/2D 交互式监控台或算法可视化仿真页",
      },
      en: {
        name: "Greenhouse Digital Twin & Ag-Robotics Simulation",
        role: "College of AI / Engineering / Resources & Environment",
        description: "Three.js and sensor time-series dashboards for greenhouse climate control, soil carbon-nitrogen modeling, and harvesting path visualization.",
        deliverable: "Deliverable: Interactive 3D/2D telemetry dashboard or algorithm simulator",
      },
    },
    {
      id: "campus-life",
      code: "TRACK D · 双校区创客",
      iconName: "Compass",
      zh: {
        name: "卫岗 × 滨江双校区效率与学术助手",
        role: "全校跨专业自由组队方向",
        description: "面向南农师生的跨校区通勤班车时刻、实验室试剂耗材余量共享、选课避坑指南与青年创客组队名片。",
        deliverable: "交付物：南农同学打开手机就能直接用的轻量级 Web 应用",
      },
      en: {
        name: "Weigang × Binjiang Dual-Campus Utility & Academic Tools",
        role: "Open Cross-Disciplinary Track",
        description: "Shuttle schedules across Weigang and Binjiang campuses, lab reagent inventory sharing, course planners, and student maker portfolios.",
        deliverable: "Deliverable: Mobile-ready web utility built for daily NAU student life",
      },
    },
  ],
  projects: [
    {
      slug: "nau-crop-phenomics-vision",
      source: "nau-campus",
      href: "/explore/nau-crop-phenomics-vision",
      coverUrl: "/covers/nau-phenomics.svg",
      collegeTag: {
        zh: "农学院 × 人工智能学院",
        en: "Agronomy × AI",
      },
      authorTeam: "钟山表型组实验室团队",
      content: {
        zh: {
          title: "稻穗粒数与千粒重 AI 视觉快测台",
          summary: "手机拍摄单株稻穗即可在浏览器内完成枝梗分割、实粒/瘪粒计数并导出标准考种 Excel 表。",
        },
        en: {
          title: "Rice Panicle Grain & Weight Vision Analyzer",
          summary: "Snap a single rice panicle on mobile to segment branches, count filled vs. empty grains, and export standard breeding spreadsheets.",
        },
      },
    },
    {
      slug: "nau-rice-blast-diagnosis",
      source: "nau-campus",
      href: "/explore/nau-rice-blast-diagnosis",
      coverUrl: "/covers/nau-plant-protection.svg",
      collegeTag: {
        zh: "植物保护学院",
        en: "Plant Protection",
      },
      authorTeam: "南农植保图谱创客组",
      content: {
        zh: {
          title: "长江中下游稻麦病虫害田间图谱与防治检索",
          summary: "收录 120 类高发病害实拍特征对比，支持按生育期、叶片病斑形态快速定位防治药剂与安全间隔期。",
        },
        en: {
          title: "Yangtze Basin Rice & Wheat Disease Field Atlas",
          summary: "Compare 120 common field diseases by growth stage and lesion morphology, with safe treatment intervals and dosing guides.",
        },
      },
    },
    {
      slug: "nau-vet-clinical-agent",
      source: "nau-campus",
      href: "/explore/nau-vet-clinical-agent",
      coverUrl: "/covers/nau-vet-clinic.svg",
      collegeTag: {
        zh: "动物医学院",
        en: "Veterinary Medicine",
      },
      authorTeam: "卫岗动医青年开发者社",
      content: {
        zh: {
          title: "兽医临床病例树与处方配伍禁忌速查",
          summary: "将经典临床病例拆解为交互式问诊决策树，输入体重与给药途径即可核对剂量区间与配伍冲突。",
        },
        en: {
          title: "Vet Clinical Decision Tree & Drug Interaction Checker",
          summary: "Interactive diagnostic decision trees from real veterinary cases with weight-based dosage and drug conflict verification.",
        },
      },
    },
    {
      slug: "nau-soil-carbon-copilot",
      source: "nau-campus",
      href: "/explore/nau-soil-carbon-copilot",
      coverUrl: "/covers/nau-soil-carbon.svg",
      collegeTag: {
        zh: "资源与环境科学学院",
        en: "Resources & Environment",
      },
      authorTeam: "太湖流域农田生态组",
      content: {
        zh: {
          title: "农田土壤有机碳与温室气体排放测算器",
          summary: "输入耕作方式、秸秆还田比例与氮肥施用量，实时绘制碳汇变化曲线并生成政策评估简报。",
        },
        en: {
          title: "Farmland Soil Organic Carbon & GHG Calculator",
          summary: "Input tillage practices, straw return ratios, and nitrogen rates to plot carbon sequestration curves and policy briefs.",
        },
      },
    },
    {
      slug: "nau-greenhouse-iot-twin",
      source: "official",
      href: "/explore/nau-greenhouse-iot-twin",
      coverUrl: "/covers/nau-greenhouse-twin.svg",
      collegeTag: {
        zh: "ANS 官方 × 智慧农业",
        en: "ANS Official × Smart Ag",
      },
      authorTeam: "ANS × NAU 联合工作组",
      content: {
        zh: {
          title: "玻璃温室光温水肥 3D 数字孪生沙盘",
          summary: "基于 Three.js 的实时温室环控仿真模板，支持天窗开合、遮阳幕布、滴灌管网状态与 PAR 光照热力图切换。",
        },
        en: {
          title: "3D Glass Greenhouse Climate & Fertigation Digital Twin",
          summary: "Three.js real-time greenhouse simulation template featuring roof vents, shading screens, drip lines, and PAR light heatmaps.",
        },
      },
    },
    {
      slug: "nau-weigan-campus-guide",
      source: "nau-campus",
      href: "/explore/nau-weigan-campus-guide",
      coverUrl: "/covers/nau-campus-hub.svg",
      collegeTag: {
        zh: "卫岗 × 滨江双校区",
        en: "Weigang × Binjiang Campus",
      },
      authorTeam: "NAU 开源创客协会",
      content: {
        zh: {
          title: "南农双校区科研生活通（班车 / 仪器共享 / 创客组队）",
          summary: "一站式查看卫岗与滨江校区通勤时刻、大型公共仪器预约空档，并按技能标签寻找农客松队友。",
        },
        en: {
          title: "NAU Dual-Campus Research & Maker Companion",
          summary: "Check Weigang-Binjiang shuttle schedules, shared lab instrument availability, and recruit hackathon teammates by skill tags.",
        },
      },
    },
  ],
  i18n: {
    zh: {
      name: "NAUHub",
      universityName: "南京农业大学",
      description: "南农智慧农科、生物育种、植保动医与卫岗/滨江双校区 AI 创客大本营。",
      highlight: "2 个可运行农科工作流，6 个南农标杆项目，直通四大特色赛道",
      universityNote: "面向南京农业大学的赛事、科研工具与创客协作专区；Hub 关联不代表校籍认证。",
      bannerEyebrow: "ANS / UNIVERSITY HUB · 1902–2026",
      bannerTitle: "NAUHub · 南京农业大学 AI 与智慧农科专区",
      bannerSubtitle: "把田间试验、表型分析、植保动医与双校区创客点子变成能直接在线运行的工具。由南京农业大学开发者社区与 ANS 联合共建。",
      pipelineTitle: "从农科真问题到可运行作品：4 步上手路线",
      pipelineSubtitle: "不需要从零配置服务器，直接用现成农科模板与工作台完成你的第一个作品",
      tracksTitle: "南农四大 AI 创客与学科交叉赛道",
      tracksSubtitle: "紧扣南京农业大学优势学科与双校区生活场景，做真正有人用的工具",
      packsTitle: "南农专属工程包与科研工具",
      packsSubtitle: "打开即可查看完整目录结构与数据脚本样本，支持校内创客一键调用。",
      resourcesTitle: "赛事与开放数据集入口",
      projectsTitle: "南农师生标杆项目与开源参考",
      projectsSubtitle: "点击任意卡片封面或标题即可查看在线演示、复刻同款工作流或联系作者团队。",
      nextStepTitle: "看完了南农参考项目？现在动手做你的作品",
      nextStepDescription: "直接去工作台用 Agent 生成第一版农科工具页面，或去高校社区找跨学院队友。",
      ctaWorkspace: "去工作台做项目",
      ctaCommunity: "去南农社区交流",
      ctaBackDirectory: "返回 Hub 目录",
    },
    en: {
      name: "NAUHub",
      universityName: "Nanjing Agricultural University",
      description: "Smart agriculture, bio-breeding, plant protection, vet medicine, and dual-campus AI maker hub for NAU.",
      highlight: "2 runnable agri-workflows, 6 NAU showcase projects, and 4 interdisciplinary tracks",
      universityNote: "Dedicated competition, research tool, and maker collaboration space for Nanjing Agricultural University; Hub association does not imply official enrollment verification.",
      bannerEyebrow: "ANS / UNIVERSITY HUB · EST. 1902",
      bannerTitle: "NAUHub · Nanjing Agricultural University AI & Smart Ag Hub",
      bannerSubtitle: "Turn field trials, crop phenomics, veterinary diagnostics, and campus ideas into live web tools. Co-built by the NAU developer community and ANS.",
      pipelineTitle: "From Field Problem to Live Product in 4 Steps",
      pipelineSubtitle: "Skip server boilerplate—start from curated agri-templates and ANS Workspace",
      tracksTitle: "4 Interdisciplinary AI & Smart Agriculture Tracks",
      tracksSubtitle: "Grounded in NAU's flagship disciplines and Weigang × Binjiang campus life",
      packsTitle: "NAU Engineering Packs & Research Toolkits",
      packsSubtitle: "Inspect full directory trees and scripts before unlocking or launching online.",
      resourcesTitle: "Hackathons & Open Agri-Datasets",
      projectsTitle: "NAU Faculty & Student Showcase Projects",
      projectsSubtitle: "Click any 16:9 cover or title to try the live demo, remix the workflow, or connect with the team.",
      nextStepTitle: "Inspired by NAU projects? Build your own tool now",
      nextStepDescription: "Generate your first interactive agri-tech app with Agent in Workspace, or find cross-college teammates in Community.",
      ctaWorkspace: "Open Workspace",
      ctaCommunity: "NAU Campus Community",
      ctaBackDirectory: "Back to Hub Directory",
    },
  },
};
