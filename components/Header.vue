<template>
    <header
        class="align-center fixed top-0 z-10 flex h-[10vh] w-full justify-between rounded-b-lg bg-servcy-green px-[5%] py-4">
        <div class="flex items-center gap-x-2">
            <NuxtLink to="/">
                <img
                    src="/logo.svg"
                    width="160px"
                    height="160px"
                    alt="logo"
                    class="vertical-align-middle h-full" />
            </NuxtLink>
        </div>
        <div class="cols-3">
            <NuxtLink
                to="https://youtu.be/s4NSM8URZ1M"
                class="font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat max-md:hidden"
                >Demo
            </NuxtLink>
            <NuxtLink
                to="/pricing"
                class="font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat max-sm:hidden"
                >Pricing
            </NuxtLink>
            <NuxtLink
                to="/support"
                class="font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat max-sm:hidden"
                >Contact Us
            </NuxtLink>
            <button
                @mouseenter="menuOpen = true"
                class="font-castoro relative mr-6 font-bold !text-servcy-cream max-lg:hidden">
                <span>Resources</span>
                <div
                    v-if="menuOpen"
                    @mouseleave="menuOpen = false"
                    class="absolute right-0 top-8 flex w-52 flex-col rounded bg-servcy-black px-4 py-4 text-left text-sm">
                    <NuxtLink
                        to="/agencies"
                        class="font-castoro font-bold !text-servcy-wheat"
                        ><div>Agencies</div>
                        <div class="mt-1 text-xs text-gray-300">
                            Verified agencies for you.
                        </div>
                    </NuxtLink>
                    <hr class="my-4 opacity-30" />
                    <NuxtLink
                        to="/blogs"
                        class="font-castoro font-bold !text-servcy-wheat">
                        Blogs
                        <div class="mt-1 text-xs text-gray-300">
                            Read our latest blogs.
                        </div>
                    </NuxtLink>
                </div>
            </button>
            <button
                class="servcy-wheat-shadow-right-bottom rounded border-servcy-wheat bg-servcy-black p-2"
                style="border-style: solid">
                <a
                    href="https://web.servcy.com/login"
                    target="_blank"
                    class="font-bold !text-servcy-cream hover:!text-servcy-wheat"
                    >Get Started</a
                >
            </button>
        </div>
    </header>
</template>

<script setup>
const menuOpen = ref(false)
</script>
