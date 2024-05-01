<template>
    <section class="min-h-screen py-[10vh]">
        <div class="relative mb-10 flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                Growth Pricing
            </h1>
            <h3
                class="mt-4 text-xl font-extrabold text-servcy-wheat md:text-2xl">
                Save upto
                <span class="servcy-text-bg">80%</span> in your SaaS spending by
                switching to Servcy ecosystem.<br />Our ecosystem is designed to
                help you grow without breaking the bank.
            </h3>
            <div class="absolute right-0 flex items-center justify-end">
                <Icon
                    size="40"
                    name="heroicons:currency-dollar"
                    color="primary" />
                <UToggle
                    v-model="isInrSelected"
                    color="emerald"
                    size="xl"
                    class="mx-4" />
                <Icon
                    size="40"
                    name="heroicons:currency-rupee"
                    color="primary" />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <PlanStarter :isInrSelected="isInrSelected" />
            <PlanPlus :isInrSelected="isInrSelected" />
            <PlanBusiness :isInrSelected="isInrSelected" />
            <PlanEnterprise />
        </div>
    </section>
</template>

<script setup>
const isInrSelected = ref(false)
useHead({
    title: "Growth Pricing",
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
