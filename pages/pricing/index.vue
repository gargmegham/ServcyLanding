<template>
  <section class="pt-[12vh] pb-[10vh] h-screen">
    <div class="flex flex-col items-center text-center">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Pricing<br />
        <span class="font-axiforma font-extrabold md:text-3xl text-2xl"
          >that works for you—today and tomorrow</span
        >
      </div>
    </div>
    <div class="mt-16 grid grid-cols-3 gap-4">
      <div class="col-span-1">
        <div class="servcy-transparent-bg rounded-lg p-8 text-white">
          <div
            class="font-axiforma font-extrabold md:text-2xl text-xl mb-6 text-servcy-wheat"
          >
            All plans offer:
          </div>
          <div
            class="flex text-sm my-2"
            v-for="offering in offerings"
            :key="offering"
          >
            <img src="@/assets/icons/new-releases.svg" class="mr-2" />
            {{ offering.text }}
            <span
              v-if="offering.comingSoon"
              class="text-xs text-servcy-wheat ml-2"
              >(Coming Soon...)</span
            >
            <span
              v-if="offering.disclaimer"
              class="text-xs text-servcy-wheat ml-2"
              >{{ offering.disclaimer }}</span
            >
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-rows-2 grid-cols-2 gap-4">
        <div
          class="relative col-span-1 servcy-transparent-bg rounded-lg p-8 row-span-1"
          v-for="plan in plans"
          :key="plan.name"
        >
          <div
            class="flex items-center font-axiforma font-extrabold md:text-xl text-lg mb-6 text-servcy-wheat border-b-2 border-neutral-500 pb-4"
          >
            <img
              :src="plan.icon"
              :alt="plan.name"
              class="mr-2"
              width="48"
              height="48"
            />
            <div>
              {{ plan.name }}
              <div class="text-sm text-servcy-white">
                {{ plan.description }}
              </div>
            </div>
          </div>
          <div
            :class="{
              'opacity-90': plan.name !== 'Plus',
              'flex w-full h-20 gap-x-2': true,
            }"
          >
            <div
              v-if="plan.price !== null"
              class="flex flex-col w-1/3 my-2 rounded-lg font-extrabold font-axiforma text-lg bg-servcy-cream text-servcy-black text-center justify-center items-center"
            >
              <div>
                {{ `${plan.price} USD` }}
              </div>
              <div class="servcy-caption opacity-40">
                {{ `${plan.price / plan.maxSeats} USD/user` }}
              </div>
            </div>
            <div
              v-else
              class="flex my-2 w-full rounded-lg font-extrabold font-axiforma text-lg bg-servcy-cream text-servcy-black text-center justify-center items-center"
            >
              <a
                href="mailto:contact@servcy.com"
                class="flex w-full h-full justify-center items-center !text-servcy-black hover:!text-servcy-wheat"
              >
                Contact Us
              </a>
            </div>
            <div
              v-if="plan.price !== null"
              :class="{
                'flex my-2 w-2/3 rounded-lg border-servcy-wheat font-extrabold font-axiforma text-lg text-center justify-center items-center': true,
                'bg-servcy-cream': plan.name === 'Plus',
                'bg-servcy-black': plan.name !== 'Plus',
              }"
            >
              <a
                href="mailto:contact@servcy.com"
                :class="{
                  'flex w-full h-full justify-center items-center font-bold': true,
                  '!text-servcy-black hover:!text-servcy-green':
                    plan.name === 'Plus',
                  '!text-servcy-cream hover:!text-servcy-wheat':
                    plan.name !== 'Plus',
                }"
              >
                Get Started
              </a>
            </div>
          </div>
          <a
            href="https://web.servcy.com/login"
            class="flex justify-end ml-auto w-full underline text-xs !text-servcy-wheat hover:!text-servcy-silver"
          >
            or start with a trial
          </a>
          <div
            v-if="plan.ribbon"
            class="servcy-most-popular font-axiforma absolute top-[-10px] right-[-10px]"
          >
            {{ plan.ribbon }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      offerings: [
        { text: "Unlimited Projects, and Issues" },
        { text: "SSO, and Role based access" },
        { text: "AI assistance" },
        { text: "10+ Integrations" },
        { text: "Custom analytics" },
        { text: "Priority support" },
        { text: "Feature Requests", disclaimer: "(Subject to voting)" },
        { text: "APIs, Webhooks", comingSoon: true },
        { text: "Time tracking", comingSoon: true },
        { text: "Project budgeting", comingSoon: true },
        { text: "Project budgeting", comingSoon: true },
        { text: "DORA metrics", comingSoon: true },
      ],
      plans: [
        {
          name: "Starter",
          description: "For a team of upto 10 techies",
          icon: "/shots/starter.svg",
          maxSeats: 10,
          price: "49",
        },
        {
          name: "Plus",
          description: "For a team of upto 25 techies",
          icon: "/shots/plus.svg",
          price: "99",
          ribbon: "Most Popular",
          maxSeats: 25,
        },
        {
          name: "Business",
          description: "For a team of upto 50 techies",
          icon: "/shots/business.svg",
          maxSeats: 50,
          price: "199",
          ribbon: "~20% Off",
        },
        {
          name: "Enterprise",
          description: "For a team of more than 50 techies",
          icon: "/shots/enterprise.svg",
          price: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding-left: 10%;
  padding-right: 10%;
  background-color: #032123;
}
.servcy-transparent-bg {
  background: linear-gradient(
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
}
.servcy-most-popular {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 28px;
  backdrop-filter: blur(12px);
  font-size: 13px;
  font-weight: 500;
  line-height: 28px;
  padding: 0px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.05);
  border-image: initial;
  white-space: nowrap;
}
.servcy-caption {
  font-size: 10px;
  line-height: 12px;
}
</style>
