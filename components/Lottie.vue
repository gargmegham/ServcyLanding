<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: {
      type: String,
      required: false,
      default: "100%",
    },
    width: {
      type: String,
      required: false,
      default: "100%",
    },
    margins: {
      type: String,
      required: false,
      default: "auto",
    },
    paddings: {
      type: String,
      required: false,
      default: "auto",
    },
  },
  data() {
    return {
      anim: null,
      style: {
        width: this.width,
        height: this.height,
        overflow: "hidden",
        margin: this.margins,
        padding: this.paddings,
      },
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings,
    });
    this.$emit("animCreated", this.anim);
  },
};
</script>
