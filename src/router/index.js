import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/admin/quan-ly-chuc-vu',
        component: ()=>import('../components/Admin/QuanLyChucVu/index.vue')
},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router