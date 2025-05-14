import React from "react";
import "../../assets/js/bootstrap.bundle.min.js";
const Slider =()=>(
    <section class="section-main padding-y">
<main class="card">
	<div class="card-body">
<div class="row"><div class="carousel-item active carousel-item">
    <img src={require("../../assets/images/banners/thuc1.jpg")} style={{width:"1340px"}} alt="First slide"/> 
    </div>


	
	<div class="col-md-9 col-xl-7 col-lg-7">
<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item carousel-item-next carousel-item">

      <img src={require("../../assets/images/banners/j1.jpg")} alt="First slide"  /> 
    </div>
    <div class="carousel-item">
     <img src={require("../../assets/images/banners/T3.jpg")} alt="First slide"/> 
    </div>
    
  </div>
</div> 


	</div> 
	<div class="col-md d-none d-lg-block flex-grow-1">
		
	</div> 
</div>

	</div> 
</main> 

</section>
);
export default Slider