import { defineStore } from "pinia"

export const useDataStore = defineStore("data", () => {
    const data = ref(null)

    return {
        data
    }
})