<template>
  <section id="features" class="s-vh-100">
    <div class="wave-block text-center">
      <div class="servcy-sub-headline-font s-bold font-castoro pt-10 pb-6">
        Features
      </div>
      <div class="padding-x d-flex flex-row justify-center flex-wrap">
        <v-sheet
          v-for="(value, title, index) in features"
          :key="index"
          width="300px"
          height="300px"
          class="card pa-6 ma-4"
        >
          <h3 class="card-title s-bold font-castoro">{{ title }}</h3>
          <div class="mx-auto my-3">
            <v-btn fab outlined color="silver">
              <v-icon>{{ value.icon }}</v-icon></v-btn
            >
          </div>
          <ul class="mt-4">
            <li
              v-for="feature in value.val"
              class="s-body text-left"
              :key="feature"
            >
              {{ feature }}
            </li>
          </ul>
        </v-sheet>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesSection",
  data() {
    return {
      features: {
        "Schedule A Meeting": {
          icon: "mdi-calendar",
          val: [
            "Set your availability.",
            "Share your meeting link.",
            "Get automatic reminders for scheduled meetings.",
            "Easy for your clients to use.",
          ],
        },
        "Sign Your Contract": {
          icon: "mdi-file-sign",
          val: [
            "Share, sign & store on the platform.",
            "Use provided templates or import your own.",
            "Tweak style and format to suit your business.",
          ],
        },
        "Add Projects": {
          icon: "mdi-microsoft-teams",
          val: [
            "Add a project along with related client details.",
            "Create milestones and timeline.",
            "Add team members.",
            "Connect related apps.",
          ],
        },
        "Add Tasks": {
          icon: "mdi-checkbox-marked-circle-plus-outline",
          val: [
            "Create new tasks and subtasks in seconds.",
            "Attach links, PRs, files and more.",
            "Keep everyone informed about the current state of your projects.",
          ],
        },
        "Track Time": {
          icon: "mdi-timer",
          val: [
            "Track time spent on tasks.",
            "This data can be used to generate invoices.",
            "You can also use it to track your efficiency.",
          ],
        },
        "Raise Invoices": {
          icon: "mdi-receipt-text-plus",
          val: [
            "Raise from provided templates or upload your own template.",
            "Scan invoices with amount auto detection.",
            "Add automatic reminders.",
          ],
        },
        "Get Paid": {
          icon: "mdi-cash-multiple",
          val: [
            "Bill your clients directly from inside the platform.",
            "Automated recurring billing for retainers.",
            "Integrates with Stripe, PayPal and bank accounts.",
          ],
        },
        "Track Earnings For Taxes": {
          icon: "mdi-currency-usd",
          val: [
            "Set goals for revenue and track progress.",
            "Revenue reports for taxation purposes.",
            "Insights based on tracked time.",
          ],
        },
        "Manage Just One Inbox": {
          icon: "mdi-inbox-arrow-down",
          val: [
            "Comments from figma, github, linear, asana, notion & more..",
            "Emails & messages from mutiple accounts aggregated & assigned under one client.",
            "Payments information aggregated in one place.",
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
#features {
  padding-bottom: 50px;
  font-family: "Open Sans", sans-serif;
}
.card-title,
li {
  color: #60636d;
}
.padding-x {
  padding-left: 5%;
  padding-right: 5%;
}
.wave-block {
  margin-bottom: 50px;
  background-image: url("@/assets/icons/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 224, 236, 1) 47%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(236, 223, 234) 47%
  );
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(223, 224, 236, 1) 47%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#dfe0ec",GradientType=1);
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #7e84a3;
  transition: 0.4s ease-out;
}
.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}
.card:hover ~ .card {
  transition: 0.4s ease-out;
}
</style>
