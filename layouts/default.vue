<template>
  <v-app id="Home">
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <TheFooter />
    <snack-bar />
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
