<template>
  <div class="pt-10">
    <div class="d-flex flex-row justify-space-between">
      <div class="flex-column">
        <div
          class="servcy-headline-font font-castoro font-weight-bold black--text"
        >
          Welcome to Servcy Academy
        </div>
        <div
          class="servcy-sub-headline-font mt-6 font-weight-regular dark--text"
        >
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
          <v-progress-circular
            v-if="searching"
            class="mr-5"
            indeterminate
            color="success"
            size="20"
          />
          <button v-else id="cta-button" @click="search">
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
  </div>
</template>

<script>
export default {
  name: "AllBlogs",
  data() {
    return {
      searchTerm: "",
      searching: false,
    };
  },
  methods: {
    search(e) {
      e.preventDefault();
    },
  },
};
</script>

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
    font-size: 14px;
    line-height: 24px;
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
