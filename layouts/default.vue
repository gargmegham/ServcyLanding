<template>
  <v-app id="Home">
    <Header />
    <v-main class="servcy-linear-bg-light">
      <Nuxt />
    </v-main>
    <snack-bar />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
