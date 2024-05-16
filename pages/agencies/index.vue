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
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <span v-for="agency in agencies" :key="agency.id">
                {{ agency.name }}
            </span>
        </div>
    </section>
</template>

<script setup>
const agencies = ref([])
onMounted(() => {
    fetch("/api/agencies")
        .then((res) => res.json())
        .then((data) => {
            agencies.value = data
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
