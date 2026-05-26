<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info">
                        <h4 class="text-white text-center mt-2">
                            Thêm mới voucher
                        </h4>
                    </div>

                    <div class="card-body">

                        <label class="form-label">Mã voucher</label>
                        <input v-model="listPhu.ma_voucher" type="text" class="form-control"
                            placeholder="Nhập mã voucher">

                        <label class="form-label mt-3">Loại giảm</label>
                        <select v-model="listPhu.loai_giam" class="form-select">
                            <option value="">-- Chọn loại giảm --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                        <label class="form-label mt-3">Số giảm giá</label>
                        <input v-model="listPhu.so_giam_gia" type="number" class="form-control"
                            placeholder="Nhập Số giảm giá">
                        <label for="slugDanhMuc" class="mt-2 form-label">Ngày bắt đầu</label>
                        <input v-model="listPhu.thoi_gian_bat_dau" type="date" class="form-control" id="slugDanhMuc">
                        <label for="moTa" class="mt-2 form-label ">Ngày kết thúc</label>
                        <input v-model="listPhu.thoi_gian_ket_thuc" type="date" class="form-control" id="moTa">



                    </div>

                    <div class="card-footer d-flex">
                        <button @click="themVoucher()" class="btn btn-primary ms-auto">
                            Thêm Voucher
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Phân Công Ca Làm</h5>
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
                                        <th class="text-center py-2" style="width:22%">Mã Voucher</th>
                                        <th class="text-center py-2" style="width:20%">Loại Giảm</th>
                                        <th class="text-center py-2 text-nowrap" style="width:12%">Số Giảm</th>
                                        <th class="text-center py-2" style="width:10%">Ngày Bắt Đầu</th>
                                        <th class="text-center py-2 text-nowrap" style="width:10%">Ngày Kết Thúc</th>
                                        <th class="text-center py-2" style="width:30%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center" style="width:5%">{{ index + 1 }}</td>
                                            <td class="text-center" style="width:11%">{{ value.ma_voucher }}</td>
                                            <td class="text-center" style="width:10%">{{ value.loai_giam }}</td>
                                            <td class="text-center" style="width:10%">{{ value.so_giam_gia }}</td>
                                            <td class="text-center" style="width:17%">{{ value.thoi_gian_bat_dau }}</td>
                                            <td class="text-center" style="width:17%">{{ value.thoi_gian_ket_thuc }}
                                            </td>
                                            <td class="text-center" style="width:30%">
                                                <div class="text-center d-flex gap-2 justify-content-center">
                                                    <button @click="ganDuLieu(value)"
                                                        class="btn btn-primary text-nowrap"
                                                        data-bs-target="#modalCapNhatVoucher" data-bs-toggle="modal">Cập
                                                        nhật</button>
                                                    <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                        data-bs-target="#modalXoaVoucher"
                                                        data-bs-toggle="modal">Xóa</button>
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
    <div class="modal fade" id="modalCapNhatVoucher" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa voucher</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label class="form-label">Mã voucher</label>
                        <input v-model="listPhu.ma_voucher" type="text" class="form-control"
                            placeholder="Nhập mã voucher">

                        <label class="form-label mt-3">Loại giảm</label>
                        <select v-model="listPhu.loai_giam" class="form-select">
                            <option value="">-- Chọn loại giảm --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                        <label class="form-label mt-3">Số giảm giá</label>
                        <input v-model="listPhu.so_giam_gia" type="number" class="form-control"
                            placeholder="Nhập Số giảm giá">
                        <label for="slugDanhMuc" class="mt-2 form-label">Ngày bắt đầu</label>
                        <input v-model="listPhu.thoi_gian_bat_dau" type="date" class="form-control" id="slugDanhMuc">
                        <label for="moTa" class="mt-2 form-label ">Ngày kết thúc</label>
                        <input v-model="listPhu.thoi_gian_ket_thuc" type="date" class="form-control" id="moTa">


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaVoucher()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save
                        changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaVoucher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa voucher</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa voucher này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaVoucher()" type="button" class="btn btn-primary"
                        data-bs-dismiss="modal">Xác nhận</button>
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
                thoi_gian_bat_dau: '',
                thoi_gian_ket_thuc: '',
                loai_giam: '',
                ma_voucher: '',
                so_giam_gia: '',
                so_tien_toi_da: '',
                don_hang_toi_thieu: '',
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/vouchers/get-data').then((res) => {
                 this.list = res.data.data.map((value, index) => {
                    return {
                        ...value,
                        id: index + 1
                    }
        });
            })
        },
        themVoucher() {
            if (!this.listPhu.ma_voucher ||
                !this.listPhu.so_giam_gia ||
                !this.listPhu.loai_giam||
                 !this.listPhu.thoi_gian_bat_dau || !this.listPhu.thoi_gian_ket_thuc  ) {
                alert('Vui lòng nhập đầy đủ thông tin voucher!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công voucher!');
            this.resetForm();
        },
        resetForm() {
            this.listPhu = {
                thoi_gian_bat_dau: '',
                thoi_gian_ket_thuc: '',
                loai_giam: '',
                ma_voucher: '',
                so_giam_gia: '',
                so_tien_toi_da: '',
                don_hang_toi_thieu: '',
            }
        },
        ganDuLieu(value) {
            this.listPhu = { ...value };
        },
        suaVoucher() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
            this.resetForm();
        },
        xoaVoucher() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa voucher thành công!');
            this.resetForm();
        }
    }
}
</script>
<style></style>