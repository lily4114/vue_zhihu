// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

//引入css
import './assets/css/reset.css';
import './assets/css/global.css';

//自定义组件
import myLoading from './components/loading';
//注册全局组件
Vue.component('my-loading',myLoading);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
