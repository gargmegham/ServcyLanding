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
        <a
            href="https://github.com/orgs/Servcy/repositories"
            class="fixed bottom-4 right-4 !m-0 rounded-xl border border-neutral-200 !bg-black !px-2 !py-1 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
            <span>We're Open Source</span>
            <Icon name="mdi:github" class="ml-2 h-6 w-6" />
            <span
                class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </a>
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
