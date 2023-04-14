<template>
  <header
    :class="{
      'd-flex servcy-linear-bg flex-row py-3 justify-space-between': true,
      'large-header': $vuetify.breakpoint.mdAndUp,
      'small-header': !$vuetify.breakpoint.mdAndUp,
    }"
  >
    <div class="flex-column">
      <NuxtLink to="/" class="s-black"
        ><img src="@/static/logo.svg" alt="logo" class="logo"
      /></NuxtLink>
    </div>
    <div class="flex-column align-center align-self-center cols-3">
      <div v-if="!$vuetify.breakpoint.mdAndUp">
        <a
          target="_blank"
          class="s-small"
          href="https://calendly.com/servcy/demo?utm_source=website&utm_medium=header&utm_campaign=contact_us"
          ><v-btn x-small rounded outlined>contact Us</v-btn></a
        >
      </div>
      <div v-else>
        <a class="mr-8 s-bold" href="/#why-servcy">Why Servcy?</a>
        <a class="mr-8 s-bold" href="/#features">Features</a>
        <a
          target="_blank"
          class="mr-4 s-bold"
          href="https://calendly.com/servcy/demo?utm_source=website&utm_medium=header&utm_campaign=contact_us"
          >Contact Us</a
        >
        <NuxtLink to="/blogs">
          <v-btn class="mr-2 s-bold" rounded outlined
            ><span class="s-bold">Blogs</span></v-btn
          ></NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff !important;
}
a:hover {
  color: rgba(167, 226, 165, 1) !important;
}
header {
  padding-left: 5%;
  padding-right: 5%;
}
.logo {
  vertical-align: middle;
  height: 100%;
  width: 170px;
}
.large-header {
  height: 10vh;
}
.small-header {
  height: 8vh;
}
</style>
