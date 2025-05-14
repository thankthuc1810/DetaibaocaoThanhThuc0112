import React from "react";
const Region =()=>(
<section class="padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Khu vực</h4>
</header>

<ul class="row mt-4">
	<li class="col-md col-6"><a href="#" class="icontext"> <img src={require("../../assets/images/icons/flags/CN.png")} class="icon-flag-sm"/> <span>Trung Quốc</span> </a></li>
	<li class="col-md col-6"><a href="https://iecs.vn/nuoc-duc/" class="icontext"><img src={require("../../assets/images/icons/flags/DE.png")} class="icon-flag-sm"/> <span>Đức</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"><img src={require("../../assets/images/icons/flags/AU.png")} class="icon-flag-sm"/> <span>ÚC</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"><img src={require("../../assets/images/icons/flags/RU.png")} class="icon-flag-sm"/> <span>Nga</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img src={require("../../assets/images/icons/flags/IN.png")} class="icon-flag-sm"/> <span>Ân Độ</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"><img src={require("../../assets/images/icons/flags/GB.png")} class="icon-flag-sm"/> <span>Nước Anh</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"><img src={require("../../assets/images/icons/flags/TR.png")} class="icon-flag-sm"/> <span>Thổ Nhĩ Kỳ</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img src={require("../../assets/images/icons/flags/UZ.png")} class="icon-flag-sm"/> <span>Uzbekistan</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <i class="mr-3 fa fa-ellipsis-h"></i> <span>Nhiều khu vực</span> </a></li>
</ul>
</section>
);
export default Region