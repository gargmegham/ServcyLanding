<template>
    <section class="min-h-screen py-[10vh]">
        <div class="flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                Pricing For Your Growth
            </h1>
            <h3
                class="mt-6 text-xl font-extrabold text-servcy-wheat md:text-lg">
                We offer the same features to all our customers. The only
                difference is the number of seats you need.<br />We grow with
                you, and we want you to grow with us.
            </h3>
        </div>
        <div class="my-10 flex items-center justify-center">
            <Icon size="40" name="heroicons:currency-dollar" color="primary" />
            <UToggle
                v-model="isInrSelected"
                color="emerald"
                size="xl"
                class="mx-4" />
            <Icon size="40" name="heroicons:currency-rupee" color="primary" />
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div
                class="servcy-transparent-bg relative col-span-1 rounded-lg p-8">
                <div
                    class="font-axiforma items-centerpb-4 mb-6 flex h-20 text-lg font-extrabold text-servcy-wheat md:text-xl">
                    <img
                        :src="plans[0].icon"
                        :alt="plans[0].name"
                        class="mr-4"
                        width="48"
                        height="48" />
                    <div>
                        {{ plans[0].name }}
                        <div class="text-sm text-servcy-white">
                            {{ plans[0].description }}
                        </div>
                    </div>
                </div>
                <div class="mb-6 h-16 border-b-2 border-neutral-500 pb-4">
                    <span
                        v-if="!isInrSelected"
                        class="text-4xl font-extrabold text-servcy-wheat"
                        >$</span
                    >
                    <span
                        v-else
                        class="text-4xl font-extrabold text-servcy-wheat"
                        >&#8377;</span
                    >
                    <span
                        class="ml-1 text-4xl font-extrabold text-servcy-wheat"
                        >{{
                            !isInrSelected
                                ? plans[0].usdPrice
                                : plans[0].inrPrice
                        }}</span
                    ><span class="text-xl font-extrabold text-servcy-silver"
                        >/mo</span
                    >
                </div>
                <div class="mb-4 h-24">
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
                    class="my-2 flex text-sm"
                    v-for="differentiator in plans[0].differentiators"
                    :key="differentiator">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="text-servcy-cream">{{ differentiator }}</span>
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="offering in offerings"
                    :key="offering">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="truncate text-servcy-cream">{{
                        offering.text
                    }}</span>
                    <span
                        v-if="offering.comingSoon"
                        class="ml-2 text-[8px] text-servcy-wheat"
                        >(Coming Soon...)</span
                    >
                </div>
            </div>
            <div
                class="servcy-transparent-bg relative col-span-1 rounded-lg p-8">
                <div
                    class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                    <img
                        :src="plans[1].icon"
                        :alt="plans[1].name"
                        class="mr-4"
                        width="48"
                        height="48" />
                    <div>
                        {{ plans[1].name }}
                        <div class="text-sm text-servcy-white">
                            {{ plans[1].description }}
                        </div>
                    </div>
                </div>
                <div class="mb-6 h-16 border-b-2 border-neutral-500 pb-4">
                    <span
                        v-if="!isInrSelected"
                        class="text-4xl font-extrabold text-servcy-wheat"
                        >$</span
                    >
                    <span
                        v-else
                        class="text-4xl font-extrabold text-servcy-wheat"
                        >&#8377;</span
                    ><span
                        class="ml-1 text-4xl font-extrabold text-servcy-wheat"
                        >{{
                            !isInrSelected
                                ? plans[1].usdPrice
                                : plans[1].inrPrice
                        }}</span
                    ><span class="text-xl font-extrabold text-servcy-silver"
                        >/mo</span
                    >
                </div>
                <div class="mb-4 h-24">
                    <div class="flex h-20 w-full gap-x-2">
                        <a
                            href="https://web.servcy.com/login?plan=plus"
                            target="_blank"
                            class="servcy-wheat-shadow-right-bottom flex h-16 w-full items-center justify-center rounded-lg bg-servcy-black text-lg font-extrabold text-servcy-cream hover:text-servcy-wheat">
                            <Icon class="mr-2" size="24" name="mdi:flare" />
                            <span>Get Started</span>
                        </a>
                    </div>
                </div>
                <div
                    class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
                    Most Popular
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="differentiator in plans[1].differentiators"
                    :key="differentiator">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="text-servcy-cream">{{ differentiator }}</span>
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="offering in offerings"
                    :key="offering">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="truncate text-servcy-cream">{{
                        offering.text
                    }}</span>
                    <span
                        v-if="offering.comingSoon"
                        class="ml-2 text-[8px] text-servcy-wheat"
                        >(Coming Soon...)</span
                    >
                </div>
            </div>
            <div
                class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
                <div
                    class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                    <img
                        :src="plans[2].icon"
                        :alt="plans[2].name"
                        class="mr-4"
                        width="48"
                        height="48" />
                    <div>
                        {{ plans[2].name }}
                        <div class="text-sm text-servcy-white">
                            {{ plans[2].description }}
                        </div>
                    </div>
                </div>
                <div class="mb-6 h-16 border-b-2 border-neutral-500 pb-4">
                    <span
                        v-if="!isInrSelected"
                        class="text-4xl font-extrabold text-servcy-cream"
                        >$</span
                    >
                    <span
                        v-else
                        class="text-4xl font-extrabold text-servcy-cream"
                        >&#8377;</span
                    ><span
                        class="ml-1 text-4xl font-extrabold text-servcy-cream"
                        >{{
                            !isInrSelected
                                ? plans[2].usdPrice
                                : plans[2].inrPrice
                        }}</span
                    ><span class="text-xl font-extrabold text-servcy-silver"
                        >/mo</span
                    >
                </div>
                <div class="mb-4 h-24">
                    <div class="flex h-20 w-full gap-x-2">
                        <a
                            href="https://web.servcy.com/login?plan=business"
                            target="_blank"
                            class="servcy-wheat-shadow-right-bottom flex h-16 w-full items-center justify-center rounded-lg bg-servcy-cream text-lg font-extrabold text-servcy-black hover:text-servcy-green">
                            <Icon
                                class="mr-2"
                                size="24"
                                name="mdi:auto-awesome" />
                            <span>Get Started</span>
                        </a>
                    </div>
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="differentiator in plans[2].differentiators"
                    :key="differentiator">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="text-servcy-cream">{{ differentiator }}</span>
                </div>
                <div
                    class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
                    ~25% Off
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="offering in offerings"
                    :key="offering">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="truncate text-servcy-cream">{{
                        offering.text
                    }}</span>
                    <span
                        v-if="offering.comingSoon"
                        class="ml-2 text-[8px] text-servcy-wheat"
                        >(Coming Soon...)</span
                    >
                </div>
            </div>
            <div
                class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
                <div
                    class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                    <img
                        :src="plans[3].icon"
                        :alt="plans[3].name"
                        class="mr-4"
                        width="48"
                        height="48" />
                    <div>
                        {{ plans[3].name }}
                        <div class="text-sm text-servcy-white">
                            {{ plans[3].description }}
                        </div>
                    </div>
                </div>
                <div class="mb-6 h-16 border-b-2 border-neutral-500 pb-4">
                    <span
                        v-if="!isInrSelected"
                        class="text-4xl font-extrabold text-servcy-wheat"
                        >$</span
                    >
                    <span
                        v-else
                        class="text-4xl font-extrabold text-servcy-wheat"
                        >&#8377;</span
                    ><span
                        class="ml-1 text-4xl font-extrabold text-servcy-wheat"
                        >{{
                            !isInrSelected
                                ? plans[3].usdPrice
                                : plans[3].inrPrice
                        }}</span
                    ><span class="text-xl font-extrabold text-servcy-silver"
                        >/mo</span
                    >
                </div>
                <div class="mb-4 h-24">
                    <div class="flex h-20 w-full gap-x-2">
                        <a
                            href="mailto:contact@servcy.com"
                            target="_blank"
                            class="servcy-wheat-shadow-right-bottom flex h-16 w-full items-center justify-center rounded-lg bg-servcy-black text-lg font-extrabold text-servcy-cream hover:text-servcy-wheat">
                            <Icon class="mr-2" size="24" name="mdi:gmail" />
                            <span>Get A Quote</span>
                        </a>
                    </div>
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="differentiator in plans[3].differentiators"
                    :key="differentiator">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="text-servcy-cream">{{ differentiator }}</span>
                </div>
                <div
                    class="my-2 flex text-sm"
                    v-for="offering in offerings"
                    :key="offering">
                    <img src="@/assets/icons/new-releases.svg" class="mr-2" />
                    <span class="truncate text-servcy-cream">{{
                        offering.text
                    }}</span>
                    <span
                        v-if="offering.comingSoon"
                        class="ml-2 text-[8px] text-servcy-wheat"
                        >(Coming Soon...)</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const isInrSelected = ref(true)
