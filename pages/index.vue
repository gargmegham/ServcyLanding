<template>
  <div class="servcy-body">
    <v-row no-gutters class="py-10">
      <v-col sm="12" xs="12" lg="6" xl="6" md="6">
        <div
          :class="{
            'servcy-headline servcy-gradient-font font-weight-bold': true,
            'pt-8 pb-10': !$vuetify.breakpoint.smAndDown,
          }"
        >
          Best Place To Run Your Freelance Agency
        </div>
        <div
          :class="{
            'servcy-sub-headline dark-text pb-4 font-weight-semibol': true,
          }"
        >
          Helping you increase your productivity and client satisfaction all
          from one platform.
          <ul class="mt-4 list-style-none">
            <li>AI Generated Insights & Reports</li>
            <li>Automated Workflows</li>
            <li>Raise & Track Payment Requests</li>
            <li>Manage & Track Time</li>
            <li>Manage Client Communication & Feedback</li>
            <li>Manage Projects & Tasks</li>
          </ul>
        </div>
        <v-row class="d-flex align-end mt-8 justify-space-between">
          <img
            class="mr-2"
            src="@/assets/icons/itegrate.svg"
            alt="signup-icon"
            width="90"
            height="100%"
          />
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <img
                src="@/assets/icons/figma-logo.svg"
                alt="signup-icon"
                v-on="on"
                height="40"
                class="ma-2"
              />
            </template>
            <span>Figma</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-gmail</v-icon
              >
            </template>
            <span>Gmail</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-aws</v-icon
              >
            </template>
            <span>AWS</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-microsoft-outlook</v-icon
              >
            </template>
            <span>Outlook</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-slack</v-icon
              >
            </template>
            <span>Slack</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-github</v-icon
              >
            </template>
            <span>Github</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-jira</v-icon
              >
            </template>
            <span>Jira</span>
          </v-tooltip>
          <img
            src="@/assets/icons/more.svg"
            alt="signup-icon"
            width="90"
            height="100%"
          />
        </v-row>
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
  min-height: 90vh;
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
  font-size: 1.2rem !important;
  line-height: 1.5rem;
  letter-spacing: normal !important;
}
@media screen and (max-width: 959px) {
  .servcy-headline {
    padding-bottom: 32px;
    text-align: center;
  }
  .servcy-body {
    min-height: 92vh;
  }
  .servcy-sub-headline {
    text-align: center;
  }
  .list-style-none {
    list-style-type: none;
  }
}
</style>
