import React from "react";
import background from '../../assets/images/banners/banner1.jpg'
import background2 from '../../assets/images/banners/banner7.jpg'

const SectionContent=()=>(

	<section class="section-content bg-white padding-y">
		{/* <div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="card-banner overlay-gradient"
						style={{minHeight:"300px",backgroundImage:  "url:../../../../assets/images/banners/banner1.jpg"}}>
						<div class="card-img-overlay white">
							<h3 class="card-title">Phụ kiện trang sức <br/> Giảm đến 30%</h3>
							<p class="card-text" style={{maxWidth: "400px"}}>
								
								</p>
							<a href="" class="btn btn-warning">Tìm hiểu thêm</a>
						</div>
					</div> 
				</div>
					<div class="card-banner"
								style={{Height:"320px",backgroundImage: "url:../../../../assets/images/banners/banner8.jpg"}}>
						<article class="caption bottom">
							<h5 class="card-title">Watches</h5>
							<p>No matter how far along you are in your sophistication as an amateur.</p>
						</article>
					</div>
				</div>
			</div> */}
		

			<div class="row">
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %10</b>
							<img src={require("../../assets/images/items/g1.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Vòng tay</a>
							<div class="price-wrap my-2">
								<span class="price"> 599000 vnđ</span>
								<del class="price-old"> 499000 vnđ</del>
							</div> 
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %20</b>
							<img src={require("../../assets/images/items/l5.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Vòng cổ</a>
							<div class="price-wrap my-2">
								<span class="price"> 799000 vnđ</span>
								<del class="price-old"> 599000 vnđ</del>
							</div>
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %10</b>
							<img src={require("../../assets/images/items/l3.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Vòng cổ</a>
							<div class="price-wrap my-2">
								<span class="price">699000 vnđ</span>
								<del class="price-old"> 499000 vnđ</del>
							</div> 
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %10</b>
							<img src={require("../../assets/images/items/t1.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Lách tay</a>
							<div class="price-wrap my-2">
								<span class="price"> 899000 vnđ</span>
								<del class="price-old"> 799000 vnđ</del>
							</div>
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %30</b>
							<img src={require("../../assets/images/items/q1.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Vòng tay</a>
							<div class="price-wrap my-2">
								<span class="price"> 399000 vnđ</span>
								<del class="price-old"> 499000 vnđ</del>
							</div> 
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">SAVE %30</b>
							<img src={require("../../assets/images/items/q2.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Nhẫn</a>
							<div class="price-wrap my-2">
								<span class="price">300000 vnđ</span>
								<del class="price-old">350000 vnđ</del>
							</div> 
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %10</b>
							<img src={require("../../assets/images/items/q3.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Nhẫn</a>
							<div class="price-wrap my-2">
								<span class="price"> 590000 vnđ</span>
								<del class="price-old"> 699000 vnđ</del>
							</div> 
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div>
				<div class="col-md-3">
					<article class="card card-product-grid">
						<div class="img-wrap">
							<b class="badge badge-danger mr-1">Giảm %10</b>
							<img src={require("../../assets/images/items/q4.jpg")} alt=""/>
						</div>
						<div class="info-wrap">
							<a href="#" class="title">Vòng chân</a>
							<div class="price-wrap my-2">
								<span class="price"> 400000 vnđ</span>
								<del class="price-old"> 450000 vnđ</del>
							</div> 
							<a href="cart" class="btn btn-block btn-primary">Đặt hàng</a>
							<a href="order" class="btn btn-block btn-primary">Thêm vào giỏ hàng</a>
						</div>
					</article>
				</div> 
			</div> 
		

	</section>
)
export default SectionContent