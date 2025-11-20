# ChartView - YouTube 影片搜尋應用

這是一個使用 Nuxt.js 框架開發的網頁應用，主要功能是讓使用者可以透過輸入關鍵字來搜尋相關的 YouTube 影片，並將搜尋結果呈現在頁面上。

## ✨ 功能特色

- **影片搜尋**：使用者可以輸入關鍵字（例如：國家）來搜尋 YouTube 影片。
- **結果展示**：以卡片形式清晰地展示影片的縮圖、標題和描述。
- **等待與無結果提示**：在搜尋期間會顯示等待訊息，如果沒有找到任何結果，也會有對應的提示。
- **直連 YouTube**：每個搜尋結果都提供一個直接連結，方便使用者前往 YouTube 觀看完整影片。
- **資料記錄**：每次的搜尋結果都會被記錄到指定的 Google Sheet 中，方便後續分析與追蹤。

## 🛠️ 使用技術

本專案採用了現代化的前端技術棧：

- **主要框架**: [Nuxt.js 3](https://nuxt.com/)
- **前端框架**: [Vue.js 3](https://vuejs.org/)
- **UI 元件庫**: [Element Plus](https://element-plus.org/)
- **狀態管理**: [Pinia](https://pinia.vuejs.org/)
- **CSS 框架**: [Tailwind CSS](https://tailwindcss.com/)
- **圖片優化**: [@nuxt/image](https://image.nuxt.com/)
- **Google Sheets 操作**: [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet)
- **Google 驗證**: [google-auth-library](https://www.npmjs.com/package/google-auth-library)

## 🚀 專案設置與啟動

請依照以下步驟來設定並在本機端運行此專案。

### 1. 前置需求

請確保您的開發環境中已安裝 [Node.js](https://nodejs.org/) (建議版本為 18.x 或以上)。

### 2. 安裝依賴

在專案的根目錄下，執行以下指令來安裝所有必要的套件：

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 3. 啟動開發伺服器

安裝完成後，執行以下指令來啟動 Nuxt 的開發伺服器：

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

應用程式預設會在 `http://localhost:3000` 上運行。您可以打開瀏覽器訪問此網址來查看應用。
