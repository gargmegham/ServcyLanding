<template>
  <v-app id="Home">
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <snack-bar />
  </v-app>
</template>

<script>
// import Snackbar from "~/components/Snackbar.vue";

export default {
  name: "DefaultLayout",
  // components: {
  //   Snackbar,
  // },
};
</script>

<style>
@import url("@/assets/css/global.css");
@import url("@/assets/css/height.css");
@import url("@/assets/css/typography.css");
@import url("@/assets/css/backgrounds.css");
@import url("@/assets/css/spacing.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins");
@import url("https://fonts.googleapis.com/css2?family=Castoro");
@import url("https://fonts.googleapis.com/css2?family=Sofia");
</style>
