export default defineEventHandler(async (event) => {
    const body = readBody(event);
    const { country } = body;

    try {
        const data = await fetchYoutube(country)

        saveToSheet(data.data)

        return {
            data: data
        }

    }catch (error) {
      return {
        result: "error",
        message: error.message,
      };
    }
})