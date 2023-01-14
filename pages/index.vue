<template>
  <div class="servcy-body servcy-linear-bg-light">
    <v-row no-gutters class="py-10">
      <v-col sm="12" xs="12" lg="6" xl="6" md="6">
        <div
          :class="{
            'servcy-headline servcy-headline-font servcy-gradient-font font-weight-bold': true,
            'pt-8 pb-10': !$vuetify.breakpoint.smAndDown,
          }"
        >
          Virtual Office For Freelance Developers
        </div>
        <div
          :class="{
            'servcy-sub-headline-font dark--text pb-4 font-weight-semibol': true,
            'text-left': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div
            class="mt-5 d-flex integrate-replace align-center align-self-center flex-wrap overflow-hidden"
          >
            <img
              src="@/assets/icons/integrate-replace.svg"
              alt="integrate-replace-icon"
              width="20%"
              height="100%"
            />
            <span
              class="ma-4 overflow-hidden manage-text-animation__content-container"
            >
              <span
                class="manage-text-animation__content-container__inner"
                style="width: 100%"
              ></span>
              <span class="mr-2 manage-text-animation__content">{{
                currentIsometric === 0
                  ? "Inbox Aggregation"
                  : currentIsometric === 1
                  ? "Project Management"
                  : currentIsometric === 2
                  ? "Payments & Invoicing"
                  : "Analytics & Reporting"
              }}</span>
              <span
                v-if="!$vuetify.breakpoint.smAndDown"
                class="font-weight-bold"
                >Software</span
              >
            </span>
          </div>
        </div>
        <div
          class="dark--text mb-5 mt-13 s-title font-weight-semibold font-castoro"
        >
          Increase your productivity, and give your clients the best
          experience.
        </div>
        <!-- Integrations Icons -->
        <v-row class="d-flex align-end  justify-space-between">
          <img
            class="mr-2"
            src="@/assets/icons/itegrate.svg"
            alt="integrate-icon"
            width="90"
            height="100%"
          />
          <v-tooltip bottom v-if="!$vuetify.breakpoint.xsAndDown">
            <template v-slot:activator="{ on }">
              <img
                src="@/assets/icons/figma-logo.svg"
                alt="figma-icon"
                v-on="on"
                height="40"
                class="ma-2"
              />
            </template>
            <span>Figma</span>
          </v-tooltip>
          <v-tooltip bottom v-if="!$vuetify.breakpoint.xsAndDown">
            <template v-slot:activator="{ on }">
              <img
                src="@/assets/icons/zapier-logo.svg"
                alt="zapier-icon"
                v-on="on"
                height="40"
                class="ma-2"
              />
            </template>
            <span>Zapier</span>
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
            alt="more-icon"
            width="90"
            height="100%"
          />
        </v-row>
        <!-- Email Form -->
        <form class="newsletter-form mt-16">
          <input
            id="cta-input"
            v-model="email"
            type="email"
            placeholder="Your Email address"
          />
          <v-progress-circular
            v-if="subscribing"
            class="mr-5"
            indeterminate
            color="success"
            size="20"
          />
          <button
            v-else
            id="cta-button"
            @click="submit"
            :loading="true"
            :disabled="!isEmailValid"
          >
            <span id="cta-span">Notify Me!</span>
          </button>
        </form>
      </v-col>
      <!-- ISOMETRIC Illustrations -->
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
      currentIsometric: 0,
      subscribing: false,
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
      this.subscribing = true;
      e.preventDefault();
      this.$fire.firestore
        .collection("servcy-landing-page-email-subscribers")
        .add({ email: this.email, timestamp: new Date() })
        .then(() => {
          this.$notifier.showMessage({
            content: "Thanks for your interest, We'll contact you soon!",
            color: "success",
          });
        })
        .catch((err) => {
          this.$notifier.showMessage({
            content: "Something went wrong. Please try again later.",
            color: "errorLight",
          });
        })
        .finally(() => {
          this.subscribing = false;
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
}
li {
  font-size: 1.2rem !important;
  line-height: 1.5rem;
  letter-spacing: normal !important;
}
.manage-text-animation__content-container {
  min-width: -webkit-max-content;
  min-width: max-content;
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.manage-text-animation__content-container__inner {
  background-color: #26542f;
  bottom: -5px;
  height: 20px;
  left: 0;
  opacity: 0.12;
  position: absolute;
  width: 0;
}
.manage-text-animation__content {
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-color: #7ff096;
  background-image: linear-gradient(90deg, #a6d1af 0, #26542f 0);
  background-size: 100%;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.2px;
  width: -webkit-max-content;
  width: max-content;
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
}
@media screen and (max-width: 599px) {
  .servcy-headline-font {
    font-size: 3rem !important;
    line-height: 3.5rem;
  }
  .servcy-sub-headline-font {
    font-size: 1.1rem !important;
    line-height: 1.2rem;
  }
  li {
    font-size: 1.1rem !important;
    line-height: 1.2rem;
  }
}
</style>

<!-- For Email Form -->
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
