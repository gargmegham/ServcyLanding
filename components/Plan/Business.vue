<template>
    <div class="servcy-transparent-bg relative col-span-1 rounded-lg p-8">
        <div
            class="font-axiforma mb-6 flex h-20 items-center pb-4 text-lg font-extrabold text-servcy-wheat md:text-xl">
            <img
                src="/shots/business.svg"
                alt="business"
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
                $ {{ plan.usdPrice + 50 }}
            </div>
            <div
                class="font-bricolage ml-1 text-6xl font-extrabold text-servcy-wheat">
                $ {{ plan.usdPrice }}
            </div>
            <div class="text-xl font-extrabold text-servcy-wheat">/mo</div>
        </div>
        <div
            class="servcy-most-popular font-axiforma absolute right-[-10px] top-[-10px] text-servcy-cream">
            Most Popular
        </div>
        <div class="mb-4 h-24">
            <div class="flex h-20 w-full gap-x-2">
                <button
                    @click="checkout"
                    class="servcy-wheat-shadow-right-bottom flex h-16 w-full items-center justify-center rounded-lg bg-servcy-cream text-lg font-extrabold text-servcy-black hover:text-servcy-green">
                    <Icon class="mr-2" size="24" name="mdi:auto-awesome" />
                    <span>Get Started</span>
                </button>
            </div>
        </div>
        <div class="my-2 flex text-sm text-servcy-cream">
            <Icon
                class="mr-2 size-4"
                name="material-symbols:health-and-safety-rounded" />
            <span>Everything in Plus</span>
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
const config = useRuntimeConfig()
const offerings = [
    "Invite Upto 25 Users",
    "Analytics Export",
    "Deploy Boards",
    "AI Assistance",
    "Unlimited Storage",
    "Cost Estimation Export"
]
const plan = {
    name: "Business",
    description: "For businesses that are growing.",
    usdPrice: 99
}
function checkout() {
    Paddle.Checkout.open({
        items: [
            {
                priceId: config.public.businessPriceId,
                quantity: 1
            }
        ]
    })
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
