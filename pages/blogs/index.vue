<template>
  <div class="pt-10 s-page-padding-x">
    <div class="d-flex flex-row justify-space-between">
      <div class="flex-column">
        <div class="servcy-headline-small-font font-castoro s-bold black--text">
          Welcome to Servcy Academy
        </div>
        <div class="servcy-sub-headline-small-font mt-6 s-regular dark--text">
          An interactive suite of blog posts for helping you become more
          productive, and to help you grow your freelance business.
        </div>
        <FormTextField
          class="mt-10"
          :loading="false"
          @update:input="searchTerm = $event"
          buttonText="Search!"
          input-type="text"
          placeholder="Search for a blog post"
        />
      </div>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="flex-column">
        <img
          src="@/assets/icons/all-blogs.svg"
          alt="blog home"
          width="700"
          height="400"
          class="ma-2"
        />
      </div>
    </div>
    <div
      :class="[
        'pb-10 mt-10 d-flex flex-row flex-wrap',
        $vuetify.breakpoint.smAndDown ? 'justify-space-around' : '',
      ]"
    >
      <div
        v-for="(blogPost, index) of filteredPosts"
        :key="index"
        class="flex-column ma-4"
      >
        <v-sheet
          class="pa-4 blog-card rounded-xl"
          color="white"
          width="350px"
          elevation="2"
          height="400px"
        >
          <NuxtLink
            :to="{ path: blogPost.path }"
            :key="blogPost._id"
            class="blog-link"
          >
            <div class="d-flex flex-row justify-space-between align-start">
              <div class="flex-column mr-4">
                <v-icon color="silver" large
                  >mdi-book-open-page-variant-outline</v-icon
                >
              </div>
              <div
                class="flex-column blog-title mb-8 dark--text s-heading s-bold"
              >
                {{ blogPost.title }}
              </div>
            </div>
            <div class="blog-desc dark--text s-sub-heading s-regular">
              {{ blogPost.description }}
            </div></NuxtLink
          >
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllBlogs",
  data() {
    return {
      searchTerm: "",
      blogPosts: [],
    };
  },
  computed: {
    filteredPosts() {
      const res = this.blogPosts.filter((blogPost) => {
        return blogPost.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
      return res;
    },
  },
  async fetch() {
    this.blogPosts = await this.$content("blogs")
      .only(["title", "description", "path"])
      .sortBy("createdAt", "desc")
      .fetch();
  },
};
</script>

<style scoped>
.blog-link {
  text-decoration: none;
}
.blog-card {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.6s cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition: 0.6s cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
.blog-card:hover,
.blog-card:focus,
.blog-card:active {
  transform: scale(1.1);
}
.blog-title {
  height: 100px;
}
.blog-desc {
  height: 170px;
  overflow: scroll;
}
</style>
