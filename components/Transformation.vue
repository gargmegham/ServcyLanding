<template>
    <section
        id="transformation"
        class="space-y-16 pt-[4vh] text-servcy-cream lg:pt-[10vh]">
        <div
            v-motion-slide-visible-once-left
            class="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
            <div class="flex items-center">
                <div>
                    <div
                        class="font-axiforma mb-10 text-4xl underline decoration-wavy md:text-5xl">
                        Did You Know?
                    </div>
                    <div class="space-y-6 text-base md:text-lg">
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="streamline:interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error"
                                class="text-red-400" />
                            92% of agencies struggle with project cost overruns
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="streamline:interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error"
                                class="text-red-400" />
                            65% miss their deadlines regularly
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="streamline:interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error"
                                class="text-red-400" />
                            53% of similar tools are reported as insufficient,
                            or too complex
                        </div>
                    </div>
                </div>
            </div>
            <NuxtImg
                src="/people/confused.jpeg"
                alt="confused"
                format="webp"
                class="rounded-lg" />
        </div>
        <div
            v-motion-slide-visible-once-right
            class="grid grid-cols-1 gap-x-10 gap-y-6 space-y-reverse lg:grid-cols-2">
            <NuxtImg
                src="/people/unhappy.jpeg"
                alt="confused"
                format="webp"
                class="order-2 rounded-lg lg:order-1" />
            <div class="order-1 flex items-center lg:order-2">
                <div>
                    <div
                        class="font-axiforma mb-10 text-4xl underline decoration-wavy md:text-5xl">
                        How it impacts you
                    </div>
                    <div class="space-y-6 text-base md:text-lg">
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="carbon:tropical-warning"
                                class="text-amber-400" />
                            Constantly exceeding budgets can hurt your bottom
                            line
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="carbon:tropical-warning"
                                class="text-amber-400" />
                            Missing deadlines impacts your reputation and client
                            relationships
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="carbon:tropical-warning"
                                class="text-amber-400" />
                            Juggling multiple tools that don't integrate well
                            wastes time and energy
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-motion-slide-visible-once-left
            class="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
            <div class="flex items-center">
                <div>
                    <div
                        class="font-axiforma mb-10 text-4xl underline decoration-wavy md:text-5xl">
                        That's where we come in
                    </div>
                    <div class="space-y-6 text-base md:text-lg">
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="material-symbols:playlist-add-check-circle-rounded"
                                class="text-servcy" />
                            Stay on budget with accurate tracking and avoid
                            financial surprises
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="material-symbols:playlist-add-check-circle-rounded"
                                class="text-servcy" />
                            Plan and meet deadlines with ease, improving client
                            satisfaction
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="material-symbols:playlist-add-check-circle-rounded"
                                class="text-servcy" />
                            Enjoy an intuitive, all-in-one platform that costs
                            less than most other tools
                        </div>
                        <div class="flex items-center gap-x-4">
                            <Icon
                                name="material-symbols:playlist-add-check-circle-rounded"
                                class="text-servcy" />
                            Our team is always ready to help, ensuring you get
                            the most out of Servcy
                        </div>
                    </div>
                </div>
            </div>
            <NuxtImg
                src="/people/happy.jpeg"
                format="webp"
                alt="confused"
                class="rounded-lg" />
        </div>
    </section>
</template>
