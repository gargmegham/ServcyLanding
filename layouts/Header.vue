<template>
  <header
    class="flex servcy-linear-bg flex-row py-3 justify-space-between px-[5%] fixed z-10 w-full rounded-b-lg h-[10vh]">
    <div class="flex-column">
      <NuxtLink to="/"><img src="@/static/logo.svg" alt="logo" class="vertical-align-middle h-full" /></NuxtLink>
    </div>
    <div class="flex-column align-self-center cols-3">
      <NuxtLink to="/#features"
        class="max-md:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-green">Features
      </NuxtLink>
      <NuxtLink to="/#pricing"
        class="max-md:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-green">Pricing
      </NuxtLink>
      <NuxtLink to="/support#faqs"
        class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-green">FAQs
      </NuxtLink>
      <NuxtLink to="/support"
        class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-green">Contact Us
      </NuxtLink>
      <NuxtLink to="/blogs" class="max-md:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-green">
        Blogs
      </NuxtLink>
      <button class="bg-servcy-black border-servcy-wheat rounded p-2" style="border-style: solid;">
        <a href="https://web.servcy.com" target="_blank"
          class="font-castoro font-bold !text-servcy-cream hover:!text-servcy-wheat">Get Started</a></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>