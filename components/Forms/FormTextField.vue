<template>
  <form class="newsletter-form">
    <input
      id="cta-input"
      v-model="input"
      :type="inputType"
      :placeholder="placeholder"
    />
    <v-progress-circular
      v-if="loading"
      class="mr-5"
      indeterminate
      color="success"
      size="20"
    />
    <button v-else id="cta-button" @click="submit" :disabled="!inputValid">
      <span id="cta-span">{{ buttonText }}</span>
    </button>
  </form>
</template>

<script>
export default {
  name: "FormTextField",
  props: ["loading", "buttonText", "inputType", "placeholder"],
  emits: ["submit", "update:input"],
  data() {
    return {
      input: "",
    };
  },
  watch: {
    input(val) {
      this.$emit("update:input", val);
    },
  },
  computed: {
    inputValid() {
      var validRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.inputType === "text" || !!this.input.match(validRegex);
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$emit("submit", this.input);
    },
  },
};
</script>

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
