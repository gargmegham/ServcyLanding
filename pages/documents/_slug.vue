<template>
  <nuxt-content
    class="mx-auto px-[5%] pt-[12vh] pb-[8vh] text-servcy-cream font-normal"
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

.nuxt-content a {
  text-decoration: underline;
  color: #d1bfae !important;
}
</style>
