import React from "react";
const Request = ()=>(
<section class="padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Yêu Cầu</h4>
</header>

<div class="row">
	<div class="col-md-8">
<div class="card-banner banner-quote overlay-gradient"> 
<img src={require("../../assets/images/banners/thuc2.jpg")} alt="" />
  <div class="card-img-overlay white">
    <h3 class="card-title">Công Ty Cổ Phần Trang Sức Thủ Đức</h3>
    <p class="card-text" > Uy tín tạo nên thương hiệu cam kết quý khách trong mọi sản phẩm </p>
    <a href="" class="btn btn-primary rounded-pill">Tìm Hiểu Thêm</a>
  </div>
</div>
	</div> 
	<div class="col-md-4">

<div class="card card-body">
	<h4 class="title py-3">Yêu Cầu - Báo Giá</h4>
	<form>
		<div class="form-group">
			<input class="form-control" name="" placeholder="Tìm kiếm " type="text"/>
		</div>
		<div class="form-group">
			<div class="input-group">
				<input class="form-control" placeholder="Số lượng" name="" type="text"/>
				
				<select class="custom-select form-control">
					<option>Nhẫn</option>
					<option>Lách tay</option>
					<option>Bông Tai</option>
					<option>Vòng cổ</option>
				</select>
			</div>
		</div>
		<div class="form-group text-muted">
			<p> Chọn mẫu</p>
			<label class="form-check form-check-inline">
			  <input class="form-check-input" type="checkbox" value="option1"/>
			   <span class="form-check-label">Yêu cầu giá</span>
			</label>
			<label class="form-check form-check-inline">
			  <input class="form-check-input" type="checkbox" value="option2"/>
			  <dspaniv class="form-check-label"> Yêu cầu mẫu
			</dspaniv></label>
		</div>
		<div class="form-group">
			<button class="btn btn-warning">Yêu cầu giá</button>
		</div>
	</form>
</div>

	</div> 
</div> 
</section>
);
export default Request