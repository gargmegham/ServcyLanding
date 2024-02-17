<template>
  <header class="flex py-3 justify-between px-[5%] fixed z-10 w-full rounded-b-lg h-[10vh] bg-servcy-green">
    <div>
      <NuxtLink to="/"><img src="@/static/logo.svg" alt="logo" class="vertical-align-middle h-full" /></NuxtLink>
    </div>
    <div class="align-self-center cols-3">
      <!-- <v-menu open-on-hover location="end">
        <template v-slot:activator="{ on }">
          <button class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat"
            v-on="on">Features</button>
        </template>
        <v-list class="!bg-servcy-black">
          <v-list-item>
            <NuxtLink to="/#unified-inbox" class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">
              <v-icon class="mr-2">mdi-email</v-icon>
              Unified Inbox
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/#central-task-hub" class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">
              <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>
              Central Task Hub
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/#central-document-hub"
              class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">
              <v-icon class="mr-2">mdi-file-document</v-icon>
              Central Document Hub
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/#central-payment-hub"
              class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">
              <v-icon class="mr-2">mdi-currency-usd</v-icon>
              Central Payment Hub
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/#central-time-hub" class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">
              <v-icon class="mr-2">mdi-clock-time-four-outline</v-icon>
              Central Time Hub
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/#merged-calendar" class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">
              <v-icon class="mr-2">mdi-calendar-month</v-icon>
              Merged Calendar View
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <NuxtLink to="/support#faqs"
        class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat">FAQs
      </NuxtLink>
      <NuxtLink to="/support"
        class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat">Contact Us
      </NuxtLink>
      <NuxtLink to="/blogs" class="max-md:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat">
        Blogs
      </NuxtLink>
      <button class="bg-servcy-black border-servcy-wheat rounded p-2 servcy-wheat-shadow-right-bottom"
        style="border-style: solid;">
        <a href="https://web.servcy.com" target="_blank"
          class="font-bold !text-servcy-cream hover:!text-servcy-wheat">Start free trial</a></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>