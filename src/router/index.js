import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/admin/quan-ly-san-pham',
        component: ()=>import('../components/Admin/QuanLySanPham/index.vue')
    },
    {
        path : '/admin/quan-ly-chuc-vu',
        component: ()=>import('../components/Admin/QuanLyChucVu/index.vue')
    },
    {
        path : '/admin/nha-cung-cap',
        component: ()=>import('../components/Admin/NhaCungCap/index.vue')
    },
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/Admin/KhachHang/index.vue')
    },
    {
        path : '/admin/khu-vuc',
        component: ()=>import('../components/Admin/KhuVuc/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router