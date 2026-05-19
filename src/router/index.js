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
    {
        path : '/admin/quan-ly-danh-muc',
        component: ()=>import('../components/Admin/DanhMuc/index.vue')
    },
    {
        path : '/admin/ban',
        component: ()=>import('../components/Admin/Ban/index.vue')
    },
    {
        path : '/admin/khu-vuc-ban',
        component: ()=>import('../components/Admin/KhuVucBan/index.vue')
    },
    {
        path : '/admin/cong-thuc-mon',
        component: ()=>import('../components/Admin/CongThucMon/index.vue')
    },
    {
        path : '/admin/nguyen-lieu',
        component: ()=>import('../components/Admin/NguyenLieu/index.vue')
    },
    {
        path : '/admin/ca-lam-viec',
        component: ()=>import('../components/Admin/CaLamViec/index.vue')
    },
    {
        path : '/admin/phan-cong-ca-lam',
        component: ()=>import('../components/Admin/PhanCongCaLam/index.vue')
    },
    {
        path : '/admin/hoa-don',
        component: ()=>import('../components/Admin/HoaDon/index.vue')
    },
    {
        path : '/admin/voucher',
        component: ()=>import('../components/Admin/Voucher/index.vue')
    },
    {
        path : '/admin/phieu-nhap-kho',
        component: ()=>import('../components/Admin/PhieuNhapKho/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router