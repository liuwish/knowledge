// src/router/index.js

import {createRouter, createWebHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({ 
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/Home',
      name: 'HomePage',
      component: defineAsyncComponent(() => import(`../components/Home.vue`)),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/About',
      name: 'AboutPage',
      component: defineAsyncComponent(() => import(`../components/About.vue`)),
      meta: {
        title: '列表页',
      },
    },
    // {
    //   path: '/*',
    //   redirect: '/',
    // },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

// router.afterEach((to, from)=>{
//   // console.log(to, from)
//   console.log('afterEach')
// })

export default router