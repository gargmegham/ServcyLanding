<template>
    <section class="h-screen pb-[10vh] pt-[12vh]">
        <div class="flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
                Pricing For Your Growth
            </h1>
            <h3
                class="mt-6 text-xl font-extrabold text-servcy-wheat md:text-lg">
                Hate Seat Based Pricing? We do too.<br />That's why we offer
                unlimited projects, issues, integrations, and more in all our
                plans.
            </h3>
        </div>
        <div class="mt-16 grid grid-cols-3 gap-4">
            <div class="col-span-1">
                <div
                    class="servcy-transparent-bg h-full rounded-lg p-8 text-white">
                    <div
                        class="font-axiforma mb-6 text-xl font-extrabold text-servcy-wheat md:text-2xl">
                        All our plans offer:
                    </div>
                    <div
                        class="my-2 flex text-sm"
                        v-for="offering in offerings"
                        :key="offering">
                        <img
                            src="@/assets/icons/new-releases.svg"
                            class="mr-2" />
                        {{ offering.text }}
                        <span
                            v-if="offering.comingSoon"
                            class="ml-2 text-xs text-servcy-wheat"
                            >(Coming Soon...)</span
                        >
                        <span
                            v-if="offering.disclaimer"
                            class="ml-2 text-xs text-servcy-wheat"
                            >{{ offering.disclaimer }}</span
                        >
                    </div>
                </div>
            </div>
            <div class="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                <div
                    class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
                    <div
                        class="font-axiforma mb-6 flex items-center border-b-2 border-neutral-500 pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                        <img
                            :src="plans[0].icon"
                            :alt="plans[0].name"
                            class="mr-2"
                            width="48"
                            height="48" />
                        <div>
                            {{ plans[0].name }}
                            <div class="text-sm text-servcy-white">
                                {{ plans[0].description }}
                            </div>
                        </div>
                    </div>
                    <div class="flex h-20 w-full gap-x-2">
                        <a
                            href="https://ko-fi.com/B0B0WS6XV"
                            target="_blank"
                            class="flex h-16 w-full items-center justify-center rounded-lg bg-servcy-black text-lg font-extrabold text-servcy-cream hover:text-servcy-wheat">
                            <img
                                height="28px"
                                width="28px"
                                class="elevation-2 mr-2 inline"
                                src="@/assets/icons/logos/kofi.png"
                                alt="Buy Me a Coffee" />
                            <span>Buy Me A Coffee</span>
                        </a>
                    </div>
                    <a
                        href="https://web.servcy.com/login"
                        class="ml-auto flex w-full justify-end text-xs !text-servcy-wheat underline hover:!text-servcy-silver">
                        and start for free
                    </a>
                </div>
                <div
                    class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
                    <div
                        class="font-axiforma mb-6 flex items-center border-b-2 border-neutral-500 pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                        <img
                            :src="plans[1].icon"
                            :alt="plans[1].name"
                            class="mr-2"
                            width="48"
                            height="48" />
                        <div>
                            {{ plans[1].name }}
                            <div class="text-sm text-servcy-white">
                                {{ plans[1].description }}
                            </div>
                        </div>
                    </div>
                    <div class="flex h-20 w-full gap-x-2">
                        <div
                            class="font-axiforma my-2 flex w-1/3 flex-col items-center justify-center rounded-lg bg-servcy-cream text-center text-lg font-extrabold text-servcy-black">
                            <div>
                                {{ `${plans[1].price} USD` }}
                            </div>
                            <div class="servcy-caption opacity-40">
                                {{
                                    `${plans[1].price / plans[1].maxSeats} USD/user`
                                }}
                            </div>
                        </div>
                        <div
                            class="font-axiforma my-2 flex w-2/3 items-center justify-center rounded-lg border-servcy-wheat bg-servcy-cream text-center text-lg font-extrabold">
                            <a
                                :href="plans[1].href"
                                class="flex h-full w-full items-center justify-center font-bold !text-servcy-black hover:!text-servcy-green">
                                {{ plans[1].buttonText }}
                            </a>
                        </div>
                    </div>
                    <div
                        class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
                        {{ plans[1].ribbon }}
                    </div>
                </div>
                <div
                    class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
                    <div
                        class="font-axiforma mb-6 flex items-center border-b-2 border-neutral-500 pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                        <img
                            :src="plans[2].icon"
                            :alt="plans[2].name"
                            class="mr-2"
                            width="48"
                            height="48" />
                        <div>
                            {{ plans[2].name }}
                            <div class="text-sm text-servcy-white">
                                {{ plans[2].description }}
                            </div>
                        </div>
                    </div>
                    <div class="flex h-20 w-full gap-x-2">
                        <div
                            class="font-axiforma my-2 flex w-1/3 flex-col items-center justify-center rounded-lg bg-servcy-cream text-center text-lg font-extrabold text-servcy-black">
                            <div>
                                {{ `${plans[2].price} USD` }}
                            </div>
                            <div class="servcy-caption opacity-40">
                                {{
                                    `${plans[2].price / plans[2].maxSeats} USD/user`
                                }}
                            </div>
                        </div>
                        <div
                            class="font-axiforma my-2 flex w-2/3 items-center justify-center rounded-lg border-servcy-wheat bg-servcy-cream text-center text-lg font-extrabold">
                            <a
                                :href="plans[2].href"
                                class="flex h-full w-full items-center justify-center font-bold !text-servcy-black hover:!text-servcy-green">
                                {{ plans[2].buttonText }}
                            </a>
                        </div>
                    </div>
                    <div
                        class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
                        {{ plans[2].ribbon }}
                    </div>
                </div>
                <div
                    class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
                    <div
                        class="font-axiforma mb-6 flex items-center border-b-2 border-neutral-500 pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                        <img
                            :src="plans[3].icon"
                            :alt="plans[3].name"
                            class="mr-2"
                            width="48"
                            height="48" />
                        <div>
                            {{ plans[3].name }}
                            <div class="text-sm text-servcy-white">
                                {{ plans[3].description }}
                            </div>
                        </div>
                    </div>
                    <div class="flex h-20 w-full gap-x-2">
                        <div
                            class="font-axiforma my-2 flex w-full items-center justify-center rounded-lg bg-servcy-cream text-center text-lg font-extrabold text-servcy-black">
                            <a
                                :href="plans[3].href"
                                class="flex h-full w-full items-center justify-center !text-servcy-black">
                                {{ plans[3].buttonText }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const offerings = [
    { text: "Unlimited Projects" },
    { text: "Unlimited Issues" },
    { text: "SSO, & Role based access" },
    { text: "AI Assistance" },
    { text: "Integration with Notion, Figma, Gmail & more" },
    { text: "Custom Analytics" },
    { text: "Feature Requests", disclaimer: "Subjected to voting." },
    { text: "DORA metrics", comingSoon: true },
    { text: "APIs, & Webhooks", comingSoon: true },
    { text: "Slack & Github bot", comingSoon: true }
]
const plans = [
    {
        name: "Starter",
        description: "For a team of upto 5 techies",
        icon: "/shots/starter.svg",
        href: "https://web.servcy.com/login",
        buttonText: "Get Started",
        showKofi: true,
        price: null
    },
    {
        name: "Plus",
        description: "For a team of upto 25 techies",
        icon: "/shots/plus.svg",
        price: "79",
        href: "mailto:contact@servcy.com",
        buttonText: "Get In Touch",
        ribbon: "Most Popular",
        maxSeats: 25
    },
    {
        name: "Business",
        description: "For a team of upto 50 techies",
        icon: "/shots/business.svg",
        buttonText: "Get In Touch",
        href: "mailto:contact@servcy.com",
        maxSeats: 50,
        price: "119",
        ribbon: "~25% Off"
    },
    {
        name: "Enterprise",
        description: "For a team of more than 50 techies",
        icon: "/shots/enterprise.svg",
        buttonText: "Get A Quote",
        href: "mailto:contact@servcy.com",
        price: null
    }
]
useHead({
    title: "Servcy Pricing",
    meta: [
        {
            hid: "description",
            name: "description",
            content:
                "Servcy's pricing plans for teams of all sizes. Start with a 7 day free trial today."
        }
    ]
})
</script>

<style scoped>
section {
    padding-left: 10%;
    padding-right: 10%;
    background-color: #032123;
}
.servcy-most-popular {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    backdrop-filter: blur(12px);
    font-size: 13px;
    font-weight: 500;
    line-height: 28px;
    padding: 0px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.05);
    border-image: initial;
    white-space: nowrap;
}
.servcy-caption {
    font-size: 10px;
    line-height: 12px;
}
</style>
