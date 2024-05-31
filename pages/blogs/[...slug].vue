<script lang="ts" setup>
const { path } = useRoute()
const { slug } = useRoute().params
const { data: articles, error } = await useAsyncData(`blogs/${path}`, () =>
    queryContent(path).findOne()
)
if (error.value) navigateTo("/404")
const data = computed(() => {
    return {
        title: articles.value?.title || "no-title available",
        description: articles.value?.description || "no-description available",
        image: articles.value?.image || "/not-found.jpg",
        ogImage: articles.value?.ogImage || "/not-found.jpg"
    }
})
useHead({
    title: data.value.title || "",
    meta: [
        { name: "description", content: data.value.description },
        {
            name: "description",
            content: data.value.description
        },
        { property: "og:site_name", content: "Servcy's Blog" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
            property: "og:url",
            content: `https://servcy.com/${path}`
        },
        {
            property: "og:title",
            content: data.value.title
        },
        {
            property: "og:description",
            content: data.value.description
        },
        {
            property: "og:image",
            content: data.value.ogImage || data.value.image
        },
        { name: "twitter:site", content: "@contactServcy" },
        { name: "twitter:card", content: "summary_large_image" },
        {
            name: "twitter:url",
            content: `https://servcy.com/${path}`
        },
        {
            name: "twitter:title",
            content: data.value.title
        },
        {
            name: "twitter:description",
            content: data.value.description
        },
        {
            name: "twitter:image",
            content: data.value.ogImage || data.value.image
        }
    ],
    link: [
        {
            rel: "canonical",
            href: `https://servcy.com/${path}`
        }
    ]
})
</script>

<template>
    <article
        class="min-h-screen bg-servcy-green px-[15%] pb-10 pt-[12vh] text-servcy-cream">
        <ContentDoc :path="`/blogs/${slug}`" v-slot="{ doc }">
            <div class="servcy-blog-content no-scrollbar">
                <BlogHeader
                    :title="doc.title"
                    :image="doc.image"
                    :alt="doc.alt"
                    :last_updated="doc.last_updated"
                    :tags="doc.tags"
                    :description="doc.description" />
                <ContentRendererMarkdown :value="doc" />
            </div>
        </ContentDoc>
        <div class="servcy-transparent-bg rounded-lg p-4">
            <div
                class="mb-6 border-b-[1px] border-servcy-wheat pb-2 text-xl text-servcy-wheat">
                Further Reading
            </div>
            <ContentList
                path="blogs"
                fields="title,description,path"
                v-slot="{ list }"
                :query="{
                    draft: false,
                    sort: [
                        {
                            date: -1
                        }
                    ]
                }">
                <div
                    class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="(blogPost, index) of list
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 3)"
                        :key="index"
                        class="blog-card servcy-card-bg mb-4 rounded-xl p-4 opacity-90"
                        elevation="2">
                        <NuxtLink
                            :to="{ path: blogPost._path }"
                            :key="blogPost._id"
                            class="blog-link">
                            <NuxtImg
                                :src="blogPost.image"
                                loading="lazy"
                                alt="blog post image"
                                class="h-36 w-full rounded-xl object-cover" />
                            <div class="my-4 flex items-center">
                                <div
                                    class="blog-title text-sm font-extrabold text-servcy-black">
                                    {{ blogPost.title }}
                                </div>
                            </div>
                            <div
                                class="mb-4 flex justify-between border-b-2 border-servcy-wheat pb-4 text-xs font-thin">
                                <div class="text-servcy-black">
                                    {{
                                        new Date(
                                            blogPost.last_updated
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })
                                    }}
                                </div>
                                <div class="text-servcy-black">
                                    {{ blogPost.reading_time }}
                                    minute read
                                </div>
                            </div>
                            <div class="mb-4 flex">
                                <div
                                    v-for="tag in blogPost.tags"
                                    class="servcy-text-xss mr-2 rounded-md bg-servcy-black p-1 text-servcy-gray">
                                    {{ tag }}
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </ContentList>
        </div>
    </article>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.servcy-blog-content {
    strong {
        font-weight: 900 !important;
        font-size: larger;
    }

    h1 {
        @apply text-3xl font-bold;
        @apply text-servcy-wheat;
    }

    h2 {
        @apply text-2xl font-bold;
    }

    h3 {
        @apply text-xl font-bold;
    }

    h4 {
        @apply text-lg font-bold;
    }

    h5 {
        @apply text-base font-bold;
    }

    a {
        text-decoration: underline;
        color: #d1bfae !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    span,
    div,
    pre,
    blockquote,
    table {
        margin-bottom: 20px;
    }
    ol,
    ul {
        li {
            margin-top: 12px;
            margin-bottom: 12px;
        }
    }

    ol {
        list-style: auto !important;
        margin-left: 20px;
    }

    ul {
        list-style: inside !important;
    }

    blockquote {
        padding: 8px 10px;
        border-radius: 8px;
        background: linear-gradient(
            rgba(255, 255, 255, 0.02) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );

        p {
            margin: 0 !important;
        }
    }

    table {
        width: 80%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
        th,
        td {
            padding: 8px;
            border: 1px solid #d1bfae;
        }
    }

    pre {
        @apply bg-slate-800;
        padding: 10px 0px;
        border-radius: 4px;
        code {
            font-family: monospace !important;
        }
    }
}
</style>
