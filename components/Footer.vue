<template>
    <footer
        class="bg-servcy-green px-[5%] py-[20px] sm:flex sm:justify-between">
        <div class="text-lg text-servcy-cream max-sm:text-center">
            © 2024 Servcy. All Rights Reserved.
        </div>
        <div class="max-sm:mt-4 max-sm:flex max-sm:justify-center">
            <NuxtLink class="mr-4" to="/documents/privacy-policy">
                <img
                    src="@/assets/icons/documents.svg"
                    alt="privacy-policy"
                    class="mr-2 inline h-[20px]" />
                <span
                    class="text-xs text-servcy-cream hover:text-servcy-wheat md:text-sm"
                    >Privacy Policy</span
                >
            </NuxtLink>
            <NuxtLink class="mr-4" to="/documents/terms-and-conditions">
                <img
                    src="@/assets/icons/documents.svg"
                    alt="terms"
                    class="mr-2 inline h-[20px]" />
                <span
                    class="text-xs text-servcy-cream hover:text-servcy-wheat md:text-sm"
                    >Terms & Conditions</span
                >
            </NuxtLink>
            <NuxtLink to="/documents/refund-and-cancellation-policy">
                <img
                    src="@/assets/icons/documents.svg"
                    alt="refund-policy"
                    class="mr-2 inline h-[20px]" />
                <span
                    class="text-xs text-servcy-cream hover:text-servcy-wheat md:text-sm"
                    >Refund Policy</span
                >
            </NuxtLink>
        </div>
    </footer>
</template>
