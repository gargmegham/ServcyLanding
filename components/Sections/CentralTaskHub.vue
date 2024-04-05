<template>
  <section
    id="central-task-hub"
    class="py-[10vh] px-[5%] grid gap-8 items-center grid-cols-2 max-sm:grid-cols-1"
  >
    <div class="text-left">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Manage all your tasks<br />
        in one place
      </div>
      <ul class="list-disc text-servcy-wheat text-lg">
        <li class="mt-3">
          Import tasks from all your favorite tools and manage them from one
          place.
        </li>
        <li class="mt-3">
          Use AI to prioritize, organize, and manage your tasks more
          efficiently.
        </li>
        <li class="mt-3">
          Planning your workday is now easier, block time on your calendar for
          your tasks.
        </li>
        <li class="mt-3">
          Provide your clients with a transparent view of your progress.
        </li>
      </ul>
    </div>
    <div class="max-sm:hidden p-16">
      <img
        src="@/assets/icons/central-task-hub.svg"
        alt="central-task-hub"
        class="mt-6"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "CentralTaskHub",
};
</script>
