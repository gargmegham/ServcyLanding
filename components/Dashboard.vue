<template>
    <section class="pb-[10vh]" id="dashboard">
        <div class="flex flex-col items-center justify-between text-center">
            <div>
                <div
                    class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
                    Workspace dashboard<br />
                    that keeps you updated
                </div>
                <div
                    class="mt-6 text-lg font-semibold text-servcy-wheat md:text-xl">
                    Get a quick overview of your workspace and stay updated with
                    the latest activities.<br />See the tasks assigned to you,
                    overdue tasks, and the tasks you recently completed.
                </div>
            </div>
        </div>
        <div class="mt-16">
            <img
                src="/shots/dashboard.svg"
                alt="dashboard-image"
                width="100%"
                height="100%" />
        </div>
    </section>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>
