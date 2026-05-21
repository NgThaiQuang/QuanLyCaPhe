<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Sản Phẩm</h5>
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalThemSanPham">+
                                Thêm sản phẩm</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="table-reponsive">
                                <table class="table table-striped table-bordered align-middle">
                                    <thead class="bg-secondary text-light">
                                        <th class="text-center py-4" style="width: 4%">#</th>
                                        <th class="text-center py-4" style="width: 18%">Tên Sản Phẩm</th>
                                        <th class="text-center py-4" style="width: 10%">Danh Mục</th>
                                        <th class="text-center py-4" style="width: 9%">Giá Bán</th>
                                        <th class="text-center py-4 text-nowrap" style="width: 6%">Kích Thước</th>
                                        <th class="text-center py-4" style="width: 8%">Hình ảnh</th>
                                        <th class="text-center py-4" style="width: 20%">Mô tả</th>
                                        <th class="text-center py-4" style="width: 11%">Tình Trạng</th>
                                        <th class="text-center py-4" style="width: 14%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in danhSachLoc()" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_san_pham }}</td>
                                            <td class="text-center">{{ value.ten_danh_muc }}</td>
                                            <td class="text-center">{{ value.gia_ban }}</td>
                                            <td class="text-center">{{ value.kich_thuoc }}</td>
                                            <td class="text-center">
                                                <img :src="value.hinh_anh" alt=""
                                                    style="width: 75px; height: 75px; object-fit: cover;">
                                            </td>
                                            <td class="text-center">{{ value.mo_ta }}</td>
                                            <td class="text-center">
                                                <button class="btn w-100"
                                                    :class="value.tinh_trang == 1 ? 'btn-success' : 'btn-secondary'">
                                                    {{ value.tinh_trang == 1 ? 'Hoạt Động' : 'Tạm tắt' }}
                                                </button>
                                            </td>
                                            <td>
                                                <div class="text-center d-flex gap-2 justify-content-center">
                                                    <button @click="ganDuLieu(value)"
                                                        class="btn btn-primary text-nowrap" data-bs-toggle="modal"
                                                        data-bs-target="#modalSuaSanPham">Cập nhật</button>
                                                    <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#modalXoaSanPham">Xóa</button>
                                                </div>

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
    <div class="modal fade" id="modalThemSanPham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm mới</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label for="tenNhaCungCap" class="form-label">Tên sản phẩm</label>
                    <input v-model="listPhu.ten_san_pham" type="text" class="form-control" placeholder="Nhập tên sản phẩm" id="tenNhaCungCap">
                    <label for="slugNhaCungCap" class="mt-2 form-label">Danh mục</label>
                    <select v-model="listPhu.ten_danh_muc" class="form-select">
                        <option value="Đồ uống">Đồ uống</option>
                        <option value="Đồ ăn">Đồ ăn</option>
                    </select>
                    <label for="slugNhaCungCap" class="mt-2 form-label">Giá bán</label>
                    <input v-model="listPhu.gia_ban" type="text" class="form-control" placeholder="Nhập giá bán" id="slugNhaCungCap">
                    <label for="hinhAnh" class="mt-2 form-label">Hình ảnh</label>
                    <input v-model="listPhu.hinh_anh" type="text" class="form-control" id="hinhAnh" placeholder="Nhập vào URL hình ảnh">
                    <label for="slugNhaCungCap" class="mt-2 form-label">Kích thước</label>
                    <input v-model="listPhu.kich_thuoc" type="text" class="form-control" placeholder="Nhập kích thước(vừa,lớn,..)"
                        id="slugNhaCungCap">
                    <label for="slugNhaCungCap" class="mt-2 form-label">Mô tả</label>
                    <textarea v-model="listPhu.mo_ta" name="" id="" cols="10" rows="3" placeholder="Nhập mô tả" class="form-control"></textarea>
                    <label for="" class="mt-2 form-label">Tình trạng</label>
                    <select v-model="listPhu.tinh_trang" class="form-select">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Ngừng Hoạt Động</option>
                    </select>
                    <div class="mb-3"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="themSanPham" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalSuaSanPham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa sản phẩm</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="tenNhaCungCap" class="form-label">Tên sản phẩm</label>
                        <input v-model="listPhu.ten_san_pham" type="text" class="form-control" placeholder="Nhập tên sản phẩm" id="tenNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Danh mục</label>
                        <select v-model="listPhu.ten_danh_muc" class="form-select">
                            <option value="Đồ uống">Đồ uống</option>
                            <option value="Đồ ăn">Đồ ăn</option>
                        </select>
                        <label for="slugNhaCungCap" class="mt-2 form-label">Giá bán</label>
                        <input v-model="listPhu.gia_ban" type="text" class="form-control" placeholder="Nhập giá bán" id="slugNhaCungCap">
                        <label for="hinhAnh" class="mt-2 form-label">Hình ảnh</label>
                        <input v-model="listPhu.hinh_anh"   type="text" class="form-control" id="hinhAnh" placeholder="Nhập vào URL hình ảnh">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Kích thước</label>
                        <input v-model="listPhu.kich_thuoc" type="text" class="form-control" placeholder="Nhập kích thước(vừa,lớn,..)"
                            id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Mô tả</label>
                        <textarea v-model="listPhu.mo_ta" name="" id="" cols="10" rows="3" placeholder="Nhập mô tả"
                            class="form-control"></textarea>
                        <label for="" class="mt-2 form-label">Tình trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Ngừng Hoạt Động</option>
                        </select>
                        <div class="mb-3"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="suaSanPham()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaSanPham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa sản phẩm</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa sản phẩm này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaSanPham()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    data() {
        return {
            list: [],
            listPhu: {
                id: '',
                ten_san_pham: '',
                slug_san_pham: '',
                mo_ta: '',
                kich_thuoc: '',
                gia_ban: '',
                hinh_anh: '',
                tinh_trang: 1,
                id_danh_muc: 1,
                ten_danh_muc: '',
            },
            tuKhoa: "",
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/san-pham/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        dieuKienLoc(value) {
            let tuKhoa = this.tuKhoa.toLowerCase().trim();
            return value.ten_san_pham.toLowerCase().includes(tuKhoa) || value.slug_san_pham.toLowerCase().includes(tuKhoa) || value.mo_ta.toLowerCase().includes(tuKhoa) || value.kich_thuoc.toLowerCase().includes(tuKhoa) || value.gia_ban.toLowerCase().includes(tuKhoa) || value.ten_danh_muc.toLowerCase().includes(tuKhoa);
        },
        danhSachLoc() {
            return this.list.filter(this.dieuKienLoc);
        },
        ganDuLieu(value) {
            Object.assign(this.listPhu, value);
        },
        themSanPham() {
            this.list.push({ ...this.listPhu });
            alert("Thêm sản phẩm thành công!");
            this.listPhu={
                id: '',
                ten_san_pham: '',
                slug_san_pham: '',
                mo_ta: '',
                kich_thuoc: '',
                gia_ban: '',
                hinh_anh: '',
                tinh_trang: 1,
                id_danh_muc: 1,
                ten_danh_muc: '',
            }
        },
        suaSanPham() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu }
                    break;
                }
            }
           alert("Cập nhật sản phẩm thành công!");

        },
        xoaSanPham() {
            this.list = this.list.filter(item => item.id !== this.listPhu.id);
            alert("Xóa sản phẩm thành công!");
        }
    }
}
</script>
<style></style>