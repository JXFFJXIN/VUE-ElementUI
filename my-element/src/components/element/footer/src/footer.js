export default {
  name: 'ElFooter',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    height: {
      type: Number,
      default: 60,
    },
  },
  render(h) {
    return h(this.tag, {
      class: 'el-footer',
      style: {
        height: `${this.height}px`,
      },
    }, this.$slots.default);
  },
};
