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
export default {
  name: "DefaultLayout",
};
</script>
