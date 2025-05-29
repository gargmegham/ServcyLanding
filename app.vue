<template>
    <Header />
    <NuxtPage class="overflow-x-hidden" />
    <Footer />
    <a
        href="https://github.com/orgs/Servcy/repositories"
        class="fixed bottom-8 right-4 m-0 rounded-xl border border-neutral-200 border-white/[0.2] bg-black px-2 py-1 text-sm font-medium text-servcy-cream">
        <span>We're Open Source</span>
        <Icon name="mdi:github" class="ml-2 h-6 w-6" />
        <span
            class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
    </a>
</template>

<script setup>
useHead({
    script: [
        {
            src: "https://www.googletagmanager.com/gtag/js?id=G-ZW4GBHWSKE",
            async: true
        },
        {
            innerHTML: `
            window.dataLayer = window.dataLayer || []
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag("js", new Date())
            gtag("config", "G-ZW4GBHWSKE")
        `
        },
        {
            type: "text/javascript",
            innerHTML: `
            (function (c, l, a, r, i, t, y) {
                c[a] =
                    c[a] ||
                    function () {
                        ;(c[a].q = c[a].q || []).push(arguments)
                    }
                t = l.createElement(r)
                t.async = 1
                t.src = "https://www.clarity.ms/tag/" + i
                y = l.getElementsByTagName(r)[0]
                y.parentNode.insertBefore(t, y)
            })(window, document, "clarity", "script", "ffilkcgrum")
            `
        }
    ]
})
</script>
