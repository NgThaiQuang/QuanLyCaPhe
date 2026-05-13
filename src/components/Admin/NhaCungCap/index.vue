<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm nhà cung cấp</h4>
                    </div>
                    <div class="card-body">

                        <label for="tenNhaCungCap" class="form-label">Tên nhà cung cấp</label>
                        <input type="text" class="form-control" placeholder="Nhập tên nhà cung cấp" id="tenNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Email</label>
                        <input type="text" class="form-control" placeholder="Nhập email" id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Người liên hệ</label>
                        <input type="text" class="form-control" placeholder="Nhập người liên hệ" id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Số điện thoại</label>
                        <input type="text" class="form-control" placeholder="Nhập số điện thoại" id="slugNhaCungCap">
                        <label for="slugNhaCungCap" class="mt-2 form-label">Địa chỉ</label>
                        <textarea name="" id="" cols="10" rows="3" placeholder="Nhập địa chỉ" class="form-control"></textarea>
                        <label for="" class="mt-2 form-label">Tình trạng</label>
                        <select class="form-select">
                            <option>Hoạt Động</option>
                            <option>Ngừng Hoạt Động</option>
                        </select>
                        <div class="mb-3"></div>
                    </div>
                    <div class="card-footer d-flex">
                        <button class="btn btn-primary text-white ms-auto">Thêm nhà cung cấp</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Nhà Cung Cấp</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                           <div class="table-reponsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-dark text-light">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Tên Nhà Cung Cấp</th>
                                        <th class="text-center">Email</th>
                                        <th class="text-center">Số điện thoại</th>
                                        <th class="text-center">Tình Trạng</th>
                                        <th class="text-center">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <td class="text-center">1</td>
                                        <td class="text-center">Admin</td>
                                        <td class="text-center">admin@example.com</td>
                                        <td class="text-center">0123456789</td>
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
<style >
    
</style>