// 导入组件\
import Row from './row';
import Col from './col';
import Container from './container';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Aside from './aside';
import Icon from './icon';
import Button from './button';
// 收纳组件
const components = [
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Button,
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
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Button,
};
// 为了配合库的常规使用2基础导出Row和Col组件
export {
  install,
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Icon,
  Button,
};
