<template>
  <section class="px-[5%] text-center flex flex-col bg-servcy-green">
    <div class="md:text-8xl text-6xl font-axiforma font-extrabold pt-24 pb-10">
      Contact us
    </div>
    <div class="md:text-xl text-lg font-semibold text-servcy-wheat pb-16">
      Questions? Concerns? We're here to support you every step of the way.<br />We
      have real, live people available to chat 7 days a week, and online help
      resources that are available 24 hours a day.
    </div>
    <div class="flex justify-center">
      <div class="mx-4">
        <button
          class="bg-servcy-black rounded p-3 mt-5 servcy-wheat-shadow-left-bottom"
        >
          <a
            href="tel:+919805085026"
            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat text-2xl"
          >
            Call Us
          </a>
        </button>
      </div>
      <div class="mx-4">
        <button
          class="bg-servcy-black rounded p-3 mt-5 servcy-wheat-shadow-right-bottom"
        >
          <a
            href="mailto:contact@servcy.com"
            target="_blank"
            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat text-2xl"
          >
            Email Us
          </a>
        </button>
      </div>
    </div>
    <FAQs />
  </section>
</template>

<script>
import FAQs from "@/components/Sections/FAQs.vue";
export default {
  name: "Support",
  components: {
    FAQs,
  },
};
</script>
