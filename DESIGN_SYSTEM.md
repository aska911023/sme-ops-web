# DESIGN_SYSTEM.md — twjoin.com 逆向工程設計規範

> 從 twjoin.com 提取的精確設計參數，供 join-clone 專案參照。

---

## 1. 佈局邏輯 (Layout Grid System)

### 容器最大寬度
| 用途 | 值 |
|------|-----|
| 全幅 section | `max-w-[1440px]` |
| 主要內容區 | `max-w-[1280px]` / `max-w-[1120px]` |
| 中等寬度 | `max-w-[800px]` / `max-w-[700px]` |
| 窄內容 (文字) | `max-w-[600px]` |

### 斷點 (Breakpoints)
| 斷點 | 值 |
|------|-----|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |
| 超寬 | 1800px / 1920px |

### 網格配置
```
grid-cols-1          → 手機 / 堆疊佈局
grid-cols-2          → 雙欄特色展示
grid-cols-3          → 產品卡片 / 功能展示
grid-cols-5          → 合作夥伴 Logo 列
auto-cols-[minmax(220px, 1fr)]  → 自適應卡片
grid-flow-col        → 水平流動佈局
```

### 間距系統
```css
/* 區塊間距 */
gap-[60px]    /* 大區塊間 */
gap-[40px]    /* 中區塊間 */
gap-[30px]    /* 卡片間 */
gap-y-[100px] /* 垂直段落間 */
gap-y-[20vh]  /* 超大視覺呼吸空間 */

/* 容器水平 Padding */
px-4          /* 手機 (16px) */
px-6          /* 平板 (24px) */
px-8          /* 桌面 (32px) */
px-[50px]     /* 大螢幕 */
px-[140px]    /* 超寬螢幕 */

/* 垂直 Padding */
py-[50px]     /* 標準 section */
py-24 ~ py-48 /* 大型 section (96px ~ 192px) */
```

---

## 2. 動畫細節 (Animation System)

### 自定義 Keyframes
```css
/* 手勢搖擺 (CTA icon) */
@keyframes handShake {
  0%   { transform: rotate(-20deg) scale(1.2); }
  100% { transform: rotate(50deg) scale(1.2); }
}
/* 用法: animate-[handShake_0.2s_linear_infinite_alternate_both] */

/* 水平滾動 (品牌 Logo 列) */
@keyframes rolling-mobile {
  /* 水平平移，用於無限滾動 carousel */
  /* duration: 60s, timing: linear, direction: both */
}
```

### 內建動畫
| 名稱 | Duration | Easing | 用途 |
|------|----------|--------|------|
| `animate-bounce` | 1s | `cubic-bezier(0.8, 0, 1, 1)` | CTA 箭頭跳動 |
| `animate-ping` | 1s | `cubic-bezier(0, 0, 0.2, 1)` | 狀態指示燈 |
| `animate-pulse` | 2s | `cubic-bezier(0.4, 0, 0.6, 1)` | 呼吸光暈 |

### 滾動進入動畫 (推薦 Framer Motion 配置)
```typescript
// 文字「分層進入」效果
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// 卡片進入
const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

// Section 漸顯
const sectionFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
```

### Easing Curves 備忘
```
[0.25, 0.46, 0.45, 0.94]  → 平滑減速 (文字進入)
[0.16, 1, 0.3, 1]          → 彈性出場 (卡片/元件)
[0.4, 0, 0.6, 1]           → 呼吸脈動
[0.8, 0, 1, 1]             → 彈跳
cubic-bezier(0, 0, 0.2, 1) → 擴散 (ping)
```

---

## 3. 導航欄 Navbar

### 基本參數
| 屬性 | 值 |
|------|-----|
| 高度 | `56px` ~ `64px` (CSS var: `--nav-height`) |
| 固定方式 | `fixed top-0` / `sticky` |
| z-index | `z-50` |

### 滾動狀態切換
```css
/* 未捲動 (透明) */
.navbar-transparent {
  background: transparent;
}

/* 捲動後 (磨砂玻璃) */
.navbar-scrolled {
  background: #0C0D1DCC;  /* rgba(12, 13, 29, 0.8) */
  /* 或漸層: */
  background: linear-gradient(180deg, #16172B 0%, #0C0D1D 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* 過渡動畫 */
transition: all 300ms ease;
```

### 觸發點
- 捲動超過 `50px ~ 80px` 時觸發背景變化
- 建議使用 `window.scrollY > 50` 判斷

---

## 4. 素材風格 (Visual Effects)

### 圓角系統
| 用途 | 值 |
|------|-----|
| 全圓 (頭像/按鈕) | `rounded-full` |
| 大卡片 / Hero | `rounded-[48px]` ~ `rounded-[64px]` |
| 中型卡片 | `rounded-[30px]` ~ `rounded-[32px]` |
| 小卡片 / 按鈕 | `rounded-[15px]` ~ `rounded-[20px]` |
| 標籤 / Badge | `rounded-xl` (12px) |

### 陰影系統
```css
/* 柔和環境光 */
shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]

/* 深度陰影 */
shadow-[0_10px_73px_rgba(0,0,0,0.5)]

/* 色彩光暈 (Glow) */
shadow-[0_0_100px_rgba(110,116,204,0.15)]   /* 藍紫光暈 */
shadow-[0_0_10px_rgba(168,85,247,0.8)]       /* 紫色聚焦光 */

/* 內凹陰影 */
shadow-[inset_0px_0px_100px_0px_#0000001a]
```

