<template>
  <section id="why-servcy">
    <div class="wave-block text-center">
      <div class="servcy-sub-headline-font s-bold font-castoro pt-10 pb-6">
        Why Servcy, you ask?
      </div>
      <div class="s-heading why-servcy-padding-x s-semibold font-castoro pb-6">
        Because we understand the true challenges faced while onboarding
        clients, sending invoices, communication, project management and more.
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
  </section>
</template>

<script>
export default {
  name: "WhyServcy",
};
</script>

<style scoped>
.why-servcy-padding-x {
  padding-left: 5%;
  padding-right: 5%;
}
.wave-block {
  margin-bottom: 50px;
  background-image: url("@/assets/icons/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -10%;
}
</style>
