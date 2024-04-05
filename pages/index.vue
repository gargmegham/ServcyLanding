<template>
  <div class="servcy-container">
    <Hero />
    <Dashboard />
    <Benefits />
    <UnifiedInbox />
    <CyclesAndModules />
    <FinalCTA />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
import UnifiedInbox from "@/components/Sections/UnifiedInbox.vue";
import Benefits from "@/components/Sections/Benefits.vue";
import Dashboard from "@/components/Sections/Dashboard.vue";
import FinalCTA from "@/components/Sections/FinalCTA.vue";
import CyclesAndModules from "@/components/Sections/CyclesAndModules.vue";

export default {
  name: "Home",
  components: {
    Hero,
    FinalCTA,
    Dashboard,
    CyclesAndModules,
    UnifiedInbox,
    Benefits,
  },
};
</script>

<style scoped>
.servcy-container > * {
  padding-left: 5%;
  padding-right: 5%;
  background-color: #032123;
}
</style>
