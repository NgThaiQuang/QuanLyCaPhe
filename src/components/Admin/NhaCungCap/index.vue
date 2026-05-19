<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm nhà cung cấp</h4>
                    </div>
                    <div class="card-body">

                        <label for="tenNhaCungCap" class="form-label">Tên nhà cung cấp</label>
                        <input v-model="listPhu.ten_nha_cung_cap" type="text" class="form-control"
                            placeholder="Nhập tên nhà cung cấp" id="tenNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Email</label>
                        <input v-model="listPhu.email" type="text" class="form-control" placeholder="Nhập email"
                            id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Người liên hệ</label>
                        <input v-model="listPhu.nguoi_lien_he" type="text" class="form-control"
                            placeholder="Nhập người liên hệ" id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Số điện thoại</label>
                        <input v-model="listPhu.so_dien_thoai" type="text" class="form-control"
                            placeholder="Nhập số điện thoại" id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Địa chỉ</label>
                        <textarea v-model="listPhu.dia_chi" name="" id="" cols="10" rows="3" placeholder="Nhập địa chỉ"
                            class="form-control"></textarea>
                        <label for="" class="mt-2 form-label">Tình trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Ngừng Hoạt Động</option>
                        </select>
                        <div class="mb-3"></div>
                    </div>
                    <div class="card-footer d-flex">
                        <button @click="themNhaCungCap()" class="btn btn-primary text-white ms-auto">Thêm nhà cung
                            cấp</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Nhà Cung Cấp</h5>
                        </div>
                    </div>
                    <div class="card-body">

                        <div class="table-responsive">
                            <table class="table table-striped table-bordered">
                                <thead class="bg-dark text-light">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Nhà Cung Cấp</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Số điện thoại</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Hành Động</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in danhSachLoc()" :key="index">
                                        <td class="text-center">{{ index + 1 }}</td>
                                        <td class="text-center">{{ item.ten_nha_cung_cap }}</td>
                                        <td class="text-center">{{ item.email }}</td>
                                        <td class="text-center">{{ item.so_dien_thoai }}</td>
                                        <td class="text-center">
                                            <span class="badge w-100"
                                                :class="item.tinh_trang == 1 ? ' bg-success' : ' bg-danger'">
                                                {{ item.tinh_trang == 1 ? 'Hoạt Động' : 'Ngừng Hoạt Động' }}
                                            </span>
                                        </td>
                                        <td class="d-flex gap-2 justify-content-center">
                                            <button @click="ganDuLieu(item)" class="btn btn-primary"
                                                data-bs-toggle="modal" data-bs-target="#quangBai2Sua">Sửa</button>
                                            <button @click="ganDuLieu(item)" class="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#quangBai2Xoa">Xóa</button>
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
    <div class="modal fade" id="quangBai2Xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <button @click="xoaNhaCungCap()" type="button" class="btn btn-primary">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangBai2Sua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- id:'',
                    ten_nha_cung_cap:'',
                    email:'',
                    nguoi_lien_he:'',
                    so_dien_thoai:'',
                    dia_chi:'',
                    tinh_trang:'', -->
                    <div class="container">
                        <label for="ho_va_ten">Tên nhà cung cấp</label>
                        <input type="text" class="form-control" id="ho_va_ten" placeholder="Nhập tên nhà cung cấp"
                            v-model="listPhu.ten_nha_cung_cap">
                        <label for="email" class="mt-2">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Nhập email"
                            v-model="listPhu.email">
                        <label for="so_dien_thoai" class="mt-2">Số điện thoại</label>
                        <input type="text" class="form-control" id="so_dien_thoai" placeholder="Nhập số điện thoại"
                            v-model="listPhu.so_dien_thoai">
                        <label for="nguoi_lien_he" class="mt-2">Người liên hệ</label>
                        <input type="text" class="form-control" id="nguoi_lien_he" placeholder="Nhập người liên hệ"
                            v-model="listPhu.nguoi_lien_he">
                        <label for="dia_chi" class="mt-2">Địa chỉ</label>
                        <input type="text" class="form-control" id="dia_chi" placeholder="Nhập địa chỉ"
                            v-model="listPhu.dia_chi">
                        <label for="tinh_trang" class="mt-2">Trạng thái</label>
                        <select class="form-select" id="tinh_trang" v-model="listPhu.tinh_trang">
                            <option :value="1">Hoạt động</option>
                            <option :value="0">Không hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaNhaCungCap()" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";

export default {
    data() {
        return {
            list: [],
            listPhu: {
                id: '',
                ten_nha_cung_cap: '',
                email: '',
                nguoi_lien_he: '',
                so_dien_thoai: '',
                dia_chi: '',
                tinh_trang: '',
            },
            tuKhoa: '',
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/nha-cung-cap/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        dieuKienLoc(value) {
            let tuKhoa = this.tuKhoa.toLowerCase().trim();
            return value.ten_nha_cung_cap.toLowerCase().includes(tuKhoa) || value.so_dien_thoai.toLowerCase().includes(tuKhoa);
        },
        danhSachLoc() {
            return this.list.filter(this.dieuKienLoc);
        },
        themNhaCungCap() {
            if (!this.listPhu.ten_nha_cung_cap || !this.listPhu.email || !this.listPhu.nguoi_lien_he || !this.listPhu.so_dien_thoai || !this.listPhu.dia_chi || this.listPhu.tinh_trang === '') {
                alert('Vui lòng nhập đầy đủ thông tin');
                return;
            }
            this.list.push({ ...this.listPhu });
            this.listPhu = {
                id: '',
                ten_nha_cung_cap: '',
                email: '',
                nguoi_lien_he: '',
                so_dien_thoai: '',
                dia_chi: '',
                tinh_trang: '',
            };
        },
        ganDuLieu(value) {
            this.listPhu = { ...value };
        },
        suaNhaCungCap() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    break;
                }
            }
        },
        xoaNhaCungCap() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Đã xóa thành công!');
        }
    },
}
</script>
<style></style>