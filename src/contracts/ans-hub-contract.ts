/**
 * ANS (AI Never Stops) — Hub 官方公开接入契约 (Sanitized Public SDK Contract)
 *
 * 说明：
 * 1. 本文件与 ANS 主站 `src/domain/hubs/registry.ts` 及 `messages/hubs/{zh,en}.json` 保持 1:1 字段对齐。
 * 2. 不包含任何 ANS 后端数据库、计费或私有鉴权逻辑。
 * 3. 南京农业大学 (NAU) 开发团队只需基于本契约完善 `src/data/nauhub-submission.ts` 与 `src/components/nauhub/*`，
 *    即可在本地 1:1 预览挂载效果，并由 ANS 主站无缝合入 `/hubs/nauhub`。
 */

export type HubSlug = "cauhub" | "nauhub" | "vibehub" | "aigc" | "full-stack";

export type HubOrganizationType = "university" | "topic" | "knowledge";

export type HubOrganization = Readonly<{
  id: string;
  type: HubOrganizationType;
  nameKey: string;
  university?: Readonly<{
    id: string;
    nameKey: string;
    shortName?: string;
    foundedYear?: number;
  }>;
}>;

export type HubResourceKind = "knowledge" | "event" | "hosted-tool" | "dataset";

export type HubResource = Readonly<{
  id: string;
  href: string;
  kind: HubResourceKind;
  titleKey: string;
  descriptionKey: string;
  badgeText?: string;
}>;

export type HubMarketPack = Readonly<{
  slug: string;
  href: string;
  /** null 表示免费在线工具或校内免积分开源工具包 */
  points: number | null;
  titleKey: string;
  descriptionKey: string;
}>;

export type NauProjectSource = "official" | "nau-campus" | "github" | "web";

export type NauProjectCard = Readonly<{
  slug: string;
  source: NauProjectSource;
  href: string;
  coverUrl: string;
  collegeTag: {
    zh: string;
    en: string;
  };
  authorTeam: string;
  content: {
    zh: {
      title: string;
      summary: string;
    };
    en: {
      title: string;
      summary: string;
    };
  };
}>;

export type NauCampusTrack = Readonly<{
  id: string;
  code: string;
  iconName: "Sprout" | "Microscope" | "Cpu" | "Compass";
  zh: {
    name: string;
    role: string;
    description: string;
    deliverable: string;
  };
  en: {
    name: string;
    role: string;
    description: string;
    deliverable: string;
  };
}>;

export type NauPipelineStep = Readonly<{
  id: string;
  step: string;
  href: string;
  zh: {
    title: string;
    description: string;
    cta: string;
  };
  en: {
    title: string;
    description: string;
    cta: string;
  };
}>;

export type HubDefinition = Readonly<{
  slug: HubSlug;
  organization: HubOrganization;
  projectSlugs: readonly string[];
  workflowRecipeIds: readonly string[];
  resources: readonly HubResource[];
}>;

export type NauHubLocaleBundle = Readonly<{
  name: string;
  universityName: string;
  description: string;
  highlight: string;
  universityNote: string;
  bannerEyebrow: string;
  bannerTitle: string;
  bannerSubtitle: string;
  pipelineTitle: string;
  pipelineSubtitle: string;
  tracksTitle: string;
  tracksSubtitle: string;
  packsTitle: string;
  packsSubtitle: string;
  resourcesTitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  nextStepTitle: string;
  nextStepDescription: string;
  ctaWorkspace: string;
  ctaCommunity: string;
  ctaBackDirectory: string;
}>;

export type NauHubSubmissionPayload = Readonly<{
  hubDefinition: HubDefinition;
  communityHref: string;
  marketPacks: readonly HubMarketPack[];
  pipelineSteps: readonly NauPipelineStep[];
  campusTracks: readonly NauCampusTrack[];
  projects: readonly NauProjectCard[];
  i18n: Readonly<{
    zh: NauHubLocaleBundle;
    en: NauHubLocaleBundle;
  }>;
}>;
