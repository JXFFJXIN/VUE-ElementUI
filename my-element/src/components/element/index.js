// 导入组件\
import Row from './row';
import Col from './col';
// 收纳组件
const components = [
  Row,
  Col,
];
// 注册组件
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
// 为了配合库的常规使用1默认导出install
export default {
  install,
  Row,
  Col,
};
// 为了配合库的常规使用2基础导出Row和Col组件
export {
  install,
  Row,
  Col,
};
