// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxt/content",
        "@nuxtjs/sitemap",
        "@nuxt/ui",
        "@vueuse/motion/nuxt",
        "@nuxt/image"
    ],
    app: {
        head: {
            titleTemplate: "%s",
            title: "Servcy - Project Tracking Ecosystem for Freelance Agencies",
            htmlAttrs: {
                lang: "en"
            },
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Servcy provides a project tracking ecosystem for freelance agencies. Gain complete visibility over your project by tracking issues, inbox, time and budget all in one place."
                },
                { property: "og:site_name", content: "Servcy" },
                { hid: "og:type", property: "og:type", content: "website" },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: "https://servcy.com"
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content:
                        "Gain complete visibility over your projects with Servcy"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content:
                        "Servcy provides a project tracking ecosystem for freelance agencies. Gain complete visibility over your project by tracking issues, inbox, time and budget all in one place."
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "https://servcy.com/meta_image.png"
                },
                {
                    hid: "og:image:width",
                    property: "og:image:width",
                    content: "15141"
                },
                {
                    hid: "og:image:height",
                    property: "og:image:height",
                    content: "16290"
                },
                { name: "format-detection", content: "telephone=yes" },
                {
                    name: "robots",
                    content:
                        "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                },
                {
                    rel: "dns-prefetch",
                    href: "https://fonts.gstatic.com/"
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png"
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png"
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png"
                }
            ]
        }
    },
    css: ["@/assets/css/global.css"],
    site: {
        url: "https://servcy.com"
    }
})