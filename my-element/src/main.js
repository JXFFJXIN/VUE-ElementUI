// 导入组件入口，并且在App中使用
import Vue from 'vue';
import Element from './components/element';
import App from './App.vue';
// 导入样式
import '@/assets/theme-chalk/index.scss';
// Vue使用组件
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
