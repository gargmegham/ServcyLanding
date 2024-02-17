<template>
  <div class="servcy-container">
    <Hero />
    <UnifiedInbox />
    <CentralTaskHub />
    <CentralDocumentHub />
    <CentralPaymentHub />
    <CentralTimeHub />
    <MergedCalendarView />
    <FinalCTA />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
import UnifiedInbox from "@/components/Sections/UnifiedInbox.vue";
import CentralTaskHub from "@/components/Sections/CentralTaskHub.vue";
import CentralDocumentHub from "@/components/Sections/CentralDocumentHub.vue";
import CentralPaymentHub from "@/components/Sections/CentralPaymentHub.vue";
import CentralTimeHub from "@/components/Sections/CentralTimeHub.vue";
import MergedCalendarView from "@/components/Sections/MergedCalendarView.vue";
import FinalCTA from "@/components/Sections/FinalCTA.vue";

export default {
  name: "Home",
  components: {
    Hero,
    FinalCTA,
    UnifiedInbox,
    CentralPaymentHub,
    CentralTimeHub,
    MergedCalendarView,
    CentralTaskHub,
    CentralDocumentHub,
  },
};
</script>

<style scoped>
.servcy-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.servcy-container>* {
  scroll-snap-align: start;
  height: 100vh;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #032123;
  ;
}
</style>