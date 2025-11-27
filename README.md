# ChartView - YouTube 影片搜尋應用

![Nuxt](https://img.shields.io/badge/Nuxt-4.2.1-00DC82?style=flat&logo=nuxt.js)
![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat&logo=vue.js)
![Node](https://img.shields.io/badge/Node-18%2B-339933?style=flat&logo=node.js)

這是一個使用 **Nuxt.js 4** 框架開發的網頁應用，主要功能是讓使用者可以透過輸入關鍵字來搜尋相關的 YouTube 影片，並將搜尋結果即時儲存到 Google Sheets 中。

## 功能特色

- **影片搜尋**：輸入關鍵字搜尋 YouTube 影片（例如：國家名稱）
- **結果展示**：卡片式介面展示影片縮圖、標題和描述
- **互動回饋**：搜尋期間顯示等待訊息，無結果時提示用戶
- **直連 YouTube**：每個搜尋結果提供直接連結觀看完整影片
- **資料記錄**：自動將搜尋結果記錄到指定的 Google Sheet 進行追蹤與分析
- **響應式設計**：使用 Tailwind CSS 提供完美的行動端和桌面端體驗

## 功能演示

### 搜尋介面
應用提供簡潔的搜尋介面，用戶可輸入關鍵字搜尋 YouTube 影片：
![搜尋結果展示](./public/search-results.png)

### 數據管理
所有搜尋結果自動記錄到 Google Sheets，方便進行資料分析與追蹤：
![Google Sheets 數據記錄](./public/google-sheets-data.png)

## 使用技術

### 前端技術棧
- **框架**: [Nuxt.js 4](https://nuxt.com/) - Vue 全棧框架
- **Vue.js 3** - 進階漸進式前端框架
- **UI 元件庫**: [Element Plus](https://element-plus.org/) - 企業級 UI 庫
- **狀態管理**: [Pinia](https://pinia.vuejs.org/) - 直觀的狀態管理
- **樣式**: [Tailwind CSS](https://tailwindcss.com/) - 實用優先的 CSS 框架
- **圖片最佳化**: [@nuxt/image](https://image.nuxt.com/)

### 後端 & 整合
- **Google Sheets API**: [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet)
- **Google 認證**: [google-auth-library](https://www.npmjs.com/package/google-auth-library)
- **YouTube API** - 用於搜尋影片

### 開發工具
- **Vue DevTools** - 開發期間啟用
- **Composables** - 使用 [@vueuse/nuxt](https://vueuse.org/)

## 快速開始

### 前置需求

- **Node.js** 18.x 或更高版本
- **npm** 或 **yarn** 套件管理器
- YouTube API 金鑰
- Google Sheets API 認證檔案

### 環境設定

1. 建立 `.env` 檔案在專案根目錄，配置以下環境變數：

```env
YOUTUBE_API=your_youtube_api_key_here
GOOGLE_CLIENT_EMAIL=your_google_client_email_here
GOOGLE_PRIVATE_KEY=your_google_private_key_here
GOOGLE_SHEET_ID=your_google_sheet_id_here
```

### 安裝步驟

1. **複製專案**

```bash
git clone <repository-url>
cd chartview
```

2. **安裝依賴**

```bash
npm install
```

3. **啟動開發伺服器**

```bash
npm run dev
```

應用程式會在 `http://localhost:3000` 上運行。

## 可用指令

```bash
# 開發模式
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview

# 生成靜態網站
npm run generate

# 準備 Nuxt（自動執行）
npm run postinstall
```

## 專案結構

```
chartview/
├── app/                          # 應用主要文件
│   ├── app.vue                   # 根元件
│   ├── layouts/                  # 布局元件
│   │   ├── default.vue           # 預設布局
│   │   └── article.vue           # 文章布局
│   ├── pages/                    # 頁面路由
│   │   ├── index.vue             # 首頁
│   │   └── article.vue           # 文章頁面
│   └── readme.md                 # 應用說明文檔
├── server/                       # 後端 API
│   ├── api/
│   │   ├── catchYoutubeApi.js   # YouTube 搜尋 API 端點
│   │   └── test.js              # 測試端點
│   └── utils/
│       ├── youtubeServices.js   # YouTube 服務工具
│       └── sheetServices.js     # Google Sheets 服務工具
├── stores/                       # Pinia 狀態管理
│   └── data.js                  # 數據存儲
├── public/                       # 靜態文件
│   └── robots.txt               # SEO 優化
├── nuxt.config.ts               # Nuxt 設定檔
├── tailwind.config.js           # Tailwind CSS 設定
├── tsconfig.json                # TypeScript 設定
├── package.json                 # 專案依賴管理
└── README.md                    # 專案文檔（此文件）
```

## 工作流程

### 用戶搜尋流程

1. 用戶在頁面上輸入搜尋關鍵字
2. 前端發送請求到後端 API 端點 `/api/catchYoutubeApi`
3. 後端使用 YouTube API 搜尋相關影片
4. 搜尋結果自動儲存到 Google Sheets
5. 前端接收數據並以卡片形式呈現結果
6. 用戶可點擊結果直接前往 YouTube 觀看

## API 配置

### YouTube API

搜尋功能依賴於 YouTube Data API v3。需要配置：
- API 金鑰
- 每次搜尋最多取得 10 筆結果
- 按觀看次數排序

### Google Sheets API

資料記錄功能需要：
- Google 服務帳號認證
- 目標 Google Sheet 的 ID
- 適當的讀寫權限

詳細配置說明請參考各項服務的官方文檔。

## 部署

### 構建生產版本

```bash
npm run build
```

### 預覽構建結果

```bash
npm run preview
```

### 生成靜態網站

```bash
npm run generate
```

應用支持 Node.js 和靜態部署。推薦使用 Vercel、Netlify 或其他支持 Nuxt 的平台進行部署。

## 相關資源

- [Nuxt 文檔](https://nuxt.com/docs)
- [Vue.js 文檔](https://vuejs.org/)
- [Element Plus 文檔](https://element-plus.org/)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Pinia 文檔](https://pinia.vuejs.org/)
- [YouTube API 文檔](https://developers.google.com/youtube/v3)
- [Google Sheets API 文檔](https://developers.google.com/sheets/api)

## 授權

此專案採用 MIT 授權。

## 開發者

由 king707348 開發

## 貢獻

歡迎提交 issue 和 pull request 來改進此專案！

---

**最後更新**: 2025 年 11 月

如有任何問題或建議，歡迎聯繫開發團隊。

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.