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
                        <input type="text" class="form-control" placeholder="Nhập tên danh mục" id="tenDanhMuc">
                        <label for="slugDanhMuc" class="mt-2 form-label">Slug Danh Mục</label>
                        <input type="text" class="form-control" placeholder="Nhập slug" id="slugDanhMuc">
                        <label for="moTa" class="mt-2 form-label">Icon Danh Mục</label>
                        <input type="text" class="form-control" placeholder="Nhập icon" id="moTa">
                        
                        
                        <label for="tinhTrang" class="mt-2 form-label">Tình trạng</label>
                        <select class="form-select" id="tinhTrang">
                            <option>Hoạt Động</option>
                            <option>Ngừng Hoạt Động</option>
                        </select>
                        <label for="danhMucCha" class="mt-2 form-label">Danh mục cha</label>
                        <input type="text" class="form-control" placeholder="Nhập danh mục cha" id="danhMucCha">
                        <div class="mb-3"></div>
                    </div>
                    <div class="card-footer d-flex">
                        <button class="btn btn-primary text-white ms-auto">+ Thêm mới</button>
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
                           <div class="table-reponsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-dark text-light">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Tên Danh Mục</th>
                                        <th class="text-center">Slug Danh Mục</th>
                                        <th class="text-center">Icon Danh Mục</th>
                                        <th class="text-center">Tình Trạng</th>
                                        <th class="text-center">D.Mục Cha</th>
                                        <th class="text-center">Hành Động</th>
                                    </thead>
                                    <tbody class="text-nowrap">
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">Admin</td>
                                            <td class="text-center">admin</td>
                                            <td class="text-center"><i class="fa-solid fa-phone"></i></td>
                                            <td class="text-center">
                                                <button class="btn btn-success w-100">Hoạt Động</button>
                                            </td>
                                            <td class="text-center">Không có</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary">Sửa</button>
                                                <button class="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td class="text-center">Admin</td>
                                            <td class="text-center">admin</td>
                                            <td class="text-center"><i class="fa-solid fa-phone"></i></td>
                                            <td class="text-center">
                                                <button class="btn btn-success w-100">Hoạt Động</button>
                                            </td>
                                            <td class="text-center">Không có</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary">Sửa</button>
                                                <button class="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">3</td>
                                            <td class="text-center">Admin</td>
                                            <td class="text-center">admin</td>
                                            <td class="text-center"><i class="fa-solid fa-phone"></i></td>
                                            <td class="text-center">
                                                <button class="btn btn-success w-100">Hoạt Động</button>
                                            </td>
                                            <td class="text-center">Không có</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary">Sửa</button>
                                                <button class="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">4</td>
                                            <td class="text-center">Admin</td>
                                            <td class="text-center">admin</td>
                                            <td class="text-center"><i class="fa-solid fa-phone"></i></td>
                                            <td class="text-center">
                                                <button class="btn btn-success w-100">Hoạt Động</button>
                                            </td>
                                            <td class="text-center">Không có</td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary">Sửa</button>
                                                <button class="btn btn-danger">Xóa</button>
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
tbody td {
    text-align: center;
}
</style>