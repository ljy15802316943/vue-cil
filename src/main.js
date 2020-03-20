// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 配置axios
import axios from './assets/api';
Vue.prototype.$axios = axios; //绑定到vue原型

// 弹幕插件
import { vueBaberrage } from 'vue-baberrage'
Vue.use(vueBaberrage);

import store from './vuex/store'  

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
