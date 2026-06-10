# Design Brief: 小星球學堂 Landing Page

## Problem
家長看到孩子情緒失控，卻找不到有效又溫和的方式幫助他們。市面上的課程要不過於學術，要不過於嚴肅。家長需要的是信任感 + 溫暖感，才能放心把孩子交給老師。

## Solution
一頁式登陸頁，建立情感共鳴 → 展示課程價值 → 讓家長加入 LINE 諮詢。不賣課程，賣信任。

## Experience Principles
1. **先共鳴，再介紹** — 家長看到第一句話就覺得「說的就是我孩子」，才會繼續往下看
2. **溫暖而不幼稚** — 給孩子看的東西，但家長才是決策者；要讓家長覺得專業可靠
3. **行動門檻要低** — CTA 不是「報名」而是「諮詢」，降低猶豫

## Aesthetic Direction
- **Philosophy**: 手繪兒童繪本風（參考 image.png 的手繪太陽系）
- **Tone**: 溫暖、安心、充滿希望
- **Reference**: 奶油色底 + 細線手繪插圖 + 大地色系（橘、黃、鼠尾草綠、天藍）
- **Anti-references**: 科技感、冷色調、企業感、過度卡通

## Existing Patterns
- 無既有程式碼，從零開始
- 字體：Noto Serif TC（標題）+ Noto Sans TC（內文）
- 色盤：見 tokens.css

## Component Inventory
| Component | Status | Notes |
|-----------|--------|-------|
| Nav | New | Logo + LINE CTA 按鈕 |
| Hero | New | 標題 + 手繪星球 SVG + CTA |
| Pain Point | New | 共感引言區 |
| Abilities Grid | New | 四大能力 2x2 卡片 |
| Teacher | New | 老師照片 + 故事 |
| Kids Notes | New | 橫向捲動便利貼 |
| Parent Testimonials | New | 家長引言卡 |
| CTA Section | New | 最終行動呼籲 |
| Footer | New | 簡單 footer |

## Key Interactions
- 所有 CTA 開啟 LINE 連結
- 頁面捲動時元素淡入
- 星球插圖有漂浮動畫
- 手機可橫向捲動孩子的便利貼

## Responsive Behavior
- Mobile-first (375px)
- 四大能力：1欄 → 2欄 (640px+)
- 老師介紹：堆疊 → 左右並排 (768px+)
- 家長回饋：1欄 → 2欄 → 3欄 (960px+)

## Accessibility Requirements
- 色彩對比 WCAG AA
- 圖片皆有 alt text
- 所有按鈕可鍵盤操作

## Out of Scope
- 多頁面
- 報名表單（只有 LINE 諮詢）
- 定價資訊
- 後台管理
