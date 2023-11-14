// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/css/main.css", "@/assets/css/quill.css"],
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/images/charta.png" }],
      title: "Charta",
    },
  },
  plugins: ["~/plugins/event-bus"],
  router: {
    options: {
      linkActiveClass: "navactive",
    },
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    display: "swap",
  },
});
