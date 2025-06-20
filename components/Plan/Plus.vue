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
        <div
            class="mb-6 flex items-baseline border-b-2 border-neutral-500 pb-4">
            <div
                class="font-bricolage ml-1 mr-2 text-2xl font-extrabold text-gray-400 line-through">
                ${{ plan.usdPrice + 50 }}
            </div>
            <div
                class="font-bricolage ml-1 text-6xl font-extrabold text-servcy-wheat">
                ${{ plan.usdPrice }}
            </div>
            <div class="text-xl font-extrabold text-servcy-wheat">/mo</div>
        </div>
        <div class="mb-4 h-24">
            <div class="flex h-20 w-full gap-x-2">
                <button
                    @click="checkout"
                    class="servcy-wheat-shadow-right-bottom flex h-16 w-full items-center justify-center rounded-lg bg-servcy-black text-lg font-extrabold text-servcy-cream hover:text-servcy-wheat">
                    <Icon class="mr-2" size="24" name="mdi:flare" />
                    <span>Get Started</span>
                </button>
            </div>
        </div>
        <div
            class="my-2 flex text-sm"
            v-for="offering in offerings"
            :key="offering">
            <img
                src="@/assets/icons/new-releases.svg"
                class="mr-2 size-4"
                alt="new-releases" />
            <span class="text-servcy-cream">{{ offering }}</span>
        </div>
    </div>
</template>

<script setup>
const offerings = [
    "Invite Upto 10 Users",
    "Unlimited Projects",
    "Collaborative Docs",
    "Unlimited Automations",
    "Custom Role Permissions",
    "Custom Analytics",
    "Private Projects"
]
const plan = {
    name: "Plus",
    description: "For startups that are making waves.",
    usdPrice: 49
}
function checkout() {
    window.open(`mailto:support@launchbit.in`, "_blank")
}
</script>
