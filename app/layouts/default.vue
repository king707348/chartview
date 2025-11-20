<template>
  <el-container class="p-6">
    <el-header class="flex flex-row justify-between my-auto">
      <div class="w-[15rem] pr-4">
        <el-input
          v-model="input"
          clearable
          placeholder="Please input country"
        />
      </div>
      <div class="px-4">
        <el-button @click="search">Search</el-button>
      </div>
    </el-header>
    <el-main v-if="result_staus == 'pending'" class="flex m-auto font-bold">
      RESULT ZONE
    </el-main>
    <el-main v-else-if="result_staus == false" class="m-auto font-bold">
      NO FOUNDED DATA
    </el-main>
    <el-main v-else class="container">
      <div v-for="(ytData, idx) in Object.values(result_data.items)" :key="idx">
        <el-card class="relative mb-2" shadow="hover">
          <b class="absolute -top-2 -left-1 text-sm p-2 my-auto"
            >No.{{ idx + 1 }}</b
          >
          <p class="min-w-[6rem] my-auto">
            <NuxtImg
              class="w-full"
              :src="ytData.snippet.thumbnails.default.url"
              alt=""
            />
          </p>
          <div class="flex flex-col justify-between w-full ml-6">
            <b class="flex">
              <h6>Title:</h6>
              <p class="break-all">{{ ytData.snippet.title }}</p>
            </b>
            <b class="flex">
              <h6>description:</h6>
              <p class="break-all">{{ ytData.snippet.description }}</p>
            </b>
            <div class="flex ml-auto">
              <el-tooltip
                :content="`${videoBaseUrl}${ytData.id.videoId}`"
                placement="bottom"
              >
                <NuxtLink
                  class="border border-1 px-2 rounded font-bold hover:bg-gray-400 hover:text-white"
                  :to="`${videoBaseUrl}${ytData.id.videoId}`"
                  target="_blank"
                >
                  YOUTUBE LINK
                </NuxtLink>
              </el-tooltip>
            </div>
          </div>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
const useStore = useDataStore();
const { vdata } = useStore;
const input = ref("");
const result_data = ref(null);
const result_staus = ref("pending");
const videoBaseUrl = "https://www.youtube.com/watch?v=";

const search = async () => {
  //   const res = await $fetch("/api/catchYoutubeApi", {
  const res = await $fetch("/api/test", { // 測試用
    method: "POST",
    body: {
      country: input.value,
    },
  });
  console.log(res);
  if (res.data.result == "error") {
    result_staus.value = false;
    console.log(result_data.value);
  }
  if (res.data.result == "ok") {
    result_staus.value = res.data.result;

    result_data.value = res.data;
    console.log(result_data.value);
  }
}
</script>

<style type="scss" scoped>
.container {
  .el-card {
    :deep(.el-card__body) {
      display: flex;
      flex-direction: row;
      min-height: 10rem;
    }
  }
}
</style>
