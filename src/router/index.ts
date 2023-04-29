import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/auth'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/Dashboard/index.vue'),
      // meta: { requireLogin: true }
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/Explore/index.vue'),
      meta: { requireLogin: true }
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/Practice/index.vue'),
      meta: { requireLogin: true }
    },
    {
      path: '/vocabulary',
      name: 'vocabulary',
      component: () => import('../views/Vocabulary/index.vue'),
      meta: { requireLogin: true, layout: () => import('@/layouts/loginLayout.vue') }
    },
    {
      path: '/document',
      name: 'document',
      component: () => import('../views/Documents/index.vue'),
      meta: { requireLogin: true, layout: () => import('@/layouts/loginLayout.vue') }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/index.vue'),
      meta: {
        layout: () => import('@/layouts/loginLayout.vue')
      }
    },
    {
      path: '/token-gg',
      name: 'token-gg',
      component: () => import('../views/Login/token.vue')
    },
  ]
})  

// router.beforeEach(async (to, from, next) => {
    // const storeAuth = useAuthStore();

    // let cookie = cookies.get('access_token');
    // console.log(cookie, 'cooloe');

    // if(cookie) {
    //   let auth = await storeAuth.checkAuth({
    //     'access_token': cookie
    //   });
    // }
    // if(to.meta.requireLogin && !storeAuth.isLogined) next({ name: 'login' })
    // else next()
    
// })


export default router
