<template>
    <div class="min-h-screen bg-servcy-green px-[5%] py-[8vh]">
        <div class="mt-16 flex h-64 flex-row justify-between text-servcy-cream">
            <div>
                <h1 class="font-axiforma text-5xl font-extrabold md:text-6xl">
                    Welcome to Servcy Academy
                </h1>
                <h2
                    class="mt-6 text-lg font-semibold text-servcy-wheat md:text-xl">
                    An interactive suite of blog posts for helping you become
                    more productive,<br />and to help you grow your freelance
                    business.
                </h2>
                <form class="servcy-form mt-6" autocomplete="off">
                    <input
                        id="servcy-input"
                        placeholder="Search for a blog post..."
                        v-model="searchTerm" />
                </form>
            </div>
            <div class="max-md:hidden">
                <img
                    src="@/assets/icons/all-blogs.svg"
                    alt="blog home"
                    class="m-2 h-full" />
            </div>
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
                class="xs:sm:grid-cols-1 mt-10 grid grid-cols-3 gap-8 py-10 xl:grid-cols-4">
                <div
                    v-for="(blogPost, index) of list.filter(
                        (blogPost) =>
                            blogPost.title
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) ||
                            blogPost.description
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                    )"
                    :key="index">
                    <div
                        class="blog-card servcy-card-bg h-72 rounded-xl p-4"
                        elevation="2">
                        <NuxtLink
                            :to="{ path: blogPost._path }"
                            :key="blogPost._id"
                            class="blog-link">
                            <div class="mb-4 flex items-center">
                                <div
                                    class="blog-title truncate text-lg font-extrabold text-servcy-black">
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
                                    {{ blogPost.reading_time }} minute read
                                </div>
                            </div>
                            <div class="mb-4 flex">
                                <div
                                    v-for="tag in blogPost.tags"
                                    class="servcy-text-xss mr-2 rounded-md bg-servcy-black p-1 text-servcy-gray">
                                    {{ tag }}
                                </div>
                            </div>
                            <div
                                class="h-20 overflow-hidden text-sm text-servcy-black">
                                {{ blogPost.description }}
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </ContentList>
        <a
            href="https://github.com/orgs/Servcy/repositories"
            class="fixed bottom-4 right-4 !m-0 rounded-xl border border-neutral-200 !bg-black !px-2 !py-1 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
            <span>We're Open Source</span>
            <Icon name="mdi:github" class="ml-2 h-6 w-6" />
            <span
                class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </a>
    </div>
</template>

<script setup>
import { ref } from "vue"

const searchTerm = ref("")

useHead({
    title: "Servcy Blogs",
    meta: [
        {
            hid: "description",
            name: "description",
            content:
                "An interactive suite of blog posts for helping you become more productive, and to help you manage your engineering team better."
        }
    ]
})
</script>

<style scoped>
.blog-link {
    text-decoration: none;
}

.blog-card {
    box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.05),
        0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.blog-card:hover,
.blog-card:focus,
.blog-card:active {
    transform: scale(1.1);
}
</style>

<style scoped lang="scss">
.servcy-form {
    --primary: #032123;
    --input-placeholder: #7e84a3;
    --input-text: #7e84a3;
    --border-default: #e1e6f9;
    --background: #fff;
    --button-text: #ffffff;
    display: flex;
    align-items: center;
    width: 90%;
    background: var(--background);
    box-shadow: inset 0 0 0 var(--border-width, 1px)
        var(--border, var(--border-default));
    border-radius: 9px;
    padding-right: 4px;
    transition: box-shadow 0.25s;
    &:focus-within {
        --border-width: 1.5px;
    }
    #servcy-input,
    #servcy-button {
        background: none;
        outline: none;
        display: block;
        border: none;
        font-family: inherit;
        margin: 0;
    }
    #servcy-input {
        width: 100%;
        flex-grow: 1;
        padding: 12px 12px 12px 16px;
        color: var(--input-text);
        font-weight: 400;
        &::placeholder {
            color: var(--input-placeholder);
        }
    }
    #servcy-button {
        --text-opacity: 1;
        --border-radius: 7px;
        position: relative;
        padding: 8px 0;
        min-width: 130px;
        text-align: center;
        font-weight: 600 !important;
        opacity: var(--button-opacity, 0.5);
        filter: var(--button-filter, grayscale(65%));
        color: var(--button-text);
        border-radius: var(--border-radius);
        transform: translateZ(0);
        transition:
            opacity 0.25s,
            filter 0.25s;
        -webkit-tap-highlight-color: transparent;
        &:not(.active) {
            background: var(--primary);
        }
        #servcy-span {
            display: block;
            position: relative;
            z-index: 4;
            opacity: var(--text-opacity);
        }
    }
}
</style>
