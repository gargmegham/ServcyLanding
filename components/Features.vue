<template>
    <section id="features" class="pt-[4vh] lg:pt-[10vh] xl:min-h-[110vh]">
        <div class="relative mb-8 flex flex-col items-center text-center">
            <h1
                class="font-axiforma text-xl font-extrabold text-servcy-wheat md:text-2xl">
                Features
            </h1>
            <h3
                class="mt-4 text-xl font-extrabold text-servcy-cream md:text-2xl lg:text-3xl">
                Servcy packs everything you need to<br />
                make your agency profitable.
            </h3>
            <h6
                class="mt-2 text-sm font-extrabold text-servcy-cream md:text-lg">
                <Icon name="mdi:heart" class="mr-2 text-amber-500" />Made with
                love in India
            </h6>
        </div>
        <div class="mb-8 flex items-center justify-center gap-x-6">
            <div
                v-for="feature in features"
                :key="feature.name"
                @click="
                    () => {
                        selectedFeature = feature
                        selectedSlide = 0
                    }
                "
                :class="{
                    'flex cursor-pointer items-center justify-center gap-x-1 rounded-lg px-2 py-2 text-xs md:gap-x-2 md:text-base': true,
                    'bg-servcy-black text-amber-500':
                        selectedFeature.name !== feature.name,
                    'bg-servcy-cream text-gray-800':
                        selectedFeature.name === feature.name,
                    'max-sm:hidden': feature.hideOnMobile
                }">
                <Icon :name="feature.icon" />
                <div class="truncate">{{ feature.name }}</div>
            </div>
        </div>
        <div class="relative lg:px-32">
            <img
                :src="selectedFeature.slides[0].image"
                class="cursor-pointer rounded-lg shadow-gray-600"
                :width="selectedFeature.slides[0].width"
                @click="
                    selectedSlide === 0
                        ? (selectedSlide = 1)
                        : (selectedSlide = 0)
                " />
            <img
                v-if="selectedSlide > 0"
                v-motion-slide-left
                :src="selectedFeature.slides[1].image"
                :class="`absolute ${selectedFeature.slides[1].transform} cursor-pointer rounded-xl shadow-2xl shadow-gray-700`"
                :width="selectedFeature.slides[1].width"
                @click="
                    selectedSlide === 1
                        ? (selectedSlide = 2)
                        : (selectedSlide = 0)
                " />
            <img
                v-if="selectedSlide > 1"
                v-motion-slide-right
                :src="selectedFeature.slides[2].image"
                :class="`absolute ${selectedFeature.slides[2].transform} rounded-xl shadow-2xl shadow-gray-800`"
                :width="selectedFeature.slides[2].width" />
        </div>
    </section>
</template>

<script setup>
const selectedSlide = ref(2)
const features = [
    {
        name: "Inbox",
        hideOnMobile: true,
        icon: "mdi:gmail",
        slides: [
            {
                image: "/shots/integrations.png",
                width: "100%"
            },
            {
                image: "/shots/inbox.png",
                width: "60%",
                transform: "left-20 -bottom-2"
            },
            {
                image: "/shots/inbox-to-issue.png",
                width: "50%",
                transform: "-top-2 right-20"
            }
        ]
    },
    {
        name: "Project",
        icon: "ph:suitcase",
        slides: [
            {
                image: "/shots/project-button.png",
                width: "100%"
            },
            {
                image: "/shots/project.png",
                width: "30%",
                transform: "top-1/4 left-20"
            },
            {
                image: "/shots/add-members.png",
                width: "50%",
                transform: "bottom-10 right-1/4"
            }
        ]
    },
    {
        name: "Issues",
        icon: "material-symbols:add-task",
        slides: [
            {
                image: "/shots/issues.png",
                width: "100%"
            },
            {
                image: "/shots/create-issue.png",
                width: "50%",
                transform: "left-20 top-1/2"
            },
            {
                image: "/shots/side-peek.png",
                width: "42%",
                transform: "top-0 right-32"
            }
        ]
    },
    {
        name: "Time Tracker",
        hideOnMobile: true,
        icon: "material-symbols:auto-timer-outline-rounded",
        slides: [
            {
                image: "/shots/timesheet.png",
                width: "100%"
            },
            {
                image: "/shots/timer-start.png",
                width: "50%",
                transform: "left-20 top-1/2"
            },
            {
                image: "/shots/timer.png",
                width: "3%",
                transform: "bottom-4 right-36"
            }
        ]
    },
    {
        name: "Cost Tracker",
        icon: "nimbus:stats",
        slides: [
            {
                image: "/shots/dashboard.png",
                width: "100%"
            },
            {
                image: "/shots/costing.png",
                width: "50%",
                transform: "left-20 -bottom-2"
            },
            {
                image: "/shots/analytics.png",
                width: "42%",
                transform: "-top-2 right-24"
            }
        ]
    }
]
const selectedFeature = ref(features[4])
</script>
