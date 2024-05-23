<template>
    <section class="min-h-screen py-[10vh]">
        <div class="relative mb-10 flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                Growth Pricing
            </h1>
            <h3 class="mt-4 text-xl font-extrabold text-servcy-wheat">
                We offer a <span class="servcy-text-bg">100% refund</span> if
                you're not satisfied with our service.<br />
                All you've got to do is send us an email.
            </h3>
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <PlanStarter />
            <PlanPlus />
            <PlanBusiness />
            <PlanEnterprise />
        </div>
        <FinalCTA />
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
                        We've received your payment and you will receive an
                        email with your receipt shortly.
                    </p>
                    <p class="mt-4">
                        You can now login on the platform using the same email
                        you used during checkout.<br />
                        Your purchase status will reflect on your workspace
                        dashboard in 24 hours.<br />
                        If you have any questions or concerns, please don't
                        hesitate to reach out to us at
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
                                href="https://web.servcy.com/login"
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
onMounted(() => {
    Paddle.Initialize({
        token: config.public.paddleClientToken,
        eventCallback: function (data) {
            if (data.name == "checkout.completed") {
                checkoutCompleted.value = true
                setTimeout(() => {
                    checkoutCompleted.value = false
                }, 5000)
            }
        }
    })
})
</script>

<style scoped>
section {
    padding-left: 5%;
    padding-right: 5%;
    background-color: #032123;
}
.servcy-caption {
    font-size: 10px;
    line-height: 12px;
}
</style>
