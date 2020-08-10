export default {
  name: 'ElAside',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: {
      type: String,
      default: 300,
    },
  },
  render(h) {
    return h(this.tag, {
      class: 'el-aside',
      style: {
        width: `${this.width}px`,
      },
    }, this.$slots.default);
  },
};
