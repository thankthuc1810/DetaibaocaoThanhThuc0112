import React from "react"

const Seection1=()=>(

<section class="section-content bg-white padding-y">
<div class="container">


	<div class="row">
		<aside class="col-md-6">
<div class="card">
<article class="gallery-wrap"> 
	<div class="img-big-wrap">
	  <div> <a href="#"> <img src={require("../../assets/images/items/l2.jpg")} /></a></div>
	</div>
	<div class="thumbs-wrap">
	  <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/U9.jpg")} /></a>
	  <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/U7.jpg")} /></a>
	  <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/v5.jpg")} /></a>
	  <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/v3.jpg")} /></a>
	</div>
</article> 
</div>
		</aside>
		<main class="col-md-6">
<article class="product-info-aside">

<h2 class="title mt-3"> Mẫu Vòng Cỗ Bán Chạy Nhất </h2>

<div class="rating-wrap my-3">
	<ul class="rating-stars">
		<li class="stars-active"> 
			<i class="fa fa-star"></i> <i class="fa fa-star"></i> 
			<i class="fa fa-star"></i> <i class="fa fa-star"></i> 
			<i class="fa fa-star"></i> 
		</li>
		<li>
			<i class="fa fa-star"></i> <i class="fa fa-star"></i> 
			<i class="fa fa-star"></i> <i class="fa fa-star"></i> 
			<i class="fa fa-star"></i> 
		</li>
	</ul>
	<small class="label-rating text-muted">132 reviews</small>
	<small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 Đơn hàng </small>
</div> 

<div class="mb-3"> 
	<var class="price h4"> 399000 VNĐ</var> 
	<span class="text-muted">499000 VNĐ</span> 
</div>

<p> Mẫu phụ kiện trang sức phù hợp với mọi lứa tuổi hiện nay, mang tính chất nhẹ nhàng gọn gàng những
	cũng không thiếu phần quái phái , sản phẩm đã đến nhiều khách hàng và đã có 
	rất nhiều đáng giá tính cực ! </p>


<dl class="row">
  <dt class="col-sm-3">Nhà sản xuất</dt>
  <dd class="col-sm-9"><a href="#">Nhà cung cấp trang sức.</a></dd>

  <dt class="col-sm-3">Số bài viết</dt>
  <dd class="col-sm-9">180 bài viết</dd>

  <dt class="col-sm-3">Bảo hành</dt>
  <dd class="col-sm-9">2 Năm</dd>

  <dt class="col-sm-3">Ngày giao hàng</dt>
  <dd class="col-sm-9">3-4 Ngày</dd>

  <dt class="col-sm-3">Hàng có sẵn</dt>
  <dd class="col-sm-9">Còn hàng</dd>
</dl>

	<div class="form-row  mt-4">
		<div class="form-group col-md flex-grow-0">
			<div class="input-group mb-3 input-spinner">
			  <div class="input-group-prepend">
			    <button class="btn btn-light" type="button" id="button-plus"> + </button>
			  </div>
			  <input type="text" class="form-control" value="1"/>
			  <div class="input-group-append">
			    <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
			  </div>
			</div>
		</div> 
		<div class="form-group col-md">
			<a href="order"  class="btn  btn-primary" style={{background:"black"}}> 
				<i class="fas fa-shopping-cart"></i> <span class="text" style={{background:"black"}}>Thêm vào giỏ hàng</span> 
			</a>
			<a href="#" class="btn btn-light">
        <i class="fas fa-envelope"></i> <span class="text">Liên hệ với nhà cung cấp</span> 
			</a>
		</div> 
	</div>

</article> 
		</main> 
	</div> 




</div> 
</section>
)
export default Seection1