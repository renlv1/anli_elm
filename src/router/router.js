import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
const router = new Router({
    /*linkActiveClass: 'is-active',*/
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            /*component: () => import('../views/login.vue')*/
            component: resolve => require(['../views/login.vue'], resolve)
        },
        
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue')
        }
    ]
})
export default router
