<template>
    <section id="cycles-modules" class="pb-[10vh]">
        <div class="flex flex-col items-center justify-between text-center">
            <div>
                <div
                    class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
                    Conquer with cycles<br />
                    Divide into modules
                </div>
                <div
                    class="mt-6 text-lg font-semibold text-servcy-wheat md:text-xl">
                    Cycles helps you minimize project risks through forward
                    planning so that software meets customer expectations.<br />Modules
                    enable grouping and organization of issues within a specific
                    time frame.
                </div>
            </div>
        </div>
        <div class="mt-16 grid grid-cols-6 grid-rows-2 gap-4">
            <div class="col-span-1 row-span-2 flex items-center justify-center">
                <img
                    src="/shots/cycles-modules-2.svg"
                    alt="Cycles and Modules 2"
                    id="cyc-mod-2"
                    width="100%"
                    height="100%" />
            </div>
            <div class="col-span-4 row-span-2 grid grid-rows-subgrid gap-4">
                <div>
                    <img
                        src="/shots/cycles-modules-1.svg"
                        alt="Cycles and Modules 1"
                        id="cyc-mod-1"
                        width="100%"
                        height="100%" />
                </div>
                <div>
                    <img
                        src="/shots/cycles-modules-4.svg"
                        alt="Cycles and Modules 4"
                        id="cyc-mod-4"
                        width="100%"
                        height="100%" />
                </div>
            </div>
            <div class="col-span-1 row-span-2 flex items-center justify-center">
                <img
                    src="/shots/cycles-modules-3.svg"
                    alt="Cycles and Modules 3"
                    id="cyc-mod-3"
                    width="100%"
                    height="100%" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CyclesAndModules"
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
