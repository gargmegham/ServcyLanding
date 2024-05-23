<template>
    <section
        id="testimonials"
        class="grid grid-cols-1 gap-10 pt-[4vh] lg:grid-cols-2 lg:pt-[10vh]">
        <div
            v-for="(testimonial, index) in testimonials"
            :key="`testimonial-${testimonial.company}`"
            class="servcy-transparent-bg relative space-y-4 rounded-lg p-8">
            <div class="flex items-center gap-x-2">
                <div>
                    <img
                        :src="testimonial.logo"
                        :alt="`${testimonial.company}-logo`"
                        width="50px" />
                </div>
                <div>
                    <div class="text-lg font-extrabold text-servcy-cream">
                        {{ testimonial.name }}
                    </div>
                    <div class="text-sm font-extrabold text-servcy-wheat">
                        {{ testimonial.company }}
                    </div>
                </div>
            </div>
            <div class="px-1 text-sm italic text-servcy-cream">
                {{ testimonial.quote }}
            </div>
            <img
                src="@/assets/icons/quote.svg"
                alt="social-proof"
                :class="`absolute top-[-30px] size-12 ${index % 2 ? 'right-[-20px]' : 'left-[-20px] rotate-180'}`" />
        </div>
    </section>
</template>

<script setup>
const testimonials = [
    {
        name: "Matti P.",
        company: "CTO @Valpas",
        logo: "/testimonials/valpas.svg",
        quote: "Managing multiple projects used to be a logistical nightmare. But since we started using Servcy, everything has changed. The inbox automations ensure we never miss a critical update, and the real-time cost tracking keeps our budgets in check. Our team is more efficient, and our clients are happier. We’ve seen a 25% boost in productivity, and our projects are consistently profitable."
    },
    {
        name: "Hariharan G.",
        company: "Founder @Factana",
        logo: "/testimonials/factana.svg",
        quote: "We were drowning in overpriced and complicated project management tools until Servcy came along. Not only is it more affordable, but the support is incredible. Anytime we have a question, their team is right there to help. Servcy’s intuitive interface and powerful features have streamlined our processes and saved us so much time and money. We’ve cut our project costs by 12% since switching."
    },
    {
        name: "Eric D.",
        company: "VP Engineering @Nova Pulse",
        logo: "/testimonials/nova.svg",
        quote: "As a tech-focused agency, we needed a project tracking tool that could keep up with our fast-paced environment. Servcy delivered beyond our expectations. Its keyboard shortcuts alone have saved us countless hours, making our team more productive. The detailed analytics and time tracking help us optimize our resources and improve our estimates. Our profitability has never been off the charts like this before."
    },
    {
        name: "Samson S.",
        company: "Co-Founder @InfoKey",
        logo: "/testimonials/infokey.svg",
        quote: "Before Servcy, managing our projects felt like herding cats. We constantly struggled with staying on budget and meeting deadlines. But then, we found Servcy. Its real-time cost tracking and project planning tools completely transformed our workflow. Now, our projects are consistently profitable, and we’ve seen a 20% increase in efficiency. The inbox automations are a game-changer! We can't imagine going back to the chaos we had before."
    }
]
</script>
