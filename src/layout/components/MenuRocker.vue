<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
						data-bs-toggle="dropdown">
						<div class="parent-icon"><i class='bx bx-home-circle'></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
					<ul class="dropdown-menu">
						<li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
						</li>
						<li> <a class="dropdown-item" href="index2.html"><i
									class="bx bx-right-arrow-alt"></i>Alternate</a>
						</li>
						<li> <a class="dropdown-item" href="index3.html"><i
									class="bx bx-right-arrow-alt"></i>Graphical</a>
						</li>
					</ul>
				</li>
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
						data-bs-toggle="dropdown">
						<div class="parent-icon"><i class="fa-regular fa-circle-user"></i>
						</div>
						<div class="menu-title">Quản lý tài khoản</div>
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="/admin/khach-hang"><i class="bx bx-right-arrow-alt"></i>Khách hàng</a></li>
						<li><a class="dropdown-item" href="/admin/quan-ly-san-pham"><i class="bx bx-right-arrow-alt"></i>Sản Phẩm</a></li>
					
					</ul>
				</li>
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
						data-bs-toggle="dropdown">
						<div class="parent-icon"><i class="fa-solid fa-table"></i>
						</div>
						<div class="menu-title">Quản lý bàn</div>
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="/admin/khach-hang"><i class="bx bx-right-arrow-alt"></i>Bàn</a></li>
						<li><a class="dropdown-item" href="/admin/quan-ly-san-pham"><i class="bx bx-right-arrow-alt"></i>Khu vực bàn</a></li>
					
					</ul>
				</li>
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
						data-bs-toggle="dropdown">
						<div class="parent-icon"><i class="fa-solid fa-box"></i></div>
						<div class="menu-title">Quản lý sản phẩm</div>
					</a>
					<ul class="dropdown-menu">
						
						<li><a class="dropdown-item" href="/admin/nha-cung-cap"><i class="bx bx-right-arrow-alt"></i>Nhà
								cung cấp</a></li>
						<li><a class="dropdown-item" href="/admin/quan-ly-danh-muc"><i class="bx bx-right-arrow-alt"></i>Danh mục</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a href="/admin/quan-ly-chuc-vu" class="nav-link">
						<div class="parent-icon"><i class="fa-solid fa-briefcase"></i>
						</div>
						<div class="menu-title text-nowrap">Quản lý ca làm</div>
					</a>

				</li>
				<li class="nav-item">
					<a href="/admin/quan-ly-chuc-vu" class="nav-link">
						<div class="parent-icon"><i class="fa-solid fa-desktop"></i>
						</div>
						<div class="menu-title text-nowrap">Quản lý chức vụ</div>
					</a>

				</li>
				
				<li class="nav-item">
					<a class="nav-link" href="/admin/khu-vuc">
						<div class="parent-icon"><i class="fa-solid fa-receipt"></i>
						</div>
						<div class="menu-title text-nowrap">Hóa đơn</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/admin/khu-vuc">
						<div class="parent-icon"><i class="fa-solid fa-ticket"></i>
						</div>
						<div class="menu-title text-nowrap">Voucher</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/admin/khu-vuc">
						<div class="parent-icon"><i class="fa-solid fa-ticket-simple"></i>
						</div>
						<div class="menu-title text-nowrap">Phiếu nhập kho</div>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>