<template>
  <v-app id="Home">
    <Header />
    <v-main>
      <Nuxt class="servcy-linear-bg-light servcy-body" />
    </v-main>
    <snack-bar />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
