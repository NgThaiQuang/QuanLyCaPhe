<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info">
                        <h4 class="text-white text-center mt-2">
                            THÊM NGUYÊN LIỆU
                        </h4>
                    </div>

                    <div class="card-body">

                        <label class="form-label">Tên Nguyên Liệu</label>
                        <input v-model="listPhu.ten_nguyen_lieu" type="text" class="form-control"
                            placeholder="Nhập tên nguyên liệu">

                        <label class="form-label mt-3">Đơn Vị Tính</label>
                        <input v-model="listPhu.don_vi_tinh" type="text" class="form-control"
                            placeholder="Kg, Liter, ...">

                        <label class="form-label mt-3">Số Lượng Tồn</label>
                        <input v-model="listPhu.so_luong_ton" type="number" class="form-control"
                            placeholder="Nhập số lượng tồn">

                        <label class="form-label mt-3">Mức Cảnh Báo</label>
                        <input v-model="listPhu.muc_canh_bao" type="number" class="form-control"
                            placeholder="Nhập mức cảnh báo">

                        <label class="form-label mt-3">Giá Nhập</label>
                        <input v-model="listPhu.gia_nhap" type="number" class="form-control"
                            placeholder="Nhập giá nhập">

                        <label class="form-label mt-3">Nhà Cung Cấp</label>
                        <select v-model="listPhu.id_nha_cung_cap" class="form-select">
                            <option value="">-- Chọn nhà cung cấp --</option>
                        </select>

                        <label class="form-label mt-3">Tình Trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Tắt</option>
                        </select>

                    </div>

                    <div class="card-footer d-flex">
                        <button @click="themNguyenLieu()" class="btn btn-primary ms-auto">
                            Thêm Mới
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Nguyên Liệu</h5>
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalThemSanPham">+
                                Xuất excel</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">

                            <div class="table-reponsive">
                                <table class="table table-striped table-bordered align-middle">
                                    <thead class="bg-primary text-light">
                                        <th class="text-center py-2" style="width:6%">STT</th>
                                        <th class="text-center py-2" style="width:22%">Tên Nguyên Liệu</th>
                                        <th class="text-center py-2" style="width:20%">Đơn Vị Tính</th>
                                        <th class="text-center py-2 text-nowrap" style="width:12%">Số lượng tồn</th>
                                        <th class="text-center py-2" style="width:10%">Giá nhập</th>
                                        <th class="text-center py-2" style="width:10%">Tình trạng</th>
                                        <th class="text-center py-2" style="width:30%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_nguyen_lieu }}</td>
                                            <td class="text-center">{{ value.don_vi_tinh }}</td>
                                            <td class="text-center">{{ value.so_luong_ton }}</td>


                                            <td class="text-center text-nowrap">{{ value.gia_nhap }} VNĐ</td>
                                            <td class="text-center">
                                                <span class="badge "
                                                    :class="value.tinh_trang == 1 ? 'bg-success' : 'bg-danger'">{{
                                                    value.tinh_trang == 1 ? 'Còn hàng' : 'Hết hàng' }}</span>
                                            </td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button @click="ganDuLieu(value)" class="btn btn-primary text-nowrap"
                                                    data-bs-target="#modalCapNhatNguyenLieu" data-bs-toggle="modal">Cập
                                                    nhật</button>
                                                <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                    data-bs-target="#modalXoaNguyenLieu"
                                                    data-bs-toggle="modal">Xóa</button>
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
    <div class="modal fade" id="modalCapNhatNguyenLieu" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa nguyên liệu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label class="form-label">Tên Nguyên Liệu</label>
                        <input v-model="listPhu.ten_nguyen_lieu" type="text" class="form-control"
                            placeholder="Nhập tên nguyên liệu">

                        <label class="form-label mt-3">Đơn Vị Tính</label>
                        <input v-model="listPhu.don_vi_tinh" type="text" class="form-control"
                            placeholder="Kg, Liter, ...">

                        <label class="form-label mt-3">Số Lượng Tồn</label>
                        <input v-model="listPhu.so_luong_ton" type="number" class="form-control"
                            placeholder="Nhập số lượng tồn">

                        <label class="form-label mt-3">Mức Cảnh Báo</label>
                        <input v-model="listPhu.muc_canh_bao" type="number" class="form-control"
                            placeholder="Nhập mức cảnh báo">

                        <label class="form-label mt-3">Giá Nhập</label>
                        <input v-model="listPhu.gia_nhap" type="number" class="form-control"
                            placeholder="Nhập giá nhập">

                        <label class="form-label mt-3">Nhà Cung Cấp</label>
                        <select v-model="listPhu.id_nha_cung_cap" class="form-select">
                            <option value="">-- Chọn nhà cung cấp --</option>
                        </select>

                        <label class="form-label mt-3">Tình Trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Tắt</option>
                        </select>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaNguyenLieu()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaNguyenLieu" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa nguyên liệu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa nguyên liệu này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaNguyenLieu()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                        nhận</button>
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
                ten_nguyen_lieu: '',
                don_vi_tinh: '',
                so_luong_ton: '',
                muc_canh_bao: '',
                gia_nhap: '',
                tinh_trang: '1',
                id_nha_cung_cap: '',
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/nguyen-lieu/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        themNguyenLieu() {
            if (!this.listPhu.ten_nguyen_lieu ||
                !this.listPhu.don_vi_tinh ||
                !this.listPhu.so_luong_ton ||
                !this.listPhu.gia_nhap ||
                !this.listPhu.tinh_trang) {
                alert('Vui lòng nhập đầy đủ thông tin nguyên liệu!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công nguyên liệu!');
            this.resetForm();
        },
        resetForm() {
            this.listPhu = {
                id: '',
                so_luong: '',
                don_vi: '',
                id_san_pham: '',
                id_nguyen_lieu: '',
                ten_san_pham: '',
                ten_nguyen_lieu: '',
            }
        },
        ganDuLieu(value) {
            this.listPhu = { ...value };
        },
        suaNguyenLieu() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
            this.resetForm();
        },
        xoaNguyenLieu() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa nguyên liệu thành công!');
            this.resetForm();
        }
    }
}
</script>
<style></style>