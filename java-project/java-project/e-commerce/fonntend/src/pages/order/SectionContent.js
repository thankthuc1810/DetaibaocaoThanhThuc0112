import React from "react";
const SectionContent=()=>(
    <section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
		<a class="list-group-item active" href="page-profile-main.html"> Tổng quan về tài khoản  </a>
			<a class="list-group-item" href="page-profile-address.html"> Địa chỉ </a>
			<a class="list-group-item" href="page-profile-orders.html"> Đơn hàng </a>
			<a class="list-group-item" href="page-profile-wishlist.html"> Danh sách yêu thích </a>
			<a class="list-group-item" href="page-profile-seller.html"> Mặt hàng bán chạy </a>
			<a class="list-group-item" href="page-profile-setting.html"> Cài đặt </a>
			<a class="list-group-item" href="page-index-1.html"> Đăng xuất </a>  
		</nav>
	</aside> 
	<main class="col-md-9">

		<article class="card mb-4">
		<header class="card-header">
			<a href="#" class="float-right"> <i class="fa fa-print"></i> In</a>
			<strong class="d-inline-block mr-3">Đặt hàng ID: 18102003</strong>
			<span>Ngày đặt hàng: Ngày 8 Tháng 8 năm 2023</span>
		</header>
		<div class="card-body">
			<div class="row"> 
				<div class="col-md-8">
					<h6 class="text-muted">Chuyển tới</h6>
					<p> Nguyễn Thanh Thức <br/>  
					Điên thoại +84858710959 Email: thucnguyen11233@gmail.com <br/>
			    	103 Tăng Nhơn Phú - Thủ Đức - TP.Hồ Chí Minh, <br/> 
			 		</p>
				</div>
				<div class="col-md-4">
					<h6 class="text-muted">Chi trả</h6>
					<span class="text-success">
						<i class="fab fa-lg fa-cc-visa"></i>
					    Visa  **** 1810  
					</span>
					<p>Tổng: 200000 vnđ <br/>
					Phí vận chuyển:  20000 vnđ <br/> 
					 <span class="b">Tổng cộng : 220000 vnđ   </span>
					</p>
				</div>
			</div> 
		</div> 
		<div class="table-responsive">
		<table class="table table-hover">
			<tbody><tr>
				<td width="65">
					<img src={require("../../assets/images/items/r2.jpg")} class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0">Tên sản phẩm </p>
					<var class="price text-muted"> 299000 vnđ</var>
				</td>
				<td> Seller <br/> Vòng tay </td>
				<td width="250"> <a href="cart" class="btn btn-outline-primary">Mua ngay</a> 
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">Tìm</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Trờ lại</a>
						 	<a href="#"  class="dropdown-item">Hủy đơn hàng</a>
						 </div>
					</div> 
				</td>
			</tr>
			<tr>
				<td>
					<img src={require("../../assets/images/items/g2.jpg")}class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0"> Lách  </p>
					<var class="price text-muted"> 500000 vnđ</var>
				</td>
				<td> Người bán <br/> ThankThuc shop </td>
				<td> 
					<a href="cart" class="btn btn-outline-primary">Mua ngay</a>
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">Tìm</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Trờ lại</a>
						 	<a href="#"  class="dropdown-item">Hủy đơn hàng</a>
						 </div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<img src={require("../../assets/images/items/l3.jpg")} class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0"> Lách tay </p>
					<var class="price text-muted">400000 vnđ</var>
				</td>
				<td> Người bán <br/> ThankThuc shop </td>
				<td> <a href="cart" class="btn btn-outline-primary">Mua ngay</a> 
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">Tìm</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Trờ lại</a>
						 	<a href="#"  class="dropdown-item">Hủy đơn hàng</a>
						 </div>
					</div>  
				</td>
			</tr>
		</tbody></table>
		</div> 
		</article> 

		<article class="card  mb-3">
			<div class="card-body">
				<h5 class="card-title mb-4"> Đơn hàng đã đặt gần đây </h5>	

				<div class="row">
				<div class="col-md-6">
					<figure class="itemside  mb-3">
						<div class="aside"><img src={require("../../assets/images/items/T7.jpg")} class="border img-sm"/></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 08.08.2023</time>
							<p> Vòng cổ thật là đẹp </p>
							<span class="text-success"> Đơn hàng đã được xác nhận </span>
						</figcaption>
					</figure>
				</div> 
				<div class="col-md-6">
					<figure class="itemside  mb-3">
						<div class="aside"><img src={require("../../assets/images/items/U7.jpg")} class="border img-sm"/></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 07.08.2019</time>
							<p> Trang sức vòng cổ </p>
							<span class="text-success">Đang giao hàng</span>
						</figcaption>
					</figure>
				</div> 
				<div class="col-md-6">
					<figure class="itemside mb-3">
						<div class="aside"><img src={require("../../assets/images/items/U9.jpg")} class="border img-sm"/></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 07.08.2019</time>
							<p> Nâng tầm cùng brand chúng tôi </p>
							<span class="text-success"> Đang giao hàng  </span>
						</figcaption>
					</figure>
				</div> 
			</div>

			</div> 
		</article> 


		<article class="card order-item mb-4">
		<header class="card-header">
			<a href="#" class="float-right"> <i class="fa fa-print"></i> In</a>
			<strong class="d-inline-block mr-3">Order ID: 15012503</strong>
			<span>Ngày đặt hàng : ngày 8 tháng 8 năm 2023</span>
		</header>
		<div class="card-body">
			<div class="row"> 
				<div class="col-md-8">
					<h6 class="text-muted">Chuyển tới</h6>
					<p> Thanh Thức <br/>  
					Điện thoại +84858710959 Email: thucnguyen11233.com <br/>
			    	Địa chỉ : 103 Tăng Nhơn Phú - Thủ Đức - TP.Hồ CHí Minh <br/> 
			    	
			 		</p>
				</div>
				<div class="col-md-4">
					<h6 class="text-muted">Chi tả</h6>
					<span class="text-success">
						<i class="fab fa-lg fa-cc-visa"></i>
					    Visa  **** 4216  
					</span>
					<p>Tổng phí: 400000 vnđ <br/>
					 Chi phí vận chuyển:  20000 vnđ <br/> 
					 <span class="b">Tổng:  420000 </span>
					</p>
				</div>
			</div>
		</div> 
		<div class="table-responsive">
		<table class="table table-hover">
			<tbody><tr>
				<td width="65">
					<img src={require("../../assets/images/items/l9.jpg")}class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0"> Nhẫn </p>
					<var class="price text-muted">200000</var>
				</td>
				<td> Người bán <br/> ThankThuc </td>
				<td width="250"> <a href="cart" class="btn btn-outline-primary">Mua ngay</a>  
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">Tìm</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Trờ lại</a>
						 	<a href="#"  class="dropdown-item">Hủy đơn hàng</a>
						 </div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<img src={require("../../assets/images/items/l8.jpg")} class="img-xs border"/>
				</td>
				<td> 
					<p class="title mb-0"> Vòng tay </p>
					<var class="price text-muted"> 700000</var>
				</td>
				<td> ThankThuc <br/> ThankThuc shop </td>
				<td> <a href="cart" class="btn btn-outline-primary">Mua ngay</a>  
					<div class="dropdown d-inline-block">
						 <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-outline-secondary">Tìm</a>
						 <div class="dropdown-menu dropdown-menu-right">
						 	<a href="#" class="dropdown-item">Trở lại</a>
						 	<a href="#"  class="dropdown-item">Hủy đơn hàng</a>
						 </div>
					</div>
				</td>
			</tr>
		</tbody></table>
		</div>
		</article>


	</main> 
</div>
</div>

</section>
)
export default SectionContent