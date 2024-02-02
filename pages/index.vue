<template>
  <div>
    <Hero />
    <WhyServcy />
    <Features />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero/index.vue";
import WhyServcy from "@/components/Sections/WhyServcy.vue";
import Features from "@/components/Sections/Features.vue";

export default {
  name: "Home",
  components: {
    Hero,
    WhyServcy,
    Features,
  },
};
</script>
