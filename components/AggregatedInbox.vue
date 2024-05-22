<template>
    <section class="pb-[10vh]" id="unified-inbox">
        <div class="flex flex-col items-center justify-between text-center">
            <div>
                <div
                    class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl">
                    Experience the magic<br />of an aggregated inbox
                </div>
                <div
                    class="mt-6 px-20 text-base font-semibold text-servcy-wheat max-md:text-left md:text-xl">
                    See all your emails, messages, notifications, and comments
                    in one place.<br />Convert your inbox items into tasks and
                    save time.
                </div>
            </div>
        </div>
        <div class="mt-16 flex justify-center">
            <img
                src="/shots/inbox.svg"
                alt="inbox-image"
                width="80%"
                height="80%" />
        </div>
    </section>
</template>

<script>
export default {
    name: "AggregatedInbox"
}
</script>
