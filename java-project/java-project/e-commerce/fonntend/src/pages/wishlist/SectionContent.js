import React from "react";
const SectionContent=()=>(
    <section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
		<a class="list-group-item" href="page-profile-main.html"> Tổng quan về tài khoản </a>
			<a class="list-group-item" href="address"> Địa chỉ </a>
			<a class="list-group-item" href="page-profile-orders.html"> Đơn hàng </a>
			<a class="list-group-item" href="page-profile-wishlist.html"> Danh sách yêu thích </a>
			<a class="list-group-item active" href="page-profile-seller.html"> Mặt hàng </a>
			<a class="list-group-item" href="page-profile-setting.html"> Cài đặt </a>
			<a class="list-group-item" href="page-index-1.html"> Đăng xuất </a>
		</nav>
	</aside> 
	<main class="col-md-9">

		<article class="card">
			<div class="card-body">

		<div class="row">
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/l3.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Bông tai</a>
							<p class="price mb-2">400.000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>  

				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/q2.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title"> Bông tai </a>
							<p class="price mb-2">290.000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>

				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/H4.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title"> Bông tai </a>
							<p class="price mb-2">390000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/l1.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title"> Bông tai </a>
							<p class="price mb-2">390000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/l3.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Bông tai</a>
							<p class="price mb-2">400000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>  
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/l3.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Bông tai</a>
							<p class="price mb-2">400000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>  
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/l3.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Bông tai</a>
							<p class="price mb-2">400000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>  
				<div class="col-md-6">
					<figure class="itemside mb-4">
						<div class="aside"><img src={require("../../assets/images/items/l3.jpg")} class="border img-md"/></div>
						<figcaption class="info">
							<a href="#" class="title">Bông tai</a>
							<p class="price mb-2">400000 vnđ</p>
							<a href="order" class="btn btn-secondary btn-sm"> Thêm vào giỏ hàng </a>
							<a href="#" class="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i class="fa fa-times"></i> </a>
						</figcaption>
					</figure>
				</div>  
			</div> 
			</div>
		</article>


	</main>
</div>

</div> 
</section>
)
export default SectionContent