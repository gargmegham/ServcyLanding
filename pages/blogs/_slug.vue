<template>
  <nuxt-content class="pa-16 mx-auto px-[5%] text-servcy-black font-normal mt-[10vh]" :document="theBlog" tag="article" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const theBlog = await $content("blogs", params.slug).fetch();
    return { theBlog };
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
  color: #26542F !important;
}
</style>
