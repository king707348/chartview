// import { GoogleSpreadsheet } from 'google-spreadsheet'
// import { JWT } from 'google-auth-library'

export default defineEventHandler(async (event) => {
    try{
        const config = useRuntimeConfig()
        const baseUrl = "https://www.googleapis.com/youtube/v3/search"

        const queryParams = new URLSearchParams({
            part: "snippet",
            q: "vietnam travel",
            maxResults: "10",
            order: "viewCount",
            type: "video",
            key: config.YOUTUBE_API
        })
        const res = await fetch(`${baseUrl}?${queryParams.toString()}`)
        if(!res.ok){
            throw new Error(`API ERROR: ${res.statusText}`)
        }
        const data = await res.json()

        return {
            result: "ok",
            data: data
        }

    }catch(err){
        console.log(err)
        return {
            result: "error",
            data: err.message
        }
    }
})