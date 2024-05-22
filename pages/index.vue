<template>
    <div class="servcy-container">
        <Hero />
        <Budgeting />
        <Timesheet />
        <!-- <AggregatedInbox />
        <Dashboard /> -->
        <CyclesAndModules />
        <Benefits />
        <FinalCTA />
        <a
            href="https://github.com/orgs/Servcy/repositories"
            class="fixed bottom-4 right-4 !m-0 rounded-xl border border-neutral-200 !bg-black !px-2 !py-1 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
            <span>We're Open Source</span>
            <Icon name="mdi:github" class="ml-2 h-6 w-6" />
            <span
                class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </a>
    </div>
</template>

<style scoped>
.servcy-container > * {
    padding-left: 5%;
    padding-right: 5%;
    background-color: #032123;
}
</style>
