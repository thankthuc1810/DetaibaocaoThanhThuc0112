import React from "react"
const Section2=()=>(
<section class="section-name padding-y bg">
<div class="container">

<div class="row">
	<div class="col-md-8">
		<h5 class="title-description">Mô tả</h5>
		<p>
			Phụ kiện trang sức mang đến sự mới mẻ với xu hướng của hiện nay , mang đến
			sự bùng nổ trong phụ kiện trang sức hiện nay. 
		</p>
		<ul class="list-check">
		<li>Bạc nguyên chất</li>
		<li>Khối lượng: 320gam</li>
		<li>Nhỏ gọn tiện dụng</li>
		<li>Đặt hàng theo yêu cầu khách hàng</li>
		<li>Có sẵn theo yêu cầu thực hiện</li>
		</ul>

		<h5 class="title-description">Thông số</h5>
		<table class="table table-bordered">
			<tr> <th colspan="2">Thông số cơ bản</th> </tr>
			<tr> <td>Chất lượng</td><td>Bạc nguyên chất</td> </tr>
			<tr> <td>	Số vùng</td><td>2</td> </tr>
			<tr> <td> Kết nối	</td> <td> <i class="fa fa-check text-success"></i> Có </td></tr>

			<tr> <th colspan="2">Kích thước</th> </tr>
			<tr> <td>Chiều rộng</td><td>500mm</td> </tr>
			<tr> <td>Chiều sâu</td><td>400mm</td> </tr>
			<tr> <td>Chiều cao	</td><td>700mm</td> </tr>

			<tr> <th colspan="2">Vật liệu</th> </tr>
			<tr> <td>Bạc</td><td>Không phai</td> </tr>
			<tr> <td>Kim cương</td><td>Bền bỉ</td> </tr>

			<tr> <th colspan="2">Kết nối</th> </tr>
			<tr> <td>Người dùng</td><td>Phụ kiện</td> </tr>
			<tr> <td>Khách hàng</td><td>Trang sức</td> </tr>

		</table>
	</div> 
	
	<aside class="col-md-4">

		<div class="box">
		
		<h5 class="title-description">Tệp</h5>
			<p>
				LMẫu phụ kiện trang sức phù hợp với mọi lứa tuổi hiện nay, mang tính chất nhẹ nhàng gọn gàng những
				cũng không thiếu phần quái phái , sản phẩm đã đến nhiều khách hàng và đã có 
				rất nhiều đáng giá tính cực !
			</p>

    <h5 class="title-description">Video</h5>
      

    <article class="media mb-3">
      <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/j1.jpg")}/></a>
      <div class="media-body">
        <h6 class="mt-0"><a href="#">Cách sử dụng mục này</a></h6>
        <p class="mb-2"> How to use this item  </p>
      </div>
    </article>

    <article class="media mb-3">
      <a href="#"><img class="img-sm mr-3"  src={require("../../assets/images/posts/j2.jpg")}/></a>
      <div class="media-body">
        <h6 class="mt-0"><a href="#">Mẹo giữ tốt sản phẩm</a></h6>
        <p class="mb-2"> Tips for keeping products good </p>
      </div>
    </article>

    <article class="media mb-3">
      <a href="#"><img class="img-sm mr-3"  src={require("../../assets/images/posts/j3.jpg")}/></a>
      <div class="media-body">
        <h6 class="mt-0"><a href="#">Mẹo giữ tốt sản phẩm</a></h6>
        <p class="mb-2"> Tips for keeping products good </p>
      </div>
    </article>
	</div> 
	</aside> 
</div> 

</div> 
</section>
)
export default Section2