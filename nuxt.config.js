export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - One app to manage them all",
    title: "Servcy",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Servcy is for Founders, CXOs, Freelancers and Software developers. We all use different softwares to manage our workday, but what if you could have control over all of them in one place? Servcy helps you see it, analyse it and do it all in one place.",
      },
      { property: "og:site_name", content: "Servcy" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://servcy.com" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Consolidate all your tools in one place with Servcy",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Servcy is for Founders, CXOs, Freelancers and Software developers. We all use different softwares to manage our workday, but what if you could have control over all of them in one place? Servcy helps you see it, analyse it and do it all in one place.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://servcy.com/meta_image.png",
      },
      { hid: "og:image:width", property: "og:image:width", content: "15141" },
      { hid: "og:image:height", property: "og:image:height", content: "16290" },
      { name: "format-detection", content: "telephone=yes" },
      {
        name: "robots",
        content:
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/global.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/notifier.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {},
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxtjs-microsoft-clarity",
    "@nuxtjs/firebase",
    "@nuxt/content",
    "@nuxtjs/sitemap",
  ],

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_apiKey,
      authDomain: process.env.FIREBASE_authDomain,
      projectId: process.env.FIREBASE_projectId,
      storageBucket: process.env.FIREBASE_storageBucket,
      messagingSenderId: process.env.FIREBASE_messagingSenderId,
      appId: process.env.FIREBASE_appId,
      measurementId: process.env.FIREBASE_measurementId,
    },
    services: {
      auth: true,
      firestore: true,
    },
  },

  sitemap: {
    hostname: "https://servcy.com",
    gzip: true,
  },

  microsoftClarity: {
    id: process.env.CLARITY_PROJECT_ID,
  },
};
