<template>
    <div
        class="servcy-transparent-bg relative col-span-1 hidden rounded-lg p-8 lg:block">
        <div
            class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
            <img
                :src="plan.icon"
                :alt="plan.name"
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
        <div
            class="mb-6 flex h-20 items-center border-b-2 border-neutral-500 pb-4 text-sm text-stone-400">
            Get a custom demo and see how Servcy aligns with your goals.
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
        <div class="my-2 flex text-sm text-servcy-cream">
            <Icon
                class="mr-2 size-4"
                name="material-symbols:health-and-safety-rounded" />
            <span>Everythin in Business</span>
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
    "Invite Unlimited Users",
    "High speed backend server",
    "MSA, & HIPAA Compliance",
    "SLA & Uptime Guarantee",
    "Dedicated Relationship Manager",
    "US, EU, APAC Data Residency"
]
const plan = {
    name: "Enterprise",
    description: "For enterprises that are scaling.",
    icon: "/shots/enterprise.svg"
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
