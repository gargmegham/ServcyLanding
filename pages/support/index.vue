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
        <FAQs />
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
