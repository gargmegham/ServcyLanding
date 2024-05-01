<template>
    <div class="servcy-transparent-bg relative col-span-1 rounded-lg p-8">
        <div
            class="font-axiforma items-centerpb-4 mb-6 flex h-20 text-lg font-extrabold text-servcy-wheat md:text-xl">
            <img
                src="/shots/starter.svg"
                alt="Starter"
                class="mr-4"
                width="48"
                height="48" />
            <div>
                Starter
                <div class="text-sm text-servcy-white">
                    Ideal for small teams to get started.
                </div>
            </div>
        </div>
        <div class="mb-6 h-16 border-b-2 border-neutral-500 pb-4">
            <span
                v-if="!isInrSelected"
                class="text-4xl font-extrabold text-servcy-wheat"
                >$</span
            >
            <span v-else class="text-4xl font-extrabold text-servcy-wheat"
                >&#8377;</span
            >
            <span class="ml-1 text-4xl font-extrabold text-servcy-wheat">0</span
            ><span class="text-xl font-extrabold text-servcy-silver">/mo</span>
        </div>
        <div class="mb-4 h-24">
            <div class="flex h-20 w-full gap-x-2">
                <a
                    href="https://ko-fi.com/B0B0WS6XV"
                    target="_blank"
                    class="flex h-16 w-full items-center justify-center rounded-lg bg-servcy-black text-lg font-extrabold text-servcy-cream hover:text-servcy-wheat">
                    <img
                        height="28px"
                        width="28px"
                        class="elevation-2 mr-2 inline"
                        src="@/assets/icons/logos/kofi.png"
                        alt="Buy Me a Coffee" />
                    <span>Buy Me A Coffee</span>
                </a>
            </div>
            <a
                href="https://web.servcy.com/login"
                class="ml-auto flex w-full justify-end text-xs !text-servcy-wheat underline hover:!text-servcy-silver">
                and start for free
            </a>
        </div>
        <div
            class="my-2 flex text-sm"
            v-for="offering in offerings"
            :key="offering">
            <img src="@/assets/icons/new-releases.svg" class="mr-2 size-4" />
            <span class="text-servcy-cream">{{ offering }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["isInrSelected"])
const offerings = [
    "Invite Upto 3 Users",
    "Create 3 Projects",
    "1 Cycle per Project",
    "Unlimited Issues",
    "Inbox Integrations",
    "SSO, & Role Based Access",
    "Scope, & Demand Analytics",
    "Custom Themes",
    "Kanban, List Layout",
    "100MB Storage for Attachments"
]
</script>
