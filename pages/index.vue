<template>
  <div>
    <v-row no-gutters class="py-10">
      <v-col sm="12" xs="12" lg="6" xl="6" md="6">
        <div
          :class="{
            'servcy-headline servcy-headline-font servcy-gradient-font s-bold': true,
            'pt-8 pb-10': !$vuetify.breakpoint.smAndDown,
          }"
        >
          Virtual Office For Freelance Entrepreneurs
        </div>
        <div
          :class="{
            'servcy-sub-headline-font dark--text pb-4 s-semi-bold': true,
            'text-left': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div
            class="mt-5 d-flex integrate-replace align-center align-self-center flex-wrap"
          >
            <img
              src="@/assets/icons/integrate-replace.svg"
              alt="integrate-replace-icon"
              width="20%"
              height="100%"
            />
            <span class="ma-4 manage-text servcy-sub-headline-font">
              <span class="mr-2 s-bold font-castoro">{{
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
                class="s-title silver--text s-semi-bold"
                >Software</span
              >
            </span>
          </div>
        </div>
        <!-- Email Form -->
        <form class="newsletter-form mt-8">
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
        <div class="silver--text mb-5 mt-10 s-title s-semi-bold font-castoro">
          Having all your operations in one place will increase productivity,
          enabling you to serve your clients better.
        </div>
        <!-- Integrations Icons -->
        <div class="d-flex w-100">
          <img
            class="mr-2"
            src="@/assets/icons/itegrate.svg"
            alt="integrate-icon"
            width="90"
            height="100%"
          />
          <div
            :class="
              currentIsometric === 0
                ? 'd-flex align-end justify-space-between flex-wrap'
                : 's-none'
            "
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/figma-logo.svg"
                  alt="figma-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Figma</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#7E84A3" size="40"
                  >mdi-gmail</v-icon
                >
              </template>
              <span>Gmail</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/notion-logo.svg"
                  alt="notion-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Notion</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#7E84A3" size="40"
                  >mdi-microsoft-outlook</v-icon
                >
              </template>
              <span>Outlook</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#7E84A3" size="40"
                  >mdi-slack</v-icon
                >
              </template>
              <span>Slack</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#7E84A3" size="40"
                  >mdi-calendar-month-outline</v-icon
                >
              </template>
              <span>Calendly</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#7E84A3" size="40"
                  >mdi-github</v-icon
                >
              </template>
              <span>Github</span>
            </v-tooltip>
          </div>
          <div
            :class="
              currentIsometric === 1
                ? 'd-flex align-end justify-space-between flex-wrap'
                : 's-none'
            "
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#7E84A3" size="40"
                  >mdi-jira</v-icon
                >
              </template>
              <span>Jira</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/asana-logo.svg"
                  alt="asana-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Asana</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/linear-logo.svg"
                  alt="linear-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Linear</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/monday-logo.svg"
                  alt="monday-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Monday.com</span>
            </v-tooltip>
          </div>
          <div
            :class="
              currentIsometric === 2
                ? 'd-flex align-end justify-space-between flex-wrap'
                : 's-none'
            "
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/simple-invoices-logo.svg"
                  alt="simple-invoices-logo-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Simple Invoices</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/paypal-logo.svg"
                  alt="paypal-logo-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Paypal</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/stripe-logo.svg"
                  alt="stripe-logo-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Stripe</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/qb-logo.svg"
                  alt="qb-logo-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Quickbooks</span>
            </v-tooltip>
          </div>
          <div
            :class="
              currentIsometric === 3
                ? 'd-flex align-end justify-space-between flex-wrap'
                : 's-none'
            "
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/zapier-logo.svg"
                  alt="zapier-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Zapier</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/docusign.svg"
                  alt="docusign-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>DocuSign</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/ironclad-logo.svg"
                  alt="ironclad-icon"
                  v-on="on"
                  height="40"
                  class="my-2 mx-3"
                />
              </template>
              <span>Ironclad Contracts</span>
            </v-tooltip>
          </div>
          <img
            src="@/assets/icons/more.svg"
            alt="more-icon"
            width="90"
            height="100%"
          />
        </div>
      </v-col>
      <!-- ISOMETRIC Illustrations -->
      <v-col
        v-if="!$vuetify.breakpoint.smAndDown"
        sm="12"
        cols="12"
        lg="6"
        xl="6"
        md="6"
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
.manage-text {
  position: relative;
}
.manage-text span {
  position: relative;
}
.manage-text::before {
  content: "";
  position: absolute;
  left: -0.1px;
  right: -0.1px;
  bottom: 0;
  height: 100%;
  transform: scaleY(0.3);
  transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  transform-origin: bottom;
  background-color: #5ba959;
  opacity: 0.6;
}
.manage-text:hover::before {
  transform: scaleY(1);
}
@media screen and (max-width: 959px) {
  .servcy-headline {
    padding-bottom: 32px;
    text-align: center;
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
  width: 90%;
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
