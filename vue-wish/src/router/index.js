import {createRouter, createWebHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'
// 路由懒加载
// const getComponent = (name, component) => () =>
//     import (`@/${name}/${component}.vue`);

const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/Home',
      name: 'HomePage',
      component: defineAsyncComponent(() => import(`@/views/Home.vue`)),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/About',
      name: 'AboutPage',
      component:  defineAsyncComponent(() => import(`@/views/About.vue`)),
      meta: {
        title: '关于页',
      },
    },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
  console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

router.afterEach((to, from)=>{
  console.log(to, from)
  console.log('afterEach')
})

export default router