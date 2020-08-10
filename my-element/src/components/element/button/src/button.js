export default {
  name: 'ElButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'submit', 'reset'].includes(val),
    },
    type: {
      type: String,
      default: 'normal',
    },
    size: {
      type: String,
      default: 'medium',
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
    },
    autofocus: Boolean,
  },
  render(h) {
    return h(this.tag, {
      class: [
        'el-button',
        `el-button--${this.size}`,
        `el-button--${this.type}`,
        this.plain ? 'is-plain' : '',
        this.round ? 'is-round' : '',
        this.circle ? 'is-circle' : '',
        this.disabled ? 'is-disabled' : '',
        this.loading ? 'is-loading' : '',
      ],
      autofocus: this.autofocus,
    }, [
      this.icon && !this.loading ? h('i', {
        class: this.icon,
      }, null) : h('i', {
        class: 'el-icon-loading',
      }, null),
      this.$slots.default ? h('span', this.$slots.default) : null,
    ]);
  },
};
