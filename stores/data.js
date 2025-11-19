import { defineStore } from "pinia"

export const useDataStore = defineStore("data", () => {
    const vdata = ref("vdata")

    return {
        vdata
    }
})