// 引入Row的JS部分
import Row from './src/row';
// 注册组件
Row.install = (Vue) => {
  Vue.component(Row.name, Row);
};
// 导出组件
export default Row;
