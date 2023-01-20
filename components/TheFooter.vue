<template>
  <footer>
    <v-row
      :class="[
        $vuetify.breakpoint.smAndDown
          ? 'justify-center align-center'
          : 'justify-space-between ',
      ]"
    >
      <v-col
        sm="12"
        xs="12"
        md="6"
        lg="6"
        cols="12"
        xl="6"
        class="align-self-center"
        ><FormTextField
          :loading="subscribing"
          @submit="submit"
          buttonText="Contact Me!"
          input-type="email"
          placeholder="Your email address:"
        />
        <div class="mt-3 s-heading font-castoro">
          © Agroha Solutions. All Rights Reserved.
        </div>
      </v-col>
      <v-col sm="12" xs="12" md="6" lg="6" cols="12" xl="6">
        <div
          :class="[
            'd-flex flex-row ',
            $vuetify.breakpoint.smAndDown
              ? 'justify-center align-center'
              : 'justify-end align-end',
          ]"
        >
          <nuxt-link class="mr-4" to="/"
            ><v-btn fab small outlined
              ><v-icon>mdi-home</v-icon></v-btn
            ></nuxt-link
          >
          <a target="_blank" href="https://twitter.com/ContactServcy"
            ><v-icon large class="mr-4">mdi-twitter</v-icon></a
          >
          <a target="_blank" href="https://www.linkedin.com/company/servcy/"
            ><v-icon large class="mr-4">mdi-linkedin</v-icon></a
          >
          <a target="_blank" href="https://www.instagram.com/servcy.admin/"
            ><v-icon large class="mr-4">mdi-instagram</v-icon></a
          >
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100087292992160"
            ><v-icon large>mdi-facebook</v-icon></a
          >
        </div>
        <div
          :class="[
            'mt-4 d-flex flex-row ',
            $vuetify.breakpoint.smAndDown
              ? 'justify-center align-center'
              : 'justify-end align-end',
          ]"
        >
          <a target="_blank" class="mr-4" href="mailto:contact@servcy.com"
            ><v-btn small rounded outlined>contact Us</v-btn></a
          >
          <nuxt-link to="/blogs"
            ><v-btn small rounded outlined
              >Read Our Latest Blog Posts</v-btn
            ></nuxt-link
          >
        </div>
        <div
          :class="[
            'mt-4 d-flex flex-row ',
            $vuetify.breakpoint.smAndDown
              ? 'justify-center align-center'
              : 'justify-end align-end',
          ]"
        >
          <nuxt-link class="mr-8" to="/documents/privacy-policy">
            <img
              src="@/assets/icons/documents.svg"
              alt="privacy-policy"
              height="15"
            />
            <span class="s-small white--text my-auto">Privacy Policy</span>
          </nuxt-link>
          <nuxt-link class="mr-8" to="/documents/terms-and-conditions">
            <img src="@/assets/icons/documents.svg" alt="terms" height="15" />
            <span class="s-small white--text my-auto">Terms & Conditions</span>
          </nuxt-link>
          <nuxt-link to="/documents/refund-and-cancellation-policy">
            <img
              src="@/assets/icons/documents.svg"
              alt="refund-policy"
              height="15"
            />
            <span class="s-small white--text my-auto">Refund Policy</span>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      subscribing: false,
    };
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

<style scoped>
footer {
  padding: 20px 5%;
  background: rgb(223, 224, 236);
  background: -moz-linear-gradient(
    90deg,
    rgba(223, 224, 236, 1) 0%,
    rgba(126, 132, 163, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(223, 224, 236, 1) 0%,
    rgba(126, 132, 163, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(223, 224, 236, 1) 0%,
    rgba(126, 132, 163, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dfe0ec",endColorstr="#7e84a3",GradientType=1);
}
</style>
