// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@huntersofbook/naive-ui-nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ],
  css: ["assets/css/tailwind.css"],
});
