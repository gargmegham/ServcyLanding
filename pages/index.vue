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
          <v-tooltip bottom v-if="!$vuetify.breakpoint.xsAndDown">
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
          <v-tooltip bottom v-if="!$vuetify.breakpoint.smAndDown">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="ma-2" color="#7E84A3" size="40"
                >mdi-aws</v-icon
              >
            </template>
            <span>AWS</span>
          </v-tooltip>
          <v-tooltip v-if="!$vuetify.breakpoint.smAndDown" bottom>
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
        <form class="newsletter-form mt-8">
          <input
            id="cta-input"
            v-model="email"
            type="email"
            placeholder="Your Email address"
          />
          <button id="cta-button" @click="submit" :disabled="!isEmailValid">
            <span id="cta-span">I'm Interested</span>
          </button>
        </form>
      </v-col>
      <v-col
        sm="12"
        cols="12"
        lg="6"
        xl="6"
        md="6"
        :class="!$vuetify.breakpoint.smAndDown ? '' : 'pt-10 max-h-500'"
      >
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
          <span>Aggregated Inbox</span>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      currentIsometric: 2,
      isometricInterval: null,
    };
  },
  computed: {
    isEmailValid() {
      var validRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !!this.email.match(validRegex);
    },
  },
  mounted() {
    this.isometricInterval = setInterval(() => {
      if (this.currentIsometric === 3) {
        this.currentIsometric = 0;
      } else {
        this.currentIsometric++;
      }
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.isometricInterval);
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$fire.firestore
        .collection("servcy-landing-page-email-subscribers")
        .add({ email: this.email, timestamp: new Date() })
        .then(() => {
          this.$notifier.showMessage({
            content: "Thank you for your interest!",
            color: "#5BA959",
          });
        })
        .catch((err) => {
          this.$notifier.showMessage({
            content: "Something went wrong. Please try again later.",
            color: "#5BA959",
          });
        });
    },
  },
};
</script>

<style scoped lang="css">
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
    rgb(236, 223, 234) 47%
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
  .max-h-500 {
    height: 500px;
  }
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

<style scoped lang="scss">
.newsletter-form {
  --primary: #275efe;
  --input-placeholder: #7e84a3;
  --input-text: #7e84a3;
  --border-default: #e1e6f9;
  --background: #fff;
  --button-text: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--background);
  box-shadow: inset 0 0 0 var(--border-width, 1px)
    var(--border, var(--border-default));
  border-radius: 9px;
  padding-right: 4px;
  transition: box-shadow 0.25s;
  &:focus-within {
    --border-width: 1.5px;
  }
  #cta-input,
  #cta-button {
    background: none;
    outline: none;
    display: block;
    border: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
  #cta-input {
    width: 100%;
    flex-grow: 1;
    padding: 12px 12px 12px 16px;
    color: var(--input-text);
    font-weight: 400;
    &::placeholder {
      color: var(--input-placeholder);
    }
  }
  #cta-button {
    --text-opacity: 1;
    --border-radius: 7px;
    position: relative;
    padding: 8px 0;
    min-width: 130px;
    text-align: center;
    font-weight: 600 !important;
    opacity: var(--button-opacity, 0.5);
    filter: var(--button-filter, grayscale(65%));
    color: var(--button-text);
    border-radius: var(--border-radius);
    transform: translateZ(0);
    transition: opacity 0.25s, filter 0.25s;
    -webkit-tap-highlight-color: transparent;
    &:not(.active) {
      background: var(--primary);
    }
    #cta-span {
      display: block;
      position: relative;
      z-index: 4;
      opacity: var(--text-opacity);
    }
  }
}
</style>
