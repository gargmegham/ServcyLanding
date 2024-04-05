<template>
  <div class="servcy-container">
    <Hero />
    <Dashboard />
    <UnifiedInbox />
    <FinalCTA />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
import UnifiedInbox from "@/components/Sections/UnifiedInbox.vue";
import Dashboard from "@/components/Sections/Dashboard.vue";
import FinalCTA from "@/components/Sections/FinalCTA.vue";

export default {
  name: "Home",
  components: {
    Hero,
    FinalCTA,
    Dashboard,
    UnifiedInbox,
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
