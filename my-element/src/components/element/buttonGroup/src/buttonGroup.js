export default {
  name: 'ElButtonGroup',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h) {
    return h(
      this.tag, {
        class: 'el-button-group',
      },
      this.$slots.default,
    );
  },
};
