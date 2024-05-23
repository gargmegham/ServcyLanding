<script lang="ts" setup>
const { slug } = useRoute().params
useHead({
    title: `Servcy Blogs | ${slug}`,
    meta: [
        {
            hid: "description",
            name: "description",
            content: "Servcy's blog page for all the latest updates and news."
        }
    ]
})
</script>

<template>
    <article
        class="min-h-screen bg-servcy-green px-[5%] pb-10 pt-[12vh] text-servcy-cream">
        <ContentDoc :path="`/blogs/${slug}`" v-slot="{ doc }">
            <div class="grid grid-cols-12 gap-6">
                <div
                    class="servcy-blog-content no-scrollbar col-span-9 h-[85vh] overflow-y-scroll">
                    <ContentRendererMarkdown :value="doc" />
                </div>
                <div
                    class="servcy-transparent-bg scroll col-span-3 h-[85vh] overflow-y-scroll rounded-lg p-6">
                    <div
                        class="mb-6 border-b-[1px] border-servcy-wheat pb-2 text-xl text-servcy-wheat">
                        Similar articles
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
                        <div>
                            <div
                                v-for="(blogPost, index) of list
                                    .filter((blogPost: any) => {
                                        return blogPost.tags.some(
                                            (tag: string) =>
                                                doc.tags.includes(tag) &&
                                                blogPost._id !== doc._id
                                        )
                                    })
                                    .slice(0, 3)"
                                :key="index"
                                class="blog-card servcy-card-bg mb-4 rounded-xl p-4 opacity-80"
                                elevation="2">
                                <NuxtLink
                                    :to="{ path: blogPost._path }"
                                    :key="blogPost._id"
                                    class="blog-link">
                                    <div class="mb-4 flex items-center">
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
            </div>
        </ContentDoc>
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
    max-width: 850px !important;
}
</style>
