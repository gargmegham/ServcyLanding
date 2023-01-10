<template>
  <div
    :class="{
      'servcy-body': true,
      'large-body': $vuetify.breakpoint.mdAndUp,
      'small-body': !$vuetify.breakpoint.mdAndUp,
    }"
  >
    <v-row no-gutters class="py-10">
      <v-col sm="12" xs="12" lg="6" xl="6" md="6">
        <div
          :class="{
            'servcy-headline servcy-gradient-font font-weight-bold': true,
            'text-center pb-8': $vuetify.breakpoint.mdAndDown,
            ' s-p-y-40': !$vuetify.breakpoint.mdAndDown,
          }"
        >
          Best Place To Run Your Freelance Agency
        </div>
        <div
          :class="{
            'servcy-sub-headline dark-text pb-4 font-weight-semibol': true,
            'text-center': $vuetify.breakpoint.mdAndDown,
          }"
        >
          Increase Your Business Efficiency, Productivity and Client
          Satisfaction all from the same platform.
          <ul
            :class="{
              'mt-4': true,
              'list-style-none': $vuetify.breakpoint.mdAndDown,
            }"
          >
            <li>AI Generated Insights & Reports</li>
            <li>Automated Workflows</li>
            <li>Raise & Track Payment Requests</li>
            <li>Manage & Track Time</li>
            <li>Manage Client Communication & Feedback</li>
            <li>Manage Projects & Tasks</li>
          </ul>
        </div>
      </v-col>
      <v-col sm="12" cols="12" lg="6" xl="6" md="6"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.servcy-body {
  padding-left: 5%;
  padding-right: 5%;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 224, 236, 1) 47%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 224, 236, 1) 47%
  );
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 224, 236, 1) 47%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#dfe0ec",GradientType=1);
}
li {
  font-size: 1.25rem !important;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: normal !important;
}
.list-style-none {
  list-style-type: none;
}
</style>
