<template>
  <div class="px-[5%] mt-[8vh] servcy-wave-block min-h-screen text-center flex flex-col pb-32">
    <div class="flex-row align-self-center justify-center">
      <div class="md:text-8xl pt-10 pb-5 min-h-32 font-axiforma font-extrabold text-6xl max-sm:text-5xl">
        One app to<br /> manage them all
      </div>
      <div class="text-xl font-semibold text-servcy-wheat py-5">
        Consolidate all your tools in one place.<br />A single platform designed to manage any your work day.
      </div>
      <div>
        <button class="bg-servcy-black rounded p-3 mt-5 servcy-wheat-shadow-left-bottom">
          <a href="https://web.servcy.com" target="_blank"
            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat text-2xl">
            Get Started
          </a>
        </button>
      </div>
      <div class="text-xs mt-3 text-servcy-cream">No credit card required</div>
    </div>
    <div class="flex-row mt-auto">
      <IntegrationIcons />
    </div>
  </div>
</template>

<script>
import IntegrationIcons from "@/components/Sections/Hero/IntegrationIcons.vue";

export default {
  name: "Hero",
  components: {
    IntegrationIcons,
  },
};
</script>
