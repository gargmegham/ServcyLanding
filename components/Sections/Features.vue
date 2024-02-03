<template>
    <section id="features" class="mt-[8vh]">
        <div class="servcy-wave-block text-center px-[5%] pb-10 rounded-t-xl">
            <div class="font-bold md:text-6xl text-5xl max-sm:text-4xl font-castoro pt-10 pb-6">
                Features
            </div>
            <div class="md:text-xl text-lg max-sm:text-sm font-semibold text-servcy-wheat pb-8 w-1/2 mx-auto">
                Supercharge your productivity. Streamline workflows by doing it,
                seeing
                it, and managing it all in one
                place.
            </div>
            <div class="padding-x flex flex-row justify-center flex-wrap">
                <v-sheet v-for="(value, title, index) in features" :key="index" width="300px" height="330px"
                    class="servcy-card-bg servcy-wheat-shadow-left-bottom pa-6 ma-4 rounded !text-servcy-neutral">
                    <h3 class="font-bold  font-castoro">{{ title }}</h3>
                    <div class="mx-auto mt-3 mb-6">
                        <v-btn fab outlined color="silver" class="!bg-servcy-neutral">
                            <v-icon>{{ value.icon }}</v-icon></v-btn>
                    </div>
                    <ul class="mt-4" style="list-style-type: circle;">
                        <li v-for="feature in value.val" class="text-left text-sm" :key="feature">
                            {{ feature }}
                        </li>
                    </ul>
                </v-sheet>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: "Features",
    data() {
        return {
            features: {
                "Unified Inbox": {
                    icon: "mdi-inbox-arrow-down",
                    val: [
                        "Aggregate comments, notifications, and messages.",
                        "Use AI to respond to all your messages & comments.",
                        "Connect as many platforms as you need.",
                    ],
                },
                "Manage Calendar": {
                    icon: "mdi-calendar",
                    val: [
                        "Get a bird's eye view of your schedule.",
                        "Manage appointments and meetings.",
                        "Convert messages, tasks etc. into calendar events.",
                    ],
                },
                "Manage Contracts": {
                    icon: "mdi-file-sign",
                    val: [
                        "Create contracts and agreements using templates.",
                        "Share, sign & store at a single place.",
                        "AI helps you to understand, and manage contracts.",
                    ],
                },
                "Monitor Tasks": {
                    icon: "mdi-checkbox-marked-circle-plus-outline",
                    val: [
                        "Tasks from all your platforms & projects in one place.",
                        "AI helps you to prioritize and manage tasks.",
                        "Convert messages, comments, and emails into tasks.",
                    ],
                },
                "Track Time": {
                    icon: "mdi-timer",
                    val: [
                        "Track time spent on tasks, communications, and other workflows.",
                        "Use AI to suggest efficient time management.",
                        "Use tracked time to bill clients and monitor productivity.",
                    ],
                },
                "Raise Invoices": {
                    icon: "mdi-receipt-text-plus",
                    val: [
                        "Create invoices using templates or upload your own.",
                        "Send reminders & configure recurring invoices for retainers.",
                        "Use AI for insights and business reports.",
                    ],
                },
                "Monitor Payments": {
                    icon: "mdi-cash-multiple",
                    val: [
                        "Track payments from all your clients.",
                        "Use AI to predict cash flow and manage payments.",
                        "Get insights and reports on your business finances.",
                    ],
                },
            },
        };
    },
};
</script>
  