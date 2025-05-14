import React from "react";
const SectionContent =()=>(
    <section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
			<a class="list-group-item active" href="page-profile-main.html"> Tổng quan về tài khoản  </a>
			<a class="list-group-item" href="address"> Địa chỉ </a>
			<a class="list-group-item" href="wishlists"> Đơn hàng </a>
			<a class="list-group-item" href="category5"> Danh sách yêu thích </a>
			<a class="list-group-item" href="category"> Mặt hàng bán chạy </a>
			<a class="list-group-item" href="page-profile-setting.html"> Cài đặt </a>
			<a class="list-group-item" href="login"> Đăng Nhập </a>
		</nav>
	</aside>
	<main class="col-md-9">

		<article class="card mb-3">
			<div class="card-body">
				
				<figure class="icontext">
						<div class="icon">
							<img class="rounded-circle img-sm border" src={require("../../assets/images/posts/j2.jpg")}/>
						</div>
						<div class="text">
							<strong> Mr. ThankThức </strong> <br/> 
							<p class="mb-2"> thucnguyen11233@gmail.com  </p> 
							<a href="#" class="btn btn-light btn-sm">Chỉnh sửa</a>
						</div>
				</figure>
				<hr/>
				<p>
					<i class="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ của tôi:  
					 <br/>
					103 Tăng Nhơn Phú B - TP.Thủ Đức - TP.Hồ Chí Minh
					<a href="#" class="btn-link"> Chỉnh sửa</a>
				</p>

				

				<article class="card-group card-stat">
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title">36</h4>
							<span>Đơn hàng</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title">10</h4>
							<span>Danh sách yêu thích</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title">18</h4>
							<span>Đang chờ giao hàng</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title">92</h4>
							<span>Đơn hàng đã giao</span>
						</div>
					</figure>
				</article>
				

			</div>
		</article> 

		<article>
		<a href="category7" class="btn btn-outline-primary btn-block"> Xem tất cả đơn hàng <i class="fa fa-chevron-down"></i>  </a>
		</article>

	</main> 
</div>

</div> 
</section>
)
export default SectionContent