<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-info ">
                        <h4 class="card-title text-white mt-2">Thêm nhà sản phẩm</h4>
                    </div>
                    <div class="card-body">

                        <label for="tenNhaCungCap" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" placeholder="Nhập tên sản phẩm" id="tenNhaCungCap">
                        
                        <label for="slugNhaCungCap" class="mt-2 form-label">Mô tả</label>
                        <textarea name="" id="" cols="10" rows="3" placeholder="Nhập mô tả" class="form-control"></textarea>
                        
                        <div class="mb-3"></div>
                    </div>
                    <div class="card-footer d-flex">
                        <button class="btn btn-primary text-white ms-auto">Thêm mới</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Sản Phẩm</h5>
                            <button class="btn btn-success">Xuất excel</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                           <div class="table-reponsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-dark text-light">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Tên Khu Vực</th>
                                        <th class="text-center">Mô Tả</th>
                                        <th class="text-center">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <td class="text-center">1</td>
                                        <td class="text-center">Trong nhà</td>
                                        <td class="text-center">Khu vực bên trong nhà</td>
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