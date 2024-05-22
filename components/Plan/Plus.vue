<template>
    <div class="servcy-transparent-bg col-span-1 rounded-lg p-8">
        <div
            class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
            <img
                src="/shots/plus.svg"
                alt="Plus"
                class="mr-4"
                width="48"
                height="48" />
            <div>
                {{ plan.name }}
                <div class="text-sm text-servcy-white">
                    {{ plan.description }}
                </div>
            </div>
        </div>
        <div class="mb-6 h-16 border-b-2 border-neutral-500 pb-4">
            <span class="text-4xl font-extrabold text-servcy-wheat">$</span>
            <span class="ml-1 text-4xl font-extrabold text-servcy-wheat">{{
                plan.usdPrice
            }}</span
            ><span class="text-xl font-extrabold text-servcy-silver">/mo</span>
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
        <div class="my-2 flex text-sm">
            <Icon
                class="mr-2 size-4"
                name="material-symbols:health-and-safety-rounded" />
            <span class="text-servcy-cream">Everything in Starter</span>
        </div>
        <div
            class="my-2 flex text-sm"
            v-for="offering in offerings"
            :key="offering">
            <img src="@/assets/icons/new-releases.svg" class="mr-2 size-4" />
            <span class="text-servcy-cream">{{ offering }}</span>
        </div>
    </div>
</template>

<script setup>
const offerings = [
    "Unlimited Projects",
    "Unlimited Cycles",
    "Unlimited Modules",
    "Collaborative Docs",
    "Native Time Tracking",
    "Timesheet",
    "Gantt, Spreadsheet & Calendar Layout",
    "Project Cost Analysis",
    "Unlimited Automations",
    "Inbox to Issue Conversion",
    "Fine-tune your Permissions",
    "Custom Analytics",
    "Custom Views",
    "Unlimited Storage",
    "Private Projects"
]
const plan = {
    name: "Plus",
    description: "For startups that are making waves.",
    usdPrice: "99"
}
</script>
