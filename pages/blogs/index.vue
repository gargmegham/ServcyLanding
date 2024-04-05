<template>
  <div class="px-[5%] py-[8vh] bg-servcy-green">
    <div
      class="flex flex-row justify-space-between text-servcy-cream h-64 mt-16"
    >
      <v-col lg="8" md="8" xs="12" sm="12" xl="8" cols="12">
        <div class="md:text-6xl text-5xl font-axiforma font-extrabold">
          Welcome to Servcy Academy
        </div>
        <div class="mt-6 md:text-xl text-lg font-semibold text-servcy-wheat">
          An interactive suite of blog posts for helping you become more
          productive, and to help you grow your freelance business.
        </div>
        <FormTextField
          class="mt-10"
          :loading="false"
          @update:input="searchTerm = $event"
          buttonText="Search!"
          input-type="text"
          placeholder="Search for a blog post..."
        />
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.mdAndDown"
        lg="4"
        md="4"
        xl="4"
        cols="4"
      >
        <img
          src="@/assets/icons/all-blogs.svg"
          alt="blog home"
          class="ma-2 h-full"
        />
      </v-col>
    </div>
    <div
      class="py-10 mt-10 xs:grid-cols-1 grid gap-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
    >
      <div v-for="(blogPost, index) of filteredPosts" :key="index" class="ma-4">
        <v-sheet
          class="pa-4 blog-card servcy-card-bg rounded-xl h-full"
          elevation="2"
        >
          <NuxtLink
            :to="{ path: blogPost.path }"
            :key="blogPost._id"
            class="blog-link"
          >
            <div class="flex flex-row justify-space-between align-start">
              <div class="flex-column mr-4">
                <v-icon color="#2B3232" large
                  >mdi-book-open-page-variant-outline</v-icon
                >
              </div>
              <div
                class="flex-column blog-title mb-8 text-lg font-bold text-servcy-black"
              >
                {{ blogPost.title }}
              </div>
            </div>
            <div class="text-sm text-servcy-black">
              {{ blogPost.description }}
            </div>
          </NuxtLink>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import FormTextField from "@/components/Forms/FormTextField.vue";

export default {
  name: "AllBlogs",
  components: {
    FormTextField,
  },
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
</style>
