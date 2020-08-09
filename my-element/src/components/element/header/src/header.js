export default {
  name: 'ElHeader',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    height: {
      type: Number,
      default: '60px',
    },
  },
  render(h) {
    return h(this.tag, {
      class: 'el-header',
      style: this.height,
    }, this.$slots.default);
  },
};
