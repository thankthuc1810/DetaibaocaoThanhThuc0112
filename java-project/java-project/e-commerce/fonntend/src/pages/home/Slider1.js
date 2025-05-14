import React from "react";
import "../../assets/js/bootstrap.bundle.min.js";
const Slider1 =()=>(
    <section class="section-main padding-y">
<main class="card">
	<div class="card-body">

<div class="row">
	<aside class="col-lg col-md-3 flex-lg-grow-0">
		<nav class="nav-home-aside">
			<h6 class="title-category"> Danh mục sản phẩm <i class="d-md-none icon fa fa-chevron-down"></i></h6>
			<ul class="menu-category">
				<li><a href="category8">Nhẫn</a></li>
				<li><a href="category">Vòng cổ</a></li>
				<li><a href="category1"> Lách tay </a></li>
				<li><a href="category3">Bông tai</a></li>
				<li><a href="category4">Vòng chân</a></li>
				<li><a href="Category5">phụ kiện cupble</a></li>
				<li class="has-submenu"><a href="#">Các sản phẩm khác</a>
					<ul class="submenu">
						<li><a href="category">Trang sức yêu thích</a></li>
						<li><a href="category1">Trang sức nỗi bật</a></li>
						<li><a href="category3">Trang sức xu hướng</a></li>
						<li><a href="category4">Trang sức bán chạy nhất</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	</aside> 
	<div class="col-md-9 col-xl-7 col-lg-7">


<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1_indicator" data-slide-to="1" class=""></li>
    <li data-target="#carousel1_indicator" data-slide-to="2" class=""></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item carousel-item-next carousel-item-left">

      <img src={require("../../assets/images/banners/T5.jpg")} alt="First slide"/> 
    </div>
    <div class="carousel-item">
     <img src={require("../../assets/images/banners/T3.jpg")} alt="First slide"/> 
    </div>
    <div class="carousel-item active carousel-item-left">
    <img src={require("../../assets/images/banners/T2.jpg")} alt="First slide"/> 
    </div>
  </div>

  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Trước</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Kế tiếp</span>
  </a>
</div> 


	</div> 
	<div class="col-md d-none d-lg-block flex-grow-1">
		<aside class="special-home-right">
			<h6 class="bg-blue text-center text-white mb-0 p-2"style={{background:"black"}}>Danh mục phổ biến</h6>
			
			<div class="card-banner border-bottom">
			  <div class="py-3" >
			    <h6 class="card-title">Vòng tay</h6>
			    <a href="category1" class="btn btn-secondary btn-sm" style={{background:"black"}}> Xem</a>
			  </div> 
			  <img src={require("../../assets/images/items/q1.jpg")} height="80" class="img-bg"/>
			</div>

			<div class="card-banner border-bottom">
			  <div class="py-3" >
			    <h6 class="card-title"> Vòng cổ </h6>
			    <a href="category" class="btn btn-secondary btn-sm" style={{background:"black"}}> Xem</a>
			  </div> 
			   <img src={require("../../assets/images/items/l5.jpg")} height="80" class="img-bg"/>
			</div>

			<div class="card-banner border-bottom">
			  <div class="py-3" >
			    <h6 class="card-title">Vòng chân</h6>
			    <a href="category4" class="btn btn-secondary btn-sm" style={{background:"black"}}> Xem </a>
			  </div> 
			  <img src={require("../../assets/images/items/l3.jpg")} height="80" class="img-bg"/>
			</div>

		</aside>
	</div> 
</div>

	</div> 
</main> 

</section>
);
export default Slider1