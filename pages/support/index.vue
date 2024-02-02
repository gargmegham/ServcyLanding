<template>
  <section id="support-page" class="d-flex flex-row justify-center flex-wrap">
    <div class="flex-column ma-4" v-if="!$vuetify.breakpoint.smAndDown">
      <img
        src="@/assets/icons/super-thank-you.svg"
        alt="support image"
        height="400px"
      />
    </div>
    <v-sheet
      class="pa-6 flex-column ma-4 dark--text font-castoro"
      height="350px"
      min-width="350px"
      max-width="500px"
      rounded="xl"
      elevation="2"
      color="white"
    >
      <div class="pb-10 s-bold s-heading d-flex flex-row">
        <v-btn class="mr-2" fab outlined color="#07796A">
          <v-icon>mdi-help</v-icon></v-btn
        >
        <div>For Support and Queries, please contact us at:</div>
      </div>
      <div class="s-semibold s-subheading">
        <ul>
          <li class="mb-2">
            Email:
            <strong>
              <a href="mailto:contact@servcy.com" target="_blank"
                >contact@servcy.com</a
              >
            </strong>
          </li>
          <li class="mb-2">
            Phone:
            <strong>
              <a href="tel:+1234567890" target="_blank">+919805085026</a>
            </strong>
          </li>
          <li>
            Address:
            <strong>
              <a
                href="https://maps.app.goo.gl/N1ZmupNrhTNRRgn96"
                target="_blank"
                >Jai City, Gulab Nagar, Jagadhri, Haryana 135003</a
              >
            </strong>
          </li>
        </ul>
      </div>
    </v-sheet>
  </section>
</template>

<script>
export default {
  name: "Support",
};
</script>

<style scoped>
section {
  padding: 50px 5%;
}

img {
  max-width: 550px;
  min-width: 350px;
}
</style>
