// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/images/Charta.png" }],
      title: "Charta",
    },
  },
});
