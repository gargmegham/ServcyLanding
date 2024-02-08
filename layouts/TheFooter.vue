<template>
  <footer class="servcy-linear-bg py-[20px] px-[5%]">
    <v-row>
      <v-col md="6" cols="12" :class="[
        $vuetify.breakpoint.smAndDown
          ? 'text-center'
          : '',
      ]">
        <div class="font-castoro text-lg flex-row">
          © 2024 Servcy. All Rights Reserved.
        </div>
        <div class="flex-row mt-2">
          <a target="_blank" aria-label="twitter" href="https://twitter.com/ContactServcy"><v-icon large
              class="mr-4">mdi-twitter</v-icon></a>
          <a target="_blank" aria-label="linkedin" href="https://www.linkedin.com/company/servcy/"><v-icon large
              class="mr-4">mdi-linkedin</v-icon></a>
          <a target="_blank" aria-label="instagram" href="https://www.instagram.com/servcy.admin/"><v-icon large
              class="mr-4">mdi-instagram</v-icon></a>
          <a target="_blank" aria-label="facebook" href="https://www.facebook.com/profile.php?id=100087292992160"><v-icon
              large>mdi-facebook</v-icon></a>
        </div>
      </v-col>
      <v-col md="6" cols="12" :class="[
        'align-self-end justify-end flex text-nowrap',
        $vuetify.breakpoint.smAndDown
          ? 'mt-4 flex justify-center align-self-center'
          : '',
      ]">
        <nuxt-link class="mr-4" to="/documents/privacy-policy">
          <img src="@/assets/icons/documents.svg" alt="privacy-policy" class="h-[20px] inline" />
          <span class="text-servcy-cream md:text-sm text-xs my-auto">Privacy Policy</span>
        </nuxt-link>
        <nuxt-link class="mr-4" to="/documents/terms-and-conditions">
          <img src="@/assets/icons/documents.svg" alt="terms" class="h-[20px] inline" />
          <span class="text-servcy-cream md:text-sm text-xs my-auto">Terms & Conditions</span>
        </nuxt-link>
        <nuxt-link to="/documents/refund-and-cancellation-policy">
          <img src="@/assets/icons/documents.svg" alt="refund-policy" class="h-[20px] inline" />
          <span class="text-servcy-cream md:text-sm text-xs my-auto">Refund Policy</span>
        </nuxt-link>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
import FormTextField from "@/components/Forms/FormTextField.vue";

export default {
  name: "TheFooter",
  components: {
    FormTextField,
  },
};
</script>
