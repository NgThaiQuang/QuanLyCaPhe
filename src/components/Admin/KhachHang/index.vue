<template>
    <div class="container">
        <div class="row">

            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-info ">
                        <div class="align-text-center justify-content-between text-nowrap d-flex">
                            <h5 class="card-title text-white mt-2">Danh Sách Khách Hàng</h5>
                            <button class="btn btn-light">+Thêm mới</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="table-reponsive">
                                <table class="table table-striped table-bordered">
                                    <thead class="bg-dark text-light">
                                        <th class="text-center">#</th>
                                        <th class="text-center">Tên Khách Hàng</th>
                                        <th class="text-center">Email</th>
                                        <th class="text-center">Số Điện Thoại</th>
                                        <th class="text-center">Tình Trạng</th>
                                        <th class="text-center">Kích hoạt</th>
                                        <th class="text-center">Hành Động</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">John Doe</td>
                                            <td class="text-center">john.doe@example.com</td>
                                            <td class="text-center">0123456789</td>

                                            <td class="text-center">
                                                <button class="btn btn-success w-100">Hoạt Động</button>
                                            </td>
                                            <td class="text-center">
                                                <button class="btn btn-primary w-100">Đã Kích hoạt</button>
                                            </td>
                                            <td class="text-center d-flex gap-2 justify-content-center">
                                                <button class="btn btn-primary">Sửa</button>
                                                <button class="btn btn-danger">Xóa</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td class="text-center">Jane Smith</td>
                                            <td class="text-center">jane.smith@example.com</td>
                                            <td class="text-center">0987654321</td>

                                            <td class="text-center">
                                                <button class="btn btn-danger w-100">Không Hoạt Động</button>
                                            </td>
                                            <td class="text-center">
                                                <button class="btn btn-warning w-100">Chưa Kích hoạt</button>
                                            </td>
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
<style></style>