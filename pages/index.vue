<template>
    <div class="servcy-container">
        <Hero />
        <Testimonials />
        <Transformation />
        <Features />
        <Pricing />
        <FinalCTA />
    </div>
</template>

<style scoped>
.servcy-container > * {
    padding-left: 5%;
    padding-right: 5%;
    background-color: #032123;
    @media screen and (max-width: 768px) {
        padding-left: 10%;
        padding-right: 10%;
    }
}
</style>
