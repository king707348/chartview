import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

export const saveToSheet = async (data) => {
    const videoBaseUrl = "https://www.youtube.com/watch?v="
    const config = useRuntimeConfig()

    // 設定驗證
    const serviceAccountAuth = new JWT({
      email: config.GOOGLE_CLIENT_EMAIL,
      key: config.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    })
    // 初始化文件
    const doc = new GoogleSpreadsheet(
      config.GOOGLE_SHEET_ID,
      serviceAccountAuth
    )
    // 載入試算表資訊
    await doc.loadInfo()
    console.log("連線成功！試算表標題:", doc.title)
    const sheet = doc.sheetsByIndex[0]

    await sheet.clear()
    await sheet.setHeaderRow(['Title', 'Description', 'url'])

    const rowsToAdd = data.items.map(db => ({
    //   Id: db.id.videoId,
      Title: db.snippet.title,
      Description: db.snippet.description,
      url: `${videoBaseUrl}${db.id.videoId}`,
    //   Date: new Date().toLocaleString()
    }))

    await sheet.addRows(rowsToAdd)

    return {
      result: "ok",
      message: "google shgeet 寫入成功",
      data: data
    }
}