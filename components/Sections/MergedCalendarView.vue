<template>
  <section id="merged-calendar" class="py-[10vh] px-[5%] grid gap-8 items-center grid-cols-2 max-sm:grid-cols-1">
    <div class="text-left">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Merge your calendars and take control of your time
      </div>
      <ul class="list-disc text-servcy-wheat text-lg">
        <li class="mt-3">
          View all your calendars in one place and avoid double-booking.
        </li>
        <li class="mt-3">
          No need to set your availability manually, we do it for you. You can also customize it.
        </li>
        <li class="mt-3">
          Get a clear view of your day, week, and month to plan your time effectively.
        </li>
      </ul>
    </div>
    <div class="max-sm:hidden p-16">
      <img src="@/assets/icons/merged-calendar.svg" alt="merged-calendar" class="mt-6" />
    </div>
  </section>
</template>

<script>
export default {
  name: "MergedCalendarView",
};
</script>