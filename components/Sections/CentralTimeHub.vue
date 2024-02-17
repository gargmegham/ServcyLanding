<template>
  <section id="central-time-hub" class="py-[10vh] px-[5%] grid gap-8 items-center grid-cols-2 max-sm:grid-cols-1">
    <div class="text-left">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Analyze all your tracked time in one place
      </div>
      <ul class="list-disc text-servcy-wheat text-lg">
        <li class="mt-3">
          Import tracked time from your favorite time tracking tools.
        </li>
        <li class="mt-3">
          Use AI to categorize your time and understand how you spend it.
        </li>
        <li class="mt-3">
          Tag time entries for easy invoicing and client reporting.
        </li>
      </ul>
    </div>
    <div class="max-sm:hidden p-16">
      <img src="@/assets/icons/central-time-hub.svg" alt="central-time-hub" class="mt-6" />
    </div>
  </section>
</template>

<script>
export default {
  name: "CentralTimeHub",
};
</script>