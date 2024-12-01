<template>
    <section id="pricing" class="pt-[4vh] lg:pt-[10vh]">
        <div class="relative mb-8 flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-xl font-extrabold text-servcy-wheat md:text-2xl">
                Pricing
            </h1>
            <h2
                class="mt-4 text-xl font-extrabold text-servcy-cream md:text-2xl lg:text-3xl">
                Increase your profits by estimating better, and tracking
                accurately!
            </h2>
            <h3
                class="mt-2 text-sm font-extrabold text-servcy-cream md:text-lg">
                <Icon
                    name="material-symbols:featured-seasonal-and-gifts-rounded"
                    class="text-green-500" /><span class="mx-1 text-green-500"
                    >$50 off</span
                >
                for the first 150 customers (9 left)
            </h3>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <PlanPlus v-motion-slide-visible-once-left />
            <PlanBusiness v-motion-pop-visible-once />
            <PlanEnterprise v-motion-slide-visible-once-right />
        </div>
        <UModal v-model="checkoutCompleted">
            <UCard
                :ui="{
                    ring: '',
                    background: '!bg-servcy-black'
                }">
                <template #header>
                    <div>🎊 Payment Successful</div>
                </template>
                <div class="text-servcy-cream">
                    <p>
                        We've received your payment, you will receive your
                        receipt shortly.
                    </p>
                    <p class="mt-4">
                        You can now login using the email you used during
                        checkout.<br />
                        Your subscription will reflect on your dashboard in 24
                        hours.
                    </p>
                    <p class="mt-4">
                        If you have any questions or concerns, email us at
                        <a
                            href="mailto:contact@servcy.com"
                            class="text-servcy-wheat !outline-none !ring-0"
                            >contact@servcy.com</a
                        >
                    </p>
                </div>
                <template #footer>
                    <div class="flex justify-end">
                        <button
                            class="rounded bg-servcy-wheat p-2"
                            style="border-style: solid">
                            <a
                                href="mailto:contact@servcy.com"
                                target="_blank"
                                class="font-bold !text-servcy-green hover:!text-servcy-black"
                                >Register</a
                            >
                        </button>
                    </div>
                </template>
            </UCard>
        </UModal>
    </section>
</template>

<script setup>
const config = useRuntimeConfig()
const checkoutCompleted = ref(false)
onMounted(() => {
    Paddle.Initialize({
        token: config.public.paddleClientToken,
        eventCallback: function (data) {
            if (data.name == "checkout.completed") {
                checkoutCompleted.value = true
                gtag("event", "conversion_event_purchase", {
                    currency: data?.currency_code,
                    value: data?.items?.[0]?.price_id,
                    transaction_id: data?.transaction_id
                })
                setTimeout(() => {
                    checkoutCompleted.value = false
                }, 5000)
            }
        }
    })
})
</script>

<style scoped>
.servcy-caption {
    font-size: 10px;
    line-height: 12px;
}
</style>
