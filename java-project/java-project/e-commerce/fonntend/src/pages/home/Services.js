import React from "react";
const Service =()=>(
<section class="padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Phụ Kiện Yêu Thích</h4>
</header>

<div class="row">
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src={require("../../assets/images/items/g2.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Vòng cổ</h6>
		    <p class="small text-uppercase text-muted">Theo dỏi đơn hàng</p>
		  </div>
		</article> 
	</div> 
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src={require("../../assets/images/items/l2.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title"> Vòng nhẫn </h6>
		    <p class="small text-uppercase text-muted">Theo dỏi đơn hàng</p>
		  </div>
		</article> 
	</div>
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src={require("../../assets/images/items/g1.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Lách tay</h6>
		    <p class="small text-uppercase text-muted">Theo dỏi đơn hàng</p>
		  </div>
		</article>
	</div> 
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		 <img src={require("../../assets/images/items/l3.jpg")} class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Lách</h6>
		    <p class="small text-uppercase text-muted">Theo dỏi đơn hàng</p>
		  </div>
		</article>
	</div> 
</div> 

</section>
);
export default Service