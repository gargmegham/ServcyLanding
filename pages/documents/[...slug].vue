<script lang="ts" setup>
const { slug } = useRoute().params
</script>

<template>
    <article
        class="servcy-docs flex justify-center bg-servcy-green px-[10%] pb-10 pt-[10vh] text-servcy-cream">
        <ContentDoc :path="`/documents/${slug}`" v-slot="{ doc }">
            <div class="content mt-4 p-5">
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>
    </article>
</template>

<style>

.servcy-docs .content h1 {
    @apply text-3xl font-bold;
    @apply text-servcy-wheat;
}

.servcy-docs .content h2 {
    @apply text-2xl font-bold;
}

.servcy-docs .content h3 {
    @apply text-xl font-bold;
}

.servcy-docs .content h4 {
    @apply text-lg font-bold;
}

.servcy-docs .content h5 {
    @apply text-base font-bold;
}

.servcy-docs .content a {
    text-decoration: underline;
    color: #d1bfae !important;
}


.servcy-docs .content {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    pre,
    blockquote,
    table {
        margin-bottom: 20px;
    }

    br {
        margin-bottom: 12px;
    }


    max-width: 850px !important;
}</style>