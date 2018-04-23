<template>
  <div>
  </div>
</template>

<script>
import markdownIt from "markdown-it";

export default {
  props: {
    content: {
      default: "",
      type: String
    },
    inline: {
      default: false,
      type: Boolean
    }
  },

  mounted() {
    var md = new markdownIt();
    var result;
    if (this.inline) {
      result = md.renderInline(this.content);
    } else {
      result = md.render(this.content);
    }
    this.$el.innerHTML = result;
  }
};
</script>

<style>

</style>