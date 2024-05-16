<template>
    <section class="min-h-screen pt-[12vh]">
        <div class="relative mb-10 flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                Top
                <span class="servcy-text-bg">Vetted</span> Agencies,<br />
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
            <!-- search bar -->
            <div class="mt-8 w-full max-w-[600px]">
                <UInput
                    v-model="search"
                    class="ring-none outline-none"
                    size="lg"
                    name="search"
                    placeholder="Search by name..."
                    icon="i-heroicons-magnifying-glass-20-solid"
                    autocomplete="off"
                    :ui="{ icon: { trailing: { pointer: '' } } }">
                    <template #trailing>
                        <UButton
                            v-show="search !== ''"
                            color="gray"
                            variant="link"
                            icon="i-heroicons-x-mark-20-solid"
                            :padded="false"
                            @click="search = ''" />
                    </template>
                </UInput>
            </div>
        </div>
        <div
            class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <div
                v-for="(agency, index) of agencies
                    .filter((agency) =>
                        agency.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(
                        (pagination.page - 1) * pagination.limit,
                        pagination.page * pagination.limit
                    )"
                :key="index">
                <div
                    class="agency-card servcy-card-bg relative min-h-[400px] rounded-xl p-4"
                    elevation="2">
                    <NuxtLink
                        v-if="agency.linkedin"
                        :to="agency.linkedin"
                        :key="agency._id"
                        class="agency-link">
                        <Icon
                            name="mdi:linkedin"
                            size="24"
                            class="absolute right-2 top-2 text-servcy-green" />
                    </NuxtLink>
                    <NuxtLink
                        :to="`${agency.website}?utm_source=servcy&utm_medium=agencies`"
                        :key="agency._id"
                        class="agency-link">
                        <div class="mb-4 flex items-center gap-x-2">
                            <img
                                v-if="!!agency.logo"
                                width="48"
                                height="48"
                                :src="`/agencies/logos/${agency._id}.png`"
                                alt="logo"
                                class="rounded-full" />
                            <div
                                v-else
                                class="font-axiforma flex size-12 items-center justify-center truncate rounded-full bg-slate-300 p-2 text-lg font-extrabold text-servcy-black">
                                {{ agency.name[0].toLocaleUpperCase() }}
                            </div>
                            <div
                                class="agency-title font-poppins w-44 truncate text-lg font-extrabold text-servcy-black">
                                {{ agency.name.toLocaleUpperCase() }}
                            </div>
                        </div>
                        <div
                            class="mb-4 flex justify-between border-b-2 border-servcy-wheat pb-4 text-xs font-thin text-servcy-black">
                            <span class="truncate">{{ agency.tagline }}</span>
                        </div>
                        <div class="mb-4 flex flex-wrap gap-2">
                            <div
                                v-if="agency.location"
                                class="servcy-text-xss w-24 truncate rounded-md bg-servcy-black p-1 text-servcy-gray">
                                <Icon
                                    name="material-symbols:android-emergency-location-service"
                                    size="12" />
                                {{ agency.location }}
                            </div>
                            <div
                                v-if="agency.reviews_count"
                                class="servcy-text-xss rounded-md bg-servcy-black p-1 text-servcy-gray">
                                <Icon name="ic:twotone-reviews" size="12" />
                                {{ agency.reviews_count }} Reviews
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-y-2">
                            <UTooltip text="Rating" :popper="{ arrow: true }"
                                ><div
                                    v-if="agency.rating"
                                    class="flex items-center gap-1">
                                    <Icon
                                        name="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
                                        size="20"
                                        class="text-servcy" />
                                    <span
                                        class="text-xs font-bold text-servcy-black"
                                        >{{ agency.rating }}</span
                                    >
                                </div></UTooltip
                            >
                            <UTooltip
                                text="Hourly Rate"
                                :popper="{ arrow: true }"
                                ><div
                                    v-if="agency.hourly_rate"
                                    class="flex items-center gap-1">
                                    <Icon
                                        name="f7:money-dollar-circle"
                                        size="20"
                                        class="text-servcy" />
                                    <span
                                        class="text-xs font-bold text-servcy-black"
                                        >{{ agency.hourly_rate }}</span
                                    >
                                </div></UTooltip
                            >
                            <UTooltip
                                text="Minimum Project Size"
                                :popper="{ arrow: true }">
                                <div
                                    v-if="agency.min_project_size"
                                    class="flex items-center gap-1">
                                    <Icon
                                        name="fluent:wallet-credit-card-16-regular"
                                        size="20"
                                        class="text-yellow-600" />
                                    <span
                                        class="text-xs font-bold text-servcy-black"
                                        >{{ agency.min_project_size }}</span
                                    >
                                </div></UTooltip
                            >
                            <UTooltip
                                text="Team Size"
                                :popper="{ arrow: true }">
                                <div
                                    v-if="agency.team_size"
                                    class="flex items-center gap-1">
                                    <Icon
                                        name="fluent:people-team-16-regular"
                                        size="20"
                                        class="text-blue-800" />
                                    <span
                                        class="text-xs font-bold text-servcy-black"
                                        >{{ agency.team_size }}</span
                                    >
                                </div>
                            </UTooltip>
                        </div>
                    </NuxtLink>
                    <div class="mt-4" v-if="agency?.executives?.length > 0">
                        <div
                            class="mb-2 w-20 border-b-2 border-servcy-wheat text-sm font-extrabold text-servcy-black">
                            Executives:
                        </div>
                        <div class="grid grid-cols-1 gap-y-1">
                            <div
                                v-for="executive in agency.executives.slice(
                                    0,
                                    4
                                )"
                                :key="executive._id"
                                class="flex items-center justify-between gap-x-2">
                                <div class="flex items-center gap-1">
                                    <Icon
                                        v-if="!executive.image"
                                        name="mdi:head-cog"
                                        size="24"
                                        class="text-servcy-black" />
                                    <img
                                        v-else
                                        :src="`/agencies/executives/${executive.name}.jpg`"
                                        alt="executive"
                                        width="24"
                                        height="24"
                                        class="rounded-full" />
                                    <div>
                                        <div
                                            class="truncate text-xs font-bold text-servcy-black">
                                            {{ executive.name }}
                                        </div>
                                        <div
                                            class="servcy-text-xss w-36 truncate font-bold text-servcy-black">
                                            {{ executive.position }}
                                        </div>
                                    </div>
                                </div>
                                <NuxtLink
                                    v-if="executive.linkedin"
                                    :to="executive.linkedin"
                                    :key="`${executive.name}-linkedin`"
                                    class="agency-link">
                                    <Icon
                                        name="mdi:linkedin"
                                        size="24"
                                        class="text-servcy-green"
                                /></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-6 flex justify-end">
            <UPagination
                class=""
                v-model="pagination.page"
                :page-count="pagination.totalPages"
                :total="pagination.total" />
        </div>
        <FinalCTA />
    </section>
</template>

<script setup>
const agencies = ref([])
const search = ref("")
const pagination = ref({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
})
onMounted(async () => {
    const data = await fetch("/agencies/data.json")
    const companies = await data.json()
    agencies.value = companies
        .map((company) => {
            if (!company.executives)
                return {
                    ...company,
                    executives: []
                }
            return company
        })
        .sort((a, b) => b.location - a.location)
        .sort((a, b) => b.executives.length - a.executives.length)
    pagination.value = {
        page: 1,
        limit: 20,
        total: companies.length,
        totalPages: Math.ceil(companies.length / 20)
    }
})
useHead({
    title: "Top Vetted Agencies, for your next project",
    meta: [
        {
            hid: "description",
            name: "description",
            content:
                "We have vetted the best agencies for you, so you can focus on your project. Filter them further by rating, location, reviews, and more."
        },
        {
            hid: "keywords",
            name: "keywords",
            content:
                "agencies, vetted agencies, top agencies, best agencies, agencies for project, agencies for startups, agencies for businesses"
        },
        {
            hid: "author",
            name: "author",
            content: "Servcy"
        }
    ]
})
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
