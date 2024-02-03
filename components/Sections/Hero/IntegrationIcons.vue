<template>
  <div class="flex justify-center">
    <img class="mr-2" src="@/assets/icons/integrate.svg" alt="integrate-icon" width="90" height="100%" />
    <div class="flex overflow-hidden h-[50px] justify-between">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <img src="@/assets/icons/figma-logo.svg" alt="figma-icon" v-on="on" class="my-2 mx-3 h-[40px] w-[40px]" />
        </template>
        <span>Figma</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" class="my-2 mx-3" color="#2B3232" size="40">mdi-gmail</v-icon>
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
          <v-icon v-on="on" class="my-2 mx-3" color="#2B3232" size="40">mdi-microsoft-outlook</v-icon>
        </template>
        <span>Outlook</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" class="my-2 mx-3" color="#2B3232" size="40">mdi-slack</v-icon>
        </template>
        <span>Slack</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" class="my-2 mx-3" color="#2B3232" size="40">mdi-calendar-month-outline</v-icon>
        </template>
        <span>Calendly</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" class="my-2 mx-3" color="#2B3232" size="40">mdi-github</v-icon>
        </template>
        <span>Github</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" class="my-2 mx-3" color="#2B3232" size="40">mdi-jira</v-icon>
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
          <img src="@/assets/icons/ironclad-logo.svg" alt="ironclad-icon" v-on="on" class="my-2 mx-3 h-[40px] w-[40px]" />
        </template>
        <span>Ironclad Contracts</span>
      </v-tooltip>
    </div>
    <img src="@/assets/icons/more.svg" alt="more-icon" width="90" height="100%" class="ml-2" />
  </div>
</template>

<script>
export default {
  name: "IntegrationIcons",
};
</script>
