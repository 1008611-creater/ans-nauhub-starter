import fs from "node:fs";
import path from "node:path";

const coversDir = path.resolve(import.meta.dirname, "../public/covers");
fs.mkdirSync(coversDir, { recursive: true });

const covers = [
  {
    file: "nau-phenomics.svg",
    bg1: "#0D1F17",
    bg2: "#163829",
    accent: "#34D399",
    secondary: "#FBBF24",
    badge: "NAU AGRONOMY × AI VISION",
    title: "稻穗粒数与千粒重 AI 视觉快测",
    subtitle: "Panicle Branch Segmentation · Filled/Empty Grain Counter · Breeding Excel Export",
    metricLabel: "COUNT ACCURACY",
    metricValue: "98.4%",
    graphic: `
      <g transform="translate(760, 110)">
        <rect x="0" y="0" width="420" height="460" rx="18" fill="#0B1812" stroke="#265942" stroke-width="1.5"/>
        <line x1="0" y1="52" x2="420" y2="52" stroke="#1E4634" stroke-width="1"/>
        <circle cx="24" cy="26" r="6" fill="#34D399"/>
        <text x="42" y="31" fill="#A7F3D0" font-family="monospace" font-size="13">SCAN_ID: NAU-RICE-2026-089</text>
        <!-- Bounding boxes and panicle branches -->
        <path d="M210 410 C210 310, 195 220, 180 100" stroke="#FBBF24" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M198 320 C150 280, 115 240, 85 185" stroke="#34D399" stroke-width="2.5" fill="none"/>
        <path d="M192 260 C245 225, 285 190, 325 145" stroke="#34D399" stroke-width="2.5" fill="none"/>
        <path d="M186 190 C145 160, 120 135, 95 95" stroke="#34D399" stroke-width="2" fill="none"/>
        <path d="M183 150 C230 130, 265 110, 295 85" stroke="#34D399" stroke-width="2" fill="none"/>
        <!-- Detected grain nodes -->
        <g fill="#FBBF24" stroke="#0B1812" stroke-width="1.5">
          <ellipse cx="85" cy="185" rx="9" ry="5" transform="rotate(-30 85 185)"/>
          <ellipse cx="110" cy="215" rx="9" ry="5" transform="rotate(-30 110 215)"/>
          <ellipse cx="140" cy="250" rx="9" ry="5" transform="rotate(-30 140 250)"/>
          <ellipse cx="325" cy="145" rx="9" ry="5" transform="rotate(28 325 145)"/>
          <ellipse cx="290" cy="175" rx="9" ry="5" transform="rotate(28 290 175)"/>
          <ellipse cx="250" cy="205" rx="9" ry="5" transform="rotate(28 250 205)"/>
          <ellipse cx="95" cy="95" rx="9" ry="5" transform="rotate(-25 95 95)"/>
          <ellipse cx="130" cy="130" rx="9" ry="5" transform="rotate(-25 130 130)"/>
          <ellipse cx="295" cy="85" rx="9" ry="5" transform="rotate(22 295 85)"/>
          <ellipse cx="255" cy="108" rx="9" ry="5" transform="rotate(22 255 108)"/>
          <ellipse cx="180" cy="100" rx="9" ry="5"/>
        </g>
        <!-- Detection boxes -->
        <rect x="68" y="168" width="34" height="34" rx="4" fill="none" stroke="#34D399" stroke-dasharray="4 2" stroke-width="1.5"/>
        <rect x="308" y="128" width="34" height="34" rx="4" fill="none" stroke="#34D399" stroke-dasharray="4 2" stroke-width="1.5"/>
        <rect x="163" y="83" width="34" height="34" rx="4" fill="none" stroke="#FBBF24" stroke-width="1.5"/>
        <!-- Readout footer -->
        <rect x="20" y="380" width="380" height="58" rx="10" fill="#122B20" stroke="#265942"/>
        <text x="38" y="405" fill="#A7F3D0" font-family="monospace" font-size="13">FILLED: 164  |  EMPTY: 11  |  1000-WT: 27.8g</text>
        <text x="38" y="426" fill="#34D399" font-family="monospace" font-size="12">EXPORT: STANDARD_BREEDING_SHEET.XLSX [READY]</text>
      </g>
    `,
  },
  {
    file: "nau-plant-protection.svg",
    bg1: "#132217",
    bg2: "#1F3A24",
    accent: "#4ADE80",
    secondary: "#F59E0B",
    badge: "PLANT PROTECTION · FIELD ATLAS",
    title: "长江中下游稻麦病虫害田间图谱",
    subtitle: "120+ High-Incidence Pathogens · Lesion Morphology Filter · Safe Dosing Interval",
    metricLabel: "FIELD CLASSES",
    metricValue: "120+",
    graphic: `
      <g transform="translate(760, 110)">
        <rect x="0" y="0" width="420" height="460" rx="18" fill="#0F1C13" stroke="#2D5A36" stroke-width="1.5"/>
        <path d="M90 360 C90 210, 190 110, 330 85 C305 225, 225 330, 90 360 Z" fill="#1B4326" stroke="#4ADE80" stroke-width="2.5"/>
        <path d="M90 360 C165 270, 240 180, 330 85" stroke="#86EFAC" stroke-width="2" fill="none"/>
        <!-- Spindle lesion markers -->
        <ellipse cx="195" cy="215" rx="22" ry="9" transform="rotate(-40 195 215)" fill="#F59E0B" fill-opacity="0.85" stroke="#FEF3C7" stroke-width="1.5"/>
        <ellipse cx="245" cy="165" rx="16" ry="7" transform="rotate(-40 245 165)" fill="#EF4444" fill-opacity="0.85" stroke="#FECACA" stroke-width="1.5"/>
        <circle cx="195" cy="215" r="38" fill="none" stroke="#F59E0B" stroke-dasharray="5 3" stroke-width="1.5"/>
        <rect x="24" y="375" width="372" height="62" rx="10" fill="#162B1C" stroke="#2D5A36"/>
        <text x="42" y="400" fill="#BBF7D0" font-family="monospace" font-size="13">MATCH: MAGNAPORTHE ORYZAE (稻瘟病·急性型)</text>
        <text x="42" y="422" fill="#FBBF24" font-family="monospace" font-size="12">SAFE INTERVAL: 21 DAYS · TRICYCLAZOLE 75% WP</text>
      </g>
    `,
  },
  {
    file: "nau-vet-clinic.svg",
    bg1: "#0F1D26",
    bg2: "#163040",
    accent: "#38BDF8",
    secondary: "#34D399",
    badge: "VETERINARY MEDICINE · DECISION TREE",
    title: "兽医临床病例树与处方配伍速查",
    subtitle: "Interactive Differential Diagnosis · Weight-Based Dosing · Drug Conflict Guard",
    metricLabel: "SAFE CHECK",
    metricValue: "0 CONFLICT",
    graphic: `
      <g transform="translate(760, 110)">
        <rect x="0" y="0" width="420" height="460" rx="18" fill="#0B161E" stroke="#234E68" stroke-width="1.5"/>
        <!-- Decision Tree Nodes -->
        <rect x="135" y="34" width="150" height="44" rx="10" fill="#132D3E" stroke="#38BDF8" stroke-width="1.8"/>
        <text x="210" y="61" text-anchor="middle" fill="#E0F2FE" font-family="monospace" font-size="13">CANINE · 14.5 KG</text>
        <line x1="210" y1="78" x2="110" y2="140" stroke="#38BDF8" stroke-width="2"/>
        <line x1="210" y1="78" x2="310" y2="140" stroke="#38BDF8" stroke-width="2"/>
        <rect x="35" y="140" width="150" height="48" rx="10" fill="#132D3E" stroke="#234E68" stroke-width="1.5"/>
        <text x="110" y="169" text-anchor="middle" fill="#BAE6FD" font-family="monospace" font-size="12">SYMPTOM: GI / FEVER</text>
        <rect x="235" y="140" width="150" height="48" rx="10" fill="#11332B" stroke="#34D399" stroke-width="1.8"/>
        <text x="310" y="169" text-anchor="middle" fill="#A7F3D0" font-family="monospace" font-size="12">RENAL CLEARANCE OK</text>
        <rect x="35" y="235" width="350" height="96" rx="12" fill="#102432" stroke="#234E68"/>
        <text x="55" y="266" fill="#38BDF8" font-family="monospace" font-size="13">RX DOSE CALCULATOR (MG/KG · BID)</text>
        <text x="55" y="292" fill="#E0F2FE" font-family="monospace" font-size="13">AMOXICILLIN-CLAV: 181.25 mg (PO q12h)</text>
        <text x="55" y="314" fill="#34D399" font-family="monospace" font-size="12">INTERACTION GUARD: PASS (NO NEPHROTOXIC PAIR)</text>
        <rect x="35" y="362" width="350" height="64" rx="10" fill="#112E28" stroke="#34D399"/>
        <text x="55" y="390" fill="#A7F3D0" font-family="monospace" font-size="13">NAU VET TEACHING HOSPITAL PROTOCOL</text>
        <text x="55" y="411" fill="#6EE7B7" font-family="monospace" font-size="12">VERIFIED BY CLINICAL PHARMACOLOGY MATRIX</text>
      </g>
    `,
  },
  {
    file: "nau-soil-carbon.svg",
    bg1: "#1A1B14",
    bg2: "#2B2D1F",
    accent: "#A3E635",
    secondary: "#38BDF8",
    badge: "RESOURCES & ENVIRONMENT · CARBON MODEL",
    title: "农田土壤有机碳与温室气体测算器",
    subtitle: "Straw Return Ratio · Nitrogen Rate · SOC Sequestration Curve & Policy Brief",
    metricLabel: "SOC DELTA",
    metricValue: "+1.42 t/ha",
    graphic: `
      <g transform="translate(760, 110)">
        <rect x="0" y="0" width="420" height="460" rx="18" fill="#141610" stroke="#444B2F" stroke-width="1.5"/>
        <!-- Grid lines -->
        <line x1="45" y1="80" x2="385" y2="80" stroke="#262A1B" stroke-width="1"/>
        <line x1="45" y1="160" x2="385" y2="160" stroke="#262A1B" stroke-width="1"/>
        <line x1="45" y1="240" x2="385" y2="240" stroke="#262A1B" stroke-width="1"/>
        <line x1="45" y1="320" x2="385" y2="320" stroke="#3B4228" stroke-width="1.5"/>
        <!-- SOC Sequestration Curve -->
        <path d="M45 295 C120 275, 190 210, 275 155 C325 125, 355 105, 385 95" fill="none" stroke="#A3E635" stroke-width="4" stroke-linecap="round"/>
        <path d="M45 260 C120 265, 190 250, 275 235 C325 228, 355 220, 385 215" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="6 4"/>
        <circle cx="275" cy="155" r="7" fill="#A3E635" stroke="#141610" stroke-width="2"/>
        <rect x="35" y="355" width="350" height="72" rx="10" fill="#1E2216" stroke="#444B2F"/>
        <text x="54" y="384" fill="#D9F99D" font-family="monospace" font-size="13">STRAW RETURN: 85%  |  N-INPUT: -18%</text>
        <text x="54" y="408" fill="#A3E635" font-family="monospace" font-size="12">N2O EMISSION REDUCED BY 23.6% (TAIHU BASIN)</text>
      </g>
    `,
  },
  {
    file: "nau-greenhouse-twin.svg",
    bg1: "#0C1E21",
    bg2: "#13353A",
    accent: "#2DD4BF",
    secondary: "#FBBF24",
    badge: "THREE.JS DIGITAL TWIN · SMART AG",
    title: "玻璃温室光温水肥 3D 数字孪生沙盘",
    subtitle: "Roof Vent Kinematics · PAR Light Heatmap · Drip Fertigation Telemetry",
    metricLabel: "PAR UNIFORMITY",
    metricValue: "94.2%",
    graphic: `
      <g transform="translate(760, 110)">
        <rect x="0" y="0" width="420" height="460" rx="18" fill="#091619" stroke="#21535B" stroke-width="1.5"/>
        <!-- Isometric Greenhouse Wireframe -->
        <polygon points="210,60 360,135 210,210 60,135" fill="#113238" fill-opacity="0.7" stroke="#2DD4BF" stroke-width="2"/>
        <polygon points="60,135 210,210 210,320 60,245" fill="#0D262B" fill-opacity="0.8" stroke="#2DD4BF" stroke-width="2"/>
        <polygon points="360,135 210,210 210,320 360,245" fill="#143B42" fill-opacity="0.8" stroke="#2DD4BF" stroke-width="2"/>
        <line x1="135" y1="97" x2="285" y2="172" stroke="#5EEAD4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <line x1="285" y1="97" x2="135" y2="172" stroke="#5EEAD4" stroke-width="1.5" stroke-dasharray="4 3"/>
        <!-- Crop rows inside isometric base -->
        <line x1="105" y1="235" x2="210" y2="288" stroke="#34D399" stroke-width="4" stroke-linecap="round"/>
        <line x1="140" y1="215" x2="245" y2="268" stroke="#34D399" stroke-width="4" stroke-linecap="round"/>
        <line x1="175" y1="195" x2="280" y2="248" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/>
        <rect x="35" y="355" width="350" height="72" rx="10" fill="#0F292E" stroke="#21535B"/>
        <text x="54" y="384" fill="#99F6E4" font-family="monospace" font-size="13">TEMP: 24.6°C  |  RH: 68%  |  CO2: 820 PPM</text>
        <text x="54" y="408" fill="#2DD4BF" font-family="monospace" font-size="12">EC: 2.1 mS/cm · pH: 6.0 · ROOF VENT: OPEN 35%</text>
      </g>
    `,
  },
  {
    file: "nau-campus-hub.svg",
    bg1: "#14211B",
    bg2: "#1D352B",
    accent: "#34D399",
    secondary: "#60A5FA",
    badge: "WEIGANG × BINJIANG · DUAL CAMPUS",
    title: "南农双校区科研生活通与创客组队",
    subtitle: "Cross-Campus Shuttle Live Timer · Shared Lab Instruments · Hackathon Team Matcher",
    metricLabel: "DUAL CAMPUS",
    metricValue: "2 HUBS",
    graphic: `
      <g transform="translate(760, 110)">
        <rect x="0" y="0" width="420" height="460" rx="18" fill="#0E1914" stroke="#2A4F3E" stroke-width="1.5"/>
        <!-- Dual Campus Nodes -->
        <circle cx="105" cy="145" r="46" fill="#153226" stroke="#34D399" stroke-width="2.5"/>
        <text x="105" y="142" text-anchor="middle" fill="#D1FAE5" font-family="sans-serif" font-weight="bold" font-size="15">卫岗校区</text>
        <text x="105" y="162" text-anchor="middle" fill="#6EE7B7" font-family="monospace" font-size="11">WEIGANG</text>
        <circle cx="315" cy="145" r="46" fill="#152B38" stroke="#60A5FA" stroke-width="2.5"/>
        <text x="315" y="142" text-anchor="middle" fill="#DBEAFE" font-family="sans-serif" font-weight="bold" font-size="15">滨江校区</text>
        <text x="315" y="162" text-anchor="middle" fill="#93C5FD" font-family="monospace" font-size="11">BINJIANG</text>
        <path d="M151 132 C195 100, 225 100, 269 132" fill="none" stroke="#34D399" stroke-width="2.5" stroke-dasharray="5 3"/>
        <path d="M269 158 C225 190, 195 190, 151 158" fill="none" stroke="#60A5FA" stroke-width="2.5" stroke-dasharray="5 3"/>
        <rect x="35" y="235" width="350" height="84" rx="10" fill="#142820" stroke="#2A4F3E"/>
        <text x="54" y="264" fill="#A7F3D0" font-family="monospace" font-size="13">NEXT SHUTTLE: 14:30 (GATE 3 → BINJIANG LAB)</text>
        <text x="54" y="288" fill="#93C5FD" font-family="monospace" font-size="12">CONFOCAL MICROSCOPE #02: IDLE (15:00-18:00)</text>
        <text x="54" y="308" fill="#FBBF24" font-family="monospace" font-size="12">OPEN TEAMS: 18 RECRUITING FOR ZIJIN HACKATHON</text>
        <rect x="35" y="348" width="350" height="78" rx="10" fill="#12231C" stroke="#34D399"/>
        <text x="54" y="378" fill="#ECFDF5" font-family="monospace" font-size="13">ANS × NAU MAKER NETWORK</text>
        <text x="54" y="402" fill="#6EE7B7" font-family="monospace" font-size="12">AGRONOMY · AI · VET · PLANT PROT · BIO-BREEDING</text>
      </g>
    `,
  },
];

