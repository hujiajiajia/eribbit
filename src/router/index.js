import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

]
// vue2.0 new VueRouter({})
// vue3.0 createRouter({})
const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
