export default {
  name: 'ElMain',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h) {
    return h(this.tag, {
      class: 'el-main',
    }, this.$slots.default);
  },
};
