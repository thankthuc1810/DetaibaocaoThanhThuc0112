import React from "react";
const Deal = () => (
    <section class="padding-bottom">
        <div class="card card-deal">
            <div class="col-heading content-body">
                <header class="section-heading">
                    <h3 class="section-title">Ưu đãi </h3>
                    <p>Phụ kiện trang sức</p>
                </header>
                <div class="timer">
                    <div> <span class="num">09</span> <small>Ngày</small></div>
                    <div> <span class="num">14</span> <small>Giờ</small></div>
                    <div> <span class="num">59</span> <small>Phút</small></div>
                    <div> <span class="num">02</span> <small>Giây</small></div>
                </div>
          
            <div class="row no-gutters items-wrap">
                <div class="col-md col-6">
                    <figure class="card-product-grid card-sm">
                        <a href="#" class="img-wrap">
                            <img src={require("../../assets/images/items/q3.jpg")} />
                        </a>
                        <div class="text-wrap p-3">
                            <a href="#" class="title">Vòng cổ</a>
                            <span class="badge badge-danger"> -20% </span>
                        </div>
                    </figure>
                </div>
                <div class="col-md col-6">
                    <figure class="card-product-grid card-sm">
                        <a href="#" class="img-wrap">
                            <img src={require("../../assets/images/items/T4.jpg")} />
                        </a>
                        <div class="text-wrap p-3">
                            <a href="#" class="title">Lách tay</a>
                            <span class="badge badge-danger"> -5% </span>
                        </div>
                    </figure>
                </div>
                <div class="col-md col-6">
                    <figure class="card-product-grid card-sm">
                        <a href="#" class="img-wrap">
                            <img src={require("../../assets/images/items/U6.jpg")} />
                        </a>
                        <div class="text-wrap p-3">
                            <a href="#" class="title">Nhẫn</a>
                            <span class="badge badge-danger"> -20% </span>
                        </div>
                    </figure>
                </div>
                <div class="col-md col-6">
                    <figure class="card-product-grid card-sm">
                        <a href="#" class="img-wrap">
                            <img src={require("../../assets/images/items/e1.jpg")} />
                        </a>
                        <div class="text-wrap p-3">
                            <a href="#" class="title">Hoa tai</a>
                            <span class="badge badge-danger"> -15% </span>
                        </div>
                    </figure>
                    </div>
                <div class="col-md col-6">
                    <figure class="card-product-grid card-sm">
                        <a href="#" class="img-wrap">
                            <img src={require("../../assets/images/items/e2.jpg")} />
                        </a>
                        <div class="text-wrap p-3">
                            <a href="#" class="title text-truncate">Cupble nhẫn</a>
                            <span class="badge badge-danger"> -10% </span>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
        </div>

    </section>
);
export default Deal