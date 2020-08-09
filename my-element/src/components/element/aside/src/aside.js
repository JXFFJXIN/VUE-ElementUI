export default {
  name: 'ElAside',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h) {
    return h(this.tag, {
      class: 'el-aside',
    }, this.$slots.default);
  },
};
