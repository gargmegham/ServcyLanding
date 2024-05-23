<template>
    <section class="pt-[10vh]">
        <div
            class="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-8 lg:mt-12 lg:grid-cols-2">
            <div class="space-y-8">
                <!-- headline -->
                <div
                    class="flex w-full flex-col gap-y-4 text-center lg:text-left">
                    <h1
                        class="font-axiforma text-3xl font-extrabold text-servcy-cream md:text-4xl lg:text-5xl">
                        Maximize your Agency's Profit. Track Estimated vs
                        Ongoing Cost in Real-Time.
                    </h1>
                    <div
                        class="space-y-2 text-base font-semibold text-servcy-wheat md:text-xl">
                        <h2>Love it when your projects are profitable?</h2>
                        <h2>
                            Servcy's ecosystem helps you stay on top of your
                            costs, timeline and deliverables.
                        </h2>
                    </div>
                </div>
                <!-- social-proof -->
                <div
                    class="flex items-center justify-center gap-x-2 px-4 md:px-0 lg:justify-normal">
                    <img
                        src="@/assets/icons/social-proof.svg"
                        alt="social-proof"
                        width="220px" />
                    <div class="py-1">
                        <div class="flex">
                            <img
                                src="@/assets/icons/star.svg"
                                alt="social-proof"
                                width="20px" />
                            <img
                                src="@/assets/icons/star.svg"
                                alt="social-proof"
                                width="20px" />
                            <img
                                src="@/assets/icons/star.svg"
                                alt="social-proof"
                                width="20px" />
                            <img
                                src="@/assets/icons/star.svg"
                                alt="social-proof"
                                width="20px" />
                            <img
                                src="@/assets/icons/star.svg"
                                alt="social-proof"
                                width="20px" />
                        </div>
                        <div class="text-xs text-servcy-cream">
                            Join 100+ profitable agencies
                        </div>
                    </div>
                </div>
                <!-- CTA -->
                <div class="flex w-full justify-center lg:justify-normal">
                    <form
                        class="servcy-form flex items-center rounded-lg bg-servcy-cream px-1"
                        autocomplete="off"
                        @submit="redirectToLogin">
                        <input
                            id="servcy-input"
                            placeholder="name@company.com"
                            class="text-servcy-black"
                            @change="input = $event.target.value" />
                        <button
                            id="servcy-button"
                            @click="redirectToLogin"
                            type="button"
                            :disabled="input === ''"
                            class="rounded-lg !bg-servcy-black p-2 text-servcy-cream hover:text-servcy-wheat disabled:cursor-not-allowed">
                            <span id="servcy-span" class="text-xs md:text-base"
                                >Try For Free</span
                            >
                        </button>
                    </form>
                </div>
                <!-- integration icon set -->
                <div
                    class="flex items-center justify-center max-md:hidden lg:justify-normal">
                    <img
                        class="mr-2"
                        src="@/assets/icons/integrate.svg"
                        alt="integrate-icon"
                        width="90"
                        height="100%" />
                    <div
                        class="flex h-[50px] !max-w-[450px] justify-between overflow-hidden">
                        <img
                            src="@/assets/icons/logos/figma-logo.svg"
                            alt="figma-icon"
                            class="mx-3 my-2 h-[40px] w-[40px]" />
                        <Icon
                            class="mx-3 my-2"
                            color="#F7F6FA"
                            size="40"
                            name="mdi:gmail" />
                        <img
                            src="@/assets/icons/logos/notion-logo.svg"
                            alt="notion-icon"
                            class="mx-3 my-2 h-[40px] w-[40px]" />
                        <Icon
                            class="mx-3 my-2"
                            color="#F7F6FA"
                            size="40"
                            name="mdi:microsoft-outlook" />
                        <Icon
                            name="mdi:slack"
                            class="mx-3 my-2"
                            color="#F7F6FA"
                            size="40" />
                        <Icon
                            class="mx-3 my-2"
                            color="#F7F6FA"
                            size="40"
                            name="uil:github" />
                    </div>
                    <img
                        src="@/assets/icons/more.svg"
                        alt="more-icon"
                        width="90"
                        height="100%"
                        class="ml-2" />
                </div>
            </div>
            <div class="flex items-center justify-center">
                <img
                    src="@/assets/icons/fly-wheel.svg"
                    alt="fly-wheel"
                    style="max-height: 530px !important"
                    width="100%"
                    height="100%" />
            </div>
        </div>
    </section>
</template>

<script setup>
const input = ref("")
const validateEmail = (email) => {
    return email.match(
        /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/
    )
}
const redirectToLogin = () => {
    const email = document.getElementById("servcy-input")
    if (!email.value) {
        alert("Please enter a valid email address.")
        return
    }
    if (!validateEmail(email.value)) {
        alert("Only workspace emails are allowed.")
        return
    }
    window.open(`https://web.servcy.com/login?email=${email.value}`, "_blank")
}
</script>

<style scoped lang="scss">
.servcy-form {
    --input-placeholder: #7e84a3;
    --border-default: #e1e6f9;
    box-shadow: inset 0 0 0 var(--border-width, 1px)
        var(--border, var(--border-default));
    width: 90%;
    #servcy-input,
    #servcy-button {
        background: none;
        outline: none;
        display: block;
        border: none;
        font-family: inherit;
        margin: 0;
    }
    #servcy-input {
        flex-grow: 1;
        padding: 12px 12px 12px 16px;
        &::placeholder {
            color: var(--input-placeholder);
        }
    }
    #servcy-button {
        position: relative;
        text-align: center;
        font-weight: 600 !important;
        #servcy-span {
            display: block;
            position: relative;
            z-index: 4;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
}
</style>
