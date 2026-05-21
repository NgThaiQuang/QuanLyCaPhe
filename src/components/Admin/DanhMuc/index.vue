<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm danh mục</h4>
                    </div>
                    <div class="card-body">

                        <label for="tenDanhMuc" class="form-label">Tên danh mục</label>
                        <input v-model="listPhu.ten_danh_muc" type="text" class="form-control" placeholder="Nhập tên danh mục" id="tenDanhMuc">
                        <label for="slugDanhMuc" class="mt-2 form-label">Slug Danh Mục</label>
                        <input v-model="listPhu.slug_danh_muc" type="text" class="form-control" placeholder="Nhập slug" id="slugDanhMuc">
                        <label for="moTa" class="mt-2 form-label">Icon Danh Mục</label>
                        <input v-model="listPhu.icon_danh_muc" type="text" class="form-control" placeholder="Nhập icon" id="moTa">
                        
                        
                        <label for="tinhTrang" class="mt-2 form-label">Tình trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select" id="tinhTrang">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Ngừng Hoạt Động</option>
                        </select>
                        <label for="danhMucCha" class="mt-2 form-label">Danh mục cha</label>
                        <input v-model="listPhu.id_danh_muc_cha" type="text" class="form-control" placeholder="Nhập danh mục cha" id="danhMucCha">
                        <div class="mb-3"></div>
                    </div>
                    <div class="card-footer d-flex">
                        <button class="btn btn-primary text-white ms-auto" @click="themDanhMuc">+ Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Danh Mục</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                           <div class="table-responsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-secondary text-light">
                                        <th class="text-center py-3">#</th>
                                        <th class="text-center py-3">Tên Danh Mục</th>
                                        <th class="text-center py-3">Slug D.Mục</th>
                                        <th class="text-center py-3">Icon D.Mục</th>
                                        <th class="text-center py-3">Tình Trạng</th>
                                        <th class="text-center py-3">D.Mục Cha</th>
                                        <th class="text-center py-3">Hành Động</th>
                                    </thead>
                                    <tbody class="text-nowrap align-middle">
                                        <tr v-for="(value, index) in list" :key="index">
                                            <td class="text-center">{{ index + 1 }}</td>
                                            <td class="text-center">{{ value.ten_danh_muc }}</td>
                                            <td class="text-center">{{ value.slug_danh_muc }}</td>
                                            <td class="text-center"><i :class="
                                                value.icon_danh_muc=='coffee' ? 'fas fa-coffee' : 
                                                value.icon_danh_muc=='leaf' ? 'fas fa-leaf' : 
                                                value.icon_danh_muc=='glass' ? 'fas fa-glass-water' :
                                                value.icon_danh_muc=='apple' ? 'fas fa-apple' :
                                                value.icon_danh_muc=='coffee-machine' ? 'fas fa-mug-hot' :
                                                value.icon_danh_muc=='cup' ? 'fas fa-glass-water' :
                                                value.icon_danh_muc=='snowflake' ? 'fas fa-snowflake' :
                                                value.icon_danh_muc=='bottle' ? 'fas fa-apple-whole' :
                                                value.icon_danh_muc=='plus' ? 'fas fa-plus' : 'fas fa-question'
                                                "></i></td>
                                            <td class="text-center">
                                                <button class="btn w-100"
                                                :class="value.tinh_trang==1?'btn-success':'btn-secondary'">
                                                    {{ value.tinh_trang == 1 ? 'Hoạt Động' : 'Ngừng Hoạt Động' }}
                                                </button>
                                            </td>
                                            <td class="text-center">{{ value.id_danh_muc_cha ? value.id_danh_muc_cha : 'Không có' }}</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary" @click="ganDuLieu(value)" data-bs-toggle="modal" data-bs-target="#modalSuaDanhMuc">Sửa</button>
                                                <button @click="ganDuLieu(value)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalXoaDanhMuc">Xóa</button>
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
    <div class="modal fade" id="modalSuaDanhMuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Sửa danh mục</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="tenDanhMuc" class="form-label">Tên danh mục</label>
                        <input v-model="listPhu.ten_danh_muc" type="text" class="form-control" placeholder="Nhập tên danh mục" id="tenDanhMuc">
                        <label for="slugDanhMuc" class="mt-2 form-label">Slug Danh Mục</label>
                        <input v-model="listPhu.slug_danh_muc" type="text" class="form-control" placeholder="Nhập slug" id="slugDanhMuc">
                        <label for="moTa" class="mt-2 form-label">Icon Danh Mục</label>
                        <input v-model="listPhu.icon_danh_muc" type="text" class="form-control" placeholder="Nhập icon" id="moTa">
                        
                        
                        <label for="tinhTrang" class="mt-2 form-label">Tình trạng</label>
                        <select v-model="listPhu.tinh_trang" class="form-select" id="tinhTrang">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Ngừng Hoạt Động</option>
                        </select>
                        <label for="danhMucCha" class="mt-2 form-label">Danh mục cha</label>
                        <input v-model="listPhu.id_danh_muc_cha" type="text" class="form-control" placeholder="Nhập danh mục cha" id="danhMucCha">
                        <div class="mb-3"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button @click="suaDanhMuc()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalXoaDanhMuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận xóa danh mục</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa danh mục này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaDanhMuc()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
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
                ten_danh_muc: '',
                slug_danh_muc: '',
                icon_danh_muc: '',
                tinh_trang: '1',
                id_danh_muc_cha: '',
            },
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        loadData(){
            axios.get('https://bek26.deloydz.io.vn/api/admin/danh-muc/get-data')
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
                ten_danh_muc: '',
                slug_danh_muc: '',
                icon_danh_muc: '',
                tinh_trang: '1',
                id_danh_muc_cha: '',
            };
        },  
        ganDuLieu(value){
            this.listPhu={...value};
        },
        xoaDanhMuc(){
            this.list = this.list.filter(item => item.id !== this.listPhu.id);
            this.resetForm();
        },
        themDanhMuc(){
            if (!this.listPhu.ten_danh_muc || !this.listPhu.slug_danh_muc) {
                alert('Vui lòng nhập đầy đủ thông tin danh mục!');
                return;
            }
            this.list.push({ ...this.listPhu });
            alert('Thêm thành công danh mục!');
            this.resetForm();
        },
        suaDanhMuc(){
            if (!this.listPhu.ten_danh_muc || !this.listPhu.slug_danh_muc) {
                alert('Vui lòng nhập đầy đủ thông tin danh mục!');
                return;
            }
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === this.listPhu.id) {
                    this.list[i] = { ...this.listPhu };
                    alert('Sửa thành công danh mục!');
                    break;
                }
            }
            this.resetForm();
        },
    }
}
</script>
<style></style>