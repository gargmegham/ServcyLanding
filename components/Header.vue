<template>
  <header
    :class="{
      'd-flex flex-row justify-space-between': true,
      'large-header': $vuetify.breakpoint.mdAndUp,
      'small-header': !$vuetify.breakpoint.mdAndUp,
    }"
  >
    <div class="flex-column">
      <img src="@/static/logo.svg" width="80px" class="logo" />
    </div>
    <div
      v-if="!$vuetify.breakpoint.mdAndUp"
      class="flex-column align-center align-self-center"
    >
      <v-btn x-large icon @click.stop="$emit('toggle-drawer')">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background: rgb(167, 226, 165);
  background: -moz-linear-gradient(
    90deg,
    rgba(167, 226, 165, 1) 0%,
    rgba(91, 169, 89, 1) 23%,
    rgba(77, 126, 62, 1) 58%,
    rgba(38, 84, 47, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(167, 226, 165, 1) 0%,
    rgba(91, 169, 89, 1) 23%,
    rgba(77, 126, 62, 1) 58%,
    rgba(38, 84, 47, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(167, 226, 165, 1) 0%,
    rgba(91, 169, 89, 1) 23%,
    rgba(77, 126, 62, 1) 58%,
    rgba(38, 84, 47, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a7e2a5",endColorstr="#26542f",GradientType=1);
}
.large-header {
  height: 10vh;
  padding: 12px 5%;
}
.small-header {
  height: 8vh;
  padding: 12px 5%;
}
.logo {
  vertical-align: middle;
  height: 100%;
}
</style>
