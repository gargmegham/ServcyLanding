<template>
    <section class="pb-[10vh] pt-[12vh]">
        <div
            class="grid min-h-[50vh] max-md:grid-cols-1 max-md:gap-y-10 md:my-20 md:grid-cols-2">
            <div class="flex flex-col space-y-10 max-md:text-center">
                <div class="flex w-full flex-col gap-y-6">
                    <h1
                        class="font-axiforma text-5xl font-extrabold text-servcy-cream md:text-6xl">
                        Continuous visibility over projects estimated and actual
                        profit.
                    </h1>
                    <h2
                        class="text-lg font-semibold text-servcy-wheat md:text-xl"
                        style="line-height: 1.8rem !important">
                        Hate it when your projects go over budget?<br />
                        With Servcy's ecosystem you will be able to predict
                        projects cost,<br />profit and timeline with higher
                        accuracy consistently.
                    </h2>
                </div>
                <form class="servcy-form max-md:!w-[100%]" autocomplete="off">
                    <input
                        id="servcy-input"
                        placeholder="name@company.com"
                        @change="input = $event.target.value" />
                    <button
                        id="servcy-button"
                        @click="redirectToLogin"
                        type="button"
                        :disabled="input === ''"
                        class="disabled:filter-grayscale-65 disabled:cursor-not-allowed disabled:opacity-50">
                        <span id="servcy-span">Get Started</span>
                    </button>
                </form>
                <div class="flex max-lg:hidden">
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
                    class="max-w-[500px]"
                    width="100%"
                    height="100%" />
            </div>
        </div>
        <div class="mt-16">
            <img
                src="/shots/kanban.svg"
                alt="hero-image"
                width="100%"
                height="100%" />
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<style scoped lang="scss">
.servcy-form {
    --primary: #032123;
    --input-placeholder: #7e84a3;
    --input-text: #7e84a3;
    --border-default: #e1e6f9;
    --background: #fff;
    --button-text: #ffffff;
    display: flex;
    align-items: center;
    width: 90%;
    background: var(--background);
    box-shadow: inset 0 0 0 var(--border-width, 1px)
        var(--border, var(--border-default));
    border-radius: 9px;
    padding-right: 4px;
    transition: box-shadow 0.25s;
    &:focus-within {
        --border-width: 1.5px;
    }
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
        width: 100%;
        flex-grow: 1;
        padding: 12px 12px 12px 16px;
        color: var(--input-text);
        font-weight: 400;
        &::placeholder {
            color: var(--input-placeholder);
        }
    }
    #servcy-button {
        --text-opacity: 1;
        --border-radius: 7px;
        position: relative;
        padding: 8px 0;
        min-width: 130px;
        text-align: center;
        font-weight: 600 !important;
        opacity: var(--button-opacity, 0.5);
        filter: var(--button-filter, grayscale(65%));
        color: var(--button-text);
        border-radius: var(--border-radius);
        transform: translateZ(0);
        transition:
            opacity 0.25s,
            filter 0.25s;
        -webkit-tap-highlight-color: transparent;
        &:not(.active) {
            background: var(--primary);
        }
        #servcy-span {
            display: block;
            position: relative;
            z-index: 4;
            opacity: var(--text-opacity);
        }
    }
}
</style>
