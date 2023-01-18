<template>
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
        currentIsometric !== 0
          ? 's-none'
          : $vuetify.breakpoint.smAndDown
          ? 'd-flex align-end overflow-auto'
          : 'd-flex align-end justify-space-between flex-wrap'
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
        currentIsometric !== 1
          ? 's-none'
          : $vuetify.breakpoint.smAndDown
          ? 'd-flex align-end overflow-auto'
          : 'd-flex align-end justify-space-between flex-wrap'
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
        currentIsometric !== 2
          ? 's-none'
          : $vuetify.breakpoint.smAndDown
          ? 'd-flex align-end overflow-auto'
          : 'd-flex align-end justify-space-between flex-wrap'
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
        currentIsometric !== 3
          ? 's-none'
          : $vuetify.breakpoint.smAndDown
          ? 'd-flex align-end overflow-auto'
          : 'd-flex align-end justify-space-between flex-wrap'
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
</template>

<script>
export default {
  name: "IntegrationIcons",
  props: ["currentIsometric"],
};
</script>
