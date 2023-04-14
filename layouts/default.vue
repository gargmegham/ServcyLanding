<template>
  <v-app id="Home">
    <Header />
    <v-main class="servcy-linear-bg-light">
      <Nuxt />
    </v-main>
    <snack-bar />
    <TheFooter />
  </v-app>
</template>

<script>
import Header from "@/layouts/Header.vue";
import TheFooter from "@/layouts/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    TheFooter,
  },
};
</script>
