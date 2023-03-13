<template>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const fetchPost = () => $fetch(`/api/detail/${router.params.id}`);
const { data, pending } = await useAsyncData(fetchPost);
</script>
