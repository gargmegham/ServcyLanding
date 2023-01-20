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
        ><img src="@/static/logo.svg" alt="logo" width="80px" class="logo"
      /></NuxtLink>
    </div>
    <div class="flex-column align-center align-self-center">
      <div v-if="!$vuetify.breakpoint.mdAndUp">
        <NuxtLink class="mr-4 s-small" to="/#why-servcy">Why Servcy?</NuxtLink>
        <NuxtLink class="mr-4 s-small" to="/#features">Features</NuxtLink>
        <a target="_blank" class="mr-4 s-small" href="mailto:megham@servcy.com"
          ><v-btn x-small rounded outlined>contact Us</v-btn></a
        >
        <NuxtLink to="/blogs">
          <v-btn class="s-small" x-small rounded outlined>
            Blogs
          </v-btn></NuxtLink
        >
        <!-- <v-btn small class="mr-2" outlined>
          <a target="_blank" href="https://app.sevcy.com/login">login</a>
        </v-btn>
        <v-btn small color="#26542F">
          <img src="@/assets/icons/server.svg" width="30" height="30" />
          <a target="_blank" href="https://app.sevcy.com/signup">signup</a>
        </v-btn> -->
      </div>
      <div v-else>
        <a class="mr-8" href="/#why-servcy">Why Servcy?</a>
        <a class="mr-8" href="/#features">Features</a>
        <a class="mr-8" href="/#features">Features</a>
        <a target="_blank" class="mr-4 s-small" href="mailto:megham@servcy.com"
          ><v-btn outlined>contact Us</v-btn></a
        >
        <NuxtLink to="/blogs">
          <v-btn class="mr-2" outlined> Blogs </v-btn></NuxtLink
        >
        <!-- <a class="mr-8" href="#">Pricing</a>
        <v-btn class="mr-2" outlined>
          <a target="_blank" href="#">login</a>
        </v-btn>
        <v-btn color="#26542F">
          <img
            src="@/assets/icons/server.svg"
            alt="signup-icon"
            width="35"
            height="35"
          />
          <a target="_blank" href="#">signup</a>
        </v-btn> -->
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
}
.large-header {
  height: 10vh;
}
.small-header {
  height: 8vh;
}
</style>
