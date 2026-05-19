<template>
    <div class="container">
        <div class="row">

            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Khách Hàng</h5>
                            <button class="btn btn-light" data-bs-toggle="modal"
                                data-bs-target="#quangBai1ThemMoi">+Thêm
                                mới</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="input-group d-flex mb-3">
                            <input v-model="tuKhoa" type="text" class="form-control"
                                placeholder="Tìm kiếm khách hàng...">
                            <button class="btn btn-primary">Tìm kiếm</button>
                        </div>
                        <div class="container">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-dark text-light">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Tên Khách Hàng</th>
                                        <th class="text-center">Email</th>
                                        <th class="text-center">Số Điện Thoại</th>
                                        <th class="text-center">Tình Trạng</th>
                                        <th class="text-center">Kích hoạt</th>
                                        <th class="text-center">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in locDanhSach()" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ho_va_ten }}</td>
                                            <td class="text-center">{{ value.email }}</td>
                                            <td class="text-center">{{ value.so_dien_thoai }}</td>
                                            <td>
                                                <span class="text-center badge w-100"
                                                    :class="value.tinh_trang == 1 ? 'bg-success' : 'bg-danger'">
                                                    {{ value.tinh_trang == 1 ? 'Hoạt động' : 'Không Hoạt Động' }}
                                                </span>

                                            </td>
                                            <td>
                                                <button class="btn btn-primary w-100" :class="value.kich_hoat == 1 ? 'btn-primary' :
                                                    (value.kich_hoat == 0 ? 'btn-danger' :
                                                        (value.tinh_trang == 1 ? 'btn-primary' :
                                                            'btn-danger'))">
                                                    {{ value.kich_hoat == 1 ? 'Đã kích hoạt' :
                                                        (value.kich_hoat == 0 ? 'Chưa kích hoạt' :
                                                            (value.tinh_trang == 1 ? 'Đã kích hoạt' :
                                                                'Chưa kích hoạt')) }}</button>
                                            </td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button @click="ganDuLieu(value)" class="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#quangBai1Sua">Sửa</button>
                                                <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                    data-bs-toggle="modal" data-bs-target="#quangBai1Xoa">Xóa</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangBai1ThemMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm mới khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="ho_va_ten">Họ và tên</label>
                        <input type="text" class="form-control" id="ho_va_ten" placeholder="Nhập họ và tên"
                            v-model="listPhu.ho_va_ten">
                        <label for="email" class="mt-2">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Nhập email"
                            v-model="listPhu.email">
                        <label for="so_dien_thoai" class="mt-2">Số điện thoại</label>
                        <input type="text" class="form-control" id="so_dien_thoai" placeholder="Nhập số điện thoại"
                            v-model="listPhu.so_dien_thoai">
                        <label for="tinh_trang" class="mt-2">Trạng thái</label>
                        <select class="form-select" id="tinh_trang" v-model="listPhu.tinh_trang">
                            <option :value="1">Hoạt động</option>
                            <option :value="0">Không hoạt động</option>
                        </select>
                        <label for="kich_hoat" class="mt-2">Kích hoạt</label>
                        <select class="form-select" id="kich_hoat" v-model="listPhu.kich_hoat">
                            <option :value=1>Đã kích hoạt</option>
                            <option :value=0>Chưa kích hoạt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="themKhachHang()" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangBai1Sua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- id: '',
                    email: '',
                    ho_va_ten: '',
                    so_dien_thoai: '',
                    password: '',
                    avatar: '',
                    ngay_sinh: '',
                    tinh_trang: null,
                    kich_hoat: 1, -->
                    <div class="container">
                        <label for="ho_va_ten">Họ và tên</label>
                        <input type="text" class="form-control" id="ho_va_ten" placeholder="Nhập họ và tên"
                            v-model="listPhu.ho_va_ten">
                        <label for="email" class="mt-2">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Nhập email"
                            v-model="listPhu.email">
                        <label for="so_dien_thoai" class="mt-2">Số điện thoại</label>
                        <input type="text" class="form-control" id="so_dien_thoai" placeholder="Nhập số điện thoại"
                            v-model="listPhu.so_dien_thoai">
                        <label for="password" class="mt-2">Mật khẩu</label>
                        <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu"
                            v-model="listPhu.password">
                        <label for="ngay_sinh" class="mt-2">Ngày sinh</label>
                        <input type="date" class="form-control" id="ngay_sinh" v-model="listPhu.ngay_sinh">
                        <label for="tinh_trang" class="mt-2">Trạng thái</label>
                        <select class="form-select" id="tinh_trang" v-model="listPhu.tinh_trang">
                            <option :value="1">Hoạt động</option>
                            <option :value="0">Không hoạt động</option>
                        </select>
                        <label for="kich_hoat" class="mt-2">Kích hoạt</label>
                        <select class="form-select" id="kich_hoat" v-model="listPhu.kich_hoat">
                            <option :value=1>Đã kích hoạt</option>
                            <option :value=0>Chưa kích hoạt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="themKhachHang()" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangBai1Xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa khách hàng này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaKhachHang()" type="button" class="btn btn-primary">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.min.css';

export default {
    data() {
        return {
            list: [],
            listPhu: {
                id: '',
                email: '',
                ho_va_ten: '',
                so_dien_thoai: '',
                password: '',
                avatar: '',
                ngay_sinh: '',
                tinh_trang: null,
                kich_hoat: 1,
            },
            tuKhoa: '',
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/khach-hang/get-data').then((res) => {
                this.list = res.data.data;
            });
        },
        dieuKienLoc(value) {
            let tuKhoa = this.tuKhoa.trim().toLowerCase();
            return value.ho_va_ten.toLowerCase().includes(tuKhoa) ||
                value.email.toLowerCase().includes(tuKhoa) ||
                value.so_dien_thoai.toLowerCase().includes(tuKhoa);
        },
        locDanhSach() {
            return this.list.filter(this.dieuKienLoc);
        },
        themKhachHang() {
            if (!this.listPhu.ho_va_ten || !this.listPhu.email || !this.listPhu.so_dien_thoai) {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                return;
            }

            this.list.push({ ...this.listPhu });
            alert('Thêm khách hàng thành công!');
            this.listPhu = {
                id: '',
                email: '',
                ho_va_ten: '',
                so_dien_thoai: '',
                password: '',
                avatar: '',
                ngay_sinh: '',
                tinh_trang: null,
                kich_hoat: 1,
            }
        },
        ganDuLieu(giaTriGan) {
            this.listPhu = { ...giaTriGan };
        },
        suaKhachHang() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Sửa khách hàng thành công!');
                    break;
                }
            }
        },
        xoaKhachHang() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa khách hàng thành công!');
        },
    }

}
</script>
<style></style>