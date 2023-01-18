<template>
  <nuxt-content
    class="pa-16 mx-auto dark--text servcy-body"
    :document="document"
    tag="article"
  />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const document = await $content("documents", params.slug).fetch();
    return { document };
  },
};
</script>

<style lang="scss">
.nuxt-content {
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
</style>
