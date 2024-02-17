<template>
  <section id="unified-inbox" class="py-[10vh] px-[5%] grid gap-4 items-center grid-cols-2 max-sm:grid-cols-1">
    <div class="text-left">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Magic starts with <br />an aggregated inbox
      </div>
      <ul class="list-disc text-servcy-wheat text-lg">
        <li class="mt-3">
          See & reply to all your emails, messages, notifications, and comments from one place.
        </li>
        <li class="mt-3">
          Use AI to prioritize and respond to the most important messages first.
        </li>
        <li class="mt-3">
          Connect your favorite tools and save time today.
        </li>
        <li class="mt-3">
          Convert your inbox items into tasks, calendar events, notes, or reminders.
        </li>
      </ul>
    </div>
    <div class="max-sm:hidden p-16">
      <img src="@/assets/icons/unified-inbox.svg" alt="unified-inbox" class="mt-6" />
    </div>
  </section>
</template>

<script>
export default {
  name: "UnifiedInbox",
};
</script>