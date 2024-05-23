<template>
    <header
        class="align-center fixed top-0 z-10 flex w-full justify-between rounded-b-lg bg-servcy-green px-[5%] py-4">
        <div class="flex items-center">
            <NuxtLink to="/">
                <img id="logo" src="/logo.svg" alt="logo" />
            </NuxtLink>
        </div>
        <div class="flex items-center gap-x-6">
            <NuxtLink
                to="/#pricing"
                class="font-bold !text-servcy-cream hover:!text-servcy-wheat max-sm:hidden"
                >Pricing
            </NuxtLink>
            <NuxtLink
                to="https://youtu.be/s4NSM8URZ1M"
                target="_blank"
                class="font-bold !text-servcy-cream hover:!text-servcy-wheat max-md:hidden"
                >Demo
            </NuxtLink>
            <NuxtLink
                to="/support"
                class="font-bold !text-servcy-cream hover:!text-servcy-wheat max-sm:hidden"
                >Contact Us
            </NuxtLink>
            <button
                @mouseenter="menuOpen = true"
                class="relative font-bold !text-servcy-cream max-lg:hidden">
                <span>Resources</span>
                <div
                    v-if="menuOpen"
                    @mouseleave="menuOpen = false"
                    class="absolute right-0 top-8 flex w-52 flex-col rounded bg-servcy-black px-4 py-4 text-left text-sm shadow-2xl shadow-gray-800">
                    <NuxtLink
                        to="/agencies"
                        class="font-bold !text-servcy-wheat"
                        ><div>Agencies</div>
                        <div class="mt-1 text-xs text-gray-300">
                            Verified agencies for you.
                        </div>
                    </NuxtLink>
                    <hr class="my-4 opacity-30" />
                    <NuxtLink to="/blogs" class="font-bold !text-servcy-wheat">
                        Blogs
                        <div class="mt-1 text-xs text-gray-300">
                            Read our latest blogs.
                        </div>
                    </NuxtLink>
                </div>
            </button>
            <button
                class="servcy-wheat-shadow-right-bottom rounded border-servcy-wheat bg-servcy-black p-2 max-sm:w-24 max-sm:text-sm"
                style="border-style: solid"
                id="header-cta">
                <a
                    href="https://web.servcy.com/login"
                    target="_blank"
                    class="font-bold !text-servcy-cream hover:!text-servcy-wheat"
                    >Get Started</a
                >
            </button>
            <button
                @click="menuOpen = !menuOpen"
                class="relative hidden items-center font-bold !text-servcy-cream max-sm:flex">
                <Icon name="mdi:menu" class="size-6" />
                <div
                    v-if="menuOpen"
                    class="absolute right-0 top-8 flex w-32 flex-col rounded bg-servcy-black px-4 py-4 text-left text-sm shadow-2xl shadow-gray-800">
                    <NuxtLink
                        to="/#pricing"
                        class="font-bold !text-servcy-wheat"
                        ><div>Pricing</div>
                    </NuxtLink>
                    <hr class="my-4 opacity-30" />
                    <NuxtLink to="/blogs" class="font-bold !text-servcy-wheat">
                        Demo
                    </NuxtLink>
                    <hr class="my-4 opacity-30" />
                    <NuxtLink
                        to="/support"
                        class="font-bold !text-servcy-wheat">
                        Contact Us
                    </NuxtLink>
                    <hr class="my-4 opacity-30" />
                    <NuxtLink
                        to="/agencies"
                        class="font-bold !text-servcy-wheat"
                        ><div>Agencies</div>
                    </NuxtLink>
                    <hr class="my-4 opacity-30" />
                    <NuxtLink to="/blogs" class="font-bold !text-servcy-wheat">
                        Blogs
                    </NuxtLink>
                </div>
            </button>
        </div>
    </header>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
#logo {
    width: 160px;
    @media screen and (max-width: 640px) {
        width: 124px;
    }
}
</style>
