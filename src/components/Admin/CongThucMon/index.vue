<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2 ">THÊM CÔNG THỨC</h4>
                    </div>
                    <div class="card-body">
                        <label for="" class="mt-2 form-label">Sản Phẩm</label>

                        <select v-model="listPhu.ten_san_pham" class="form-select">
                            <option value="" selected>Chọn Sản Phẩm</option>
                            <option value="Sinh tố bơ sáp">Sinh tố bơ sáp</option>
                            <option value="Trà sữa truyền thống">Trà sữa truyền thống</option>
                            <option value="Mocha đá xay">Mocha đá xay</option>
                            <option value="Trà vải hạt sen">Trà vải hạt sen</option>
                            <option value="Sinh tố xoài">Sinh tố xoài</option>
                            <option value="Trà sữa Matcha">Trà sữa Matcha</option>
                            <option value="Matcha đá xay">Matcha đá xay</option>
                            <option value="Trà đào cam sả">Trà đào cam sả</option>
                        </select>
                        <label for="" class="mt-2 form-label">Nguyên Liệu</label>
                        <select v-model="listPhu.ten_nguyen_lieu" class="form-select">
                            <option value="" selected>Chọn Nguyên Liệu</option>
                            <option value="Sữa đặc Ngôi Sao Phương Nam">Sữa đặc Ngôi Sao Phương Nam</option>
                            <option value="Sữa tươi Vinamilk không đường">Sữa tươi Vinamilk không đường</option>
                            <option value="Đường Biên Hòa túi 1kg">Đường Biên Hòa túi 1kg</option>
                            <option value="Hạt cà phê Arabica">Hạt cà phê Arabica</option>
                            <option value="Trà Lipton túi lọc">Trà Lipton túi lọc</option>
                            <option value="Hương vani lỏng">Hương vani lỏng</option>
                            <option value="Trà đen Phúc Long">Trà đen Phúc Long</option>
                            <option value="Vải thiều đóng hộp">Vải thiều đóng hộp</option>
                            <option value="Trà xanh Thái Nguyên">Trà xanh Thái Nguyên</option>
                        </select>
                        <label for="so_luong" class="form-label mt-2">Số Lượng</label>
                        <input v-model="listPhu.so_luong" type="text" class="form-control" placeholder="Nhập số lượng">
                        <label for="don_vi" class="form-label mt-2">Đơn Vị</label>
                        <input v-model="listPhu.don_vi" type="text" class="form-control" placeholder="Nhập đơn vị">


                    </div>
                    <div class="card-footer d-flex">
                        <button @click="themCongThuc()" class="btn btn-primary text-end ms-auto">+ Thêm Công
                            Thức</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Công Thức</h5>
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
                                        <th class="text-center py-2" style="width:22%">Sản Phẩm</th>
                                        <th class="text-center py-2" style="width:20%">Nguyên Liệu</th>
                                        <th class="text-center py-2" style="width:12%">Số Lượng</th>
                                        <th class="text-center py-2" style="width:10%">Đơn Vị</th>
                                        <th class="text-center py-2" style="width:30%">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_san_pham }}</td>
                                            <td class="text-center">{{ value.ten_nguyen_lieu }}</td>
                                            <td class="text-center">{{ value.so_luong }}</td>
                                            <td class="text-center">{{ value.don_vi }}</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button @click="ganDuLieu(value)" class="btn btn-primary text-nowrap"
                                                    data-bs-target="#modalCapNhatCongThuc" data-bs-toggle="modal">Cập
                                                    nhật</button>
                                                <button @click="ganDuLieu(value)" class="btn btn-danger"
                                                    data-bs-target="#modalXoaCongThuc"
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
    <div class="modal fade" id="modalCapNhatCongThuc" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa công thức</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="" class="mt-2 form-label">Sản Phẩm</label>
                        <label for="" class="mt-2 form-label">Sản Phẩm</label>

                        <select v-model="listPhu.ten_san_pham" class="form-select">
                            <option value="" selected>Chọn Sản Phẩm</option>
                            <option value="Sinh tố bơ sáp">Sinh tố bơ sáp</option>
                            <option value="Trà sữa truyền thống">Trà sữa truyền thống</option>
                            <option value="Mocha đá xay">Mocha đá xay</option>
                            <option value="Trà vải hạt sen">Trà vải hạt sen</option>
                            <option value="Sinh tố xoài">Sinh tố xoài</option>
                            <option value="Trà sữa Matcha">Trà sữa Matcha</option>
                            <option value="Matcha đá xay">Matcha đá xay</option>
                            <option value="Trà đào cam sả">Trà đào cam sả</option>
                        </select>
                        <label for="" class="mt-2 form-label">Nguyên Liệu</label>
                        <select v-model="listPhu.ten_nguyen_lieu" class="form-select">
                            <option value="" selected>Chọn Nguyên Liệu</option>
                            <option value="Sữa đặc Ngôi Sao Phương Nam">Sữa đặc Ngôi Sao Phương Nam</option>
                            <option value="Sữa tươi Vinamilk không đường">Sữa tươi Vinamilk không đường</option>
                            <option value="Đường Biên Hòa túi 1kg">Đường Biên Hòa túi 1kg</option>
                            <option value="Hạt cà phê Arabica">Hạt cà phê Arabica</option>
                            <option value="Trà Lipton túi lọc">Trà Lipton túi lọc</option>
                            <option value="Hương vani lỏng">Hương vani lỏng</option>
                            <option value="Trà đen Phúc Long">Trà đen Phúc Long</option>
                            <option value="Vải thiều đóng hộp">Vải thiều đóng hộp</option>
                            <option value="Trà xanh Thái Nguyên">Trà xanh Thái Nguyên</option>
                        </select>
                        <label for="so_luong" class="form-label mt-2">Số Lượng</label>
                        <input v-model="listPhu.so_luong" type="text" class="form-control" placeholder="Nhập số lượng">
                        <label for="don_vi" class="form-label mt-2">Đơn Vị</label>
                        <input v-model="listPhu.don_vi" type="text" class="form-control" placeholder="Nhập đơn vị">


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="suaCongThuc()" type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaCongThuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa công thức</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa công thức này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaCongThuc()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
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
                so_luong: '',
                don_vi: '',
                id_san_pham: '',
                id_nguyen_lieu: '',
                ten_san_pham: '',
                ten_nguyen_lieu: '',
            },
            tuKhoa: "",
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios.get('https://bek26.deloydz.io.vn/api/admin/cong-thuc-mon/get-data').then((res) => {
                this.list = res.data.data;
            })
        },
        themCongThuc() {
            if (!this.listPhu.ten_san_pham || !this.listPhu.ten_nguyen_lieu  || !this.listPhu.don_vi) {
                alert('Vui lòng nhập đầy đủ thông tin công thức!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công công thức!');
            this.resetForm();
        },
        resetForm(){
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
        suaCongThuc() {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Đã sửa thành công');
                    break;
                }
            }
            this.resetForm();
        },
        xoaCongThuc() {
            this.list = this.list.filter(value => value.id !== this.listPhu.id);
            alert('Xóa công thức thành công!');
            this.resetForm();
        }
    }
}
</script>
<style></style>