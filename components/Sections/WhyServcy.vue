<template>
  <section id="why-servcy">
    <div class="wave-block text-center">
      <div class="servcy-sub-headline-font s-bold font-castoro pt-10 pb-6">
        Why Choose Servcy?
      </div>
      <div class="s-subheading why-servcy-desc s-semibold font-castoro pb-6">
        Servcy simplifies freelance agency management by streamlining
        scheduling, consolidating tools, and enhancing client communication.
      </div>
      <div class="d-flex flex-row align-center justify-center">
        <img
          src="@/assets/icons/servcy-universe.svg"
          alt="servcy universe"
          width="80%"
          height="80%"
        />
      </div>
    </div>
    <div class="d-flex flex-wrap align-center justify-center">
      <v-sheet
        color="white"
        elevation="2"
        :height="$vuetify.breakpoint.smAndDown ? '' : '400px'"
        width="350px"
        rounded="xl"
        class="pa-6 card-bounce ma-4 text-center"
      >
        <img
          src="@/assets/icons/calendly-logo.svg"
          alt="gear"
          class="mx-auto d-block align-items-center"
          width="100px"
        />
        <div class="dark--text s-title s-bold mt-3">Streamlined Scheduling</div>
        <ul class="dark--text mt-6 s-body text-left">
          <li>Set your availability with ease</li>
          <li>Share your link for convenient client booking</li>
          <li>Increase your chances of winning business by 40%</li>
        </ul>
      </v-sheet>
      <v-sheet
        color="white"
        elevation="2"
        :height="$vuetify.breakpoint.smAndDown ? '' : '400px'"
        width="350px"
        rounded="xl"
        class="pa-6 ma-4 card-bounce text-center"
      >
        <img
          src="@/assets/icons/client-face.svg"
          alt="gear"
          class="mx-auto d-block align-items-center"
          width="100px"
        />
        <div class="dark--text s-title s-bold mt-3">
          Enhanced Client Communication
        </div>
        <ul class="dark--text mt-6 s-body text-left">
          <li>Instant, intuitive Client Dashboard for work progress updates</li>
          <li>Reduce unnecessary communication and increase satisfaction</li>
          <li>No more manual updates or pestering emails</li>
        </ul>
      </v-sheet>
      <v-sheet
        color="white"
        elevation="2"
        :height="$vuetify.breakpoint.smAndDown ? '' : '400px'"
        width="350px"
        rounded="xl"
        class="pa-6 ma-4 card-bounce text-center"
      >
        <img
          src="@/assets/icons/gear.svg"
          alt="gear"
          class="mx-auto d-block align-items-center"
          width="100px"
        />
        <div class="dark--text s-title s-bold mt-3">
          Unified Tools and Platform
        </div>
        <ul class="dark--text mt-6 s-body text-left">
          <li>Consolidate your software stack with one login</li>
          <li>Manage finances, tasks, and projects effortlessly</li>
          <li>Take your business to the next level with a single platform</li>
        </ul>
      </v-sheet>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyServcy",
};
</script>

<style scoped>
#why-servcy {
  margin-bottom: 50px;
}
.why-servcy-desc {
  padding-left: 10%;
  padding-right: 10%;
  letter-spacing: 0.08em !important;
}
.why-servcy-padding-x {
  padding-left: 5%;
  padding-right: 5%;
}
.wave-block {
  margin-bottom: 50px;
  background-image: url("@/assets/icons/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-bounce {
  transition: 0.6s cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
.card-bounce:hover,
.card-bounce:focus,
.card-bounce:active {
  transform: scale(1.1);
}
@media screen and (max-width: 768px) {
  .wave-block {
    background-color: #26542f;
    padding-bottom: 30px;
  }
}
</style>
