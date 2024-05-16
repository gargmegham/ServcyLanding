<template>
    <section class="min-h-screen py-[12vh]">
        <div class="relative mb-10 flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                Top <span class="servcy-text-bg">Vetted</span> Agencies,<br />
                <span
                    class="text-lg font-extrabold text-servcy-cream md:text-xl"
                    >for your next project</span
                >
            </h1>
            <h3
                class="mt-4 text-xl font-extrabold text-servcy-wheat md:text-2xl">
                We have vetted the best agencies for you, so you can focus on
                your project.<br />Filter them further by rating, location,
                reviews, and more.
            </h3>
        </div>
        <div
            class="xs:sm:grid-cols-1 mt-10 grid grid-cols-3 gap-8 py-10 xl:grid-cols-4">
            <div v-for="(agency, index) of agencies" :key="index">
                <NuxtLink
                    :to="`${agency.website}?utm_source=servcy&utm_medium=agencies`"
                    :key="agency._id"
                    class="agency-link">
                    <div
                        class="agency-card servcy-card-bg h-72 rounded-xl p-4"
                        elevation="2">
                        <div class="mb-4 flex items-center gap-4">
                            <img
                                v-if="!!agency.logo"
                                width="48"
                                height="48"
                                :src="`./agencies/${agency._id}.png`"
                                alt="agency logo"
                                class="rounded-full" />
                            <div
                                v-else
                                class="font-axiforma flex size-12 items-center justify-center truncate rounded-full bg-slate-300 p-2 text-lg font-extrabold text-servcy-black">
                                {{ agency.name[0].toLocaleUpperCase() }}
                            </div>
                            <div
                                class="agency-title font-poppins truncate text-lg font-extrabold text-servcy-black">
                                {{ agency.name.toLocaleUpperCase() }}
                            </div>
                        </div>
                        <div
                            class="mb-4 flex justify-between border-b-2 border-servcy-wheat pb-4 text-xs font-thin text-servcy-black">
                            <span class="truncate">{{ agency.tagline }}</span>
                        </div>
                        <div class="mb-4 flex">
                            <div
                                v-for="tag in agency.tags"
                                class="servcy-text-xss mr-2 rounded-md bg-servcy-black p-1 text-servcy-gray">
                                {{ tag }}
                            </div>
                        </div>
                        <div
                            class="h-20 overflow-hidden text-sm text-servcy-black">
                            {{ agency.description }}
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import agencies from "assets/data/agencies.json"
</script>

<style scoped>
section {
    padding-left: 5%;
    padding-right: 5%;
    background-color: #032123;
}
.agency-link {
    text-decoration: none;
}
.agency-card {
    box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.05),
        0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.agency-card:hover,
.agency-card:focus,
.agency-card:active {
    transform: scale(1.05);
}
</style>
