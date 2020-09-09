// 导入Col的js部分
import Col from './src/col';
// 注册组件
Col.install = (Vue) => { Vue.component(Col.name, Col); };
// install方法：
// 将Vue作为第一个参数传入
// Vue.component方法：
// 利用install方法在全局注册组件,
// 第一个参数是组件的名字，
// 第二个参数是组件参数
// 导出组件
export default Col;
