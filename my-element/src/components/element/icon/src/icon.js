export default {
  name: 'ElIcon',
  props: {
    name: String,
    tag: {
      type: String,
      default: 'i',
    },
  },
  render(h) {
    return h(this.tag, {
      class: `el-icon-${this.name}`,
    }, this.$slots.default);
  },
};
