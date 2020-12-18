// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',           // vue实例， 全局作用范围
  router,               // 注册路由对象
  components: { App },  // 注册 App 组件
  template: '<App/>'
})
