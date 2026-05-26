<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info">
                        <h4 class="text-white mt-2">
                            Tạo Phiếu Nhập Kho
                        </h4>
                    </div>

                    <div class="card-body">

                        <label class="form-label">Nhân Viên</label>
                        <input v-model="listPhu.ho_va_ten" type="text" class="form-control"
                            placeholder="Nhập tên nhân viên">
                        <label class="form-label mt-3">Tổng tiền</label>
                        <input v-model="listPhu.tong_tien" type="text" class="form-control"
                            placeholder="Nhập tổng tiền">
                        <label class="form-label mt-3">Ghi chú</label>
                        <textarea v-model="listPhu.ghi_chu" rows="3" class="form-control"
                            placeholder="Nhập ghi chú"></textarea>
                        <label class="form-label mt-3">Ngày tạo</label>
                        <input v-model="listPhu.ngay_tao" type="date" class="form-control" placeholder="Nhập ngày tạo">
                    </div>

                    <div class="card-footer d-flex">
                        <button @click="themPhieuNhapKho()" class="btn btn-primary ms-auto">
                            Tạo Phiếu
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Phiếu Nhập Kho</h5>
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalThemSanPham">+
                                Xuất excel</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">

                            <div class="table-reponsive">
                                <table class="table table-striped table-bordered align-middle">
                                    <thead class="bg-primary text-light">
                                        <th class="text-center py-2" style="width:5%">STT</th>
                                        <th class="text-center py-2" style="width:20%">Nhân Viên</th>
                                        <th class="text-center py-2" style="width:5%">Tổng Tiền</th>
                                        <th class="text-center py-2" style="width:40%">Ghi Chú</th>
                                        <th class="text-center py-2 text-nowrap" style="width:15%">Ngày Tạo</th>

                                        <th class="text-center py-2" style="width:15%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center" style="width:5%">{{ index + 1 }}</td>
                                            <td class="text-center" style="width:20%">{{ value.ho_va_ten }}</td>
                                            <td class="text-center" style="width:5%">{{ value.tong_tien }}</td>
                                            <td class="text-center" style="width:40%">{{ value.ghi_chu }}</td>
                                            <td class="text-center" style="width:15%">{{ value.ngay_tao }}</td>
                                            <td class="text-center" style="width:15%">
                                                <div class="text-center d-flex gap-2 justify-content-center">
                                                    <button @click="ganDuLieu(value)"
                                                        class="btn btn-primary text-nowrap"
                                                        data-bs-target="#modalCapNhatPhieuNhapKho"
                                                        data-bs-toggle="modal">Cập
                                                        nhật</button>
                                                    <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                        data-bs-target="#modalXoaPhieuNhapKho"
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
    <div class="modal fade" id="modalCapNhatPhieuNhapKho" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa phiếu nhập kho</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label class="form-label">Nhân Viên</label>
                        <input v-model="listPhu.ho_va_ten" type="text" class="form-control"
                            placeholder="Nhập tên nhân viên">
                        <label class="form-label mt-3">Tổng tiền</label>
                        <input v-model="listPhu.tong_tien" type="text" class="form-control"
                            placeholder="Nhập tổng tiền">
                        <label class="form-label mt-3">Ghi chú</label>
                        <textarea v-model="listPhu.ghi_chu" rows="3" class="form-control"
                            placeholder="Nhập ghi chú"></textarea>
                        <label class="form-label mt-3">Ngày tạo</label>
                        <input v-model="listPhu.ngay_tao" type="date" class="form-control" placeholder="Nhập ngày tạo">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaPhieuNhapKho()" type="button" class="btn btn-primary"
                        data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaPhieuNhapKho" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa phiếu nhập kho</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa phiếu nhập kho này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaPhieuNhapKho()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
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
                tong_tien: '',
                ghi_chu: '',
                id_nhan_vien: '',
                ngay_tao: '',
                ho_va_ten: ''
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/phieu-nhap-kho/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        themPhieuNhapKho() {
            if (!this.listPhu.ho_va_ten ||
                !this.listPhu.ghi_chu ||
                !this.listPhu.ngay_tao ||
                !this.listPhu.tong_tien) {
                alert('Vui lòng nhập đầy đủ thông tin phiếu nhập kho!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công phiếu nhập kho!');
            this.resetForm();
        },
        resetForm() {
            this.listPhu = {
                id: '',
                tong_tien: '',
                ghi_chu: '',
                id_nhan_vien: '',
                ngay_tao: '',
                ho_va_ten: ''
            }
        },
        ganDuLieu(value) {
            this.listPhu = { ...value };
        },
        suaPhieuNhapKho() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
            this.resetForm();
        },
        xoaPhieuNhapKho() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa phiếu nhập kho thành công!');
            this.resetForm();
        }
    }
}
</script>
<style></style>