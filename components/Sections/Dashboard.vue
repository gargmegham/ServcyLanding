<template>
  <section class="pb-[10vh]" id="dashboard">
    <div class="flex flex-col justify-between items-center text-center">
      <div>
        <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
          Workspace dashboard<br />
          that keeps you updated
        </div>
        <div class="font-semibold md:text-xl text-lg text-servcy-wheat mt-6">
          Get a quick overview of your workspace and stay updated with the
          latest activities.<br />See the tasks assigned to you, overdue tasks,
          and the tasks you recently completed.
        </div>
      </div>
    </div>
    <div class="mt-16">
      <img
        src="/shots/dashboard.svg"
        alt="dashboard-image"
        width="100%"
        height="100%"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
