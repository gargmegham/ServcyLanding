<template>
  <footer class="py-[20px] px-[5%] bg-servcy-green">
    <v-row>
      <v-col
        md="6"
        cols="12"
        :class="[$vuetify.breakpoint.smAndDown ? 'text-center' : '']"
      >
        <div class="font-castoro text-lg flex-row">
          © 2024 Servcy. All Rights Reserved.
        </div>
      </v-col>
      <v-col
        md="6"
        cols="12"
        :class="[
          'align-self-end justify-end flex text-nowrap',
          $vuetify.breakpoint.smAndDown
            ? 'mt-4 flex justify-center align-self-center'
            : '',
        ]"
      >
        <nuxt-link class="mr-4" to="/documents/privacy-policy">
          <img
            src="@/assets/icons/documents.svg"
            alt="privacy-policy"
            class="h-[20px] inline"
          />
          <span
            class="text-servcy-cream hover:text-servcy-wheat md:text-sm text-xs my-auto"
            >Privacy Policy</span
          >
        </nuxt-link>
        <nuxt-link class="mr-4" to="/documents/terms-and-conditions">
          <img
            src="@/assets/icons/documents.svg"
            alt="terms"
            class="h-[20px] inline"
          />
          <span
            class="text-servcy-cream hover:text-servcy-wheat md:text-sm text-xs my-auto"
            >Terms & Conditions</span
          >
        </nuxt-link>
        <nuxt-link to="/documents/refund-and-cancellation-policy">
          <img
            src="@/assets/icons/documents.svg"
            alt="refund-policy"
            class="h-[20px] inline"
          />
          <span
            class="text-servcy-cream hover:text-servcy-wheat md:text-sm text-xs my-auto"
            >Refund Policy</span
          >
        </nuxt-link>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
