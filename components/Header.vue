<template>
    <header
        class="align-center fixed top-0 z-10 flex h-[10vh] w-full justify-between rounded-b-lg bg-servcy-green px-[5%] py-4">
        <div>
            <NuxtLink to="/">
                <img
                    src="/logo.svg"
                    width="55px"
                    height="55px"
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
                to="/support#faqs"
                class="font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat max-md:hidden"
                >FAQs
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
            <NuxtLink
                to="/blogs"
                class="font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat max-md:hidden">
                Blogs
            </NuxtLink>
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
