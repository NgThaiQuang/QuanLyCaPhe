<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Hóa Đơn</h5>
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalThemHoaDon">+
                                Thêm mới</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered align-middle">
                                    <thead class="bg-secondary text-light">
                                        <th class="text-center py-4" style="width: 4%">#</th>
                                        <th class="text-center py-4" style="width: 18%">Mã Hóa Đơn</th>
                                        <th class="text-center py-4" style="width: 10%">Bàn</th>
                                        <th class="text-center py-4" style="width: 9%">Khách Hàng</th>
                                        <th class="text-center py-4 text-nowrap" style="width: 6%">Tổng tiền</th>

                                        <th class="text-center py-4" style="width: 11%">Tình Trạng</th>
                                        <th class="text-center py-4" style="width: 14%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ma_hoa_don }}</td>
                                            <td class="text-center">{{ value.ten_ban }}</td>
                                            <td class="text-center">{{ value.ho_va_ten }}</td>
                                            <td class="text-center">{{ value.tong_tien }}</td>
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
                                                        data-bs-target="#modalSuaHoaDon">Cập nhật</button>
                                                    <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#modalXoaHoaDon">Xóa</button>
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
    <div class="modal fade" id="modalThemHoaDon" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm mới</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <label for="maHoaDon" class="form-label">Mã hóa đơn</label>
                    <input v-model="listPhu.ma_hoa_don" type="text" class="form-control" placeholder="Nhập mã hóa đơn"
                        id="maHoaDon">
                    <label for="idBan" class="mt-2 form-label">Bàn</label>
                    <input v-model="listPhu.ten_ban" type="text" class="form-control" placeholder="Nhập tên bàn"
                        id="idBan">
                    <label for="idKhachHang" class="mt-2 form-label">Khách hàng</label>
                    <input v-model="listPhu.ho_va_ten" type="text" class="form-control"
                        placeholder="Nhập họ và tên khách hàng" id="idKhachHang">
                    <label for="tongTien" class="mt-2 form-label">Tổng tiền</label>
                    <input v-model="listPhu.tong_tien" type="text" class="form-control" placeholder="Nhập tổng tiền"
                        id="tongTien">
                    <label for="tinhTrang" class="mt-2 form-label">Tình trạng</label>
                    <select v-model="listPhu.tinh_trang" class="form-select">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Ngừng Hoạt Động</option>
                    </select>
                    <div class="mb-3"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="themHoaDon()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay
                        đổi</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalSuaHoaDon" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa hóa đơn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="maHoaDon" class="form-label">Mã hóa đơn</label>
                        <input v-model="listPhu.ma_hoa_don" type="text" class="form-control"
                            placeholder="Nhập mã hóa đơn" id="maHoaDon">
                        <label for="idBan" class="mt-2 form-label">Bàn</label>
                        <input v-model="listPhu.ten_ban" type="text" class="form-control" placeholder="Nhập tên bàn"
                            id="idBan">
                        <label for="idKhachHang" class="mt-2 form-label">Khách hàng</label>
                        <input v-model="listPhu.ho_va_ten" type="text" class="form-control"
                            placeholder="Nhập họ và tên khách hàng" id="idKhachHang">
                        <label for="tongTien" class="mt-2 form-label">Tổng tiền</label>
                        <input v-model="listPhu.tong_tien" type="text" class="form-control" placeholder="Nhập tổng tiền"
                            id="tongTien">
                        <label for="tinhTrang" class="mt-2 form-label">Tình trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Ngừng Hoạt Động</option>
                        </select>
                        <div class="mb-3"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="suaHoaDon()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay
                        đổi</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaHoaDon" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa hóa đơn</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa hóa đơn này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaHoaDon()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                        nhận</button>
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
                ma_hoa_don: '',
                tong_tien: '',
                tinh_trang: '1',
                id_ban: '',
                id_khach_hang: '',
                id_phan_cong_ca_lam: '',
                id_voucher: '',
                ten_ban: '',
                ho_va_ten: '',
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/hoa-don/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        ganDuLieu(value) {
            Object.assign(this.listPhu, value);
        },
        themHoaDon() {
            this.list.push({ ...this.listPhu });
            alert("Thêm hóa đơn thành công!");
            this.listPhu = {
                id: '',
                ma_hoa_don: '',
                tong_tien: '',
                tinh_trang: '',
                id_ban: '',
                id_khach_hang: '',
                id_phan_cong_ca_lam: '',
                id_voucher: '',
                ten_ban: '',
                ho_va_ten: '',
            }
        },
        suaHoaDon() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu }
                    break;
                }
            }
            alert("Cập nhật hóa đơn thành công!");

        },
        xoaHoaDon() {
            this.list = this.list.filter(item => item.id !== this.listPhu.id);
            alert("Xóa hóa đơn thành công!");
        }
    }
}
</script>
<style></style>