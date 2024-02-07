<template>
  <section class="px-[5%] pt-[8vh] pb-[4vh] servcy-wave-block text-center flex flex-col">
    <div class="md:text-8xl text-6xl font-axiforma font-extrabold pt-24 pb-10">
      Contact us
    </div>
    <div class="md:text-xl text-lg font-semibold text-servcy-wheat pb-16">
      Questions? Concerns? We're here to support you every step of the way.<br />We have real, live people available to
      chat 7
      days a week, and online help resources that are available 24 hours a day.
    </div>
    <div class="flex justify-center">
      <div class="mx-4">
        <button class="bg-servcy-black rounded p-3 mt-5 servcy-wheat-shadow-left-bottom">
          <a href="tel:+919805085026"
            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat text-2xl">
            Call Us
          </a>
        </button>
      </div>
      <div class="mx-4">
        <button class="bg-servcy-black rounded p-3 mt-5 servcy-wheat-shadow-right-bottom">
          <a href="mailto:contact@servcy.com" target="_blank"
            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat text-2xl">
            Email Us
          </a>
        </button>
      </div>
    </div>
    <section id="faqs" class="rounded-lg my-20 servcy-card-bg text-servcy-black pa-10">
      <div class="md:text-6xl text-servcy-neutral text-5xl min-h-32 font-axiforma font-extrabold">
        FAQs
      </div>
      <div class="mx-auto accordion">
        <div class="mb-4 border border-servcy-black rounded-2xl overflow-hidden shadow-lg" v-for="(value, index) in faqs"
          :key="index">
          <input class="absolute opacity-0 " type="checkbox" :id="`chck${index}`">
          <label
            class="relative block bg-servcy-green w-full p-4 md:text-xl text-lg font-semibold text-servcy-white text-left cursor-pointer select-none overflow-hidden"
            :for="`chck${index}`">
            <h6>{{ value.question }}
              <v-icon class="float-right">mdi-chevron-down</v-icon>
            </h6>
          </label>
          <div class="tab-content md:text-lg text-xs text-servcy-wheat bg-servcy-black">
            <p>{{ value.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Support",
  data() {
    return {
      faqs: [
        {
          question: "Is Servcy for people like me?",
          answer: "Most of our users are Founders, CXOs, Freelancers and Software developers. Regardless of whether your goal is to achieve productivity, improve organization, or excel in time management, Servcy is ready to be your reliable ally."
        },
        {
          question: "Does my free trial limit my access to features?",
          answer: "Absolutely not! Your free trial grants you complete access to all of Servcy's extensive features. We believe in providing you with the full experience, allowing you to explore the platform's capabilities and discover how Servcy can truly enhance your productivity."
        },
        {
          question: "How can I be sure that my data is secure?",
          answer: "At Servcy, we prioritize data security, taking various measures to ensure your information is protected. Rest assured, your data is safe with us, and you can confidently use our platform without worry. Your peace of mind is important to us!"
        },
        {
          question: "If I have any questions, who can I reach out to?",
          answer: "If you have any questions or require assistance, please don't hesitate to contact our support team by clicking on the chat icon or by sending an email to contact@servcy.com. You can also join our community on Slack. We're here to help you find the best support and will do our best to address any doubts that you may have.",
        },
        {
          question: "Can i import my existing templates?",
          answer: "Yes, you can import your existing templates. We understand that you may have spent a lot of time creating and perfecting your templates. We want to make sure that you can continue using them without any hassle. You can import your existing templates into Servcy and continue using them as you normally would."
        },
        {
          question: "Is Servcy a CRM?",
          answer: "Servcy is a productivity tool that helps you track & manage your projects, payments, inbox, contracts and time. It's an easy-to-use software built to help small business owners streamline their business processes from inquiry to invoicing."
        }
      ]
    }
  }
};
</script>

<style scoped>
.accordion .tab-content {
  max-height: 0;
  padding: 0 1em;
  transition: all .15s;
  text-align: left;
  border-color: #D1BFAE
}


.accordion input:checked~.tab-content {
  border-top: 1px solid #D1BFAE;
  padding: 1em;
  max-height: 100vh;
}
</style>