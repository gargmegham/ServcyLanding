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
        <div class="col-span-1 servcy-transparent-bg rounded-lg p-8 row-span-1">
          <div
            class="flex items-center font-axiforma font-extrabold md:text-xl text-lg mb-6 text-servcy-wheat"
          >
            <img
              src="@/assets/icons/starter.svg"
              alt="starter"
              class="mr-2"
              width="48"
              height="48"
            />
            <div>
              Starter
              <div class="text-sm text-servcy-white">
                For a team size of 1-10 techies
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-1 servcy-transparent-bg rounded-lg p-8 row-span-1 relative"
        >
          <div
            class="flex items-center font-axiforma font-extrabold md:text-xl text-lg mb-6 text-servcy-wheat"
          >
            <img
              src="@/assets/icons/plus.svg"
              alt="plus"
              class="mr-2"
              width="48"
              height="48"
            />
            <div>
              Plus
              <div class="text-sm text-servcy-white">
                For a team size of 11-25 techies
              </div>
            </div>
          </div>
          <div
            class="servcy-most-popular font-axiforma absolute top-[-10px] right-[-10px]"
          >
            Most Popular
          </div>
        </div>
        <div class="col-span-1 servcy-transparent-bg rounded-lg p-8 row-span-1">
          <div
            class="flex items-center font-axiforma font-extrabold md:text-xl text-lg mb-6 text-servcy-wheat"
          >
            <img
              src="@/assets/icons/business.svg"
              alt="business"
              class="mr-2"
              width="48"
              height="48"
            />
            <div>
              Business
              <div class="text-sm text-servcy-white">
                For a team size of 26-50 techies
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 servcy-transparent-bg rounded-lg p-8 row-span-1">
          <div
            class="flex items-center font-axiforma font-extrabold md:text-xl text-lg mb-6 text-servcy-wheat"
          >
            <img
              src="@/assets/icons/enterprise.svg"
              alt="enterprise"
              class="mr-2"
              width="48"
              height="48"
            />
            <div>
              Enterprise
              <div class="text-sm text-servcy-white">
                For a team size of 50+
              </div>
            </div>
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
      isIndian: false,
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
    };
  },
  mounted() {
    fetch("https://api.ipregistry.co/?key=d4efnhn98fme2xms").then(
      async (response) => {
        const res = await response.json();
        this.isIndian = res.location.country.code === "IN";
      }
    );
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
</style>
