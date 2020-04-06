import Vue from 'vue'
import Router from 'vue-router'
import Barrage from '../pages/barrage.vue'
import Fengmi from '@/components/fengmi.vue'

Vue.use(Router)

export default new Router({
  mode: "history",   // 删除浏览器里面的 /#
  routes: [
    // {
    //   path: '/',
    //   name: 'Barrage',
    //   component: Barrage   // 菜单列表
    // },
    {
      path: '/',
      name: 'Fengmi',
      component: Fengmi   // 风迷大师
    }
  ]
})
