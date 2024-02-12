<template>
  <div class="pt-[8vh] pb-[4vh] servcy-wave-block flex flex-col min-h-[750px] max-h-[1000px] h-screen text-center">
    <div class="flex-row align-self-center justify-center">
      <div class="md:text-8xl text-6xl font-axiforma font-extrabold pt-24 pb-10">
        One app to<br /> manage them all
      </div>
      <div class="md:text-xl text-lg font-semibold text-servcy-wheat pb-16">
        Consolidate all your tools in one place.<br />Track inbox, payments, and everything in between on a
        single platform.
      </div>
      <div>
        <button class="bg-servcy-black rounded p-3 mt-5 servcy-wheat-shadow-left-bottom">
          <a href="https://web.servcy.com" target="_blank"
            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat md:text-2xl text-xl">
            Get Started
          </a>
        </button>
      </div>
      <div class="text-xs mt-3 text-servcy-cream">No credit card required</div>
    </div>
    <div class="flex-row mt-auto">
      <div class="flex justify-center">
        <img class="mr-2" src="@/assets/icons/integrate.svg" alt="integrate-icon" width="90" height="100%" />
        <div class="flex overflow-hidden h-[50px] justify-between !max-w-[620px]">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <img src="@/assets/icons/figma-logo.svg" alt="figma-icon" v-on="on" class="my-2 mx-3 h-[40px] w-[40px]" />
            </template>
            <span>Figma</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40">mdi-gmail</v-icon>
            </template>
            <span>Gmail</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <img src="@/assets/icons/notion-logo.svg" alt="notion-icon" v-on="on" class="my-2 mx-3 h-[40px] w-[40px]" />
            </template>
            <span>Notion</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40">mdi-microsoft-outlook</v-icon>
            </template>
            <span>Outlook</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40">mdi-slack</v-icon>
            </template>
            <span>Slack</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40">mdi-calendar-month-outline</v-icon>
            </template>
            <span>Calendly</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40">mdi-github</v-icon>
            </template>
            <span>Github</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="my-2 mx-3" color="#F7F6FA" size="40">mdi-jira</v-icon>
            </template>
            <span>Jira</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <img src="@/assets/icons/qb-logo.svg" alt="qb-logo-icon" v-on="on" class="my-2 mx-3 h-[40px] w-[40px]" />
            </template>
            <span>Quickbooks</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <img src="@/assets/icons/ironclad-logo.svg" alt="ironclad-icon" v-on="on"
                class="my-2 mx-3 h-[40px] w-[40px]" />
            </template>
            <span>Ironclad Contracts</span>
          </v-tooltip>
        </div>
        <img src="@/assets/icons/more.svg" alt="more-icon" width="90" height="100%" class="ml-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