function esc(str) {
  return String(str).replace(/&/g, "&amp;");
}

for (const item of covers) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${item.bg1}"/>
      <stop offset="100%" stop-color="${item.bg2}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1280" height="720" fill="url(#bg)"/>
  <rect width="1280" height="720" fill="url(#grid)"/>
  <circle cx="180" cy="110" r="280" fill="${item.accent}" fill-opacity="0.08"/>
  <circle cx="1050" cy="580" r="320" fill="${item.secondary}" fill-opacity="0.07"/>
  <!-- Left Editorial Column -->
  <g transform="translate(88, 125)">
    <rect x="0" y="0" width="360" height="38" rx="19" fill="${item.accent}" fill-opacity="0.14" stroke="${item.accent}" stroke-opacity="0.45"/>
    <text x="22" y="24" fill="${item.accent}" font-family="monospace" font-weight="600" font-size="14" letter-spacing="1.2">${esc(item.badge)}</text>
    <text x="0" y="115" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif" font-weight="700" font-size="44" letter-spacing="-0.8">${esc(item.title)}</text>
    <text x="0" y="168" fill="#94A3B8" font-family="monospace" font-size="16">${esc(item.subtitle)}</text>
    <!-- Metric Card -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="250" height="118" rx="16" fill="#0B1310" fill-opacity="0.65" stroke="${item.accent}" stroke-opacity="0.4"/>
      <text x="24" y="38" fill="#94A3B8" font-family="monospace" font-size="13" letter-spacing="1">${esc(item.metricLabel)}</text>
      <text x="24" y="90" fill="${item.accent}" font-family="monospace" font-weight="700" font-size="42">${esc(item.metricValue)}</text>
    </g>
    <g transform="translate(274, 250)">
      <rect x="0" y="0" width="330" height="118" rx="16" fill="#0B1310" fill-opacity="0.55" stroke="#FFFFFF" stroke-opacity="0.12"/>
      <text x="24" y="42" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif" font-weight="600" font-size="18">NAUHub · 南京农业大学专区</text>
      <text x="24" y="74" fill="#94A3B8" font-family="monospace" font-size="14">ANS (AI Never Stops) Official Partner</text>
      <text x="24" y="98" fill="${item.secondary}" font-family="monospace" font-size="13">16:9 HD Cover · Zero-Emoji Baseline</text>
    </g>
  </g>
  <!-- Right Technical Visual -->
  ${item.graphic}
</svg>`;
  fs.writeFileSync(path.join(coversDir, item.file), svg, "utf8");
}

console.log(`Generated ${covers.length} SVG covers in ${coversDir}`);
