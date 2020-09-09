export default {
  // name属性会被Vue.component作为参数进行导入
  name: 'ElCol',
  props: {
    tag: {
      // 注册并校验tag变量
      type: String,
      default: 'div',
    },
    span: {
      // 注册并校验span变量
      type: Number,
      default: 24,
    },
    offset: {
      // 注册并校验offset变量
      type: Number,
      default: 0,
    },
    push: {
      // 注册并校验push变量
      type: Number,
      default: 0,
    },
    pull: {
      // 注册并校验pull变量
      type: Number,
      default: 0,
    },
    // 注册并校验xs,sm,md,lg,xl变量
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    // 子组件可以通过$parent
    gutter() {
      // 通过this.$parent获取父级元素对象
      let parent = this.$parent;
      // 需要进行判断父级元素是否是el-row才能获取gutter
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      // 判断父级el-row元素是否具有gutter值，有的话是多少
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingRight = `${this.gutter / 2}px`;
        style.paddingLeft = style.paddingRight;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          // 判断组件是否含有特定属性
          classList.push(
            // 区分span和其他属性不一致的属性名
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });
      // 进行'xs','sm','md','lg','xl'分析数组或对象
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(
            `el-col-${size}-${this[size]}`,
          );
        } else if (typeof this[size] === 'object') {
          const props = this[size]; // 对应对象
          // Object.keys获取对象的键名
          Object.keys(props).forEach((prop) => {
            // 循环props的键名判断是否为span
            classList.push(
              prop === 'span'
                ? `el-col-${size}-${props[prop]}`
                : `el-col-${size}-${prop}-${props[prop]}`,
            );
          });
        }
      });
      return classList;
    },
  },
  // 编写渲染函数render，参数h，导出h()函数
  // h函数参数包括，标签名称tag，标签属性{}以及子元素children
  // $slot可以获取插槽
  render(h) {
    return h(
      this.tag, {
        class: ['el-col', this.classList],
        style: this.style,
      },
      this.$slots.default,
    );
  },
};
