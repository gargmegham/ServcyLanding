<template>
  <v-tooltip v-if="currentIsometric === 0" bottom>
    <template v-slot:activator="{ on }">
      <img
        src="@/assets/icons/inbox-management-isometric.svg"
        alt="isometric composition"
        width="90%"
        height="90%"
        v-on="on"
        class="ma-2"
    /></template>
    <span>Inbox & Calendar</span>
  </v-tooltip>
  <v-tooltip v-else-if="currentIsometric === 1" bottom>
    <template v-slot:activator="{ on }">
      <img
        src="@/assets/icons/task-management-isometric.svg"
        alt="isometric composition"
        width="90%"
        v-on="on"
        height="90%"
        class="ma-2"
    /></template>
    <span>Project Management</span>
  </v-tooltip>
  <v-tooltip v-else-if="currentIsometric === 2" bottom>
    <template v-slot:activator="{ on }">
      <img
        src="@/assets/icons/payments-isometric.svg"
        alt="isometric composition"
        width="90%"
        v-on="on"
        height="90%"
        class="ma-2"
    /></template>
    <span>Payments & Invoices</span>
  </v-tooltip>
  <v-tooltip v-else-if="currentIsometric === 3" bottom>
    <template v-slot:activator="{ on }">
      <img
        src="@/assets/icons/insights-isometric.svg"
        alt="isometric composition"
        v-on="on"
        width="90%"
        height="90%"
        class="ma-2"
    /></template>
    <span>Analytics & Reports</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "IsomentricIllustrations",
  props: ["currentIsometric"],
};
</script>
