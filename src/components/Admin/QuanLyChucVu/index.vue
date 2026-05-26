<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm chức vụ</h4>
                    </div>
                    <div class="card-body">

                        <label class="form-label">Tên Chức Vụ</label>
                        <input v-model="listPhu.ten_chuc_vu" type="text" class="form-control"
                            placeholder="Nhập tên chức vụ">

                        <label class="form-label mt-3">Slug Chức Vụ</label>
                        <input v-model="listPhu.slug_chuc_vu" type="text" class="form-control"
                            placeholder="Nhập slug chức vụ">
                        <label class="form-label mt-3">Tình Trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Tắt</option>
                        </select>

                    </div>
                    <div class="card-footer d-flex">
                        <button @click="themChucVu()" class="btn btn-primary text-white ms-auto">+ Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Chức Vụ</h5>
                            <button class="btn btn-success">Xuất excel</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="table-reponsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-dark text-light">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Tên Chức Vụ</th>
                                        <th class="text-center">Slug Chức Vụ</th>
                                        <th class="text-center">Tình Trạng</th>
                                        <th class="text-center">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_chuc_vu }}</td>
                                            <td class="text-center">{{ value.slug_chuc_vu }}</td>
                                            <td class="text-center">
                                                <button class="btn w-100"
                                                :class="{
                                                    'btn-success': value.tinh_trang == 1,
                                                    'btn-danger': value.tinh_trang == 0
                                                }"
                                                >{{ value.tinh_trang == 1 ? 'Hoạt Động' : 'Ngừng Hoạt Động' }}</button>
                                            </td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary" @click="ganDuLieu(value)" data-bs-toggle="modal" data-bs-target="#modalCapNhatChucVu">Sửa</button>
                                                <button class="btn btn-danger" @click="ganDuLieu()" data-bs-toggle="modal" data-bs-target="#modalXoaChucVu">Xóa</button>
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
    <div class="modal fade" id="modalCapNhatChucVu" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa chức vụ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label class="form-label">Tên Chức Vụ</label>
                        <input v-model="listPhu.ten_chuc_vu" type="text" class="form-control"
                            placeholder="Nhập tên chức vụ">

                        <label class="form-label mt-3">Slug Chức Vụ</label>
                        <input v-model="listPhu.slug_chuc_vu" type="text" class="form-control"
                            placeholder="Nhập slug chức vụ">
                        <label class="form-label mt-3">Tình Trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Tắt</option>
                        </select>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaChucVu()" type="button" class="btn btn-primary"
                        data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaChucVu" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa chức vụ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa chức vụ này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaChucVu()" type="button" class="btn btn-primary"
                        data-bs-dismiss="modal">Xác
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
                ten_chuc_vu: '',
                slug_chuc_vu: '',
                tinh_trang: '',
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/chuc-vu/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        themChucVu() {
            if (!this.listPhu.ten_chuc_vu ||
                !this.listPhu.slug_chuc_vu ||
                !this.listPhu.tinh_trang) {
                alert('Vui lòng nhập đầy đủ thông tin chức vụ!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công chức vụ!');
            this.resetForm();
        },
        resetForm() {
            this.listPhu = {
                id: '',
                ten_chuc_vu: '',
                slug_chuc_vu: '',
                tinh_trang: '',
            }
        },
        ganDuLieu(value) {
            this.listPhu = { ...value };
        },
        suaChucVu() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
            this.resetForm();
        },
        xoaChucVu(id) {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa chức vụ thành công!');
            this.resetForm();
        }
    }
}
</script>
<style></style>