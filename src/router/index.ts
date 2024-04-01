import { createRouter,  createWebHistory,createWebHashHistory, } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Zl from '@/views/home/options/zl/Zl.vue'
import Zg from '@/views/home/options/zg/Zg.vue'
import Zz from '@/views/home/options/zz/Zz.vue'
import User from '@/views/home/options/user/User.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'/zg',
          name:'zg',
          component:Zg
        },
        {
          path:'/zl',
          name:'zl',
          component:Zl
        },
        {
          path:'/zz',
          name:'zz',
          component:Zz
        },
        {
          path:'/user',
          name:'user',
          component:User
        },
       
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

// router.beforeEach((to, from) => {
//   if (to.path !== "/logo") {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       return "/logo";
//     }
//   }
//   return;
// });

export default router
