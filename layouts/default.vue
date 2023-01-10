<template>
  <v-app id="Home">
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style>
@import url("@/assets/css/global.css");
@import url("@/assets/css/height.css");
@import url("@/assets/css/typography.css");
@import url("@/assets/css/backgrounds.css");
@import url("@/assets/css/spacing.css");
</style>
