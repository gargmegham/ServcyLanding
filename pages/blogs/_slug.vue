<template>
  <article class="pa-16">
    <nuxt-content class="dark--text" :document="theBlog" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const theBlog = await $content("blogs", params.slug).fetch();
    return { theBlog };
  },
};
</script>
