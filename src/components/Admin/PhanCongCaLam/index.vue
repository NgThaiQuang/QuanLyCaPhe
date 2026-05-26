<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info">
                        <h4 class="text-white text-center mt-2">
                            PHÂN CÔNG CA LÀM
                        </h4>
                    </div>

                    <div class="card-body">

                        <label class="form-label">Nhân Viên</label>
                        <input v-model="listPhu.ho_va_ten" type="text" class="form-control"
                            placeholder="Nhập tên nhân viên">

                        <label class="form-label mt-3">Ca Làm Việc</label>
                        <input v-model="listPhu.ten_ca" type="text" class="form-control"
                            placeholder="Nhập tên ca làm việc">

                        <label class="form-label mt-3">Ghi chú</label>
                        <textarea v-model="listPhu.ghi_chu" rows="3" class="form-control"
                            placeholder="Nhập ghi chú"></textarea>

                        <label class="form-label mt-3">Tình Trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Còn Hàng</option>
                            <option value="0">Hết Hàng</option>
                        </select>

                    </div>

                    <div class="card-footer d-flex">
                        <button @click="themNguyenLieu()" class="btn btn-primary ms-auto">
                            Phân Công
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
                                        <th class="text-center py-2" style="width:22%">Nhân Viên</th>
                                        <th class="text-center py-2" style="width:20%">Ca Làm Việc</th>
                                        <th class="text-center py-2 text-nowrap" style="width:12%">Ngày Phân Công</th>
                                        <th class="text-center py-2" style="width:10%">Ghi Chú</th>
                                        <th class="text-center py-2" style="width:30%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center" style="width:5%">{{ index + 1 }}</td>
                                            <td class="text-center" style="width:18%">{{ value.ho_va_ten }}</td>
                                            <td class="text-center" style="width:12%">{{ value.ten_ca }}</td>
                                            <td class="text-center" style="width:35%">{{ value.ghi_chu }}</td>
                                            <td class="text-center" style="width:12%">
                                                <span class="badge "
                                                    :class="value.tinh_trang == 1 ? 'bg-success' : 'bg-danger'">{{
                                                        value.tinh_trang == 1 ? 'Còn hàng' : 'Hết hàng' }}</span>
                                            </td>
                                            <td class="text-center" style="width:18%">
                                                <div class="text-center d-flex gap-2 justify-content-center">
                                                    <button @click="ganDuLieu(value)"
                                                        class="btn btn-primary text-nowrap"
                                                        data-bs-target="#modalCapNhatNguyenLieu"
                                                        data-bs-toggle="modal">Cập
                                                        nhật</button>
                                                    <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                        data-bs-target="#modalXoaNguyenLieu"
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
                        <label class="form-label">Nhân Viên</label>
                        <input v-model="listPhu.ho_va_ten" type="text" class="form-control"
                            placeholder="Nhập tên nhân viên">

                        <label class="form-label mt-3">Ca Làm Việc</label>
                        <input v-model="listPhu.ten_ca" type="text" class="form-control"
                            placeholder="Nhập tên ca làm việc">

                        <label class="form-label mt-3">Ghi chú</label>
                        <textarea v-model="listPhu.ghi_chu" rows="3" class="form-control"
                            placeholder="Nhập ghi chú"></textarea>

                        <label class="form-label mt-3">Tình Trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Tắt</option>
                        </select>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaPhanCongCaLam()" type="button" class="btn btn-primary"
                        data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaNguyenLieu" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa phân công ca làm việc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa phân công ca làm việc này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaPhanCongCaLam()" type="button" class="btn btn-primary"
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
                ghi_chu: '',
                tinh_trang: '1',
                id_nhan_vien: '',
                id_ca_lam_viec: '',
                ho_va_ten: '',
                ten_ca: '',
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/phan-cong-ca-lam/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        themNguyenLieu() {
            if (!this.listPhu.ho_va_ten ||
                !this.listPhu.ten_ca ||
                !this.listPhu.ghi_chu ||
                !this.listPhu.tinh_trang) {
                alert('Vui lòng nhập đầy đủ thông tin phân công ca làm việc!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công phân công ca làm việc!');
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
        suaPhanCongCaLam() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
            this.resetForm();
        },
        xoaPhanCongCaLam() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa phân công ca làm việc thành công!');
            this.resetForm();
        }
    }
}
</script>
<style></style>