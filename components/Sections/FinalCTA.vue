<template>
  <section
    id="final-cta"
    class="py-[10vh] flex flex-col text-center justify-center"
  >
    <div>
      <div class="font-axiforma font-extrabold md:text-6xl text-5xl">
        Try Servcy now for a
        <br /><span class="servcy-text-bg md:text-7xl text-6xl"
          >10x productivity boost</span
        >
      </div>
      <div class="font-semibold text-servcy-wheat md:text-xl text-lg mt-6">
        All your Servcy features are just one voice command away with our
        AI-powered virtual assistant.
      </div>
    </div>
    <div class="mt-20">
      <button
        class="bg-servcy-black servcy-wheat-shadow-left-bottom rounded p-3"
      >
        <a
          href="https://web.servcy.com"
          target="_blank"
          class="font-semibold !text-servcy-cream hover:!text-servcy-wheat md:text-xl text-lg"
        >
          Start free trial
        </a>
      </button>
      <div class="text-xs mt-3 text-servcy-cream">No credit card required</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FinalCTA",
};
</script>
