<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm mới ca làm việc</h4>
                    </div>
                    <div class="card-body">

                        <label for="tenDanhMuc" class="form-label">Tên ca</label>
                        <input v-model="listPhu.ten_ca" type="text" class="form-control" placeholder="Nhập tên ca" id="tenDanhMuc">
                        <label for="slugDanhMuc" class="mt-2 form-label">Giờ bắt đầu</label>
                        <input v-model="listPhu.gio_bat_dau" type="time" class="form-control" id="slugDanhMuc">
                        <label for="moTa" class="mt-2 form-label">Giờ kết thúc</label>
                        <input v-model="listPhu.gio_ket_thuc" type="time" class="form-control" id="moTa">
                    </div>
                    <div class="card-footer d-flex">
                        <button class="btn btn-primary text-white ms-auto" @click="themCaLam()">+ Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Ca Làm Việc</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                           <div class="table-responsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-secondary text-light">
                                        <th class="text-center py-3">STT</th>
                                        <th class="text-center py-3">Tên Ca</th>
                                        <th class="text-center py-3">Giờ Bắt Đầu</th>
                                        <th class="text-center py-3">Giờ Kết Thúc</th>
                                        <th class="text-center py-3">Hành Động</th>
                                    </thead>
                                    <tbody class="text-nowrap align-middle">
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_ca }}</td>
                                            <td class="text-center">{{ value.gio_bat_dau }}</td>
                                            <td class="text-center">{{ value.gio_ket_thuc }}</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary" @click="ganDuLieu(value)" data-bs-toggle="modal" data-bs-target="#modalSuaCaLam">Sửa</button>
                                                <button @click="ganDuLieu(value)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalXoaCaLam">Xóa</button>
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
    <div class="modal fade" id="modalSuaCaLam" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa ca làm việc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="tenCa" class="form-label">Tên ca</label>
                        <input v-model="listPhu.ten_ca" type="text" class="form-control" placeholder="Nhập tên ca" id="tenCa">
                        <label for="gioBatDau" class="mt-2 form-label">Giờ bắt đầu</label>
                        <input v-model="listPhu.gio_bat_dau" type="time" class="form-control" placeholder="Nhập giờ bắt đầu" id="gioBatDau">
                        <label for="gioKetThuc" class="mt-2 form-label">Giờ kết thúc</label>
                        <input v-model="listPhu.gio_ket_thuc" type="time" class="form-control" placeholder="Nhập giờ kết thúc" id="gioKetThuc">
                        
                        
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="suaCaLam()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaCaLam" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa ca làm việc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa ca làm việc này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaCaLam()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";

export default {
    data(){
        return{
            list: [],
            listPhu: {
                id: '',
                ten_ca: '',
                gio_bat_dau: '',
                gio_ket_thuc: '',

            },
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        loadData(){
            axios.get('https://bek26.deloydz.io.vn/api/admin/ca-lam-viec/get-data')
            .then((response) => {
                this.list = response.data.data;
            })
            .catch((error) => {
                console.error(error);
            });
        },
        resetForm(){
            this.listPhu = {
                id: '',
                ten_ca: '',
                gio_bat_dau: '',
                gio_ket_thuc: '',
            };
        },  
        ganDuLieu(value){
            this.listPhu={...value};
        },
        xoaCaLam(){
            this.list = this.list.filter(item => item.id !== this.listPhu.id);
            this.resetForm();
        },
        themCaLam(){
            if (!this.listPhu.ten_ca || !this.listPhu.gio_bat_dau || !this.listPhu.gio_ket_thuc) {
                alert('Vui lòng nhập đầy đủ thông tin ca làm việc!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công ca làm việc!');
            this.resetForm();
        },
        suaCaLam(){
            if (!this.listPhu.ten_ca || !this.listPhu.gio_bat_dau || !this.listPhu.gio_ket_thuc) {
                alert('Vui lòng nhập đầy đủ thông tin ca làm việc!');
                return;
            }
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Sửa thành công ca làm việc!');
                    break;
                }
            }
            this.resetForm();
        },
    }
}
</script>
<style></style>