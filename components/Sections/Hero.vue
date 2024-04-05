<template>
  <section class="pt-[20vh] pb-[10vh]">
    <div
      class="flex flex-col justify-between items-center text-center min-h-[56vh]"
    >
      <div>
        <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
          Project management<br />
          for highly efficient teams
        </div>
        <div class="font-semibold md:text-xl text-lg text-servcy-wheat mt-6">
          Juggling multiple apps for your project lifecycle?<br />
          Consolidate now by tracking issues, time and budget all in one place.
        </div>
      </div>
      <div class="flex flex-wrap items-center">
        <transition name="fade" mode="out-in">
          <div
            class="font-semibold font-axiforma servcy-text-bg md:text-5xl text-4xl"
            :key="rotateText"
          >
            {{ this.hubFor[this.rotateText] }}
            <span v-if="this.rotateText > 1" class="text-xs"
              >(coming soon...)</span
            >
          </div>
        </transition>
      </div>
      <div>
        <div class="mb-8 w-full">
          <FormTextField
            :loading="false"
            @update:input="email = $event"
            @submit="redirectToLogin"
            buttonText="Start free trial"
            input-type="text"
            placeholder="mail@company.com"
          />
        </div>
        <div class="flex">
          <img
            class="mr-2"
            src="@/assets/icons/integrate.svg"
            alt="integrate-icon"
            width="90"
            height="100%"
          />
          <div
            class="flex overflow-hidden h-[50px] justify-between !max-w-[450px]"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <img
                  src="@/assets/icons/figma-logo.svg"
                  alt="figma-icon"
                  v-on="on"
                  class="my-2 mx-3 h-[40px] w-[40px]"
                />
              </template>
              <span>Figma</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40"
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
                  class="my-2 mx-3 h-[40px] w-[40px]"
                />
              </template>
              <span>Notion</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40"
                  >mdi-microsoft-outlook</v-icon
                >
              </template>
              <span>Outlook</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40"
                  >mdi-slack</v-icon
                >
              </template>
              <span>Slack</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40"
                  >mdi-github</v-icon
                >
              </template>
              <span>Github</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40"
                  >mdi-jira</v-icon
                >
              </template>
              <span>Jira</span>
            </v-tooltip>
          </div>
          <img
            src="@/assets/icons/more.svg"
            alt="more-icon"
            width="90"
            height="100%"
            class="ml-2"
          />
        </div>
      </div>
    </div>
    <div class="mt-16">
      <img
        src="/shots/kanban.svg"
        alt="hero-image"
        width="100%"
        height="100%"
      />
    </div>
  </section>
</template>

<script>
import FormTextField from "@/components/Forms/FormTextField.vue";

const validateEmail = (email) => {
  return email.match(
    /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/
  );
};

export default {
  name: "Hero",
  data() {
    return {
      rotateText: 0,
      timeInterval: null,
      email: "",
      hubFor: [
        "Issue Tracking",
        "Inbox Aggregation",
        "Time Tracking",
        "Project Budgeting",
      ],
    };
  },
  components: {
    FormTextField,
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      if (this.rotateText < this.hubFor.length - 1) {
        this.rotateText++;
      } else {
        this.rotateText = 0;
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  },
  methods: {
    redirectToLogin() {
      // validate email
      if (!this.email) return;
      if (!validateEmail(this.email)) {
        alert("Please enter a valid email address");
        return;
      }
      window.open(`https://web.servcy.com/login?email=${this.email}`, "_self");
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
