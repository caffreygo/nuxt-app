<template>
  <div class="flex items-center flex-col gap-2 py-4">
    <!-- 处理请求错误 -->
    <div v-if="error" class="text-red-300">{{ error.message }}</div>
    <!-- 处理加载状态 -->
    <div v-if="pending">加载中...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
          post.title
        }}</NuxtLink>
        <p class="text-slate-500">发布于: {{ post.date }}</p>
      </div>
    </div>
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
  </div>
</template>

<script setup lang="ts">
// const posts = await $fetch("/api/posts");
// const { data: posts, pending, error } = await useFetch("/api/posts");
const page = ref(1);
const {
  data: posts,
  pending,
  error,
  refresh, // 获取刷新函数
} = await useFetch(() => `/api/posts?page=${page.value}&size=2`); // 注意修改为工厂函数方式

function prev() {
  page.value--;
  refresh();
}

function next() {
  page.value++;
  refresh();
}
</script>
