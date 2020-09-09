export default {
  name: 'ElContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    direction: {
      type: String,
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      }
      if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vNode) => {
          const tag = vNode.componentOptions && vNode.componentOptions.tag;
          return tag === 'el-header' || tag === 'el-footer';
        }) : false;
    },
  },
  render(h) {
    return h(this.tag, {
      class: ['el-container', this.isVertical ? 'is-vertical' : ''],
    }, this.$slots.default);
  },
};
