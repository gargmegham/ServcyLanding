<template>
  <div class="pt-10">
    <div class="d-flex flex-row justify-space-between">
      <div class="flex-column">
        <div class="servcy-headline-font font-castoro s-bold black--text">
          Welcome to Servcy Academy
        </div>
        <div class="servcy-sub-headline-font mt-6 s-regular dark--text">
          An interactive suite of blog posts for helping you become more
          productive, and to help you grow your freelance business.
        </div>

        <!-- Email Form -->
        <form class="newsletter-form mt-10">
          <input
            id="cta-input"
            v-model="searchTerm"
            type="text"
            placeholder="Search for a blog post"
          />
          <button id="cta-button" @click="search">
            <span id="cta-span">Search</span>
          </button>
        </form>
      </div>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="flex-column">
        <img
          src="@/assets/icons/all-blogs.svg"
          alt="blog home"
          width="400"
          height="400"
          class="ma-2"
        />
      </div>
    </div>
    <div class="pb-10 mt-10 d-flex flex-row flex-wrap justify-space-around">
      <div
        v-for="(blogPost, index) of filteredPosts"
        :key="index"
        class="flex-column my-4"
      >
        <v-sheet
          class="pa-4 blog-card rounded-xl"
          color="white"
          width="350px"
          height="350px"
        >
          <NuxtLink :to="blogPost.path" class="blog-link">
            <div class="blog-title mb-8 dark--text s-heading s-bold">
              {{ blogPost.title }}
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
  methods: {
    search(e) {
      e.preventDefault();
    },
  },
  async fetch() {
    this.blogPosts = await this.$content("blogs")
      .only(["title", "description"])
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
  height: 80px;
}
.blog-desc {
  height: 170px;
  overflow: scroll;
}
</style>

<!-- For Email Form -->
<style scoped lang="scss">
.newsletter-form {
  --primary: #275efe;
  --input-placeholder: #7e84a3;
  --input-text: #7e84a3;
  --border-default: #e1e6f9;
  --background: #fff;
  --button-text: #ffffff;
  display: flex;
  align-items: center;
  width: 90%;
  background: var(--background);
  box-shadow: inset 0 0 0 var(--border-width, 1px)
    var(--border, var(--border-default));
  border-radius: 9px;
  padding-right: 4px;
  transition: box-shadow 0.25s;
  &:focus-within {
    --border-width: 1.5px;
  }
  #cta-input,
  #cta-button {
    background: none;
    outline: none;
    display: block;
    border: none;
    font-family: inherit;
    margin: 0;
  }
  #cta-input {
    width: 100%;
    flex-grow: 1;
    padding: 12px 12px 12px 16px;
    color: var(--input-text);
    font-weight: 400;
    &::placeholder {
      color: var(--input-placeholder);
    }
  }
  #cta-button {
    --text-opacity: 1;
    --border-radius: 7px;
    position: relative;
    padding: 8px 0;
    min-width: 130px;
    text-align: center;
    font-weight: 600 !important;
    opacity: var(--button-opacity, 0.5);
    filter: var(--button-filter, grayscale(65%));
    color: var(--button-text);
    border-radius: var(--border-radius);
    transform: translateZ(0);
    transition: opacity 0.25s, filter 0.25s;
    -webkit-tap-highlight-color: transparent;
    &:not(.active) {
      background: var(--primary);
    }
    #cta-span {
      display: block;
      position: relative;
      z-index: 4;
      opacity: var(--text-opacity);
    }
  }
}
</style>
