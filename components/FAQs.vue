<template>
    <section
        id="faqs"
        class="servcy-card-bg my-20 rounded-lg p-6 text-servcy-black md:p-10">
        <div
            class="font-axiforma min-h-32 text-5xl font-extrabold text-servcy-neutral md:text-6xl">
            FAQs
        </div>
        <div class="accordion mx-auto">
            <div
                class="mb-4 overflow-hidden rounded-2xl border border-servcy-black shadow-lg"
                v-for="(value, index) in faqs"
                :key="index">
                <input
                    class="absolute opacity-0"
                    type="checkbox"
                    :id="`chck${index}`" />
                <label
                    class="relative block w-full cursor-pointer select-none overflow-hidden bg-servcy-green p-4 text-left text-lg font-semibold text-servcy-white md:text-xl"
                    :for="`chck${index}`">
                    <h6>
                        {{ value.question }}
                        <Icon class="float-right" name="mdi:chevron-down" />
                    </h6>
                </label>
                <div
                    class="tab-content bg-servcy-black text-xs text-servcy-wheat md:text-lg">
                    <p>{{ value.answer }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FAQs",
    data() {
        return {
            faqs: [
                {
                    question: "Is Servcy for people like me?",
                    answer: "Most of our users are tech startups, and freelance agencies. Regardless of whether your goal is to achieve productivity, or project visibility, Servcy is ready to be your reliable ally."
                },
                {
                    question: "How can I be sure that my data is secure?",
                    answer: "At Servcy, we prioritize data security, taking various measures to ensure your information is protected. Rest assured, your data is safe with us, and you can confidently use our platform without worry. Your peace of mind is important to us!"
                },
                {
                    question:
                        "If I have any questions, who can I reach out to?",
                    answer: "If you have any questions or require assistance, please don't hesitate to contact our support team by clicking on the chat icon or by sending an email to support@launchbit.in. You can also join our community on Slack. We're here to help you find the best support and will do our best to address any doubts that you may have."
                }
            ]
        }
    }
}
</script>

<style scoped>
.accordion .tab-content {
    max-height: 0;
    padding: 0 1em;
    transition: all 0.15s;
    text-align: left;
    border-color: #d1bfae;
}

.accordion input:checked ~ .tab-content {
    border-top: 1px solid #d1bfae;
    padding: 1em;
    max-height: 100vh;
}
</style>
