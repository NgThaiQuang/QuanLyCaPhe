<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm chức vụ</h4>
                    </div>
                    <div class="card-body">

                        <label for="tenChucVu" class="form-label">Tên chức vụ</label>
                        <input type="text" class="form-control" placeholder="Nhập tên chức vụ" id="tenChucVu">
                        <label for="slugChucVu" class="mt-2 form-label">Slug chức vụ</label>
                        <input type="text" class="form-control" placeholder="Nhập slug chức vụ" id="slugChucVu">
                        <label for="" class="mt-2 form-label">Tình trạng</label>
                        <select class="form-select">
                            <option>Hoạt Động</option>
                            <option>Ngừng Hoạt Động</option>
                        </select>
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
                                        <td class="text-center">1</td>
                                        <td class="text-center">Admin</td>
                                        <td class="text-center">admin</td>
                                        <td class="text-center">
                                            <button class="btn btn-success w-100">Hoạt Động</button>
                                        </td>
                                        <td class="text-center d-flex gap-2 justify-content-center">
                                            <button class="btn btn-primary">Sửa</button>
                                            <button class="btn btn-danger">Xóa</button>
                                        </td>
                                    </tbody>
                                </table>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>