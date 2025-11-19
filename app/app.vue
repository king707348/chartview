<template>
  <div>
    <NuxtLayout >
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    title: "this is a page",
    description: "develope chart with powerBI"
  })
</script>
