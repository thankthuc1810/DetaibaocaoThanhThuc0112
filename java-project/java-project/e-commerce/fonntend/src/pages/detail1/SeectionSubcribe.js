import React from "react";
const SeectionSubcribe=()=>(
    <section class="padding-y-lg bg-light border-top">
<div class="container">

<p class="pb-2 text-center">Cung cấp các xu hướng sản phẩm mới nhất và tin tức được gởi đến hợp thư của bạn</p>

<div class="row justify-content-md-center">
  <div class="col-lg-4 col-sm-6">
<form class="form-row">
    <div class="col-8">
    <input class="form-control" placeholder="Your Email" type="email"/>
    </div> 
    <div class="col-4">
    <button type="submit" class="btn btn-block btn-warning"style={{background:"black"}}> <i   class="fa fa-envelope" href="register"></i> Đăng ký </button>
    </div> 
</form>
<small class="form-text"> Chúng tôi cam kết không chia sẻ gmail của bạn cho bên thứ 3. </small>
  </div> 
</div>
  

</div>
</section>
)
export default SeectionSubcribe