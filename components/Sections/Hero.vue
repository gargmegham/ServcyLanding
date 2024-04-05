<template>
  <div class="py-[10vh] flex flex-col text-center justify-between">
    <div>
      <div class="font-axiforma font-extrabold md:text-7xl text-6xl">
        One app to<br />
        manage them all
      </div>
      <div class="font-semibold md:text-xl text-lg text-servcy-wheat mt-6">
        Are you juggling multiple tools to manage your business?<br />Consolidate
        data from all your tools in one place.
      </div>
    </div>
    <div class="my-6">
      <div class="flex flex-wrap justify-center items-center">
        <div class="md:text-4xl text-3xl font-semibold font-axiforma">
          A central hub for all your:
        </div>
        <transition name="fade" mode="out-in">
          <div
            class="font-semibold font-axiforma servcy-text-bg md:text-5xl text-4xl text-left pl-5 w-[375px]"
            :key="rotateText"
          >
            {{ this.hubFor[this.rotateText] }}
          </div>
        </transition>
      </div>
    </div>
    <div>
      <button
        class="bg-servcy-black servcy-wheat-shadow-left-bottom rounded p-3"
      >
        <a
          href="https://web.servcy.com"
          target="_blank"
          class="font-semibold !text-servcy-cream hover:!text-servcy-wheat md:text-xl text-lg"
        >
          Start free trial
        </a>
      </button>
      <div class="text-xs mt-3 text-servcy-cream">No credit card required</div>
      <div class="flex justify-center mt-6">
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
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      rotateText: 0,
      timeInterval: null,
      hubFor: [
        "Communications",
        "Tasks",
        "Documents",
        "Payments",
        "Tracked Time",
        "Calendar Events",
      ],
    };
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      if (this.rotateText <= 4) this.rotateText += 1;
      else this.rotateText = 0;
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
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
