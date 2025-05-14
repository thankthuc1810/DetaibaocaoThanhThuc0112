import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer class="section-footer">
                <section class="footer-bottom text-center"> </section>
                <footer class="section-footer bg-slide">
                    <div class="container">
                    
                 

                        <section class="footer-top padding-y-lg text-dark">
                            <div class="row">                             
                            <aside class="col-md">
    
                                    <h6 class="title">Theo Dõi Tôi Trên</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="https://www.facebook.com/thuc.nguyenthanh.501151"> <i class="fab fa-facebook"></i> Facebook </a></li>
                                        <li><a href="https://www.instagram.com/thanks.thuc_/"> <i class="fab fa-instagram"></i> Instagram </a></li>
                                        <li><a href="https://www.youtube.com/channel/UCaYPkadqU9Sp1s6Wq8yFbSg"> <i class="fab fa-youtube"></i> Youtube </a></li>
                                        
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Công ty</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">Giới Thiệu </a></li>
                                        <li> <a href="#">Liên hệ</a></li>
                                        <li> <a href="#">Cửa hàng</a></li>
                                        <li> <a href="#">Quy tắc điều khoản</a></li>
                                        <li> <a href="#">Điều khoản & chính sách riêng tư</a></li>
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Tư vấn khách hàng</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#">Liên hệ</a></li>
                                        <li> <a href="#">Trạng thái đơn hàng</a></li>
                                        <li> <a href="#">Thông tin đơn hàng</a></li>
                                        <li> <a href="#">Hoàn tiền</a></li>
                                        <li> <a href="#">Hỗ trợ khách hàng</a></li>
                                    </ul>
                                </aside>
                                <aside class="col-md col-6">
                                    <h6 class="title">Tài nguyên</h6>
                                    <ul class="list-unstyled">
                                        <li> <a href="#"> Trung tâm trợ giúp </a></li>
                                        <li> <a href="#"> Bán hàng online </a></li>
                                        <li> <a href="#"> Website thương mại điện tử </a></li>
                                        <li> <a href="#"> Blog </a></li>
                                        <li> <a href="#"> Hướng dẫn Ecommerce </a></li>

                                    </ul>
                                </aside>
                            </div> 
                        </section>	

                        <section class="footer-bottom text-center">

                            <p class="text-dark">Chính sách quyền riêng tư - Điều khoản sử dụng - Thông tin người dùng</p>
                            <p class="text-dark"> ShopThankThucTrangSuc - Bản quyền sở hữu Thầy Trần Nhật Nam </p>
                        
                        </section>
                    </div>
                </footer>
            </footer>
        );
    }
}
export default Footer