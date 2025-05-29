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
    </section>
</template>

<style scoped>
.servcy-caption {
    font-size: 10px;
    line-height: 12px;
}
</style>
