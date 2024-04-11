<template>
    <section class="h-screen pb-[10vh] pt-[12vh]">
        <div class="flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
                Pricing<br />
                <span
                    class="font-axiforma text-2xl font-extrabold text-servcy-cream md:text-3xl"
                    >that works for you—today and tomorrow</span
                >
            </h1>
        </div>
        <div class="mt-16 grid grid-cols-3 gap-4">
            <div class="col-span-1">
                <div
                    class="servcy-transparent-bg h-full rounded-lg p-8 text-white">
                    <div
                        class="font-axiforma mb-6 text-xl font-extrabold text-servcy-wheat md:text-2xl">
                        All plans offer:
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
                    class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8"
                    v-for="plan in plans"
                    :key="plan.name">
                    <div
                        class="font-axiforma mb-6 flex items-center border-b-2 border-neutral-500 pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
                        <img
                            :src="plan.icon"
                            :alt="plan.name"
                            class="mr-2"
                            width="48"
                            height="48" />
                        <div>
                            {{ plan.name }}
                            <div class="text-sm text-servcy-white">
                                {{ plan.description }}
                            </div>
                        </div>
                    </div>
                    <div class="flex h-20 w-full gap-x-2">
                        <div
                            v-if="plan.price !== null"
                            class="font-axiforma my-2 flex w-1/3 flex-col items-center justify-center rounded-lg bg-servcy-cream text-center text-lg font-extrabold text-servcy-black">
                            <div>
                                {{ `${plan.price} USD` }}
                            </div>
                            <div class="servcy-caption opacity-40">
                                {{ `${plan.price / plan.maxSeats} USD/user` }}
                            </div>
                        </div>
                        <div
                            v-else
                            class="font-axiforma my-2 flex w-full items-center justify-center rounded-lg bg-servcy-cream text-center text-lg font-extrabold text-servcy-black">
                            <a
                                href="mailto:contact@servcy.com"
                                class="flex h-full w-full items-center justify-center !text-servcy-black">
                                Contact Us
                            </a>
                        </div>
                        <div
                            v-if="plan.price !== null"
                            :class="{
                                'font-axiforma my-2 flex w-2/3 items-center justify-center rounded-lg border-servcy-wheat text-center text-lg font-extrabold': true,
                                'bg-servcy-cream': plan.name === 'Plus',
                                'bg-servcy-black': plan.name !== 'Plus'
                            }">
                            <a
                                href="mailto:contact@servcy.com"
                                :class="{
                                    'flex h-full w-full items-center justify-center font-bold': true,
                                    '!text-servcy-black hover:!text-servcy-green':
                                        plan.name === 'Plus',
                                    '!text-servcy-cream hover:!text-servcy-wheat':
                                        plan.name !== 'Plus'
                                }">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <a
                        href="https://web.servcy.com/login"
                        class="ml-auto flex w-full justify-end text-xs !text-servcy-wheat underline hover:!text-servcy-silver">
                        or start with a trial
                    </a>
                    <div
                        v-if="plan.ribbon"
                        class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
                        {{ plan.ribbon }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const offerings = [
    { text: "Unlimited Projects, and Issues" },
    { text: "SSO, and Role based access" },
    { text: "AI assistance" },
    { text: "10+ Integrations" },
    { text: "Custom analytics" },
    { text: "Priority support" },
    { text: "Feature Requests", disclaimer: "(Subject to voting)" },
    { text: "APIs, Webhooks", comingSoon: true },
    { text: "Time tracking", comingSoon: true },
    { text: "Project budgeting", comingSoon: true },
    { text: "DORA metrics", comingSoon: true }
]
const plans = [
    {
        name: "Starter",
        description: "For a team of upto 10 techies",
        icon: "/shots/starter.svg",
        maxSeats: 10,
        price: "49"
    },
    {
        name: "Plus",
        description: "For a team of upto 25 techies",
        icon: "/shots/plus.svg",
        price: "99",
        ribbon: "Most Popular",
        maxSeats: 25
    },
    {
        name: "Business",
        description: "For a team of upto 50 techies",
        icon: "/shots/business.svg",
        maxSeats: 50,
        price: "179",
        ribbon: "~27% Off"
    },
    {
        name: "Enterprise",
        description: "For a team of more than 50 techies",
        icon: "/shots/enterprise.svg",
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
