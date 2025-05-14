import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <header className="section-header">
                    <section className="header-main border-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-md-3">
                                    <a href="/" className="brand-wrap">
                                        <img src={require("../assets/images/avatars/c1.png")} alt="Logo" style={{ width: '80%' }} />
                                    </a>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-6">
                                    <form action="category7" className="search-header" style={{ borderColor: "black" }}>
                                        <div className="input-group w-100">
                                            <select className="custom-select border-right" name="category_name">
                                                <option value="category7">Tất cả sản phẩm</option>
                                                <option value="category1">Sản phẩm đặc biệt</option>
                                                <option value="comments">Sản phẩm tốt nhát</option>
                                                <option value="content">Sản phẩm mới nhất</option>
                                            </select>
                                            <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit" style={{ background: "black" }}>
                                                    <i className="fa fa-search"></i> Tìm kiếm
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-3">
                                    <div className="widgets-wrap float-md-right">
                                        <div className="widget-header mr-3">
                                            <a href="profile" className="widget-view">
                                                <div className="icon-area">
                                                    <i className="fa fa-user"></i>
                                                    <span className="notify">3</span>
                                                </div>
                                                <small className="text"> Hồ sơ </small>
                                            </a>
                                        </div>
                                        <div className="widget-header">
                                            <a href="order" className="widget-view">
                                                <div className="icon-area">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </div>
                                                <small className="text"> Giỏ hàng </small>
                                            </a>
                                        </div>
                                        <div className="widget-header mr-3">
                                            <a href="cart" className="widget-view">
                                                <div className="icon-area">
                                                    <i className="fa fa-store"></i>
                                                </div>
                                                <small className="text"> Đặt hàng </small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>

                {/* Navbar for categories and other links */}
                <nav className="navbar navbar-main navbar-expand-lg border-bottom">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                {/* Category Dropdown */}
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-bars text-muted mr-2"></i> Danh mục
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="category">Vòng Cỗ</Dropdown.Item>
                                        <Dropdown.Item href="category1">Lách Tay</Dropdown.Item>
                                        <Dropdown.Item href="category8">Nhẫn</Dropdown.Item>
                                        <Dropdown.Item href="category3">Bông Tai</Dropdown.Item>
                                        <Dropdown.Item href="category4">Vòng Chân</Dropdown.Item>
                                        <Dropdown.Item href="category5">Phụ Kiện Cặp Đôi</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <li className="nav-item">
                                    <a className="nav-link" href="offer">Ưu đãi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="category7">Danh mục</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="detail">Chi tiết</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="listing">Tất cả sản phẩm</a>
                                </li>
                            </ul>

                            {/* Authentication buttons */}
                            <ul className="navbar-nav ml-md-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="payments">Vận chuyển</a>
                                </li>
                                <li className="nav-item">
                                    <Button variant="primary">Đăng nhập</Button>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="register">Đăng Ký</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Ngôn ngữ</a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Tiếng Việt</a>
                                        <a className="dropdown-item" href="#">Tiếng Anh</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
