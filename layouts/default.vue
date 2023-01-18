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
export default {
  name: "DefaultLayout",
};
</script>
