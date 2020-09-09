export default {
  name: 'ElHeader',
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
      class: 'el-header',
      style: {
        height: `${this.height}px`,
      },
    }, this.$slots.default);
  },
};
