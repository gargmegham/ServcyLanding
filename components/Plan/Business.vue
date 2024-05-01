<template>
    <div
        class="servcy-transparent-bg relative col-span-1 row-span-1 rounded-lg p-8">
        <div
            class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
            <img
                src="/shots/business.svg"
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
            <span
                v-if="!isInrSelected"
                class="text-4xl font-extrabold text-servcy-wheat"
                >$</span
            >
            <span v-else class="text-4xl font-extrabold text-servcy-wheat"
                >&#8377;</span
            ><span class="ml-1 text-4xl font-extrabold text-servcy-wheat">{{
                !isInrSelected ? plan.usdPrice : plan.inrPrice
            }}</span
            ><span class="text-xl font-extrabold text-servcy-silver">/mo</span>
        </div>
        <div
            class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
            Most Popular
        </div>
        <div class="mb-4 h-24">
            <div class="flex h-20 w-full gap-x-2">
                <a
                    href="https://web.servcy.com/login?plan=business"
                    target="_blank"
                    class="servcy-wheat-shadow-right-bottom flex h-16 w-full items-center justify-center rounded-lg bg-servcy-cream text-lg font-extrabold text-servcy-black hover:text-servcy-green">
                    <Icon class="mr-2" size="24" name="mdi:auto-awesome" />
                    <span>Get Started</span>
                </a>
            </div>
        </div>
        <div class="my-2 flex text-sm">
            <Icon
                class="mr-2 size-4"
                name="material-symbols:health-and-safety-rounded" />
            <span class="text-servcy-cream">Everythin in Plus</span>
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
const props = defineProps(["isInrSelected"])
const offerings = [
    "Invite Upto 25 Users",
    "Everything New",
    "Custom Analytics Export",
    "Project Deploy Boards",
    "AI Assistance",
    "Advanced Time Tracking",
    "Project Cost Estimation Export",
    "Feature Requests",
    "Priority Support"
]
const plan = {
    name: "Business",
    description: "For businesses that are growing.",
    usdPrice: "149",
    inrPrice: "11,999"
}
</script>

<style scoped>
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
</style>
