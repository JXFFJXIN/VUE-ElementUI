export default {
  name: 'ElFooter',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h) {
    return h(this.tag, {
      class: 'el-footer',
    }, this.$slots.default);
  },
};
