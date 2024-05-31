<script setup lang="ts">
interface Props {
    title: string
    image: string
    alt: string
    description: string
    last_updated: string
    tags: Array<string>
}

withDefaults(defineProps<Props>(), {
    title: "no-title",
    image: "#",
    alt: "no-img",
    description: "no description",
    last_updated: "no-date",
    tags: () => []
})
</script>

<template>
    <header>
        <h1 class="m-7 text-center text-xl font-bold md:text-3xl lg:text-4xl">
            {{ title || "" }}
        </h1>
        <NuxtImg
            :src="image || ''"
            :alt="alt || ''"
            width="600"
            class="m-auto h-32 w-4/6 content-center rounded-2xl object-cover shadow-lg md:h-72 md:w-4/5" />
        <p
            class="mx-auto my-3 max-w-xl text-center text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
            {{ description }}
        </p>

        <div class="flex justify-center">
            <div
                class="flex items-center gap-x-2 rounded px-4 py-2 font-semibold">
                <Icon name="mdi:calendar" size="16" />
                <div class="!m-0 text-xs">{{ last_updated || "" }}</div>
            </div>
            <div
                class="flex flex-wrap items-center justify-center gap-2 px-4 py-2">
                <div
                    v-for="tag in tags"
                    :key="tag"
                    class="!m-0 rounded-md bg-servcy-black p-1 text-xs text-servcy-gray">
                    {{ tag }}
                </div>
            </div>
        </div>
    </header>
</template>
