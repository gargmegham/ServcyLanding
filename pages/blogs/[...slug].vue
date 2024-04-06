<script lang="ts" setup>
const { slug } = useRoute().params
</script>

<template>
  <article class="servcy-blog min-h-screen flex justify-center bg-servcy-green px-[10%] pb-10 pt-[10vh] text-servcy-cream">
    <ContentDoc :path="`/blogs/${slug}`" v-slot="{ doc }">
      <div class="content mt-4 p-5">
        <ContentRendererMarkdown :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>

<style>
.servcy-blog .content {
  h1 {
    @apply text-3xl font-bold;
    @apply text-servcy-wheat;
  }

  h2 {
    @apply text-2xl font-bold;
  }

  h3 {
    @apply text-xl font-bold;
  }

  h4 {
    @apply text-lg font-bold;
  }

  h5 {
    @apply text-base font-bold;
  }

  a {
    text-decoration: underline;
    color: #d1bfae !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  span,
  div,
  pre,
  blockquote,
  table {
    margin-bottom: 20px;
  }
  ol,
  ul {
    li {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
  max-width: 850px !important;
}
</style>