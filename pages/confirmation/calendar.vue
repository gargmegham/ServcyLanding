<template>
  <section
    id="calendar-confirmation"
    class="d-flex flex-row justify-center flex-wrap"
  >
    <div class="flex-column ma-4" v-if="!$vuetify.breakpoint.smAndDown">
      <img
        src="@/assets/icons/super-thank-you.svg"
        alt="calendar image"
        height="400px"
      />
    </div>
    <v-sheet
      class="pa-6 flex-column ma-4 dark--text font-castoro"
      height="350px"
      min-width="350px"
      max-width="500px"
      rounded="xl"
      elevation="2"
      color="white"
    >
      <div class="pb-10 s-bold s-heading d-flex flex-row">
        <v-btn class="mr-2" fab outlined color="#07796A">
          <v-icon>mdi-party-popper</v-icon></v-btn
        >
        <div>
          Hi {{ $route.query.invitee_full_name }}, thanks for your intereset in
          our product!
        </div>
      </div>
      <div class="s-semibold s-subheading">
        <ul>
          <li class="mb-2">Your demo session has been booked!</li>
          <li class="mb-2">
            We've sent a confirmation email with meeting link to
            <strong>{{ $route.query.invitee_email }}</strong>
          </li>
          <li>
            Event starts at <strong>{{ sessionTime }}</strong>
          </li>
        </ul>
      </div>
    </v-sheet>
  </section>
</template>

<script>
export default {
  name: "CalendarConfirmation",
  data() {
    return {
      sessionTime: "-",
    };
  },
  mounted() {
    this.sessionTime = new Date(
      this.$route.query.event_start_time
    ).toTimeString();
  },
};
</script>

<style scoped>
section {
  padding: 50px 5%;
}
img {
  max-width: 550px;
  min-width: 350px;
}
</style>
