<template>
    <section id="costing" class="pb-[10vh]">
        <div class="flex flex-col items-center justify-between text-center">
            <div>
                <div
                    class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                    Project Cost Analysis<br />Accurate, Fast and Easy
                </div>
                <div
                    class="mt-6 px-20 text-base font-semibold text-servcy-wheat max-md:text-left md:text-xl">
                    By assigning each member an hourly rate or a per project
                    rate, you get better insights into the cost of project.<br />
                    Adding other one-time or recurring costs like software
                    licenses, asset costs etc. helps you gain visibility into
                    project cost.
                </div>
            </div>
        </div>
        <div class="mt-16 flex justify-center">
            <img
                src="/shots/costing.svg"
                alt="costing-image"
                width="80%"
                height="80%" />
        </div>
    </section>
</template>

<script>
export default {
    name: "Budgeting"
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
