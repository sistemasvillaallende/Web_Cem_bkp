/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Cementerio/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Cementerio.vue'),

    },
    {
        path: '/Home',
        name: 'Home/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue'),

    }, {
        path: '/EditBadec/:guid',
        name: 'EditBadec/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/EditBadec.vue'),

    }, {
        path: '/NvoBadec/',
        name: 'NvoBadec/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/NvoBadec.vue'),

    },
    {
        path: '/Difunto/',
        name: 'Difunto/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/Difunto.vue'),

    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})
export default router