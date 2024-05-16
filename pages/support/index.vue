<template>
    <section
        class="flex flex-col bg-servcy-green px-[5%] pt-[12vh] text-center">
        <h1
            class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
            Contact us
        </h1>
        <h2 class="mt-6 text-lg font-semibold text-servcy-wheat md:text-xl">
            Questions? Concerns? We're here to support you every step of the
            way.<br />We have real, live people available to chat 7 days a week,
            and online help resources that are available 24 hours a day.
        </h2>
        <div class="mt-6 flex justify-center">
            <div class="mx-4">
                <button
                    class="servcy-wheat-shadow-left-bottom mt-5 rounded bg-servcy-black p-3">
                    <a
                        href="tel:+919805085026"
                        class="font-castoro text-2xl font-semibold !text-servcy-cream hover:!text-servcy-wheat">
                        Call Us
                    </a>
                </button>
            </div>
            <div class="mx-4">
                <button
                    class="servcy-wheat-shadow-right-bottom mt-5 rounded bg-servcy-black p-3">
                    <a
                        href="mailto:contact@servcy.com"
                        target="_blank"
                        class="font-castoro text-2xl font-semibold !text-servcy-cream hover:!text-servcy-wheat">
                        Email Us
                    </a>
                </button>
            </div>
        </div>
        <div class="mt-16 grid grid-cols-3 gap-6">
            <div class="col-span-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.904131600887!2d77.28319477585859!3d30.18273241200485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efeaab0000001%3A0x3f8bee4d4bddec2d!2sAgroha%20Solutions!5e0!3m2!1sen!2sin!4v1712944958765!5m2!1sen!2sin"
                    style="border: 0"
                    allowfullscreen=""
                    width="100%"
                    class="rounded-lg"
                    height="100%"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div class="servcy-transparent-bg col-span-1 p-12 text-left">
                <h3 class="text-lg font-semibold text-servcy-cream">
                    Our Office:
                    <span class="ml-2 text-sm text-servcy-wheat">
                        Agroha Solutions, D44 1st Floor, Jai City, Jagadhri
                        (135003), Yamunanagar, Haryana, India
                    </span>
                </h3>
                <h3 class="mt-4 text-lg font-semibold text-servcy-cream">
                    Email:
                    <span class="tml-2 text-sm text-servcy-wheat">
                        <a href="mailto:contact@servcy.com">
                            contact@servcy.com
                        </a>
                    </span>
                </h3>
                <h3 class="mt-4 text-lg font-semibold text-servcy-cream">
                    Phone:
                    <span class="ml-2 text-sm text-servcy-wheat">
                        <a href="tel:+919805085026"> +91 98050 85026 </a>
                    </span>
                </h3>
            </div>
        </div>
        <FAQs />
        <FinalCTA />
    </section>
</template>

<script setup>
useHead({
    title: "Servcy Support",
    meta: [
        {
            hid: "description",
            name: "description",
            content: "Servcy's support page for all the help you need."
        }
    ]
})
</script>
