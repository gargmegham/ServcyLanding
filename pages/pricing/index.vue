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
    </section>
</template>

<script setup>
const isInrSelected = ref(false)
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
.servcy-caption {
    font-size: 10px;
    line-height: 12px;
}
</style>
