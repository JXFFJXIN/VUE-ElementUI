export default {
  // name属性会被Vue.component作为参数进行导入
  name: 'ElRow', // 子组件可以通过$parent.$option.name获取
  props: {
    // 进行gutter变量的注册和校验
    // 需要将gutter传递给子组件el-col进行相关设置
    gutter: {
      type: Number,
      default: 0,
    },
    // 进行type变量的注册和校验
    type: String,
    // 进行justify变量的注册和校验，以及函数校验validator
    justify: {
      type: String,
      default: 'start',
      // 规定数值
      validator: (val) => ['start', 'end', 'center', 'space-between', 'space-around'].includes(val),
    },
    // 进行align变量的注册和校验
    align: {
      type: String,
      default: 'top',
      // 规定数值
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
    },
    // 注册并校验tag变量
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginRight = `${-this.gutter / 2}px`;
        style.marginLeft = style.marginRight;
      }
      return style;
    },
  },
  // 编写渲染函数render，参数h，导出h()函数
  // h函数参数包括，标签名称tag，标签属性{}以及子元素children
  // $slot可以获取插槽
  render(h) {
    return h(this.tag, {
      style: this.style,
      class: [
        'el-row',
        {
          'el-row--flex': this.type === 'flex',
        },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`,
      ],
    }, this.$slots.default);
  },
};
