<template>
    <section id="cycles-modules" class="pb-[10vh]">
        <div class="flex flex-col items-center justify-between text-center">
            <div>
                <div
                    class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
                    Time tracking<br />that works for you
                </div>
                <div
                    class="mt-6 text-lg font-semibold text-servcy-wheat md:text-xl">
                    Tracking time for issues helps you understand the time spent
                    vs the estimated time.<br />
                    This helps you to improve your time estimates and make
                    better decisions.
                </div>
            </div>
        </div>
        <div class="mt-16">
            <img
                src="/shots/timesheet.svg"
                alt="timesheet-image"
                width="100%"
                height="100%" />
        </div>
    </section>
</template>

<script>
export default {
    name: "Timesheet"
}
</script>

<style scoped>
#cyc-mod-3 {
    mask-image: linear-gradient(
        to left,
        transparent -10%,
        rgba(0, 0, 0, 0.57) 33.98%,
        black 100%
    );
}
#cyc-mod-2 {
    mask-image: linear-gradient(
        to right,
        transparent -10%,
        rgba(0, 0, 0, 0.57) 33.98%,
        black 100%
    );
}
</style>
