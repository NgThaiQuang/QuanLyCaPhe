<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2 text-center">Thêm khu vực</h4>
                    </div>
                    <div class="card-body">
                        <label for="" class="mt-2 form-label">Tên khu vực</label>
                        <select v-model="listPhu.ten_khu_vuc" class="form-select">
                            <option value="Tầng 1" selected>Tầng 1</option>
                            <option value="Tầng 2">Tầng 2</option>
                            <option value="Tầng 3">Tầng 3</option>
                            <option value="Tầng 4">Tầng 4</option>
                            <option value="Tầng 5">Tầng 5</option>
                            <option value="Tầng 6">Tầng 6</option>
                        </select>
                        <label for="tenBan" class="form-label mt-2">Mô tả</label>
                        <textarea v-model="listPhu.mo_ta" class="form-control" placeholder="Nhập mô tả khu vực" id="tenBan">
                        </textarea>
                    </div>
                    <div class="card-footer d-flex">
                        <button @click="themKhuVuc()" class="btn btn-primary text-end ms-auto">+ Thêm khu vực</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h5 class="card-title text-white mt-2 text-center">Danh Sách Khu Vực</h5>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="input-group d-flex mb-3">
                                <input v-model="tuKhoa" type="text" class="form-control"
                                    placeholder="Tìm kiếm khu vực...">
                                <button class="btn btn-primary" @click="dieuKienLoc(tuKhoa)">Tìm kiếm</button>
                            </div>
                            <div class="table-reponsive">
                                <table class="table table-striped table-bordered align-middle">
                                    <thead class="bg-primary text-light">
                                        <th class="text-center py-2" style="width:10%">STT</th>
                                        <th class="text-center py-2" style="width:15%">Tên Khu Vực</th>
                                        <th class="text-center py-2" style="width:50%">Mô Tả</th>
                                        <th class="text-center py-2" style="width:25%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in danhSachLoc()" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_khu_vuc }}</td>
                                            <td class="text-center">{{ value.mo_ta }}</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button @click="ganDuLieu(value)" class="btn btn-outline-warning" 
                                                data-bs-target="#quangBai4Sua" data-bs-toggle="modal"><i
                                                        class="fa-solid fa-pencil"></i></button>
                                                <button @click="ganDuLieu(value)" class="btn btn-outline-danger" 
                                                data-bs-target="#quangBai4Xoa" data-bs-toggle="modal"><i
                                                        class="fa-solid fa-trash"></i></button>
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
    <div class="modal fade" id="quangBai4Sua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa khách hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- id: "",
                    ten_ban: "",
                    tinh_trang: '1',
                    ten_khu_vuc: '1', -->
                    <div class="container">
                        <label for="ten_ban" class="mt-2">Tên bàn</label>
                        <input type="text" class="form-control" id="ten_ban" placeholder="Nhập tên bàn" v-model="listPhu.ten_ban">
                        <label for="tinh_trang" class="mt-2">Trạng thái</label>
                        <select class="form-select" id="tinh_trang" v-model="listPhu.tinh_trang">
                            <option :value="1">Hoạt động</option>
                            <option :value="0">Không hoạt động</option>
                        </select>
                        <label for="ten_khu_vuc" class="mt-2">Khu vực bàn</label>
                        <select class="form-select" id="ten_khu_vuc" v-model="listPhu.ten_khu_vuc">
                            <option value="Tầng 1" selected>Tầng 1</option>
                            <option value="Tầng 2">Tầng 2</option>
                            <option value="Tầng 3">Tầng 3</option>
                            <option value="Tầng 4">Tầng 4</option>
                            <option value="Tầng 5">Tầng 5</option>
                            <option value="Tầng 6">Tầng 6</option>
                        </select>
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaBan()" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="quangBai4Xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <button @click="xoaBan()" type="button" class="btn btn-primary">Xác nhận</button>
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
                id: "",
                ten_khu_vuc: '1',
                mo_ta: "",
            },
            tuKhoa: "",
        }
    },
    // "id": 1,
    // "ten_khu_vuc": "Tầng 1",
    // "mo_ta": "Khu vực tầng trệt, không gian mở",
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/khu-vuc-ban/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        dieuKienLoc(value) {
            let tuKhoa = this.tuKhoa.toLowerCase().trim();
            return value.ten_khu_vuc.toLowerCase().includes(tuKhoa);
        },
        danhSachLoc() {
            return this.list.filter(this.dieuKienLoc);
        },
        themKhuVuc() {
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công khu vực!');
            this.listPhu = {
                id: "",
                ten_khu_vuc: '1',
                mo_ta: "",
            }
        },
        ganDuLieu(value) {
            this.listPhu = { ...value };
        },
        suaKhuVuc() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
        },
        xoaKhuVuc() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa khu vực thành công!');
        }
    }
}
</script>
<style></style>