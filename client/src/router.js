import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import ('./views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import ('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('./views/Login.vue'),
      beforeEnter(to, from, next) {
        // console.log(store.getters.currentUserGetter);
        next();
      },
      beforeRouteLeave (to, from, next) {
        console.log('before login leave');
        console.log(Router)
        next()
      }
      
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import ('./views/Profile.vue'),
      beforeEnter(to, from, next) {
        console.log('before enter profile.');
        // console.log(store.getters.currentUserGetter);
        next();
      }
    }
  ]
})