const offerings = [
    { text: "Unlimited Projects" },
    { text: "Unlimited Issues" },
    { text: "SSO, & Role based access" },
    { text: "AI Assistance" },
    { text: "Integration with Notion, Figma, Gmail & more" },
    { text: "Custom Analytics" },
    { text: "Feature Requests" },
    { text: "DORA metrics", comingSoon: true },
    { text: "APIs, & Webhooks", comingSoon: true },
    { text: "Slack & Github bot", comingSoon: true }
]
const plans = [
    {
        name: "Starter",
        differentiators: ["Seats for upto 5 techies"],
        description: "Ideal for small teams to get started.",
        icon: "/shots/starter.svg",
        inrPrice: "0",
        usdPrice: "0"
    },
    {
        name: "Plus",
        description: "For startups that are making waves.",
        icon: "/shots/plus.svg",
        inrPrice: "6,499",
        usdPrice: "79",
        differentiators: ["Seats for upto 25 techies"]
    },
    {
        name: "Business",
        description: "For businesses that are growing.",
        icon: "/shots/business.svg",
        differentiators: ["Seats for upto 50 techies"],
        inrPrice: "9,999",
        usdPrice: "119"
    },
    {
        name: "Enterprise",
        description: "For enterprises that are scaling.",
        differentiators: ["Seats for more than 50 techies"],
        icon: "/shots/enterprise.svg",
        inrPrice: "19,999",
        usdPrice: "249"
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
    padding-left: 5%;
    padding-right: 5%;
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