### 磨砂玻璃效果 (Backdrop Blur)
```css
/* 卡片 */
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
background: rgba(12, 13, 29, 0.8);  /* #0C0D1DCC */
border: 1px solid rgba(255, 255, 255, 0.06);

/* Navbar */
backdrop-filter: blur(12px);
background: rgba(12, 13, 29, 0.8);
```

### 漸層方向與色標
```css
/* 主要背景漸層 */
background: linear-gradient(180deg, #16172B 0%, #0C0D1D 100%);

/* 卡片漸層 */
background: radial-gradient(65.76% 160.93% at 112.18% -15.38%, #35384c 0%, #202133 75%);

/* 色彩裝飾漸層 */
from-[#0C0D1D] via-[#101121]/40 to-transparent  /* 淡出 */
from-purple-500 to-pink-500                       /* 暖色 CTA */
from-emerald-500 to-cyan-500                      /* 科技感 */
```

### 半透明疊層
```
bg-black/40    → 暗色遮罩
bg-black/60    → 深色遮罩
bg-white/5     → 微亮提示
bg-white/10    → 卡片邊界亮光
bg-white/90    → 高亮文字
```

### 背景圖片
```
/images/ai-cpu-mobile.webp
/images/fintech-banner-mobile.webp
/images/grid-bg-mobile.png
/images/particle-bg.png
```

---

## 5. 字體排版 (Typography)

### 字體堆疊
```css
--font-primary: 'Noto Sans TC', 'Titillium Web', ui-sans-serif, system-ui, sans-serif;
--font-display: 'Titillium Web', sans-serif;
```

### 字級階梯
| 用途 | 桌面 | 手機 |
|------|------|------|
| Hero 主標題 | `text-7xl` (4.5rem / 72px) ~ `text-9xl` (8rem) | `text-4xl` ~ `text-5xl` |
| Section 標題 | `text-5xl` (3rem / 48px) ~ `text-[64px]` | `text-3xl` ~ `text-4xl` |
| 副標題 | `text-2xl` ~ `text-3xl` | `text-xl` |
| 正文 | `text-base` (16px) ~ `text-lg` (18px) | `text-sm` ~ `text-base` |
| 標籤/小字 | `text-xs` (12px) ~ `text-sm` (14px) | `text-xs` |

### 字重分配
```
font-light (300)     → 裝飾大字 / 副標
font-normal (400)    → 正文
font-medium (500)    → 按鈕 / 強調
font-semibold (600)  → 小標題
font-bold (700)      → 主標題
font-extrabold (800) → Hero 強調
font-black (900)     → 超級標題
```

### 行高 & 字距
```css
/* 標題 */
line-height: 1.1 ~ 1.25;   /* leading-none ~ leading-tight */
letter-spacing: -0.025em;   /* tracking-tight */

/* 正文 */
line-height: 1.5 ~ 1.625;  /* leading-normal ~ leading-relaxed */
letter-spacing: normal;

/* 標籤/品牌 */
letter-spacing: 1.2px ~ 1.5px;  /* tracking-[1.2px] */
```

---

## 6. 色彩系統 (Color Palette)

### 背景色階
```
#020817   → 最深 (body)
#05060f   → 深底
#0C0D1D   → 主背景 (main-blue)
#111221   → 表面
#16172B   → 提升層
#17182E   → 卡片背景
#191a29   → 次要卡片
#202133   → 高亮表面 (sub-blue)
#35384c   → 最亮表面
```

### 品牌色
```
#00AEEF   → 品牌主色 (Join 藍)
#002D5E   → 品牌深藍
#00D4AA   → 科技綠
#6e74cc   → 藍紫 (blue-violet)
#a855f7   → 紫色 accent
#f43f5e   → 玫紅 accent
#10b981   → 翡翠綠 accent
#57d4b1   → 淺綠 (aquamarine)
#fafe34   → 檸檬黃
#ffc700   → 琥珀金
```

### 文字色階
```
text-white            → 主標題
text-white/90         → 副標題
text-white/70 ~ /80   → 正文
text-white/50 ~ /60   → 次要文字
text-white/25 ~ /30   → 提示文字
text-[#979AB7]        → 特殊灰紫文字
```

### 邊框色
```
border-white/5        → 最淡 (分隔線)
border-white/10       → 卡片邊框
border-white/20       → Hover 邊框
border-gentle-blue/30 → 品牌色邊框
border-steel-blue/50  → 強調邊框
```

---

## 快速參照：Tailwind 配置對映

```typescript
// 建議在 @theme inline 中配置
{
  /* 色彩 */
  --color-brand-deep: #002D5E;
  --color-brand-primary: #00AEEF;
  --color-brand-accent: #00D4AA;
  --color-surface: #0C0D1D;
  --color-surface-elevated: #16172B;
  --color-surface-card: #17182E;

  /* 圓角 */
  // rounded-card: 30px
  // rounded-section: 48px

  /* 陰影 */
  // shadow-glow: 0 0 100px rgba(110,116,204,0.15)
  // shadow-depth: 0 10px 73px rgba(0,0,0,0.5)
}
```
