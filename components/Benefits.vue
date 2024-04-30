<template>
    <section class="pb-[10vh]" id="benefits">
        <div class="flex flex-col items-center justify-between text-center">
            <div>
                <div
                    class="font-axiforma text-4xl font-extrabold text-servcy-cream md:text-5xl">
                    Eliminate the excess,<br />
                    maximize the impact
                </div>
                <div
                    class="mt-6 text-lg font-semibold text-servcy-wheat md:text-xl">
                    Engineered for efficiency, insights and ease of use.<br />
                    Enjoy custom analytics, keyboard shortcuts, and more.
                </div>
            </div>
        </div>
        <div class="mt-16 grid grid-cols-3 gap-4 px-[10%]">
            <div class="servcy-benefits col-span-2 h-[400px]">
                <div class="servcy-keyboard">
                    <img
                        src="/shots/shortcuts.svg"
                        alt="shortcuts-image"
                        width="100%"
                        height="100%" />
                </div>
                <div class="servcy-command-group my-10 flex">
                    <button
                        v-for="shortcut in shortcuts"
                        :key="shortcut.keys"
                        class="servcy-command rounded"
                        :data-active="shortcut.active">
                        <span class="rounded text-servcy-cream">{{
                            shortcut.keys
                        }}</span>
                        <div class="truncate text-xs text-servcy-cream">
                            {{ shortcut.description }}
                        </div>
                    </button>
                </div>
                <h3
                    class="font-axiforma text-xl font-extrabold text-servcy-cream md:text-2xl">
                    Built for your keyboard
                </h3>
                <span
                    class="font-axiforma mt-3 text-sm font-semibold text-servcy-wheat md:text-lg"
                    >Fly through your tasks with rapid-fire keyboard
                    shortcuts<br />for everything. Literally everything.</span
                >
            </div>
            <div class="servcy-benefits h-[400px]">
                <div class="sc-ee6c2df2-22 ecA-DTS">
                    <img src="@/assets/icons/bolt.svg" alt="bolt" />
                </div>
                <h3
                    class="font-axiforma text-xl font-extrabold text-servcy-cream md:text-2xl">
                    Custom Analytics
                </h3>
                <span
                    class="font-axiforma mt-3 text-sm font-semibold text-servcy-wheat md:text-lg"
                    >Analytics that are tailored to your workflow. Export as csv
                    and make data-driven decisions.
                </span>
            </div>
            <div class="col-span-3">
                <img
                    src="/shots/analytics.svg"
                    alt="hero-image"
                    width="100%"
                    height="100%" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Benefits",
    data() {
        return {
            shortcuts: [
                { keys: "⌘K", description: "Open command menu" },
                { keys: "P", description: "Create project", active: true },
                { keys: "C", description: "Create issue" },
                { keys: "Q", description: "Create cycle" },
                { keys: "M", description: "Create module" },
                { keys: "V", description: "Create view" },
                { keys: "D", description: "Create page" },
                { keys: "Delete", description: "Bulk delete issues" },
                { keys: "H", description: "Open shortcuts guide" },
                {
                    keys: "⌘C",
                    description: "Copy issue URL from the issue details page"
                }
            ]
        }
    }
}
</script>

<style scoped>
.servcy-benefits {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    overflow: hidden;
    min-height: 480px;
    border-radius: 48px;
    padding: 56px 24px;
    position: relative;
    background: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.05) 100%
    );
}
.servcy-keyboard {
    width: 100%;
    height: auto;
    margin-top: -64px;
    mask-image: linear-gradient(
        transparent 0%,
        rgba(0, 0, 0, 0.57) 33.98%,
        black 100%
    );
}
.servcy-command-group {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 8px;
    max-width: 100%;
    scroll-snap-type: x mandatory;
    mask-image: linear-gradient(
        to right,
        transparent,
        black 40%,
        black calc(60%),
        transparent 100%
    );
    margin: 32px 0px;
    scrollbar-width: none !important;
}
.servcy-command-group .servcy-command:not([data-active="true"]) {
    opacity: 0.6;
}
.servcy-command-group .servcy-command {
    gap: 0px;
    backdrop-filter: none;
    scroll-snap-align: center;
    transition: opacity 120ms ease 0s;
}
.servcy-command {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    backdrop-filter: blur(12px);
    font-size: 13px;
    font-weight: 500;
    line-height: 28px;
    padding: 0px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.05);
    border-image: initial;
    white-space: nowrap;
    transition:
        background 260ms ease 0s,
        width;
}
.servcy-command > span:first-child {
    margin-left: -8px;
    margin-right: 8px;
}
.servcy-command > span {
    background: rgba(255, 255, 255, 0.05);
    height: 20px;
    padding: 0px 8px;
    transition: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
</style>
