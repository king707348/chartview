export const fetchYoutube = async (country) => {
  const config = useRuntimeConfig();
  const baseUrl = "https://www.googleapis.com/youtube/v3/search";

  const queryParams = new URLSearchParams({
    key: config.YOUTUBE_API,
    q: `${country || "vietnam"} travel`,
    type: "video",
    part: "snippet",
    maxResults: "10",
    order: "viewCount",
    videoDuration: "long",
  })
  const res = await fetch(`${baseUrl}?${queryParams.toString()}`)
  if (!res.ok) {
    throw new Error(`API ERROR: ${res.statusText}`)
  }
  const data = await res.json()

  return {
    result: "ok",
    data: data
  }
}
