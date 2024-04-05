<template>
  <header
    class="flex py-3 justify-between px-[5%] fixed z-10 w-full rounded-b-lg h-[10vh] bg-servcy-green"
  >
    <div>
      <NuxtLink to="/"
        ><img
          src="@/static/logo.svg"
          alt="logo"
          class="vertical-align-middle h-full"
      /></NuxtLink>
    </div>
    <div class="align-self-center cols-3">
      <NuxtLink
        to="/support#faqs"
        class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat"
        >FAQs
      </NuxtLink>
      <NuxtLink
        to="/support"
        class="max-sm:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat"
        >Contact Us
      </NuxtLink>
      <NuxtLink
        to="/blogs"
        class="max-md:hidden font-castoro mr-6 font-bold !text-servcy-cream hover:!text-servcy-wheat"
      >
        Blogs
      </NuxtLink>
      <button
        class="bg-servcy-black border-servcy-wheat rounded p-2 servcy-wheat-shadow-right-bottom"
        style="border-style: solid"
      >
        <a
          href="https://web.servcy.com"
          target="_blank"
          class="font-bold !text-servcy-cream hover:!text-servcy-wheat"
          >Start free trial</a
        >
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
