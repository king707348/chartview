<template>
    <el-container class="p-6">
        <el-header class="flex flex-row justify-between my-auto">
            <div class="w-[10rem] pr-4">
                <el-input v-model="input" clearable placeholder="Please input country" />
            </div>
            <div class="px-4">
                <el-button>Search</el-button>
            </div>
            
        </el-header>
        <el-main>

        </el-main>

    </el-container>
</template>

<script setup>
    const useStore = useDataStore()
    const { vdata } = useStore
    const input = ref('')

    const { data, pending } = useFetch("/api/catchYoutubeApi")
    console.log(data.value)




</script>

<style>

</style>