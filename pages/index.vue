<template>
  <div>
    <Hero class="px-[5%]" />
    <AggregatedInbox class="px-[5%]" />
    <WhyServcy class="px-[5%]" />
    <Features class="px-[5%]" />
    <Pricing class="px-[5%]" />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
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
