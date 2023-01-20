<template>
  <section
    :class="[
      'servcy-body s-page-padding-x',
      $vuetify.breakpoint.smAndDown ? 'mb-15' : '',
    ]"
  >
    <v-row no-gutters class="pt-10">
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
        <FormTextField
          class="mt-8"
          :loading="subscribing"
          @submit="submit"
          buttonText="Notify Me!"
          input-type="email"
          placeholder="Your email address:"
        />
        <div class="silver--text mb-5 mt-10 s-title s-semi-bold font-castoro">
          Having all your operations in one place will increase productivity,
          enabling you to serve your clients better.
        </div>
        <!-- Integrations Icons -->
        <IntegrationIcons :current-isometric="currentIsometric" />
      </v-col>
      <!-- Isomentric Illustrations -->
      <v-col
        v-if="!$vuetify.breakpoint.smAndDown"
        sm="12"
        cols="12"
        lg="6"
        xl="6"
        md="6"
      >
        <IsomentricIllustrations :current-isometric="currentIsometric" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      currentIsometric: 0,
      subscribing: false,
      isometricInterval: null,
    };
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
    submit(email) {
      this.subscribing = true;
      this.$fire.firestore
        .collection("servcy-landing-page-email-subscribers")
        .add({ email: email, timestamp: new Date() })
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
}
@media screen and (max-width: 959px) {
  .servcy-body {
    min-height: 92vh;
  }
}

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
