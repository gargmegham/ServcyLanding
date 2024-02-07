<template>
  <section id="aggregated-inbox" class="py-[4vh] servcy-wave-block text-center">
    <div class="md:text-7xl text-5xl py-16 font-axiforma font-extrabold">
      Magic starts with <br />an aggregated inbox
    </div>
    <div class="md:text-xl text-lg font-semibold text-servcy-wheat pb-16">
      You can stop wasting time juggling between multiple apps to organize your work. <br />Easily import all your
      messages, notifications & comments from your favorite tools into a single Inbox.
    </div>
    <div class="flex flex-row align-center justify-center">
      <iframe class="mx-auto rounded-xl" width="80%" :height="$vuetify.breakpoint.smAndDown ? '300px' : '700px'"
        src="https://www.youtube.com/embed/Hr3Ml2MEotw?autoplay=1&controls=0&showinfo=0&loop=1&mute=1&playlist=Hr3Ml2MEotw"
        title="Aggregated Inbox" frameborder="0" allow="autoplay; encrypted-media" :allowfullscreen="false"
        loading="lazy" />
    </div>
  </section>
</template>

<script>
export default {
  name: "AggregatedInbox",
};
</script>