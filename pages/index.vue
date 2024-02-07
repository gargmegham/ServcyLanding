<template>
  <div>
    <Hero />
    <AggregatedInbox />
    <WhyServcy class="max-sm:hidden" />
    <Features />
    <Pricing />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero/index.vue";
import WhyServcy from "@/components/Sections/WhyServcy.vue";
import AggregatedInbox from "@/components/Sections/AggregatedInbox.vue";
import Features from "@/components/Sections/Features.vue";
import Pricing from "@/components/Sections/Pricing.vue";

export default {
  name: "Home",
  components: {
    Hero,
    WhyServcy,
    Features,
    AggregatedInbox,
    Pricing,
  },
};
</script>
