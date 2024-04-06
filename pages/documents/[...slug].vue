<script lang="ts" setup>
const { slug } = useRoute().params
</script>

<template>
    <article class="rounded-2xl bg-white">
        <ContentDoc :path="`/documents/${slug}`" v-slot="{ doc }">
            <div class="content mt-4 p-5">
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>
    </article>
</template>

<style>
.content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 20px;
    }

    max-width: 850px !important;
}
.content a {
    text-decoration: underline;
    color: #d1bfae !important;
}
</style>
